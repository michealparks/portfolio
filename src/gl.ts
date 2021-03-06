import type { Tick } from './types'

import {
  WebGLRenderer,
  ACESFilmicToneMapping,
  sRGBEncoding,
  Scene,
  PerspectiveCamera,
  HalfFloatType,
  AmbientLight,
  AudioListener,
  Clock,
  Fog
} from 'three'

import {
  EffectComposer,
  EffectPass,
  RenderPass,
  SMAAEffect,
  SMAAImageLoader,
  SMAAPreset,
  BloomEffect,
  KernelSize,
  NoiseEffect,
  BlendFunction,
  ChromaticAberrationEffect
  // @ts-ignore
} from 'postprocessing'

import Stats from '@drecom/stats.js'
import TWEEN from '@tweenjs/tween.js'

import {
  COLOR_AMBIENT_LIGHT,
  EXPOSURE,
  FAR,
  FOV,
  NEAR,
  SHADOWMAP,
  PASSIVE
} from './constants'

const renderer = new WebGLRenderer({
  antialias: false,
  depth: false,
  stencil: false,
  powerPreference: 'high-performance',
})

renderer.toneMapping = ACESFilmicToneMapping
renderer.toneMappingExposure = EXPOSURE
renderer.outputEncoding = sRGBEncoding
renderer.physicallyCorrectLights = true
renderer.shadowMap.enabled = true
renderer.shadowMap.type = SHADOWMAP
document.body.append(renderer.domElement)

let fn: Tick

const clock = new Clock()
const stats = new Stats({ maxFPS: Infinity, maxMem: Infinity })
const canvas = renderer.domElement
const composer = new EffectComposer(renderer, {
  frameBufferType: HalfFloatType
})

const effects = new Map()
const scene = new Scene()

scene.fog = new Fog('black', 10, 20)

let camera = new PerspectiveCamera(
  FOV,
  window.innerWidth / window.innerHeight,
  NEAR,
  FAR)

const listener = new AudioListener()
scene.add(camera)
camera.add(listener)

if (import.meta.env.MODE === 'development') {
  document.body.appendChild(stats.dom)
}

const intensity = 1.0
const ambientLight = new AmbientLight(COLOR_AMBIENT_LIGHT, intensity)
scene.add(ambientLight)

const init = async () => {
  const bloomEffect = new BloomEffect({
    height: 480,
    intensity: 1,
    kernelSize: KernelSize.VERY_LARGE
  })
  effects.set('bloom', bloomEffect)

  const smaaImageLoader = new SMAAImageLoader()

  const [search, area] = await new Promise((resolve) =>
    smaaImageLoader.load(resolve)
  )

  const smaaEffect = new SMAAEffect(search, area, SMAAPreset.ULTRA)
  effects.set('smaa', smaaEffect)

  // const noiseEffect = new NoiseEffect({
  //   blendFunction: BlendFunction.COLOR_BURN,
  // })
  // effects.set('noise', noiseEffect)

  const chromaticAberrationEffect = new ChromaticAberrationEffect()
  effects.set('chromaticAberrationEffect', chromaticAberrationEffect)

  composer.addPass(new RenderPass(scene, camera))
  composer.addPass(new EffectPass(
    camera,
    // noiseEffect,
    smaaEffect,
    bloomEffect,
    chromaticAberrationEffect
  ))

  window.addEventListener('blur', () => toggleRender(false), PASSIVE)
  window.addEventListener('focus', () => toggleRender(true), PASSIVE)
  document.addEventListener('visibilitychange', () => 
    toggleRender(document.visibilityState === 'visible'),
  PASSIVE)
}

const toggleRender = (active: boolean) => {
  if (active) {
    renderer.setAnimationLoop(render)
  } else {
    renderer.setAnimationLoop(null)
  }
}

const render = () => {
  if (import.meta.env.MODE === 'development') {
    stats.begin()
  }

  const dt = clock.getDelta()
  const elapsed = clock.getElapsedTime()

  TWEEN.update()

  fn(dt, elapsed)

  const dpi = Math.min(window.devicePixelRatio, 2)
  const width = canvas.clientWidth * dpi | 0
  const height = canvas.clientHeight * dpi | 0

  if (canvas.width === width && canvas.height === height) {
    composer.render(dt)
  } else {
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height, false)
    composer.setSize(width, height, false)
  }

  if (import.meta.env.MODE === 'development') {
    stats.end()
  }
}

const setAnimationLoop = (frame: Tick) => {
  fn = frame
  renderer.setAnimationLoop(render)
}

export const gl = {
  effects,
  stats,
  renderer,
  canvas,
  scene,
  camera,
  ambientLight,
  listener,
  init,
  setAnimationLoop
}
