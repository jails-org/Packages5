!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("form",[],t):"object"==typeof exports?exports.form=t():e.form=t()}(self,(function(){return(()=>{"use strict";var e={d:(t,o)=>{for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function o({main:e,elm:t,state:o,trigger:r,emit:a,dependencies:s}){const{validations:l}=s,i="input, select, textarea";e((e=>[f,c,u]));const f=({on:e})=>{e("keyup",i,function(e){var t,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;return function(){for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];clearTimeout(t),t=setTimeout((function(t){return e.apply(null,n)}),o)}}(g,10)),e("blur",i,y),e("change",i,y),e("submit",v)},c=({expose:e})=>{e({setFields:d,validate:p})},u=()=>{const e=m();o.set({form:e})},m=()=>Array.from(t.elements).filter((e=>e.name)).reduce(((e,o)=>(e[o.name]=n(o,t),e)),{}),d=e=>{for(let o in e)t[o]&&("checkbox"==t[o].type?t[o].checked=Boolean(e[o]):t[o].value=e[o],r("change",`[name=${o}]`))},p=()=>{const{form:e}=o.get();for(let t in e)e[t].touched=!0;const{errors:t}=b(e);o.set({form:e,errors:t})},g=e=>{const r=e.target,a=r.name,{form:s}=o.get();s[a]=n(r,t);const{errors:l}=b(s),i=!Boolean(Object.keys(l).length);o.set({errors:l,form:s,isValid:i})},y=e=>{const r=e.target,a=r.name,{form:s}=o.get();s[a]=n(r,t),s[a].touched=!0;const{errors:l}=b(s),i=!Boolean(Object.keys(l).length);o.set({form:s,isValid:i,errors:l})},b=e=>{const t={};for(let o in e){const{rules:r}=e[o];if(r)for(let n in r){const{element:a}=e[o];if(a.form&&l[n]){const{isValid:s,message:i=`No message defined for rule [${n}] `}=l[n]({element:a,fields:e,value:a.value,options:r[n]});s||(t[o]=i)}}}return{errors:t}},v=e=>{const{isValid:r,errors:n}=o.get(),s=new FormData(t),l={};for(let[e,t]of s.entries())l[e]=t;r?a("form:submit",{formData:s,data:l}):a("form:submit:invalid",{formData:s,data:l,errors:n}),e.preventDefault()}}e.r(t),e.d(t,{default:()=>o,model:()=>r});const r={isValid:!1,errors:{},form:{},data:{}},n=(e,t)=>({element:e,rules:new Function(`return ${e.dataset.validation}`)(),value:"checkbox"==e.type?e.checked?e.value:"":t[e.name].value,touched:!1});return t})()}));