// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty,r=Object.prototype,n=r.toString,a=r.__defineGetter__,o=r.__defineSetter__,i=r.__lookupGetter__,l=r.__lookupSetter__;var s=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,t,s){var u,h,c,d;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof s||null===s||"[object Array]"===n.call(s))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+s+"`.");if((h="value"in s)&&(i.call(e,t)||l.call(e,t)?(u=e.__proto__,e.__proto__=r,delete e[t],e[t]=s.value,e.__proto__=u):e[t]=s.value),c="get"in s,d="set"in s,h&&(c||d))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return c&&a&&a.call(e,t,s.get),d&&o&&o.call(e,t,s.set),e};function u(e,t,r){s(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function h(e){return"string"==typeof e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function d(){return c&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var p=Object.prototype.hasOwnProperty;function f(e,t){return null!=e&&p.call(e,t)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var g=d()?function(e){var t,r,n;if(null==e)return v.call(e);r=e[w],t=f(e,w);try{e[w]=void 0}catch(t){return v.call(e)}return n=v.call(e),t?e[w]=r:delete e[w],n}:function(e){return v.call(e)},y=String.prototype.valueOf;var m=d();function b(e){return"object"==typeof e&&(e instanceof String||(m?function(e){try{return y.call(e),!0}catch(e){return!1}}(e):"[object String]"===g(e)))}function S(e){return h(e)||b(e)}function _(e){return"boolean"==typeof e}u(S,"isPrimitive",h),u(S,"isObject",b);var I=Boolean.prototype.toString;var C=d();function D(e){return"object"==typeof e&&(e instanceof Boolean||(C?function(e){try{return I.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===g(e)))}function A(e){return _(e)||D(e)}function M(e){return"number"==typeof e}function E(e){var t,r="";for(t=0;t<e;t++)r+="0";return r}function T(e,t,r){var n=!1,a=t-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=r?e+E(a):E(a)+e,n&&(e="-"+e)),e}u(A,"isPrimitive",_),u(A,"isObject",D);var O=String.prototype.toLowerCase,k=String.prototype.toUpperCase;function x(e){var t,r,n;switch(e.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(r=e.arg,n=parseInt(r,10),!isFinite(n)){if(!M(r))throw new Error("invalid integer. Value: "+r);n=0}return n<0&&("u"===e.specifier||10!==t)&&(n=4294967295+n+1),n<0?(r=(-n).toString(t),e.precision&&(r=T(r,e.precision,e.padRight)),r="-"+r):(r=n.toString(t),n||e.precision?e.precision&&(r=T(r,e.precision,e.padRight)):r="",e.sign&&(r=e.sign+r)),16===t&&(e.alternate&&(r="0x"+r),r=e.specifier===k.call(e.specifier)?k.call(r):O.call(r)),8===t&&e.alternate&&"0"!==r.charAt(0)&&(r="0"+r),r}function N(e){return"string"==typeof e}var P=Math.abs,V=String.prototype.toLowerCase,Y=String.prototype.toUpperCase,j=String.prototype.replace,W=/e\+(\d)$/,$=/e-(\d)$/,F=/^(\d+)$/,B=/^(\d+)e/,G=/\.0$/,J=/\.0*e/,R=/(\..*[^0])0*e/;function L(e){var t,r,n=parseFloat(e.arg);if(!isFinite(n)){if(!M(e.arg))throw new Error("invalid floating-point number. Value: "+r);n=e.arg}switch(e.specifier){case"e":case"E":r=n.toExponential(e.precision);break;case"f":case"F":r=n.toFixed(e.precision);break;case"g":case"G":P(n)<1e-4?((t=e.precision)>0&&(t-=1),r=n.toExponential(t)):r=n.toPrecision(e.precision),e.alternate||(r=j.call(r,R,"$1e"),r=j.call(r,J,"e"),r=j.call(r,G,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return r=j.call(r,W,"e+0$1"),r=j.call(r,$,"e-0$1"),e.alternate&&(r=j.call(r,F,"$1."),r=j.call(r,B,"$1.e")),n>=0&&e.sign&&(r=e.sign+r),r=e.specifier===Y.call(e.specifier)?Y.call(r):V.call(r)}function Z(e){var t,r="";for(t=0;t<e;t++)r+=" ";return r}function K(e,t,r){var n=t-e.length;return n<0?e:e=r?e+Z(n):Z(n)+e}var z=String.fromCharCode,H=isNaN,U=Array.isArray;function X(e){var t={};return t.specifier=e.specifier,t.precision=void 0===e.precision?1:e.precision,t.width=e.width,t.flags=e.flags||"",t.mapping=e.mapping,t}function q(e){var t,r,n,a,o,i,l,s,u;if(!U(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(i="",l=1,s=0;s<e.length;s++)if(N(n=e[s]))i+=n;else{if(t=void 0!==n.precision,!(n=X(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),r=n.flags,u=0;u<r.length;u++)switch(a=r.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=r.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,H(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,H(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=x(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!H(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=H(o)?String(n.arg):z(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=L(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=T(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=K(n.arg,n.width,n.padRight)),i+=n.arg||"",l+=1}return i}var Q=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ee(e){var t={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(t.precision="1"),t}function te(e){var t,r,n,a;for(r=[],a=0,n=Q.exec(e);n;)(t=e.slice(a,Q.lastIndex-n[0].length)).length&&r.push(t),r.push(ee(n)),a=Q.lastIndex,n=Q.exec(e);return(t=e.slice(a)).length&&r.push(t),r}function re(e){return"string"==typeof e}function ne(e){var t,r,n;if(!re(e))throw new TypeError(ne("invalid argument. First argument must be a string. Value: `%s`.",e));for(t=te(e),(r=new Array(arguments.length))[0]=t,n=1;n<r.length;n++)r[n]=arguments[n];return q.apply(null,r)}var ae={"i.e.":["i.e."],"I.e.":["I.e."],"I.E.":["I.E."],"e.g.":["e.g."],"E.g.":["E.g."],"E.G.":["E.G."],"et al.":["et al."],"etc.":["etc."],"vs.":["vs."],"A.S.A.P":["A.S.A.P"],"E.T.A.":["E.T.A."],"D.I.Y":["D.I.Y"],"R.S.V.P":["R.S.V.P"],"P.S.":["P.S."],"B.Y.O.B":["B.Y.O.B"],"Ms.":["Ms."],"Mr.":["Mr."],"Dr.":["Dr."],"Prof.":["Prof."],"Mrs.":["Mrs."],"Messrs.":["Messrs."],"Gov.":["Gov."],"Gen.":["Gen."],"Lt.":["Lt."],"Col.":["Col."],"Mt.":["Mt."],"Bros.":["Bros."],"Corp.":["Corp."],"Co.":["Co."],"co.":["co."],"Inc.":["Inc."],"Ltd.":["Ltd."],"Rep.":["Rep."],"Sen.":["Sen."],"Jr.":["Jr."],"Sr.":["Sr."],"Ph.D.":["Ph.D."],"J.D.":["J.D."],"M.D.":["M.D."],"Rev.":["Rev."],"Adm.":["Adm."],"St.":["St."],"a.m.":["a.m."],"p.m.":["p.m."],"b.c.":["b.c."],"B.C.":["B.C."],"a.d.":["a.d."],"A.D.":["A.D."],"b.c.e.":["b.c.e."],"B.C.E.":["B.C.E."],"Jan.":["Jan."],"Feb.":["Feb."],"Mar.":["Mar."],"Apr.":["Apr."],"May.":["May."],"Jun.":["Jun."],"Jul.":["Jul."],"Aug.":["Aug."],"Sep.":["Sep."],"Sept.":["Sept."],"Oct.":["Oct."],"Nov.":["Nov."],"Dec.":["Dec."],"Ala.":["Ala."],"Ariz.":["Ariz."],"Ark.":["Ark."],"Calif.":["Calif."],"Colo.":["Colo."],"Conn.":["Conn."],"Del.":["Del."],"D.C.":["D.C."],"Fla.":["Fla."],"Ga.":["Ga."],"Ill.":["Ill."],"Ind.":["Ind."],"Kans.":["Kans."],"Kan.":["Kan."],"Ky.":["Ky."],"La.":["La."],"Md.":["Md."],"Mass.":["Mass."],"Mich.":["Mich."],"Minn.":["Minn."],"Miss.":["Miss."],"Mo.":["Mo."],"Mont.":["Mont."],"Nebr.":["Nebr."],"Neb.":["Neb."],"Nev.":["Nev."],"N.H.":["N.H."],"N.J.":["N.J."],"N.M.":["N.M."],"N.Y.":["N.Y."],"N.C.":["N.C."],"N.D.":["N.D."],"Okla.":["Okla."],"Ore.":["Ore."],"Pa.":["Pa."],"Tenn.":["Tenn."],"Va.":["Va."],"Wash.":["Wash."],"Wis.":["Wis."]},oe={"^_^":["^_^"],"=D":["=D"],";-p":[";-p"],":O":[":O"],":-/":[":-/"],xD:["xD"],V_V:["V_V"],";(":[";("],"(:":["(:"],'")':['")'],":Y":[":Y"],":]":[":]"],":3":[":3"],":(":[":("],":-)":[":-)"],"=3":["=3"],":))":[":))"],":>":[":>"],";p":[";p"],":p":[":p"],"=[[":["=[["],xDD:["xDD"],"<333":["<333"],"<33":["<33"],":P":[":P"],"o.O":["o.O"],"<3":["<3"],";-)":[";-)"],":)":[":)"],"-_-":["-_-"],":')":[":')"],o_O:["o_O"],";)":[";)"],"=]":["=]"],"(=":["(="],"-__-":["-__-"],":/":[":/"],":0":[":0"],"(^_^)":["(^_^)"],";D":[";D"],o_o:["o_o"],":((":[":(("],"=)":["=)"]},ie={"'s":["'s"],"'S":["'S"],"ain't":["ai","n't"],aint:["ai","nt"],"Ain't":["Ai","n't"],"aren't":["are","n't"],arent:["are","nt"],"Aren't":["Are","n't"],"can't":["ca","n't"],cant:["ca","nt"],"Can't":["Ca","n't"],"can't've":["ca","n't","'ve"],"'cause":["'cause'"],cannot:["can","not"],Cannot:["Can","not"],"could've":["could","'ve"],couldve:["could","ve"],"Could've":["Could","'ve"],"couldn't":["could","n't"],couldnt:["could","nt"],"Couldn't":["Could","n't"],"couldn't've":["could","n't","'ve"],couldntve:["could","nt","ve"],"Couldn't've":["Could","n't","'ve"],"didn't":["did","n't"],didnt:["did","nt"],"Didn't":["Did","n't"],"doesn't":["does","n't"],doesnt:["does","nt"],"Doesn't":["Does","n't"],"don't":["do","n't"],dont:["do","nt"],"Don't":["Do","n't"],"hadn't":["had","n't"],hadnt:["had","nt"],"Hadn't":["Had","n't"],"hadn't've":["had","n't","'ve"],"hasn't":["has","n't"],hasnt:["has","nt"],"haven't":["have","n't"],havent:["have","nt"],"he'd":["he","'d"],hed:["he","d"],"he'd've":["he","'d","'ve"],hedve:["he","d","ve"],"he'll":["he","'ll"],"he'll've":["he","'ll","'ve"],"he's":["he","'s"],hes:["he","s"],"how'd":["how","'d"],howd:["how","d"],"how'd'y":["how","'d","'y"],"how'll":["how","'ll"],howll:["how","ll"],"how's":["how","'s"],hows:["how","s"],"I'd":["I","'d"],"I'd've":["I","'d","'ve"],"I'll":["I","'ll"],"i'll":["i","'ll"],"I'll've":["I","'ll","'ve"],"i'll've":["i","'ll","'ve"],"I'm":["I","'m"],"i'm":["i","'m"],Im:["I","m"],im:["i","m"],"I'ma":["I","'ma"],"i'ma":["i","'ma"],"I've":["I","'ve"],"i've":["i","'ve"],"isn't":["is","n't"],isnt:["is","nt"],"Isn't":["Is","n't"],"It'd":["It","'d"],"it'd":["it","'d"],"it'd've":["it","'d","'ve"],"it'll've":["it","'ll","'ve"],"it'll":["it","'ll"],itll:["it","ll"],"it's":["it","'s"],"let's":["let","'s"],lets:["let","s"],"ma'am":["ma'am"],"mayn't":["may","n't"],"mightn't":["might","n't"],"mightn't've":["might","n't","'ve"],"might've":["might","'ve"],"mustn't":["must","n't"],"mustn't've":["must","n't","'ve"],"must've":["must","'ve"],"needn't":["need","n't"],"needn't've":["need","n't","'ve"],"not've":["not","'ve"],"o'clock":["o'clock"],"oughtn't":["ought","n't"],"oughtn't've":["ought","n't","'ve"],"so've":["so","'ve"],"so's":["so","'s"],"shan't":["sha","n't"],"sha'n't":["sha'","n't"],"shan't've":["sha","n't","'ve"],"she'd":["she","'d"],"she'd've":["she","'d","'ve"],"she'll":["she","'ll"],"she'll've":["she","'ll","'ve"],"she's":["she","'s"],"should've":["should","'ve"],"shouldn't":["should","n't"],"shouldn't've":["should","n't","'ve"],"that'd":["that","'d"],"that'd've":["that","'d","'ve"],"that's":["that","'s"],thats:["that","s"],"there'd":["there","'d"],"there'd've":["there","'d","'ve"],"there's":["there","'s"],"they'd":["they","'d"],"They'd":["They","'d"],"they'd've":["they","'d","'ve"],"They'd've":["They","'d","'ve"],"they'll":["they","'ll"],"They'll":["They","'ll"],"they'll've":["they","'ll","'ve"],"They'll've":["They","'ll","'ve"],"they're":["they","'re"],"They're":["They","'re"],"they've":["they","'ve"],"They've":["They","'ve"],"to've":["to","'ve"],"wasn't":["was","n't"],"we'd":["we","'d"],"We'd":["We","'d"],"we'd've":["we","'d","'ve"],"we'll":["we","'ll"],"We'll":["We","'ll"],"we'll've":["we","'ll","'ve"],"We'll've":["We","'ll","'ve"],"we're":["we","'re"],"We're":["We","'re"],"we've":["we","'ve"],"We've":["We","'ve"],"weren't":["were","n't"],"what'll":["what","'ll"],"what'll've":["what","'ll","'ve"],"what're":["what","'re"],"what's":["what","'s"],"what've":["what","'ve"],"when's":["when","'s"],"when've":["when","'ve"],"where'd":["where","'d"],"where's":["where","'s"],"where've":["where","'ve"],"who'd":["who","'d"],"who'll":["who","'ll"],"who'll've":["who","'ll'","'ve'"],"who're":["who","'re"],"who's":["who","'s"],"who've":["who","'ve"],"why've":["why","'ve"],"why'll":["why","'ll"],"why're":["why","'re"],"why's":["why","'s"],"will've":["will","'ve"],"won't":["wo","n't"],wont:["wo","nt"],"won't've":["wo","n't","'ve"],"would've":["would","'ve"],"wouldn't":["would","n't"],"wouldn't've":["would","n't","'ve"],"y'all":["y'","all"],"y'all'd":["y'","all","'d"],"y'all'd've":["y'","all","'d","'ve"],"y'all're":["y'","all","'re'"],"y'all've":["y'","all","ve"],"you'd":["you","'d"],"You'd":["You","'d"],"you'd've":["you","'d","'ve"],"You'd've":["You","'d","'ve"],"you'll":["you","'ll"],"You'll":["You","'ll"],"you'll've":["you","'ll","'ve"],"You'll've":["You","'ll","'ve"],"you're":["you","'re"],"You're":["You","'re"],"you've":["you","'ve"],"You've":["You","'ve"]},le=/^([,([{*<"“'`‘.])/gi,se=/([,.!?%*>:;"'”`)\]}])$/gi;function ue(e,t){var r;for(r=0;r<t.length;r++)e.push(t[r]);return e}function he(e){var t,r,n,a=[],o=[];do{oe[e]||ae[e]||ie[e]?r=!0:(t=e.split(le)).length>1?(a.push(t[1]),e=t[2]):(t=e.split(se)).length>1?(e=t[0],o.unshift(t[1])):r=!0}while(!r);return(n=a).push(e),ue(n,o),n}var ce=void 0!==String.prototype.trim,de=String.prototype.trim;var ve=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;var pe=ce&&""===de.call(" \n\t\r\n\f\v            \u2028\u2029  　\ufeff")&&"᠎"===de.call("᠎")?function(e){return de.call(e)}:function(e){return function(e,t,r){return e.replace(t,r)}(e,ve,"$1")},fe=/^[A-Z][a-z]{0,4}$/,we=/^([A-Z]\.)*[A-Z]$/,ge=/^[0-9]$/,ye=/[{[(<:;"'”`]/,me=/[})\]>:;"'”`]/;function be(e,t){var r,n=t-1,a=t+1;return!("."!==(r=e[t])||fe.test(e[n])||we.test(e[n])||ge.test(e[n])||ye.test(e[n])||me.test(e[a])||"."===e[a])||(!("!"!==r&&"?"!==r||ye.test(e[n])||me.test(e[a]))||!(!me.test(r)||"."!==e[n]&&"!"!==e[n]&&"?"!==e[n]))}function Se(e){var t,r,n,a;if(!h(e))throw new TypeError("invalid argument. Must provide a string. Value: `"+e+"`.");for(r=function(e,t){var r,n,a,o,i,l;if(!h(e))throw new TypeError(ne("invalid argument. First argument must be a string. Value: `%s`.",e));if(arguments.length>1&&!_(t))throw new TypeError(ne("invalid argument. Second argument must be a boolean. Value: `%s`.",t));if(!e)return[];for(n=t?e.split(/(\s+)/):e.split(/\s+/),i={},a=[],l=0;l<n.length;l++)f(i,o=n[l])?ue(a,i[o]):(ue(a,r=he(o)),i[o]=r);return a}(e,!0),t="",n=[],a=0;a<r.length;a++)t+=r[a],be(r,a)&&(n.push(pe(t)),t="");return""!==t&&n.push(pe(t)),n}export{Se as default};
//# sourceMappingURL=mod.js.map
