!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("mask",[],t):"object"==typeof exports?exports.mask=t():e.mask=t()}("undefined"!=typeof self?self:this,(function(){return(()=>{"use strict";var e={d:(t,r)=>{for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function r(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;return function(){for(var o=arguments.length,n=new Array(o),a=0;a<o;a++)n[a]=arguments[a];clearTimeout(t),t=setTimeout((function(t){return e.apply(null,n)}),r)}}function o({main:e,elm:t,state:o,dependencies:n}){const{masks:a}=n,f=a[t.dataset.mask];e((e=>[i]));const i=({on:e})=>{e("input",r(u,10)),e("blur",r(u,10)),e("change",u)},u=e=>{const{name:t,value:r}=e.target,{parent:n}=o.get(),a=f(r);e.target.value=a,n&&n.form&&o.set((e=>{e.errors=e.parent.errors,e.form={...e.parent.form,[t]:{...e?.parent?.form[t],value:a}},e.isValid=e.parent.isValid}))}}return e.r(t),e.d(t,{default:()=>o}),t})()}));