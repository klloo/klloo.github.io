/*! For license information please see commons-6beb9db488180b4f7394.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[351],{6751:function(e,n,t){"use strict";t.d(n,{Z:function(){return oe}});var r=function(){function e(e){var n=this;this._insertTag=function(e){var t;t=0===n.tags.length?n.insertionPoint?n.insertionPoint.nextSibling:n.prepend?n.container.firstChild:n.before:n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(e,t),n.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var n=e.prototype;return n.hydrate=function(e){e.forEach(this._insertTag)},n.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var n=document.createElement("style");return n.setAttribute("data-emotion",e.key),void 0!==e.nonce&&n.setAttribute("nonce",e.nonce),n.appendChild(document.createTextNode("")),n.setAttribute("data-s",""),n}(this));var n=this.tags[this.tags.length-1];if(this.isSpeedy){var t=function(e){if(e.sheet)return e.sheet;for(var n=0;n<document.styleSheets.length;n++)if(document.styleSheets[n].ownerNode===e)return document.styleSheets[n]}(n);try{t.insertRule(e,t.cssRules.length)}catch(r){0}}else n.appendChild(document.createTextNode(e));this.ctr++},n.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),o=Math.abs,a=String.fromCharCode,i=Object.assign;function s(e){return e.trim()}function c(e,n,t){return e.replace(n,t)}function l(e,n){return e.indexOf(n)}function u(e,n){return 0|e.charCodeAt(n)}function d(e,n,t){return e.slice(n,t)}function f(e){return e.length}function p(e){return e.length}function g(e,n){return n.push(e),e}var m=1,h=1,y=0,b=0,v=0,k="";function x(e,n,t,r,o,a,i){return{value:e,root:n,parent:t,type:r,props:o,children:a,line:m,column:h,length:i,return:""}}function w(e,n){return i(x("",null,null,"",null,null,0),e,{length:-e.length},n)}function C(){return v=b>0?u(k,--b):0,h--,10===v&&(h=1,m--),v}function S(){return v=b<y?u(k,b++):0,h++,10===v&&(h=1,m++),v}function Z(){return u(k,b)}function _(){return b}function P(e,n){return d(k,e,n)}function $(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function O(e){return m=h=1,y=f(k=e),b=0,[]}function E(e){return k="",e}function z(e){return s(P(b-1,T(91===e?e+2:40===e?e+1:e)))}function A(e){for(;(v=Z())&&v<33;)S();return $(e)>2||$(v)>3?"":" "}function j(e,n){for(;--n&&S()&&!(v<48||v>102||v>57&&v<65||v>70&&v<97););return P(e,_()+(n<6&&32==Z()&&32==S()))}function T(e){for(;S();)switch(v){case e:return b;case 34:case 39:34!==e&&39!==e&&T(v);break;case 40:41===e&&T(e);break;case 92:S()}return b}function R(e,n){for(;S()&&e+v!==57&&(e+v!==84||47!==Z()););return"/*"+P(n,b-1)+"*"+a(47===e?e:S())}function M(e){for(;!$(Z());)S();return P(e,b)}var L="-ms-",N="-moz-",I="-webkit-",W="comm",H="rule",B="decl",F="@keyframes";function D(e,n){for(var t="",r=p(e),o=0;o<r;o++)t+=n(e[o],o,e,n)||"";return t}function q(e,n,t,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case B:return e.return=e.return||e.value;case W:return"";case F:return e.return=e.value+"{"+D(e.children,r)+"}";case H:e.value=e.props.join(",")}return f(t=D(e.children,r))?e.return=e.value+"{"+t+"}":""}function U(e){return E(G("",null,null,null,[""],e=O(e),0,[0],e))}function G(e,n,t,r,o,i,s,d,p){for(var m=0,h=0,y=s,b=0,v=0,k=0,x=1,w=1,P=1,$=0,O="",E=o,T=i,L=r,N=O;w;)switch(k=$,$=S()){case 40:if(108!=k&&58==u(N,y-1)){-1!=l(N+=c(z($),"&","&\f"),"&\f")&&(P=-1);break}case 34:case 39:case 91:N+=z($);break;case 9:case 10:case 13:case 32:N+=A(k);break;case 92:N+=j(_()-1,7);continue;case 47:switch(Z()){case 42:case 47:g(K(R(S(),_()),n,t),p);break;default:N+="/"}break;case 123*x:d[m++]=f(N)*P;case 125*x:case 59:case 0:switch($){case 0:case 125:w=0;case 59+h:-1==P&&(N=c(N,/\f/g,"")),v>0&&f(N)-y&&g(v>32?X(N+";",r,t,y-1):X(c(N," ","")+";",r,t,y-2),p);break;case 59:N+=";";default:if(g(L=V(N,n,t,m,h,o,d,O,E=[],T=[],y),i),123===$)if(0===h)G(N,n,L,L,E,i,y,d,T);else switch(99===b&&110===u(N,3)?100:b){case 100:case 108:case 109:case 115:G(e,L,L,r&&g(V(e,L,L,0,0,o,d,O,o,E=[],y),T),o,T,y,d,r?E:T);break;default:G(N,L,L,L,[""],T,0,d,T)}}m=h=v=0,x=P=1,O=N="",y=s;break;case 58:y=1+f(N),v=k;default:if(x<1)if(123==$)--x;else if(125==$&&0==x++&&125==C())continue;switch(N+=a($),$*x){case 38:P=h>0?1:(N+="\f",-1);break;case 44:d[m++]=(f(N)-1)*P,P=1;break;case 64:45===Z()&&(N+=z(S())),b=Z(),h=y=f(O=N+=M(_())),$++;break;case 45:45===k&&2==f(N)&&(x=0)}}return i}function V(e,n,t,r,a,i,l,u,f,g,m){for(var h=a-1,y=0===a?i:[""],b=p(y),v=0,k=0,w=0;v<r;++v)for(var C=0,S=d(e,h+1,h=o(k=l[v])),Z=e;C<b;++C)(Z=s(k>0?y[C]+" "+S:c(S,/&\f/g,y[C])))&&(f[w++]=Z);return x(e,n,t,0===a?H:u,f,g,m)}function K(e,n,t){return x(e,n,t,W,a(v),d(e,2,-2),0)}function X(e,n,t,r){return x(e,n,t,B,d(e,0,r),d(e,r+1,-1),r)}var Y=function(e,n,t){for(var r=0,o=0;r=o,o=Z(),38===r&&12===o&&(n[t]=1),!$(o);)S();return P(e,b)},J=function(e,n){return E(function(e,n){var t=-1,r=44;do{switch($(r)){case 0:38===r&&12===Z()&&(n[t]=1),e[t]+=Y(b-1,n,t);break;case 2:e[t]+=z(r);break;case 4:if(44===r){e[++t]=58===Z()?"&\f":"",n[t]=e[t].length;break}default:e[t]+=a(r)}}while(r=S());return e}(O(e),n))},Q=new WeakMap,ee=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var n=e.value,t=e.parent,r=e.column===t.column&&e.line===t.line;"rule"!==t.type;)if(!(t=t.parent))return;if((1!==e.props.length||58===n.charCodeAt(0)||Q.get(t))&&!r){Q.set(e,!0);for(var o=[],a=J(n,o),i=t.props,s=0,c=0;s<a.length;s++)for(var l=0;l<i.length;l++,c++)e.props[c]=o[s]?a[s].replace(/&\f/g,i[l]):i[l]+" "+a[s]}}},ne=function(e){if("decl"===e.type){var n=e.value;108===n.charCodeAt(0)&&98===n.charCodeAt(2)&&(e.return="",e.value="")}};function te(e,n){switch(function(e,n){return 45^u(e,0)?(((n<<2^u(e,0))<<2^u(e,1))<<2^u(e,2))<<2^u(e,3):0}(e,n)){case 5103:return I+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return I+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return I+e+N+e+L+e+e;case 6828:case 4268:return I+e+L+e+e;case 6165:return I+e+L+"flex-"+e+e;case 5187:return I+e+c(e,/(\w+).+(:[^]+)/,I+"box-$1$2"+L+"flex-$1$2")+e;case 5443:return I+e+L+"flex-item-"+c(e,/flex-|-self/,"")+e;case 4675:return I+e+L+"flex-line-pack"+c(e,/align-content|flex-|-self/,"")+e;case 5548:return I+e+L+c(e,"shrink","negative")+e;case 5292:return I+e+L+c(e,"basis","preferred-size")+e;case 6060:return I+"box-"+c(e,"-grow","")+I+e+L+c(e,"grow","positive")+e;case 4554:return I+c(e,/([^-])(transform)/g,"$1"+I+"$2")+e;case 6187:return c(c(c(e,/(zoom-|grab)/,I+"$1"),/(image-set)/,I+"$1"),e,"")+e;case 5495:case 3959:return c(e,/(image-set\([^]*)/,I+"$1$`$1");case 4968:return c(c(e,/(.+:)(flex-)?(.*)/,I+"box-pack:$3"+L+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+I+e+e;case 4095:case 3583:case 4068:case 2532:return c(e,/(.+)-inline(.+)/,I+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(f(e)-1-n>6)switch(u(e,n+1)){case 109:if(45!==u(e,n+4))break;case 102:return c(e,/(.+:)(.+)-([^]+)/,"$1"+I+"$2-$3$1"+N+(108==u(e,n+3)?"$3":"$2-$3"))+e;case 115:return~l(e,"stretch")?te(c(e,"stretch","fill-available"),n)+e:e}break;case 4949:if(115!==u(e,n+1))break;case 6444:switch(u(e,f(e)-3-(~l(e,"!important")&&10))){case 107:return c(e,":",":"+I)+e;case 101:return c(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+I+(45===u(e,14)?"inline-":"")+"box$3$1"+I+"$2$3$1"+L+"$2box$3")+e}break;case 5936:switch(u(e,n+11)){case 114:return I+e+L+c(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return I+e+L+c(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return I+e+L+c(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return I+e+L+e+e}return e}var re=[function(e,n,t,r){if(e.length>-1&&!e.return)switch(e.type){case B:e.return=te(e.value,e.length);break;case F:return D([w(e,{value:c(e.value,"@","@"+I)})],r);case H:if(e.length)return function(e,n){return e.map(n).join("")}(e.props,(function(n){switch(function(e,n){return(e=n.exec(e))?e[0]:e}(n,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return D([w(e,{props:[c(n,/:(read-\w+)/,":-moz-$1")]})],r);case"::placeholder":return D([w(e,{props:[c(n,/:(plac\w+)/,":"+I+"input-$1")]}),w(e,{props:[c(n,/:(plac\w+)/,":-moz-$1")]}),w(e,{props:[c(n,/:(plac\w+)/,L+"input-$1")]})],r)}return""}))}}],oe=function(e){var n=e.key;if("css"===n){var t=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(t,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var o=e.stylisPlugins||re;var a,i,s={},c=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),(function(e){for(var n=e.getAttribute("data-emotion").split(" "),t=1;t<n.length;t++)s[n[t]]=!0;c.push(e)}));var l,u,d,f,g=[q,(f=function(e){l.insert(e)},function(e){e.root||(e=e.return)&&f(e)})],m=(u=[ee,ne].concat(o,g),d=p(u),function(e,n,t,r){for(var o="",a=0;a<d;a++)o+=u[a](e,n,t,r)||"";return o});i=function(e,n,t,r){l=t,D(U(e?e+"{"+n.styles+"}":n.styles),m),r&&(h.inserted[n.name]=!0)};var h={key:n,sheet:new r({key:n,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:i};return h.sheet.hydrate(c),h}},5042:function(e,n,t){"use strict";function r(e){var n=Object.create(null);return function(t){return void 0===n[t]&&(n[t]=e(t)),n[t]}}t.d(n,{Z:function(){return r}})},5260:function(e,n,t){"use strict";t.d(n,{T:function(){return c},i:function(){return a},w:function(){return s}});var r=t(7294),o=t(6751),a=(t(6797),t(7278),!0),i=r.createContext("undefined"!=typeof HTMLElement?(0,o.Z)({key:"css"}):null);i.Provider;var s=function(e){return(0,r.forwardRef)((function(n,t){var o=(0,r.useContext)(i);return e(n,o,t)}))};a||(s=function(e){return function(n){var t=(0,r.useContext)(i);return null===t?(t=(0,o.Z)({key:"css"}),r.createElement(i.Provider,{value:t},e(n,t))):e(n,t)}});var c=r.createContext({})},6797:function(e,n,t){"use strict";t.d(n,{O:function(){return g}});var r={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},o=t(5042),a=/[A-Z]|^ms/g,i=/_EMO_([^_]+?)_([^]*?)_EMO_/g,s=function(e){return 45===e.charCodeAt(1)},c=function(e){return null!=e&&"boolean"!=typeof e},l=(0,o.Z)((function(e){return s(e)?e:e.replace(a,"-$&").toLowerCase()})),u=function(e,n){switch(e){case"animation":case"animationName":if("string"==typeof n)return n.replace(i,(function(e,n,t){return f={name:n,styles:t,next:f},n}))}return 1===r[e]||s(e)||"number"!=typeof n||0===n?n:n+"px"};function d(e,n,t){if(null==t)return"";if(void 0!==t.__emotion_styles)return t;switch(typeof t){case"boolean":return"";case"object":if(1===t.anim)return f={name:t.name,styles:t.styles,next:f},t.name;if(void 0!==t.styles){var r=t.next;if(void 0!==r)for(;void 0!==r;)f={name:r.name,styles:r.styles,next:f},r=r.next;return t.styles+";"}return function(e,n,t){var r="";if(Array.isArray(t))for(var o=0;o<t.length;o++)r+=d(e,n,t[o])+";";else for(var a in t){var i=t[a];if("object"!=typeof i)null!=n&&void 0!==n[i]?r+=a+"{"+n[i]+"}":c(i)&&(r+=l(a)+":"+u(a,i)+";");else if(!Array.isArray(i)||"string"!=typeof i[0]||null!=n&&void 0!==n[i[0]]){var s=d(e,n,i);switch(a){case"animation":case"animationName":r+=l(a)+":"+s+";";break;default:r+=a+"{"+s+"}"}}else for(var f=0;f<i.length;f++)c(i[f])&&(r+=l(a)+":"+u(a,i[f])+";")}return r}(e,n,t);case"function":if(void 0!==e){var o=f,a=t(e);return f=o,d(e,n,a)}}if(null==n)return t;var i=n[t];return void 0!==i?i:t}var f,p=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var g=function(e,n,t){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var r=!0,o="";f=void 0;var a=e[0];null==a||void 0===a.raw?(r=!1,o+=d(t,n,a)):o+=a[0];for(var i=1;i<e.length;i++)o+=d(t,n,e[i]),r&&(o+=a[i]);p.lastIndex=0;for(var s,c="";null!==(s=p.exec(o));)c+="-"+s[1];var l=function(e){for(var n,t=0,r=0,o=e.length;o>=4;++r,o-=4)n=1540483477*(65535&(n=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(n>>>16)<<16),t=1540483477*(65535&(n^=n>>>24))+(59797*(n>>>16)<<16)^1540483477*(65535&t)+(59797*(t>>>16)<<16);switch(o){case 3:t^=(255&e.charCodeAt(r+2))<<16;case 2:t^=(255&e.charCodeAt(r+1))<<8;case 1:t=1540483477*(65535&(t^=255&e.charCodeAt(r)))+(59797*(t>>>16)<<16)}return(((t=1540483477*(65535&(t^=t>>>13))+(59797*(t>>>16)<<16))^t>>>15)>>>0).toString(36)}(o)+c;return{name:l,styles:o,next:f}}},9206:function(e,n,t){"use strict";function r(){return r=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},r.apply(this,arguments)}t.d(n,{Z:function(){return y}});var o=t(7294),a=t(5042),i=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,s=(0,a.Z)((function(e){return i.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),c=t(5260),l=t(444),u=t(6797),d=t(7278),f=s,p=function(e){return"theme"!==e},g=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?f:p},m=function(e,n,t){var r;if(n){var o=n.shouldForwardProp;r=e.__emotion_forwardProp&&o?function(n){return e.__emotion_forwardProp(n)&&o(n)}:o}return"function"!=typeof r&&t&&(r=e.__emotion_forwardProp),r},h=function(e){var n=e.cache,t=e.serialized,r=e.isStringTag;return(0,l.hC)(n,t,r),(0,d.L)((function(){return(0,l.My)(n,t,r)})),null},y=(t(434),function e(n,t){var a,i,s=n.__emotion_real===n,d=s&&n.__emotion_base||n;void 0!==t&&(a=t.label,i=t.target);var f=m(n,t,s),p=f||g(d),y=!p("as");return function(){var b=arguments,v=s&&void 0!==n.__emotion_styles?n.__emotion_styles.slice(0):[];if(void 0!==a&&v.push("label:"+a+";"),null==b[0]||void 0===b[0].raw)v.push.apply(v,b);else{0,v.push(b[0][0]);for(var k=b.length,x=1;x<k;x++)v.push(b[x],b[0][x])}var w=(0,c.w)((function(e,n,t){var r=y&&e.as||d,a="",s=[],m=e;if(null==e.theme){for(var b in m={},e)m[b]=e[b];m.theme=o.useContext(c.T)}"string"==typeof e.className?a=(0,l.fp)(n.registered,s,e.className):null!=e.className&&(a=e.className+" ");var k=(0,u.O)(v.concat(s),n.registered,m);a+=n.key+"-"+k.name,void 0!==i&&(a+=" "+i);var x=y&&void 0===f?g(r):p,w={};for(var C in e)y&&"as"===C||x(C)&&(w[C]=e[C]);return w.className=a,w.ref=t,o.createElement(o.Fragment,null,o.createElement(h,{cache:n,serialized:k,isStringTag:"string"==typeof r}),o.createElement(r,w))}));return w.displayName=void 0!==a?a:"Styled("+("string"==typeof d?d:d.displayName||d.name||"Component")+")",w.defaultProps=n.defaultProps,w.__emotion_real=w,w.__emotion_base=d,w.__emotion_styles=v,w.__emotion_forwardProp=f,Object.defineProperty(w,"toString",{value:function(){return"."+i}}),w.withComponent=function(n,o){return e(n,r({},t,o,{shouldForwardProp:m(w,o,!0)})).apply(void 0,v)},w}}.bind());["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){y[e]=y(e)}))},7278:function(e,n,t){"use strict";var r;t.d(n,{L:function(){return i},j:function(){return s}});var o=t(7294),a=!!(r||(r=t.t(o,2))).useInsertionEffect&&(r||(r=t.t(o,2))).useInsertionEffect,i=a||function(e){return e()},s=a||o.useLayoutEffect},444:function(e,n,t){"use strict";t.d(n,{My:function(){return a},fp:function(){return r},hC:function(){return o}});function r(e,n,t){var r="";return t.split(" ").forEach((function(t){void 0!==e[t]?n.push(e[t]+";"):r+=t+" "})),r}var o=function(e,n,t){var r=e.key+"-"+n.name;!1===t&&void 0===e.registered[r]&&(e.registered[r]=n.styles)},a=function(e,n,t){o(e,n,t);var r=e.key+"-"+n.name;if(void 0===e.inserted[n.name]){var a=n;do{e.insert(n===a?"."+r:"",a,e.sheet,!0),a=a.next}while(void 0!==a)}}},6148:function(e,n,t){"use strict";t.d(n,{Z:function(){return R}});var r,o,a,i,s,c,l=t(7294),u=t(1880),d=t(9206),f=t(1883),p=t(8448);const g=d.Z.div(r||(r=(0,u.Z)(["\n display: flex;\n justify-content: space-between;\n align-items: center;\n max-width: ",";\n margin-bottom: ",";\n padding: "," ",";\n top: 0px;\n position: sticky;\n backdrop-filter: blur(20px);\n background-color: var(--color-background);\n opacity: 0.9;\n z-index: 999;\n border-bottom: 1px solid var(--color-accent);\n & div {\n  cursor: pointer;\n }\n"])),p.Z.maxWidth.full,p.Z.spacing[12],p.Z.spacing[4],p.Z.spacing[10]),m=(0,d.Z)(f.Link)(o||(o=(0,u.Z)(["\n font-weight: ",";\n color: var(--color-text);\n text-decoration: none;\n font-size: ",";\n"])),p.Z.fontWeight.bold,p.Z.fontSize[2]),h=d.Z.div(a||(a=(0,u.Z)(["\n margin: "," auto;\n max-width: ",";\n padding: "," ",";\n margin-bottom: ",";\n padding: ",";\n max-width: ",";\n\n @media (max-width: ",") {\n  padding: "," ",";\n }\n"])),p.Z.spacing[0],p.Z.maxWidth["5xl"],p.Z.spacing[10],p.Z.spacing[10],(e=>e.isRootPath?p.Z.spacing[20]:"0"),(e=>e.isRootPath?"":p.Z.spacing[10]+" "+p.Z.spacing[10]),(e=>e.isRootPath?"":p.Z.maxWidth["3xl"]),p.Z.media.mobile,p.Z.spacing[10],p.Z.spacing[3]),y=d.Z.div(i||(i=(0,u.Z)(["\n max-width: ",";\n margin-bottom: ",";\n padding: "," ",";\n font-size: 0.8rem;\n\n @media (max-width: ",") {\n  padding: "," ",";\n }\n"])),p.Z.maxWidth.full,p.Z.spacing[12],p.Z.spacing[15],p.Z.spacing[10],p.Z.media.mobile,p.Z.spacing[10],p.Z.spacing[3]),b=d.Z.button(s||(s=(0,u.Z)(["\n display: inline;\n width: 20px;\n cursor: pointer;\n margin-left: ",";\n border: none;\n background: transparent;\n margin-top: ",";\n color: var(--color-text);\n"])),p.Z.spacing[5],p.Z.spacing[1]),v=d.Z.div(c||(c=(0,u.Z)(["\n display: flex;\n justify-content: space-between;\n align-items: center;\n & span {\n  color: var(--color-text);\n }\n"])));var k=t(5260),x=t(444),w=t(7278),C=t(6797),S=(t(6751),t(434),t(8679),(0,k.w)((function(e,n){var t=e.styles,r=(0,C.O)([t],void 0,l.useContext(k.T));if(!k.i){for(var o,a=r.name,i=r.styles,s=r.next;void 0!==s;)a+=" "+s.name,i+=s.styles,s=s.next;var c=!0===n.compat,u=n.insert("",{name:a,styles:i},n.sheet,c);return c?null:l.createElement("style",((o={})["data-emotion"]=n.key+"-global "+a,o.dangerouslySetInnerHTML={__html:u},o.nonce=n.sheet.nonce,o))}var d=l.useRef();return(0,w.j)((function(){var e=n.key+"-global",t=new n.sheet.constructor({key:e,nonce:n.sheet.nonce,container:n.sheet.container,speedy:n.sheet.isSpeedy}),o=!1,a=document.querySelector('style[data-emotion="'+e+" "+r.name+'"]');return n.sheet.tags.length&&(t.before=n.sheet.tags[0]),null!==a&&(o=!0,a.setAttribute("data-emotion",e),t.hydrate([a])),d.current=[t,o],function(){t.flush()}}),[n]),(0,w.j)((function(){var e=d.current,t=e[0];if(e[1])e[1]=!1;else{if(void 0!==r.next&&(0,x.My)(n,r.next,!0),t.tags.length){var o=t.tags[t.tags.length-1].nextElementSibling;t.before=o,t.flush()}n.insert("",r,t,!1)}}),[n,r.name]),null})));function Z(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,C.O)(n)}var _,P,$;const O=Z(_||(_=(0,u.Z)(["\n /* Colors */\n :root {\n  --color-primary: ",";\n  --color-text: ",";\n  --color-textLight: ",";\n  --color-heading: ",";\n  --color-headingBlack: ",";\n  --color-accent: ",";\n  --color-tag: ",";\n  --color-link: ",";\n  --color-background: ",";\n }\n\n @import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);\n\n @font-face {\n  font-family: 'IBMPlexSansKR-Regular';\n  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Regular.woff') format('woff');\n  font-weight: normal;\n  font-style: normal;\n }\n\n /* HTML elements */\n *,\n :after,\n :before {\n  box-sizing: border-box;\n }\n\n html {\n  line-height: 1.75;\n  font-size: ",";\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  letter-spacing: 0.02rem;\n  word-break: keep-all;\n }\n\n body {\n  font-family: 'Noto Sans KR', sans-serif;\n  font-size: ",";\n  color: var(--color-text);\n  background-color: var(--color-background);\n }\n\n hr {\n  background: var(--color-accent);\n  height: 1px;\n  border: 0;\n }\n\n /* Heading */\n h1,\n h2,\n h3,\n h4,\n h5,\n h6 {\n  margin-bottom: ",";\n }\n\n h2,\n h3,\n h4,\n h5,\n h6 {\n  font-weight: ",";\n  color: var(--color-heading);\n }\n\n h1 {\n  font-weight: ",";\n  font-size: ",";\n  color: var(--color-headingBlack);\n }\n\n h2 {\n  font-size: ",";\n }\n\n h3 {\n  font-size: ",";\n }\n\n h4 {\n  font-size: ",";\n }\n\n h5 {\n  font-size: ",";\n }\n\n h6 {\n  font-size: ",";\n }\n\n h1 > a {\n  color: inherit;\n  text-decoration: none;\n }\n\n h2 > a,\n h3 > a,\n h4 > a,\n h5 > a,\n h6 > a {\n  text-decoration: none;\n  color: inherit;\n }\n\n /* Prose */\n p {\n  --baseline-multiplier: 0.179;\n  --x-height-multiplier: 0.35;\n  margin: "," "," "," ",";\n  padding: ",";\n }\n\n ul,\n ol {\n  margin-left: ",";\n  margin-right: ",";\n  margin-bottom: ",";\n  list-style-position: outside;\n  list-style-image: none;\n }\n\n ul li,\n ol li {\n  margin-bottom: calc("," / 2);\n }\n\n li > p {\n  margin-bottom: calc("," / 2);\n }\n\n li *:last-child {\n  margin-bottom: ",";\n }\n\n li > ul {\n  margin-left: ",";\n  margin-top: calc("," / 2);\n }\n\n /* Link */\n a {\n  color: var(--color-link);\n  text-decoration: none;\n }\n\n a:hover,\n a:focus {\n  text-decoration: none;\n }\n /*\n * Based on Plugin: Syntax Highlighter CB\n * Plugin URI: http://wp.tutsplus.com/tutorials/plugins/adding-a-syntax-highlighter-shortcode-using-prism-js\n * Description: Highlight your code snippets with an easy to use shortcode based on Lea Verou's Prism.js.\n * Version: 1.0.0\n * Author: c.bavota\n * Author URI: http://bavotasan.comhttp://wp.tutsplus.com/tutorials/plugins/adding-a-syntax-highlighter-shortcode-using-prism-js/ */\n /* http://cbavota.bitbucket.org/syntax-highlighter/  */\n\n /* =====   ===== */\n code[class*='language-'],\n pre[class*='language-'] {\n  color: #fff;\n  text-shadow: 0 1px 1px #000;\n  font-family: Menlo, Monaco, 'Courier New', monospace;\n  direction: ltr;\n  text-align: left;\n  word-spacing: normal;\n  white-space: pre;\n  word-wrap: normal;\n  line-height: 1.4;\n  background: none;\n  border: 0;\n  font-size: 14px;\n\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n\n  -webkit-hyphens: none;\n  -moz-hyphens: none;\n  -ms-hyphens: none;\n  hyphens: none;\n }\n\n pre[class*='language-'] code {\n  float: left;\n  padding: 0 15px 0 0;\n }\n\n pre[class*='language-'],\n :not(pre) > code[class*='language-'] {\n  background: #222;\n }\n\n /* Code blocks */\n pre[class*='language-'] {\n  padding: 15px;\n  margin: 1em 0;\n  overflow: auto;\n  -moz-border-radius: 8px;\n  -webkit-border-radius: 8px;\n  border-radius: 8px;\n }\n\n /* Inline code */\n :not(pre) > code[class*='language-'] {\n  padding: 5px 10px;\n  line-height: 1;\n  -moz-border-radius: 3px;\n  -webkit-border-radius: 3px;\n  border-radius: 3px;\n }\n\n .token.comment,\n .token.prolog,\n .token.doctype,\n .token.cdata {\n  color: #797979;\n }\n\n .token.selector,\n .token.operator,\n .token.punctuation {\n  color: #fff;\n }\n\n .token.namespace {\n  opacity: 0.7;\n }\n\n .token.tag,\n .token.boolean {\n  color: #ffd893;\n }\n\n .token.atrule,\n .token.attr-value,\n .token.hex,\n .token.string {\n  color: #b0c975;\n }\n\n .token.property,\n .token.entity,\n .token.url,\n .token.attr-name,\n .token.keyword {\n  color: #c27628;\n }\n\n .token.regex {\n  color: #9b71c6;\n }\n\n .token.entity {\n  cursor: help;\n }\n\n .token.function,\n .token.constant {\n  color: #e5a638;\n }\n\n .token.variable {\n  color: #fdfba8;\n }\n\n .token.number {\n  color: #8799b0;\n }\n\n .token.important,\n .token.deliminator {\n  color: #e45734;\n }\n .style .token.string {\n  color: #9a6e3a;\n  background: none !important;\n }\n /* Line highlight plugin */\n .line-highlight.line-highlight {\n  background: rgba(255, 255, 255, 0.2);\n }\n\n .line-highlight.line-highlight:before,\n .line-highlight.line-highlight[data-end]:after {\n  top: 0.3em;\n  background-color: rgba(255, 255, 255, 0.2);\n  color: #fff;\n  -moz-border-radius: 8px;\n  -webkit-border-radius: 8px;\n  border-radius: 8px;\n }\n\n /* for line numbers */\n /* span instead of span:before for a two-toned border */\n .line-numbers .line-numbers-rows > span {\n  /* border-right: 3px #d9d336 solid; */\n }\n\n .token.operator,\n .token.entity,\n .token.url,\n .language-css .token.string,\n .style .token.string {\n  color: #9a6e3a;\n  background: none !important;\n }\n"])),p.Z.lightColor.primary,p.Z.lightColor.text,p.Z.lightColor.textLight,p.Z.lightColor.heading,p.Z.lightColor.headingBlack,p.Z.lightColor.accent,p.Z.lightColor.tag,p.Z.lightColor.link,p.Z.lightColor.background,p.Z.fontSize.root,p.Z.fontSize[1],p.Z.spacing[3],p.Z.fontWeight.bold,p.Z.fontWeight.black,p.Z.fontSize[5],p.Z.fontSize[4],p.Z.fontSize[3],p.Z.fontSize[2],p.Z.fontSize[1],p.Z.fontSize[0],p.Z.spacing[0],p.Z.spacing[0],p.Z.spacing[7],p.Z.spacing[0],p.Z.spacing[0],p.Z.spacing[0],p.Z.spacing[0],p.Z.spacing[8],p.Z.spacing[4],p.Z.spacing[4],p.Z.spacing[0],p.Z.spacing[8],p.Z.spacing[8]),E=Z(P||(P=(0,u.Z)(["\n /* Colors */\n :root {\n  --color-primary: ",";\n  --color-textLight: ",";\n  --color-accent: ",";\n  --color-link: ",";\n  --color-heading: ",";\n  --color-headingBlack: ",";\n  --color-tag: ",";\n  --color-text: ",";\n  --color-background: ",";\n }\n"])),p.Z.darkColor.primary,p.Z.darkColor.textLight,p.Z.darkColor.accent,p.Z.darkColor.link,p.Z.darkColor.heading,p.Z.darkColor.headingBlack,p.Z.darkColor.tag,p.Z.darkColor.text,p.Z.darkColor.background);var z=()=>{const e=Z($||($=(0,u.Z)(["\n  ",";\n  ",";\n "])),O,document.body.classList.contains("dark")?E:null);return l.createElement(S,{styles:e})},A=t(4405);function j(e){return(0,A.w_)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"}},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"}},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"}},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"}},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"}},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"}}]})(e)}var T=t(9583);var R=e=>{let{location:n,title:t,children:r}=e;const o="/"===n.pathname,{0:a,1:i}=(0,l.useState)(null);let s=!1;"undefined"!=typeof window&&(s=a===window.__DARK);const c=(0,l.useCallback)((()=>{const e=s?window.__LIGHT:window.__DARK;window.__setTheme(e),i(e)}),[s]);return(0,l.useEffect)((()=>{i(window.__theme)}),[]),a?l.createElement("div",null,l.createElement(z,null),l.createElement(g,null,l.createElement("div",null,l.createElement(m,{to:"/"},t)),l.createElement(v,null,l.createElement(f.Link,{to:"/about"},l.createElement("span",null,"about")),l.createElement(b,{onClick:c},s?l.createElement(j,null):l.createElement(T.TLr,null)))),l.createElement(h,{isRootPath:o},l.createElement("main",null,r),l.createElement("br",null),l.createElement("br",null),l.createElement("br",null)),l.createElement(y,null,l.createElement("hr",null),l.createElement("br",null),"© Copyright 2023. klloo All rights reserved.")):null}},8448:function(e,n){"use strict";n.Z={maxWidth:{none:"none",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem",full:"100%"},spacing:{px:"1px",0:0,1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",20:"5rem",24:"6rem",32:"8rem"},fontWeight:{normal:400,bold:700,black:900},fontSize:{root:"17px",0:"0.833rem",.5:"0.9rem",1:"1rem",2:"1.2rem",3:"1.44rem",4:"1.728rem",5:"2.074rem",6:"2.488rem",7:"2.986rem",8:"3.3rem",9:"3.7rem",10:"4.5rem"},lineHeight:{none:1,tight:1.1,normal:1.5,relaxed:1.625},lightColor:{primary:"#005b99",text:"#2e353f",textLight:"#4f5969",heading:"#1a202c",headingBlack:"black",accent:"#d1dce5",tag:"rgb(232, 232, 232)",link:"rgb(41, 98, 246)",background:"white"},darkColor:{primary:"#005b99",textLight:"rgb(176,176,176)",heading:"white",headingBlack:"white",accent:"#4f5969",tag:"rgb(56, 62, 70)",link:"rgb(146, 216, 252)",text:"white",background:"rgb(35,40,48)"},media:{mobile:"42rem"}}},8679:function(e,n,t){"use strict";var r=t(9864),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function c(e){return r.isMemo(e)?i:s[e.$$typeof]||o}s[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[r.Memo]=i;var l=Object.defineProperty,u=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,g=Object.prototype;e.exports=function e(n,t,r){if("string"!=typeof t){if(g){var o=p(t);o&&o!==g&&e(n,o,r)}var i=u(t);d&&(i=i.concat(d(t)));for(var s=c(n),m=c(t),h=0;h<i.length;++h){var y=i[h];if(!(a[y]||r&&r[y]||m&&m[y]||s&&s[y])){var b=f(t,y);try{l(n,y,b)}catch(v){}}}}return n}},4405:function(e,n,t){"use strict";t.d(n,{w_:function(){return l}});var r=t(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(o),i=function(){return i=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},i.apply(this,arguments)},s=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t};function c(e){return e&&e.map((function(e,n){return r.createElement(e.tag,i({key:n},e.attr),c(e.child))}))}function l(e){return function(n){return r.createElement(u,i({attr:i({},e.attr)},n),c(e.child))}}function u(e){var n=function(n){var t,o=e.attr,a=e.size,c=e.title,l=s(e,["attr","size","title"]),u=a||n.size||"1em";return n.className&&(t=n.className),e.className&&(t=(t?t+" ":"")+e.className),r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,o,l,{className:t,style:i(i({color:e.color||n.color},n.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==a?r.createElement(a.Consumer,null,(function(e){return n(e)})):n(o)}},9921:function(e,n){"use strict";var t="function"==typeof Symbol&&Symbol.for,r=t?Symbol.for("react.element"):60103,o=t?Symbol.for("react.portal"):60106,a=t?Symbol.for("react.fragment"):60107,i=t?Symbol.for("react.strict_mode"):60108,s=t?Symbol.for("react.profiler"):60114,c=t?Symbol.for("react.provider"):60109,l=t?Symbol.for("react.context"):60110,u=t?Symbol.for("react.async_mode"):60111,d=t?Symbol.for("react.concurrent_mode"):60111,f=t?Symbol.for("react.forward_ref"):60112,p=t?Symbol.for("react.suspense"):60113,g=t?Symbol.for("react.suspense_list"):60120,m=t?Symbol.for("react.memo"):60115,h=t?Symbol.for("react.lazy"):60116,y=t?Symbol.for("react.block"):60121,b=t?Symbol.for("react.fundamental"):60117,v=t?Symbol.for("react.responder"):60118,k=t?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var n=e.$$typeof;switch(n){case r:switch(e=e.type){case u:case d:case a:case s:case i:case p:return e;default:switch(e=e&&e.$$typeof){case l:case f:case h:case m:case c:return e;default:return n}}case o:return n}}}function w(e){return x(e)===d}n.AsyncMode=u,n.ConcurrentMode=d,n.ContextConsumer=l,n.ContextProvider=c,n.Element=r,n.ForwardRef=f,n.Fragment=a,n.Lazy=h,n.Memo=m,n.Portal=o,n.Profiler=s,n.StrictMode=i,n.Suspense=p,n.isAsyncMode=function(e){return w(e)||x(e)===u},n.isConcurrentMode=w,n.isContextConsumer=function(e){return x(e)===l},n.isContextProvider=function(e){return x(e)===c},n.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},n.isForwardRef=function(e){return x(e)===f},n.isFragment=function(e){return x(e)===a},n.isLazy=function(e){return x(e)===h},n.isMemo=function(e){return x(e)===m},n.isPortal=function(e){return x(e)===o},n.isProfiler=function(e){return x(e)===s},n.isStrictMode=function(e){return x(e)===i},n.isSuspense=function(e){return x(e)===p},n.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===d||e===s||e===i||e===p||e===g||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===m||e.$$typeof===c||e.$$typeof===l||e.$$typeof===f||e.$$typeof===b||e.$$typeof===v||e.$$typeof===k||e.$$typeof===y)},n.typeOf=x},9864:function(e,n,t){"use strict";e.exports=t(9921)},434:function(e){function n(){return e.exports=n=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,n.apply(this,arguments)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},1880:function(e,n,t){"use strict";function r(e,n){return n||(n=e.slice(0)),e.raw=n,e}t.d(n,{Z:function(){return r}})}}]);
//# sourceMappingURL=commons-6beb9db488180b4f7394.js.map