"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{8771:function(e,t,a){var l=a(7294),n=a(1883);t.Z=()=>{var e,t;const a=(0,n.useStaticQuery)("3257411868");null===(e=a.site.siteMetadata)||void 0===e||e.author,null===(t=a.site.siteMetadata)||void 0===t||t.social;return l.createElement("div",{className:"bio"})}},8678:function(e,t,a){var l=a(7294),n=a(1883);t.Z=e=>{let{location:t,title:a,children:r}=e;const i="/"===t.pathname;let c;return c=i?l.createElement("h1",{className:"main-heading"},l.createElement(n.Link,{to:"/"},a," ✨")):l.createElement(n.Link,{className:"header-link-home",to:"/"},a," ✨"),l.createElement("div",{className:"global-wrapper","data-is-root-path":i},l.createElement("header",{className:"global-header"},l.createElement("div",null,c),l.createElement("div",null)),l.createElement("hr",null),l.createElement("main",null,r),l.createElement("footer",null))}},9357:function(e,t,a){var l=a(7294),n=a(1883);t.Z=e=>{var t,a,r;let{description:i,title:c,children:o}=e;const{site:m}=(0,n.useStaticQuery)("2841359383"),s=i||m.siteMetadata.description;null===(t=m.siteMetadata)||void 0===t||t.title;return l.createElement(l.Fragment,null,l.createElement("title",null,c," "),l.createElement("meta",{name:"description",content:s}),l.createElement("meta",{property:"og:title",content:c}),l.createElement("meta",{property:"og:description",content:s}),l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{name:"twitter:card",content:"summary"}),l.createElement("meta",{name:"twitter:creator",content:(null===(a=m.siteMetadata)||void 0===a||null===(r=a.social)||void 0===r?void 0:r.twitter)||""}),l.createElement("meta",{name:"twitter:title",content:c}),l.createElement("meta",{name:"twitter:description",content:s}),o)}},6558:function(e,t,a){a.r(t),a.d(t,{Head:function(){return m}});var l=a(5785),n=a(7294),r=a(1883),i=a(8771),c=a(8678),o=a(9357);t.default=e=>{var t;let{data:a,location:o}=e;const m=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",s=a.allMarkdownRemark.nodes,u=[{fieldValue:"전체보기",totalCount:s.length}].concat((0,l.Z)(a.categories.group)),{0:d,1:E}=(0,n.useState)((0,l.Z)(s)),{0:p,1:g}=(0,n.useState)("전체보기"),f=(0,n.useCallback)((e=>{g(e.target.value)}),[]);return(0,n.useEffect)((()=>{E("전체보기"===p?(0,l.Z)(s):(0,l.Z)(s.filter((e=>e.frontmatter.category===p))))}),[p]),n.createElement(c.Z,{location:o,title:m},n.createElement(i.Z,null),d.length," 개의 글",n.createElement("div",{className:"tag-wrapper"},u.map((e=>n.createElement("button",{className:"tag-button",key:e.fieldValue,onClick:f,value:e.fieldValue},e.fieldValue)))),n.createElement("ol",{style:{listStyle:"none"}},d.map((e=>{const t=e.frontmatter.title||e.fields.slug;return n.createElement("li",{key:e.fields.slug},n.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},n.createElement("header",null,n.createElement("h2",null,n.createElement(r.Link,{to:e.fields.slug,itemProp:"url"},n.createElement("span",{itemProp:"headline"},t))),n.createElement("small",null,e.frontmatter.date)),n.createElement("section",null,n.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))};const m=()=>n.createElement(o.Z,{title:"Huiy's Blog"})}}]);
//# sourceMappingURL=component---src-pages-index-js-13fdb63583deb9453f7c.js.map