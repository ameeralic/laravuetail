import{d as Ge,h as O,F as ne,i as M,w as N,r as b,e as y,f as L,g as $,j as F,k as le,p as Y,T as Ye,l as Ke,u as V,s as ze,n as Xe,o as q,c as G,a as p,m as Z,q as ge,t as ye,v as Qe,x as Je,y as be}from"./app-8ee1c723.js";function C(e,t,...n){if(e in t){let l=t[e];return typeof l=="function"?l(...n):l}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(l=>`"${l}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,C),r}var ce=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(ce||{}),Ze=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(Ze||{});function P({visible:e=!0,features:t=0,ourProps:n,theirProps:r,...l}){var o;let a=Se(r,n),i=Object.assign(l,{props:a});if(e||t&2&&a.static)return se(i);if(t&1){let u=(o=a.unmount)==null||o?0:1;return C(u,{[0](){return null},[1](){return se({...l,props:{...a,hidden:!0,style:{display:"none"}}})}})}return se(i)}function se({props:e,attrs:t,slots:n,slot:r,name:l}){var o,a;let{as:i,...u}=et(e,["unmount","static"]),s=(o=n.default)==null?void 0:o.call(n,r),d={};if(r){let m=!1,h=[];for(let[c,f]of Object.entries(r))typeof f=="boolean"&&(m=!0),f===!0&&h.push(c);m&&(d["data-headlessui-state"]=h.join(" "))}if(i==="template"){if(s=xe(s??[]),Object.keys(u).length>0||Object.keys(t).length>0){let[m,...h]=s??[];if(!tt(m)||h.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${l} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(u).concat(Object.keys(t)).map(v=>v.trim()).filter((v,k,X)=>X.indexOf(v)===k).sort((v,k)=>v.localeCompare(k)).map(v=>`  - ${v}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(v=>`  - ${v}`).join(`
`)].join(`
`));let c=Se((a=m.props)!=null?a:{},u),f=Ge(m,c);for(let v in c)v.startsWith("on")&&(f.props||(f.props={}),f.props[v]=c[v]);return f}return Array.isArray(s)&&s.length===1?s[0]:s}return O(i,Object.assign({},u,d),{default:()=>s})}function xe(e){return e.flatMap(t=>t.type===ne?xe(t.children):[t])}function Se(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let l in r)l.startsWith("on")&&typeof r[l]=="function"?(n[l]!=null||(n[l]=[]),n[l].push(r[l])):t[l]=r[l];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](l,...o){let a=n[r];for(let i of a){if(l instanceof Event&&l.defaultPrevented)return;i(l,...o)}}});return t}function et(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function tt(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let nt=0;function rt(){return++nt}function H(){return rt()}var Oe=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Oe||{});function x(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}let lt=Symbol("Context");var U=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(U||{});function ot(){return M(lt,null)}var at=Object.defineProperty,it=(e,t,n)=>t in e?at(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,we=(e,t,n)=>(it(e,typeof t!="symbol"?t+"":t,n),n);class st{constructor(){we(this,"current",this.detect()),we(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let oe=new st;function K(e){if(oe.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=x(e);if(t)return t.ownerDocument}return document}let fe=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var T=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(T||{}),Le=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Le||{}),ut=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(ut||{});function dt(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(fe)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var Pe=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Pe||{});function ct(e,t=0){var n;return e===((n=K(e))==null?void 0:n.body)?!1:C(t,{[0](){return e.matches(fe)},[1](){let r=e;for(;r!==null;){if(r.matches(fe))return!0;r=r.parentElement}return!1}})}var ft=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(ft||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function _(e){e==null||e.focus({preventScroll:!0})}let pt=["textarea","input"].join(",");function vt(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,pt))!=null?n:!1}function mt(e,t=n=>n){return e.slice().sort((n,r)=>{let l=t(n),o=t(r);if(l===null||o===null)return 0;let a=l.compareDocumentPosition(o);return a&Node.DOCUMENT_POSITION_FOLLOWING?-1:a&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function te(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:l=[]}={}){var o;let a=(o=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?o:document,i=Array.isArray(e)?n?mt(e):e:dt(e);l.length>0&&i.length>1&&(i=i.filter(f=>!l.includes(f))),r=r??a.activeElement;let u=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,i.indexOf(r))-1;if(t&4)return Math.max(0,i.indexOf(r))+1;if(t&8)return i.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=t&32?{preventScroll:!0}:{},m=0,h=i.length,c;do{if(m>=h||m+h<=0)return 0;let f=s+m;if(t&16)f=(f+h)%h;else{if(f<0)return 3;if(f>=h)return 1}c=i[f],c==null||c.focus(d),m+=u}while(c!==a.activeElement);return t&6&&vt(c)&&c.select(),2}function ue(e,t,n){oe.isServer||N(r=>{document.addEventListener(e,t,n),r(()=>document.removeEventListener(e,t,n))})}function ht(e,t,n=y(()=>!0)){function r(o,a){if(!n.value||o.defaultPrevented)return;let i=a(o);if(i===null||!i.getRootNode().contains(i))return;let u=function s(d){return typeof d=="function"?s(d()):Array.isArray(d)||d instanceof Set?d:[d]}(e);for(let s of u){if(s===null)continue;let d=s instanceof HTMLElement?s:x(s);if(d!=null&&d.contains(i)||o.composed&&o.composedPath().includes(d))return}return!ct(i,Pe.Loose)&&i.tabIndex!==-1&&o.preventDefault(),t(o,i)}let l=b(null);ue("mousedown",o=>{var a,i;n.value&&(l.value=((i=(a=o.composedPath)==null?void 0:a.call(o))==null?void 0:i[0])||o.target)},!0),ue("click",o=>{l.value&&(r(o,()=>l.value),l.value=null)},!0),ue("blur",o=>r(o,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}var re=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(re||{});let pe=L({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:n}){return()=>{let{features:r,...l}=e,o={"aria-hidden":(r&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return P({ourProps:o,theirProps:l,slot:{},attrs:n,slots:t,name:"Hidden"})}}});function gt(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function yt(e,t,n){oe.isServer||N(r=>{window.addEventListener(e,t,n),r(()=>window.removeEventListener(e,t,n))})}var W=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(W||{});function bt(){let e=b(0);return yt("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function $e(e,t,n,r){oe.isServer||N(l=>{e=e??window,e.addEventListener(t,n,r),l(()=>e.removeEventListener(t,n,r))})}function Te(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function wt(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}function Fe(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.value){let r=x(n);r instanceof HTMLElement&&t.add(r)}return t}var ke=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(ke||{});let B=Object.assign(L({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:b(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:n,expose:r}){let l=b(null);r({el:l,$el:l});let o=y(()=>K(l)),a=b(!1);$(()=>a.value=!0),F(()=>a.value=!1),xt({ownerDocument:o},y(()=>a.value&&!!(e.features&16)));let i=St({ownerDocument:o,container:l,initialFocus:y(()=>e.initialFocus)},y(()=>a.value&&!!(e.features&2)));Ot({ownerDocument:o,container:l,containers:e.containers,previousActiveElement:i},y(()=>a.value&&!!(e.features&8)));let u=bt();function s(c){let f=x(l);f&&(v=>v())(()=>{C(u.value,{[W.Forwards]:()=>{te(f,T.First,{skipElements:[c.relatedTarget]})},[W.Backwards]:()=>{te(f,T.Last,{skipElements:[c.relatedTarget]})}})})}let d=b(!1);function m(c){c.key==="Tab"&&(d.value=!0,requestAnimationFrame(()=>{d.value=!1}))}function h(c){if(!a.value)return;let f=Fe(e.containers);x(l)instanceof HTMLElement&&f.add(x(l));let v=c.relatedTarget;v instanceof HTMLElement&&v.dataset.headlessuiFocusGuard!=="true"&&(Ae(f,v)||(d.value?te(x(l),C(u.value,{[W.Forwards]:()=>T.Next,[W.Backwards]:()=>T.Previous})|T.WrapAround,{relativeTo:c.target}):c.target instanceof HTMLElement&&_(c.target)))}return()=>{let c={},f={ref:l,onKeydown:m,onFocusout:h},{features:v,initialFocus:k,containers:X,...Q}=e;return O(ne,[!!(v&4)&&O(pe,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:s,features:re.Focusable}),P({ourProps:f,theirProps:{...t,...Q},slot:c,attrs:t,slots:n,name:"FocusTrap"}),!!(v&4)&&O(pe,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:s,features:re.Focusable})])}}}),{features:ke}),D=[];wt(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&D[0]!==t.target&&(D.unshift(t.target),D=D.filter(n=>n!=null&&n.isConnected),D.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function Et(e){let t=b(D.slice());return le([e],([n],[r])=>{r===!0&&n===!1?Te(()=>{t.value.splice(0)}):r===!1&&n===!0&&(t.value=D.slice())},{flush:"post"}),()=>{var n;return(n=t.value.find(r=>r!=null&&r.isConnected))!=null?n:null}}function xt({ownerDocument:e},t){let n=Et(t);$(()=>{N(()=>{var r,l;t.value||((r=e.value)==null?void 0:r.activeElement)===((l=e.value)==null?void 0:l.body)&&_(n())},{flush:"post"})}),F(()=>{_(n())})}function St({ownerDocument:e,container:t,initialFocus:n},r){let l=b(null),o=b(!1);return $(()=>o.value=!0),F(()=>o.value=!1),$(()=>{le([t,n,r],(a,i)=>{if(a.every((s,d)=>(i==null?void 0:i[d])===s)||!r.value)return;let u=x(t);u&&Te(()=>{var s,d;if(!o.value)return;let m=x(n),h=(s=e.value)==null?void 0:s.activeElement;if(m){if(m===h){l.value=h;return}}else if(u.contains(h)){l.value=h;return}m?_(m):te(u,T.First|T.NoScroll)===Le.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),l.value=(d=e.value)==null?void 0:d.activeElement})},{immediate:!0,flush:"post"})}),l}function Ot({ownerDocument:e,container:t,containers:n,previousActiveElement:r},l){var o;$e((o=e.value)==null?void 0:o.defaultView,"focus",a=>{if(!l.value)return;let i=Fe(n);x(t)instanceof HTMLElement&&i.add(x(t));let u=r.value;if(!u)return;let s=a.target;s&&s instanceof HTMLElement?Ae(i,s)?(r.value=s,_(s)):(a.preventDefault(),a.stopPropagation(),_(u)):_(r.value)},!0)}function Ae(e,t){for(let n of e)if(n.contains(t))return!0;return!1}let de=new Map,I=new Map;function Ee(e,t=b(!0)){N(n=>{var r;if(!t.value)return;let l=x(e);if(!l)return;n(function(){var a;if(!l)return;let i=(a=I.get(l))!=null?a:1;if(i===1?I.delete(l):I.set(l,i-1),i!==1)return;let u=de.get(l);u&&(u["aria-hidden"]===null?l.removeAttribute("aria-hidden"):l.setAttribute("aria-hidden",u["aria-hidden"]),l.inert=u.inert,de.delete(l))});let o=(r=I.get(l))!=null?r:0;I.set(l,o+1),o===0&&(de.set(l,{"aria-hidden":l.getAttribute("aria-hidden"),inert:l.inert}),l.setAttribute("aria-hidden","true"),l.inert=!0)})}let De=Symbol("ForcePortalRootContext");function Lt(){return M(De,!1)}let ve=L({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:n}){return Y(De,e.force),()=>{let{force:r,...l}=e;return P({theirProps:l,ourProps:{},slot:{},slots:t,attrs:n,name:"ForcePortalRoot"})}}});function Pt(e){let t=K(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let n=t.getElementById("headlessui-portal-root");if(n)return n;let r=t.createElement("div");return r.setAttribute("id","headlessui-portal-root"),t.body.appendChild(r)}let je=L({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:n}){let r=b(null),l=y(()=>K(r)),o=Lt(),a=M(_e,null),i=b(o===!0||a==null?Pt(r.value):a.resolveTarget());return N(()=>{o||a!=null&&(i.value=a.resolveTarget())}),F(()=>{var u,s;let d=(u=l.value)==null?void 0:u.getElementById("headlessui-portal-root");d&&i.value===d&&i.value.children.length<=0&&((s=i.value.parentElement)==null||s.removeChild(i.value))}),()=>{if(i.value===null)return null;let u={ref:r,"data-headlessui-portal":""};return O(Ye,{to:i.value},P({ourProps:u,theirProps:e,slot:{},attrs:n,slots:t,name:"Portal"}))}}}),_e=Symbol("PortalGroupContext"),$t=L({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:n}){let r=Ke({resolveTarget(){return e.target}});return Y(_e,r),()=>{let{target:l,...o}=e;return P({theirProps:o,ourProps:{},slot:{},attrs:t,slots:n,name:"PortalGroup"})}}}),Ce=Symbol("StackContext");var me=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(me||{});function Tt(){return M(Ce,()=>{})}function Ft({type:e,enabled:t,element:n,onUpdate:r}){let l=Tt();function o(...a){r==null||r(...a),l(...a)}$(()=>{le(t,(a,i)=>{a?o(0,e,n):i===!0&&o(1,e,n)},{immediate:!0,flush:"sync"})}),F(()=>{t.value&&o(1,e,n)}),Y(Ce,o)}let Me=Symbol("DescriptionContext");function kt(){let e=M(Me,null);if(e===null)throw new Error("Missing parent");return e}function At({slot:e=b({}),name:t="Description",props:n={}}={}){let r=b([]);function l(o){return r.value.push(o),()=>{let a=r.value.indexOf(o);a!==-1&&r.value.splice(a,1)}}return Y(Me,{register:l,slot:e,name:t,props:n}),y(()=>r.value.length>0?r.value.join(" "):void 0)}L({name:"Description",props:{as:{type:[Object,String],default:"p"},id:{type:String,default:()=>`headlessui-description-${H()}`}},setup(e,{attrs:t,slots:n}){let r=kt();return $(()=>F(r.register(e.id))),()=>{let{name:l="Description",slot:o=b({}),props:a={}}=r,{id:i,...u}=e,s={...Object.entries(a).reduce((d,[m,h])=>Object.assign(d,{[m]:V(h)}),{}),id:i};return P({ourProps:s,theirProps:u,slot:o.value,attrs:t,slots:n,name:l})}}});function Dt(e){let t=ze(e.getSnapshot());return F(e.subscribe(()=>{t.value=e.getSnapshot()})),t}function Ne(){let e=[],t={addEventListener(n,r,l,o){return n.addEventListener(r,l,o),t.add(()=>n.removeEventListener(r,l,o))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);t.add(()=>cancelAnimationFrame(r))},nextFrame(...n){t.requestAnimationFrame(()=>{t.requestAnimationFrame(...n)})},setTimeout(...n){let r=setTimeout(...n);t.add(()=>clearTimeout(r))},style(n,r,l){let o=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:l}),this.add(()=>{Object.assign(n.style,{[r]:o})})},group(n){let r=Ne();return n(r),this.add(()=>r.dispose())},add(n){return e.push(n),()=>{let r=e.indexOf(n);if(r>=0)for(let l of e.splice(r,1))l()}},dispose(){for(let n of e.splice(0))n()}};return t}function jt(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(l){return r.add(l),()=>r.delete(l)},dispatch(l,...o){let a=t[l].call(n,...o);a&&(n=a,r.forEach(i=>i()))}}}function _t(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,l=r.clientWidth-r.offsetWidth,o=e-l;n.style(r,"paddingRight",`${o}px`)}}}function Ct(){if(!gt())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:n,meta:r}){function l(a){return r.containers.flatMap(i=>i()).some(i=>i.contains(a))}n.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let o=null;n.addEventListener(t,"click",a=>{if(a.target instanceof HTMLElement)try{let i=a.target.closest("a");if(!i)return;let{hash:u}=new URL(i.href),s=t.querySelector(u);s&&!l(s)&&(o=s)}catch{}},!0),n.addEventListener(t,"touchmove",a=>{a.target instanceof HTMLElement&&!l(a.target)&&a.preventDefault()},{passive:!1}),n.add(()=>{window.scrollTo(0,window.pageYOffset+e),o&&o.isConnected&&(o.scrollIntoView({block:"nearest"}),o=null)})}}}function Mt(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function Nt(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let j=jt(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:Ne(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:Nt(n)},l=[Ct(),_t(),Mt()];l.forEach(({before:o})=>o==null?void 0:o(r)),l.forEach(({after:o})=>o==null?void 0:o(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});j.subscribe(()=>{let e=j.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",l=n.count!==0;(l&&!r||!l&&r)&&j.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&j.dispatch("TEARDOWN",n)}});function Rt(e,t,n){let r=Dt(j),l=y(()=>{let o=e.value?r.value.get(e.value):void 0;return o?o.count>0:!1});return le([e,t],([o,a],[i],u)=>{if(!o||!a)return;j.dispatch("PUSH",o,n);let s=!1;u(()=>{s||(j.dispatch("POP",i??o,n),s=!0)})},{immediate:!0}),l}var Ht=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ht||{});let he=Symbol("DialogContext");function z(e){let t=M(he,null);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,z),n}return t}let ee="DC8F892D-2EBD-447C-A4C8-A03058436FF4",Bt=L({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:ee},initialFocus:{type:Object,default:null},id:{type:String,default:()=>`headlessui-dialog-${H()}`}},emits:{close:e=>!0},setup(e,{emit:t,attrs:n,slots:r,expose:l}){var o;let a=b(!1);$(()=>{a.value=!0});let i=b(0),u=ot(),s=y(()=>e.open===ee&&u!==null?(u.value&U.Open)===U.Open:e.open),d=b(null),m=b(null),h=y(()=>K(d));if(l({el:d,$el:d}),!(e.open!==ee||u!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof s.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${s.value===ee?void 0:e.open}`);let c=y(()=>a.value&&s.value?0:1),f=y(()=>c.value===0),v=y(()=>i.value>1),k=M(he,null)!==null,X=y(()=>v.value?"parent":"leaf"),Q=y(()=>u!==null?(u.value&U.Closing)===U.Closing:!1),Re=y(()=>k||Q.value?!1:f.value),He=y(()=>{var g,w,S;return(S=Array.from((w=(g=h.value)==null?void 0:g.querySelectorAll("body > *"))!=null?w:[]).find(E=>E.id==="headlessui-portal-root"?!1:E.contains(x(m))&&E instanceof HTMLElement))!=null?S:null});Ee(He,Re);let Be=y(()=>v.value?!0:f.value),Ie=y(()=>{var g,w,S;return(S=Array.from((w=(g=h.value)==null?void 0:g.querySelectorAll("[data-headlessui-portal]"))!=null?w:[]).find(E=>E.contains(x(m))&&E instanceof HTMLElement))!=null?S:null});Ee(Ie,Be),Ft({type:"Dialog",enabled:y(()=>c.value===0),element:d,onUpdate:(g,w)=>{if(w==="Dialog")return C(g,{[me.Add]:()=>i.value+=1,[me.Remove]:()=>i.value-=1})}});let Ve=At({name:"DialogDescription",slot:y(()=>({open:s.value}))}),J=b(null),A={titleId:J,panelRef:b(null),dialogState:c,setTitleId(g){J.value!==g&&(J.value=g)},close(){t("close",!1)}};Y(he,A);function ae(){var g,w,S;return[...Array.from((w=(g=h.value)==null?void 0:g.querySelectorAll("html > *, body > *, [data-headlessui-portal]"))!=null?w:[]).filter(E=>!(E===document.body||E===document.head||!(E instanceof HTMLElement)||E.contains(x(m))||A.panelRef.value&&E.contains(A.panelRef.value))),(S=A.panelRef.value)!=null?S:d.value]}let Ue=y(()=>!(!f.value||v.value));ht(()=>ae(),(g,w)=>{A.close(),Xe(()=>w==null?void 0:w.focus())},Ue);let We=y(()=>!(v.value||c.value!==0));$e((o=h.value)==null?void 0:o.defaultView,"keydown",g=>{We.value&&(g.defaultPrevented||g.key===Oe.Escape&&(g.preventDefault(),g.stopPropagation(),A.close()))});let qe=y(()=>!(Q.value||c.value!==0||k));return Rt(h,qe,g=>{var w;return{containers:[...(w=g.containers)!=null?w:[],ae]}}),N(g=>{if(c.value!==0)return;let w=x(d);if(!w)return;let S=new ResizeObserver(E=>{for(let ie of E){let R=ie.target.getBoundingClientRect();R.x===0&&R.y===0&&R.width===0&&R.height===0&&A.close()}});S.observe(w),g(()=>S.disconnect())}),()=>{let{id:g,open:w,initialFocus:S,...E}=e,ie={...n,ref:d,id:g,role:"dialog","aria-modal":c.value===0?!0:void 0,"aria-labelledby":J.value,"aria-describedby":Ve.value},R={open:c.value===0};return O(ve,{force:!0},()=>[O(je,()=>O($t,{target:d.value},()=>O(ve,{force:!1},()=>O(B,{initialFocus:S,containers:ae,features:f.value?C(X.value,{parent:B.features.RestoreFocus,leaf:B.features.All&~B.features.FocusLock}):B.features.None},()=>P({ourProps:ie,theirProps:E,slot:R,attrs:n,slots:r,visible:c.value===0,features:ce.RenderStrategy|ce.Static,name:"Dialog"}))))),O(pe,{features:re.Hidden,ref:m})])}}});L({name:"DialogOverlay",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:()=>`headlessui-dialog-overlay-${H()}`}},setup(e,{attrs:t,slots:n}){let r=z("DialogOverlay");function l(o){o.target===o.currentTarget&&(o.preventDefault(),o.stopPropagation(),r.close())}return()=>{let{id:o,...a}=e;return P({ourProps:{id:o,"aria-hidden":!0,onClick:l},theirProps:a,slot:{open:r.dialogState.value===0},attrs:t,slots:n,name:"DialogOverlay"})}}});L({name:"DialogBackdrop",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:()=>`headlessui-dialog-backdrop-${H()}`}},inheritAttrs:!1,setup(e,{attrs:t,slots:n,expose:r}){let l=z("DialogBackdrop"),o=b(null);return r({el:o,$el:o}),$(()=>{if(l.panelRef.value===null)throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.")}),()=>{let{id:a,...i}=e,u={id:a,ref:o,"aria-hidden":!0};return O(ve,{force:!0},()=>O(je,()=>P({ourProps:u,theirProps:{...t,...i},slot:{open:l.dialogState.value===0},attrs:t,slots:n,name:"DialogBackdrop"})))}}});let It=L({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:()=>`headlessui-dialog-panel-${H()}`}},setup(e,{attrs:t,slots:n,expose:r}){let l=z("DialogPanel");r({el:l.panelRef,$el:l.panelRef});function o(a){a.stopPropagation()}return()=>{let{id:a,...i}=e,u={id:a,ref:l.panelRef,onClick:o};return P({ourProps:u,theirProps:i,slot:{open:l.dialogState.value===0},attrs:t,slots:n,name:"DialogPanel"})}}});L({name:"DialogTitle",props:{as:{type:[Object,String],default:"h2"},id:{type:String,default:()=>`headlessui-dialog-title-${H()}`}},setup(e,{attrs:t,slots:n}){let r=z("DialogTitle");return $(()=>{r.setTitleId(e.id),F(()=>r.setTitleId(null))}),()=>{let{id:l,...o}=e;return P({ourProps:{id:l},theirProps:o,slot:{open:r.dialogState.value===0},attrs:t,slots:n,name:"DialogTitle"})}}});function Vt(e,t){return q(),G("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[p("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})])}function Ut(e,t){return q(),G("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[p("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})])}const Wt={class:"bg-white"},qt={class:"absolute inset-x-0 top-0 z-50"},Gt={class:"flex items-center justify-between p-6 lg:px-8","aria-label":"Global"},Yt=p("div",{class:"flex lg:flex-1"},[p("a",{href:"#",class:"-m-1.5 p-1.5"},[p("span",{class:"sr-only"},"Your Company"),p("img",{class:"h-8 w-auto",src:"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",alt:""})])],-1),Kt={class:"flex lg:hidden"},zt=p("span",{class:"sr-only"},"Open main menu",-1),Xt={class:"hidden lg:flex lg:gap-x-12"},Qt=["href"],Jt=p("div",{class:"hidden lg:flex lg:flex-1 lg:justify-end"},[p("a",{href:"#",class:"text-sm font-semibold leading-6 text-gray-900"},[Qe("Log in "),p("span",{"aria-hidden":"true"},"→")])],-1),Zt=p("div",{class:"fixed inset-0 z-50"},null,-1),en={class:"flex items-center justify-between"},tn=p("a",{href:"#",class:"-m-1.5 p-1.5"},[p("span",{class:"sr-only"},"Your Company"),p("img",{class:"h-8 w-auto",src:"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",alt:""})],-1),nn=p("span",{class:"sr-only"},"Close menu",-1),rn={class:"mt-6 flow-root"},ln={class:"-my-6 divide-y divide-gray-500/10"},on={class:"space-y-2 py-6"},an=["href"],sn=p("div",{class:"py-6"},[p("a",{href:"#",class:"-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"},"Log in")],-1),un=Je('<div class="relative isolate px-6 pt-14 lg:px-8"><div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56"><div class="hidden sm:mb-8 sm:flex sm:justify-center"><div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"> Announcing our next round of funding. <a href="#" class="font-semibold text-indigo-600"><span class="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">→</span></a></div></div><div class="py-10"><div class="grid grid-cols-3 mx-auto justify-items-center place-items-center place-content-center"><img src="https://asset.brandfetch.io/ide68-31CH/idhaVMa0Af.svg" alt="" class="h-10 w-auto"><img src="https://asset.brandfetch.io/idT-7aLCAj/idYSAxBM8n.svg" alt="" class="h-10 w-auto"><img src="https://asset.brandfetch.io/idMNEQh7-0/iddFlCO1OV.svg" alt="" class=""></div></div><div class="text-center"><h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-poppins"><span class="text-[#ff2d20]">Lara</span><span class="text-[#41b883]">Vue</span><span class="text-[#38bdf8]">Tail</span></h1><p class="mt-6 text-lg leading-8 text-gray-600">A library of Open Source(MIT License) Projects built with <br> <b>Laravel, Vue and Tailwind CSS.</b></p><div class="mt-10 flex items-center justify-center gap-x-6"><a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a><a href="#" class="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></a></div></div></div></div>',1),cn={__name:"Home2",setup(e){const t=[{name:"Product",href:"#"},{name:"Features",href:"#"},{name:"Marketplace",href:"#"},{name:"Company",href:"#"}],n=b(!1);return(r,l)=>(q(),G("div",Wt,[p("header",qt,[p("nav",Gt,[Yt,p("div",Kt,[p("button",{type:"button",class:"-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700",onClick:l[0]||(l[0]=o=>n.value=!0)},[zt,Z(V(Vt),{class:"h-6 w-6","aria-hidden":"true"})])]),p("div",Xt,[(q(),G(ne,null,ge(t,o=>p("a",{key:o.name,href:o.href,class:"text-sm font-semibold leading-6 text-gray-900"},be(o.name),9,Qt)),64))]),Jt]),Z(V(Bt),{as:"div",class:"lg:hidden",onClose:l[2]||(l[2]=o=>n.value=!1),open:n.value},{default:ye(()=>[Zt,Z(V(It),{class:"fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"},{default:ye(()=>[p("div",en,[tn,p("button",{type:"button",class:"-m-2.5 rounded-md p-2.5 text-gray-700",onClick:l[1]||(l[1]=o=>n.value=!1)},[nn,Z(V(Ut),{class:"h-6 w-6","aria-hidden":"true"})])]),p("div",rn,[p("div",ln,[p("div",on,[(q(),G(ne,null,ge(t,o=>p("a",{key:o.name,href:o.href,class:"-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"},be(o.name),9,an)),64))]),sn])])]),_:1})]),_:1},8,["open"])]),un]))}};export{cn as default};
