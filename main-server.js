"use strict";function A(A){return A()}let n;function r(A){n=A}function e(A){(function(){if(!n)throw new Error("Function called outside component initialization");return n})().$$.on_mount.push(A)}const t={'"':"&quot;","'":"&#39;","&":"&amp;","<":"&lt;",">":"&gt;"};function a(A){return String(A).replace(/["'&<>]/g,A=>t[A])}function C(A,n){let r="";for(let e=0;e<A.length;e+=1)r+=n(A[e],e);return r}function o(A,n){if(!A||!A.$$render)throw"svelte:component"===n&&(n+=" this={...}"),new Error(`<${n}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);return A}let i;function s(e){function t(A,t,a,C){const o=n;r({$$:{on_destroy:i,context:new Map(o?o.$$.context:[]),on_mount:[],before_update:[],after_update:[],callbacks:Object.create(null)}});const s=e(A,t,a,C);return r(o),s}return{render:(n={},r={})=>{i=[];const e={title:"",head:"",css:new Set},a=t(e,n,{},r);return i.forEach(A),{html:a,css:{code:Array.from(e.css).map(A=>A.code).join("\n"),map:null},head:e.title+e.head}},$$render:t}}function l(A,n,r){return null==n||r&&!n?"":` ${A}${!0===n?"":`=${"string"==typeof n?JSON.stringify(a(n)):`"${n}"`}`}`}const c={code:"body{margin:0;font-family:'Nunito', sans-serif}*{box-sizing:border-box}h1{font-size:50px;font-size:max(min(50px, 6.0vmin), 36px)}h2{font-size:40px;font-size:max(min(40px, 3.0vmin), 30px)}p{font-size:16px;font-size:max(min(16px, 2.0vmin), 14px)}",map:'{"version":3,"file":"Stylesheet.svelte","sources":["Stylesheet.svelte"],"sourcesContent":["<style>\\r\\n  :global(body) {\\r\\n    margin: 0;\\r\\n    font-family: \'Nunito\', sans-serif;\\r\\n  }\\r\\n  :global(*) {\\r\\n    box-sizing: border-box;\\r\\n  }\\r\\n  :global(h1) {\\r\\n    font-size: 50px;\\r\\n    font-size: max(min(50px, 6.0vmin), 36px);\\r\\n  }\\r\\n  :global(h2) {\\r\\n    font-size: 40px;\\r\\n    font-size: max(min(40px, 3.0vmin), 30px);\\r\\n  }\\r\\n  :global(p) {\\r\\n    font-size: 16px;\\r\\n    font-size: max(min(16px, 2.0vmin), 14px); \\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AACU,IAAI,AAAE,CAAC,AACb,MAAM,CAAE,CAAC,CACT,WAAW,CAAE,QAAQ,CAAC,CAAC,UAAU,AACnC,CAAC,AACO,CAAC,AAAE,CAAC,AACV,UAAU,CAAE,UAAU,AACxB,CAAC,AACO,EAAE,AAAE,CAAC,AACX,SAAS,CAAE,IAAI,CACf,SAAS,CAAE,IAAI,IAAI,IAAI,CAAC,CAAC,OAAO,CAAC,CAAC,CAAC,IAAI,CAAC,AAC1C,CAAC,AACO,EAAE,AAAE,CAAC,AACX,SAAS,CAAE,IAAI,CACf,SAAS,CAAE,IAAI,IAAI,IAAI,CAAC,CAAC,OAAO,CAAC,CAAC,CAAC,IAAI,CAAC,AAC1C,CAAC,AACO,CAAC,AAAE,CAAC,AACV,SAAS,CAAE,IAAI,CACf,SAAS,CAAE,IAAI,IAAI,IAAI,CAAC,CAAC,OAAO,CAAC,CAAC,CAAC,IAAI,CAAC,AAC1C,CAAC"}'},p=s((A,n,r,e)=>(A.css.add(c),"")),m={red:"#ef9a9a",pink:"#F48FB1",purple:"#CE93D8",deeppurple:"#B39DDB",indigo:"#9FA8DA",blue:"#90CAF9",lightblue:"#81D4FA",cyan:"#80DEEA",teal:"#80CBC4",green:"#A5D6A7",yellow:"#FFF59D",amber:"#FFE082",orange:"#FFCC80",deeporange:"#FFAB91"},d=(A,n=1)=>`rgba(${parseInt(A.slice(1,3),16)}, ${parseInt(A.slice(3,5),16)}, ${parseInt(A.slice(5,7),16)}, ${n})`,h={code:"header.svelte-m0nk23{display:grid;grid-template-columns:1fr 3fr 1fr;padding:30px}section.svelte-m0nk23{position:relative;display:flex;justify-content:center;align-items:center;width:100%;max-width:800px;grid-area:1 / 2 / 2 / 3;margin:auto;perspective:300px}h1.svelte-m0nk23{position:relative;text-align:center;font-family:'Comfortaa', sans-serif;font-family:'Roboto Mono', monospace;color:#000;letter-spacing:-5px\r\n  }bg-circle.svelte-m0nk23{position:absolute;top:0;left:0;border-radius:100%;opacity:0.5}hand-wave.svelte-m0nk23{display:inline-block;animation-duration:500ms;animation-iteration-count:infinite;animation-timing-function:steps(1, end);transform-origin:100% 100%}hand-wave.svelte-m0nk23:first-child{animation-name:svelte-m0nk23-wonky-wave-left;transform-origin:100% 100%}hand-wave.svelte-m0nk23:last-child{animation-name:svelte-m0nk23-wonky-wave-right;transform-origin:100% 100%;margin-left:-60px}@keyframes svelte-m0nk23-wonky-wave-left{0%{transform:rotateZ(0)  }50%{transform:rotateZ(45deg) }100%{transform:rotateZ(0)  }}@keyframes svelte-m0nk23-wonky-wave-right{0%{transform:rotateZ(0)      rotateY(180deg) }50%{transform:rotateZ(-45deg) rotateY(180deg) }100%{transform:rotateZ(0)      rotateY(180deg) }}",map:'{"version":3,"file":"Header.svelte","sources":["Header.svelte"],"sourcesContent":["<script>\\r\\nimport { onMount } from \'svelte\'\\r\\nimport { colorMap } from \'./consts.js\'\\r\\nimport { hexToRGBA } from \'./util.js\'\\r\\n\\r\\nconst duration = 40000\\r\\nconst h1duration = 10000\\r\\nconst size = 150\\r\\nconst width = 800 - size\\r\\nconst height = 200 - size\\r\\nconst depth = 100\\r\\n\\r\\nlet opacity = 0\\r\\n\\r\\nlet h1State = \'\'\\r\\n\\r\\nlet colors = [] \\r\\nfor (const hex of Object.values(colorMap)) {\\r\\n  colors.push({ hex, x: 0, y: 0, z: 0 })\\r\\n}\\r\\n\\r\\nconst setRands = (w = window.innerWidth - size) => {\\r\\n  for (const color of colors) {\\r\\n    color.x = Math.random() * Math.min(width, w)\\r\\n    color.y = Math.random() * height\\r\\n    color.z = Math.random() * depth\\r\\n  }\\r\\n  colors = colors\\r\\n}\\r\\n\\r\\nconst seth1State = () => {\\r\\n  h1State = (h1State === \'\') ? \'expanded\' : \'\'\\r\\n}\\r\\n\\r\\nsetRands(width)\\r\\n\\r\\nonMount(() => {\\r\\n  setTimeout(() => {\\r\\n    opacity = 0.5\\r\\n  }, 10)\\r\\n})\\r\\n<\/script>\\r\\n\\r\\n<header>\\r\\n  <section style=\\"height: {height + size}px\\">\\r\\n    {#each colors as color (color.hex)}\\r\\n      <bg-circle\\r\\n        style=\\"width: {size}px;\\r\\n          height: {size}px;\\r\\n          background-color: {color.hex};\\r\\n          box-shadow: 20px 20px 40px {hexToRGBA(color.hex, 0.7)}, -20px -20px 60px {hexToRGBA(color.hex, 0.2)};\\r\\n          transform: translate3d({color.x}px, {color.y}px, {color.z}px);\\r\\n          opacity: {opacity};\\r\\n          transition: transform {duration}ms, opacity 1500ms;\\r\\n        \\"\\r\\n      ></bg-circle>\\r\\n    {/each}\\r\\n\\r\\n    <h1 class=\\"font-effect-anaglyph\\">\\r\\n      <hand-wave>👋</hand-wave>\\r\\n      hi i am micheal \\r\\n      <hand-wave>👋</hand-wave>\\r\\n    </h1>\\r\\n\\r\\n    \\r\\n  </section>\\r\\n</header>\\r\\n\\r\\n<style>\\r\\n  header {\\r\\n    display: grid;\\r\\n    grid-template-columns: 1fr 3fr 1fr;\\r\\n    padding: 30px;\\r\\n  }\\r\\n\\r\\n  section {\\r\\n    position: relative;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    width: 100%;\\r\\n    max-width: 800px;\\r\\n    grid-area: 1 / 2 / 2 / 3;\\r\\n    margin: auto;\\r\\n    perspective: 300px;\\r\\n  }\\r\\n\\r\\n  h1 {\\r\\n    position: relative;\\r\\n    text-align: center;\\r\\n    font-family: \'Comfortaa\', sans-serif;\\r\\n    font-family: \'Roboto Mono\', monospace;\\r\\n    color: #000;\\r\\n    letter-spacing: -5px\\r\\n  }\\r\\n\\r\\n  bg-circle {\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    border-radius: 100%;\\r\\n    opacity: 0.5;\\r\\n  }\\r\\n\\r\\n  hand-wave {\\r\\n    display: inline-block;\\r\\n    animation-duration: 500ms;\\r\\n    animation-iteration-count: infinite;\\r\\n    animation-timing-function: steps(1, end);\\r\\n    transform-origin: 100% 100%;\\r\\n  }\\r\\n\\r\\n  hand-wave:first-child {\\r\\n    animation-name: wonky-wave-left;\\r\\n    transform-origin: 100% 100%;\\r\\n  }\\r\\n\\r\\n  hand-wave:last-child {\\r\\n    animation-name: wonky-wave-right;\\r\\n    transform-origin: 100% 100%;\\r\\n    margin-left: -60px;\\r\\n  }\\r\\n\\r\\n  @keyframes wonky-wave-left {\\r\\n    0%   { transform: rotateZ(0)  }\\r\\n    50%  { transform: rotateZ(45deg) }\\r\\n    100% { transform: rotateZ(0)  }\\r\\n  }\\r\\n\\r\\n  @keyframes wonky-wave-right {\\r\\n    0%   { transform: rotateZ(0)      rotateY(180deg) }\\r\\n    50%  { transform: rotateZ(-45deg) rotateY(180deg) }\\r\\n    100% { transform: rotateZ(0)      rotateY(180deg) }\\r\\n  }\\r\\n</style>"],"names":[],"mappings":"AAqEE,MAAM,cAAC,CAAC,AACN,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAClC,OAAO,CAAE,IAAI,AACf,CAAC,AAED,OAAO,cAAC,CAAC,AACP,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,KAAK,CAChB,SAAS,CAAE,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACxB,MAAM,CAAE,IAAI,CACZ,WAAW,CAAE,KAAK,AACpB,CAAC,AAED,EAAE,cAAC,CAAC,AACF,QAAQ,CAAE,QAAQ,CAClB,UAAU,CAAE,MAAM,CAClB,WAAW,CAAE,WAAW,CAAC,CAAC,UAAU,CACpC,WAAW,CAAE,aAAa,CAAC,CAAC,SAAS,CACrC,KAAK,CAAE,IAAI,CACX,cAAc,CAAE,IAAI;EACtB,CAAC,AAED,SAAS,cAAC,CAAC,AACT,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,GAAG,AACd,CAAC,AAED,SAAS,cAAC,CAAC,AACT,OAAO,CAAE,YAAY,CACrB,kBAAkB,CAAE,KAAK,CACzB,yBAAyB,CAAE,QAAQ,CACnC,yBAAyB,CAAE,MAAM,CAAC,CAAC,CAAC,GAAG,CAAC,CACxC,gBAAgB,CAAE,IAAI,CAAC,IAAI,AAC7B,CAAC,AAED,uBAAS,YAAY,AAAC,CAAC,AACrB,cAAc,CAAE,6BAAe,CAC/B,gBAAgB,CAAE,IAAI,CAAC,IAAI,AAC7B,CAAC,AAED,uBAAS,WAAW,AAAC,CAAC,AACpB,cAAc,CAAE,8BAAgB,CAChC,gBAAgB,CAAE,IAAI,CAAC,IAAI,CAC3B,WAAW,CAAE,KAAK,AACpB,CAAC,AAED,WAAW,6BAAgB,CAAC,AAC1B,EAAE,AAAG,CAAC,AAAC,SAAS,CAAE,QAAQ,CAAC,CAAC,EAAE,CAAC,AAC/B,GAAG,AAAE,CAAC,AAAC,SAAS,CAAE,QAAQ,KAAK,CAAC,CAAC,CAAC,AAClC,IAAI,AAAC,CAAC,AAAC,SAAS,CAAE,QAAQ,CAAC,CAAC,EAAE,CAAC,AACjC,CAAC,AAED,WAAW,8BAAiB,CAAC,AAC3B,EAAE,AAAG,CAAC,AAAC,SAAS,CAAE,QAAQ,CAAC,CAAC,MAAM,QAAQ,MAAM,CAAC,CAAC,CAAC,AACnD,GAAG,AAAE,CAAC,AAAC,SAAS,CAAE,QAAQ,MAAM,CAAC,CAAC,QAAQ,MAAM,CAAC,CAAC,CAAC,AACnD,IAAI,AAAC,CAAC,AAAC,SAAS,CAAE,QAAQ,CAAC,CAAC,MAAM,QAAQ,MAAM,CAAC,CAAC,CAAC,AACrD,CAAC"}'},u=s((A,n,r,t)=>{let o=0,i=[];for(const A of Object.values(m))i.push({hex:A,x:0,y:0,z:0});return((A=window.innerWidth-150)=>{for(const n of i)n.x=Math.random()*Math.min(650,A),n.y=50*Math.random(),n.z=100*Math.random();i=i})(650),e(()=>{setTimeout(()=>{o=.5},10)}),A.css.add(h),`<header class="svelte-m0nk23">\n  <section style="${"height: "+a(200)+"px"}" class="svelte-m0nk23">\n    ${C(i,A=>`<bg-circle style="${"width: "+a(150)+"px;\r\n          height: "+a(150)+"px;\r\n          background-color: "+a(A.hex)+";\r\n          box-shadow: 20px 20px 40px "+a(d(A.hex,.7))+", -20px -20px 60px "+a(d(A.hex,.2))+";\r\n          transform: translate3d("+a(A.x)+"px, "+a(A.y)+"px, "+a(A.z)+"px);\r\n          opacity: "+a(o)+";\r\n          transition: transform "+a(4e4)+"ms, opacity 1500ms;\r\n        "}" class="svelte-m0nk23"></bg-circle>`)}\n\n    <h1 class="font-effect-anaglyph svelte-m0nk23">\n      <hand-wave class="svelte-m0nk23">👋</hand-wave>\n      hi i am micheal \n      <hand-wave class="svelte-m0nk23">👋</hand-wave>\n    </h1>\n\n    \n  </section>\n</header>`}),f={code:"article.svelte-11yb7b7.svelte-11yb7b7{position:relative}a.svelte-11yb7b7.svelte-11yb7b7{border-radius:50px;background:var(--lighting-shadow-bg);padding:40px;box-shadow:var(--lighting-shadow);text-decoration:none}icon-container.svelte-11yb7b7.svelte-11yb7b7{position:absolute;bottom:-30px;opacity:0;transition:0.25s}svg.svelte-11yb7b7.svelte-11yb7b7{fill:#fff;width:25px;height:25px;animation-name:svelte-11yb7b7-fade;animation-iteration-count:infinite;animation-duration:0.5s;animation-timing-function:steps(2, end)\r\n}a.svelte-11yb7b7:hover icon-container.svelte-11yb7b7{opacity:1}@keyframes svelte-11yb7b7-fade{0%{opacity:0}50%{opacity:0.5}100%{opacity:0}}h3.svelte-11yb7b7.svelte-11yb7b7{margin-top:0}svg.svelte-11yb7b7.svelte-11yb7b7:not(:first-child){margin-left:-2px}",map:'{"version":3,"file":"Project.svelte","sources":["Project.svelte"],"sourcesContent":["<script>\\r\\n  import { colorMap } from \'./consts.js\'\\r\\n\\r\\n  const colors = Object.values(colorMap)\\r\\n\\r\\n  export let newTab = false\\r\\n  export let href = \'\'\\r\\n  export let title = \'\'\\r\\n  export let summary = \'\'\\r\\n<\/script>\\r\\n\\r\\n<style>\\r\\narticle {\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\na {\\r\\n  border-radius: 50px;\\r\\n  background: var(--lighting-shadow-bg);\\r\\n  padding: 40px;\\r\\n  box-shadow: var(--lighting-shadow);\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nicon-container {\\r\\n  position: absolute;\\r\\n  bottom: -30px;\\r\\n  opacity: 0;\\r\\n  transition: 0.25s;\\r\\n}\\r\\n\\r\\nsvg {\\r\\n  fill: #fff;\\r\\n  width: 25px;\\r\\n  height: 25px;\\r\\n  animation-name: fade;\\r\\n  animation-iteration-count: infinite;\\r\\n  animation-duration: 0.5s;\\r\\n  animation-timing-function: steps(2, end)\\r\\n}\\r\\n\\r\\na:hover icon-container {\\r\\n  opacity: 1;\\r\\n}\\r\\n\\r\\n@keyframes fade {\\r\\n  0%   { opacity: 0; }\\r\\n  50%  { opacity: 0.5; }\\r\\n  100% { opacity: 0; }\\r\\n}\\r\\n\\r\\nh3 {\\r\\n  margin-top: 0;\\r\\n}\\r\\n\\r\\nsvg:not(:first-child) {\\r\\n  margin-left: -2px;\\r\\n}\\r\\n</style>\\r\\n\\r\\n<a target=\\"{newTab ? \'_tab\' : \'_self\'}\\" href=\\"{href}\\">\\r\\n  <article>\\r\\n    <h3>{title}</h3>\\r\\n    <p>{summary}</p>\\r\\n\\r\\n    <icon-container>\\r\\n      {#each Array(10) as _, i (i)}\\r\\n        <svg  \\r\\n          class=\\"icon icon-arrow_forward\\"\\r\\n          style=\\"fill: {colors[i]}; animation-delay: {i * 42}ms;\\"\\r\\n        >\\r\\n          <use xlink:href=\\"#icon-arrow_forward\\" />\\r\\n        </svg>\\r\\n      {/each}\\r\\n    </icon-container>\\r\\n    \\r\\n    \\r\\n  </article>\\r\\n</a>\\r\\n"],"names":[],"mappings":"AAYA,OAAO,8BAAC,CAAC,AACP,QAAQ,CAAE,QAAQ,AACpB,CAAC,AAED,CAAC,8BAAC,CAAC,AACD,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,IAAI,oBAAoB,CAAC,CACrC,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,IAAI,iBAAiB,CAAC,CAClC,eAAe,CAAE,IAAI,AACvB,CAAC,AAED,cAAc,8BAAC,CAAC,AACd,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,KAAK,CACb,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,KAAK,AACnB,CAAC,AAED,GAAG,8BAAC,CAAC,AACH,IAAI,CAAE,IAAI,CACV,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,cAAc,CAAE,mBAAI,CACpB,yBAAyB,CAAE,QAAQ,CACnC,kBAAkB,CAAE,IAAI,CACxB,yBAAyB,CAAE,MAAM,CAAC,CAAC,CAAC,GAAG,CAAC;AAC1C,CAAC,AAED,gBAAC,MAAM,CAAC,cAAc,eAAC,CAAC,AACtB,OAAO,CAAE,CAAC,AACZ,CAAC,AAED,WAAW,mBAAK,CAAC,AACf,EAAE,AAAG,CAAC,AAAC,OAAO,CAAE,CAAC,AAAE,CAAC,AACpB,GAAG,AAAE,CAAC,AAAC,OAAO,CAAE,GAAG,AAAE,CAAC,AACtB,IAAI,AAAC,CAAC,AAAC,OAAO,CAAE,CAAC,AAAE,CAAC,AACtB,CAAC,AAED,EAAE,8BAAC,CAAC,AACF,UAAU,CAAE,CAAC,AACf,CAAC,AAED,iCAAG,KAAK,YAAY,CAAC,AAAC,CAAC,AACrB,WAAW,CAAE,IAAI,AACnB,CAAC"}'},g=s((A,n,r,e)=>{const t=Object.values(m);let{newTab:o=!1}=n,{href:i=""}=n,{title:s=""}=n,{summary:c=""}=n;return void 0===n.newTab&&r.newTab&&void 0!==o&&r.newTab(o),void 0===n.href&&r.href&&void 0!==i&&r.href(i),void 0===n.title&&r.title&&void 0!==s&&r.title(s),void 0===n.summary&&r.summary&&void 0!==c&&r.summary(c),A.css.add(f),`<a${l("target",o?"_tab":"_self",0)}${l("href",i,0)} class="svelte-11yb7b7">\n  <article class="svelte-11yb7b7">\n    <h3 class="svelte-11yb7b7">${a(s)}</h3>\n    <p>${a(c)}</p>\n\n    <icon-container class="svelte-11yb7b7">\n      ${C(Array(10),(A,n)=>`<svg class="icon icon-arrow_forward svelte-11yb7b7" style="${"fill: "+a(t[n])+"; animation-delay: "+a(42*n)+"ms;"}">\n          <use xlink:href="#icon-arrow_forward"></use>\n        </svg>`)}\n    </icon-container>\n    \n    \n  </article>\n</a>`}),v={code:"section.svelte-60oau2{padding:100px 20px}current-projects.svelte-60oau2{display:grid;grid-template-columns:repeat(3, 1fr);grid-column-gap:60px;max-width:var(--content-width);margin:auto}h2.svelte-60oau2{font-family:'Roboto Mono', monospace;text-align:center;text-shadow:var(--lighting-text-shadow);font-size:30px;margin-bottom:60px}",map:'{"version":3,"file":"Projects.svelte","sources":["Projects.svelte"],"sourcesContent":["\\r\\n<style>\\r\\nsection {\\r\\n  padding: 100px 20px;\\r\\n}\\r\\ncurrent-projects {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(3, 1fr);\\r\\n  grid-column-gap: 60px;\\r\\n  max-width: var(--content-width);\\r\\n  margin: auto;\\r\\n}\\r\\nh2 {\\r\\n  font-family: \'Roboto Mono\', monospace;\\r\\n  text-align: center;\\r\\n  text-shadow: var(--lighting-text-shadow);\\r\\n  font-size: 30px;\\r\\n  margin-bottom: 60px;\\r\\n}\\r\\n</style>\\r\\n\\r\\n<script>\\r\\nimport Project from \'./Project.svelte\'\\r\\n\\r\\nconst projects = [\\r\\n  {\\r\\n    title: \'Galeri\',\\r\\n    summary: \'Galeri is a chrome extension and desktop app focused on artwork discovery.\',\\r\\n    href: \'https://galeri.io\',\\r\\n    newTab: true\\r\\n  },\\r\\n  // {\\r\\n  //   title: \'Koschei Society Webchat Service\',\\r\\n  //   summary: \'\'\\r\\n  // },\\r\\n  // {\\r\\n  //   title: \'Sim Shitty\',\\r\\n  //   summary: \'\'\\r\\n  // }\\r\\n]\\r\\n<\/script>\\r\\n\\r\\n<section>\\r\\n  <h2>cabinet of curiosities</h2>\\r\\n  <current-projects>\\r\\n    {#each projects as project, i (i)}\\r\\n      <Project {...project} />\\r\\n    {/each}\\r\\n  </current-projects>\\r\\n</section>\\r\\n"],"names":[],"mappings":"AAEA,OAAO,cAAC,CAAC,AACP,OAAO,CAAE,KAAK,CAAC,IAAI,AACrB,CAAC,AACD,gBAAgB,cAAC,CAAC,AAChB,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,CAAC,CAAC,CAAC,GAAG,CAAC,CACrC,eAAe,CAAE,IAAI,CACrB,SAAS,CAAE,IAAI,eAAe,CAAC,CAC/B,MAAM,CAAE,IAAI,AACd,CAAC,AACD,EAAE,cAAC,CAAC,AACF,WAAW,CAAE,aAAa,CAAC,CAAC,SAAS,CACrC,UAAU,CAAE,MAAM,CAClB,WAAW,CAAE,IAAI,sBAAsB,CAAC,CACxC,SAAS,CAAE,IAAI,CACf,aAAa,CAAE,IAAI,AACrB,CAAC"}'},y=s((A,n,r,e)=>(A.css.add(v),`<section class="svelte-60oau2">\n  <h2 class="svelte-60oau2">cabinet of curiosities</h2>\n  <current-projects class="svelte-60oau2">\n    ${C([{title:"Galeri",summary:"Galeri is a chrome extension and desktop app focused on artwork discovery.",href:"https://galeri.io",newTab:!0}],(n,r)=>`${o(g,"Project").$$render(A,Object.assign(n),{},{})}`)}\n  </current-projects>\n</section>`)),E={code:"footer.svelte-1au8iln.svelte-1au8iln{display:grid;grid-template-columns:1fr 10fr;grid-template-rows:1fr;grid-column-gap:20px;max-width:var(--content-width);margin:auto;padding:30px}img.svelte-1au8iln.svelte-1au8iln{max-width:180px;border-radius:100%;box-shadow:var(--lighting-shadow)}h2.svelte-1au8iln.svelte-1au8iln{font-family:'Roboto Mono', monospace;font-size:30px}h2.svelte-1au8iln span.svelte-1au8iln{display:inline-block;animation:svelte-1au8iln-jump;animation-duration:200ms;animation-iteration-count:infinite}a.svelte-1au8iln svg.svelte-1au8iln{width:100%;height:100%}p.social-media.svelte-1au8iln.svelte-1au8iln{display:flex;align-items:center;margin:0\r\n  }p.social-media.svelte-1au8iln span.svelte-1au8iln{margin:0 7px 0 0}p.social-media.svelte-1au8iln a.svelte-1au8iln{display:inline-block;width:40px;height:40px;padding:0 7px}@keyframes svelte-1au8iln-jump{0%{transform:translate(0, 0) }50%{transform:translate(0, -5px) }100%{transform:translate(0, 0) }}",map:'{"version":3,"file":"Footer.svelte","sources":["Footer.svelte"],"sourcesContent":["<style>\\r\\n  footer {\\r\\n    display: grid;\\r\\n    grid-template-columns: 1fr 10fr;\\r\\n    grid-template-rows: 1fr;\\r\\n    grid-column-gap: 20px;\\r\\n    max-width: var(--content-width);\\r\\n    margin: auto;\\r\\n    padding: 30px;\\r\\n  }\\r\\n\\r\\n  img {\\r\\n    max-width: 180px;\\r\\n    border-radius: 100%;\\r\\n    box-shadow: var(--lighting-shadow);\\r\\n  }\\r\\n\\r\\n  h2 {\\r\\n    font-family: \'Roboto Mono\', monospace;\\r\\n    font-size: 30px;\\r\\n    \\r\\n  }\\r\\n\\r\\n  h2 span {\\r\\n    display: inline-block;\\r\\n    animation: jump;\\r\\n    animation-duration: 200ms;\\r\\n    animation-iteration-count: infinite;\\r\\n  }\\r\\n\\r\\n  a svg {\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n  }\\r\\n\\r\\n  p.social-media {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    margin: 0\\r\\n  }\\r\\n\\r\\n  p.social-media span {\\r\\n    margin: 0 7px 0 0;\\r\\n  }\\r\\n\\r\\n   p.social-media a {\\r\\n    display: inline-block;\\r\\n    width: 40px;\\r\\n    height: 40px;\\r\\n    padding: 0 7px;\\r\\n  }\\r\\n\\r\\n  @keyframes jump {\\r\\n    0%  { transform: translate(0, 0) }\\r\\n    50% { transform: translate(0, -5px) }\\r\\n    100% { transform: translate(0, 0) }\\r\\n  }\\r\\n\\r\\n</style>\\r\\n\\r\\n<footer>\\r\\n  <img alt=\\"Micheal\'s detatched head.\\" src=\\"profile.jpg\\" />\\r\\n  <section>\\r\\n    <h2>\\r\\n      {#each \'about this human:\' as char, i (char)}\\r\\n        <span style=\\"animation-delay: {i * 52}ms; {char === \' \' ? \'margin-left: 10px;\' : \'\'}\\">{char}</span>\\r\\n      {/each}\\r\\n    </h2>\\r\\n    <p>\\r\\n      <strong>Micheal Parks</strong> is a software engineer or whatever who lives in a <a target=\\"_tab\\" href=\\"https://duckduckgo.com/?q=new+york+city&ia=news&iaxm=about\\">Large Apple</a>.\\r\\n    </p>\\r\\n\\r\\n    <p class=\\"social-media\\">\\r\\n      <span>He has links for you but of course</span>\\r\\n      <a target=\\"_tab\\" href=\\"https://open.spotify.com/user/micheal_parks\\">\\r\\n        <svg class=\\"icon icon-spotify\\"><use xlink:href=\\"#icon-spotify\\"></use></svg>\\r\\n      </a>\\r\\n      <a target=\\"_tab\\" href=\\"https://github.com/michealparks\\">\\r\\n        <svg class=\\"icon icon-github\\"><use xlink:href=\\"#icon-github\\"></use></svg>\\r\\n      </a>\\r\\n      <a target=\\"_tab\\" href=\\"https://soundcloud.com/dead_culture\\">\\r\\n        <svg class=\\"icon icon-soundcloud\\"><use xlink:href=\\"#icon-soundcloud\\"></use></svg>\\r\\n      </a>\\r\\n\\r\\n      <span style=\\"margin-left: 7px;\\">and the best link!!!!1!!1</span>\\r\\n      <a target=\\"_tab\\" href=\\"https://www.linkedin.com/in/michealparks/\\">\\r\\n        <svg class=\\"icon icon-linkedin\\"><use xlink:href=\\"#icon-linkedin\\"></use></svg>\\r\\n      </a>\\r\\n    </p>\\r\\n  </section>\\r\\n</footer>"],"names":[],"mappings":"AACE,MAAM,8BAAC,CAAC,AACN,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAAG,CAAC,IAAI,CAC/B,kBAAkB,CAAE,GAAG,CACvB,eAAe,CAAE,IAAI,CACrB,SAAS,CAAE,IAAI,eAAe,CAAC,CAC/B,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,AACf,CAAC,AAED,GAAG,8BAAC,CAAC,AACH,SAAS,CAAE,KAAK,CAChB,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,IAAI,iBAAiB,CAAC,AACpC,CAAC,AAED,EAAE,8BAAC,CAAC,AACF,WAAW,CAAE,aAAa,CAAC,CAAC,SAAS,CACrC,SAAS,CAAE,IAAI,AAEjB,CAAC,AAED,iBAAE,CAAC,IAAI,eAAC,CAAC,AACP,OAAO,CAAE,YAAY,CACrB,SAAS,CAAE,mBAAI,CACf,kBAAkB,CAAE,KAAK,CACzB,yBAAyB,CAAE,QAAQ,AACrC,CAAC,AAED,gBAAC,CAAC,GAAG,eAAC,CAAC,AACL,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,AACd,CAAC,AAED,CAAC,aAAa,8BAAC,CAAC,AACd,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,MAAM,CAAE,CAAC;EACX,CAAC,AAED,CAAC,4BAAa,CAAC,IAAI,eAAC,CAAC,AACnB,MAAM,CAAE,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,AACnB,CAAC,AAEA,CAAC,4BAAa,CAAC,CAAC,eAAC,CAAC,AACjB,OAAO,CAAE,YAAY,CACrB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,CAAC,CAAC,GAAG,AAChB,CAAC,AAED,WAAW,mBAAK,CAAC,AACf,EAAE,AAAE,CAAC,AAAC,SAAS,CAAE,UAAU,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AAClC,GAAG,AAAC,CAAC,AAAC,SAAS,CAAE,UAAU,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,AACrC,IAAI,AAAC,CAAC,AAAC,SAAS,CAAE,UAAU,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,AACrC,CAAC"}'},x=s((A,n,r,e)=>(A.css.add(E),`<footer class="svelte-1au8iln">\n  <img alt="Micheal's detatched head." src="profile.jpg" class="svelte-1au8iln">\n  <section>\n    <h2 class="svelte-1au8iln">\n      ${C("about this human:",(A,n)=>`<span style="${"animation-delay: "+a(52*n)+"ms; "+a(" "===A?"margin-left: 10px;":"")}" class="svelte-1au8iln">${a(A)}</span>`)}\n    </h2>\n    <p>\n      <strong>Micheal Parks</strong> is a software engineer or whatever who lives in a <a target="_tab" href="https://duckduckgo.com/?q=new+york+city&ia=news&iaxm=about">Large Apple</a>.\n    </p>\n\n    <p class="social-media svelte-1au8iln">\n      <span class="svelte-1au8iln">He has links for you but of course</span>\n      <a target="_tab" href="https://open.spotify.com/user/micheal_parks" class="svelte-1au8iln">\n        <svg class="icon icon-spotify svelte-1au8iln"><use xlink:href="#icon-spotify"></use></svg>\n      </a>\n      <a target="_tab" href="https://github.com/michealparks" class="svelte-1au8iln">\n        <svg class="icon icon-github svelte-1au8iln"><use xlink:href="#icon-github"></use></svg>\n      </a>\n      <a target="_tab" href="https://soundcloud.com/dead_culture" class="svelte-1au8iln">\n        <svg class="icon icon-soundcloud svelte-1au8iln"><use xlink:href="#icon-soundcloud"></use></svg>\n      </a>\n\n      <span style="margin-left: 7px;" class="svelte-1au8iln">and the best link!!!!1!!1</span>\n      <a target="_tab" href="https://www.linkedin.com/in/michealparks/" class="svelte-1au8iln">\n        <svg class="icon icon-linkedin svelte-1au8iln"><use xlink:href="#icon-linkedin"></use></svg>\n      </a>\n    </p>\n  </section>\n</footer>`)),b={code:"button-container.svelte-1y6pnro{display:flex;justify-content:flex-end}button.svelte-1y6pnro{margin:10px;color:#fff;background-color:transparent;font-family:comic sans}iframe.svelte-1y6pnro{--size:400px;position:fixed;z-index:-1;opacity:0.3;margin:calc(var(--size) / -2);height:calc(100% + var(--size));width:calc(100% + var(--size));top:0;left:0}",map:'{"version":3,"file":"Jamz.svelte","sources":["Jamz.svelte"],"sourcesContent":["\\r\\n<script>\\r\\nimport { onMount } from \'svelte\'\\r\\n\\r\\nlet state = \'unjammed\'\\r\\nlet target\\r\\n\\r\\nconst startJamz = () => {\\r\\n  target.playVideo()\\r\\n  state = \'jamming\'\\r\\n}\\r\\n\\r\\nconst endJamz = () => {\\r\\n  target.stopVideo()\\r\\n  document.querySelector(\'main\').style.backgroundColor = \'\'\\r\\n  state = \'jammed\'\\r\\n}\\r\\n\\r\\nconst onPlayerReady = (e) => {\\r\\n  target = e.target\\r\\n}\\r\\n\\r\\nconst onPlayerStateChange = (e) => {\\r\\n  switch (e.data) {\\r\\n    case YT.PlayerState.ENDED:\\r\\n      endJamz()\\r\\n      return\\r\\n    case YT.PlayerState.PLAYING:\\r\\n      document.querySelector(\'main\').style.backgroundColor = \'rgba(0, 0, 0, 0.5)\'\\r\\n      return\\r\\n  }\\r\\n}\\r\\n\\r\\nonMount(() => {\\r\\n  const tag = document.createElement(\'script\')\\r\\n  tag.async = true\\r\\n  tag.src = \'https://www.youtube.com/iframe_api\'\\r\\n  document.head.appendChild(tag)\\r\\n\\r\\n  window.onYouTubeIframeAPIReady = () => new YT.Player(\'jamz\', {\\r\\n    events: {\\r\\n      onReady: onPlayerReady,\\r\\n      onStateChange: onPlayerStateChange\\r\\n    }\\r\\n  })\\r\\n})\\r\\n<\/script>\\r\\n\\r\\n<style>\\r\\nbutton-container {\\r\\n  display: flex;\\r\\n  justify-content: flex-end;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  margin: 10px;\\r\\n  color: #fff;\\r\\n  background-color: transparent;\\r\\n  font-family: comic sans;\\r\\n}\\r\\n\\r\\niframe {\\r\\n  --size: 400px;\\r\\n  position: fixed;\\r\\n  z-index: -1;\\r\\n  opacity: 0.3;\\r\\n  margin: calc(var(--size) / -2);\\r\\n  height: calc(100% + var(--size));\\r\\n  width: calc(100% + var(--size));\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n}\\r\\n</style>\\r\\n\\r\\n<button-container>\\r\\n  {#if state === \'unjammed\'}\\r\\n    <button on:click={startJamz}>pump up my jamz</button>\\r\\n  {:else if state === \'jamming\'}\\r\\n    <button on:click={endJamz}>stop!! \'nuff jam TIME!!</button>\\r\\n  {:else}\\r\\n    <button on:click={startJamz}>more! moar JAMZ!</button>\\r\\n  {/if}\\r\\n</button-container>\\r\\n\\r\\n<iframe\\r\\n  id=\\"jamz\\"\\r\\n  title=\\"Jamz\\"\\r\\n  width=\\"560\\"\\r\\n  height=\\"315\\"\\r\\n  src=\\"https://www.youtube.com/embed/4T1t5OFOYDU?enablejsapi=1\\"\\r\\n  frameborder=\\"0\\"\\r\\n  allow=\\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\\"\\r\\n/>"],"names":[],"mappings":"AAiDA,gBAAgB,eAAC,CAAC,AAChB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,QAAQ,AAC3B,CAAC,AAED,MAAM,eAAC,CAAC,AACN,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,gBAAgB,CAAE,WAAW,CAC7B,WAAW,CAAE,KAAK,CAAC,IAAI,AACzB,CAAC,AAED,MAAM,eAAC,CAAC,AACN,MAAM,CAAE,KAAK,CACb,QAAQ,CAAE,KAAK,CACf,OAAO,CAAE,EAAE,CACX,OAAO,CAAE,GAAG,CACZ,MAAM,CAAE,KAAK,IAAI,MAAM,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAC9B,MAAM,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,IAAI,MAAM,CAAC,CAAC,CAChC,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,IAAI,MAAM,CAAC,CAAC,CAC/B,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,AACT,CAAC"}'},I=s((A,n,r,t)=>{let a,C="unjammed";const o=A=>{a=A.target},i=A=>{switch(A.data){case YT.PlayerState.ENDED:return a.stopVideo(),document.querySelector("main").style.backgroundColor="",void(C="jammed");case YT.PlayerState.PLAYING:return void(document.querySelector("main").style.backgroundColor="rgba(0, 0, 0, 0.5)")}};return e(()=>{const A=document.createElement("script");A.async=!0,A.src="https://www.youtube.com/iframe_api",document.head.appendChild(A),window.onYouTubeIframeAPIReady=()=>new YT.Player("jamz",{events:{onReady:o,onStateChange:i}})}),A.css.add(b),`<button-container class="svelte-1y6pnro">\n  ${"unjammed"===C?'<button class="svelte-1y6pnro">pump up my jamz</button>':`${"jamming"===C?'<button class="svelte-1y6pnro">stop!! &#39;nuff jam TIME!!</button>':'<button class="svelte-1y6pnro">more! moar JAMZ!</button>'}`}\n</button-container>\n\n<iframe id="jamz" title="Jamz" width="560" height="315" src="https://www.youtube.com/embed/4T1t5OFOYDU?enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" class="svelte-1y6pnro"></iframe>`}),w=s((A,n,r,e)=>'<div style="display: none">\n\n<svg id="icon-spotify" viewBox="0 0 32 32">\n  <path fill="#1ed760" style="fill: #1ed760" d="M16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.12-16-16-16zM23.361 23.12c-0.32 0.479-0.88 0.64-1.361 0.32-3.76-2.32-8.48-2.801-14.081-1.521-0.557 0.163-1.039-0.239-1.199-0.719-0.16-0.561 0.24-1.040 0.72-1.2 6.080-1.361 11.36-0.8 15.52 1.76 0.56 0.24 0.639 0.879 0.401 1.36zM25.281 18.72c-0.401 0.56-1.121 0.8-1.683 0.4-4.319-2.64-10.879-3.44-15.919-1.84-0.639 0.16-1.36-0.16-1.52-0.8s0.16-1.361 0.8-1.521c5.84-1.759 13.040-0.877 18 2.161 0.481 0.241 0.72 1.040 0.321 1.6zM25.441 14.24c-5.121-3.040-13.681-3.36-18.561-1.839-0.8 0.239-1.6-0.241-1.84-0.961-0.24-0.801 0.24-1.6 0.96-1.841 5.68-1.68 15.040-1.36 20.961 2.161 0.719 0.4 0.959 1.36 0.559 2.080-0.399 0.561-1.36 0.799-2.079 0.4z"></path>\n</svg>\n\n<svg id="icon-soundcloud" viewBox="0 0 32 32">\n  <path fill="#f30" style="fill: #f30" d="M1.567 16.3c-0.068 0-0.125 0.061-0.135 0.133l-0.311 2.872 0.311 2.807c0.009 0.077 0.067 0.131 0.135 0.131 0.067 0 0.12-0.053 0.132-0.131l0.34-2.807-0.36-2.872c0-0.076-0.060-0.133-0.12-0.133zM0.36 17.404c-0.080 0-0.121 0.049-0.139 0.125l-0.221 1.776 0.22 1.744c0 0.073 0.060 0.125 0.12 0.125s0.119-0.060 0.139-0.139l0.28-1.759-0.28-1.779c0-0.081-0.059-0.12-0.12-0.12zM2.799 15.74c-0.081 0-0.16 0.060-0.16 0.139l-0.28 3.417 0.3 3.277c0 0.080 0.060 0.16 0.159 0.16 0.081 0 0.14-0.081 0.161-0.16l0.339-3.299-0.339-3.397c-0.021-0.080-0.081-0.16-0.161-0.16zM4.077 15.599c-0.1 0-0.18 0.080-0.2 0.18l-0.257 3.52 0.28 3.392c0.021 0.103 0.1 0.184 0.199 0.184 0.1 0 0.18-0.081 0.2-0.2l0.32-3.376-0.32-3.497c0-0.1-0.080-0.18-0.18-0.18zM5.617 16.079c-0.007-0.12-0.1-0.199-0.212-0.199-0.12 0-0.211 0.080-0.219 0.199l-0.289 3.24 0.267 3.417c0 0.12 0.1 0.209 0.212 0.209 0.099 0 0.197-0.091 0.197-0.211l0.303-3.417-0.303-3.259zM6.696 13.8c-0.135 0-0.24 0.12-0.24 0.241l-0.28 5.276 0.249 3.417c0 0.12 0.107 0.219 0.24 0.219 0.125 0 0.232-0.12 0.24-0.24l0.279-3.417-0.279-5.296c-0.011-0.139-0.117-0.24-0.24-0.24zM7.944 12.541c-0.14 0-0.26 0.12-0.271 0.259l-0.24 6.496 0.22 3.397c0 0.16 0.12 0.279 0.26 0.279 0.139 0 0.259-0.119 0.28-0.279l0.257-3.397-0.256-6.475c-0.021-0.16-0.14-0.28-0.28-0.28zM9.233 11.943c-0.161 0-0.281 0.119-0.3 0.279l-0.22 7.033 0.22 3.36c0.019 0.159 0.139 0.3 0.3 0.3 0.159 0 0.3-0.14 0.3-0.3l0.26-3.36-0.261-7.033c0-0.16-0.14-0.3-0.3-0.3zM10.892 11.981c0-0.18-0.14-0.32-0.32-0.32-0.159 0-0.32 0.14-0.32 0.32l-0.199 7.255 0.199 3.337c0.021 0.18 0.161 0.32 0.341 0.32s0.32-0.14 0.32-0.32l0.219-3.337-0.219-7.275zM11.891 11.803c-0.18 0-0.34 0.159-0.34 0.339l-0.2 7.096 0.2 3.297c0 0.2 0.16 0.34 0.34 0.34s0.34-0.16 0.34-0.36l0.2-3.299-0.22-7.076c0-0.197-0.16-0.36-0.361-0.36zM13.189 12.001c-0.219 0-0.379 0.18-0.379 0.38l-0.137 6.857 0.18 3.299c0 0.199 0.159 0.369 0.379 0.369 0.199 0 0.361-0.16 0.379-0.38l0.161-3.257-0.18-6.816c-0.016-0.219-0.18-0.38-0.38-0.38zM14.791 10.813c-0.060-0.039-0.14-0.059-0.22-0.059s-0.159 0.020-0.22 0.059c-0.12 0.072-0.199 0.2-0.199 0.34v0.081l-0.139 8.064 0.153 3.265v0.011c0.011 0.080 0.040 0.18 0.099 0.24 0.077 0.081 0.189 0.139 0.312 0.139 0.107 0 0.211-0.059 0.279-0.12 0.077-0.080 0.121-0.18 0.121-0.3l0.020-0.32 0.156-2.937-0.18-8.115c0-0.139-0.081-0.257-0.18-0.319zM16.132 10.084c-0.060-0.060-0.12-0.081-0.2-0.081-0.099 0-0.199 0.021-0.279 0.081-0.1 0.081-0.159 0.2-0.159 0.32v0.039l-0.183 8.812 0.101 1.62 0.081 1.58c0 0.219 0.197 0.419 0.437 0.419 0.241 0 0.44-0.2 0.44-0.439l0.2-3.219-0.2-8.849c0-0.16-0.099-0.295-0.22-0.369zM28.064 15.033c-0.54 0-1.060 0.115-1.519 0.309-0.32-3.539-3.28-6.315-6.917-6.315-0.879 0-1.74 0.18-2.519 0.479-0.3 0.12-0.36 0.24-0.38 0.479v12.491c0.021 0.24 0.2 0.44 0.44 0.46h10.913c2.159 0.021 3.917-1.717 3.917-3.896s-1.759-3.936-3.917-3.936z"></path>\n</svg>\n\n<svg id="icon-github" viewBox="0 0 32 32">\n  <path fill="#fff" d="M16 0.396c-8.84 0-16 7.164-16 16 0 7.071 4.584 13.067 10.94 15.18 0.8 0.151 1.093-0.344 1.093-0.769 0-0.38-0.013-1.387-0.020-2.72-4.451 0.965-5.389-2.147-5.389-2.147-0.728-1.847-1.78-2.34-1.78-2.34-1.449-0.992 0.112-0.972 0.112-0.972 1.607 0.112 2.451 1.648 2.451 1.648 1.427 2.447 3.745 1.74 4.66 1.331 0.144-1.035 0.556-1.74 1.013-2.14-3.553-0.4-7.288-1.776-7.288-7.907 0-1.747 0.62-3.173 1.647-4.293-0.18-0.404-0.72-2.031 0.14-4.235 0 0 1.34-0.429 4.4 1.64 1.28-0.356 2.64-0.532 4-0.54 1.36 0.008 2.72 0.184 4 0.54 3.040-2.069 4.38-1.64 4.38-1.64 0.86 2.204 0.32 3.831 0.16 4.235 1.020 1.12 1.64 2.547 1.64 4.293 0 6.147-3.74 7.5-7.3 7.893 0.56 0.48 1.080 1.461 1.080 2.96 0 2.141-0.020 3.861-0.020 4.381 0 0.42 0.28 0.92 1.1 0.76 6.401-2.099 10.981-8.099 10.981-15.159 0-8.836-7.164-16-16-16z"></path>\n</svg>\n\n<svg id="icon-linkedin" viewBox="0 0 32 32">\n  <path fill="#0077b5" style="fill: var(--color1, #0077b5)" d="M27.263 27.269h-4.739v-7.425c0-1.771-0.036-4.049-2.469-4.049-2.471 0-2.848 1.927-2.848 3.919v7.556h-4.739v-15.269h4.552v2.081h0.061c0.636-1.2 2.183-2.467 4.493-2.467 4.801 0 5.689 3.16 5.689 7.273zM7.116 9.911c-1.525 0-2.751-1.235-2.751-2.753 0-1.517 1.227-2.751 2.751-2.751 1.52 0 2.752 1.233 2.752 2.751 0 1.519-1.233 2.753-2.752 2.753zM9.492 27.269h-4.752v-15.269h4.752zM29.633 0h-27.272c-1.305 0-2.361 1.032-2.361 2.305v27.389c0 1.275 1.056 2.305 2.361 2.305h27.268c1.304 0 2.371-1.031 2.371-2.305v-27.389c0-1.273-1.067-2.305-2.371-2.305z"></path>\n</svg>\n\n<svg id="icon-arrow_forward" viewBox="0 0 24 24">\n  <path d="M12 3.984l8.016 8.016-8.016 8.016-1.406-1.406 5.578-5.625h-12.188v-1.969h12.188l-5.578-5.625z"></path>\n</svg>\n\n</div>'),B={code:":root{--content-width:1100px;--lighting-shadow-bg:linear-gradient(145deg, #1f1f1f, #242424);--lighting-shadow:20px 20px 60px #1d1d1d,  -20px -20px 60px #272727;--lighting-text-shadow:10px 10px 10px #0e0e0e, -10px -10px 10px #363636}body{background-color:#222}a{color:#ccc}main.svelte-6rwaq7{width:100%;min-height:100vh;background-color:#222;color:#eee\r\n}",map:'{"version":3,"file":"App.svelte","sources":["App.svelte"],"sourcesContent":["<script>\\r\\n  import Stylesheet from \'./Stylesheet.svelte\'\\r\\n  import Header from \'./Header.svelte\'\\r\\n  import Projects from \'./Projects.svelte\'\\r\\n  import Footer from \'./Footer.svelte\'\\r\\n  import Jamz from \'./Jamz.svelte\'\\r\\n  import Icons from \'./Icons.svelte\'\\r\\n<\/script>\\r\\n\\r\\n<style>\\r\\n:global(:root) {\\r\\n  --content-width: 1100px;\\r\\n  --lighting-shadow-bg: linear-gradient(145deg, #1f1f1f, #242424);\\r\\n  --lighting-shadow: 20px 20px 60px #1d1d1d,  -20px -20px 60px #272727;;\\r\\n  --lighting-text-shadow: 10px 10px 10px #0e0e0e, -10px -10px 10px #363636;\\r\\n}\\r\\n\\r\\n:global(body) {\\r\\n  background-color: #222;\\r\\n}\\r\\n\\r\\n:global(a) {\\r\\n  color: #ccc;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  width: 100%;\\r\\n  min-height: 100vh;\\r\\n  background-color: #222;\\r\\n  color: #eee\\r\\n}\\r\\n</style>\\r\\n\\r\\n<main>\\r\\n  <Stylesheet />\\r\\n  <Header />\\r\\n  <Projects />\\r\\n  <Footer />\\r\\n  <Jamz />\\r\\n  <Icons />\\r\\n</main>\\r\\n"],"names":[],"mappings":"AAUQ,KAAK,AAAE,CAAC,AACd,eAAe,CAAE,MAAM,CACvB,oBAAoB,CAAE,yCAAyC,CAC/D,iBAAiB,CAAE,iDAAiD,CACpE,sBAAsB,CAAE,gDAAgD,AAC1E,CAAC,AAEO,IAAI,AAAE,CAAC,AACb,gBAAgB,CAAE,IAAI,AACxB,CAAC,AAEO,CAAC,AAAE,CAAC,AACV,KAAK,CAAE,IAAI,AACb,CAAC,AAED,IAAI,cAAC,CAAC,AACJ,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,KAAK,CACjB,gBAAgB,CAAE,IAAI,CACtB,KAAK,CAAE,IAAI;AACb,CAAC"}'},M=s((A,n,r,e)=>(A.css.add(B),`<main class="svelte-6rwaq7">\n  ${o(p,"Stylesheet").$$render(A,{},{},{})}\n  ${o(u,"Header").$$render(A,{},{},{})}\n  ${o(y,"Projects").$$render(A,{},{},{})}\n  ${o(x,"Footer").$$render(A,{},{},{})}\n  ${o(I,"Jamz").$$render(A,{},{},{})}\n  ${o(w,"Icons").$$render(A,{},{},{})}\n</main>`));module.exports=M;
