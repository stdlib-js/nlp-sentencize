"use strict";var s=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var f=s(function(Z,n){
var R=require('@stdlib/assert-is-string/dist').isPrimitive,c=require('@stdlib/nlp-tokenize/dist'),v=require('@stdlib/string-base-trim/dist'),p=/^[A-Z][a-z]{0,4}$/,A=/^([A-Z]\.)*[A-Z]$/,I=/^[0-9]$/,E=/^[{[(<:;"'”`]/,a=/[})\]>:;"'”`]$/;function _(r,e){var i,t=e-1,u=e+1;return i=r[e],!!(i==="."&&!p.test(r[t])&&!A.test(r[t])&&!I.test(r[t])&&!E.test(r[t])&&!a.test(r[u])||(i==="!"||i==="?")&&!E.test(r[t])&&!a.test(r[u])&&r[u]!=="!"&&r[u]!=="?"||a.test(i)&&(r[t]==="."||r[t]==="!"||r[t]==="?"))}function m(r){var e,i,t,u;if(!R(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(i=c(r,!0),e="",t=[],u=0;u<i.length;u++)e+=i[u],_(i,u)&&(t.push(v(e)),e="");return e!==""&&t.push(v(e)),t}n.exports=m
});var P=f();module.exports=P;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
