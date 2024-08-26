var MultiWeightedDoc;(()=>{"use strict";var we={234:(c,P,N)=>{N.d(P,{$Tr:()=>Nt,DhX:()=>Oe,H1I:()=>at,Ljt:()=>vt,N8:()=>Ft,R3I:()=>Et,RMB:()=>Te,S1n:()=>ln,ZTd:()=>L,bGB:()=>_t,cSb:()=>De,fLW:()=>St,f_C:()=>un,ogt:()=>J,qOq:()=>Ee,rTO:()=>_e});function L(){}const tt=t=>t;function kt(t,e){for(const n in e)t[n]=e[n];return t}function jt(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function te(t,e,n,i,o){t.__svelte_meta={loc:{file:e,line:n,column:i,char:o}}}function rt(t){return t()}function st(){return Object.create(null)}function W(t){t.forEach(rt)}function q(t){return typeof t=="function"}function Ft(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let lt;function ee(t,e){return lt||(lt=document.createElement("a")),lt.href=e,t===lt.href}function ne(t,e){return t!=t?e==e:t!==e}function h(t){return Object.keys(t).length===0}function a(t,e){if(t!=null&&typeof t.subscribe!="function")throw new Error(`'${e}' is not a store with a 'subscribe' method`)}function _(t,...e){if(t==null)return L;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function d(t){let e;return _(t,n=>e=n)(),e}function v(t,e,n){t.$$.on_destroy.push(_(e,n))}function x(t,e,n,i){if(t){const o=D(t,e,n,i);return t[0](o)}}function D(t,e,n,i){return t[1]&&i?kt(n.ctx.slice(),t[1](i(e))):n.ctx}function C(t,e,n,i){if(t[2]&&i){const o=t[2](i(n));if(e.dirty===void 0)return o;if(typeof o=="object"){const r=[],s=Math.max(e.dirty.length,o.length);for(let l=0;l<s;l+=1)r[l]=e.dirty[l]|o[l];return r}return e.dirty|o}return e.dirty}function $(t,e,n,i,o,r){if(o){const s=D(e,n,i,r);t.p(s,o)}}function E(t,e,n,i,o,r,s){const l=C(e,i,o,r);$(t,e,n,i,l,s)}function R(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function g(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function ct(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function ut(t){const e={};for(const n in t)e[n]=!0;return e}function At(t){let e=!1;return function(...n){e||(e=!0,t.call(this,...n))}}function at(t){return t==null?"":t}function et(t,e,n){return t.set(n),e}const j=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);function nt(t){return t&&q(t.destroy)?t.destroy:L}function A(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const b=null,z=typeof window!="undefined";let p=null,X=null;function _n(t){p=t}function dn(t){X=t}const it=new Set;function ie(t){it.forEach(e=>{e.c(t)||(it.delete(e),e.f())}),it.size!==0&&X(ie)}function hn(){it.clear()}function xt(t){let e;return it.size===0&&X(ie),{promise:new Promise(n=>{it.add(e={c:t,f:n})}),abort(){it.delete(e)}}}const oe=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;class ft{constructor(e){this.options=e,this._listeners="WeakMap"in oe?new WeakMap:void 0}observe(e,n){return this._listeners.set(e,n),this._getObserver().observe(e,this.options),()=>{this._listeners.delete(e),this._observer.unobserve(e)}}_getObserver(){var e;return(e=this._observer)!==null&&e!==void 0?e:this._observer=new ResizeObserver(n=>{var i;for(const o of n)ft.entries.set(o.target,o),(i=this._listeners.get(o.target))===null||i===void 0||i(o)})}}ft.entries="WeakMap"in oe?new WeakMap:void 0;let $t=!1;function ke(){$t=!0}function Fe(){$t=!1}function xe(t,e,n,i){for(;t<e;){const o=t+(e-t>>1);n(o)<=i?t=o+1:e=o}return t}function $e(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const u=[];for(let f=0;f<e.length;f++){const w=e[f];w.claim_order!==void 0&&u.push(w)}e=u}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let o=0;for(let u=0;u<e.length;u++){const f=e[u].claim_order,w=(o>0&&e[n[o]].claim_order<=f?o+1:xe(1,o,k=>e[n[k]].claim_order,f))-1;i[u]=n[w]+1;const y=w+1;n[y]=u,o=Math.max(y,o)}const r=[],s=[];let l=e.length-1;for(let u=n[o]+1;u!=0;u=i[u-1]){for(r.push(e[u-1]);l>=u;l--)s.push(e[l]);l--}for(;l>=0;l--)s.push(e[l]);r.reverse(),s.sort((u,f)=>u.claim_order-f.claim_order);for(let u=0,f=0;u<s.length;u++){for(;f<r.length&&s[u].claim_order>=r[f].claim_order;)f++;const w=f<r.length?r[f]:null;t.insertBefore(s[u],w)}}function Et(t,e){t.appendChild(e)}function Ee(t,e,n){const i=Rt(t);if(!i.getElementById(e)){const o=_t("style");o.id=e,o.textContent=n,re(i,o)}}function Rt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Se(t){const e=_t("style");return re(Rt(t),e),e.sheet}function re(t,e){return Et(t.head||t,e),e.sheet}function se(t,e){if($t){for($e(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Nt(t,e,n){t.insertBefore(e,n||null)}function le(t,e,n){$t&&!n?se(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function J(t){t.parentNode&&t.parentNode.removeChild(t)}function Te(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _t(t){return document.createElement(t)}function pn(t,e){return document.createElement(t,{is:e})}function mn(t,e){const n={};for(const i in t)j(t,i)&&e.indexOf(i)===-1&&(n[i]=t[i]);return n}function ce(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function St(t){return document.createTextNode(t)}function Oe(){return St(" ")}function De(){return St("")}function Ce(t){return document.createComment(t)}function It(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function gn(t){return function(e){return e.preventDefault(),t.call(this,e)}}function vn(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function bn(t){return function(e){return e.stopImmediatePropagation(),t.call(this,e)}}function yn(t){return function(e){e.target===this&&t.call(this,e)}}function wn(t){return function(e){e.isTrusted&&t.call(this,e)}}function vt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const Me=null;function Le(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&Me.indexOf(i)===-1?t[i]=e[i]:vt(t,i,e[i])}function kn(t,e){for(const n in e)vt(t,n,e[n])}function je(t,e){Object.keys(e).forEach(n=>{Ae(t,n,e[n])})}function Ae(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:vt(t,e,n)}function Fn(t){return/-/.test(t)?je:Le}function xn(t,e,n){t.setAttributeNS("http://www.w3.org/1999/xlink",e,n)}function $n(t,e,n){const i=new Set;for(let o=0;o<t.length;o+=1)t[o].checked&&i.add(t[o].__value);return n||i.delete(e),Array.from(i)}function En(t){let e;return{p(...n){e=n,e.forEach(i=>t.push(i))},r(){e.forEach(n=>t.splice(t.indexOf(n),1))}}}function Sn(t,e){let n=o(t),i;function o(l){for(let u=0;u<e.length;u++)l=l[e[u]]=l[e[u]]||[];return l}function r(){i.forEach(l=>n.push(l))}function s(){i.forEach(l=>n.splice(n.indexOf(l),1))}return{u(l){e=l;const u=o(t);u!==n&&(s(),n=u,r())},p(...l){i=l,r()},r:s}}function Tn(t){return t===""?null:+t}function On(t){const e=[];for(let n=0;n<t.length;n+=1)e.push({start:t.start(n),end:t.end(n)});return e}function Re(t){return Array.from(t.childNodes)}function ue(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Bt(t,e,n,i,o=!1){ue(t);const r=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const l=t[s];if(e(l)){const u=n(l);return u===void 0?t.splice(s,1):t[s]=u,o||(t.claim_info.last_index=s),l}}for(let s=t.claim_info.last_index-1;s>=0;s--){const l=t[s];if(e(l)){const u=n(l);return u===void 0?t.splice(s,1):t[s]=u,o?u===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,l}}return i()})();return r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,r}function ae(t,e,n,i){return Bt(t,o=>o.nodeName===e,o=>{const r=[];for(let s=0;s<o.attributes.length;s++){const l=o.attributes[s];n[l.name]||r.push(l.name)}r.forEach(s=>o.removeAttribute(s))},()=>i(e))}function Dn(t,e,n){return ae(t,e,n,_t)}function Cn(t,e,n){return ae(t,e,n,ce)}function Ne(t,e){return Bt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>St(e),!0)}function Mn(t){return Ne(t," ")}function Ln(t,e){return Bt(t,n=>n.nodeType===8,n=>{n.data=""+e},()=>Ce(e),!0)}function fe(t,e,n){for(let i=n;i<t.length;i+=1){const o=t[i];if(o.nodeType===8&&o.textContent.trim()===e)return i}return t.length}function jn(t,e){const n=fe(t,"HTML_TAG_START",0),i=fe(t,"HTML_TAG_END",n);if(n===i)return new de(void 0,e);ue(t);const o=t.splice(n,i-n+1);J(o[0]),J(o[o.length-1]);const r=o.slice(1,o.length-1);for(const s of r)s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new de(r,e)}function _e(t,e){e=""+e,t.data!==e&&(t.data=e)}function Ie(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function An(t,e,n){~b.indexOf(n)?Ie(t,e):_e(t,e)}function Rn(t,e){t.value=e==null?"":e}function Nn(t,e){try{t.type=e}catch(n){}}function In(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Bn(t,e,n){for(let i=0;i<t.options.length;i+=1){const o=t.options[i];if(o.__value===e){o.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Pn(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];i.selected=~e.indexOf(i.__value)}}function Wn(t){const e=t.querySelector(":checked");return e&&e.__value}function qn(t){return[].map.call(t.querySelectorAll(":checked"),e=>e.__value)}let Tt;function Be(){if(Tt===void 0){Tt=!1;try{typeof window!="undefined"&&window.parent&&window.parent.document}catch(t){Tt=!0}}return Tt}function zn(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=_t("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const o=Be();let r;return o?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=It(window,"message",s=>{s.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{r=It(i.contentWindow,"resize",e),e()}),Et(t,i),()=>{(o||r&&i.contentWindow)&&r(),J(i)}}const Hn=new ft({box:"content-box"}),Gn=new ft({box:"border-box"}),Xn=new ft({box:"device-pixel-content-box"});function Un(t,e,n){t.classList[n?"add":"remove"](e)}function Pt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,i,e),o}function Zn(t,e=document.body){return Array.from(e.querySelectorAll(t))}function Kn(t,e){const n=[];let i=0;for(const o of e.childNodes)if(o.nodeType===8){const r=o.textContent.trim();r===`HEAD_${t}_END`?(i-=1,n.push(o)):r===`HEAD_${t}_START`&&(i+=1,n.push(o))}else i>0&&n.push(o);return n}class Yn{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=ce(n.nodeName):this.e=_t(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Nt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(J)}}class de extends null{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)le(this.t,this.n[n],e)}}function Vn(t){const e={};for(const n of t)e[n.name]=n.value;return e}function Jn(t){const e={};return t.childNodes.forEach(n=>{e[n.slot||"default"]=!0}),e}function Qn(t,e){return new t(e)}const Ot=new Map;let Dt=0;function Pe(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function We(t,e){const n={stylesheet:Se(e),rules:{}};return Ot.set(t,n),n}function bt(t,e,n,i,o,r,s,l=0){const u=16.666/i;let f=`{
`;for(let S=0;S<=1;S+=u){const O=e+(n-e)*r(S);f+=S*100+`%{${s(O,1-O)}}
`}const w=f+`100% {${s(n,1-n)}}
}`,y=`__svelte_${Pe(w)}_${l}`,k=Rt(t),{stylesheet:m,rules:F}=Ot.get(k)||We(k,t);F[y]||(F[y]=!0,m.insertRule(`@keyframes ${y} ${w}`,m.cssRules.length));const T=t.style.animation||"";return t.style.animation=`${T?`${T}, `:""}${y} ${i}ms linear ${o}ms 1 both`,Dt+=1,y}function yt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),o=n.length-i.length;o&&(t.style.animation=i.join(", "),Dt-=o,Dt||qe())}function qe(){X(()=>{Dt||(Ot.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&J(e)}),Ot.clear())})}function ti(t,e,n,i){if(!e)return L;const o=t.getBoundingClientRect();if(e.left===o.left&&e.right===o.right&&e.top===o.top&&e.bottom===o.bottom)return L;const{delay:r=0,duration:s=300,easing:l=tt,start:u=p()+r,end:f=u+s,tick:w=L,css:y}=n(t,{from:e,to:o},i);let k=!0,m=!1,F;function T(){y&&(F=bt(t,0,1,s,r,l,y)),r||(m=!0)}function S(){y&&yt(t,F),k=!1}return xt(O=>{if(!m&&O>=u&&(m=!0),m&&O>=f&&(w(1,0),S()),!k)return!1;if(m){const G=O-u,B=0+1*l(G/s);w(B,1-B)}return!0}),T(),w(0,1),S}function ei(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:i}=e,o=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=i,ze(t,o)}}function ze(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const i=getComputedStyle(t),o=i.transform==="none"?"":i.transform;t.style.transform=`${o} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let dt;function H(t){dt=t}function U(){if(!dt)throw new Error("Function called outside component initialization");return dt}function ni(t){U().$$.before_update.push(t)}function ii(t){U().$$.on_mount.push(t)}function oi(t){U().$$.after_update.push(t)}function ri(t){U().$$.on_destroy.push(t)}function si(){const t=U();return(e,n,{cancelable:i=!1}={})=>{const o=t.$$.callbacks[e];if(o){const r=Pt(e,n,{cancelable:i});return o.slice().forEach(s=>{s.call(t,r)}),!r.defaultPrevented}return!0}}function li(t,e){return U().$$.context.set(t,e),e}function ci(t){return U().$$.context.get(t)}function ui(){return U().$$.context}function ai(t){return U().$$.context.has(t)}function fi(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const ht=[],_i={enabled:!1},he=[];let pt=[];const Wt=[],pe=Promise.resolve();let qt=!1;function me(){qt||(qt=!0,pe.then(Ht))}function di(){return me(),pe}function mt(t){pt.push(t)}function hi(t){Wt.push(t)}const zt=new Set;let gt=0;function Ht(){if(gt!==0)return;const t=dt;do{try{for(;gt<ht.length;){const e=ht[gt];gt++,H(e),He(e.$$)}}catch(e){throw ht.length=0,gt=0,e}for(H(null),ht.length=0,gt=0;he.length;)he.pop()();for(let e=0;e<pt.length;e+=1){const n=pt[e];zt.has(n)||(zt.add(n),n())}pt.length=0}while(ht.length);for(;Wt.length;)Wt.pop()();qt=!1,zt.clear(),H(t)}function He(t){if(t.fragment!==null){t.update(),W(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(mt)}}function Ge(t){const e=[],n=[];pt.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),pt=e}let wt;function Gt(){return wt||(wt=Promise.resolve(),wt.then(()=>{wt=null})),wt}function ot(t,e,n){t.dispatchEvent(Pt(`${e?"intro":"outro"}${n}`))}const Ct=new Set;let Z;function Xe(){Z={r:0,c:[],p:Z}}function Ue(){Z.r||W(Z.c),Z=Z.p}function Xt(t,e){t&&t.i&&(Ct.delete(t),t.i(e))}function ge(t,e,n,i){if(t&&t.o){if(Ct.has(t))return;Ct.add(t),Z.c.push(()=>{Ct.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Ut={duration:0};function pi(t,e,n){const i={direction:"in"};let o=e(t,n,i),r=!1,s,l,u=0;function f(){s&&yt(t,s)}function w(){const{delay:k=0,duration:m=300,easing:F=tt,tick:T=L,css:S}=o||Ut;S&&(s=bt(t,0,1,m,k,F,S,u++)),T(0,1);const O=p()+k,G=O+m;l&&l.abort(),r=!0,mt(()=>ot(t,!0,"start")),l=xt(B=>{if(r){if(B>=G)return T(1,0),ot(t,!0,"end"),f(),r=!1;if(B>=O){const K=F((B-O)/m);T(K,1-K)}}return r})}let y=!1;return{start(){y||(y=!0,yt(t),q(o)?(o=o(i),Gt().then(w)):w())},invalidate(){y=!1},end(){r&&(f(),r=!1)}}}function mi(t,e,n){const i={direction:"out"};let o=e(t,n,i),r=!0,s;const l=Z;l.r+=1;function u(){const{delay:f=0,duration:w=300,easing:y=tt,tick:k=L,css:m}=o||Ut;m&&(s=bt(t,1,0,w,f,y,m));const F=p()+f,T=F+w;mt(()=>ot(t,!1,"start")),xt(S=>{if(r){if(S>=T)return k(0,1),ot(t,!1,"end"),--l.r||W(l.c),!1;if(S>=F){const O=y((S-F)/w);k(1-O,O)}}return r})}return q(o)?Gt().then(()=>{o=o(i),u()}):u(),{end(f){f&&o.tick&&o.tick(1,0),r&&(s&&yt(t,s),r=!1)}}}function gi(t,e,n,i){const o={direction:"both"};let r=e(t,n,o),s=i?0:1,l=null,u=null,f=null;function w(){f&&yt(t,f)}function y(m,F){const T=m.b-s;return F*=Math.abs(T),{a:s,b:m.b,d:T,duration:F,start:m.start,end:m.start+F,group:m.group}}function k(m){const{delay:F=0,duration:T=300,easing:S=tt,tick:O=L,css:G}=r||Ut,B={start:p()+F,b:m};m||(B.group=Z,Z.r+=1),l||u?u=B:(G&&(w(),f=bt(t,s,m,T,F,S,G)),m&&O(0,1),l=y(B,T),mt(()=>ot(t,m,"start")),xt(K=>{if(u&&K>u.start&&(l=y(u,T),u=null,ot(t,l.b,"start"),G&&(w(),f=bt(t,s,l.b,l.duration,0,S,r.css))),l){if(K>=l.end)O(s=l.b,1-s),ot(t,l.b,"end"),u||(l.b?w():--l.group.r||W(l.group.c)),l=null;else if(K>=l.start){const Mt=K-l.start;s=l.a+l.d*S(Mt/l.duration),O(s,1-s)}}return!!(l||u)}))}return{run(m){q(r)?Gt().then(()=>{r=r(o),k(m)}):k(m)},end(){w(),l=u=null}}}function vi(t,e){const n=e.token={};function i(o,r,s,l){if(e.token!==n)return;e.resolved=l;let u=e.ctx;s!==void 0&&(u=u.slice(),u[s]=l);const f=o&&(e.current=o)(u);let w=!1;e.block&&(e.blocks?e.blocks.forEach((y,k)=>{k!==r&&y&&(Xe(),ge(y,1,1,()=>{e.blocks[k]===y&&(e.blocks[k]=null)}),Ue())}):e.block.d(1),f.c(),Xt(f,1),f.m(e.mount(),e.anchor),w=!0),e.block=f,e.blocks&&(e.blocks[r]=f),w&&Ht()}if(jt(t)){const o=U();if(t.then(r=>{H(o),i(e.then,1,e.value,r),H(null)},r=>{if(H(o),i(e.catch,2,e.error,r),H(null),!e.hasCatch)throw r}),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,t),!0;e.resolved=t}}function bi(t,e,n){const i=e.slice(),{resolved:o}=t;t.current===t.then&&(i[t.value]=o),t.current===t.catch&&(i[t.error]=o),t.block.p(i,n)}function Ze(t,e){t.d(1),e.delete(t.key)}function Ke(t,e){ge(t,1,1,()=>{e.delete(t.key)})}function yi(t,e){t.f(),Ze(t,e)}function wi(t,e){t.f(),Ke(t,e)}function ki(t,e,n,i,o,r,s,l,u,f,w,y){let k=t.length,m=r.length,F=k;const T={};for(;F--;)T[t[F].key]=F;const S=[],O=new Map,G=new Map,B=[];for(F=m;F--;){const M=y(o,r,F),Y=n(M);let V=s.get(Y);V?i&&B.push(()=>V.p(M,e)):(V=f(Y,M),V.c()),O.set(Y,S[F]=V),Y in T&&G.set(Y,Math.abs(F-T[Y]))}const K=new Set,Mt=new Set;function Vt(M){Xt(M,1),M.m(l,w),s.set(M.key,M),w=M.first,m--}for(;k&&m;){const M=S[m-1],Y=t[k-1],V=M.key,Lt=Y.key;M===Y?(w=M.first,k--,m--):O.has(Lt)?!s.has(V)||K.has(V)?Vt(M):Mt.has(Lt)?k--:G.get(V)>G.get(Lt)?(Mt.add(V),Vt(M)):(K.add(Lt),k--):(u(Y,s),k--)}for(;k--;){const M=t[k];O.has(M.key)||u(M,s)}for(;m;)Vt(S[m-1]);return W(B),S}function Fi(t,e,n,i){const o=new Set;for(let r=0;r<e.length;r++){const s=i(n(t,e,r));if(o.has(s))throw new Error("Cannot have duplicate keys in a keyed each");o.add(s)}}function xi(t,e){const n={},i={},o={$$scope:1};let r=t.length;for(;r--;){const s=t[r],l=e[r];if(l){for(const u in s)u in l||(i[u]=1);for(const u in l)o[u]||(n[u]=l[u],o[u]=1);t[r]=l}else for(const u in s)o[u]=1}for(const s in i)s in n||(n[s]=void 0);return n}function $i(t){return typeof t=="object"&&t!==null?t:{}}const Ye=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"],Ve=new Set([...Ye]),Je=/^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;function Qe(t){return Je.test(t)||t.toLowerCase()==="!doctype"}const tn=/[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;function Ei(t,e){const n=Object.assign({},...t);if(e){const o=e.classes,r=e.styles;o&&(n.class==null?n.class=o:n.class+=" "+o),r&&(n.style==null?n.style=Kt(r):n.style=Kt(en(n.style,r)))}let i="";return Object.keys(n).forEach(o=>{if(tn.test(o))return;const r=n[o];r===!0?i+=" "+o:Ve.has(o.toLowerCase())?r&&(i+=" "+o):r!=null&&(i+=` ${o}="${r}"`)}),i}function en(t,e){const n={};for(const i of t.split(";")){const o=i.indexOf(":"),r=i.slice(0,o).trim(),s=i.slice(o+1).trim();!r||(n[r]=s)}for(const i in e){const o=e[i];o?n[i]=o:delete n[i]}return n}const nn=/[&"]/g,on=/[&<]/g;function ve(t,e=!1){const n=String(t),i=e?nn:on;i.lastIndex=0;let o="",r=0;for(;i.test(n);){const s=i.lastIndex-1,l=n[s];o+=n.substring(r,s)+(l==="&"?"&amp;":l==='"'?"&quot;":"&lt;"),r=s+1}return o+n.substring(r)}function be(t){return typeof t=="string"||t&&typeof t=="object"?ve(t,!0):t}function Si(t){const e={};for(const n in t)e[n]=be(t[n]);return e}function Ti(t,e){let n="";for(let i=0;i<t.length;i+=1)n+=e(t[i],i);return n}const Oi={$$render:()=>""};function Di(t,e){if(!t||!t.$$render)throw e==="svelte:component"&&(e+=" this={...}"),new Error(`<${e}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${e}>.`);return t}function Ci(t,e,n,i){return console.log(`{@debug} ${t?t+" ":""}(${e}:${n})`),console.log(i),""}let Zt;function Mi(t){function e(n,i,o,r,s){const l=dt,u={on_destroy:Zt,context:new Map(s||(l?l.$$.context:[])),on_mount:[],before_update:[],after_update:[],callbacks:st()};H({$$:u});const f=t(n,i,o,r);return H(l),f}return{render:(n={},{$$slots:i={},context:o=new Map}={})=>{Zt=[];const r={title:"",head:"",css:new Set},s=e(r,n,{},i,o);return W(Zt),{html:s,css:{code:Array.from(r.css).map(l=>l.code).join(`
`),map:null},head:r.title+r.head}},$$render:e}}function Li(t,e,n){if(e==null||n&&!e)return"";const i=n&&e===!0?"":`="${ve(e,!0)}"`;return` ${t}${i}`}function ji(t){return t?` class="${t}"`:""}function Kt(t){return Object.keys(t).filter(e=>t[e]).map(e=>`${e}: ${be(t[e])};`).join(" ")}function Ai(t){const e=Kt(t);return e?` style="${e}"`:""}function Ri(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Ni(t){t&&t.c()}function Ii(t,e){t&&t.l(e)}function rn(t,e,n,i){const{fragment:o,after_update:r}=t.$$;o&&o.m(e,n),i||mt(()=>{const s=t.$$.on_mount.map(rt).filter(q);t.$$.on_destroy?t.$$.on_destroy.push(...s):W(s),t.$$.on_mount=[]}),r.forEach(mt)}function ye(t,e){const n=t.$$;n.fragment!==null&&(Ge(n.after_update),W(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function sn(t,e){t.$$.dirty[0]===-1&&(ht.push(t),me(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ln(t,e,n,i,o,r,s,l=[-1]){const u=dt;H(t);const f=t.$$={fragment:null,ctx:[],props:r,update:L,not_equal:o,bound:st(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:st(),dirty:l,skip_bound:!1,root:e.target||u.$$.root};s&&s(f.root);let w=!1;if(f.ctx=n?n(t,e.props||{},(y,k,...m)=>{const F=m.length?m[0]:k;return f.ctx&&o(f.ctx[y],f.ctx[y]=F)&&(!f.skip_bound&&f.bound[y]&&f.bound[y](F),w&&sn(t,y)),k}):[],f.update(),w=!0,W(f.before_update),f.fragment=i?i(f.ctx):!1,e.target){if(e.hydrate){ke();const y=Re(e.target);f.fragment&&f.fragment.l(y),y.forEach(J)}else f.fragment&&f.fragment.c();e.intro&&Xt(t.$$.fragment),rn(t,e.target,e.anchor,e.customElement),Fe(),Ht()}H(u)}let cn;typeof HTMLElement=="function"&&(cn=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(rt).filter(q);for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){W(this.$$.on_disconnect)}$destroy(){ye(this,1),this.$destroy=L}$on(t,e){if(!q(e))return L;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const i=n.indexOf(e);i!==-1&&n.splice(i,1)}}$set(t){this.$$set&&!h(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class un{$destroy(){ye(this,1),this.$destroy=L}$on(e,n){if(!q(n))return L;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const o=i.indexOf(n);o!==-1&&i.splice(o,1)}}$set(e){this.$$set&&!h(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function I(t,e){document.dispatchEvent(Pt(t,Object.assign({version:"3.59.2"},e),{bubbles:!0}))}function Bi(t,e){I("SvelteDOMInsert",{target:t,node:e}),Et(t,e)}function Pi(t,e){I("SvelteDOMInsert",{target:t,node:e}),se(t,e)}function Wi(t,e,n){I("SvelteDOMInsert",{target:t,node:e,anchor:n}),Nt(t,e,n)}function qi(t,e,n){I("SvelteDOMInsert",{target:t,node:e,anchor:n}),le(t,e,n)}function Yt(t){I("SvelteDOMRemove",{node:t}),J(t)}function zi(t,e){for(;t.nextSibling&&t.nextSibling!==e;)Yt(t.nextSibling)}function Hi(t){for(;t.previousSibling;)Yt(t.previousSibling)}function Gi(t){for(;t.nextSibling;)Yt(t.nextSibling)}function Xi(t,e,n,i,o,r,s){const l=i===!0?["capture"]:i?Array.from(Object.keys(i)):[];o&&l.push("preventDefault"),r&&l.push("stopPropagation"),s&&l.push("stopImmediatePropagation"),I("SvelteDOMAddEventListener",{node:t,event:e,handler:n,modifiers:l});const u=It(t,e,n,i);return()=>{I("SvelteDOMRemoveEventListener",{node:t,event:e,handler:n,modifiers:l}),u()}}function Ui(t,e,n){vt(t,e,n),n==null?I("SvelteDOMRemoveAttribute",{node:t,attribute:e}):I("SvelteDOMSetAttribute",{node:t,attribute:e,value:n})}function Zi(t,e,n){t[e]=n,I("SvelteDOMSetProperty",{node:t,property:e,value:n})}function Ki(t,e,n){t.dataset[e]=n,I("SvelteDOMSetDataset",{node:t,property:e,value:n})}function an(t,e){e=""+e,t.data!==e&&(I("SvelteDOMSetData",{node:t,data:e}),t.data=e)}function fn(t,e){e=""+e,t.wholeText!==e&&(I("SvelteDOMSetData",{node:t,data:e}),t.data=e)}function Yi(t,e,n){~b.indexOf(n)?fn(t,e):an(t,e)}function Vi(t){if(typeof t!="string"&&!(t&&typeof t=="object"&&"length"in t)){let e="{#each} only iterates over array-like objects.";throw typeof Symbol=="function"&&t&&Symbol.iterator in t&&(e+=" You can use a spread to convert this iterable into an array."),new Error(e)}}function Ji(t,e,n){for(const i of Object.keys(e))~n.indexOf(i)||console.warn(`<${t}> received an unexpected slot "${i}".`)}function Qi(t){if(t&&!(typeof t=="string"))throw new Error('<svelte:element> expects "this" attribute to be a string.')}function to(t){t&&Qe(t)&&console.warn(`<svelte:element this="${t}"> is self-closing and cannot have content.`)}function eo(t,e){const n="this={...} of <svelte:component> should specify a Svelte component.";try{const i=new t(e);if(!i.$$||!i.$set||!i.$on||!i.$destroy)throw new Error(n);return i}catch(i){const{message:o}=i;throw typeof o=="string"&&o.indexOf("is not a constructor")!==-1?new Error(n):i}}class no extends null{constructor(e){if(!e||!e.target&&!e.$$inline)throw new Error("'target' is a required option");super()}$destroy(){super.$destroy(),this.$destroy=()=>{console.warn("Component was already destroyed")}}$capture_state(){}$inject_state(){}}class io extends null{constructor(e){super(e)}}function oo(t){const e=Date.now();return()=>{if(Date.now()-e>t)throw new Error("Infinite loop detected")}}}},Jt={};function Q(c){var P=Jt[c];if(P!==void 0)return P.exports;var N=Jt[c]={exports:{}};return we[c](N,N.exports,Q),N.exports}Q.d=(c,P)=>{for(var N in P)Q.o(P,N)&&!Q.o(c,N)&&Object.defineProperty(c,N,{enumerable:!0,get:P[N]})},Q.o=(c,P)=>Object.prototype.hasOwnProperty.call(c,P);var Qt={};(()=>{Q.d(Qt,{default:()=>ne});var c=Q(234);function P(h){(0,c.qOq)(h,"svelte-1te7vt9",`.title.svelte-1te7vt9.svelte-1te7vt9{padding:0rem;margin:0.2rem}.token.svelte-1te7vt9.svelte-1te7vt9{border:0px solid currentColor;padding:0px;font-size:larger;position:relative;cursor:default;padding-right:-0.2rem}.token.svelte-1te7vt9.svelte-1te7vt9:first-child{border-left:0 none}.noLeadingSpaceTok.svelte-1te7vt9.svelte-1te7vt9{border-left:1px solid currentColor;border-right:1px solid currentColor}.noLeadingSpaceTok.svelte-1te7vt9+.noLeadingSpaceTok.svelte-1te7vt9{border-left:0 none}.noLeadingSpaceTok.svelte-1te7vt9+.token .highlighted.svelte-1te7vt9{border-right:0 none}.token.svelte-1te7vt9 .hovertext.svelte-1te7vt9{display:none;position:absolute;top:50%;left:50%;transform:translate(-50%, -100%);z-index:1;background:rgb(193, 193, 193, 0.8);color:black;margin-top:-.5rem;padding:.2rem;white-space:nowrap}.token.svelte-1te7vt9:hover .hovertext.svelte-1te7vt9{visibility:visible;display:block}.dark.svelte-1te7vt9.svelte-1te7vt9{background-color:black;color:white}.dark-text.svelte-1te7vt9.svelte-1te7vt9{color:white
    }.light.svelte-1te7vt9.svelte-1te7vt9{background-color:white;color:black}.light-text.svelte-1te7vt9.svelte-1te7vt9{color:black
    }.overlay-tok-text.svelte-1te7vt9.svelte-1te7vt9{border-left:0 none}.highlighted.highlighted.svelte-1te7vt9.svelte-1te7vt9{border:2px solid currentColor}.tokenOverlay.svelte-1te7vt9.svelte-1te7vt9{position:absolute;top:0;left:0;width:100%;height:100%}.invisible.svelte-1te7vt9.svelte-1te7vt9{color:rgba(0,0,0,0);background-color:rgba(0,0,0,0)}`)}function N(h,a,_){const d=h.slice();return d[8]=a[_][0],d[9]=a[_][1],d[11]=_,d}function L(h,a,_){const d=h.slice();return d[12]=a[_],d[14]=_,d}function tt(h,a,_){const d=h.slice();return d[12]=a[_],d[16]=_,d}function kt(h){let a,_;return{c(){a=(0,c.bGB)("span"),(0,c.Ljt)(a,"class","tokenOverlay svelte-1te7vt9"),(0,c.Ljt)(a,"style",_=Ft(h[12],h[1][h[16]]))},m(d,v){(0,c.$Tr)(d,a,v)},p(d,v){v&18&&_!==(_=Ft(d[12],d[1][d[16]]))&&(0,c.Ljt)(a,"style",_)},d(d){d&&(0,c.ogt)(a)}}}function jt(h){let a,_=h[5](h[12])+"",d;return{c(){a=(0,c.fLW)(", "),d=(0,c.fLW)(_)},m(v,x){(0,c.$Tr)(v,a,x),(0,c.$Tr)(v,d,x)},p(v,x){x&16&&_!==(_=v[5](v[12])+"")&&(0,c.rTO)(d,_)},d(v){v&&(0,c.ogt)(a),v&&(0,c.ogt)(d)}}}function te(h){let a=h[5](h[12])+"",_;return{c(){_=(0,c.fLW)(a)},m(d,v){(0,c.$Tr)(d,_,v)},p(d,v){v&16&&a!==(a=d[5](d[12])+"")&&(0,c.rTO)(_,a)},d(d){d&&(0,c.ogt)(_)}}}function rt(h){let a;function _(x,D){return x[14]==0?te:jt}let v=_(h,-1)(h);return{c(){v.c(),a=(0,c.cSb)()},m(x,D){v.m(x,D),(0,c.$Tr)(x,a,D)},p(x,D){v.p(x,D)},d(x){v.d(x),x&&(0,c.ogt)(a)}}}function st(h){let a,_,d=h[8]+"",v,x,D,C,$,E=h[8]+"",R,g,ct,ut,At,at,et=h[9],j=[];for(let b=0;b<et.length;b+=1)j[b]=kt(tt(h,et,b));let nt=h[9],A=[];for(let b=0;b<nt.length;b+=1)A[b]=rt(L(h,nt,b));return{c(){a=(0,c.bGB)("span"),_=(0,c.bGB)("span"),v=(0,c.fLW)(d),x=(0,c.DhX)();for(let b=0;b<j.length;b+=1)j[b].c();D=(0,c.DhX)(),C=(0,c.bGB)("span"),$=(0,c.bGB)("span"),R=(0,c.fLW)(E),ct=(0,c.DhX)(),ut=(0,c.bGB)("span");for(let b=0;b<A.length;b+=1)A[b].c();At=(0,c.DhX)(),(0,c.Ljt)(_,"class","invisible svelte-1te7vt9"),(0,c.Ljt)($,"class",g="overlay-tok-text "+h[2]+"-text background-color:rgba(0,0,0,0) svelte-1te7vt9"),(0,c.Ljt)(C,"class","tokenOverlay svelte-1te7vt9"),(0,c.Ljt)(ut,"class","hovertext svelte-1te7vt9"),(0,c.Ljt)(a,"class",at=(0,c.H1I)("token"+(h[8][0]!=="\u22C5"?" noLeadingSpaceTok":"")+(h[11]==h[3]?" highlighted":""))+" svelte-1te7vt9")},m(b,z){(0,c.$Tr)(b,a,z),(0,c.R3I)(a,_),(0,c.R3I)(_,v),(0,c.R3I)(a,x);for(let p=0;p<j.length;p+=1)j[p]&&j[p].m(a,null);(0,c.R3I)(a,D),(0,c.R3I)(a,C),(0,c.R3I)(C,$),(0,c.R3I)($,R),(0,c.R3I)(a,ct),(0,c.R3I)(a,ut);for(let p=0;p<A.length;p+=1)A[p]&&A[p].m(ut,null);(0,c.R3I)(a,At)},p(b,z){if(z&16&&d!==(d=b[8]+"")&&(0,c.rTO)(v,d),z&18){et=b[9];let p;for(p=0;p<et.length;p+=1){const X=tt(b,et,p);j[p]?j[p].p(X,z):(j[p]=kt(X),j[p].c(),j[p].m(a,D))}for(;p<j.length;p+=1)j[p].d(1);j.length=et.length}if(z&16&&E!==(E=b[8]+"")&&(0,c.rTO)(R,E),z&4&&g!==(g="overlay-tok-text "+b[2]+"-text background-color:rgba(0,0,0,0) svelte-1te7vt9")&&(0,c.Ljt)($,"class",g),z&48){nt=b[9];let p;for(p=0;p<nt.length;p+=1){const X=L(b,nt,p);A[p]?A[p].p(X,z):(A[p]=rt(X),A[p].c(),A[p].m(ut,null))}for(;p<A.length;p+=1)A[p].d(1);A.length=nt.length}z&24&&at!==(at=(0,c.H1I)("token"+(b[8][0]!=="\u22C5"?" noLeadingSpaceTok":"")+(b[11]==b[3]?" highlighted":""))+" svelte-1te7vt9")&&(0,c.Ljt)(a,"class",at)},d(b){b&&(0,c.ogt)(a),(0,c.RMB)(j,b),(0,c.RMB)(A,b)}}}function W(h){let a,_,d,v,x,D,C=h[4],$=[];for(let E=0;E<C.length;E+=1)$[E]=st(N(h,C,E));return{c(){a=(0,c.bGB)("main"),_=(0,c.bGB)("h3"),d=(0,c.fLW)(h[0]),v=(0,c.DhX)(),x=(0,c.bGB)("div");for(let E=0;E<$.length;E+=1)$[E].c();(0,c.Ljt)(_,"class","title svelte-1te7vt9"),(0,c.Ljt)(x,"class",D="doc "+h[2]+" svelte-1te7vt9")},m(E,R){(0,c.$Tr)(E,a,R),(0,c.R3I)(a,_),(0,c.R3I)(_,d),(0,c.R3I)(a,v),(0,c.R3I)(a,x);for(let g=0;g<$.length;g+=1)$[g]&&$[g].m(x,null)},p(E,[R]){if(R&1&&(0,c.rTO)(d,E[0]),R&62){C=E[4];let g;for(g=0;g<C.length;g+=1){const ct=N(E,C,g);$[g]?$[g].p(ct,R):($[g]=st(ct),$[g].c(),$[g].m(x,null))}for(;g<$.length;g+=1)$[g].d(1);$.length=C.length}R&4&&D!==(D="doc "+E[2]+" svelte-1te7vt9")&&(0,c.Ljt)(x,"class",D)},i:c.ZTd,o:c.ZTd,d(E){E&&(0,c.ogt)(a),(0,c.RMB)($,E)}}}function q(...h){const a=Math.min(...h.map(_=>_.length));return Array.from({length:a},(_,d)=>h.map(v=>v[d]))}function Ft(h,a){let[_,d,v]=a;return`background-color:rgba(${_},${d},${v},${.5*h})`}function lt(h,a,_){let{title:d=""}=a,{tokens:v}=a,{weights:x}=a,{weight_styles:D=[[220,13,48],[13,220,193]]}=a,{theme:C=""}=a,{highlight_index:$=-1}=a;C!=="dark"&&C!=="light"&&C!==""&&console.error("theme must be dark, light, or '' (empty string)");const E=g=>!g&&g!==0?"":g.toFixed(2);let R=q(v,x);return h.$$set=g=>{"title"in g&&_(0,d=g.title),"tokens"in g&&_(6,v=g.tokens),"weights"in g&&_(7,x=g.weights),"weight_styles"in g&&_(1,D=g.weight_styles),"theme"in g&&_(2,C=g.theme),"highlight_index"in g&&_(3,$=g.highlight_index)},h.$$.update=()=>{if(h.$$.dirty&192){t:_(4,R=q(v,x))}},[d,D,C,$,R,E,v,x]}class ee extends c.f_C{constructor(a){super(),(0,c.S1n)(this,a,lt,W,c.N8,{title:0,tokens:6,weights:7,weight_styles:1,theme:2,highlight_index:3},P)}}const ne=ee})(),MultiWeightedDoc=Qt.default})();
