import{S as te,i as le,s as se,k as y,l as w,m as E,h as c,p as d,b as g,g as fe,t as T,d as ce,f as S,C as ue,F as _e,G as me,H as pe,r as I,u as q,v as ee,n as J,a as R,c as M,D as de,q as he,E as p,x as Q,y as W,z as X,A as Y,J as ne,K as be,I as ve}from"../../../chunks/index-fb8f9931.js";function $e(r){let e;const l=r[4].default,t=ue(l,r,r[3],null);return{c(){t&&t.c()},l(o){t&&t.l(o)},m(o,i){t&&t.m(o,i),e=!0},p(o,i){t&&t.p&&(!e||i&8)&&_e(t,l,o,o[3],e?pe(l,o[3],i,null):me(o[3]),null)},i(o){e||(S(t,o),e=!0)},o(o){T(t,o),e=!1},d(o){t&&t.d(o)}}}function ke(r){let e;return{c(){e=I(r[0])},l(l){e=q(l,r[0])},m(l,t){g(l,e,t)},p(l,t){t&1&&ee(e,l[0])},i:J,o:J,d(l){l&&c(e)}}}function ge(r){let e,l,t,o;const i=[ke,$e],u=[];function _(a,h){return a[0]?0:1}return l=_(r),t=u[l]=i[l](r),{c(){e=y("div"),t.c(),this.h()},l(a){e=w(a,"DIV",{class:!0,style:!0});var h=E(e);t.l(h),h.forEach(c),this.h()},h(){d(e,"class","chip rx10 m5 fw5 svelte-2mmb49"),d(e,"style",r[1])},m(a,h){g(a,e,h),u[l].m(e,null),o=!0},p(a,[h]){let b=l;l=_(a),l===b?u[l].p(a,h):(fe(),T(u[b],1,1,()=>{u[b]=null}),ce(),t=u[l],t?t.p(a,h):(t=u[l]=i[l](a),t.c()),S(t,1),t.m(e,null)),(!o||h&2)&&d(e,"style",a[1])},i(a){o||(S(t),o=!0)},o(a){T(t),o=!1},d(a){a&&c(e),u[l].d()}}}function ye(r,e,l){let{$$slots:t={},$$scope:o}=e,{color:i="green",text:u=null}=e,_="";return i==="red"&&(_+="--bg:#ffcdd2;--col:#f44336;"),i==="blue"&&(_+="--bg:#bbdefb;--col:#2196f3;"),i==="green"&&(_+="--bg:#c8e6c9;--col:#4caf50;"),i==="yellow"&&(_+="--bg:#ffe0b2;--col:#ff9800;"),r.$$set=a=>{"color"in a&&l(2,i=a.color),"text"in a&&l(0,u=a.text),"$$scope"in a&&l(3,o=a.$$scope)},[u,_,i,o,t]}class re extends te{constructor(e){super(),le(this,e,ye,ge,se,{color:2,text:0})}}const we=r=>`https://covers.openlibrary.org/b/id/${r}-M.jpg`;function Ee(r){let e;return{c(){e=I(r[5])},l(l){e=q(l,r[5])},m(l,t){g(l,e,t)},p:J,i:J,o:J,d(l){l&&c(e)}}}function Ie(r){let e,l;return e=new re({props:{color:"blue",$$slots:{default:[De]},$$scope:{ctx:r}}}),{c(){Q(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,o){X(e,t,o),l=!0},p(t,o){const i={};o&256&&(i.$$scope={dirty:o,ctx:t}),e.$set(i)},i(t){l||(S(e.$$.fragment,t),l=!0)},o(t){T(e.$$.fragment,t),l=!1},d(t){Y(e,t)}}}function qe(r){let e,l;return e=new re({props:{color:"green",text:"Recommended"}}),{c(){Q(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,o){X(e,t,o),l=!0},p:J,i(t){l||(S(e.$$.fragment,t),l=!0)},o(t){T(e.$$.fragment,t),l=!1},d(t){Y(e,t)}}}function De(r){let e,l;return{c(){e=y("a"),l=I("See More"),this.h()},l(t){e=w(t,"A",{href:!0});var o=E(e);l=q(o,"See More"),o.forEach(c),this.h()},h(){d(e,"href",r[5].split("::")[1].trim())},m(t,o){g(t,e,o),p(e,l)},p:J,d(t){t&&c(e)}}}function Ae(r){let e,l;return e=new re({props:{color:"yellow",text:"Very Dense"}}),{c(){Q(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,o){X(e,t,o),l=!0},i(t){l||(S(e.$$.fragment,t),l=!0)},o(t){T(e.$$.fragment,t),l=!1},d(t){Y(e,t)}}}function Re(r){let e,l,t,o,i,u,_,a,h,b,$,G,P,D,H,V,j,O,v,A,k,z,K=r[1].toLowerCase()==="yes",N;const L=[qe,Ie,Ee],m=[];function Z(n,f){return n[5]==="®"?0:n[5].includes("MORE")?1:n[5]!=0?2:-1}~(A=Z(r))&&(k=m[A]=L[A](r));let s=K&&Ae();return{c(){e=y("div"),l=y("img"),o=R(),i=y("div"),u=y("div"),_=y("span"),a=I(r[3]),h=R(),b=y("i"),$=I("- "),G=I(r[2]),P=R(),D=y("br"),H=R(),V=y("p"),j=I(r[4]),O=R(),v=y("div"),k&&k.c(),z=R(),s&&s.c(),this.h()},l(n){e=w(n,"DIV",{id:!0,class:!0});var f=E(e);l=w(f,"IMG",{loading:!0,class:!0,src:!0,alt:!0}),o=M(f),i=w(f,"DIV",{class:!0});var C=E(i);u=w(C,"DIV",{});var B=E(u);_=w(B,"SPAN",{class:!0});var F=E(_);a=q(F,r[3]),h=M(F),b=w(F,"I",{class:!0});var x=E(b);$=q(x,"- "),G=q(x,r[2]),x.forEach(c),F.forEach(c),P=M(B),D=w(B,"BR",{}),H=M(B),V=w(B,"P",{});var oe=E(V);j=q(oe,r[4]),oe.forEach(c),B.forEach(c),O=M(C),v=w(C,"DIV",{class:!0,style:!0});var U=E(v);k&&k.l(U),z=M(U),s&&s.l(U),U.forEach(c),C.forEach(c),f.forEach(c),this.h()},h(){d(l,"loading","lazy"),d(l,"class","rx5 svelte-1qq7ymz"),de(l.src,t=r[6]!==0?we(r[6]):"/icons/if.svg")||d(l,"src",t),d(l,"alt",r[3]),d(b,"class","svelte-1qq7ymz"),d(_,"class","fw6"),d(v,"class","tags ƒ"),he(v,"justify-content","end"),d(i,"class","w-100 ƒ-col ∆-bw"),d(e,"id",r[0]),d(e,"class","book bgf ƒ rpm-5 p-rel svelte-1qq7ymz")},m(n,f){g(n,e,f),p(e,l),p(e,o),p(e,i),p(i,u),p(u,_),p(_,a),p(_,h),p(_,b),p(b,$),p(b,G),p(u,P),p(u,D),p(u,H),p(u,V),p(V,j),p(i,O),p(i,v),~A&&m[A].m(v,null),p(v,z),s&&s.m(v,null),N=!0},p(n,[f]){k&&k.p(n,f)},i(n){N||(S(k),S(s),N=!0)},o(n){T(k),T(s),N=!1},d(n){n&&c(e),~A&&m[A].d(),s&&s.d()}}}function Me(r,e,l){let{book:t}=e;const{OLID:o,again:i,author:u,name:_,description:a,tags:h,cover:b}=t;return r.$$set=$=>{"book"in $&&l(7,t=$.book)},[o,i,u,_,a,h,b,t]}class Se extends te{constructor(e){super(),le(this,e,Me,Re,se,{book:7})}}function ie(r,e,l){const t=r.slice();return t[5]=e[l],t[7]=l,t}function ae(r){let e,l;return e=new Se({props:{book:r[5],index:r[7]}}),{c(){Q(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,o){X(e,t,o),l=!0},p(t,o){const i={};o&3&&(i.book=t[5]),e.$set(i)},i(t){l||(S(e.$$.fragment,t),l=!0)},o(t){T(e.$$.fragment,t),l=!1},d(t){Y(e,t)}}}function Ve(r){let e,l,t=r[0].meta.index+"",o,i,u,_,a,h,b,$,G,P,D,H,V=r[0].meta.index+"",j,O,v,A,k,z,K,N,L=r[0].books.filter(r[4]),m=[];for(let s=0;s<L.length;s+=1)m[s]=ae(ie(r,L,s));const Z=s=>T(m[s],1,1,()=>{m[s]=null});return{c(){e=y("title"),l=I("Round "),o=I(t),i=I(" | i!"),u=R(),_=y("meta"),a=R(),h=y("meta"),b=R(),$=y("a"),G=I("↑"),P=R(),D=y("h1"),H=I("Round "),j=I(V),O=R(),v=y("input"),A=R(),k=y("div");for(let s=0;s<m.length;s+=1)m[s].c();this.h()},l(s){e=w(s,"TITLE",{});var n=E(e);l=q(n,"Round "),o=q(n,t),i=q(n," | i!"),n.forEach(c),u=M(s),_=w(s,"META",{name:!0,content:!0}),a=M(s),h=w(s,"META",{name:!0,content:!0}),b=M(s),$=w(s,"A",{href:!0,class:!0});var f=E($);G=q(f,"↑"),f.forEach(c),P=M(s),D=w(s,"H1",{class:!0});var C=E(D);H=q(C,"Round "),j=q(C,V),C.forEach(c),O=M(s),v=w(s,"INPUT",{type:!0,class:!0,placeholder:!0}),A=M(s),k=w(s,"DIV",{class:!0});var B=E(k);for(let F=0;F<m.length;F+=1)m[F].l(B);B.forEach(c),this.h()},h(){d(_,"name","title"),d(_,"content","Round 1"),d(h,"name","description"),d(h,"content","The First 100: A lockdown Saga"),d($,"href","#"),d($,"class","rx10 m5 p-fix fw7 svelte-mytp9t"),d(D,"class","†c w-100"),d(v,"type","text"),d(v,"class","rpm-5 bgf svelte-mytp9t"),d(v,"placeholder","Search by Book/Auth..."),d(k,"class","section mx-a w-100 ƒ ƒ∑ ∆-ar")},m(s,n){g(s,e,n),p(e,l),p(e,o),p(e,i),g(s,u,n),g(s,_,n),g(s,a,n),g(s,h,n),g(s,b,n),g(s,$,n),p($,G),g(s,P,n),g(s,D,n),p(D,H),p(D,j),g(s,O,n),g(s,v,n),ne(v,r[1]),g(s,A,n),g(s,k,n);for(let f=0;f<m.length;f+=1)m[f]&&m[f].m(k,null);z=!0,K||(N=be(v,"input",r[3]),K=!0)},p(s,[n]){if((!z||n&1)&&t!==(t=s[0].meta.index+"")&&ee(o,t),(!z||n&1)&&V!==(V=s[0].meta.index+"")&&ee(j,V),n&2&&v.value!==s[1]&&ne(v,s[1]),n&7){L=s[0].books.filter(s[4]);let f;for(f=0;f<L.length;f+=1){const C=ie(s,L,f);m[f]?(m[f].p(C,n),S(m[f],1)):(m[f]=ae(C),m[f].c(),S(m[f],1),m[f].m(k,null))}for(fe(),f=L.length;f<m.length;f+=1)Z(f);ce()}},i(s){if(!z){for(let n=0;n<L.length;n+=1)S(m[n]);z=!0}},o(s){m=m.filter(Boolean);for(let n=0;n<m.length;n+=1)T(m[n]);z=!1},d(s){s&&c(e),s&&c(u),s&&c(_),s&&c(a),s&&c(h),s&&c(b),s&&c($),s&&c(P),s&&c(D),s&&c(O),s&&c(v),s&&c(A),s&&c(k),ve(m,s),K=!1,N()}}}function Ce(r,e,l){const t=(a,h)=>a.some(b=>{var $;return($=b==null?void 0:b.toLowerCase())==null?void 0:$.includes(h.toLowerCase())});let{data:o}=e,i="";function u(){i=this.value,l(1,i)}const _=a=>t(Object.values(a),i);return r.$$set=a=>{"data"in a&&l(0,o=a.data)},[o,i,t,u,_]}class ze extends te{constructor(e){super(),le(this,e,Ce,Ve,se,{data:0})}}export{ze as default};