var R=Object.defineProperty;var A=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var E=(e,n,t)=>n in e?R(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))X.call(n,t)&&E(e,t,n[t]);if(A)for(var t of A(n))Z.call(n,t)&&E(e,t,n[t]);return e};import{q as I,r as J,b as _,y as T,x as Q,d as g,w as W,v as ee,o as v,c as ne,a as h,m as j,B as b,k as C,f as V,n as N,l as L,t as B,h as y,i as S,A as w,T as te,M as ae,p as O,U as oe,X as se}from"./vendor.8a125dba.js";import{p as P,L as ie}from"./index.780b2b80.js";import{I as re}from"./index.bbaa5131.js";import{u as le}from"./zIndex.2c847fc6.js";import{p as q,u as ce,m as de}from"./components.581beddd.js";import{_ as F}from"./elevation.548891b7.js";import{c as ue}from"./index.789f7251.js";import{g as U,t as M}from"./shared.cba5a5a3.js";import{u as fe}from"./lock.2797eacf.js";function pe(e){return["top","center","bottom"].includes(e)}function me(e){return $.includes(e)}const D={type:{type:String,validator:me},position:{type:String,default:"top",validator:pe},content:{type:String},contentClass:{type:String},duration:{type:Number,default:3e3},vertical:{type:Boolean,default:!1},loadingType:q(P,"type"),loadingSize:q(P,"size"),lockScroll:{type:Boolean,default:!1},show:{type:Boolean,default:!1},teleport:{type:String,default:"body"},forbidClick:{type:Boolean,default:!1},onOpen:{type:Function,default:()=>{}},onOpened:{type:Function,default:()=>{}},onClose:{type:Function,default:()=>{}},onClosed:{type:Function,default:()=>{}},"onUpdate:show":{type:Function},_update:{type:String}};const ve={success:"checkbox-marked-circle",warning:"warning",info:"information",error:"error",loading:""},be=I({name:"VarSnackbarCore",components:{VarLoading:ie,VarIcon:re},props:D,setup(e){const n=J(null),{zIndex:t}=le(()=>e.show,1);fe(e,"show","lockScroll");const a=_(()=>{const{position:o,vertical:c,type:d}=e,Y=`var-snackbar__wrapper var-snackbar__wrapper-${o} var-elevation--4`,H=c?" var-snackbar__vertical":"",K=d&&$.includes(d)?` var-snackbar__wrapper-${d}`:"";return`${Y}${H}${K}`}),s=_(()=>e.type==="loading"||e.forbidClick),i=_(()=>e.type?ve[e.type]:""),r=()=>{n.value=setTimeout(()=>{var o;e.type!=="loading"&&((o=e["onUpdate:show"])==null||o.call(e,!1))},e.duration)};return T(()=>e.show,o=>{var c,d;o?((c=e.onOpen)==null||c.call(e),r()):o===!1&&(clearTimeout(n.value),(d=e.onClose)==null||d.call(e))}),T(()=>e._update,()=>{clearTimeout(n.value),r()}),Q(()=>{var o;e.show&&((o=e.onOpen)==null||o.call(e),r())}),{zIndex:t,snackbarClass:a,iconName:i,isForbidClick:s}}}),ye={class:"var-snackbar__action"};function ke(e,n,t,a,s,i){const r=g("var-icon"),o=g("var-loading");return W((v(),ne("div",{class:"var-snackbar",style:N({pointerEvents:e.isForbidClick?"auto":"none",zIndex:e.zIndex})},[h("div",{class:j(e.snackbarClass),style:N({zIndex:e.zIndex})},[h("div",{class:j(["var-snackbar__content",[e.contentClass]])},[b(e.$slots,"default",{},()=>[L(B(e.content),1)])],2),h("div",ye,[e.iconName?(v(),C(r,{key:0,name:e.iconName},null,8,["name"])):V("v-if",!0),e.type==="loading"?(v(),C(o,{key:1,type:e.loadingType,size:e.loadingSize},null,8,["type","size"])):V("v-if",!0),b(e.$slots,"action")])],6)],4)),[[ee,e.show]])}var G=F(be,[["render",ke]]);const _e=I({name:"VarSnackbar",components:{VarSnackbarCore:G},props:D,setup(){const{disabled:e}=ce();return{disabled:e}}});function ge(e,n,t,a,s,i){const r=g("var-snackbar-core");return v(),C(ae,{to:e.teleport,disabled:e.disabled},[y(te,{name:"var-snackbar-fade",onAfterEnter:e.onOpened,onAfterLeave:e.onClosed},{default:S(()=>[y(r,w(e.$props,{class:"var-snackbar-transition"}),{action:S(()=>[b(e.$slots,"action")]),default:S(()=>[b(e.$slots,"default",{},()=>[L(B(e.content),1)])]),_:3},16)]),_:3},8,["onAfterEnter","onAfterLeave"])],8,["to","disabled"])}var f=F(_e,[["render",ge]]);function he(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!oe(e)}const $=["loading","success","warning","info","error"];let x=0,z=!1,k,p=!1,l=O([]);const Ce={type:void 0,content:"",position:"top",duration:3e3,vertical:!1,contentClass:void 0,loadingType:"circle",loadingSize:"normal",lockScroll:!1,teleport:"body",forbidClick:!1,onOpen:()=>{},onOpened:()=>{},onClose:()=>{},onClosed:()=>{}},Se={name:"var-snackbar-fade",tag:"div",class:"var-transition-group"},we={setup(){return()=>{const e=l.map(({id:t,reactiveSnackOptions:a,_update:s})=>{const i=document.querySelector(".var-transition-group");a.forbidClick||a.type==="loading"?i.classList.add("var-pointer-auto"):i.classList.remove("var-pointer-auto"),p&&(a.position="top");const o=u({position:p?"relative":"absolute"},Ee(a.position));return y(G,w(a,{key:t,style:o,"data-id":t,_update:s,show:a.show,"onUpdate:show":c=>a.show=c}),null)}),n=ue.zIndex;return y(se,w(Se,{style:{zIndex:n},onAfterEnter:Oe,onAfterLeave:$e}),he(e)?e:{default:()=>[e]})}}},m=function(e){const n=U(e)?e:{content:e},t=O(u(u({},Ce),n));t.show=!0,z||(z=!0,k=de(we).unmountInstance);const{length:a}=l,s={id:x++,reactiveSnackOptions:t};if(a===0||p)ze(s);else{const i=`update-${x}`;Ae(t,i)}return{clear(){!p&&l.length?l[0].reactiveSnackOptions.show=!1:t.show=!1}}};$.forEach(e=>{m[e]=n=>(U(n)?n.type=e:n={content:n,type:e},m(n))});m.install=function(e){e.component(f.name,f)};m.allowMultiple=function(e=!1){e!==p&&(l.forEach(n=>{n.reactiveSnackOptions.show=!1}),p=e)};m.clear=function(){l.forEach(e=>{e.reactiveSnackOptions.show=!1})};m.Component=f;function Oe(e){var a,s;const n=e.getAttribute("data-id"),t=l.find(i=>i.id===M(n));t&&((s=(a=t.reactiveSnackOptions).onOpened)==null||s.call(a))}function $e(e){var s,i;e.parentElement&&e.parentElement.classList.remove("var-pointer-auto");const n=e.getAttribute("data-id"),t=l.find(r=>r.id===M(n));t&&(t.animationEnd=!0,(i=(s=t.reactiveSnackOptions).onClosed)==null||i.call(s)),l.every(r=>r.animationEnd)&&(k==null||k(),l=O([]),z=!1)}function ze(e){l.push(e)}function Ae(e,n){const[t]=l;t.reactiveSnackOptions=u(u({},t.reactiveSnackOptions),e),t._update=n}function Ee(e="top"){return e==="bottom"?{[e]:"5%"}:{top:e==="top"?"5%":"45%"}}f.install=function(e){e.component(f.name,f)};export{m as S};