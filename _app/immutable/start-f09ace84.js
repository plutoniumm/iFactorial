import{n as ke,s as et,S as rt,i as at,a as st,e as B,c as ot,b as K,g as de,t as F,d as he,f as J,h as z,j as it,o as Oe,k as lt,l as ct,m as ft,p as Ee,q,r as ut,u as pt,v as dt,w as W,x as X,y as je,z as x,A as Z,B as Ge}from"./chunks/index-8a065516.js";function ht(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function mt(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}const gt=["href","pathname","search","searchParams","toString","toJSON"];function _t(r,e){const t=new URL(r);for(const s of gt){let o=t[s];Object.defineProperty(t,s,{get(){return e(),o},enumerable:!0,configurable:!0})}return yt(t),t}function yt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const H=[];function Ne(r,e=ke){let t;const s=new Set;function o(i){if(et(r,i)&&(r=i,t)){const h=!H.length;for(const p of s)p[1](),H.push(p,r);if(h){for(let p=0;p<H.length;p+=2)H[p][0](H[p+1]);H.length=0}}}function c(i){o(i(r))}function n(i,h=ke){const p=[i,h];return s.add(p),s.size===1&&(t=e(o)||ke),i(r),()=>{s.delete(p),s.size===0&&(t(),t=null)}}return{set:o,update:c,subscribe:n}}let Ke="",tt="";function wt(r){Ke=r.base,tt=r.assets||Ke}function Me(r){let e=r.baseURI;if(!e){const t=r.getElementsByTagName("base");e=t.length?t[0].href:r.URL}return e}function $e(){return{x:pageXOffset,y:pageYOffset}}function Ye(r){let e,t=null,s=null,o=null;for(const n of r.composedPath())n instanceof Element&&(!e&&n.nodeName.toUpperCase()==="A"&&(e=n),t===null&&(t=Re(n,"data-sveltekit-noscroll")),s===null&&(s=Re(n,"data-sveltekit-prefetch")),o===null&&(o=Re(n,"data-sveltekit-reload")));const c=e&&new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI);return{a:e,url:c,options:{noscroll:t,prefetch:s,reload:o}}}function Re(r,e){const t=r.getAttribute(e);return t===null?t:t===""?!0:(t==="off",!1)}function He(r){const e=Ne(r);let t=!0;function s(){t=!0,e.update(n=>n)}function o(n){t=!1,e.set(n)}function c(n){let i;return e.subscribe(h=>{(i===void 0||t&&h!==i)&&n(i=h)})}return{notify:s,set:o,subscribe:c}}function bt(){const{set:r,subscribe:e}=Ne(!1);let t;async function s(){clearTimeout(t);const o=await fetch(`${tt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(o.ok){const{version:c}=await o.json(),n=c!=="1666759931622";return n&&(r(!0),clearTimeout(t)),n}else throw new Error(`Version check failed: ${o.status}`)}return{subscribe:e,check:s}}function vt(r){let e=5381;if(typeof r=="string"){let t=r.length;for(;t;)e=e*33^r.charCodeAt(--t)}else if(ArrayBuffer.isView(r)){const t=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let s=t.length;for(;s;)e=e*33^t[--s]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const me=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const s=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;pe.delete(s)}return me(r,e)};const pe=new Map;function kt(r,e,t){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;(t==null?void 0:t.body)&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&(o+=`[data-hash="${vt(t.body)}"]`);const c=document.querySelector(o);if(c!=null&&c.textContent){const{body:n,...i}=JSON.parse(c.textContent),h=c.getAttribute("data-ttl");return h&&pe.set(e,{body:n,init:i,ttl:1e3*Number(h)}),Promise.resolve(new Response(n,i))}return me(r,t)}function Et(r,e){const t=pe.get(r);if(t){if(performance.now()<t.ttl)return new Response(t.body,t.init);pe.delete(r)}return me(r,e)}const Rt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function St(r){const e=[],t=[];let s=!0;return{pattern:r==="/"?/^\/$/:new RegExp(`^${$t(r).map((c,n,i)=>{const h=decodeURIComponent(c),p=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(h);if(p)return e.push(p[1]),t.push(p[2]),"(?:/(.*))?";const _=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(h);if(_)return e.push(_[1]),t.push(_[2]),"(?:/([^/]+))?";const w=n===i.length-1;if(!h)return;const P=h.split(/\[(.+?)\](?!\])/).map((T,V)=>{if(V%2){const D=Rt.exec(T);if(!D)throw new Error(`Invalid param: ${T}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,ae,M,se,Q]=D;return e.push(se),t.push(Q),M?"(.*?)":ae?"([^/]*)?":"([^/]+?)"}return w&&T.includes(".")&&(s=!1),T.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("");return"/"+P}).join("")}${s?"/?":""}$`),names:e,types:t}}function Ot(r){return!/^\([^)]+\)$/.test(r)}function $t(r){return r.slice(1).split("/").filter(Ot)}function It(r,e,t,s,o){const c={};let n=-1;for(let i=0;i<t.length;i+=1){const h=t[i],p=s[i];let _=r[i+1]||"";if(p){const w=o[p];if(!w)throw new Error(`Missing "${p}" param matcher`);if(n=e.indexOf(`=${p}`,n+1),!(!_&&e.lastIndexOf("[[",n)>e.lastIndexOf("[...",n))&&!w(_))return}c[h]=_}return c}function Lt(r,e,t,s){const o=new Set(e);return Object.entries(t).map(([i,[h,p,_]])=>{const{pattern:w,names:S,types:P}=St(i),T={id:i,exec:V=>{const D=w.exec(V);if(D)return It(D,i,S,P,s)},errors:[1,..._||[]].map(V=>r[V]),layouts:[0,...p||[]].map(n),leaf:c(h)};return T.errors.length=T.layouts.length=Math.max(T.errors.length,T.layouts.length),T});function c(i){const h=i<0;return h&&(i=~i),[h,r[i]]}function n(i){return i===void 0?i:[o.has(i),r[i]]}}function At(r){let e,t,s;var o=r[0][0];function c(n){return{props:{data:n[2],form:n[1]}}}return o&&(e=W(o,c(r))),{c(){e&&X(e.$$.fragment),t=B()},l(n){e&&je(e.$$.fragment,n),t=B()},m(n,i){e&&x(e,n,i),K(n,t,i),s=!0},p(n,i){const h={};if(i&4&&(h.data=n[2]),i&2&&(h.form=n[1]),o!==(o=n[0][0])){if(e){de();const p=e;F(p.$$.fragment,1,0,()=>{Z(p,1)}),he()}o?(e=W(o,c(n)),X(e.$$.fragment),J(e.$$.fragment,1),x(e,t.parentNode,t)):e=null}else o&&e.$set(h)},i(n){s||(e&&J(e.$$.fragment,n),s=!0)},o(n){e&&F(e.$$.fragment,n),s=!1},d(n){n&&z(t),e&&Z(e,n)}}}function jt(r){let e,t,s;var o=r[0][0];function c(n){return{props:{data:n[2],$$slots:{default:[Nt]},$$scope:{ctx:n}}}}return o&&(e=W(o,c(r))),{c(){e&&X(e.$$.fragment),t=B()},l(n){e&&je(e.$$.fragment,n),t=B()},m(n,i){e&&x(e,n,i),K(n,t,i),s=!0},p(n,i){const h={};if(i&4&&(h.data=n[2]),i&523&&(h.$$scope={dirty:i,ctx:n}),o!==(o=n[0][0])){if(e){de();const p=e;F(p.$$.fragment,1,0,()=>{Z(p,1)}),he()}o?(e=W(o,c(n)),X(e.$$.fragment),J(e.$$.fragment,1),x(e,t.parentNode,t)):e=null}else o&&e.$set(h)},i(n){s||(e&&J(e.$$.fragment,n),s=!0)},o(n){e&&F(e.$$.fragment,n),s=!1},d(n){n&&z(t),e&&Z(e,n)}}}function Nt(r){let e,t,s;var o=r[0][1];function c(n){return{props:{data:n[3],form:n[1]}}}return o&&(e=W(o,c(r))),{c(){e&&X(e.$$.fragment),t=B()},l(n){e&&je(e.$$.fragment,n),t=B()},m(n,i){e&&x(e,n,i),K(n,t,i),s=!0},p(n,i){const h={};if(i&8&&(h.data=n[3]),i&2&&(h.form=n[1]),o!==(o=n[0][1])){if(e){de();const p=e;F(p.$$.fragment,1,0,()=>{Z(p,1)}),he()}o?(e=W(o,c(n)),X(e.$$.fragment),J(e.$$.fragment,1),x(e,t.parentNode,t)):e=null}else o&&e.$set(h)},i(n){s||(e&&J(e.$$.fragment,n),s=!0)},o(n){e&&F(e.$$.fragment,n),s=!1},d(n){n&&z(t),e&&Z(e,n)}}}function We(r){let e,t=r[5]&&Xe(r);return{c(){e=lt("div"),t&&t.c(),this.h()},l(s){e=ct(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=ft(e);t&&t.l(o),o.forEach(z),this.h()},h(){Ee(e,"id","svelte-announcer"),Ee(e,"aria-live","assertive"),Ee(e,"aria-atomic","true"),q(e,"position","absolute"),q(e,"left","0"),q(e,"top","0"),q(e,"clip","rect(0 0 0 0)"),q(e,"clip-path","inset(50%)"),q(e,"overflow","hidden"),q(e,"white-space","nowrap"),q(e,"width","1px"),q(e,"height","1px")},m(s,o){K(s,e,o),t&&t.m(e,null)},p(s,o){s[5]?t?t.p(s,o):(t=Xe(s),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(s){s&&z(e),t&&t.d()}}}function Xe(r){let e;return{c(){e=ut(r[6])},l(t){e=pt(t,r[6])},m(t,s){K(t,e,s)},p(t,s){s&64&&dt(e,t[6])},d(t){t&&z(e)}}}function Ut(r){let e,t,s,o,c;const n=[jt,At],i=[];function h(_,w){return _[0][1]?0:1}e=h(r),t=i[e]=n[e](r);let p=r[4]&&We(r);return{c(){t.c(),s=st(),p&&p.c(),o=B()},l(_){t.l(_),s=ot(_),p&&p.l(_),o=B()},m(_,w){i[e].m(_,w),K(_,s,w),p&&p.m(_,w),K(_,o,w),c=!0},p(_,[w]){let S=e;e=h(_),e===S?i[e].p(_,w):(de(),F(i[S],1,1,()=>{i[S]=null}),he(),t=i[e],t?t.p(_,w):(t=i[e]=n[e](_),t.c()),J(t,1),t.m(s.parentNode,s)),_[4]?p?p.p(_,w):(p=We(_),p.c(),p.m(o.parentNode,o)):p&&(p.d(1),p=null)},i(_){c||(J(t),c=!0)},o(_){F(t),c=!1},d(_){i[e].d(_),_&&z(s),p&&p.d(_),_&&z(o)}}}function Pt(r,e,t){let{stores:s}=e,{page:o}=e,{components:c}=e,{form:n}=e,{data_0:i=null}=e,{data_1:h=null}=e;it(s.page.notify);let p=!1,_=!1,w=null;return Oe(()=>{const S=s.page.subscribe(()=>{p&&(t(5,_=!0),t(6,w=document.title||"untitled page"))});return t(4,p=!0),S}),r.$$set=S=>{"stores"in S&&t(7,s=S.stores),"page"in S&&t(8,o=S.page),"components"in S&&t(0,c=S.components),"form"in S&&t(1,n=S.form),"data_0"in S&&t(2,i=S.data_0),"data_1"in S&&t(3,h=S.data_1)},r.$$.update=()=>{r.$$.dirty&384&&s.page.set(o)},[c,n,i,h,p,_,w,s,o]}class Tt extends rt{constructor(e){super(),at(this,e,Pt,Ut,et,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Dt=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),Vt=function(r,e){return new URL(r,e).href},xe={},le=function(e,t,s){return!t||t.length===0?e():Promise.all(t.map(o=>{if(o=Vt(o,s),o in xe)return;xe[o]=!0;const c=o.endsWith(".css"),n=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${n}`))return;const i=document.createElement("link");if(i.rel=c?"stylesheet":Dt,c||(i.as="script",i.crossOrigin=""),i.href=o,document.head.appendChild(i),c)return new Promise((h,p)=>{i.addEventListener("load",h),i.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e())},qt={},ge=[()=>le(()=>import("./chunks/0-3cf4e182.js"),["chunks/0-3cf4e182.js","chunks/_layout-8d2a742b.js","components/pages/_layout.svelte-d1116d5a.js","assets/_layout-cedf6dc0.css","chunks/index-8a065516.js"],import.meta.url),()=>le(()=>import("./chunks/1-9ee90f51.js"),["chunks/1-9ee90f51.js","components/pages/_error.svelte-3cf7f47b.js","assets/_error-125d203c.css","chunks/index-8a065516.js"],import.meta.url),()=>le(()=>import("./chunks/2-8c37fda1.js"),["chunks/2-8c37fda1.js","components/pages/_page.svelte-ca8f3d18.js","assets/_page-12fdfad9.css","chunks/index-8a065516.js"],import.meta.url),()=>le(()=>import("./chunks/3-e5323211.js"),["chunks/3-e5323211.js","chunks/_page-55d2c0b9.js","components/pages/R1/_page.svelte-e80f2644.js","assets/_page-25bf98aa.css","chunks/index-8a065516.js"],import.meta.url)],Ct=[],Bt={"/":[2],"/R1":[3]},Ft={handleError:({error:r})=>{console.error(r)}};class Ie{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Ze{constructor(e,t){this.status=e,this.location=t}}function Jt(r){r.client}const G={url:He({}),page:He({}),navigating:Ne(null),updated:bt()},zt="/__data.json";async function Gt(r){var e;for(const t in r)if(typeof((e=r[t])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([s,o])=>[s,await o])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Kt=-1,Mt=-2,Yt=-3,Ht=-4,Wt=-5,Xt=-6;function xt(r){const e=JSON.parse(r);if(typeof e=="number")return o(e);const t=e,s=Array(t.length);function o(c){if(c===Kt)return;if(c===Yt)return NaN;if(c===Ht)return 1/0;if(c===Wt)return-1/0;if(c===Xt)return-0;if(c in s)return s[c];const n=t[c];if(!n||typeof n!="object")s[c]=n;else if(Array.isArray(n))if(typeof n[0]=="string")switch(n[0]){case"Date":s[c]=new Date(n[1]);break;case"Set":const h=new Set;s[c]=h;for(let w=1;w<n.length;w+=1)h.add(o(n[w]));break;case"Map":const p=new Map;s[c]=p;for(let w=1;w<n.length;w+=2)p.set(o(n[w]),o(n[w+1]));break;case"RegExp":s[c]=new RegExp(n[1],n[2]);break;case"Object":s[c]=Object(n[1]);break;case"BigInt":s[c]=BigInt(n[1]);break;case"null":const _=Object.create(null);s[c]=_;for(let w=1;w<n.length;w+=2)_[n[w]]=o(n[w+1]);break}else{const i=new Array(n.length);s[c]=i;for(let h=0;h<n.length;h+=1){const p=n[h];p!==Mt&&(i[h]=o(p))}}else{const i={};s[c]=i;for(const h in n){const p=n[h];i[h]=o(p)}}return s[c]}return o(0)}const nt="sveltekit:scroll",C="sveltekit:index",ce=Lt(ge,Ct,Bt,qt),Le=ge[0],Ae=ge[1];Le();Ae();let re={};try{re=JSON.parse(sessionStorage[nt])}catch{}function Se(r){re[r]=$e()}function Zt({target:r,base:e,trailing_slash:t}){var Fe;const s=[];let o=null;const c={before_navigate:[],after_navigate:[]};let n={branch:[],error:null,url:null},i=!1,h=!1,p=!0,_=!1,w=!1,S,P=(Fe=history.state)==null?void 0:Fe[C];P||(P=Date.now(),history.replaceState({...history.state,[C]:P},"",location.href));const T=re[P];T&&(history.scrollRestoration="manual",scrollTo(T.x,T.y));let V=!1,D,ae,M;async function se(){M=M||Promise.resolve(),await M,M=null;const a=new URL(location.href),u=we(a,!0);o=null,await Pe(u,a,[])}async function Q(a,{noscroll:u=!1,replaceState:d=!1,keepfocus:l=!1,state:f={}},m,g){return typeof a=="string"&&(a=new URL(a,Me(document))),be({url:a,scroll:u?$e():null,keepfocus:l,redirect_chain:m,details:{state:f,replaceState:d},nav_token:g,accepted:()=>{},blocked:()=>{},type:"goto"})}async function Ue(a){const u=we(a,!1);if(!u)throw new Error(`Attempted to prefetch a URL that does not belong to this app: ${a}`);return o={id:u.id,promise:Ve(u)},o.promise}async function Pe(a,u,d,l,f={},m){var E,k;ae=f;let g=a&&await Ve(a);if(g||(g=await Be(u,null,ne(new Error(`Not found: ${u.pathname}`),{url:u,params:{},routeId:null}),404)),u=(a==null?void 0:a.url)||u,ae!==f)return!1;if(g.type==="redirect")if(d.length>10||d.includes(u.pathname))g=await oe({status:500,error:ne(new Error("Redirect loop"),{url:u,params:{},routeId:null}),url:u,routeId:null});else return Q(new URL(g.location,u).href,{},[...d,u.pathname],f),!1;else((k=(E=g.props)==null?void 0:E.page)==null?void 0:k.status)>=400&&await G.updated.check()&&await ie(u);if(s.length=0,w=!1,_=!0,l&&l.details){const{details:b}=l,v=b.replaceState?0:1;b.state[C]=P+=v,history[b.replaceState?"replaceState":"pushState"](b.state,"",u)}if(o=null,h){n=g.state,g.props.page&&(g.props.page.url=u);const b=ue();S.$set(g.props),b()}else Te(g);if(l){const{scroll:b,keepfocus:v}=l;if(!v){const O=document.body,I=O.getAttribute("tabindex");O.tabIndex=-1,O.focus({preventScroll:!0}),setTimeout(()=>{var L;(L=getSelection())==null||L.removeAllRanges()}),I!==null?O.setAttribute("tabindex",I):O.removeAttribute("tabindex")}if(await Ge(),p){const O=u.hash&&document.getElementById(u.hash.slice(1));b?scrollTo(b.x,b.y):O?O.scrollIntoView():scrollTo(0,0)}}else await Ge();p=!0,g.props.page&&(D=g.props.page),m&&m(),_=!1}function Te(a){var f,m;n=a.state;const u=document.querySelector("style[data-sveltekit]");u&&u.remove(),D=a.props.page;const d=ue();S=new Tt({target:r,props:{...a.props,stores:G},hydrate:!0}),d();const l={from:null,to:fe("to",{params:n.params,routeId:(m=(f=n.route)==null?void 0:f.id)!=null?m:null,url:new URL(location.href)}),type:"load"};c.after_navigate.forEach(g=>g(l)),h=!0}async function ee({url:a,params:u,branch:d,status:l,error:f,route:m,form:g}){var I;const E=d.filter(Boolean),k={type:"loaded",state:{url:a,params:u,branch:d,error:f,route:m},props:{components:E.map(L=>L.node.component)}};g!==void 0&&(k.props.form=g);let b={},v=!D;for(let L=0;L<E.length;L+=1){const N=E[L];b={...b,...N.data},(v||!n.branch.some(U=>U===N))&&(k.props[`data_${L}`]=b,v=v||Object.keys((I=N.data)!=null?I:{}).length>0)}if(v||(v=Object.keys(D.data).length!==Object.keys(b).length),!n.url||a.href!==n.url.href||n.error!==f||g!==void 0||v){k.props.page={error:f,params:u,routeId:m&&m.id,status:l,url:a,form:g,data:v?b:D.data};const L=(N,U)=>{Object.defineProperty(k.props.page,N,{get:()=>{throw new Error(`$page.${N} has been replaced by $page.url.${U}`)}})};L("origin","origin"),L("path","pathname"),L("query","searchParams")}return k}async function _e({loader:a,parent:u,url:d,params:l,routeId:f,server_data_node:m}){var b,v,O,I,L;let g=null;const E={dependencies:new Set,params:new Set,parent:!1,url:!1},k=await a();if((b=k.shared)!=null&&b.load){let N=function(...$){for(const y of $){const{href:R}=new URL(y,d);E.dependencies.add(R)}};const U={routeId:f,params:new Proxy(l,{get:($,y)=>(E.params.add(y),$[y])}),data:(v=m==null?void 0:m.data)!=null?v:null,url:_t(d,()=>{E.url=!0}),async fetch($,y){let R;$ instanceof Request?(R=$.url,y={body:$.method==="GET"||$.method==="HEAD"?void 0:await $.blob(),cache:$.cache,credentials:$.credentials,headers:$.headers,integrity:$.integrity,keepalive:$.keepalive,method:$.method,mode:$.mode,redirect:$.redirect,referrer:$.referrer,referrerPolicy:$.referrerPolicy,signal:$.signal,...y}):R=$;const j=new URL(R,d).href;return N(j),h?Et(j,y):kt(R,j,y)},setHeaders:()=>{},depends:N,parent(){return E.parent=!0,u()}};Object.defineProperties(U,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),g=(O=await k.shared.load.call(null,U))!=null?O:null,g=g?await Gt(g):null}return{node:k,loader:a,server:m,shared:(I=k.shared)!=null&&I.load?{type:"data",data:g,uses:E}:null,data:(L=g!=null?g:m==null?void 0:m.data)!=null?L:null}}function De(a,u,d,l){if(w)return!0;if(!d)return!1;if(d.parent&&u||d.url&&a)return!0;for(const f of d.params)if(l[f]!==n.params[f])return!0;for(const f of d.dependencies)if(s.some(m=>m(new URL(f))))return!0;return!1}function ye(a,u){var d,l;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((d=a.uses.dependencies)!=null?d:[]),params:new Set((l=a.uses.params)!=null?l:[]),parent:!!a.uses.parent,url:!!a.uses.url}}:(a==null?void 0:a.type)==="skip"&&u!=null?u:null}async function Ve({id:a,invalidating:u,url:d,params:l,route:f}){var $;if((o==null?void 0:o.id)===a)return o.promise;const{errors:m,layouts:g,leaf:E}=f,k=[...g,E];m.forEach(y=>y==null?void 0:y().catch(()=>{})),k.forEach(y=>y==null?void 0:y[1]().catch(()=>{}));let b=null;const v=n.url?a!==n.url.pathname+n.url.search:!1,O=k.reduce((y,R,j)=>{var te;const A=n.branch[j],Y=!!(R!=null&&R[0])&&((A==null?void 0:A.loader)!==R[1]||De(v,y.some(Boolean),(te=A.server)==null?void 0:te.uses,l));return y.push(Y),y},[]);if(O.some(Boolean)){try{b=await Qe(d,O)}catch(y){return oe({status:500,error:ne(y,{url:d,params:l,routeId:f.id}),url:d,routeId:f.id})}if(b.type==="redirect")return b}const I=b==null?void 0:b.nodes;let L=!1;const N=k.map(async(y,R)=>{var te;if(!y)return;const j=n.branch[R],A=I==null?void 0:I[R];if((!A||A.type==="skip")&&y[1]===(j==null?void 0:j.loader)&&!De(v,L,(te=j.shared)==null?void 0:te.uses,l))return j;if(L=!0,(A==null?void 0:A.type)==="error")throw A;return _e({loader:y[1],url:d,params:l,routeId:f.id,parent:async()=>{var ze;const Je={};for(let ve=0;ve<R;ve+=1)Object.assign(Je,(ze=await N[ve])==null?void 0:ze.data);return Je},server_data_node:ye(A===void 0&&y[0]?{type:"skip"}:A!=null?A:null,j==null?void 0:j.server)})});for(const y of N)y.catch(()=>{});const U=[];for(let y=0;y<k.length;y+=1)if(k[y])try{U.push(await N[y])}catch(R){if(R instanceof Ze)return{type:"redirect",location:R.location};let j=500,A;I!=null&&I.includes(R)?(j=($=R.status)!=null?$:j,A=R.error):R instanceof Ie?(j=R.status,A=R.body):A=ne(R,{params:l,url:d,routeId:f.id});const Y=await qe(y,U,m);return Y?await ee({url:d,params:l,branch:U.slice(0,Y.idx).concat(Y.node),status:j,error:A,route:f}):await Be(d,f.id,A,j)}else U.push(void 0);return await ee({url:d,params:l,branch:U,status:200,error:null,route:f,form:u?void 0:null})}async function qe(a,u,d){for(;a--;)if(d[a]){let l=a;for(;!u[l];)l-=1;try{return{idx:l+1,node:{node:await d[a](),loader:d[a],data:{},server:null,shared:null}}}catch{continue}}}async function oe({status:a,error:u,url:d,routeId:l}){var b;const f={},m=await Le();let g=null;if(m.server)try{const v=await Qe(d,[!0]);if(v.type!=="data"||v.nodes[0]&&v.nodes[0].type!=="data")throw 0;g=(b=v.nodes[0])!=null?b:null}catch{(d.origin!==location.origin||d.pathname!==location.pathname||i)&&await ie(d)}const E=await _e({loader:Le,url:d,params:f,routeId:l,parent:()=>Promise.resolve({}),server_data_node:ye(g)}),k={node:await Ae(),loader:Ae,shared:null,server:null,data:null};return await ee({url:d,params:f,branch:[E,k],status:a,error:u,route:null})}function we(a,u){if(Ce(a))return;const d=decodeURI(a.pathname.slice(e.length)||"/");for(const l of ce){const f=l.exec(d);if(f){const m=new URL(a.origin+ht(a.pathname,t)+a.search+a.hash);return{id:m.pathname+m.search,invalidating:u,route:l,params:mt(f),url:m}}}}function Ce(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}async function be({url:a,scroll:u,keepfocus:d,redirect_chain:l,details:f,type:m,delta:g,nav_token:E,accepted:k,blocked:b}){var N,U,$,y;let v=!1;const O=we(a,!1),I={from:fe("from",{params:n.params,routeId:(U=(N=n.route)==null?void 0:N.id)!=null?U:null,url:n.url}),to:fe("to",{params:($=O==null?void 0:O.params)!=null?$:null,routeId:(y=O==null?void 0:O.route.id)!=null?y:null,url:a}),type:m};g!==void 0&&(I.delta=g);const L={...I,cancel:()=>{v=!0}};if(c.before_navigate.forEach(R=>R(L)),v){b();return}Se(P),k(),h&&G.navigating.set(I),await Pe(O,a,l,{scroll:u,keepfocus:d,details:f},E,()=>{c.after_navigate.forEach(R=>R(I)),G.navigating.set(null)})}async function Be(a,u,d,l){return a.origin===location.origin&&a.pathname===location.pathname&&!i?await oe({status:l,error:d,url:a,routeId:u}):await ie(a)}function ie(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{Oe(()=>(c.after_navigate.push(a),()=>{const u=c.after_navigate.indexOf(a);c.after_navigate.splice(u,1)}))},before_navigate:a=>{Oe(()=>(c.before_navigate.push(a),()=>{const u=c.before_navigate.indexOf(a);c.before_navigate.splice(u,1)}))},disable_scroll_handling:()=>{(_||!h)&&(p=!1)},goto:(a,u={})=>Q(a,u,[]),invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")s.push(a);else{const{href:u}=new URL(a,location.href);s.push(d=>d.href===u)}return se()},invalidateAll:()=>(w=!0,se()),prefetch:async a=>{const u=new URL(a,Me(document));await Ue(u)},prefetch_routes:async a=>{const d=(a?ce.filter(l=>a.some(f=>l.exec(f))):ce).map(l=>Promise.all([...l.layouts,l.leaf].map(f=>f==null?void 0:f[1]())));await Promise.all(d)},apply_action:async a=>{if(a.type==="error"){const u=new URL(location.href),{branch:d,route:l}=n;if(!l)return;const f=await qe(n.branch.length,d,l.errors);if(f){const m=await ee({url:u,params:n.params,branch:d.slice(0,f.idx).concat(f.node),status:500,error:a.error,route:l});n=m.state;const g=ue();S.$set(m.props),g()}}else if(a.type==="redirect")Q(a.location,{},[]);else{const u={form:a.data,page:{...D,form:a.data,status:a.status}},d=ue();S.$set(u),d()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",l=>{var g,E;let f=!1;const m={from:fe("from",{params:n.params,routeId:(E=(g=n.route)==null?void 0:g.id)!=null?E:null,url:n.url}),to:null,type:"unload",cancel:()=>f=!0};c.before_navigate.forEach(k=>k(m)),f?(l.preventDefault(),l.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Se(P);try{sessionStorage[nt]=JSON.stringify(re)}catch{}}});const a=l=>{const{url:f,options:m}=Ye(l);if(f&&m.prefetch){if(Ce(f))return;Ue(f)}};let u;const d=l=>{clearTimeout(u),u=setTimeout(()=>{var f;(f=l.target)==null||f.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",d),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",l=>{if(l.button||l.which!==1||l.metaKey||l.ctrlKey||l.shiftKey||l.altKey||l.defaultPrevented)return;const{a:f,url:m,options:g}=Ye(l);if(!f||!m)return;const E=f instanceof SVGAElement;if(!E&&m.protocol!==location.protocol&&!(m.protocol==="https:"||m.protocol==="http:"))return;const k=(f.getAttribute("rel")||"").split(/\s+/);if(f.hasAttribute("download")||k.includes("external")||g.reload||(E?f.target.baseVal:f.target))return;const[b,v]=m.href.split("#");if(v!==void 0&&b===location.href.split("#")[0]){V=!0,Se(P),n.url=m,G.page.set({...D,url:m}),G.page.notify();return}be({url:m,scroll:g.noscroll?$e():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:m.href===location.href},accepted:()=>l.preventDefault(),blocked:()=>l.preventDefault(),type:"link"})}),addEventListener("popstate",l=>{if(l.state){if(l.state[C]===P)return;const f=l.state[C]-P;be({url:new URL(location.href),scroll:re[l.state[C]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{P=l.state[C]},blocked:()=>{history.go(-f)},type:"popstate",delta:f})}}),addEventListener("hashchange",()=>{V&&(V=!1,history.replaceState({...history.state,[C]:++P},"",location.href))});for(const l of document.querySelectorAll("link"))l.rel==="icon"&&(l.href=l.href);addEventListener("pageshow",l=>{l.persisted&&G.navigating.set(null)})},_hydrate:async({status:a,error:u,node_ids:d,params:l,routeId:f,data:m,form:g})=>{var b;i=!0;const E=new URL(location.href);let k;try{const v=d.map(async(O,I)=>{const L=m[I];return _e({loader:ge[O],url:E,params:l,routeId:f,parent:async()=>{const N={};for(let U=0;U<I;U+=1)Object.assign(N,(await v[U]).data);return N},server_data_node:ye(L)})});k=await ee({url:E,params:l,branch:await Promise.all(v),status:a,error:u,form:g,route:(b=ce.find(O=>O.id===f))!=null?b:null})}catch(v){if(v instanceof Ze){await ie(new URL(v.location,location.href));return}k=await oe({status:v instanceof Ie?v.status:500,error:ne(v,{url:E,params:l,routeId:f}),url:E,routeId:f})}Te(k)}}}async function Qe(r,e){const t=new URL(r);t.pathname=r.pathname.replace(/\/$/,"")+zt;const s=await me(t.href,{headers:{"x-sveltekit-invalidated":e.map(c=>c?"1":"").join(",")}}),o=await s.text();if(!s.ok)throw new Error(JSON.parse(o));return xt(o)}function ne(r,e){var t;return r instanceof Ie?r.body:(t=Ft.handleError({error:r,event:e}))!=null?t:{message:e.routeId!=null?"Internal Error":"Not Found"}}const Qt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function fe(r,e){for(const t of Qt)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${r}.${t} should now be ${r}.url.${t}`)},enumerable:!1});return e}function ue(){return()=>{}}async function tn({env:r,hydrate:e,paths:t,target:s,trailing_slash:o}){wt(t);const c=Zt({target:s,base:t.base,trailing_slash:o});Jt({client:c}),e?await c._hydrate(e):c.goto(location.href,{replaceState:!0}),c._start_router()}export{tn as start};
