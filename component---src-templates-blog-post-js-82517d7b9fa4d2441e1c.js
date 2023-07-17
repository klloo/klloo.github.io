/*! For license information please see component---src-templates-blog-post-js-82517d7b9fa4d2441e1c.js.LICENSE.txt */
"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[989],{6050:function(t,e){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const s=window,i=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),n=new WeakMap;let o=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&n.set(e,t))}return t}toString(){return this.cssText}};const l=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,r))(e)})(t):t;var a;const h=window,c=h.trustedTypes,d=c?c.emptyScript:"",u=h.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},g=(t,e)=>e!==t&&(e==e||t==t),m={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:g},v="finalized";let _=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,s)=>{const i=this._$Ep(s,e);void 0!==i&&(this._$Ev.set(i,s),t.push(i))})),t}static createProperty(t,e=m){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const r=this[t];this[e]=i,this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||m}static finalize(){if(this.hasOwnProperty(v))return!1;this[v]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of e)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Ep(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,s;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{i?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style"),r=s.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=e.cssText,t.appendChild(i)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=m){var i;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const n=(void 0!==(null===(i=s.converter)||void 0===i?void 0:i.toAttribute)?s.converter:p).toAttribute(e,s.type);this._$El=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$El=null}}_$AK(t,e){var s;const i=this.constructor,r=i._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=i.getPropertyOptions(r),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:p;this._$El=r,this[r]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,s){let i=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||g)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(s)):this._$Ek()}catch(i){throw e=!1,this._$Ek(),i}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};var f;_[v]=!0,_.elementProperties=new Map,_.elementStyles=[],_.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:_}),(null!==(a=h.reactiveElementVersions)&&void 0!==a?a:h.reactiveElementVersions=[]).push("1.6.2");const $=window,y=$.trustedTypes,A=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",S=`lit$${(Math.random()+"").slice(9)}$`,b="?"+S,C=`<${b}>`,w=document,U=()=>w.createComment(""),P=t=>null===t||"object"!=typeof t&&"function"!=typeof t,O=Array.isArray,N="[ \t\n\f\r]",x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,k=/>/g,I=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,T=/"/g,H=/^(?:script|style|textarea|title)$/i,G=(z=1,(t,...e)=>({_$litType$:z,strings:t,values:e})),L=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),D=new WeakMap,j=w.createTreeWalker(w,129,null,!1);var z;class B{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,n=0;const o=t.length-1,l=this.parts,[a,h]=((t,e)=>{const s=t.length-1,i=[];let r,n=2===e?"<svg>":"",o=x;for(let a=0;a<s;a++){const e=t[a];let s,l,h=-1,c=0;for(;c<e.length&&(o.lastIndex=c,l=o.exec(e),null!==l);)c=o.lastIndex,o===x?"!--"===l[1]?o=M:void 0!==l[1]?o=k:void 0!==l[2]?(H.test(l[2])&&(r=RegExp("</"+l[2],"g")),o=I):void 0!==l[3]&&(o=I):o===I?">"===l[0]?(o=r??x,h=-1):void 0===l[1]?h=-2:(h=o.lastIndex-l[2].length,s=l[1],o=void 0===l[3]?I:'"'===l[3]?T:R):o===T||o===R?o=I:o===M||o===k?o=x:(o=I,r=void 0);const d=o===I&&t[a+1].startsWith("/>")?" ":"";n+=o===x?e+C:h>=0?(i.push(s),e.slice(0,h)+E+e.slice(h)+S+d):e+S+(-2===h?(i.push(void 0),a):d)}const l=n+(t[s]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==A?A.createHTML(l):l,i]})(t,e);if(this.el=B.createElement(a,s),j.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=j.nextNode())&&l.length<o;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith(E)||e.startsWith(S)){const s=h[n++];if(t.push(e),void 0!==s){const t=i.getAttribute(s.toLowerCase()+E).split(S),e=/([.?@])?(.*)/.exec(s);l.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?J:"?"===e[1]?Z:"@"===e[1]?Q:q})}else l.push({type:6,index:r})}for(const e of t)i.removeAttribute(e)}if(H.test(i.tagName)){const t=i.textContent.split(S),e=t.length-1;if(e>0){i.textContent=y?y.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],U()),j.nextNode(),l.push({type:2,index:++r});i.append(t[e],U())}}}else if(8===i.nodeType)if(i.data===b)l.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(S,t+1));)l.push({type:7,index:r}),t+=S.length-1}r++}}static createElement(t,e){const s=w.createElement("template");return s.innerHTML=t,s}}function V(t,e,s=t,i){var r,n,o,l;if(e===L)return e;let a=void 0!==i?null===(r=s._$Co)||void 0===r?void 0:r[i]:s._$Cl;const h=P(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==h&&(null===(n=null==a?void 0:a._$AO)||void 0===n||n.call(a,!1),void 0===h?a=void 0:(a=new h(t),a._$AT(t,s,i)),void 0!==i?(null!==(o=(l=s)._$Co)&&void 0!==o?o:l._$Co=[])[i]=a:s._$Cl=a),void 0!==a&&(e=V(t,a._$AS(t,e.values),a,i)),e}class K{constructor(t,e,s,i){var r;this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cp=null===(r=null==i?void 0:i.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=V(this,t,e),P(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==L&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>O(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==W&&P(this._$AH)?this._$AA.nextSibling.data=t:this.$(w.createTextNode(t)),this._$AH=t}g(t){var e;const{values:s,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=B.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.v(s);else{const t=new class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:s},parts:i}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:w).importNode(s,!0);j.currentNode=r;let n=j.nextNode(),o=0,l=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new K(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new F(n,this,t)),this._$AV.push(e),a=i[++l]}o!==(null==a?void 0:a.index)&&(n=j.nextNode(),o++)}return j.currentNode=w,r}v(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}(r,this),e=t.u(this.options);t.v(s),this.$(e),this._$AH=t}}_$AC(t){let e=D.get(t.strings);return void 0===e&&D.set(t.strings,e=new B(t)),e}T(t){O(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new K(this.k(U()),this.k(U()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class q{constructor(t,e,s,i,r){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=W}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const r=this.strings;let n=!1;if(void 0===r)t=V(this,t,e,0),n=!P(t)||t!==this._$AH&&t!==L,n&&(this._$AH=t);else{const i=t;let o,l;for(t=r[0],o=0;o<r.length-1;o++)l=V(this,i[s+o],e,o),l===L&&(l=this._$AH[o]),n||(n=!P(l)||l!==this._$AH[o]),l===W?t=W:t!==W&&(t+=(l??"")+r[o+1]),this._$AH[o]=l}n&&!i&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class J extends q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}const Y=y?y.emptyScript:"";class Z extends q{constructor(){super(...arguments),this.type=4}j(t){t&&t!==W?this.element.setAttribute(this.name,Y):this.element.removeAttribute(this.name)}}class Q extends q{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){var s;if((t=null!==(s=V(this,t,e,0))&&void 0!==s?s:W)===L)return;const i=this._$AH,r=t===W&&i!==W||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==W&&(i===W||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class F{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){V(this,t)}}const X=$.litHtmlPolyfillSupport;null==X||X(B,K),(null!==(f=$.litHtmlVersions)&&void 0!==f?f:$.litHtmlVersions=[]).push("2.7.4");var tt,et;let st=class extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{var i,r;const n=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:e;let o=n._$litPart$;if(void 0===o){const t=null!==(r=null==s?void 0:s.renderBefore)&&void 0!==r?r:null;n._$litPart$=o=new K(e.insertBefore(U(),t),t,void 0,s??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return L}};st.finalized=!0,st._$litElement$=!0,null===(tt=globalThis.litElementHydrateSupport)||void 0===tt||tt.call(globalThis,{LitElement:st});const it=globalThis.litElementPolyfillSupport;null==it||it({LitElement:st}),(null!==(et=globalThis.litElementVersions)&&void 0!==et?et:globalThis.litElementVersions=[]).push("3.3.2");const rt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(s){s.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(s){s.createProperty(e.key,t)}};function nt(t){return(e,s)=>void 0!==s?((t,e,s)=>{e.constructor.createProperty(s,t)})(t,e,s):rt(t,e)}var ot;null===(ot=window.HTMLSlotElement)||void 0===ot||ot.prototype.assignedElements;const lt=2;let at=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};const ht=(t,e)=>{var s,i;const r=t._$AN;if(void 0===r)return!1;for(const n of r)null===(i=(s=n)._$AO)||void 0===i||i.call(s,e,!1),ht(n,e);return!0},ct=t=>{let e,s;do{if(void 0===(e=t._$AM))break;s=e._$AN,s.delete(t),t=e}while(0===(null==s?void 0:s.size))},dt=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(void 0===s)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),gt(e)}};function ut(t){void 0!==this._$AN?(ct(this),this._$AM=t,dt(this)):this._$AM=t}function pt(t,e=!1,s=0){const i=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(e)if(Array.isArray(i))for(let n=s;n<i.length;n++)ht(i[n],!1),ct(i[n]);else null!=i&&(ht(i,!1),ct(i));else ht(this,t)}const gt=t=>{var e,s,i,r;t.type==lt&&(null!==(e=(i=t)._$AP)&&void 0!==e||(i._$AP=pt),null!==(s=(r=t)._$AQ)&&void 0!==s||(r._$AQ=ut))};class mt extends at{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),dt(this),this.isConnected=t._$AU}_$AO(t,e=!0){var s,i;t!==this.isConnected&&(this.isConnected=t,t?null===(s=this.reconnected)||void 0===s||s.call(this):null===(i=this.disconnected)||void 0===i||i.call(this)),e&&(ht(this,t),ct(this))}setValue(t){if((t=>void 0===t.strings)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}class vt{}const _t=new WeakMap,ft=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends mt{render(t){return W}update(t,[e]){var s;const i=e!==this.G;return i&&void 0!==this.G&&this.ot(void 0),(i||this.rt!==this.lt)&&(this.G=e,this.ct=null===(s=t.options)||void 0===s?void 0:s.host,this.ot(this.lt=t.element)),W}ot(t){var e;if("function"==typeof this.G){const s=null!==(e=this.ct)&&void 0!==e?e:globalThis;let i=_t.get(s);void 0===i&&(i=new WeakMap,_t.set(s,i)),void 0!==i.get(this.G)&&this.G.call(this.ct,void 0),i.set(this.G,t),void 0!==t&&this.G.call(this.ct,t)}else this.G.value=t}get rt(){var t,e,s;return"function"==typeof this.G?null===(e=_t.get(null!==(t=this.ct)&&void 0!==t?t:globalThis))||void 0===e?void 0:e.get(this.G):null===(s=this.G)||void 0===s?void 0:s.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var $t=Object.defineProperty,yt=Object.getOwnPropertyDescriptor,At=(t,e,s,i)=>{for(var r,n=i>1?void 0:i?yt(e,s):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&$t(e,s,n),n};e.GiscusWidget=class extends st{constructor(){super(),this.GISCUS_SESSION_KEY="giscus-session",this.GISCUS_DEFAULT_HOST="https://giscus.app",this.ERROR_SUGGESTION="Please consider reporting this error at https://github.com/giscus/giscus/issues/new.",this.__session="",this._iframeRef=new vt,this.messageEventHandler=this.handleMessageEvent.bind(this),this.hasLoaded=!1,this.host=this.GISCUS_DEFAULT_HOST,this.strict="0",this.reactionsEnabled="1",this.emitMetadata="0",this.inputPosition="bottom",this.theme="light",this.lang="en",this.loading="eager",this.setupSession(),window.addEventListener("message",this.messageEventHandler)}get iframeRef(){var t;return null==(t=this._iframeRef)?void 0:t.value}get _host(){try{return new URL(this.host),this.host}catch{return this.GISCUS_DEFAULT_HOST}}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("message",this.messageEventHandler)}_formatError(t){return`[giscus] An error occurred. Error message: "${t}".`}setupSession(){const t=location.href,e=new URL(t),s=localStorage.getItem(this.GISCUS_SESSION_KEY),i=e.searchParams.get("giscus")||"";if(this.__session="",i)return localStorage.setItem(this.GISCUS_SESSION_KEY,JSON.stringify(i)),this.__session=i,e.searchParams.delete("giscus"),e.hash="",void history.replaceState(void 0,document.title,e.toString());if(s)try{this.__session=JSON.parse(s)}catch(r){localStorage.removeItem(this.GISCUS_SESSION_KEY),console.warn(`${this._formatError(null==r?void 0:r.message)} Session has been cleared.`)}}signOut(){localStorage.removeItem(this.GISCUS_SESSION_KEY),this.__session="",this.update(new Map)}handleMessageEvent(t){if(t.origin!==this._host)return;const{data:e}=t;if("object"!=typeof e||!e.giscus)return;if(this.iframeRef&&e.giscus.resizeHeight&&(this.iframeRef.style.height=`${e.giscus.resizeHeight}px`),e.giscus.signOut)return console.log("[giscus] User has logged out. Session has been cleared."),void this.signOut();if(!e.giscus.error)return;const s=e.giscus.error;if(s.includes("Bad credentials")||s.includes("Invalid state value")||s.includes("State has expired")){if(null!==localStorage.getItem(this.GISCUS_SESSION_KEY))return console.warn(`${this._formatError(s)} Session has been cleared.`),void this.signOut();console.error(`${this._formatError(s)} No session is stored initially. ${this.ERROR_SUGGESTION}`)}s.includes("Discussion not found")?console.warn(`[giscus] ${s}. A new discussion will be created if a comment/reaction is submitted.`):console.error(`${this._formatError(s)} ${this.ERROR_SUGGESTION}`)}sendMessage(t){!this.iframeRef||!this.iframeRef.contentWindow||!this.hasLoaded||(console.log({host:this.host,_host:this._host}),this.iframeRef.contentWindow.postMessage({giscus:t},this._host))}updateConfig(){const t={setConfig:{repo:this.repo,repoId:this.repoId,category:this.category,categoryId:this.categoryId,term:this.getTerm(),number:+this.getNumber(),strict:"1"===this.strict,reactionsEnabled:"1"===this.reactionsEnabled,emitMetadata:"1"===this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,lang:this.lang}};this.sendMessage(t)}firstUpdated(){var t;null==(t=this.iframeRef)||t.addEventListener("load",(()=>{var t;null==(t=this.iframeRef)||t.classList.remove("loading"),this.hasLoaded=!0,this.updateConfig()}))}requestUpdate(t,e,s){this.hasUpdated&&"host"!==t?this.updateConfig():super.requestUpdate(t,e,s)}getMetaContent(t,e=!1){const s=e?`meta[property='og:${t}'],`:"",i=document.querySelector(s+`meta[name='${t}']`);return i?i.content:""}_getCleanedUrl(){const t=new URL(location.href);return t.searchParams.delete("giscus"),t.hash="",t}getTerm(){switch(this.mapping){case"url":return`${this._getCleanedUrl()}`;case"title":return document.title;case"og:title":return this.getMetaContent("title",!0);case"specific":return this.term||"";case"number":return"";default:return location.pathname.length<2?"index":location.pathname.substring(1).replace(/\.\w+$/,"")}}getNumber(){return"number"===this.mapping&&this.term||""}getIframeSrc(){const t=this._getCleanedUrl().toString(),e=`${t}${this.id?"#"+this.id:""}`,s=this.getMetaContent("description",!0),i=this.getMetaContent("giscus:backlink")||t,r={origin:e,session:this.__session,repo:this.repo,repoId:this.repoId||"",category:this.category||"",categoryId:this.categoryId||"",term:this.getTerm(),number:this.getNumber(),strict:this.strict,reactionsEnabled:this.reactionsEnabled,emitMetadata:this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,description:s,backLink:i};return`${this._host}${this.lang?`/${this.lang}`:""}/widget?${new URLSearchParams(r)}`}render(){return G`
      <iframe
        title="Comments"
        scrolling="no"
        class="loading"
        ${ft(this._iframeRef)}
        src=${this.getIframeSrc()}
        loading=${this.loading}
        allow="clipboard-write"
        part="iframe"
      ></iframe>
    `}},e.GiscusWidget.styles=((t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new o(s,t,r)})`
    :host,
    iframe {
      width: 100%;
      border: none;
      min-height: 150px;
      color-scheme: light dark;
    }

    iframe.loading {
      opacity: 0;
    }
  `,At([nt({reflect:!0})],e.GiscusWidget.prototype,"host",2),At([nt({reflect:!0})],e.GiscusWidget.prototype,"repo",2),At([nt({reflect:!0})],e.GiscusWidget.prototype,"repoId",2),At([nt({reflect:!0})],e.GiscusWidget.prototype,"category",2),At([nt({reflect:!0})],e.GiscusWidget.prototype,"categoryId",2),At([nt({reflect:!0})],e.GiscusWidget.prototype,"mapping",2),At([nt({reflect:!0})],e.GiscusWidget.prototype,"term",2),At([nt({reflect:!0})],e.GiscusWidget.prototype,"strict",2),At([nt({reflect:!0})],e.GiscusWidget.prototype,"reactionsEnabled",2),At([nt({reflect:!0})],e.GiscusWidget.prototype,"emitMetadata",2),At([nt({reflect:!0})],e.GiscusWidget.prototype,"inputPosition",2),At([nt({reflect:!0})],e.GiscusWidget.prototype,"theme",2),At([nt({reflect:!0})],e.GiscusWidget.prototype,"lang",2),At([nt({reflect:!0})],e.GiscusWidget.prototype,"loading",2),e.GiscusWidget=At([function(t){return customElements.get(t)?t=>t:(t=>e=>{return"function"==typeof e?(s=t,i=e,customElements.define(s,i),i):((t,e)=>{const{kind:s,elements:i}=e;return{kind:s,elements:i,finisher(e){customElements.define(t,e)}}})(t,e);var s,i})(t)}("giscus-widget")],e.GiscusWidget)},8071:function(t,e,s){const i=s(5893),r=s(7294);t.exports=function({id:t,host:e,repo:n,repoId:o,category:l,categoryId:a,mapping:h,term:c,strict:d,reactionsEnabled:u,emitMetadata:p,inputPosition:g,theme:m,lang:v,loading:_}){const[f,$]=r.useState(!1);return r.useEffect((()=>{f||(Promise.resolve().then((()=>s(6050))),$(!0))}),[]),f?i.jsx("giscus-widget",{id:t,host:e,repo:n,repoid:o,category:l,categoryid:a,mapping:h,term:c,strict:d,reactionsenabled:u,emitmetadata:p,inputposition:g,theme:m,lang:v,loading:_}):null}},8771:function(t,e,s){var i=s(7294),r=s(1883);e.Z=()=>{var t,e;const s=(0,r.useStaticQuery)("3257411868");null===(t=s.site.siteMetadata)||void 0===t||t.author,null===(e=s.site.siteMetadata)||void 0===e||e.social;return i.createElement("div",{className:"bio"})}},7686:function(t,e,s){s.r(e),s.d(e,{Head:function(){return h},default:function(){return c}});var i=s(7294),r=s(1883),n=s(8071),o=s(8771),l=s(8678),a=s(9357);const h=t=>{let{data:{markdownRemark:e}}=t;return i.createElement(a.Z,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt})};var c=t=>{var e;let{data:{previous:s,next:a,site:h,markdownRemark:c},location:d}=t;const u=(null===(e=h.siteMetadata)||void 0===e?void 0:e.title)||"Title";return i.createElement(l.Z,{location:d,title:u},i.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},i.createElement("header",null,i.createElement("div",{className:"post-icon"},c.frontmatter.icon),i.createElement("span",{className:"post-tag",style:{padding:"5px 10px 5px 10px"}},c.frontmatter.category),i.createElement("h2",{itemProp:"headline"},c.frontmatter.title),i.createElement("p",{className:"post-date"},c.frontmatter.date),i.createElement("p",null,c.frontmatter.description)),i.createElement("hr",null),i.createElement("br",null),i.createElement("br",null),i.createElement("section",{dangerouslySetInnerHTML:{__html:c.html},itemProp:"articleBody"}),i.createElement("br",null),i.createElement("br",null),i.createElement("br",null),i.createElement("footer",null,i.createElement(o.Z,null))),i.createElement("nav",{className:"blog-post-nav"},i.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},i.createElement("li",null,s&&i.createElement(r.Link,{to:s.fields.slug,rel:"prev"},"← ",s.frontmatter.title)),i.createElement("li",null,a&&i.createElement(r.Link,{to:a.fields.slug,rel:"next"},a.frontmatter.title," →")))),i.createElement("br",null),i.createElement("br",null),i.createElement(n,{id:"comments",repo:"klloo/blog-comments",repoId:"R_kgDOJ8WpOQ",category:"General",categoryId:"DIC_kwDOJ8WpOc4CX7sW",mapping:"pathname",strict:"0",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"bottom",theme:"preferred_color_scheme",lang:"ko",crossorigin:"anonymous",async:!0}))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-82517d7b9fa4d2441e1c.js.map