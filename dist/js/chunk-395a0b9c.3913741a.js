(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-395a0b9c"],{1511:function(e,t,n){"use strict";n.r(t);var c=n("6c44"),l=(n("68ef"),n("cb51"),n("3743"),n("1a04"),n("7a23")),o={class:"page User"},r={class:"fz16 tac m10 danger"},i={class:"p10"},a=Object(l["createElementVNode"])("div",null,"Log:",-1);function s(e,t,n,s,u,b){var d=c["a"];return Object(l["openBlock"])(),Object(l["createElementBlock"])("div",o,[Object(l["createVNode"])(d,{title:"打开日志",onClick:b.showConsole,"is-link":""},null,8,["onClick"]),Object(l["createVNode"])(d,{title:"调autojs方法",onClick:b.runAutoFn,"is-link":""},null,8,["onClick"]),Object(l["createVNode"])(d,{title:"执行autojs代码",onClick:b.runAutoCode,"is-link":""},null,8,["onClick"]),Object(l["createVNode"])(d,{title:"执行autojs脚本文件",onClick:b.runAutoFile,"is-link":""},null,8,["onClick"]),Object(l["createElementVNode"])("div",r,"autojs设置$store "+Object(l["toDisplayString"])(u.store.count),1),Object(l["createElementVNode"])("div",i,[a,(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(u.store.log,(function(e){return Object(l["openBlock"])(),Object(l["createElementBlock"])("div",{class:"pre",key:e},Object(l["toDisplayString"])(e),1)})),128))])])}var u=n("c0d6"),b={data:function(){return{store:u["a"]}},methods:{showConsole:function(){auto.invoke("showLog")},runAutoFn:function(){auto.invoke("toastLog","调autojs方法 成功")},runAutoCode:function(){auto.execAjCode('toastLog("执行autojs代码 成功")')},runAutoFile:function(){var e=n("ec0e");auto.execAjCode("threads.start(function () {\n        ".concat(e,"\n      })"))}}},d=n("6b0d"),j=n.n(d);const f=j()(b,[["render",s]]);t["default"]=f},"1a04":function(e,t,n){},"3d6b":function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var c=n("7a23"),l=n("1fba"),o=n("e5f6"),r=n("fa7c"),i=n("b75f"),a=n("4e5e"),s=n("9a1c");const[u,b]=Object(l["a"])("cell"),d={icon:String,size:String,title:o["c"],value:o["c"],label:o["c"],center:Boolean,isLink:Boolean,border:o["d"],required:Boolean,iconPrefix:String,valueClass:o["e"],labelClass:o["e"],titleClass:o["e"],titleStyle:null,arrowDirection:String,clickable:{type:Boolean,default:null}},j=Object(r["a"])({},d,a["a"]);var f=Object(c["defineComponent"])({name:u,props:j,setup(e,{slots:t}){const n=Object(a["b"])(),l=()=>{const n=t.label||Object(i["a"])(e.label);if(n)return Object(c["createVNode"])("div",{class:[b("label"),e.labelClass]},[t.label?t.label():e.label])},o=()=>{if(t.title||Object(i["a"])(e.title))return Object(c["createVNode"])("div",{class:[b("title"),e.titleClass],style:e.titleStyle},[t.title?t.title():Object(c["createVNode"])("span",null,[e.title]),l()])},r=()=>{const n=t.value||t.default,l=n||Object(i["a"])(e.value);if(l){const l=t.title||Object(i["a"])(e.title);return Object(c["createVNode"])("div",{class:[b("value",{alone:!l}),e.valueClass]},[n?n():Object(c["createVNode"])("span",null,[e.value])])}},u=()=>t.icon?t.icon():e.icon?Object(c["createVNode"])(s["a"],{name:e.icon,class:b("left-icon"),classPrefix:e.iconPrefix},null):void 0,d=()=>{if(t["right-icon"])return t["right-icon"]();if(e.isLink){const t=e.arrowDirection?"arrow-"+e.arrowDirection:"arrow";return Object(c["createVNode"])(s["a"],{name:t,class:b("right-icon")},null)}};return()=>{var l,i;const{size:a,center:s,border:j,isLink:f,required:k}=e,v=null!=(l=e.clickable)?l:f,O={center:s,required:k,clickable:v,borderless:!j};return a&&(O[a]=!!a),Object(c["createVNode"])("div",{class:b(O),role:v?"button":void 0,tabindex:v?0:void 0,onClick:n},[u(),o(),r(),d(),null==(i=t.extra)?void 0:i.call(t)])}}})},"6c44":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n("23f9"),l=n("3d6b");const o=Object(c["a"])(l["b"])},ec0e:function(e,t){e.exports="auto();\r\nlaunchApp(\"抖音\"); //请手动打开试试\r\nsleep(3000);\r\n\r\nconsole.log(global.WEB_PARAMS)\r\nvar Max = 10;\r\nfor (var i = 0; i < Max; i++) {\r\n  swipeUp();\r\n\r\n  sleep(2000);\r\n  if (text('点击进入直播间').exists()) {\r\n    continue;\r\n  }\r\n  like();\r\n  sleep(0100);\r\n}\r\n\r\n//点赞\r\nfunction like () {\r\n  var likeBtn = descContains('喜欢').visibleToUser().findOnce()\r\n  return likeBtn && likeBtn.click()\r\n}"}}]);