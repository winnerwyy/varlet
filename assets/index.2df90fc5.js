import{A as m}from"./AppType.3e14b014.js";import{P as t,p as _,u as f}from"./index.2bfe2294.js";import{w as u}from"./en-US.1632ca69.js";import{_ as x}from"./IconSfc.cbcd63c5.js";import{d,o as h,c as j,h as a,w as n,a as r,F as v,l as c,t as i}from"./vendor.cfbfc887.js";import"./index.44e1d245.js";import"./elements.0f1b5e0a.js";import"./shared.5973ad73.js";import"./zIndex.a6f89f9c.js";import"./index.20a388b7.js";import"./index.cf7907d1.js";import"./index.c5b5f758.js";import"./index.54672d5c.js";import"./provide.e4f3f386.js";import"./components.092cc01a.js";t.install=function(p){p.component(t.name,t)};const b={name:"PaginationExample",components:{[t.name]:t,AppType:m},setup(){return u(f),{pack:_}}},g={class:"transformer"},k={class:"transformer"},w={class:"transformer"},y={class:"transformer"};function S(p,T,z,e,A,B){const o=d("app-type"),s=d("var-pagination");return h(),j(v,null,[a(o,null,{default:n(()=>[c(i(e.pack.basicUsage),1)]),_:1}),r("div",g,[a(s,{current:3,total:120})]),a(o,null,{default:n(()=>[c(i(e.pack.hideSize),1)]),_:1}),r("div",k,[a(s,{current:3,total:120,"show-size-changer":!1})]),a(o,null,{default:n(()=>[c(i(e.pack.showTotal),1)]),_:1}),r("div",w,[a(s,{current:3,total:120,"show-total":l=>`${e.pack.total} ${l} ${e.pack.item}`},null,8,["show-total"])]),a(o,null,{default:n(()=>[c(i(e.pack.disabled),1)]),_:1}),r("div",y,[a(s,{current:3,total:120,disabled:""})])],64)}var K=x(b,[["render",S],["__scopeId","data-v-53b4a99b"]]);export{K as default};