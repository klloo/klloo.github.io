"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[989],{8771:function(e,t,a){var n=a(7294),l=a(1883);t.Z=()=>{var e,t;const a=(0,l.useStaticQuery)("3257411868");null===(e=a.site.siteMetadata)||void 0===e||e.author,null===(t=a.site.siteMetadata)||void 0===t||t.social;return n.createElement("div",{className:"bio"})}},8678:function(e,t,a){var n=a(7294),l=a(1883);t.Z=e=>{let{location:t,title:a,children:r}=e;const i="/"===t.pathname;let c;return c=i?n.createElement("h1",{className:"main-heading"},n.createElement(l.Link,{to:"/"},a," ✨")):n.createElement(l.Link,{className:"header-link-home",to:"/"},a," ✨"),n.createElement("div",{className:"global-wrapper","data-is-root-path":i},n.createElement("header",{className:"global-header"},n.createElement("div",null,c),n.createElement("div",null)),n.createElement("hr",null),n.createElement("main",null,r),n.createElement("footer",null))}},9357:function(e,t,a){var n=a(7294),l=a(1883);t.Z=e=>{var t,a,r;let{description:i,title:c,children:o}=e;const{site:m}=(0,l.useStaticQuery)("2841359383"),s=i||m.siteMetadata.description;null===(t=m.siteMetadata)||void 0===t||t.title;return n.createElement(n.Fragment,null,n.createElement("title",null,c," "),n.createElement("meta",{name:"description",content:s}),n.createElement("meta",{property:"og:title",content:c}),n.createElement("meta",{property:"og:description",content:s}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{name:"twitter:card",content:"summary"}),n.createElement("meta",{name:"twitter:creator",content:(null===(a=m.siteMetadata)||void 0===a||null===(r=a.social)||void 0===r?void 0:r.twitter)||""}),n.createElement("meta",{name:"twitter:title",content:c}),n.createElement("meta",{name:"twitter:description",content:s}),o)}},4982:function(e,t,a){a.r(t),a.d(t,{Head:function(){return o}});var n=a(7294),l=a(1883),r=a(8771),i=a(8678),c=a(9357);const o=e=>{let{data:{markdownRemark:t}}=e;return n.createElement(c.Z,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt})};t.default=e=>{var t;let{data:{previous:a,next:c,site:o,markdownRemark:m},location:s}=e;const d=(null===(t=o.siteMetadata)||void 0===t?void 0:t.title)||"Title";return n.createElement(i.Z,{location:s,title:d},n.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},n.createElement("header",null,n.createElement("h1",{itemProp:"headline"},m.frontmatter.title),n.createElement("p",null,m.frontmatter.date)),n.createElement("section",{dangerouslySetInnerHTML:{__html:m.html},itemProp:"articleBody"}),n.createElement("hr",null),n.createElement("footer",null,n.createElement(r.Z,null))),n.createElement("nav",{className:"blog-post-nav"},n.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},n.createElement("li",null,a&&n.createElement(l.Link,{to:a.fields.slug,rel:"prev"},"← ",a.frontmatter.title)),n.createElement("li",null,c&&n.createElement(l.Link,{to:c.fields.slug,rel:"next"},c.frontmatter.title," →")))))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-bc20ac1043c94d07aff4.js.map