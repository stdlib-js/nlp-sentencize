// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/nlp-tokenize@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-trim@v0.2.2-esm/index.mjs";var r=/^[A-Z][a-z]{0,4}$/,i=/^([A-Z]\.)*[A-Z]$/,n=/^[0-9]$/,d=/^[{[(<:;"'”`]/,m=/[})\]>:;"'”`]$/;function o(t,s){var e,o=s-1,a=s+1;return!("."!==(e=t[s])||r.test(t[o])||i.test(t[o])||n.test(t[o])||d.test(t[o])||m.test(t[a]))||(!("!"!==e&&"?"!==e||d.test(t[o])||m.test(t[a]))||!(!m.test(e)||"."!==t[o]&&"!"!==t[o]&&"?"!==t[o]))}function a(r){var i,n,d,m;if(!t(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(n=s(r,!0),i="",d=[],m=0;m<n.length;m++)i+=n[m],o(n,m)&&(d.push(e(i)),i="");return""!==i&&d.push(e(i)),d}export{a as default};
//# sourceMappingURL=index.mjs.map
