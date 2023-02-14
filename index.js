// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,n=Object.prototype,r=n.toString,o=n.__defineGetter__,a=n.__defineSetter__,i=n.__lookupGetter__,l=n.__lookupSetter__,s=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,t,s){var u,h,c,d;if("object"!=typeof e||null===e||"[object Array]"===r.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof s||null===s||"[object Array]"===r.call(s))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+s+"`.");if((h="value"in s)&&(i.call(e,t)||l.call(e,t)?(u=e.__proto__,e.__proto__=n,delete e[t],e[t]=s.value,e.__proto__=u):e[t]=s.value),c="get"in s,d="set"in s,h&&(c||d))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return c&&o&&o.call(e,t,s.get),d&&a&&a.call(e,t,s.set),e};function u(e,t,n){s(e,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function h(e){return"string"==typeof e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function d(){return c&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString,p=Object.prototype.hasOwnProperty;function f(e,t){return null!=e&&p.call(e,t)}var w="function"==typeof Symbol?Symbol.toStringTag:"",g=d()?function(e){var t,n,r;if(null==e)return v.call(e);n=e[w],t=f(e,w);try{e[w]=void 0}catch(t){return v.call(e)}return r=v.call(e),t?e[w]=n:delete e[w],r}:function(e){return v.call(e)},y=String.prototype.valueOf,m=d();function b(e){return"object"==typeof e&&(e instanceof String||(m?function(e){try{return y.call(e),!0}catch(e){return!1}}(e):"[object String]"===g(e)))}function S(e){return h(e)||b(e)}function _(e){return"boolean"==typeof e}u(S,"isPrimitive",h),u(S,"isObject",b);var I=Boolean.prototype.toString,C=d();function D(e){return"object"==typeof e&&(e instanceof Boolean||(C?function(e){try{return I.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===g(e)))}function A(e){return _(e)||D(e)}function M(e){return"number"==typeof e}function E(e){var t,n="";for(t=0;t<e;t++)n+="0";return n}function T(e,t,n){var r=!1,o=t-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(r=!0,e=e.substr(1)),e=n?e+E(o):E(o)+e,r&&(e="-"+e)),e}u(A,"isPrimitive",_),u(A,"isObject",D);var O=String.prototype.toLowerCase,k=String.prototype.toUpperCase;function x(e){var t,n,r;switch(e.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=e.arg,r=parseInt(n,10),!isFinite(r)){if(!M(n))throw new Error("invalid integer. Value: "+n);r=0}return r<0&&("u"===e.specifier||10!==t)&&(r=4294967295+r+1),r<0?(n=(-r).toString(t),e.precision&&(n=T(n,e.precision,e.padRight)),n="-"+n):(n=r.toString(t),r||e.precision?e.precision&&(n=T(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===t&&(e.alternate&&(n="0x"+n),n=e.specifier===k.call(e.specifier)?k.call(n):O.call(n)),8===t&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function N(e){return"string"==typeof e}var P=Math.abs,V=String.prototype.toLowerCase,Y=String.prototype.toUpperCase,j=String.prototype.replace,W=/e\+(\d)$/,$=/e-(\d)$/,F=/^(\d+)$/,B=/^(\d+)e/,G=/\.0$/,J=/\.0*e/,R=/(\..*[^0])0*e/;function L(e){var t,n,r=parseFloat(e.arg);if(!isFinite(r)){if(!M(e.arg))throw new Error("invalid floating-point number. Value: "+n);r=e.arg}switch(e.specifier){case"e":case"E":n=r.toExponential(e.precision);break;case"f":case"F":n=r.toFixed(e.precision);break;case"g":case"G":P(r)<1e-4?((t=e.precision)>0&&(t-=1),n=r.toExponential(t)):n=r.toPrecision(e.precision),e.alternate||(n=j.call(n,R,"$1e"),n=j.call(n,J,"e"),n=j.call(n,G,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=j.call(n,W,"e+0$1"),n=j.call(n,$,"e-0$1"),e.alternate&&(n=j.call(n,F,"$1."),n=j.call(n,B,"$1.e")),r>=0&&e.sign&&(n=e.sign+n),n=e.specifier===Y.call(e.specifier)?Y.call(n):V.call(n)}function Z(e){var t,n="";for(t=0;t<e;t++)n+=" ";return n}function K(e,t,n){var r=t-e.length;return r<0?e:e=n?e+Z(r):Z(r)+e}var z=String.fromCharCode,H=isNaN,U=Array.isArray;function X(e){var t={};return t.specifier=e.specifier,t.precision=void 0===e.precision?1:e.precision,t.width=e.width,t.flags=e.flags||"",t.mapping=e.mapping,t}function q(e){var t,n,r,o,a,i,l,s,u;if(!U(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(i="",l=1,s=0;s<e.length;s++)if(N(r=e[s]))i+=r;else{if(t=void 0!==r.precision,!(r=X(r)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+r+"`.");for(r.mapping&&(l=r.mapping),n=r.flags,u=0;u<n.length;u++)switch(o=n.charAt(u)){case" ":r.sign=" ";break;case"+":r.sign="+";break;case"-":r.padRight=!0,r.padZeros=!1;break;case"0":r.padZeros=n.indexOf("-")<0;break;case"#":r.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===r.width){if(r.width=parseInt(arguments[l],10),l+=1,H(r.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+r.width+"`.");r.width<0&&(r.padRight=!0,r.width=-r.width)}if(t&&"*"===r.precision){if(r.precision=parseInt(arguments[l],10),l+=1,H(r.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+r.precision+"`.");r.precision<0&&(r.precision=1,t=!1)}switch(r.arg=arguments[l],r.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(r.padZeros=!1),r.arg=x(r);break;case"s":r.maxWidth=t?r.precision:-1;break;case"c":if(!H(r.arg)){if((a=parseInt(r.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+r.arg);r.arg=H(a)?String(r.arg):z(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(r.precision=6),r.arg=L(r);break;default:throw new Error("invalid specifier: "+r.specifier)}r.maxWidth>=0&&r.arg.length>r.maxWidth&&(r.arg=r.arg.substring(0,r.maxWidth)),r.padZeros?r.arg=T(r.arg,r.width||r.precision,r.padRight):r.width&&(r.arg=K(r.arg,r.width,r.padRight)),i+=r.arg||"",l+=1}return i}var Q=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ee(e){var t={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(t.precision="1"),t}function te(e){var t,n,r,o;for(n=[],o=0,r=Q.exec(e);r;)(t=e.slice(o,Q.lastIndex-r[0].length)).length&&n.push(t),n.push(ee(r)),o=Q.lastIndex,r=Q.exec(e);return(t=e.slice(o)).length&&n.push(t),n}function ne(e){return"string"==typeof e}function re(e){var t,n,r;if(!ne(e))throw new TypeError(re("invalid argument. First argument must be a string. Value: `%s`.",e));for(t=te(e),(n=new Array(arguments.length))[0]=t,r=1;r<n.length;r++)n[r]=arguments[r];return q.apply(null,n)}var oe={"i.e.":["i.e."],"I.e.":["I.e."],"I.E.":["I.E."],"e.g.":["e.g."],"E.g.":["E.g."],"E.G.":["E.G."],"et al.":["et al."],"etc.":["etc."],"vs.":["vs."],"A.S.A.P":["A.S.A.P"],"E.T.A.":["E.T.A."],"D.I.Y":["D.I.Y"],"R.S.V.P":["R.S.V.P"],"P.S.":["P.S."],"B.Y.O.B":["B.Y.O.B"],"Ms.":["Ms."],"Mr.":["Mr."],"Dr.":["Dr."],"Prof.":["Prof."],"Mrs.":["Mrs."],"Messrs.":["Messrs."],"Gov.":["Gov."],"Gen.":["Gen."],"Lt.":["Lt."],"Col.":["Col."],"Mt.":["Mt."],"Bros.":["Bros."],"Corp.":["Corp."],"Co.":["Co."],"co.":["co."],"Inc.":["Inc."],"Ltd.":["Ltd."],"Rep.":["Rep."],"Sen.":["Sen."],"Jr.":["Jr."],"Sr.":["Sr."],"Ph.D.":["Ph.D."],"J.D.":["J.D."],"M.D.":["M.D."],"Rev.":["Rev."],"Adm.":["Adm."],"St.":["St."],"a.m.":["a.m."],"p.m.":["p.m."],"b.c.":["b.c."],"B.C.":["B.C."],"a.d.":["a.d."],"A.D.":["A.D."],"b.c.e.":["b.c.e."],"B.C.E.":["B.C.E."],"Jan.":["Jan."],"Feb.":["Feb."],"Mar.":["Mar."],"Apr.":["Apr."],"May.":["May."],"Jun.":["Jun."],"Jul.":["Jul."],"Aug.":["Aug."],"Sep.":["Sep."],"Sept.":["Sept."],"Oct.":["Oct."],"Nov.":["Nov."],"Dec.":["Dec."],"Ala.":["Ala."],"Ariz.":["Ariz."],"Ark.":["Ark."],"Calif.":["Calif."],"Colo.":["Colo."],"Conn.":["Conn."],"Del.":["Del."],"D.C.":["D.C."],"Fla.":["Fla."],"Ga.":["Ga."],"Ill.":["Ill."],"Ind.":["Ind."],"Kans.":["Kans."],"Kan.":["Kan."],"Ky.":["Ky."],"La.":["La."],"Md.":["Md."],"Mass.":["Mass."],"Mich.":["Mich."],"Minn.":["Minn."],"Miss.":["Miss."],"Mo.":["Mo."],"Mont.":["Mont."],"Nebr.":["Nebr."],"Neb.":["Neb."],"Nev.":["Nev."],"N.H.":["N.H."],"N.J.":["N.J."],"N.M.":["N.M."],"N.Y.":["N.Y."],"N.C.":["N.C."],"N.D.":["N.D."],"Okla.":["Okla."],"Ore.":["Ore."],"Pa.":["Pa."],"Tenn.":["Tenn."],"Va.":["Va."],"Wash.":["Wash."],"Wis.":["Wis."]},ae={"^_^":["^_^"],"=D":["=D"],";-p":[";-p"],":O":[":O"],":-/":[":-/"],xD:["xD"],V_V:["V_V"],";(":[";("],"(:":["(:"],'")':['")'],":Y":[":Y"],":]":[":]"],":3":[":3"],":(":[":("],":-)":[":-)"],"=3":["=3"],":))":[":))"],":>":[":>"],";p":[";p"],":p":[":p"],"=[[":["=[["],xDD:["xDD"],"<333":["<333"],"<33":["<33"],":P":[":P"],"o.O":["o.O"],"<3":["<3"],";-)":[";-)"],":)":[":)"],"-_-":["-_-"],":')":[":')"],o_O:["o_O"],";)":[";)"],"=]":["=]"],"(=":["(="],"-__-":["-__-"],":/":[":/"],":0":[":0"],"(^_^)":["(^_^)"],";D":[";D"],o_o:["o_o"],":((":[":(("],"=)":["=)"]},ie={"'s":["'s"],"'S":["'S"],"ain't":["ai","n't"],aint:["ai","nt"],"Ain't":["Ai","n't"],"aren't":["are","n't"],arent:["are","nt"],"Aren't":["Are","n't"],"can't":["ca","n't"],cant:["ca","nt"],"Can't":["Ca","n't"],"can't've":["ca","n't","'ve"],"'cause":["'cause'"],cannot:["can","not"],Cannot:["Can","not"],"could've":["could","'ve"],couldve:["could","ve"],"Could've":["Could","'ve"],"couldn't":["could","n't"],couldnt:["could","nt"],"Couldn't":["Could","n't"],"couldn't've":["could","n't","'ve"],couldntve:["could","nt","ve"],"Couldn't've":["Could","n't","'ve"],"didn't":["did","n't"],didnt:["did","nt"],"Didn't":["Did","n't"],"doesn't":["does","n't"],doesnt:["does","nt"],"Doesn't":["Does","n't"],"don't":["do","n't"],dont:["do","nt"],"Don't":["Do","n't"],"hadn't":["had","n't"],hadnt:["had","nt"],"Hadn't":["Had","n't"],"hadn't've":["had","n't","'ve"],"hasn't":["has","n't"],hasnt:["has","nt"],"haven't":["have","n't"],havent:["have","nt"],"he'd":["he","'d"],hed:["he","d"],"he'd've":["he","'d","'ve"],hedve:["he","d","ve"],"he'll":["he","'ll"],"he'll've":["he","'ll","'ve"],"he's":["he","'s"],hes:["he","s"],"how'd":["how","'d"],howd:["how","d"],"how'd'y":["how","'d","'y"],"how'll":["how","'ll"],howll:["how","ll"],"how's":["how","'s"],hows:["how","s"],"I'd":["I","'d"],"I'd've":["I","'d","'ve"],"I'll":["I","'ll"],"i'll":["i","'ll"],"I'll've":["I","'ll","'ve"],"i'll've":["i","'ll","'ve"],"I'm":["I","'m"],"i'm":["i","'m"],Im:["I","m"],im:["i","m"],"I'ma":["I","'ma"],"i'ma":["i","'ma"],"I've":["I","'ve"],"i've":["i","'ve"],"isn't":["is","n't"],isnt:["is","nt"],"Isn't":["Is","n't"],"It'd":["It","'d"],"it'd":["it","'d"],"it'd've":["it","'d","'ve"],"it'll've":["it","'ll","'ve"],"it'll":["it","'ll"],itll:["it","ll"],"it's":["it","'s"],"let's":["let","'s"],lets:["let","s"],"ma'am":["ma'am"],"mayn't":["may","n't"],"mightn't":["might","n't"],"mightn't've":["might","n't","'ve"],"might've":["might","'ve"],"mustn't":["must","n't"],"mustn't've":["must","n't","'ve"],"must've":["must","'ve"],"needn't":["need","n't"],"needn't've":["need","n't","'ve"],"not've":["not","'ve"],"o'clock":["o'clock"],"oughtn't":["ought","n't"],"oughtn't've":["ought","n't","'ve"],"so've":["so","'ve"],"so's":["so","'s"],"shan't":["sha","n't"],"sha'n't":["sha'","n't"],"shan't've":["sha","n't","'ve"],"she'd":["she","'d"],"she'd've":["she","'d","'ve"],"she'll":["she","'ll"],"she'll've":["she","'ll","'ve"],"she's":["she","'s"],"should've":["should","'ve"],"shouldn't":["should","n't"],"shouldn't've":["should","n't","'ve"],"that'd":["that","'d"],"that'd've":["that","'d","'ve"],"that's":["that","'s"],thats:["that","s"],"there'd":["there","'d"],"there'd've":["there","'d","'ve"],"there's":["there","'s"],"they'd":["they","'d"],"They'd":["They","'d"],"they'd've":["they","'d","'ve"],"They'd've":["They","'d","'ve"],"they'll":["they","'ll"],"They'll":["They","'ll"],"they'll've":["they","'ll","'ve"],"They'll've":["They","'ll","'ve"],"they're":["they","'re"],"They're":["They","'re"],"they've":["they","'ve"],"They've":["They","'ve"],"to've":["to","'ve"],"wasn't":["was","n't"],"we'd":["we","'d"],"We'd":["We","'d"],"we'd've":["we","'d","'ve"],"we'll":["we","'ll"],"We'll":["We","'ll"],"we'll've":["we","'ll","'ve"],"We'll've":["We","'ll","'ve"],"we're":["we","'re"],"We're":["We","'re"],"we've":["we","'ve"],"We've":["We","'ve"],"weren't":["were","n't"],"what'll":["what","'ll"],"what'll've":["what","'ll","'ve"],"what're":["what","'re"],"what's":["what","'s"],"what've":["what","'ve"],"when's":["when","'s"],"when've":["when","'ve"],"where'd":["where","'d"],"where's":["where","'s"],"where've":["where","'ve"],"who'd":["who","'d"],"who'll":["who","'ll"],"who'll've":["who","'ll'","'ve'"],"who're":["who","'re"],"who's":["who","'s"],"who've":["who","'ve"],"why've":["why","'ve"],"why'll":["why","'ll"],"why're":["why","'re"],"why's":["why","'s"],"will've":["will","'ve"],"won't":["wo","n't"],wont:["wo","nt"],"won't've":["wo","n't","'ve"],"would've":["would","'ve"],"wouldn't":["would","n't"],"wouldn't've":["would","n't","'ve"],"y'all":["y'","all"],"y'all'd":["y'","all","'d"],"y'all'd've":["y'","all","'d","'ve"],"y'all're":["y'","all","'re'"],"y'all've":["y'","all","ve"],"you'd":["you","'d"],"You'd":["You","'d"],"you'd've":["you","'d","'ve"],"You'd've":["You","'d","'ve"],"you'll":["you","'ll"],"You'll":["You","'ll"],"you'll've":["you","'ll","'ve"],"You'll've":["You","'ll","'ve"],"you're":["you","'re"],"You're":["You","'re"],"you've":["you","'ve"],"You've":["You","'ve"]},le=/^([,([{*<"“'`‘.])/gi,se=/([,.!?%*>:;"'”`)\]}])$/gi;function ue(e,t){var n;for(n=0;n<t.length;n++)e.push(t[n]);return e}function he(e){var t,n,r,o=[],a=[];do{ae[e]||oe[e]||ie[e]?n=!0:(t=e.split(le)).length>1?(o.push(t[1]),e=t[2]):(t=e.split(se)).length>1?(e=t[0],a.unshift(t[1])):n=!0}while(!n);return(r=o).push(e),ue(r,a),r}var ce=void 0!==String.prototype.trim,de=String.prototype.trim,ve=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/,pe=ce&&""===de.call(" \n\t\r\n\f\v            \u2028\u2029  　\ufeff")&&"᠎"===de.call("᠎")?function(e){return de.call(e)}:function(e){return function(e,t,n){return e.replace(t,n)}(e,ve,"$1")},fe=/^[A-Z][a-z]*$/,we=/^([A-Z]\.)*[A-Z]$/,ge=/^[0-9]+$/,ye=/[{[(<:;"'”`]/,me=/[})\]>:;"'”`]/;function be(e,t){var n,r=t-1,o=t+1;return!("."!==(n=e[t])||fe.test(e[r])||we.test(e[r])||ge.test(e[r])||ye.test(e[r])||me.test(e[o])||"."===e[o])||!("!"!==n&&"?"!==n||ye.test(e[r])||me.test(e[o]))||!(!me.test(n)||"."!==e[r]&&"!"!==e[r]&&"?"!==e[r])}return function(e){var t,n,r,o;if(!h(e))throw new TypeError("invalid argument. Must provide a string. Value: `"+e+"`.");for(n=function(e,t){var n,r,o,a,i,l;if(!h(e))throw new TypeError(re("invalid argument. First argument must be a string. Value: `%s`.",e));if(arguments.length>1&&!_(t))throw new TypeError(re("invalid argument. Second argument must be a boolean. Value: `%s`.",t));if(!e)return[];for(r=t?e.split(/(\s+)/):e.split(/\s+/),i={},o=[],l=0;l<r.length;l++)f(i,a=r[l])?ue(o,i[a]):(ue(o,n=he(a)),i[a]=n);return o}(e,!0),t="",r=[],o=0;o<n.length;o++)t+=n[o],be(n,o)&&(r.push(pe(t)),t="");return""!==t&&r.push(pe(t)),r}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).sentencize=t();
//# sourceMappingURL=index.js.map
