import{R as t}from"./index.642010f1.js";import{p as a,L as n}from"./index.4d9296d0.js";import{p as e}from"./components.7c010433.js";import{_ as o}from"./IconSfc.7d4b9349.js";import{q as l,d as i,e as d,h as r,o as s,c as u,j as c,f as p,a as b,O as f,m as v,n as y}from"./vendor.613212a8.js";const m={type:{type:String,default:"default",validator:function(t){return["default","primary","info","success","warning","danger"].includes(t)}},size:{type:String,default:"normal",validator:function(t){return["normal","mini","small","large"].includes(t)}},loading:{type:Boolean,default:!1},round:{type:Boolean,default:!1},block:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outline:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},ripple:{type:Boolean,default:!0},color:{type:String},textColor:{type:String},loadingRadius:{type:[Number,String],default:12},loadingType:e(a,"type"),loadingSize:e(a,"size"),onClick:{type:Function},onTouchstart:{type:Function}};const g=l({name:"VarButton",components:{[n.name]:n},directives:{Ripple:t},props:m,setup:t=>({handleClick:a=>{const{loading:n,disabled:e,onClick:o}=t;n||e||null==o||o(a)},handleTouchstart:a=>{const{loading:n,disabled:e,onTouchstart:o}=t;n||e||null==o||o(a)}})}),x=["disabled"];var h=o(g,[["render",function(t,a,n,e,o,l){const m=i("var-loading"),g=d("ripple");return r((s(),u("button",{class:v(["var-button var--box",[`var-button--${t.size}`,t.block?"var--flex var-button--block":"var--inline-flex",t.disabled?"var-button--disabled":null,t.text?`var-button--text-${t.type}`:`var-button--${t.type}`,t.text?"var-button--text":"var-elevation--1",t.text&&t.disabled?"var-button--text-disabled":null,t.round?"var-button--round":null,t.outline?"var-button--outline":null]]),style:y({color:t.textColor,background:t.color}),disabled:t.disabled,onClick:a[0]||(a[0]=(...a)=>t.handleClick&&t.handleClick(...a)),onTouchstart:a[1]||(a[1]=(...a)=>t.handleTouchstart&&t.handleTouchstart(...a))},[t.loading?(s(),c(m,{key:0,class:"var-button__loading",type:t.loadingType,size:t.loadingSize,radius:t.loadingRadius},null,8,["type","size","radius"])):p("v-if",!0),b("div",{class:v(["var-button__content",[t.loading?"var-button--hidden":null]])},[f(t.$slots,"default")],2)],46,x)),[[g,{disabled:t.disabled||!t.ripple}]])}]]);h.install=function(t){t.component(h.name,h)};export{h as B};