(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{DV34:function(e,o,c){"use strict";c.r(o),c.d(o,"_frontmatter",(function(){return d})),c.d(o,"default",(function(){return C}));c("5hJT"),c("W1QL"),c("K/PF"),c("t91x"),c("75LO"),c("PJhk");var a=c("/FXl"),r=c("TjRS"),n=c("ZFoC"),t=c("e2gH"),b=c("7It2"),h=c("Ruza");c("aD51");function p(){return(p=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var c=arguments[o];for(var a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a])}return e}).apply(this,arguments)}var d={};void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"packages/ui-core/src/components/Checkbox/Checkbox.mdx"}});var k={_frontmatter:d},x=r.a;function C(e){var o,c,C,i,l,u,g,s=e.components,f=function(e,o){if(null==e)return{};var c,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)c=n[a],o.indexOf(c)>=0||(r[c]=e[c]);return r}(e,["components"]);return Object(a.b)(x,p({},k,f,{components:s,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"checkbox"},"Checkbox"),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)(n.d,{of:t.a,mdxType:"Props"}),Object(a.b)("h2",{id:"basic-usage"},"Basic usage"),Object(a.b)(n.c,{__position:1,__code:"<CheckboxWrapper>\n  {({ checked, onChange }) => (\n    <Checkbox checked={checked} onChange={onChange}>\n      I agree\n    </Checkbox>\n  )}\n</CheckboxWrapper>",__scope:(o={props:f,DefaultLayout:r.a,Playground:n.c,Props:n.d,Checkbox:t.a,Info:b.default,CheckboxWrapper:h.a,LightColorWrapper:h.b},o.DefaultLayout=r.a,o._frontmatter=d,o),mdxType:"Playground"},Object(a.b)(h.a,{mdxType:"CheckboxWrapper"},(function(e){var o=e.checked,c=e.onChange;return Object(a.b)(t.a,{checked:o,onChange:c,mdxType:"Checkbox"},"I agree")}))),Object(a.b)("h2",{id:"checkbox-with-small-label-size"},"Checkbox with small label size"),Object(a.b)(n.c,{__position:2,__code:'<CheckboxWrapper>\n  {({ checked, onChange }) => (\n    <Checkbox checked={checked} onChange={onChange} fontSize="small">\n      I agree\n    </Checkbox>\n  )}\n</CheckboxWrapper>',__scope:(c={props:f,DefaultLayout:r.a,Playground:n.c,Props:n.d,Checkbox:t.a,Info:b.default,CheckboxWrapper:h.a,LightColorWrapper:h.b},c.DefaultLayout=r.a,c._frontmatter=d,c),mdxType:"Playground"},Object(a.b)(h.a,{mdxType:"CheckboxWrapper"},(function(e){var o=e.checked,c=e.onChange;return Object(a.b)(t.a,{checked:o,onChange:c,fontSize:"small",mdxType:"Checkbox"},"I agree")}))),Object(a.b)("h2",{id:"checkbox-usage-with-error"},"Checkbox usage with error"),Object(a.b)(n.c,{__position:3,__code:"<CheckboxWrapper>\n  {({ checked, onChange }) => (\n    <Checkbox checked={checked} onChange={onChange} error>\n      I agree\n    </Checkbox>\n  )}\n</CheckboxWrapper>",__scope:(C={props:f,DefaultLayout:r.a,Playground:n.c,Props:n.d,Checkbox:t.a,Info:b.default,CheckboxWrapper:h.a,LightColorWrapper:h.b},C.DefaultLayout=r.a,C._frontmatter=d,C),mdxType:"Playground"},Object(a.b)(h.a,{mdxType:"CheckboxWrapper"},(function(e){var o=e.checked,c=e.onChange;return Object(a.b)(t.a,{checked:o,onChange:c,error:!0,mdxType:"Checkbox"},"I agree")}))),Object(a.b)("h2",{id:"checkbox-usage-for-light-color-scheme"},"Checkbox usage for light color scheme"),Object(a.b)(n.c,{__position:4,__code:'<LightColorWrapper>\n  <CheckboxWrapper>\n    {({ checked, onChange }) => (\n      <Checkbox checked={checked} onChange={onChange} color="light">\n        I agree\n      </Checkbox>\n    )}\n  </CheckboxWrapper>\n</LightColorWrapper>',__scope:(i={props:f,DefaultLayout:r.a,Playground:n.c,Props:n.d,Checkbox:t.a,Info:b.default,CheckboxWrapper:h.a,LightColorWrapper:h.b},i.DefaultLayout=r.a,i._frontmatter=d,i),mdxType:"Playground"},Object(a.b)(h.b,{mdxType:"LightColorWrapper"},Object(a.b)(h.a,{mdxType:"CheckboxWrapper"},(function(e){var o=e.checked,c=e.onChange;return Object(a.b)(t.a,{checked:o,onChange:c,color:"light",mdxType:"Checkbox"},"I agree")})))),Object(a.b)("h2",{id:"checkbox-with-extracontent"},"Checkbox with extraContent"),Object(a.b)(n.c,{__position:5,__code:"<CheckboxWrapper>\n  {({ checked, onChange }) => (\n    <Checkbox\n      checked={checked}\n      onChange={onChange}\n      extraContent={\n        <div\n          style={{\n            backgroundColor: '#00B956',\n            color: '#FFF',\n            padding: '5px',\n          }}\n        >\n          Some Extra Content\n        </div>\n      }\n    >\n      I agree\n    </Checkbox>\n  )}\n</CheckboxWrapper>",__scope:(l={props:f,DefaultLayout:r.a,Playground:n.c,Props:n.d,Checkbox:t.a,Info:b.default,CheckboxWrapper:h.a,LightColorWrapper:h.b},l.DefaultLayout=r.a,l._frontmatter=d,l),mdxType:"Playground"},Object(a.b)(h.a,{mdxType:"CheckboxWrapper"},(function(e){var o=e.checked,c=e.onChange;return Object(a.b)(t.a,{checked:o,onChange:c,extraContent:Object(a.b)("div",{style:{backgroundColor:"#00B956",color:"#FFF",padding:"5px"}},"Some Extra Content"),mdxType:"Checkbox"},"I agree")}))),Object(a.b)("h2",{id:"disabled-unchecked-checkbox"},"Disabled unchecked checkbox"),Object(a.b)(n.c,{__position:6,__code:"<CheckboxWrapper>\n  {() => <Checkbox disabled>I agree</Checkbox>}\n</CheckboxWrapper>",__scope:(u={props:f,DefaultLayout:r.a,Playground:n.c,Props:n.d,Checkbox:t.a,Info:b.default,CheckboxWrapper:h.a,LightColorWrapper:h.b},u.DefaultLayout=r.a,u._frontmatter=d,u),mdxType:"Playground"},Object(a.b)(h.a,{mdxType:"CheckboxWrapper"},(function(){return Object(a.b)(t.a,{disabled:!0,mdxType:"Checkbox"},"I agree")}))),Object(a.b)("h2",{id:"disabled-checked-checkbox"},"Disabled checked checkbox"),Object(a.b)(n.c,{__position:7,__code:"<CheckboxWrapper>\n  {() => (\n    <Checkbox checked disabled>\n      I agree\n    </Checkbox>\n  )}\n</CheckboxWrapper>",__scope:(g={props:f,DefaultLayout:r.a,Playground:n.c,Props:n.d,Checkbox:t.a,Info:b.default,CheckboxWrapper:h.a,LightColorWrapper:h.b},g.DefaultLayout=r.a,g._frontmatter=d,g),mdxType:"Playground"},Object(a.b)(h.a,{mdxType:"CheckboxWrapper"},(function(){return Object(a.b)(t.a,{checked:!0,disabled:!0,mdxType:"Checkbox"},"I agree")}))))}void 0!==C&&C&&C===Object(C)&&Object.isExtensible(C)&&!C.hasOwnProperty("__filemeta")&&Object.defineProperty(C,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"packages/ui-core/src/components/Checkbox/Checkbox.mdx"}}),C.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-ui-core-src-components-checkbox-checkbox-mdx-7f682f03c8ad9238f0a1.js.map