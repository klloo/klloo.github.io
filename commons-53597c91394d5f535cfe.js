/*! For license information please see commons-53597c91394d5f535cfe.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[351],{6751:function(e,t,n){"use strict";n.d(t,{Z:function(){return oe}});var r=function(){function e(e){var t=this;this._insertTag=function(e){var n;n=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{n.insertRule(e,n.cssRules.length)}catch(r){0}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),o=Math.abs,a=String.fromCharCode,i=Object.assign;function s(e){return e.trim()}function c(e,t,n){return e.replace(t,n)}function l(e,t){return e.indexOf(t)}function u(e,t){return 0|e.charCodeAt(t)}function f(e,t,n){return e.slice(t,n)}function d(e){return e.length}function p(e){return e.length}function m(e,t){return t.push(e),e}var h=1,g=1,y=0,b=0,v=0,x="";function k(e,t,n,r,o,a,i){return{value:e,root:t,parent:n,type:r,props:o,children:a,line:h,column:g,length:i,return:""}}function w(e,t){return i(k("",null,null,"",null,null,0),e,{length:-e.length},t)}function C(){return v=b>0?u(x,--b):0,g--,10===v&&(g=1,h--),v}function Z(){return v=b<y?u(x,b++):0,g++,10===v&&(g=1,h++),v}function S(){return u(x,b)}function _(){return b}function $(e,t){return f(x,e,t)}function P(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function A(e){return h=g=1,y=d(x=e),b=0,[]}function E(e){return x="",e}function O(e){return s($(b-1,R(91===e?e+2:40===e?e+1:e)))}function z(e){for(;(v=S())&&v<33;)Z();return P(e)>2||P(v)>3?"":" "}function T(e,t){for(;--t&&Z()&&!(v<48||v>102||v>57&&v<65||v>70&&v<97););return $(e,_()+(t<6&&32==S()&&32==Z()))}function R(e){for(;Z();)switch(v){case e:return b;case 34:case 39:34!==e&&39!==e&&R(v);break;case 40:41===e&&R(e);break;case 92:Z()}return b}function M(e,t){for(;Z()&&e+v!==57&&(e+v!==84||47!==S()););return"/*"+$(t,b-1)+"*"+a(47===e?e:Z())}function j(e){for(;!P(S());)Z();return $(e,b)}var L="-ms-",I="-moz-",N="-webkit-",F="comm",W="rule",B="decl",H="@keyframes";function D(e,t){for(var n="",r=p(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function G(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case B:return e.return=e.return||e.value;case F:return"";case H:return e.return=e.value+"{"+D(e.children,r)+"}";case W:e.value=e.props.join(",")}return d(n=D(e.children,r))?e.return=e.value+"{"+n+"}":""}function q(e){return E(U("",null,null,null,[""],e=A(e),0,[0],e))}function U(e,t,n,r,o,i,s,f,p){for(var h=0,g=0,y=s,b=0,v=0,x=0,k=1,w=1,$=1,P=0,A="",E=o,R=i,L=r,I=A;w;)switch(x=P,P=Z()){case 40:if(108!=x&&58==u(I,y-1)){-1!=l(I+=c(O(P),"&","&\f"),"&\f")&&($=-1);break}case 34:case 39:case 91:I+=O(P);break;case 9:case 10:case 13:case 32:I+=z(x);break;case 92:I+=T(_()-1,7);continue;case 47:switch(S()){case 42:case 47:m(V(M(Z(),_()),t,n),p);break;default:I+="/"}break;case 123*k:f[h++]=d(I)*$;case 125*k:case 59:case 0:switch(P){case 0:case 125:w=0;case 59+g:-1==$&&(I=c(I,/\f/g,"")),v>0&&d(I)-y&&m(v>32?X(I+";",r,n,y-1):X(c(I," ","")+";",r,n,y-2),p);break;case 59:I+=";";default:if(m(L=K(I,t,n,h,g,o,f,A,E=[],R=[],y),i),123===P)if(0===g)U(I,t,L,L,E,i,y,f,R);else switch(99===b&&110===u(I,3)?100:b){case 100:case 108:case 109:case 115:U(e,L,L,r&&m(K(e,L,L,0,0,o,f,A,o,E=[],y),R),o,R,y,f,r?E:R);break;default:U(I,L,L,L,[""],R,0,f,R)}}h=g=v=0,k=$=1,A=I="",y=s;break;case 58:y=1+d(I),v=x;default:if(k<1)if(123==P)--k;else if(125==P&&0==k++&&125==C())continue;switch(I+=a(P),P*k){case 38:$=g>0?1:(I+="\f",-1);break;case 44:f[h++]=(d(I)-1)*$,$=1;break;case 64:45===S()&&(I+=O(Z())),b=S(),g=y=d(A=I+=j(_())),P++;break;case 45:45===x&&2==d(I)&&(k=0)}}return i}function K(e,t,n,r,a,i,l,u,d,m,h){for(var g=a-1,y=0===a?i:[""],b=p(y),v=0,x=0,w=0;v<r;++v)for(var C=0,Z=f(e,g+1,g=o(x=l[v])),S=e;C<b;++C)(S=s(x>0?y[C]+" "+Z:c(Z,/&\f/g,y[C])))&&(d[w++]=S);return k(e,t,n,0===a?W:u,d,m,h)}function V(e,t,n){return k(e,t,n,F,a(v),f(e,2,-2),0)}function X(e,t,n,r){return k(e,t,n,B,f(e,0,r),f(e,r+1,-1),r)}var Y=function(e,t,n){for(var r=0,o=0;r=o,o=S(),38===r&&12===o&&(t[n]=1),!P(o);)Z();return $(e,b)},J=function(e,t){return E(function(e,t){var n=-1,r=44;do{switch(P(r)){case 0:38===r&&12===S()&&(t[n]=1),e[n]+=Y(b-1,t,n);break;case 2:e[n]+=O(r);break;case 4:if(44===r){e[++n]=58===S()?"&\f":"",t[n]=e[n].length;break}default:e[n]+=a(r)}}while(r=Z());return e}(A(e),t))},Q=new WeakMap,ee=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;"rule"!==n.type;)if(!(n=n.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||Q.get(n))&&!r){Q.set(e,!0);for(var o=[],a=J(t,o),i=n.props,s=0,c=0;s<a.length;s++)for(var l=0;l<i.length;l++,c++)e.props[c]=o[s]?a[s].replace(/&\f/g,i[l]):i[l]+" "+a[s]}}},te=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function ne(e,t){switch(function(e,t){return 45^u(e,0)?(((t<<2^u(e,0))<<2^u(e,1))<<2^u(e,2))<<2^u(e,3):0}(e,t)){case 5103:return N+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return N+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return N+e+I+e+L+e+e;case 6828:case 4268:return N+e+L+e+e;case 6165:return N+e+L+"flex-"+e+e;case 5187:return N+e+c(e,/(\w+).+(:[^]+)/,N+"box-$1$2"+L+"flex-$1$2")+e;case 5443:return N+e+L+"flex-item-"+c(e,/flex-|-self/,"")+e;case 4675:return N+e+L+"flex-line-pack"+c(e,/align-content|flex-|-self/,"")+e;case 5548:return N+e+L+c(e,"shrink","negative")+e;case 5292:return N+e+L+c(e,"basis","preferred-size")+e;case 6060:return N+"box-"+c(e,"-grow","")+N+e+L+c(e,"grow","positive")+e;case 4554:return N+c(e,/([^-])(transform)/g,"$1"+N+"$2")+e;case 6187:return c(c(c(e,/(zoom-|grab)/,N+"$1"),/(image-set)/,N+"$1"),e,"")+e;case 5495:case 3959:return c(e,/(image-set\([^]*)/,N+"$1$`$1");case 4968:return c(c(e,/(.+:)(flex-)?(.*)/,N+"box-pack:$3"+L+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+N+e+e;case 4095:case 3583:case 4068:case 2532:return c(e,/(.+)-inline(.+)/,N+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(d(e)-1-t>6)switch(u(e,t+1)){case 109:if(45!==u(e,t+4))break;case 102:return c(e,/(.+:)(.+)-([^]+)/,"$1"+N+"$2-$3$1"+I+(108==u(e,t+3)?"$3":"$2-$3"))+e;case 115:return~l(e,"stretch")?ne(c(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==u(e,t+1))break;case 6444:switch(u(e,d(e)-3-(~l(e,"!important")&&10))){case 107:return c(e,":",":"+N)+e;case 101:return c(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+N+(45===u(e,14)?"inline-":"")+"box$3$1"+N+"$2$3$1"+L+"$2box$3")+e}break;case 5936:switch(u(e,t+11)){case 114:return N+e+L+c(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return N+e+L+c(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return N+e+L+c(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return N+e+L+e+e}return e}var re=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case B:e.return=ne(e.value,e.length);break;case H:return D([w(e,{value:c(e.value,"@","@"+N)})],r);case W:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return D([w(e,{props:[c(t,/:(read-\w+)/,":-moz-$1")]})],r);case"::placeholder":return D([w(e,{props:[c(t,/:(plac\w+)/,":"+N+"input-$1")]}),w(e,{props:[c(t,/:(plac\w+)/,":-moz-$1")]}),w(e,{props:[c(t,/:(plac\w+)/,L+"input-$1")]})],r)}return""}))}}],oe=function(e){var t=e.key;if("css"===t){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var o=e.stylisPlugins||re;var a,i,s={},c=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),n=1;n<t.length;n++)s[t[n]]=!0;c.push(e)}));var l,u,f,d,m=[G,(d=function(e){l.insert(e)},function(e){e.root||(e=e.return)&&d(e)})],h=(u=[ee,te].concat(o,m),f=p(u),function(e,t,n,r){for(var o="",a=0;a<f;a++)o+=u[a](e,t,n,r)||"";return o});i=function(e,t,n,r){l=n,D(q(e?e+"{"+t.styles+"}":t.styles),h),r&&(g.inserted[t.name]=!0)};var g={key:t,sheet:new r({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:i};return g.sheet.hydrate(c),g}},5042:function(e,t,n){"use strict";function r(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}n.d(t,{Z:function(){return r}})},5260:function(e,t,n){"use strict";n.d(t,{T:function(){return c},i:function(){return a},w:function(){return s}});var r=n(7294),o=n(6751),a=(n(6797),n(7278),!0),i=r.createContext("undefined"!=typeof HTMLElement?(0,o.Z)({key:"css"}):null);i.Provider;var s=function(e){return(0,r.forwardRef)((function(t,n){var o=(0,r.useContext)(i);return e(t,o,n)}))};a||(s=function(e){return function(t){var n=(0,r.useContext)(i);return null===n?(n=(0,o.Z)({key:"css"}),r.createElement(i.Provider,{value:n},e(t,n))):e(t,n)}});var c=r.createContext({})},6797:function(e,t,n){"use strict";n.d(t,{O:function(){return m}});var r={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},o=n(5042),a=/[A-Z]|^ms/g,i=/_EMO_([^_]+?)_([^]*?)_EMO_/g,s=function(e){return 45===e.charCodeAt(1)},c=function(e){return null!=e&&"boolean"!=typeof e},l=(0,o.Z)((function(e){return s(e)?e:e.replace(a,"-$&").toLowerCase()})),u=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(i,(function(e,t,n){return d={name:t,styles:n,next:d},t}))}return 1===r[e]||s(e)||"number"!=typeof t||0===t?t:t+"px"};function f(e,t,n){if(null==n)return"";if(void 0!==n.__emotion_styles)return n;switch(typeof n){case"boolean":return"";case"object":if(1===n.anim)return d={name:n.name,styles:n.styles,next:d},n.name;if(void 0!==n.styles){var r=n.next;if(void 0!==r)for(;void 0!==r;)d={name:r.name,styles:r.styles,next:d},r=r.next;return n.styles+";"}return function(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=f(e,t,n[o])+";";else for(var a in n){var i=n[a];if("object"!=typeof i)null!=t&&void 0!==t[i]?r+=a+"{"+t[i]+"}":c(i)&&(r+=l(a)+":"+u(a,i)+";");else if(!Array.isArray(i)||"string"!=typeof i[0]||null!=t&&void 0!==t[i[0]]){var s=f(e,t,i);switch(a){case"animation":case"animationName":r+=l(a)+":"+s+";";break;default:r+=a+"{"+s+"}"}}else for(var d=0;d<i.length;d++)c(i[d])&&(r+=l(a)+":"+u(a,i[d])+";")}return r}(e,t,n);case"function":if(void 0!==e){var o=d,a=n(e);return d=o,f(e,t,a)}}if(null==t)return n;var i=t[n];return void 0!==i?i:n}var d,p=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var m=function(e,t,n){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var r=!0,o="";d=void 0;var a=e[0];null==a||void 0===a.raw?(r=!1,o+=f(n,t,a)):o+=a[0];for(var i=1;i<e.length;i++)o+=f(n,t,e[i]),r&&(o+=a[i]);p.lastIndex=0;for(var s,c="";null!==(s=p.exec(o));)c+="-"+s[1];var l=function(e){for(var t,n=0,r=0,o=e.length;o>=4;++r,o-=4)t=1540483477*(65535&(t=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(t>>>16)<<16),n=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(o){case 3:n^=(255&e.charCodeAt(r+2))<<16;case 2:n^=(255&e.charCodeAt(r+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(r)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)}(o)+c;return{name:l,styles:o,next:d}}},9206:function(e,t,n){"use strict";function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{Z:function(){return y}});var o=n(7294),a=n(5042),i=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,s=(0,a.Z)((function(e){return i.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),c=n(5260),l=n(444),u=n(6797),f=n(7278),d=s,p=function(e){return"theme"!==e},m=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?d:p},h=function(e,t,n){var r;if(t){var o=t.shouldForwardProp;r=e.__emotion_forwardProp&&o?function(t){return e.__emotion_forwardProp(t)&&o(t)}:o}return"function"!=typeof r&&n&&(r=e.__emotion_forwardProp),r},g=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return(0,l.hC)(t,n,r),(0,f.L)((function(){return(0,l.My)(t,n,r)})),null},y=(n(434),function e(t,n){var a,i,s=t.__emotion_real===t,f=s&&t.__emotion_base||t;void 0!==n&&(a=n.label,i=n.target);var d=h(t,n,s),p=d||m(f),y=!p("as");return function(){var b=arguments,v=s&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==a&&v.push("label:"+a+";"),null==b[0]||void 0===b[0].raw)v.push.apply(v,b);else{0,v.push(b[0][0]);for(var x=b.length,k=1;k<x;k++)v.push(b[k],b[0][k])}var w=(0,c.w)((function(e,t,n){var r=y&&e.as||f,a="",s=[],h=e;if(null==e.theme){for(var b in h={},e)h[b]=e[b];h.theme=o.useContext(c.T)}"string"==typeof e.className?a=(0,l.fp)(t.registered,s,e.className):null!=e.className&&(a=e.className+" ");var x=(0,u.O)(v.concat(s),t.registered,h);a+=t.key+"-"+x.name,void 0!==i&&(a+=" "+i);var k=y&&void 0===d?m(r):p,w={};for(var C in e)y&&"as"===C||k(C)&&(w[C]=e[C]);return w.className=a,w.ref=n,o.createElement(o.Fragment,null,o.createElement(g,{cache:t,serialized:x,isStringTag:"string"==typeof r}),o.createElement(r,w))}));return w.displayName=void 0!==a?a:"Styled("+("string"==typeof f?f:f.displayName||f.name||"Component")+")",w.defaultProps=t.defaultProps,w.__emotion_real=w,w.__emotion_base=f,w.__emotion_styles=v,w.__emotion_forwardProp=d,Object.defineProperty(w,"toString",{value:function(){return"."+i}}),w.withComponent=function(t,o){return e(t,r({},n,o,{shouldForwardProp:h(w,o,!0)})).apply(void 0,v)},w}}.bind());["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){y[e]=y(e)}))},7278:function(e,t,n){"use strict";var r;n.d(t,{L:function(){return i},j:function(){return s}});var o=n(7294),a=!!(r||(r=n.t(o,2))).useInsertionEffect&&(r||(r=n.t(o,2))).useInsertionEffect,i=a||function(e){return e()},s=a||o.useLayoutEffect},444:function(e,t,n){"use strict";n.d(t,{My:function(){return a},fp:function(){return r},hC:function(){return o}});function r(e,t,n){var r="";return n.split(" ").forEach((function(n){void 0!==e[n]?t.push(e[n]+";"):r+=n+" "})),r}var o=function(e,t,n){var r=e.key+"-"+t.name;!1===n&&void 0===e.registered[r]&&(e.registered[r]=t.styles)},a=function(e,t,n){o(e,t,n);var r=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var a=t;do{e.insert(t===a?"."+r:"",a,e.sheet,!0),a=a.next}while(void 0!==a)}}},5744:function(e,t,n){"use strict";n.d(t,{Z:function(){return z}});var r,o,a,i,s,c,l=n(7294),u=n(1880),f=n(9206),d=n(1883),p=n(8448);const m=f.Z.div(r||(r=(0,u.Z)(["\n display: flex;\n justify-content: space-between;\n align-items: center;\n max-width: ",";\n margin-bottom: ",";\n padding: "," ",";\n top: 0px;\n position: sticky;\n backdrop-filter: blur(20px);\n background-color: var(--color-background);\n opacity: 0.9;\n z-index: 999;\n border-bottom: 1px solid var(--color-accent);\n & div {\n  cursor: pointer;\n }\n"])),p.Z.maxWidth.full,p.Z.spacing[12],p.Z.spacing[4],p.Z.spacing[10]),h=(0,f.Z)(d.Link)(o||(o=(0,u.Z)(["\n font-weight: ",";\n color: var(--color-text);\n text-decoration: none;\n font-size: ",";\n"])),p.Z.fontWeight.bold,p.Z.fontSize[2]),g=f.Z.div(a||(a=(0,u.Z)(["\n margin: "," auto;\n max-width: ",";\n padding: "," ",";\n margin-bottom: ",";\n padding: ",";\n max-width: ",";\n\n @media (max-width: ",") {\n  padding: "," ",";\n }\n"])),p.Z.spacing[0],p.Z.maxWidth["5xl"],p.Z.spacing[10],p.Z.spacing[10],(e=>e.isRootPath?p.Z.spacing[20]:"0"),(e=>e.isRootPath?"":p.Z.spacing[10]+" "+p.Z.spacing[10]),(e=>e.isRootPath?"":p.Z.maxWidth["2xl"]),p.Z.media.mobile,p.Z.spacing[10],p.Z.spacing[3]),y=f.Z.div(i||(i=(0,u.Z)(["\n max-width: ",";\n margin-bottom: ",";\n padding: "," ",";\n\n @media (max-width: ",") {\n  padding: "," ",";\n }\n"])),p.Z.maxWidth.full,p.Z.spacing[12],p.Z.spacing[15],p.Z.spacing[10],p.Z.media.mobile,p.Z.spacing[10],p.Z.spacing[3]),b=f.Z.button(s||(s=(0,u.Z)(["\n display: inline;\n width: 20px;\n cursor: pointer;\n margin-left: ",";\n border: none;\n background: transparent;\n"])),p.Z.spacing[5]),v=f.Z.div(c||(c=(0,u.Z)(["\n display: flex;\n justify-content: space-between;\n align-items: center;\n & span {\n  color: var(--color-text);\n }\n"])));var x=n(5260),k=n(444),w=n(7278),C=n(6797),Z=(n(6751),n(434),n(8679),(0,x.w)((function(e,t){var n=e.styles,r=(0,C.O)([n],void 0,l.useContext(x.T));if(!x.i){for(var o,a=r.name,i=r.styles,s=r.next;void 0!==s;)a+=" "+s.name,i+=s.styles,s=s.next;var c=!0===t.compat,u=t.insert("",{name:a,styles:i},t.sheet,c);return c?null:l.createElement("style",((o={})["data-emotion"]=t.key+"-global "+a,o.dangerouslySetInnerHTML={__html:u},o.nonce=t.sheet.nonce,o))}var f=l.useRef();return(0,w.j)((function(){var e=t.key+"-global",n=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),o=!1,a=document.querySelector('style[data-emotion="'+e+" "+r.name+'"]');return t.sheet.tags.length&&(n.before=t.sheet.tags[0]),null!==a&&(o=!0,a.setAttribute("data-emotion",e),n.hydrate([a])),f.current=[n,o],function(){n.flush()}}),[t]),(0,w.j)((function(){var e=f.current,n=e[0];if(e[1])e[1]=!1;else{if(void 0!==r.next&&(0,k.My)(t,r.next,!0),n.tags.length){var o=n.tags[n.tags.length-1].nextElementSibling;n.before=o,n.flush()}t.insert("",r,n,!1)}}),[t,r.name]),null})));function S(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,C.O)(t)}var _,$,P;const A=S(_||(_=(0,u.Z)(["\n /* Colors */\n :root {\n  --color-primary: ",";\n  --color-text: ",";\n  --color-textLight: ",";\n  --color-heading: ",";\n  --color-headingBlack: ",";\n  --color-accent: ",";\n  --color-tag: ",";\n  --color-link: ",";\n  --color-background: ",";\n }\n\n @font-face {\n  font-family: 'IBMPlexSansKR-Regular';\n  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Regular.woff') format('woff');\n  font-weight: normal;\n  font-style: normal;\n }\n\n /* HTML elements */\n *,\n :after,\n :before {\n  box-sizing: border-box;\n }\n\n html {\n  line-height: 1.75;\n  font-size: ",";\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  letter-spacing: 0.02rem;\n  word-break: keep-all;\n }\n\n body {\n  font-family: 'IBMPlexSansKR-Regular';\n  font-size: ",";\n  color: var(--color-text);\n  background-color: var(--color-background);\n }\n\n hr {\n  background: var(--color-accent);\n  height: 1px;\n  border: 0;\n }\n\n /* Heading */\n h1,\n h2,\n h3,\n h4,\n h5,\n h6 {\n  margin-bottom: ",";\n }\n\n h2,\n h3,\n h4,\n h5,\n h6 {\n  font-weight: ",";\n  color: var(--color-heading);\n }\n\n h1 {\n  font-weight: ",";\n  font-size: ",";\n  color: var(--color-headingBlack);\n }\n\n h2 {\n  font-size: ",";\n }\n\n h3 {\n  font-size: ",";\n }\n\n h4 {\n  font-size: ",";\n }\n\n h5 {\n  font-size: ",";\n }\n\n h6 {\n  font-size: ",";\n }\n\n h1 > a {\n  color: inherit;\n  text-decoration: none;\n }\n\n h2 > a,\n h3 > a,\n h4 > a,\n h5 > a,\n h6 > a {\n  text-decoration: none;\n  color: inherit;\n }\n\n /* Prose */\n p {\n  --baseline-multiplier: 0.179;\n  --x-height-multiplier: 0.35;\n  margin: "," "," "," ",";\n  padding: ",";\n }\n\n ul,\n ol {\n  margin-left: ",";\n  margin-right: ",";\n  padding: ",";\n  margin-bottom: ",";\n  list-style-position: outside;\n  list-style-image: none;\n }\n\n ul li,\n ol li {\n  padding-left: ",";\n  margin-bottom: calc("," / 2);\n }\n\n li > p {\n  margin-bottom: calc("," / 2);\n }\n\n li *:last-child {\n  margin-bottom: ",";\n }\n\n li > ul {\n  margin-left: ",";\n  margin-top: calc("," / 2);\n }\n\n /* Link */\n a {\n  color: var(--color-link);\n  text-decoration: none;\n }\n\n a:hover,\n a:focus {\n  text-decoration: none;\n }\n\n deckgo-highlight-code {\n  --deckgo-highlight-code-font-size: 15px;\n  padding: 15px 2px 10px 2px;\n  border-radius: 6px;\n  font-family: ",";\n }\n"])),p.Z.lightColor.primary,p.Z.lightColor.text,p.Z.lightColor.textLight,p.Z.lightColor.heading,p.Z.lightColor.headingBlack,p.Z.lightColor.accent,p.Z.lightColor.tag,p.Z.lightColor.link,p.Z.lightColor.background,p.Z.fontSize.root,p.Z.fontSize[1],p.Z.spacing[3],p.Z.fontWeight.bold,p.Z.fontWeight.black,p.Z.fontSize[5],p.Z.fontSize[4],p.Z.fontSize[3],p.Z.fontSize[2],p.Z.fontSize[1],p.Z.fontSize[0],p.Z.spacing[0],p.Z.spacing[0],p.Z.spacing[7],p.Z.spacing[0],p.Z.spacing[0],p.Z.spacing[0],p.Z.spacing[0],p.Z.spacing[0],p.Z.spacing[8],p.Z.spacing[0],p.Z.spacing[4],p.Z.spacing[4],p.Z.spacing[0],p.Z.spacing[8],p.Z.spacing[8],'"Merriweather", "Georgia", Cambria, "Times New Roman", Times, serif'),E=S($||($=(0,u.Z)(["\n /* Colors */\n :root {\n  --color-primary: ",";\n  --color-textLight: ",";\n  --color-accent: ",";\n  --color-link: ",";\n  --color-heading: ",";\n  --color-headingBlack: ",";\n  --color-tag: ",";\n  --color-text: ",";\n  --color-background: ",";\n }\n"])),p.Z.darkColor.primary,p.Z.darkColor.textLight,p.Z.darkColor.accent,p.Z.darkColor.link,p.Z.darkColor.heading,p.Z.darkColor.headingBlack,p.Z.darkColor.tag,p.Z.darkColor.text,p.Z.darkColor.background);var O=()=>{const e=S(P||(P=(0,u.Z)(["\n  ",";\n  ",";\n "])),A,document.body.classList.contains("dark")?E:null);return l.createElement(Z,{styles:e})};var z=e=>{let{location:t,title:n,children:r}=e;const o="/"===t.pathname,{0:a,1:i}=(0,l.useState)(null);let s=!1;"undefined"!=typeof window&&(s=a===window.__DARK);const c=(0,l.useCallback)((()=>{const e=s?window.__LIGHT:window.__DARK;window.__setTheme(e),i(e)}),[s]);return(0,l.useEffect)((()=>{i(window.__theme)}),[]),a?l.createElement("div",null,l.createElement(O,null),l.createElement(m,null,l.createElement("div",null,l.createElement(h,{to:"/"},n)),l.createElement(v,null,l.createElement(d.Link,{to:"/about"},l.createElement("span",null,"about")),l.createElement(b,{onClick:c},s?"☀️":"🌙"))),l.createElement(g,{isRootPath:o},l.createElement("main",null,r),l.createElement("br",null),l.createElement("br",null),l.createElement("br",null)),l.createElement(y,null,l.createElement("hr",null),l.createElement("br",null),"© ",(new Date).getFullYear(),", Built with"," ",l.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby"))):null}},8448:function(e,t){"use strict";t.Z={maxWidth:{none:"none",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem",full:"100%"},spacing:{px:"1px",0:0,1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",20:"5rem",24:"6rem",32:"8rem"},fontWeight:{normal:400,bold:700,black:900},fontSize:{root:"17px",0:"0.833rem",.5:"0.9rem",1:"1rem",2:"1.2rem",3:"1.44rem",4:"1.728rem",5:"2.074rem",6:"2.488rem",7:"2.986rem",8:"3.3rem",9:"3.7rem",10:"4.5rem"},lineHeight:{none:1,tight:1.1,normal:1.5,relaxed:1.625},lightColor:{primary:"#005b99",text:"#2e353f",textLight:"#4f5969",heading:"#1a202c",headingBlack:"black",accent:"#d1dce5",tag:"rgb(232, 232, 232)",link:"rgb(41, 98, 246)",background:"white"},darkColor:{primary:"#005b99",textLight:"rgb(176,176,176)",heading:"white",headingBlack:"white",accent:"#4f5969",tag:"rgb(56, 62, 70)",link:"rgb(146, 216, 252)",text:"white",background:"rgb(35,40,48)"},media:{mobile:"42rem"}}},8679:function(e,t,n){"use strict";var r=n(9864),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function c(e){return r.isMemo(e)?i:s[e.$$typeof]||o}s[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[r.Memo]=i;var l=Object.defineProperty,u=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(m){var o=p(n);o&&o!==m&&e(t,o,r)}var i=u(n);f&&(i=i.concat(f(n)));for(var s=c(t),h=c(n),g=0;g<i.length;++g){var y=i[g];if(!(a[y]||r&&r[y]||h&&h[y]||s&&s[y])){var b=d(n,y);try{l(t,y,b)}catch(v){}}}}return t}},9921:function(e,t){"use strict";var n="function"==typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,a=n?Symbol.for("react.fragment"):60107,i=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,c=n?Symbol.for("react.provider"):60109,l=n?Symbol.for("react.context"):60110,u=n?Symbol.for("react.async_mode"):60111,f=n?Symbol.for("react.concurrent_mode"):60111,d=n?Symbol.for("react.forward_ref"):60112,p=n?Symbol.for("react.suspense"):60113,m=n?Symbol.for("react.suspense_list"):60120,h=n?Symbol.for("react.memo"):60115,g=n?Symbol.for("react.lazy"):60116,y=n?Symbol.for("react.block"):60121,b=n?Symbol.for("react.fundamental"):60117,v=n?Symbol.for("react.responder"):60118,x=n?Symbol.for("react.scope"):60119;function k(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case u:case f:case a:case s:case i:case p:return e;default:switch(e=e&&e.$$typeof){case l:case d:case g:case h:case c:return e;default:return t}}case o:return t}}}function w(e){return k(e)===f}t.AsyncMode=u,t.ConcurrentMode=f,t.ContextConsumer=l,t.ContextProvider=c,t.Element=r,t.ForwardRef=d,t.Fragment=a,t.Lazy=g,t.Memo=h,t.Portal=o,t.Profiler=s,t.StrictMode=i,t.Suspense=p,t.isAsyncMode=function(e){return w(e)||k(e)===u},t.isConcurrentMode=w,t.isContextConsumer=function(e){return k(e)===l},t.isContextProvider=function(e){return k(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return k(e)===d},t.isFragment=function(e){return k(e)===a},t.isLazy=function(e){return k(e)===g},t.isMemo=function(e){return k(e)===h},t.isPortal=function(e){return k(e)===o},t.isProfiler=function(e){return k(e)===s},t.isStrictMode=function(e){return k(e)===i},t.isSuspense=function(e){return k(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===f||e===s||e===i||e===p||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===h||e.$$typeof===c||e.$$typeof===l||e.$$typeof===d||e.$$typeof===b||e.$$typeof===v||e.$$typeof===x||e.$$typeof===y)},t.typeOf=k},9864:function(e,t,n){"use strict";e.exports=n(9921)},434:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},1880:function(e,t,n){"use strict";function r(e,t){return t||(t=e.slice(0)),e.raw=t,e}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=commons-53597c91394d5f535cfe.js.map