!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define("form",[],r):"object"==typeof exports?exports.form=r():e.form=r()}(self,(function(){return(()=>{"use strict";var e={d:(r,t)=>{for(var n in t)e.o(t,n)&&!e.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:t[n]})},o:(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},r={};function t(e,r){if(e){if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,r):void 0}}function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e){var r=e.main,n=e.elm,o=e.state,u=e.trigger,l=e.emit,s=e.dependencies.validations,m="input, select, textarea";r((function(e){return[v,d,y]}));var v=function(e){var r=e.on;r("input",m,f(g,10)),r("blur",m,O),r("change",m,O),r("submit",w)},d=function(e){(0,e.expose)({setFields:p,validate:h})},y=function(){var e=b(),r=j(e).errors;o.set({form:e,errors:r})},b=function(){return Array.from(n.elements).filter((function(e){return e.name})).reduce((function(e,r){return e[r.name]=c(r,n),e}),{})},p=function(e){for(var r in e)"checkbox"==n[r].type?n[r].checked=Boolean(e[r]):n[r].value=e[r],u("change","[name=".concat(r,"]"))},h=function(){var e=o.get().form;for(var r in e)e[r].touched=!0;var t=j(e).errors;o.set({form:e,errors:t})},g=function(e){var r=e.target.name,t=o.get().form,n=j(i({},r,t[r])).errors,u=o.get().errors;if(n[r]){var l=!Boolean(Object.keys(n).length);o.set({errors:a(a({},u),n),form:t,isValid:l})}else{var c=!Boolean(Object.keys(u).length);delete u[r],o.set({errors:u,form:t,isValid:c})}},O=function(e){var r=e.target.name,t=o.get().form,n=j(t).errors;t[r].touched=!0;var a=!Boolean(Object.keys(n).length);o.set({errors:n,form:t,isValid:a})},j=function(e){var r={};for(var t in e){var o=e[t].rules;if(o)for(var a in o){var i=e[t].element;e[t].value="checkbox"==i.type?i.checked?i.value:"":n[i.name].value;var u=s[a]({element:i,fields:e,value:i.value,options:o[a]}),l=u.isValid,c=u.message,f=void 0===c?"No message defined for rule [".concat(a,"] "):c;l||(r[t]=f)}else{var m=e[t].element;e[t].value="checkbox"==m.type?m.checked?m.value:"":n[m.name].value}}return{errors:r}},w=function(e){var r,a,i,u=o.get(),c=u.isValid,f=u.errors,s=new FormData(n),m={},v=function(e,r){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=t(e))){n&&(e=n);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return u=e.done,e},e:function(e){l=!0,i=e},f:function(){try{u||null==n.return||n.return()}finally{if(l)throw i}}}}(s.entries());try{for(v.s();!(r=v.n()).done;){var d=(a=r.value,i=2,function(e){if(Array.isArray(e))return e}(a)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],i=!0,u=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);i=!0);}catch(e){u=!0,o=e}finally{try{i||null==t.return||t.return()}finally{if(u)throw o}}return a}}(a,i)||t(a,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),y=d[0],b=d[1];m[y]=b}}catch(e){v.e(e)}finally{v.f()}c?l("form:submit",{formData:s,data:m}):l("form:submit:invalid",{formData:s,data:m,errors:f}),e.preventDefault()}}e.r(r),e.d(r,{default:()=>u,model:()=>l});var l={isValid:!1,errors:{},form:{}},c=function(e,r){return{element:e,rules:new Function("return ".concat(e.dataset.validation))(),value:"checkbox"==e.type?e.checked?e.value:"":r[e.name].value,touched:!1}},f=function(e){var r,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;return function(){for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];clearTimeout(r),r=setTimeout((function(r){return e.apply(null,o)}),t)}};return r})()}));