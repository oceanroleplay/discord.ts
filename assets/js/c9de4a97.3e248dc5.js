"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4024],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},946:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},l="@Bot",i={unversionedId:"decorators/general/bot",id:"decorators/general/bot",title:"@Bot",description:"bot decorator help you manage multiple bot's in single node instance",source:"@site/docs/decorators/general/bot.md",sourceDirName:"decorators/general",slug:"/decorators/general/bot",permalink:"/docs/decorators/general/bot",draft:!1,editUrl:"https://github.com/oceanroleplay/discord.ts/edit/main/docs/docs/decorators/general/bot.md",tags:[],version:"current",lastUpdatedBy:"Victorique",lastUpdatedAt:1658340795,formattedLastUpdatedAt:"Jul 20, 2022",frontMatter:{},sidebar:"docSidebar",previous:{title:"@SimpleCommandOption",permalink:"/docs/decorators/commands/simple-command-option"},next:{title:"@Discord",permalink:"/docs/decorators/general/discord"}},c={},p=[{value:"Supported with",id:"supported-with",level:2},{value:"Example",id:"example",level:2},{value:"Signature",id:"signature",level:2},{value:"Parameters",id:"parameters",level:2},{value:"botID",id:"botid",level:3},{value:"Make changes to",id:"make-changes-to",level:2}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bot"},"@Bot"),(0,a.kt)("p",null,"bot decorator help you manage multiple bot's in single node instance"),(0,a.kt)("h2",{id:"supported-with"},"Supported with"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../gui/button-component"},"@ButtonComponent")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../gui/context-menu"},"@ContextMenu")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./on"},"@On")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./once"},"@Once")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../gui/select-menu-component"},"@SelectMenuComponent")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../commands/simple-command"},"@SimpleCommand")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../commands/slash"},"@Slash"))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'@Discord()\n@Bot("alex", "zoe") // Define which bot can run the following commands or events\nclass Example {\n  @SimpleCommand("hello")\n  command(command: SimpleCommandMessage) {\n    command.message.reply(`\ud83d\udc4b ${message.member}`);\n  }\n}\n\nconst alex = new Client({\n  botId: "alex", // define botId\n});\n\nconst zoe = new Client({\n  botId: "zoe", // define botId\n});\n\n// We will now build our application to load all the commands/events for both bots.\nMetadataStorage.instance.build().then(() => {\n  // Now that the app is ready, we can login to both bots\n  alex.login("alex token");\n  zoe.login("zoe token");\n});\n')),(0,a.kt)("h2",{id:"signature"},"Signature"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"Bot(...botIDs: string[]): ClassMethodDecorator;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("h3",{id:"botid"},"botID"),(0,a.kt)("p",null,"Array of bot ids, for which only the below statement will be executed."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"default"),(0,a.kt)("th",{parentName:"tr",align:null},"required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"string","[ ]"),(0,a.kt)("td",{parentName:"tr",align:null},"[ ]"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,a.kt)("h2",{id:"make-changes-to"},"Make changes to"),(0,a.kt)("p",null,"It either extends or overwrites data configured in below decorators, however, the order of decorators matters."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/decorators/gui/button-component"},"@ButtonComponent")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/decorators/gui/select-menu-component"},"@SelectMenuComponent")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/decorators/gui/context-menu"},"@ContextMenu")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/decorators/general/discord"},"@Discord")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/decorators/general/on"},"@On")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/decorators/general/once"},"@Once")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/decorators/commands/simple-command"},"@SimpleCommand")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/decorators/commands/slash"},"@Slash")))}d.isMDXComponent=!0}}]);