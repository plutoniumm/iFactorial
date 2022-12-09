import{n as Oe,s as ct,S as gt,i as _t,a as wt,e as C,c as yt,b as K,g as _e,t as B,d as we,f as F,h as G,j as bt,o as Ue,k as vt,l as Et,m as kt,p as Ie,q as V,r as St,u as Rt,v as Ot,w as H,x as Y,y as qe,z as x,A as X,B as ce}from"./chunks/index-1c3aea92.js";function It(t,e){return t==="/"||e==="ignore"?t:e==="never"?t.endsWith("/")?t.slice(0,-1):t:e==="always"&&!t.endsWith("/")?t+"/":t}function Lt(t){return t.split("%25").map(decodeURI).join("%25")}function $t(t){for(const e in t)t[e]=decodeURIComponent(t[e]);return t}const At=["href","pathname","search","searchParams","toString","toJSON"];function Pt(t,e){const n=new URL(t);for(const o of At){let a=n[o];Object.defineProperty(n,o,{get(){return e(),a},enumerable:!0,configurable:!0})}return jt(n),n}function jt(t){Object.defineProperty(t,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const Ut="/__data.json";function Nt(t){return t.replace(/\/$/,"")+Ut}const W=[];function Ce(t,e=Oe){let n;const o=new Set;function a(f){if(ct(t,f)&&(t=f,n)){const p=!W.length;for(const d of o)d[1](),W.push(d,t);if(p){for(let d=0;d<W.length;d+=2)W[d][0](W[d+1]);W.length=0}}}function u(f){a(f(t))}function r(f,p=Oe){const d=[f,p];return o.add(d),o.size===1&&(n=e(a)||Oe),f(t),()=>{o.delete(d),o.size===0&&(n(),n=null)}}return{set:a,update:u,subscribe:r}}let Qe="",ft="";function Tt(t){Qe=t.base,ft=t.assets||Qe}let ut="";function Dt(t){ut=t}const dt="sveltekit:scroll",q="sveltekit:index",ge={tap:1,hover:2,viewport:3,eager:4,off:-1};function et(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}function me(){return{x:pageXOffset,y:pageYOffset}}function fe(t,e){return t.getAttribute(`data-sveltekit-${e}`)}const tt={...ge,"":ge.hover};function pt(t){let e=t.assignedSlot??t.parentNode;return(e==null?void 0:e.nodeType)===11&&(e=e.host),e}function nt(t,e){for(;t&&t!==e;){if(t.nodeName.toUpperCase()==="A")return t;t=pt(t)}}function Le(t,e){let n;try{n=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const o={rel_external:(t.getAttribute("rel")||"").split(/\s+/).includes("external"),download:t.hasAttribute("download"),target:!!(t instanceof SVGAElement?t.target.baseVal:t.target)},a=!n||Ne(n,e)||o.rel_external||o.target||o.download;return{url:n,has:o,external:a}}function ue(t){let e=null,n=null,o=null,a=null,u=t;for(;u&&u!==document.documentElement;)n===null&&(n=fe(u,"preload-code")),o===null&&(o=fe(u,"preload-data")),e===null&&(e=fe(u,"noscroll")),a===null&&(a=fe(u,"reload")),u=pt(u);return{preload_code:tt[n??"off"],preload_data:tt[o??"off"],noscroll:e==="off"?!1:e===""?!0:null,reload:a==="off"?!1:a===""?!0:null}}function rt(t){const e=Ce(t);let n=!0;function o(){n=!0,e.update(r=>r)}function a(r){n=!1,e.set(r)}function u(r){let f;return e.subscribe(p=>{(f===void 0||n&&p!==f)&&r(f=p)})}return{notify:o,set:a,subscribe:u}}function Vt(){const{set:t,subscribe:e}=Ce(!1);let n;async function o(){clearTimeout(n);const a=await fetch(`${ft}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(a.ok){const r=(await a.json()).version!==ut;return r&&(t(!0),clearTimeout(n)),r}else throw new Error(`Version check failed: ${a.status}`)}return{subscribe:e,check:o}}function Ne(t,e){return t.origin!==location.origin||!t.pathname.startsWith(e)}function qt(t){let e=5381;if(typeof t=="string"){let n=t.length;for(;n;)e=e*33^t.charCodeAt(--n)}else if(ArrayBuffer.isView(t)){const n=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);let o=n.length;for(;o;)e=e*33^n[--o]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const ye=window.fetch;window.fetch=(t,e)=>{if((t instanceof Request?t.method:(e==null?void 0:e.method)||"GET")!=="GET"){const o=new URL(t instanceof Request?t.url:t.toString(),document.baseURI).href;te.delete(o)}return ye(t,e)};const te=new Map;function Ct(t,e){const n=ht(t,e),o=document.querySelector(n);if(o!=null&&o.textContent){const{body:a,...u}=JSON.parse(o.textContent),r=o.getAttribute("data-ttl");return r&&te.set(n,{body:a,init:u,ttl:1e3*Number(r)}),Promise.resolve(new Response(a,u))}return ye(t,e)}function Bt(t,e,n){if(te.size>0){const o=ht(t,n),a=te.get(o);if(a){if(performance.now()<a.ttl)return new Response(a.body,a.init);te.delete(o)}}return ye(e,n)}function ht(t,e){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;return(e==null?void 0:e.body)&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(o+=`[data-hash="${qt(e.body)}"]`),o}const Ft=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Gt(t){const e=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${Jt(t).map(o=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(o);if(a)return e.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const u=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(o);if(u)return e.push({name:u[1],matcher:u[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!o)return;const r=o.split(/\[(.+?)\](?!\])/);return"/"+r.map((p,d)=>{if(d%2){if(p.startsWith("x+"))return $e(String.fromCharCode(parseInt(p.slice(2),16)));if(p.startsWith("u+"))return $e(String.fromCharCode(...p.slice(2).split("-").map(A=>parseInt(A,16))));const _=Ft.exec(p);if(!_)throw new Error(`Invalid param: ${p}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,y,S,N,T]=_;return e.push({name:N,matcher:T,optional:!!y,rest:!!S,chained:S?d===1&&r[0]==="":!1}),S?"(.*?)":y?"([^/]*)?":"([^/]+?)"}return $e(p)}).join("")}).join("")}/?$`),params:e}}function zt(t){return!/^\([^)]+\)$/.test(t)}function Jt(t){return t.slice(1).split("/").filter(zt)}function Kt(t,e,n){const o={},a=t.slice(1);let u="";for(let r=0;r<e.length;r+=1){const f=e[r];let p=a[r];if(f.chained&&f.rest&&u&&(p=p?u+"/"+p:u),u="",p===void 0)f.rest&&(o[f.name]="");else{if(f.matcher&&!n[f.matcher](p)){if(f.optional&&f.chained){let d=a.indexOf(void 0,r);if(d===-1){const _=e[r+1];if((_==null?void 0:_.rest)&&_.chained)u=p;else return}for(;d>=r;)a[d]=a[d-1],d-=1;continue}return}o[f.name]=p}}if(!u)return o}function $e(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Mt(t,e,n,o){const a=new Set(e);return Object.entries(n).map(([f,[p,d,_]])=>{const{pattern:y,params:S}=Gt(f),N={id:f,exec:T=>{const A=y.exec(T);if(A)return Kt(A,S,o)},errors:[1,..._||[]].map(T=>t[T]),layouts:[0,...d||[]].map(r),leaf:u(p)};return N.errors.length=N.layouts.length=Math.max(N.errors.length,N.layouts.length),N});function u(f){const p=f<0;return p&&(f=~f),[p,t[f]]}function r(f){return f===void 0?f:[a.has(f),t[f]]}}function Wt(t){let e,n,o;var a=t[0][0];function u(r){return{props:{data:r[2],form:r[1]}}}return a&&(e=H(a,u(t))),{c(){e&&Y(e.$$.fragment),n=C()},l(r){e&&qe(e.$$.fragment,r),n=C()},m(r,f){e&&x(e,r,f),K(r,n,f),o=!0},p(r,f){const p={};if(f&4&&(p.data=r[2]),f&2&&(p.form=r[1]),a!==(a=r[0][0])){if(e){_e();const d=e;B(d.$$.fragment,1,0,()=>{X(d,1)}),we()}a?(e=H(a,u(r)),Y(e.$$.fragment),F(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}else a&&e.$set(p)},i(r){o||(e&&F(e.$$.fragment,r),o=!0)},o(r){e&&B(e.$$.fragment,r),o=!1},d(r){r&&G(n),e&&X(e,r)}}}function Ht(t){let e,n,o;var a=t[0][0];function u(r){return{props:{data:r[2],$$slots:{default:[Yt]},$$scope:{ctx:r}}}}return a&&(e=H(a,u(t))),{c(){e&&Y(e.$$.fragment),n=C()},l(r){e&&qe(e.$$.fragment,r),n=C()},m(r,f){e&&x(e,r,f),K(r,n,f),o=!0},p(r,f){const p={};if(f&4&&(p.data=r[2]),f&523&&(p.$$scope={dirty:f,ctx:r}),a!==(a=r[0][0])){if(e){_e();const d=e;B(d.$$.fragment,1,0,()=>{X(d,1)}),we()}a?(e=H(a,u(r)),Y(e.$$.fragment),F(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}else a&&e.$set(p)},i(r){o||(e&&F(e.$$.fragment,r),o=!0)},o(r){e&&B(e.$$.fragment,r),o=!1},d(r){r&&G(n),e&&X(e,r)}}}function Yt(t){let e,n,o;var a=t[0][1];function u(r){return{props:{data:r[3],form:r[1]}}}return a&&(e=H(a,u(t))),{c(){e&&Y(e.$$.fragment),n=C()},l(r){e&&qe(e.$$.fragment,r),n=C()},m(r,f){e&&x(e,r,f),K(r,n,f),o=!0},p(r,f){const p={};if(f&8&&(p.data=r[3]),f&2&&(p.form=r[1]),a!==(a=r[0][1])){if(e){_e();const d=e;B(d.$$.fragment,1,0,()=>{X(d,1)}),we()}a?(e=H(a,u(r)),Y(e.$$.fragment),F(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}else a&&e.$set(p)},i(r){o||(e&&F(e.$$.fragment,r),o=!0)},o(r){e&&B(e.$$.fragment,r),o=!1},d(r){r&&G(n),e&&X(e,r)}}}function at(t){let e,n=t[5]&&ot(t);return{c(){e=vt("div"),n&&n.c(),this.h()},l(o){e=Et(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var a=kt(e);n&&n.l(a),a.forEach(G),this.h()},h(){Ie(e,"id","svelte-announcer"),Ie(e,"aria-live","assertive"),Ie(e,"aria-atomic","true"),V(e,"position","absolute"),V(e,"left","0"),V(e,"top","0"),V(e,"clip","rect(0 0 0 0)"),V(e,"clip-path","inset(50%)"),V(e,"overflow","hidden"),V(e,"white-space","nowrap"),V(e,"width","1px"),V(e,"height","1px")},m(o,a){K(o,e,a),n&&n.m(e,null)},p(o,a){o[5]?n?n.p(o,a):(n=ot(o),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(o){o&&G(e),n&&n.d()}}}function ot(t){let e;return{c(){e=St(t[6])},l(n){e=Rt(n,t[6])},m(n,o){K(n,e,o)},p(n,o){o&64&&Ot(e,n[6])},d(n){n&&G(e)}}}function xt(t){let e,n,o,a,u;const r=[Ht,Wt],f=[];function p(_,y){return _[0][1]?0:1}e=p(t),n=f[e]=r[e](t);let d=t[4]&&at(t);return{c(){n.c(),o=wt(),d&&d.c(),a=C()},l(_){n.l(_),o=yt(_),d&&d.l(_),a=C()},m(_,y){f[e].m(_,y),K(_,o,y),d&&d.m(_,y),K(_,a,y),u=!0},p(_,[y]){let S=e;e=p(_),e===S?f[e].p(_,y):(_e(),B(f[S],1,1,()=>{f[S]=null}),we(),n=f[e],n?n.p(_,y):(n=f[e]=r[e](_),n.c()),F(n,1),n.m(o.parentNode,o)),_[4]?d?d.p(_,y):(d=at(_),d.c(),d.m(a.parentNode,a)):d&&(d.d(1),d=null)},i(_){u||(F(n),u=!0)},o(_){B(n),u=!1},d(_){f[e].d(_),_&&G(o),d&&d.d(_),_&&G(a)}}}function Xt(t,e,n){let{stores:o}=e,{page:a}=e,{components:u}=e,{form:r}=e,{data_0:f=null}=e,{data_1:p=null}=e;bt(o.page.notify);let d=!1,_=!1,y=null;return Ue(()=>{const S=o.page.subscribe(()=>{d&&(n(5,_=!0),n(6,y=document.title||"untitled page"))});return n(4,d=!0),S}),t.$$set=S=>{"stores"in S&&n(7,o=S.stores),"page"in S&&n(8,a=S.page),"components"in S&&n(0,u=S.components),"form"in S&&n(1,r=S.form),"data_0"in S&&n(2,f=S.data_0),"data_1"in S&&n(3,p=S.data_1)},t.$$.update=()=>{t.$$.dirty&384&&o.page.set(a)},[u,r,f,p,d,_,y,o,a]}class Zt extends gt{constructor(e){super(),_t(this,e,Xt,xt,ct,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Qt="modulepreload",en=function(t,e){return new URL(t,e).href},st={},de=function(e,n,o){if(!n||n.length===0)return e();const a=document.getElementsByTagName("link");return Promise.all(n.map(u=>{if(u=en(u,o),u in st)return;st[u]=!0;const r=u.endsWith(".css"),f=r?'[rel="stylesheet"]':"";if(!!o)for(let _=a.length-1;_>=0;_--){const y=a[_];if(y.href===u&&(!r||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${f}`))return;const d=document.createElement("link");if(d.rel=r?"stylesheet":Qt,r||(d.as="script",d.crossOrigin=""),d.href=u,document.head.appendChild(d),r)return new Promise((_,y)=>{d.addEventListener("load",_),d.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${u}`)))})})).then(()=>e())},tn={},be=[()=>de(()=>import("./chunks/0-5b8fd431.js"),["./chunks/0-5b8fd431.js","./chunks/_layout-da46b06b.js","./components/pages/_layout.svelte-dfae8eeb.js","./chunks/index-1c3aea92.js","./assets/_layout-cedf6dc0.css"],import.meta.url),()=>de(()=>import("./chunks/1-baab7253.js"),["./chunks/1-baab7253.js","./components/pages/_error.svelte-f783a847.js","./chunks/index-1c3aea92.js","./assets/_error-125d203c.css"],import.meta.url),()=>de(()=>import("./chunks/2-a3cfc6d3.js"),["./chunks/2-a3cfc6d3.js","./components/pages/_page.svelte-3f1ad45f.js","./chunks/index-1c3aea92.js","./assets/_page-12fdfad9.css"],import.meta.url),()=>de(()=>import("./chunks/3-06cabc68.js"),["./chunks/3-06cabc68.js","./chunks/_page-bab5f54e.js","./components/pages/R1/_page.svelte-6a21bd3e.js","./chunks/index-1c3aea92.js","./assets/_page-25bf98aa.css"],import.meta.url)],nn=[],rn={"/":[2],"/R1":[3]},an={handleError:({error:t})=>{console.error(t)}};class Te{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class it{constructor(e,n){this.status=e,this.location=n}}function on(t){t.client}const J={url:rt({}),page:rt({}),navigating:Ce(null),updated:Vt()};async function sn(t){var e;for(const n in t)if(typeof((e=t[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(t).map(async([o,a])=>[o,await a])));return t}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const ln=-1,cn=-2,fn=-3,un=-4,dn=-5,pn=-6;function hn(t){if(typeof t=="number")return o(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const e=t,n=Array(e.length);function o(a,u=!1){if(a===ln)return;if(a===fn)return NaN;if(a===un)return 1/0;if(a===dn)return-1/0;if(a===pn)return-0;if(u)throw new Error("Invalid input");if(a in n)return n[a];const r=e[a];if(!r||typeof r!="object")n[a]=r;else if(Array.isArray(r))if(typeof r[0]=="string")switch(r[0]){case"Date":n[a]=new Date(r[1]);break;case"Set":const p=new Set;n[a]=p;for(let y=1;y<r.length;y+=1)p.add(o(r[y]));break;case"Map":const d=new Map;n[a]=d;for(let y=1;y<r.length;y+=2)d.set(o(r[y]),o(r[y+1]));break;case"RegExp":n[a]=new RegExp(r[1],r[2]);break;case"Object":n[a]=Object(r[1]);break;case"BigInt":n[a]=BigInt(r[1]);break;case"null":const _=Object.create(null);n[a]=_;for(let y=1;y<r.length;y+=2)_[r[y]]=o(r[y+1]);break}else{const f=new Array(r.length);n[a]=f;for(let p=0;p<r.length;p+=1){const d=r[p];d!==cn&&(f[p]=o(d))}}else{const f={};n[a]=f;for(const p in r){const d=r[p];f[p]=o(d)}}return n[a]}return o(0)}const Ae=Mt(be,nn,rn,tn),De=be[0],Ve=be[1];De();Ve();let ne={};try{ne=JSON.parse(sessionStorage[dt])}catch{}function Pe(t){ne[t]=me()}function mn({target:t,base:e}){var xe;const n=document.documentElement,o=[];let a=null;const u={before_navigate:[],after_navigate:[]};let r={branch:[],error:null,url:null},f=!1,p=!1,d=!0,_=!1,y=!1,S=!1,N=!1,T,A=(xe=history.state)==null?void 0:xe[q];A||(A=Date.now(),history.replaceState({...history.state,[q]:A},"",location.href));const ve=ne[A];ve&&(history.scrollRestoration="manual",scrollTo(ve.x,ve.y));let z,Be,re;async function Fe(){re=re||Promise.resolve(),await re,re=null;const s=new URL(location.href),i=se(s,!0);a=null,await ze(i,s,[])}async function Ee(s,{noScroll:i=!1,replaceState:c=!1,keepFocus:l=!1,state:m={},invalidateAll:h=!1},g,v){return typeof s=="string"&&(s=new URL(s,et(document))),ie({url:s,scroll:i?me():null,keepfocus:l,redirect_chain:g,details:{state:m,replaceState:c},nav_token:v,accepted:()=>{h&&(N=!0)},blocked:()=>{},type:"goto"})}async function Ge(s){const i=se(s,!1);if(!i)throw new Error(`Attempted to preload a URL that does not belong to this app: ${s}`);return a={id:i.id,promise:Me(i).then(c=>(c.type==="loaded"&&c.state.error&&(a=null),c))},a.promise}async function ae(...s){const c=Ae.filter(l=>s.some(m=>l.exec(m))).map(l=>Promise.all([...l.layouts,l.leaf].map(m=>m==null?void 0:m[1]())));await Promise.all(c)}async function ze(s,i,c,l,m={},h){var v,b;Be=m;let g=s&&await Me(s);if(g||(g=await Ye(i,{id:null},await ee(new Error(`Not found: ${i.pathname}`),{url:i,params:{},route:{id:null}}),404)),i=(s==null?void 0:s.url)||i,Be!==m)return!1;if(g.type==="redirect")if(c.length>10||c.includes(i.pathname))g=await oe({status:500,error:await ee(new Error("Redirect loop"),{url:i,params:{},route:{id:null}}),url:i,route:{id:null}});else return Ee(new URL(g.location,i).href,{},[...c,i.pathname],m),!1;else((b=(v=g.props)==null?void 0:v.page)==null?void 0:b.status)>=400&&await J.updated.check()&&await le(i);if(o.length=0,N=!1,_=!0,l&&l.details){const{details:w}=l,O=w.replaceState?0:1;w.state[q]=A+=O,history[w.replaceState?"replaceState":"pushState"](w.state,"",i)}if(a=null,p){r=g.state,g.props.page&&(g.props.page.url=i);const w=he();T.$set(g.props),w()}else Je(g);if(l){const{scroll:w,keepfocus:O}=l;if(O||je(),await ce(),d){const I=i.hash&&document.getElementById(i.hash.slice(1));w?scrollTo(w.x,w.y):I?I.scrollIntoView():scrollTo(0,0)}}else await ce();d=!0,g.props.page&&(z=g.props.page),h&&h(),_=!1}function Je(s){var m;r=s.state;const i=document.querySelector("style[data-sveltekit]");i&&i.remove(),z=s.props.page;const c=he();T=new Zt({target:t,props:{...s.props,stores:J},hydrate:!0}),c();const l={from:null,to:pe("to",{params:r.params,route:{id:((m=r.route)==null?void 0:m.id)??null},url:new URL(location.href)}),willUnload:!1,type:"enter"};u.after_navigate.forEach(h=>h(l)),p=!0}async function Z({url:s,params:i,branch:c,status:l,error:m,route:h,form:g}){const v=c.filter(Boolean);let b="never";for(const R of c)(R==null?void 0:R.slash)!==void 0&&(b=R.slash);s.pathname=It(s.pathname,b),s.search=s.search;const w={type:"loaded",state:{url:s,params:i,branch:c,error:m,route:h},props:{components:v.map(R=>R.node.component)}};g!==void 0&&(w.props.form=g);let O={},I=!z;for(let R=0;R<v.length;R+=1){const E=v[R];O={...O,...E.data},(I||!r.branch.some(P=>P===E))&&(w.props[`data_${R}`]=O,I=I||Object.keys(E.data??{}).length>0)}if(I||(I=Object.keys(z.data).length!==Object.keys(O).length),!r.url||s.href!==r.url.href||r.error!==m||g!==void 0||I){w.props.page={error:m,params:i,route:h,status:l,url:new URL(s),form:g??null,data:I?O:z.data},Object.defineProperty(w.props.page,"routeId",{get(){throw new Error("$page.routeId has been replaced by $page.route.id")},enumerable:!1});const R=(E,P)=>{Object.defineProperty(w.props.page,E,{get:()=>{throw new Error(`$page.${E} has been replaced by $page.url.${P}`)}})};R("origin","origin"),R("path","pathname"),R("query","searchParams")}return w}async function ke({loader:s,parent:i,url:c,params:l,route:m,server_data_node:h}){var w,O,I;let g=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},b=await s();if((w=b.shared)!=null&&w.load){let D=function(...E){for(const P of E){const{href:U}=new URL(P,c);v.dependencies.add(U)}};const R={route:{get id(){return v.route=!0,m.id}},params:new Proxy(l,{get:(E,P)=>(v.params.add(P),E[P])}),data:(h==null?void 0:h.data)??null,url:Pt(c,()=>{v.url=!0}),async fetch(E,P){let U;E instanceof Request?(U=E.url,P={body:E.method==="GET"||E.method==="HEAD"?void 0:await E.blob(),cache:E.cache,credentials:E.credentials,headers:E.headers,integrity:E.integrity,keepalive:E.keepalive,method:E.method,mode:E.mode,redirect:E.redirect,referrer:E.referrer,referrerPolicy:E.referrerPolicy,signal:E.signal,...P}):U=E;const k=new URL(U,c).href;return D(k),p?Bt(U,k,P):Ct(U,P)},setHeaders:()=>{},depends:D,parent(){return v.parent=!0,i()}};Object.defineProperties(R,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},routeId:{get(){throw new Error("routeId has been replaced by route.id")},enumerable:!1}}),g=await b.shared.load.call(null,R)??null,g=g?await sn(g):null}return{node:b,loader:s,server:h,shared:(O=b.shared)!=null&&O.load?{type:"data",data:g,uses:v}:null,data:g??(h==null?void 0:h.data)??null,slash:((I=b.shared)==null?void 0:I.trailingSlash)??(h==null?void 0:h.slash)}}function Ke(s,i,c,l,m){if(N)return!0;if(!l)return!1;if(l.parent&&s||l.route&&i||l.url&&c)return!0;for(const h of l.params)if(m[h]!==r.params[h])return!0;for(const h of l.dependencies)if(o.some(g=>g(new URL(h))))return!0;return!1}function Se(s,i){return(s==null?void 0:s.type)==="data"?{type:"data",data:s.data,uses:{dependencies:new Set(s.uses.dependencies??[]),params:new Set(s.uses.params??[]),parent:!!s.uses.parent,route:!!s.uses.route,url:!!s.uses.url},slash:s.slash}:(s==null?void 0:s.type)==="skip"?i??null:null}async function Me({id:s,invalidating:i,url:c,params:l,route:m}){if((a==null?void 0:a.id)===s)return a.promise;const{errors:h,layouts:g,leaf:v}=m,b=[...g,v];h.forEach(k=>k==null?void 0:k().catch(()=>{})),b.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let w=null;const O=r.url?s!==r.url.pathname+r.url.search:!1,I=r.route?s!==r.route.id:!1,D=b.reduce((k,$,j)=>{var Q;const L=r.branch[j],M=!!($!=null&&$[0])&&((L==null?void 0:L.loader)!==$[1]||Ke(k.some(Boolean),I,O,(Q=L.server)==null?void 0:Q.uses,l));return k.push(M),k},[]);if(D.some(Boolean)){try{w=await lt(c,D)}catch(k){return oe({status:500,error:await ee(k,{url:c,params:l,route:{id:m.id}}),url:c,route:m})}if(w.type==="redirect")return w}const R=w==null?void 0:w.nodes;let E=!1;const P=b.map(async(k,$)=>{var Q;if(!k)return;const j=r.branch[$],L=R==null?void 0:R[$];if((!L||L.type==="skip")&&k[1]===(j==null?void 0:j.loader)&&!Ke(E,I,O,(Q=j.shared)==null?void 0:Q.uses,l))return j;if(E=!0,(L==null?void 0:L.type)==="error")throw L;return ke({loader:k[1],url:c,params:l,route:m,parent:async()=>{var Ze;const Xe={};for(let Re=0;Re<$;Re+=1)Object.assign(Xe,(Ze=await P[Re])==null?void 0:Ze.data);return Xe},server_data_node:Se(L===void 0&&k[0]?{type:"skip"}:L??null,j==null?void 0:j.server)})});for(const k of P)k.catch(()=>{});const U=[];for(let k=0;k<b.length;k+=1)if(b[k])try{U.push(await P[k])}catch($){if($ instanceof it)return{type:"redirect",location:$.location};let j=500,L;R!=null&&R.includes($)?(j=$.status??j,L=$.error):$ instanceof Te?(j=$.status,L=$.body):L=await ee($,{params:l,url:c,route:{id:m.id}});const M=await We(k,U,h);return M?await Z({url:c,params:l,branch:U.slice(0,M.idx).concat(M.node),status:j,error:L,route:m}):await Ye(c,{id:m.id},L,j)}else U.push(void 0);return await Z({url:c,params:l,branch:U,status:200,error:null,route:m,form:i?void 0:null})}async function We(s,i,c){for(;s--;)if(c[s]){let l=s;for(;!i[l];)l-=1;try{return{idx:l+1,node:{node:await c[s](),loader:c[s],data:{},server:null,shared:null}}}catch{continue}}}async function oe({status:s,error:i,url:c,route:l}){const m={},h=await De();let g=null;if(h.server)try{const w=await lt(c,[!0]);if(w.type!=="data"||w.nodes[0]&&w.nodes[0].type!=="data")throw 0;g=w.nodes[0]??null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||f)&&await le(c)}const v=await ke({loader:De,url:c,params:m,route:l,parent:()=>Promise.resolve({}),server_data_node:Se(g)}),b={node:await Ve(),loader:Ve,shared:null,server:null,data:null};return await Z({url:c,params:m,branch:[v,b],status:s,error:i,route:null})}function se(s,i){if(Ne(s,e))return;const c=Lt(s.pathname.slice(e.length)||"/");for(const l of Ae){const m=l.exec(c);if(m)return{id:s.pathname+s.search,invalidating:i,route:l,params:$t(m),url:s}}}function He({url:s,type:i,intent:c,delta:l}){var v,b;let m=!1;const h={from:pe("from",{params:r.params,route:{id:((v=r.route)==null?void 0:v.id)??null},url:r.url}),to:pe("to",{params:(c==null?void 0:c.params)??null,route:{id:((b=c==null?void 0:c.route)==null?void 0:b.id)??null},url:s}),willUnload:!c,type:i};l!==void 0&&(h.delta=l);const g={...h,cancel:()=>{m=!0}};return y||u.before_navigate.forEach(w=>w(g)),m?null:h}async function ie({url:s,scroll:i,keepfocus:c,redirect_chain:l,details:m,type:h,delta:g,nav_token:v,accepted:b,blocked:w}){const O=se(s,!1),I=He({url:s,type:h,delta:g,intent:O});if(!I){w();return}Pe(A),b(),y=!0,p&&J.navigating.set(I),await ze(O,s,l,{scroll:i,keepfocus:c,details:m},v,()=>{y=!1,u.after_navigate.forEach(D=>D(I)),J.navigating.set(null)})}async function Ye(s,i,c,l){return s.origin===location.origin&&s.pathname===location.pathname&&!f?await oe({status:l,error:c,url:s,route:i}):await le(s)}function le(s){return location.href=s.href,new Promise(()=>{})}function mt(){let s;n.addEventListener("mousemove",h=>{const g=h.target;clearTimeout(s),s=setTimeout(()=>{l(g,2)},20)});function i(h){l(h.composedPath()[0],1)}n.addEventListener("mousedown",i),n.addEventListener("touchstart",i,{passive:!0});const c=new IntersectionObserver(h=>{for(const g of h)g.isIntersecting&&(ae(new URL(g.target.href).pathname),c.unobserve(g.target))},{threshold:0});function l(h,g){const v=nt(h,n);if(!v)return;const{url:b,external:w}=Le(v,e);if(w)return;const O=ue(v);O.reload||(g<=O.preload_data?Ge(b):g<=O.preload_code&&ae(b.pathname))}function m(){c.disconnect();for(const h of n.querySelectorAll("a")){const{url:g,external:v}=Le(h,e);if(v)continue;const b=ue(h);b.reload||(b.preload_code===ge.viewport&&c.observe(h),b.preload_code===ge.eager&&ae(g.pathname))}}u.after_navigate.push(m),m()}return{after_navigate:s=>{Ue(()=>(u.after_navigate.push(s),()=>{const i=u.after_navigate.indexOf(s);u.after_navigate.splice(i,1)}))},before_navigate:s=>{Ue(()=>(u.before_navigate.push(s),()=>{const i=u.before_navigate.indexOf(s);u.before_navigate.splice(i,1)}))},disable_scroll_handling:()=>{(_||!p)&&(d=!1)},goto:(s,i={})=>{if("keepfocus"in i&&!("keepFocus"in i))throw new Error("`keepfocus` has been renamed to `keepFocus` (note the difference in casing)");if("noscroll"in i&&!("noScroll"in i))throw new Error("`noscroll` has been renamed to `noScroll` (note the difference in casing)");return Ee(s,i,[])},invalidate:s=>{if(s===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof s=="function")o.push(s);else{const{href:i}=new URL(s,location.href);o.push(c=>c.href===i)}return Fe()},invalidateAll:()=>(N=!0,Fe()),preload_data:async s=>{const i=new URL(s,et(document));await Ge(i)},preload_code:ae,apply_action:async s=>{if(s.type==="error"){const i=new URL(location.href),{branch:c,route:l}=r;if(!l)return;const m=await We(r.branch.length,c,l.errors);if(m){const h=await Z({url:i,params:r.params,branch:c.slice(0,m.idx).concat(m.node),status:500,error:s.error,route:l});r=h.state;const g=he();T.$set(h.props),g(),ce().then(je)}}else if(s.type==="redirect")Ee(s.location,{invalidateAll:!0},[]);else{const i={form:s.data,page:{...z,form:s.data,status:s.status}},c=he();T.$set(i),c(),s.type==="success"&&ce().then(je)}},_start_router:()=>{var s;history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var l;let c=!1;if(!y){const m={from:pe("from",{params:r.params,route:{id:((l=r.route)==null?void 0:l.id)??null},url:r.url}),to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};u.before_navigate.forEach(h=>h(m))}c?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Pe(A);try{sessionStorage[dt]=JSON.stringify(ne)}catch{}}}),(s=navigator.connection)!=null&&s.saveData||mt(),n.addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const c=nt(i.composedPath()[0],n);if(!c)return;const{url:l,external:m,has:h}=Le(c,e),g=ue(c);if(!l||!(c instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:")||h.download)return;if(m||g.reload){He({url:l,type:"link"})||i.preventDefault(),y=!0;return}const[b,w]=l.href.split("#");if(w!==void 0&&b===location.href.split("#")[0]){S=!0,Pe(A),r.url=l,J.page.set({...z,url:l}),J.page.notify();return}ie({url:l,scroll:g.noscroll?me():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),n.addEventListener("submit",i=>{var b;if(i.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(i.target),l=i.submitter;if(((l==null?void 0:l.formMethod)||c.method)!=="get")return;const h=new URL(((b=i.submitter)==null?void 0:b.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||c.action);if(Ne(h,e))return;const{noscroll:g,reload:v}=ue(i.target);v||(i.preventDefault(),i.stopPropagation(),h.search=new URLSearchParams(new FormData(i.target)).toString(),ie({url:h,scroll:g?me():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"}))}),addEventListener("popstate",i=>{var c;if((c=i.state)!=null&&c[q]){if(i.state[q]===A)return;const l=i.state[q]-A;ie({url:new URL(location.href),scroll:ne[i.state[q]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{A=i.state[q]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{S&&(S=!1,history.replaceState({...history.state,[q]:++A},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&J.navigating.set(null)})},_hydrate:async({status:s=200,error:i,node_ids:c,params:l,route:m,data:h,form:g})=>{f=!0;const v=new URL(location.href);({params:l={},route:m={id:null}}=se(v,!1)||{});let b;try{const w=c.map(async(O,I)=>{const D=h[I];return ke({loader:be[O],url:v,params:l,route:m,parent:async()=>{const R={};for(let E=0;E<I;E+=1)Object.assign(R,(await w[E]).data);return R},server_data_node:Se(D)})});b=await Z({url:v,params:l,branch:await Promise.all(w),status:s,error:i,form:g,route:Ae.find(({id:O})=>O===m.id)??null})}catch(w){if(w instanceof it){await le(new URL(w.location,location.href));return}b=await oe({status:w instanceof Te?w.status:500,error:await ee(w,{url:v,params:l,route:m}),url:v,route:m})}Je(b)}}}async function lt(t,e){var u;const n=new URL(t);n.pathname=Nt(t.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(r=>r?"1":"").join("_"));const o=await ye(n.href),a=await o.json();if(!o.ok)throw new Error(a);return(u=a.nodes)==null||u.forEach(r=>{(r==null?void 0:r.type)==="data"&&(r.data=hn(r.data),r.uses={dependencies:new Set(r.uses.dependencies??[]),params:new Set(r.uses.params??[]),parent:!!r.uses.parent,route:!!r.uses.route,url:!!r.uses.url})}),a}function ee(t,e){return t instanceof Te?t.body:an.handleError({error:t,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}const gn=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function pe(t,e){for(const n of gn)Object.defineProperty(e,n,{get(){throw new Error(`The navigation shape changed - ${t}.${n} should now be ${t}.url.${n}`)},enumerable:!1});return Object.defineProperty(e,"routeId",{get(){throw new Error(`The navigation shape changed - ${t}.routeId should now be ${t}.route.id`)},enumerable:!1}),e}function he(){return()=>{}}function je(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var o;(o=getSelection())==null||o.removeAllRanges()}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")}}async function wn({env:t,hydrate:e,paths:n,target:o,version:a}){Tt(n),Dt(a);const u=mn({target:o,base:n.base});on({client:u}),e?await u._hydrate(e):u.goto(location.href,{replaceState:!0}),u._start_router()}export{wn as start};
