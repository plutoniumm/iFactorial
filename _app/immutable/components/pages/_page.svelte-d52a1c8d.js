import{S as T,i as Y,s as j,k as p,r as y,a as b,l as m,m as g,u as R,h as d,c as S,p as u,b as z,E as h,n as k,I as q,q as A}from"../../chunks/index-6576ecfa.js";import{S as C}from"../../chunks/conf-8c49c3cf.js";function I(i,e,l){const n=i.slice();return n[2]=e[l],n[4]=l,n}function x(i){let e,l,n=C+i[4]+"",f,c,t,s,r=i[4]+1+"",a,o;return{c(){e=p("a"),l=p("div"),f=y(n),c=b(),t=p("div"),s=y("Round "),a=y(r),o=b(),this.h()},l(v){e=m(v,"A",{class:!0,href:!0,style:!0});var _=g(e);l=m(_,"DIV",{class:!0});var w=g(l);f=R(w,n),w.forEach(d),c=S(_),t=m(_,"DIV",{class:!0});var E=g(t);s=R(E,"Round "),a=R(E,r),E.forEach(d),o=S(_),_.forEach(d),this.h()},h(){u(l,"class","p20 f-col j-ct fw1 year svelte-y0czu5"),u(t,"class","tc name fw4 p5 svelte-y0czu5"),u(e,"class","rpm-10 f-col svelte-y0czu5"),u(e,"href","/R"+i[2]),A(e,"background","#fff")},m(v,_){z(v,e,_),h(e,l),h(l,f),h(e,c),h(e,t),h(t,s),h(t,a),h(e,o)},p:k,d(v){v&&d(e)}}}function D(i){let e,l,n,f,c=i[0],t=[];for(let s=0;s<c.length;s+=1)t[s]=x(I(i,c,s));return{c(){e=p("section"),l=p("h3"),n=y("Reading List by Year"),f=b();for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=m(s,"SECTION",{class:!0});var r=g(e);l=m(r,"H3",{class:!0});var a=g(l);n=R(a,"Reading List by Year"),a.forEach(d),f=S(r);for(let o=0;o<t.length;o+=1)t[o].l(r);r.forEach(d),this.h()},h(){u(l,"class","w-100 tc"),u(e,"class","f fw j-ar")},m(s,r){z(s,e,r),h(e,l),h(l,n),h(e,f);for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(e,null)},p(s,[r]){if(r&1){c=s[0];let a;for(a=0;a<c.length;a+=1){const o=I(s,c,a);t[a]?t[a].p(o,r):(t[a]=x(o),t[a].c(),t[a].m(e,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=c.length}},i:k,o:k,d(s){s&&d(e),q(t,s)}}}function L(i,e,l){let{data:n=[]}=e;const f=n.files.map(c=>c.replace(".csv","").replace("R",""));return i.$$set=c=>{"data"in c&&l(1,n=c.data)},[f,n]}class N extends T{constructor(e){super(),Y(this,e,L,D,j,{data:1})}}export{N as default};