var WeightedDoc;(()=>{"use strict";var ce={234:(a,R,A)=>{A.d(R,{$Tr:()=>Et,DhX:()=>ve,H1I:()=>ae,Ljt:()=>st,N8:()=>m,R3I:()=>mt,RMB:()=>be,S1n:()=>Ke,ZTd:()=>O,bGB:()=>V,fLW:()=>gt,f_C:()=>Ve,ogt:()=>G,qOq:()=>me,rTO:()=>Qt});function O(){}const K=t=>t;function at(t,e){for(const n in e)t[n]=e[n];return t}function ft(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function $t(t,e,n,i,r){t.__svelte_meta={loc:{file:e,line:n,column:i,char:r}}}function it(t){return t()}function rt(){return Object.create(null)}function N(t){t.forEach(it)}function f(t){return typeof t=="function"}function m(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let y;function S(t,e){return y||(y=document.createElement("a")),y.href=e,t===y.href}function D(t,e){return t!=t?e==e:t!==e}function E(t){return Object.keys(t).length===0}function M(t,e){if(t!=null&&typeof t.subscribe!="function")throw new Error(`'${e}' is not a store with a 'subscribe' method`)}function C(t,...e){if(t==null)return O;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function w(t){let e;return C(t,n=>e=n)(),e}function h(t,e,n){t.$$.on_destroy.push(C(e,n))}function v(t,e,n,i){if(t){const r=x(t,e,n,i);return t[0](r)}}function x(t,e,n,i){return t[1]&&i?at(n.ctx.slice(),t[1](i(e))):n.ctx}function dt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],s=Math.max(e.dirty.length,r.length);for(let l=0;l<s;l+=1)o[l]=e.dirty[l]|r[l];return o}return e.dirty|r}return e.dirty}function ue(t,e,n,i,r,o){if(r){const s=x(e,n,i,o);t.p(s,r)}}function tn(t,e,n,i,r,o,s){const l=dt(e,i,r,o);ue(t,e,n,i,l,s)}function en(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function nn(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function rn(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function on(t){const e={};for(const n in t)e[n]=!0;return e}function sn(t){let e=!1;return function(...n){e||(e=!0,t.call(this,...n))}}function ae(t){return t==null?"":t}function ln(t,e,n){return t.set(n),e}const fe=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);function cn(t){return t&&f(t.destroy)?t.destroy:O}function un(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const Ht=null,an=typeof window!="undefined";let ot=null,_t=null;function fn(t){ot=t}function dn(t){_t=t}const U=new Set;function zt(t){U.forEach(e=>{e.c(t)||(U.delete(e),e.f())}),U.size!==0&&_t(zt)}function _n(){U.clear()}function ht(t){let e;return U.size===0&&_t(zt),{promise:new Promise(n=>{U.add(e={c:t,f:n})}),abort(){U.delete(e)}}}const Gt=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;class Y{constructor(e){this.options=e,this._listeners="WeakMap"in Gt?new WeakMap:void 0}observe(e,n){return this._listeners.set(e,n),this._getObserver().observe(e,this.options),()=>{this._listeners.delete(e),this._observer.unobserve(e)}}_getObserver(){var e;return(e=this._observer)!==null&&e!==void 0?e:this._observer=new ResizeObserver(n=>{var i;for(const r of n)Y.entries.set(r.target,r),(i=this._listeners.get(r.target))===null||i===void 0||i(r)})}}Y.entries="WeakMap"in Gt?new WeakMap:void 0;let pt=!1;function de(){pt=!0}function _e(){pt=!1}function he(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function pe(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const p=e[u];p.claim_order!==void 0&&c.push(p)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,p=(r>0&&e[n[r]].claim_order<=u?r+1:he(1,r,g=>e[n[g]].claim_order,u))-1;i[c]=n[p]+1;const _=p+1;n[_]=c,r=Math.max(_,r)}const o=[],s=[];let l=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(o.push(e[c-1]);l>=c;l--)s.push(e[l]);l--}for(;l>=0;l--)s.push(e[l]);o.reverse(),s.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<s.length;c++){for(;u<o.length&&s[c].claim_order>=o[u].claim_order;)u++;const p=u<o.length?o[u]:null;t.insertBefore(s[c],p)}}function mt(t,e){t.appendChild(e)}function me(t,e,n){const i=xt(t);if(!i.getElementById(e)){const r=V("style");r.id=e,r.textContent=n,Xt(i,r)}}function xt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function ge(t){const e=V("style");return Xt(xt(t),e),e.sheet}function Xt(t,e){return mt(t.head||t,e),e.sheet}function Ut(t,e){if(pt){for(pe(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Et(t,e,n){t.insertBefore(e,n||null)}function Zt(t,e,n){pt&&!n?Ut(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function G(t){t.parentNode&&t.parentNode.removeChild(t)}function be(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function V(t){return document.createElement(t)}function hn(t,e){return document.createElement(t,{is:e})}function pn(t,e){const n={};for(const i in t)fe(t,i)&&e.indexOf(i)===-1&&(n[i]=t[i]);return n}function Kt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function gt(t){return document.createTextNode(t)}function ve(){return gt(" ")}function mn(){return gt("")}function ye(t){return document.createComment(t)}function St(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function gn(t){return function(e){return e.preventDefault(),t.call(this,e)}}function bn(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function vn(t){return function(e){return e.stopImmediatePropagation(),t.call(this,e)}}function yn(t){return function(e){e.target===this&&t.call(this,e)}}function wn(t){return function(e){e.isTrusted&&t.call(this,e)}}function st(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const we=null;function Fe(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&we.indexOf(i)===-1?t[i]=e[i]:st(t,i,e[i])}function Fn(t,e){for(const n in e)st(t,n,e[n])}function ke(t,e){Object.keys(e).forEach(n=>{$e(t,n,e[n])})}function $e(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:st(t,e,n)}function kn(t){return/-/.test(t)?ke:Fe}function $n(t,e,n){t.setAttributeNS("http://www.w3.org/1999/xlink",e,n)}function xn(t,e,n){const i=new Set;for(let r=0;r<t.length;r+=1)t[r].checked&&i.add(t[r].__value);return n||i.delete(e),Array.from(i)}function En(t){let e;return{p(...n){e=n,e.forEach(i=>t.push(i))},r(){e.forEach(n=>t.splice(t.indexOf(n),1))}}}function Sn(t,e){let n=r(t),i;function r(l){for(let c=0;c<e.length;c++)l=l[e[c]]=l[e[c]]||[];return l}function o(){i.forEach(l=>n.push(l))}function s(){i.forEach(l=>n.splice(n.indexOf(l),1))}return{u(l){e=l;const c=r(t);c!==n&&(s(),n=c,o())},p(...l){i=l,o()},r:s}}function Tn(t){return t===""?null:+t}function On(t){const e=[];for(let n=0;n<t.length;n+=1)e.push({start:t.start(n),end:t.end(n)});return e}function xe(t){return Array.from(t.childNodes)}function Yt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Tt(t,e,n,i,r=!1){Yt(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const l=t[s];if(e(l)){const c=n(l);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),l}}for(let s=t.claim_info.last_index-1;s>=0;s--){const l=t[s];if(e(l)){const c=n(l);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,l}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function Vt(t,e,n,i){return Tt(t,r=>r.nodeName===e,r=>{const o=[];for(let s=0;s<r.attributes.length;s++){const l=r.attributes[s];n[l.name]||o.push(l.name)}o.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Cn(t,e,n){return Vt(t,e,n,V)}function Dn(t,e,n){return Vt(t,e,n,Kt)}function Ee(t,e){return Tt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>gt(e),!0)}function Mn(t){return Ee(t," ")}function An(t,e){return Tt(t,n=>n.nodeType===8,n=>{n.data=""+e},()=>ye(e),!0)}function Jt(t,e,n){for(let i=n;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===e)return i}return t.length}function jn(t,e){const n=Jt(t,"HTML_TAG_START",0),i=Jt(t,"HTML_TAG_END",n);if(n===i)return new te(void 0,e);Yt(t);const r=t.splice(n,i-n+1);G(r[0]),G(r[r.length-1]);const o=r.slice(1,r.length-1);for(const s of o)s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new te(o,e)}function Qt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Se(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ln(t,e,n){~Ht.indexOf(n)?Se(t,e):Qt(t,e)}function Rn(t,e){t.value=e==null?"":e}function Nn(t,e){try{t.type=e}catch(n){}}function Bn(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function In(t,e,n){for(let i=0;i<t.options.length;i+=1){const r=t.options[i];if(r.__value===e){r.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Pn(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];i.selected=~e.indexOf(i.__value)}}function qn(t){const e=t.querySelector(":checked");return e&&e.__value}function Wn(t){return[].map.call(t.querySelectorAll(":checked"),e=>e.__value)}let bt;function Te(){if(bt===void 0){bt=!1;try{typeof window!="undefined"&&window.parent&&window.parent.document}catch(t){bt=!0}}return bt}function Hn(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=V("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=Te();let o;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",o=St(window,"message",s=>{s.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{o=St(i.contentWindow,"resize",e),e()}),mt(t,i),()=>{(r||o&&i.contentWindow)&&o(),G(i)}}const zn=new Y({box:"content-box"}),Gn=new Y({box:"border-box"}),Xn=new Y({box:"device-pixel-content-box"});function Un(t,e,n){t.classList[n?"add":"remove"](e)}function Ot(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function Zn(t,e=document.body){return Array.from(e.querySelectorAll(t))}function Kn(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const o=r.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(r)):o===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}class Yn{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=Kt(n.nodeName):this.e=V(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Et(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(G)}}class te extends null{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)Zt(this.t,this.n[n],e)}}function Vn(t){const e={};for(const n of t)e[n.name]=n.value;return e}function Jn(t){const e={};return t.childNodes.forEach(n=>{e[n.slot||"default"]=!0}),e}function Qn(t,e){return new t(e)}const vt=new Map;let yt=0;function Oe(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ce(t,e){const n={stylesheet:ge(e),rules:{}};return vt.set(t,n),n}function lt(t,e,n,i,r,o,s,l=0){const c=16.666/i;let u=`{
`;for(let F=0;F<=1;F+=c){const $=e+(n-e)*o(F);u+=F*100+`%{${s($,1-$)}}
`}const p=u+`100% {${s(n,1-n)}}
}`,_=`__svelte_${Oe(p)}_${l}`,g=xt(t),{stylesheet:d,rules:b}=vt.get(g)||Ce(g,t);b[_]||(b[_]=!0,d.insertRule(`@keyframes ${_} ${p}`,d.cssRules.length));const k=t.style.animation||"";return t.style.animation=`${k?`${k}, `:""}${_} ${i}ms linear ${r}ms 1 both`,yt+=1,_}function ct(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),yt-=r,yt||De())}function De(){_t(()=>{yt||(vt.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&G(e)}),vt.clear())})}function ti(t,e,n,i){if(!e)return O;const r=t.getBoundingClientRect();if(e.left===r.left&&e.right===r.right&&e.top===r.top&&e.bottom===r.bottom)return O;const{delay:o=0,duration:s=300,easing:l=K,start:c=ot()+o,end:u=c+s,tick:p=O,css:_}=n(t,{from:e,to:r},i);let g=!0,d=!1,b;function k(){_&&(b=lt(t,0,1,s,o,l,_)),o||(d=!0)}function F(){_&&ct(t,b),g=!1}return ht($=>{if(!d&&$>=c&&(d=!0),d&&$>=u&&(p(1,0),F()),!g)return!1;if(d){const I=$-c,L=0+1*l(I/s);p(L,1-L)}return!0}),k(),p(0,1),F}function ei(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:i}=e,r=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=i,Me(t,r)}}function Me(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const i=getComputedStyle(t),r=i.transform==="none"?"":i.transform;t.style.transform=`${r} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let J;function B(t){J=t}function P(){if(!J)throw new Error("Function called outside component initialization");return J}function ni(t){P().$$.before_update.push(t)}function ii(t){P().$$.on_mount.push(t)}function ri(t){P().$$.after_update.push(t)}function oi(t){P().$$.on_destroy.push(t)}function si(){const t=P();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const o=Ot(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,o)}),!o.defaultPrevented}return!0}}function li(t,e){return P().$$.context.set(t,e),e}function ci(t){return P().$$.context.get(t)}function ui(){return P().$$.context}function ai(t){return P().$$.context.has(t)}function fi(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const Q=[],di={enabled:!1},ee=[];let tt=[];const Ct=[],ne=Promise.resolve();let Dt=!1;function ie(){Dt||(Dt=!0,ne.then(At))}function _i(){return ie(),ne}function et(t){tt.push(t)}function hi(t){Ct.push(t)}const Mt=new Set;let nt=0;function At(){if(nt!==0)return;const t=J;do{try{for(;nt<Q.length;){const e=Q[nt];nt++,B(e),Ae(e.$$)}}catch(e){throw Q.length=0,nt=0,e}for(B(null),Q.length=0,nt=0;ee.length;)ee.pop()();for(let e=0;e<tt.length;e+=1){const n=tt[e];Mt.has(n)||(Mt.add(n),n())}tt.length=0}while(Q.length);for(;Ct.length;)Ct.pop()();Dt=!1,Mt.clear(),B(t)}function Ae(t){if(t.fragment!==null){t.update(),N(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(et)}}function je(t){const e=[],n=[];tt.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),tt=e}let ut;function jt(){return ut||(ut=Promise.resolve(),ut.then(()=>{ut=null})),ut}function Z(t,e,n){t.dispatchEvent(Ot(`${e?"intro":"outro"}${n}`))}const wt=new Set;let q;function Le(){q={r:0,c:[],p:q}}function Re(){q.r||N(q.c),q=q.p}function Lt(t,e){t&&t.i&&(wt.delete(t),t.i(e))}function re(t,e,n,i){if(t&&t.o){if(wt.has(t))return;wt.add(t),q.c.push(()=>{wt.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Rt={duration:0};function pi(t,e,n){const i={direction:"in"};let r=e(t,n,i),o=!1,s,l,c=0;function u(){s&&ct(t,s)}function p(){const{delay:g=0,duration:d=300,easing:b=K,tick:k=O,css:F}=r||Rt;F&&(s=lt(t,0,1,d,g,b,F,c++)),k(0,1);const $=ot()+g,I=$+d;l&&l.abort(),o=!0,et(()=>Z(t,!0,"start")),l=ht(L=>{if(o){if(L>=I)return k(1,0),Z(t,!0,"end"),u(),o=!1;if(L>=$){const W=b((L-$)/d);k(W,1-W)}}return o})}let _=!1;return{start(){_||(_=!0,ct(t),f(r)?(r=r(i),jt().then(p)):p())},invalidate(){_=!1},end(){o&&(u(),o=!1)}}}function mi(t,e,n){const i={direction:"out"};let r=e(t,n,i),o=!0,s;const l=q;l.r+=1;function c(){const{delay:u=0,duration:p=300,easing:_=K,tick:g=O,css:d}=r||Rt;d&&(s=lt(t,1,0,p,u,_,d));const b=ot()+u,k=b+p;et(()=>Z(t,!1,"start")),ht(F=>{if(o){if(F>=k)return g(0,1),Z(t,!1,"end"),--l.r||N(l.c),!1;if(F>=b){const $=_((F-b)/p);g(1-$,$)}}return o})}return f(r)?jt().then(()=>{r=r(i),c()}):c(),{end(u){u&&r.tick&&r.tick(1,0),o&&(s&&ct(t,s),o=!1)}}}function gi(t,e,n,i){const r={direction:"both"};let o=e(t,n,r),s=i?0:1,l=null,c=null,u=null;function p(){u&&ct(t,u)}function _(d,b){const k=d.b-s;return b*=Math.abs(k),{a:s,b:d.b,d:k,duration:b,start:d.start,end:d.start+b,group:d.group}}function g(d){const{delay:b=0,duration:k=300,easing:F=K,tick:$=O,css:I}=o||Rt,L={start:ot()+b,b:d};d||(L.group=q,q.r+=1),l||c?c=L:(I&&(p(),u=lt(t,s,d,k,b,F,I)),d&&$(0,1),l=_(L,k),et(()=>Z(t,d,"start")),ht(W=>{if(c&&W>c.start&&(l=_(c,k),c=null,Z(t,l.b,"start"),I&&(p(),u=lt(t,s,l.b,l.duration,0,F,o.css))),l){if(W>=l.end)$(s=l.b,1-s),Z(t,l.b,"end"),c||(l.b?p():--l.group.r||N(l.group.c)),l=null;else if(W>=l.start){const Ft=W-l.start;s=l.a+l.d*F(Ft/l.duration),$(s,1-s)}}return!!(l||c)}))}return{run(d){f(o)?jt().then(()=>{o=o(r),g(d)}):g(d)},end(){p(),l=c=null}}}function bi(t,e){const n=e.token={};function i(r,o,s,l){if(e.token!==n)return;e.resolved=l;let c=e.ctx;s!==void 0&&(c=c.slice(),c[s]=l);const u=r&&(e.current=r)(c);let p=!1;e.block&&(e.blocks?e.blocks.forEach((_,g)=>{g!==o&&_&&(Le(),re(_,1,1,()=>{e.blocks[g]===_&&(e.blocks[g]=null)}),Re())}):e.block.d(1),u.c(),Lt(u,1),u.m(e.mount(),e.anchor),p=!0),e.block=u,e.blocks&&(e.blocks[o]=u),p&&At()}if(ft(t)){const r=P();if(t.then(o=>{B(r),i(e.then,1,e.value,o),B(null)},o=>{if(B(r),i(e.catch,2,e.error,o),B(null),!e.hasCatch)throw o}),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,t),!0;e.resolved=t}}function vi(t,e,n){const i=e.slice(),{resolved:r}=t;t.current===t.then&&(i[t.value]=r),t.current===t.catch&&(i[t.error]=r),t.block.p(i,n)}function Ne(t,e){t.d(1),e.delete(t.key)}function Be(t,e){re(t,1,1,()=>{e.delete(t.key)})}function yi(t,e){t.f(),Ne(t,e)}function wi(t,e){t.f(),Be(t,e)}function Fi(t,e,n,i,r,o,s,l,c,u,p,_){let g=t.length,d=o.length,b=g;const k={};for(;b--;)k[t[b].key]=b;const F=[],$=new Map,I=new Map,L=[];for(b=d;b--;){const T=_(r,o,b),H=n(T);let z=s.get(H);z?i&&L.push(()=>z.p(T,e)):(z=u(H,T),z.c()),$.set(H,F[b]=z),H in k&&I.set(H,Math.abs(b-k[H]))}const W=new Set,Ft=new Set;function Pt(T){Lt(T,1),T.m(l,p),s.set(T.key,T),p=T.first,d--}for(;g&&d;){const T=F[d-1],H=t[g-1],z=T.key,kt=H.key;T===H?(p=T.first,g--,d--):$.has(kt)?!s.has(z)||W.has(z)?Pt(T):Ft.has(kt)?g--:I.get(z)>I.get(kt)?(Ft.add(z),Pt(T)):(W.add(kt),g--):(c(H,s),g--)}for(;g--;){const T=t[g];$.has(T.key)||c(T,s)}for(;d;)Pt(F[d-1]);return N(L),F}function ki(t,e,n,i){const r=new Set;for(let o=0;o<e.length;o++){const s=i(n(t,e,o));if(r.has(s))throw new Error("Cannot have duplicate keys in a keyed each");r.add(s)}}function $i(t,e){const n={},i={},r={$$scope:1};let o=t.length;for(;o--;){const s=t[o],l=e[o];if(l){for(const c in s)c in l||(i[c]=1);for(const c in l)r[c]||(n[c]=l[c],r[c]=1);t[o]=l}else for(const c in s)r[c]=1}for(const s in i)s in n||(n[s]=void 0);return n}function xi(t){return typeof t=="object"&&t!==null?t:{}}const Ie=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"],Pe=new Set([...Ie]),qe=/^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;function We(t){return qe.test(t)||t.toLowerCase()==="!doctype"}const He=/[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;function Ei(t,e){const n=Object.assign({},...t);if(e){const r=e.classes,o=e.styles;r&&(n.class==null?n.class=r:n.class+=" "+r),o&&(n.style==null?n.style=Bt(o):n.style=Bt(ze(n.style,o)))}let i="";return Object.keys(n).forEach(r=>{if(He.test(r))return;const o=n[r];o===!0?i+=" "+r:Pe.has(r.toLowerCase())?o&&(i+=" "+r):o!=null&&(i+=` ${r}="${o}"`)}),i}function ze(t,e){const n={};for(const i of t.split(";")){const r=i.indexOf(":"),o=i.slice(0,r).trim(),s=i.slice(r+1).trim();!o||(n[o]=s)}for(const i in e){const r=e[i];r?n[i]=r:delete n[i]}return n}const Ge=/[&"]/g,Xe=/[&<]/g;function oe(t,e=!1){const n=String(t),i=e?Ge:Xe;i.lastIndex=0;let r="",o=0;for(;i.test(n);){const s=i.lastIndex-1,l=n[s];r+=n.substring(o,s)+(l==="&"?"&amp;":l==='"'?"&quot;":"&lt;"),o=s+1}return r+n.substring(o)}function se(t){return typeof t=="string"||t&&typeof t=="object"?oe(t,!0):t}function Si(t){const e={};for(const n in t)e[n]=se(t[n]);return e}function Ti(t,e){let n="";for(let i=0;i<t.length;i+=1)n+=e(t[i],i);return n}const Oi={$$render:()=>""};function Ci(t,e){if(!t||!t.$$render)throw e==="svelte:component"&&(e+=" this={...}"),new Error(`<${e}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${e}>.`);return t}function Di(t,e,n,i){return console.log(`{@debug} ${t?t+" ":""}(${e}:${n})`),console.log(i),""}let Nt;function Mi(t){function e(n,i,r,o,s){const l=J,c={on_destroy:Nt,context:new Map(s||(l?l.$$.context:[])),on_mount:[],before_update:[],after_update:[],callbacks:rt()};B({$$:c});const u=t(n,i,r,o);return B(l),u}return{render:(n={},{$$slots:i={},context:r=new Map}={})=>{Nt=[];const o={title:"",head:"",css:new Set},s=e(o,n,{},i,r);return N(Nt),{html:s,css:{code:Array.from(o.css).map(l=>l.code).join(`
`),map:null},head:o.title+o.head}},$$render:e}}function Ai(t,e,n){if(e==null||n&&!e)return"";const i=n&&e===!0?"":`="${oe(e,!0)}"`;return` ${t}${i}`}function ji(t){return t?` class="${t}"`:""}function Bt(t){return Object.keys(t).filter(e=>t[e]).map(e=>`${e}: ${se(t[e])};`).join(" ")}function Li(t){const e=Bt(t);return e?` style="${e}"`:""}function Ri(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Ni(t){t&&t.c()}function Bi(t,e){t&&t.l(e)}function Ue(t,e,n,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),i||et(()=>{const s=t.$$.on_mount.map(it).filter(f);t.$$.on_destroy?t.$$.on_destroy.push(...s):N(s),t.$$.on_mount=[]}),o.forEach(et)}function le(t,e){const n=t.$$;n.fragment!==null&&(je(n.after_update),N(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ze(t,e){t.$$.dirty[0]===-1&&(Q.push(t),ie(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ke(t,e,n,i,r,o,s,l=[-1]){const c=J;B(t);const u=t.$$={fragment:null,ctx:[],props:o,update:O,not_equal:r,bound:rt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:rt(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};s&&s(u.root);let p=!1;if(u.ctx=n?n(t,e.props||{},(_,g,...d)=>{const b=d.length?d[0]:g;return u.ctx&&r(u.ctx[_],u.ctx[_]=b)&&(!u.skip_bound&&u.bound[_]&&u.bound[_](b),p&&Ze(t,_)),g}):[],u.update(),p=!0,N(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){de();const _=xe(e.target);u.fragment&&u.fragment.l(_),_.forEach(G)}else u.fragment&&u.fragment.c();e.intro&&Lt(t.$$.fragment),Ue(t,e.target,e.anchor,e.customElement),_e(),At()}B(c)}let Ye;typeof HTMLElement=="function"&&(Ye=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(it).filter(f);for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){N(this.$$.on_disconnect)}$destroy(){le(this,1),this.$destroy=O}$on(t,e){if(!f(e))return O;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const i=n.indexOf(e);i!==-1&&n.splice(i,1)}}$set(t){this.$$set&&!E(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class Ve{$destroy(){le(this,1),this.$destroy=O}$on(e,n){if(!f(n))return O;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!E(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function j(t,e){document.dispatchEvent(Ot(t,Object.assign({version:"3.59.2"},e),{bubbles:!0}))}function Ii(t,e){j("SvelteDOMInsert",{target:t,node:e}),mt(t,e)}function Pi(t,e){j("SvelteDOMInsert",{target:t,node:e}),Ut(t,e)}function qi(t,e,n){j("SvelteDOMInsert",{target:t,node:e,anchor:n}),Et(t,e,n)}function Wi(t,e,n){j("SvelteDOMInsert",{target:t,node:e,anchor:n}),Zt(t,e,n)}function It(t){j("SvelteDOMRemove",{node:t}),G(t)}function Hi(t,e){for(;t.nextSibling&&t.nextSibling!==e;)It(t.nextSibling)}function zi(t){for(;t.previousSibling;)It(t.previousSibling)}function Gi(t){for(;t.nextSibling;)It(t.nextSibling)}function Xi(t,e,n,i,r,o,s){const l=i===!0?["capture"]:i?Array.from(Object.keys(i)):[];r&&l.push("preventDefault"),o&&l.push("stopPropagation"),s&&l.push("stopImmediatePropagation"),j("SvelteDOMAddEventListener",{node:t,event:e,handler:n,modifiers:l});const c=St(t,e,n,i);return()=>{j("SvelteDOMRemoveEventListener",{node:t,event:e,handler:n,modifiers:l}),c()}}function Ui(t,e,n){st(t,e,n),n==null?j("SvelteDOMRemoveAttribute",{node:t,attribute:e}):j("SvelteDOMSetAttribute",{node:t,attribute:e,value:n})}function Zi(t,e,n){t[e]=n,j("SvelteDOMSetProperty",{node:t,property:e,value:n})}function Ki(t,e,n){t.dataset[e]=n,j("SvelteDOMSetDataset",{node:t,property:e,value:n})}function Je(t,e){e=""+e,t.data!==e&&(j("SvelteDOMSetData",{node:t,data:e}),t.data=e)}function Qe(t,e){e=""+e,t.wholeText!==e&&(j("SvelteDOMSetData",{node:t,data:e}),t.data=e)}function Yi(t,e,n){~Ht.indexOf(n)?Qe(t,e):Je(t,e)}function Vi(t){if(typeof t!="string"&&!(t&&typeof t=="object"&&"length"in t)){let e="{#each} only iterates over array-like objects.";throw typeof Symbol=="function"&&t&&Symbol.iterator in t&&(e+=" You can use a spread to convert this iterable into an array."),new Error(e)}}function Ji(t,e,n){for(const i of Object.keys(e))~n.indexOf(i)||console.warn(`<${t}> received an unexpected slot "${i}".`)}function Qi(t){if(t&&!(typeof t=="string"))throw new Error('<svelte:element> expects "this" attribute to be a string.')}function tr(t){t&&We(t)&&console.warn(`<svelte:element this="${t}"> is self-closing and cannot have content.`)}function er(t,e){const n="this={...} of <svelte:component> should specify a Svelte component.";try{const i=new t(e);if(!i.$$||!i.$set||!i.$on||!i.$destroy)throw new Error(n);return i}catch(i){const{message:r}=i;throw typeof r=="string"&&r.indexOf("is not a constructor")!==-1?new Error(n):i}}class nr extends null{constructor(e){if(!e||!e.target&&!e.$$inline)throw new Error("'target' is a required option");super()}$destroy(){super.$destroy(),this.$destroy=()=>{console.warn("Component was already destroyed")}}$capture_state(){}$inject_state(){}}class ir extends null{constructor(e){super(e)}}function rr(t){const e=Date.now();return()=>{if(Date.now()-e>t)throw new Error("Infinite loop detected")}}}},qt={};function X(a){var R=qt[a];if(R!==void 0)return R.exports;var A=qt[a]={exports:{}};return ce[a](A,A.exports,X),A.exports}X.d=(a,R)=>{for(var A in R)X.o(R,A)&&!X.o(a,A)&&Object.defineProperty(a,A,{enumerable:!0,get:R[A]})},X.o=(a,R)=>Object.prototype.hasOwnProperty.call(a,R);var Wt={};(()=>{X.d(Wt,{default:()=>N});var a=X(234);function R(f){(0,a.qOq)(f,"svelte-1r5vl9h",".title.svelte-1r5vl9h.svelte-1r5vl9h{padding:0rem;margin:0.2rem}.token.svelte-1r5vl9h.svelte-1r5vl9h{border:0px solid currentColor;padding:0px;position:relative;cursor:default;padding:0rem;margin:0rem;display:inline-block;vertical-align:top;white-space:pre-wrap;padding-left:0rem;padding-right:.12rem}.token.svelte-1r5vl9h.svelte-1r5vl9h:first-child{border-left:0 none}.token.svelte-1r5vl9h.svelte-1r5vl9h:hover{background-color:rgba(135,206,250,1)}.noLeadingSpaceTok.svelte-1r5vl9h.svelte-1r5vl9h{border-left:1px solid currentColor;border-right:1px solid currentColor;padding-left:.06rem}.noSpaceToRight.svelte-1r5vl9h.svelte-1r5vl9h{padding-right:.06rem}.noLeadingSpaceTok.svelte-1r5vl9h+.noLeadingSpaceTok.svelte-1r5vl9h{border-left:0 none}.noLeadingSpaceTok.svelte-1r5vl9h+.token .highlighted.svelte-1r5vl9h{border-right:0 none}.token.svelte-1r5vl9h .hovertext.svelte-1r5vl9h{display:none;position:absolute;top:50%;left:50%;transform:translate(-50%, -100%);z-index:1;background:#c1c1c1;color:black;margin-top:-.5rem;padding:.2rem;white-space:nowrap;pointer-events:none}.token.svelte-1r5vl9h:hover .hovertext.svelte-1r5vl9h{visibility:visible;display:block}.dark.svelte-1r5vl9h.svelte-1r5vl9h{background-color:black;color:white}.light.svelte-1r5vl9h.svelte-1r5vl9h{background-color:white;color:black}.highlighted.highlighted.svelte-1r5vl9h.svelte-1r5vl9h{border:2px solid currentColor}")}function A(f,m,y){const S=f.slice();return S[7]=m[y][0],S[8]=m[y][1],S[10]=y,S}function O(f){let m,y=f[7]+"",S,D,E=f[5](f[8])+"",M,C,w;return{c(){m=(0,a.bGB)("span"),S=(0,a.fLW)(y),D=(0,a.bGB)("span"),M=(0,a.fLW)(E),(0,a.Ljt)(D,"class","hovertext svelte-1r5vl9h"),(0,a.Ljt)(m,"class",C=(0,a.H1I)(["token",f[7][0]!=="\u22C5"?" noLeadingSpaceTok":"",f[10]==f[3]?" highlighted":"",ft(f[1],f[10])?"noSpaceToRight":""].filter(Boolean).join(" "))+" svelte-1r5vl9h"),(0,a.Ljt)(m,"style",w=$t(f[8]))},m(h,v){(0,a.$Tr)(h,m,v),(0,a.R3I)(m,S),(0,a.R3I)(m,D),(0,a.R3I)(D,M)},p(h,v){v&16&&y!==(y=h[7]+"")&&(0,a.rTO)(S,y),v&16&&E!==(E=h[5](h[8])+"")&&(0,a.rTO)(M,E),v&26&&C!==(C=(0,a.H1I)(["token",h[7][0]!=="\u22C5"?" noLeadingSpaceTok":"",h[10]==h[3]?" highlighted":"",ft(h[1],h[10])?"noSpaceToRight":""].filter(Boolean).join(" "))+" svelte-1r5vl9h")&&(0,a.Ljt)(m,"class",C),v&16&&w!==(w=$t(h[8]))&&(0,a.Ljt)(m,"style",w)},d(h){h&&(0,a.ogt)(m)}}}function K(f){let m,y,S,D,E,M,C=f[4],w=[];for(let h=0;h<C.length;h+=1)w[h]=O(A(f,C,h));return{c(){m=(0,a.bGB)("main"),y=(0,a.bGB)("h3"),S=(0,a.fLW)(f[0]),D=(0,a.DhX)(),E=(0,a.bGB)("div");for(let h=0;h<w.length;h+=1)w[h].c();(0,a.Ljt)(y,"class","title svelte-1r5vl9h"),(0,a.Ljt)(E,"class",M="doc "+f[2]+" svelte-1r5vl9h")},m(h,v){(0,a.$Tr)(h,m,v),(0,a.R3I)(m,y),(0,a.R3I)(y,S),(0,a.R3I)(m,D),(0,a.R3I)(m,E);for(let x=0;x<w.length;x+=1)w[x]&&w[x].m(E,null)},p(h,[v]){if(v&1&&(0,a.rTO)(S,h[0]),v&58){C=h[4];let x;for(x=0;x<C.length;x+=1){const dt=A(h,C,x);w[x]?w[x].p(dt,v):(w[x]=O(dt),w[x].c(),w[x].m(E,null))}for(;x<w.length;x+=1)w[x].d(1);w.length=C.length}v&4&&M!==(M="doc "+h[2]+" svelte-1r5vl9h")&&(0,a.Ljt)(E,"class",M)},i:a.ZTd,o:a.ZTd,d(h){h&&(0,a.ogt)(m),(0,a.RMB)(w,h)}}}function at(...f){const m=Math.min(...f.map(y=>y.length));return Array.from({length:m},(y,S)=>f.map(D=>D[S]))}function ft(f,m){return m<f.length-1&&f[m+1][0]!=="\u22C5"}function $t(f){return f>=0?`background-color:rgba(13,220,193,${f});`:`background-color:rgba(220,13,48,${-f});`}function it(f,m,y){let{title:S=""}=m,{tokens:D}=m,{weights:E}=m,{theme:M=""}=m,{highlight_index:C=-1}=m;M!=="dark"&&M!=="light"&&M!==""&&console.error("theme must be dark, light, or '' (empty string)");const w=v=>!v&&v!==0?"":v.toFixed(2);let h=at(D,E);return f.$$set=v=>{"title"in v&&y(0,S=v.title),"tokens"in v&&y(1,D=v.tokens),"weights"in v&&y(6,E=v.weights),"theme"in v&&y(2,M=v.theme),"highlight_index"in v&&y(3,C=v.highlight_index)},f.$$.update=()=>{if(f.$$.dirty&66){t:y(4,h=at(D,E))}},[S,D,M,C,h,w,E]}class rt extends a.f_C{constructor(m){super(),(0,a.S1n)(this,m,it,K,a.N8,{title:0,tokens:1,weights:6,theme:2,highlight_index:3},R)}}const N=rt})(),WeightedDoc=Wt.default})();
