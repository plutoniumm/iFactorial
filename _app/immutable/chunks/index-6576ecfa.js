function E(){}function H(t,e){for(const n in e)t[n]=e[n];return t}function q(t){return t()}function k(){return Object.create(null)}function g(t){t.forEach(q)}function B(t){return typeof t=="function"}function ct(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let b;function ut(t,e){return b||(b=document.createElement("a")),b.href=e,t===b.href}function I(t){return Object.keys(t).length===0}function ot(t,e,n,i){if(t){const r=O(t,e,n,i);return t[0](r)}}function O(t,e,n,i){return t[1]&&i?H(n.ctx.slice(),t[1](i(e))):n.ctx}function at(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const a=[],l=Math.max(e.dirty.length,r.length);for(let o=0;o<l;o+=1)a[o]=e.dirty[o]|r[o];return a}return e.dirty|r}return e.dirty}function ft(t,e,n,i,r,a){if(r){const l=O(e,n,i,a);t.p(l,r)}}function st(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let v=!1;function G(){v=!0}function J(){v=!1}function K(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function W(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const s=e[u];s.claim_order!==void 0&&c.push(s)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,s=(r>0&&e[n[r]].claim_order<=u?r+1:K(1,r,x=>e[n[x]].claim_order,u))-1;i[c]=n[s]+1;const f=s+1;n[f]=c,r=Math.max(f,r)}const a=[],l=[];let o=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(a.push(e[c-1]);o>=c;o--)l.push(e[o]);o--}for(;o>=0;o--)l.push(e[o]);a.reverse(),l.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<l.length;c++){for(;u<a.length&&l[c].claim_order>=a[u].claim_order;)u++;const s=u<a.length?a[u]:null;t.insertBefore(l[c],s)}}function Q(t,e){if(v){for(W(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function _t(t,e,n){v&&!n?Q(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function R(t){t.parentNode&&t.parentNode.removeChild(t)}function dt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function U(t){return document.createElement(t)}function S(t){return document.createTextNode(t)}function ht(){return S(" ")}function mt(){return S("")}function pt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function yt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function V(t){return Array.from(t.childNodes)}function X(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function P(t,e,n,i,r=!1){X(t);const a=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const o=t[l];if(e(o)){const c=n(o);return c===void 0?t.splice(l,1):t[l]=c,r||(t.claim_info.last_index=l),o}}for(let l=t.claim_info.last_index-1;l>=0;l--){const o=t[l];if(e(o)){const c=n(o);return c===void 0?t.splice(l,1):t[l]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,o}}return i()})();return a.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,a}function Y(t,e,n,i){return P(t,r=>r.nodeName===e,r=>{const a=[];for(let l=0;l<r.attributes.length;l++){const o=r.attributes[l];n[o.name]||a.push(o.name)}a.forEach(l=>r.removeAttribute(l))},()=>i(e))}function gt(t,e,n){return Y(t,e,n,U)}function Z(t,e){return P(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>S(e),!0)}function xt(t){return Z(t," ")}function bt(t,e){e=""+e,t.data!==e&&(t.data=e)}function $t(t,e){t.value=e??""}function vt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function wt(t,e,n){t.classList[n?"add":"remove"](e)}function Et(t,e){return new t(e)}let y;function p(t){y=t}function T(){if(!y)throw new Error("Function called outside component initialization");return y}function Nt(t){T().$$.on_mount.push(t)}function At(t){T().$$.after_update.push(t)}const h=[],L=[];let m=[];const M=[],z=Promise.resolve();let N=!1;function D(){N||(N=!0,z.then(F))}function St(){return D(),z}function A(t){m.push(t)}const w=new Set;let d=0;function F(){if(d!==0)return;const t=y;do{try{for(;d<h.length;){const e=h[d];d++,p(e),tt(e.$$)}}catch(e){throw h.length=0,d=0,e}for(p(null),h.length=0,d=0;L.length;)L.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];w.has(n)||(w.add(n),n())}m.length=0}while(h.length);for(;M.length;)M.pop()();N=!1,w.clear(),p(t)}function tt(t){if(t.fragment!==null){t.update(),g(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}function et(t){const e=[],n=[];m.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),m=e}const $=new Set;let _;function jt(){_={r:0,c:[],p:_}}function Ct(){_.r||g(_.c),_=_.p}function nt(t,e){t&&t.i&&($.delete(t),t.i(e))}function kt(t,e,n,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Lt(t){t&&t.c()}function Mt(t,e){t&&t.l(e)}function it(t,e,n,i){const{fragment:r,after_update:a}=t.$$;r&&r.m(e,n),i||A(()=>{const l=t.$$.on_mount.map(q).filter(B);t.$$.on_destroy?t.$$.on_destroy.push(...l):g(l),t.$$.on_mount=[]}),a.forEach(A)}function rt(t,e){const n=t.$$;n.fragment!==null&&(et(n.after_update),g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function lt(t,e){t.$$.dirty[0]===-1&&(h.push(t),D(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function qt(t,e,n,i,r,a,l,o=[-1]){const c=y;p(t);const u=t.$$={fragment:null,ctx:[],props:a,update:E,not_equal:r,bound:k(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:k(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};l&&l(u.root);let s=!1;if(u.ctx=n?n(t,e.props||{},(f,x,...j)=>{const C=j.length?j[0]:x;return u.ctx&&r(u.ctx[f],u.ctx[f]=C)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](C),s&&lt(t,f)),x}):[],u.update(),s=!0,g(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){G();const f=V(e.target);u.fragment&&u.fragment.l(f),f.forEach(R)}else u.fragment&&u.fragment.c();e.intro&&nt(t.$$.fragment),it(t,e.target,e.anchor,e.customElement),J(),F()}p(c)}class Bt{$destroy(){rt(this,1),this.$destroy=E}$on(e,n){if(!B(n))return E;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!I(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{rt as A,St as B,ot as C,ut as D,Q as E,ft as F,st as G,at as H,dt as I,wt as J,$t as K,pt as L,Bt as S,ht as a,_t as b,xt as c,Ct as d,mt as e,nt as f,jt as g,R as h,qt as i,At as j,U as k,gt as l,V as m,E as n,Nt as o,yt as p,vt as q,S as r,ct as s,kt as t,Z as u,bt as v,Et as w,Lt as x,Mt as y,it as z};
