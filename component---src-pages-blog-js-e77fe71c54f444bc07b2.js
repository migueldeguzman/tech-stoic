(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{154:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return v});var a=n(27),i=n(7),r=n.n(i),o=n(9),s=n(0),c=n.n(s),u=n(163),d=n.n(u),l=n(161),p=n(164),f=n(160),h=n.n(f),b=n(179),g=n.n(b),m=h.a.rhythm,y={name:"gx0lhm",styles:"margin-bottom:0;"},j={name:"ytumd6",styles:"text-decoration:none;"},O=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.allMarkdownRemark.edges,e=this.props.data.site.siteMetadata.title;return Object(o.a)(p.a,{location:this.props.location},Object(o.a)(d.a,{title:e}),Object(o.a)("p",{css:Object(a.a)({marginBottom:m(1.5)})},Object(o.a)("img",{src:g.a,alt:"Miguel's profile pic",css:Object(a.a)({borderRadius:"100%",float:"left",marginRight:m(.25),marginBottom:0,width:m(2),height:m(2)})}),"Art & Blog created by"," ",Object(o.a)("strong",null,this.props.data.site.siteMetadata.author)," who lives and works in Cayman Islands while trying to create a positive impact for the future and beyond.."),Object(o.a)("ul",{css:y},t.map(function(t){return Object(o.a)("li",{key:t.node.fields.slug},Object(o.a)(l.Link,{css:j,to:t.node.fields.slug},t.node.frontmatter.title))})))},e}(c.a.Component);e.default=O;var v="3883876006"},159:function(t,e,n){var a;t.exports=(a=n(162))&&a.default||a},160:function(t,e,n){var a=new(n(165))({baseFontSize:"18px",headerFontFamily:["Cooper Hewitt","sans-serif"],bodyFontFamily:["Cooper Hewitt","sans-serif"],plugins:[new(0,n(166).default)],baseLineHeight:1.45,blockMarginBottom:.85,overrideThemeStyles:function(t){var e=t.rhythm;return{a:{color:"#3A69A8"},blockquote:{marginLeft:0,paddingLeft:e(5/8),borderLeft:e(3/8)+" solid #CDE7B0"},"blockquote > *":{fontStyle:"italic"},"blockquote > h1, blockquote > h2, blockquote > h3, blockquote > h4":{marginTop:0},"li > p":{marginBottom:e(.5)},"p code":{fontSize:"75%"},"tt,code":{fontSize:"85%"},pre:{lineHeight:1.22}}}});t.exports=a},161:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return b}),n.d(e,"StaticQueryContext",function(){return p}),n.d(e,"StaticQuery",function(){return f}),n.d(e,"useStaticQuery",function(){return h});var a=n(9),i=n(0),r=n.n(i),o=n(4),s=n.n(o),c=n(36),u=n.n(c);n.d(e,"Link",function(){return u.a}),n.d(e,"withPrefix",function(){return c.withPrefix}),n.d(e,"parsePath",function(){return c.parsePath}),n.d(e,"navigate",function(){return c.navigate}),n.d(e,"push",function(){return c.push}),n.d(e,"replace",function(){return c.replace}),n.d(e,"navigateTo",function(){return c.navigateTo});var d=n(159),l=n.n(d);n.d(e,"PageRenderer",function(){return l.a});var p=r.a.createContext({}),f=function(t){return Object(a.a)(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):Object(a.a)("div",null,"Loading (StaticQuery)")})},h=function(t){r.a.useContext;var e=r.a.useContext(p);if(e[t]&&e[t].data)return e[t].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function b(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},162:function(t,e,n){"use strict";n.r(e);n(58);var a=n(0),i=n.n(a),r=n(4),o=n.n(r),s=n(59),c=n(2),u=function(t){var e=t.location,n=c.default.getResourcesForPathnameSync(e.pathname);return i.a.createElement(s.a,Object.assign({location:e,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=u},164:function(t,e,n){"use strict";var a=n(7),i=n.n(a),r=n(37),o=n.n(r),s=n(27),c=n(9),u=n(0),d=n.n(u),l=n(36),p=n.n(l),f=n(163),h=n.n(f),b=n(160),g=n.n(b),m=g.a.rhythm,y=g.a.scale,j=function(t){return Object(c.a)(p.a,o()({css:Object(s.a)({color:"inherit",textDecoration:"none"})},t))},O=function(t){function e(){return t.apply(this,arguments)||this}return i()(e,t),e.prototype.render=function(){return Object(c.a)("div",{css:Object(s.a)({minHeight:"100vh",borderTop:m(.75)+" solid #000000","@media (min-width: 420px)":{border:m(.75)+" solid #000000"}})},Object(c.a)("div",{css:Object(s.a)({minHeight:m(1)})},Object(c.a)("div",{css:Object(s.a)({float:"left",marginTop:m(.75),marginLeft:m(.75),fontSize:y(.4).fontSize,lineHeight:y(.4).lineHeight})},Object(c.a)(j,{to:"/"},"tech-stoic")),Object(c.a)("div",{css:Object(s.a)({float:"right",marginTop:m(.75),marginRight:m(.75),fontSize:y(.4).fontSize,lineHeight:y(.4).lineHeight})},Object(c.a)(j,{to:"/blog/"},"blog"),","," ",Object(c.a)(j,{to:"/about/"},"about"))),Object(c.a)("div",{css:Object(s.a)({padding:m(2)+" "+m(.75),"@media (min-width: 420px)":{padding:m(3)+" "+m(.75)},maxWidth:m(22),margin:"0 auto"})},Object(c.a)(h.a,{defaultTitle:"tech-stoic",titleTemplate:"tech-stoic | %s"}),this.props.children))},e}(d.a.Component);e.a=O},179:function(t,e,n){t.exports=n.p+"static/miguel-profile-pic-fb31e5e2db749f1b3c7f01491d02d238.jpg"}}]);
//# sourceMappingURL=component---src-pages-blog-js-e77fe71c54f444bc07b2.js.map