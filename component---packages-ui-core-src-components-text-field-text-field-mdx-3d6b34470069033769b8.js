(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"7H6f":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return n})),a.d(t,"default",(function(){return u}));a("5hJT"),a("W1QL"),a("K/PF"),a("t91x"),a("75LO"),a("PJhk");var r=a("/FXl"),i=a("TjRS"),d=a("ZFoC"),p=a("t12Y"),l=a("o9Sn");a("aD51");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var n={};void 0!==n&&n&&n===Object(n)&&Object.isExtensible(n)&&!n.hasOwnProperty("__filemeta")&&Object.defineProperty(n,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"packages/ui-core/src/components/TextField/TextField.mdx"}});var c={_frontmatter:n},x=i.a;function u(e){var t,a,u,T,b,s,m,y,F,_,f,O,j,g,W,P,h,v,D=e.components,L=function(e,t){if(null==e)return{};var a,r,i={},d=Object.keys(e);for(r=0;r<d.length;r++)a=d[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(r.b)(x,o({},c,L,{components:D,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"textfield"},"TextField"),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)(d.d,{of:p.a,mdxType:"Props"}),Object(r.b)("h2",{id:"basic-usage"},"Basic usage"),Object(r.b)(d.c,{__position:1,__code:'<TextFieldWrapper>\n  <TextField name="name" />\n</TextFieldWrapper>',__scope:(t={props:L,DefaultLayout:i.a,Playground:d.c,Props:d.d,TextField:p.a,TextFieldWrapper:l.a},t.DefaultLayout=i.a,t._frontmatter=n,t),mdxType:"Playground"},Object(r.b)(l.a,{mdxType:"TextFieldWrapper"},Object(r.b)(p.a,{name:"name",mdxType:"TextField"}))),Object(r.b)("h2",{id:"required-field"},"Required field"),Object(r.b)(d.c,{__position:2,__code:'<TextFieldWrapper>\n  <TextField name="name" required label="Номер телефона" />\n</TextFieldWrapper>',__scope:(a={props:L,DefaultLayout:i.a,Playground:d.c,Props:d.d,TextField:p.a,TextFieldWrapper:l.a},a.DefaultLayout=i.a,a._frontmatter=n,a),mdxType:"Playground"},Object(r.b)(l.a,{mdxType:"TextFieldWrapper"},Object(r.b)(p.a,{name:"name",required:!0,label:"Номер телефона",mdxType:"TextField"}))),Object(r.b)("h2",{id:"mask-usage"},"Mask usage"),Object(r.b)(d.c,{__position:3,__code:'<TextFieldWrapper>\n  <TextField\n    placeholder="+7 (999) 999-99-99"\n    mask="+7 (999) 999-99-99"\n    maskChar="_"\n    label="Phone number"\n    id="2"\n  />\n</TextFieldWrapper>',__scope:(u={props:L,DefaultLayout:i.a,Playground:d.c,Props:d.d,TextField:p.a,TextFieldWrapper:l.a},u.DefaultLayout=i.a,u._frontmatter=n,u),mdxType:"Playground"},Object(r.b)(l.a,{mdxType:"TextFieldWrapper"},Object(r.b)(p.a,{placeholder:"+7 (999) 999-99-99",mask:"+7 (999) 999-99-99",maskChar:"_",label:"Phone number",id:"2",mdxType:"TextField"}))),Object(r.b)("h2",{id:"error-usage"},"Error usage"),Object(r.b)(d.c,{__position:4,__code:'<TextFieldWrapper>\n  <TextField verification="error" noticeText="Name is required" />\n</TextFieldWrapper>',__scope:(T={props:L,DefaultLayout:i.a,Playground:d.c,Props:d.d,TextField:p.a,TextFieldWrapper:l.a},T.DefaultLayout=i.a,T._frontmatter=n,T),mdxType:"Playground"},Object(r.b)(l.a,{mdxType:"TextFieldWrapper"},Object(r.b)(p.a,{verification:"error",noticeText:"Name is required",mdxType:"TextField"}))),Object(r.b)("h2",{id:"valid-usage"},"Valid usage"),Object(r.b)(d.c,{__position:5,__code:'<TextFieldWrapper>\n  <TextField verification="valid" />\n</TextFieldWrapper>',__scope:(b={props:L,DefaultLayout:i.a,Playground:d.c,Props:d.d,TextField:p.a,TextFieldWrapper:l.a},b.DefaultLayout=i.a,b._frontmatter=n,b),mdxType:"Playground"},Object(r.b)(l.a,{mdxType:"TextFieldWrapper"},Object(r.b)(p.a,{verification:"valid",mdxType:"TextField"}))),Object(r.b)("h2",{id:"comment-usage"},"Comment usage"),Object(r.b)(d.c,{__position:6,__code:'<TextFieldWrapper>\n  <TextField noticeText="Comment" />\n</TextFieldWrapper>',__scope:(s={props:L,DefaultLayout:i.a,Playground:d.c,Props:d.d,TextField:p.a,TextFieldWrapper:l.a},s.DefaultLayout=i.a,s._frontmatter=n,s),mdxType:"Playground"},Object(r.b)(l.a,{mdxType:"TextFieldWrapper"},Object(r.b)(p.a,{noticeText:"Comment",mdxType:"TextField"}))),Object(r.b)("h2",{id:"success-text-usage"},"Success text usage"),Object(r.b)(d.c,{__position:7,__code:'<TextFieldWrapper>\n  <TextField\n    hideIcon={true}\n    verification="valid"\n    noticeText="Field is correct"\n  />\n</TextFieldWrapper>',__scope:(m={props:L,DefaultLayout:i.a,Playground:d.c,Props:d.d,TextField:p.a,TextFieldWrapper:l.a},m.DefaultLayout=i.a,m._frontmatter=n,m),mdxType:"Playground"},Object(r.b)(l.a,{mdxType:"TextFieldWrapper"},Object(r.b)(p.a,{hideIcon:!0,verification:"valid",noticeText:"Field is correct",mdxType:"TextField"}))),Object(r.b)("h2",{id:"max-length-text-usage"},"Max length text usage"),Object(r.b)(d.c,{__position:8,__code:"<TextFieldWrapper>\n  <TextField maxLength={10} />\n</TextFieldWrapper>",__scope:(y={props:L,DefaultLayout:i.a,Playground:d.c,Props:d.d,TextField:p.a,TextFieldWrapper:l.a},y.DefaultLayout=i.a,y._frontmatter=n,y),mdxType:"Playground"},Object(r.b)(l.a,{mdxType:"TextFieldWrapper"},Object(r.b)(p.a,{maxLength:10,mdxType:"TextField"}))),Object(r.b)("h2",{id:"disable-usage"},"Disable usage"),Object(r.b)(d.c,{__position:9,__code:"<TextFieldWrapper>\n  <TextField disabled={true} />\n</TextFieldWrapper>",__scope:(F={props:L,DefaultLayout:i.a,Playground:d.c,Props:d.d,TextField:p.a,TextFieldWrapper:l.a},F.DefaultLayout=i.a,F._frontmatter=n,F),mdxType:"Playground"},Object(r.b)(l.a,{mdxType:"TextFieldWrapper"},Object(r.b)(p.a,{disabled:!0,mdxType:"TextField"}))),Object(r.b)("h2",{id:"password-type-usage"},"Password type usage"),Object(r.b)(d.c,{__position:10,__code:'<TextFieldWrapper>\n  <TextField name="name" placeholder="password" type="password" />\n</TextFieldWrapper>',__scope:(_={props:L,DefaultLayout:i.a,Playground:d.c,Props:d.d,TextField:p.a,TextFieldWrapper:l.a},_.DefaultLayout=i.a,_._frontmatter=n,_),mdxType:"Playground"},Object(r.b)(l.a,{mdxType:"TextFieldWrapper"},Object(r.b)(p.a,{name:"name",placeholder:"password",type:"password",mdxType:"TextField"}))),Object(r.b)("h2",{id:"with-externally-set-value"},"With externally set value"),Object(r.b)(d.c,{__position:11,__code:'<TextFieldWrapper>\n  <TextField value="initial value" />\n</TextFieldWrapper>',__scope:(f={props:L,DefaultLayout:i.a,Playground:d.c,Props:d.d,TextField:p.a,TextFieldWrapper:l.a},f.DefaultLayout=i.a,f._frontmatter=n,f),mdxType:"Playground"},Object(r.b)(l.a,{mdxType:"TextFieldWrapper"},Object(r.b)(p.a,{value:"initial value",mdxType:"TextField"}))),Object(r.b)("h2",{id:""}),Object(r.b)("h1",{id:"textarea-view"},"Textarea view"),Object(r.b)("p",null,"The ",Object(r.b)("strong",{parentName:"p"},"multiline")," property set to ",Object(r.b)("strong",{parentName:"p"},"true")," changes TextField to textarea-like view."),Object(r.b)("h2",{id:"basic-usage-1"},"Basic usage"),Object(r.b)(d.c,{__position:12,__code:'<TextFieldWrapper>\n  <TextField name="name" multiline={true} />\n</TextFieldWrapper>',__scope:(O={props:L,DefaultLayout:i.a,Playground:d.c,Props:d.d,TextField:p.a,TextFieldWrapper:l.a},O.DefaultLayout=i.a,O._frontmatter=n,O),mdxType:"Playground"},Object(r.b)(l.a,{mdxType:"TextFieldWrapper"},Object(r.b)(p.a,{name:"name",multiline:!0,mdxType:"TextField"}))),Object(r.b)("h2",{id:"required-usage"},"Required usage"),Object(r.b)(d.c,{__position:13,__code:'<TextFieldWrapper>\n  <TextField label="Required field" multiline={true} required />\n</TextFieldWrapper>',__scope:(j={props:L,DefaultLayout:i.a,Playground:d.c,Props:d.d,TextField:p.a,TextFieldWrapper:l.a},j.DefaultLayout=i.a,j._frontmatter=n,j),mdxType:"Playground"},Object(r.b)(l.a,{mdxType:"TextFieldWrapper"},Object(r.b)(p.a,{label:"Required field",multiline:!0,required:!0,mdxType:"TextField"}))),Object(r.b)("h2",{id:"error-usage-1"},"Error usage"),Object(r.b)(d.c,{__position:14,__code:'<TextFieldWrapper>\n  <TextField\n    label="Notice"\n    id="1"\n    verification="error"\n    noticeText="Name is required"\n    multiline={true}\n  />\n</TextFieldWrapper>',__scope:(g={props:L,DefaultLayout:i.a,Playground:d.c,Props:d.d,TextField:p.a,TextFieldWrapper:l.a},g.DefaultLayout=i.a,g._frontmatter=n,g),mdxType:"Playground"},Object(r.b)(l.a,{mdxType:"TextFieldWrapper"},Object(r.b)(p.a,{label:"Notice",id:"1",verification:"error",noticeText:"Name is required",multiline:!0,mdxType:"TextField"}))),Object(r.b)("h2",{id:"valid-usage-1"},"Valid usage"),Object(r.b)(d.c,{__position:15,__code:'<TextFieldWrapper>\n  <TextField verification="valid" multiline={true} />\n</TextFieldWrapper>',__scope:(W={props:L,DefaultLayout:i.a,Playground:d.c,Props:d.d,TextField:p.a,TextFieldWrapper:l.a},W.DefaultLayout=i.a,W._frontmatter=n,W),mdxType:"Playground"},Object(r.b)(l.a,{mdxType:"TextFieldWrapper"},Object(r.b)(p.a,{verification:"valid",multiline:!0,mdxType:"TextField"}))),Object(r.b)("h2",{id:"comment-usage-1"},"Comment usage"),Object(r.b)(d.c,{__position:16,__code:'<TextFieldWrapper>\n  <TextField noticeText="Comment" multiline={true} />\n</TextFieldWrapper>',__scope:(P={props:L,DefaultLayout:i.a,Playground:d.c,Props:d.d,TextField:p.a,TextFieldWrapper:l.a},P.DefaultLayout=i.a,P._frontmatter=n,P),mdxType:"Playground"},Object(r.b)(l.a,{mdxType:"TextFieldWrapper"},Object(r.b)(p.a,{noticeText:"Comment",multiline:!0,mdxType:"TextField"}))),Object(r.b)("h2",{id:"success-text-usage-1"},"Success text usage"),Object(r.b)(d.c,{__position:17,__code:'<TextFieldWrapper>\n  <TextField\n    verification="valid"\n    noticeText="Field passed validation"\n    multiline={true}\n  />\n</TextFieldWrapper>',__scope:(h={props:L,DefaultLayout:i.a,Playground:d.c,Props:d.d,TextField:p.a,TextFieldWrapper:l.a},h.DefaultLayout=i.a,h._frontmatter=n,h),mdxType:"Playground"},Object(r.b)(l.a,{mdxType:"TextFieldWrapper"},Object(r.b)(p.a,{verification:"valid",noticeText:"Field passed validation",multiline:!0,mdxType:"TextField"}))),Object(r.b)("h2",{id:"disable-usage-1"},"Disable usage"),Object(r.b)(d.c,{__position:18,__code:"<TextFieldWrapper>\n  <TextField disabled multiline={true} />\n</TextFieldWrapper>",__scope:(v={props:L,DefaultLayout:i.a,Playground:d.c,Props:d.d,TextField:p.a,TextFieldWrapper:l.a},v.DefaultLayout=i.a,v._frontmatter=n,v),mdxType:"Playground"},Object(r.b)(l.a,{mdxType:"TextFieldWrapper"},Object(r.b)(p.a,{disabled:!0,multiline:!0,mdxType:"TextField"}))))}void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"packages/ui-core/src/components/TextField/TextField.mdx"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-ui-core-src-components-text-field-text-field-mdx-3d6b34470069033769b8.js.map