"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7467],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(b,l(l({ref:t},c),{},{components:n})):r.createElement(b,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(7462),a=n(7294),o=n(6010),l=n(2389),s=n(7392),i=n(7094),u=n(2466);const c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,n;const{lazy:l,block:p,defaultValue:m,values:b,groupId:g,className:f}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=b?b:v.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),h=(0,s.l)(y,((e,t)=>e.value===t.value));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===m?m:null!=(t=null!=m?m:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:v[0].props.value;if(null!==k&&!y.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:O,setTabGroupChoices:w}=(0,i.U)(),[N,T]=(0,a.useState)(k),j=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=g){const e=O[g];null!=e&&e!==N&&y.some((t=>t.value===e))&&T(e)}const C=e=>{const t=e.currentTarget,n=j.indexOf(t),r=y[n].value;r!==N&&(E(t),T(r),null!=g&&w(g,String(r)))},x=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=j.indexOf(e.currentTarget)+1;n=null!=(r=j[t])?r:j[0];break}case"ArrowLeft":{var a;const t=j.indexOf(e.currentTarget)-1;n=null!=(a=j[t])?a:j[j.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},f)},y.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>j.push(e),onKeyDown:x,onFocus:C,onClick:C},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(v.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,l.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},397:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var r=n(7462),a=(n(7294),n(3905)),o=n(5488),l=n(5162);const s={title:"Debugging"},i=void 0,u={unversionedId:"general/debugging",id:"general/debugging",title:"Debugging",description:"Use the VSCode debugger to debug your bot",source:"@site/docs/general/debugging.md",sourceDirName:"general",slug:"/general/debugging",permalink:"/docs/general/debugging",draft:!1,editUrl:"https://github.com/oceanroleplay/discord.ts/edit/main/docs/docs/general/debugging.md",tags:[],version:"current",lastUpdatedBy:"Victorique",lastUpdatedAt:1658340795,formattedLastUpdatedAt:"Jul 20, 2022",frontMatter:{title:"Debugging"},sidebar:"docSidebar",previous:{title:"Client",permalink:"/docs/general/client"},next:{title:"List of the discord.js events",permalink:"/docs/general/events"}},c={},d=[],p={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Use the VSCode debugger to debug your bot"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create the ",(0,a.kt)("inlineCode",{parentName:"li"},".vscode/launch.json")," file at your project root directory if the file do not already exists"),(0,a.kt)("li",{parentName:"ol"},"Install ts-node as a dev dependency")),(0,a.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev ts-node\n"))),(0,a.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev ts-node\n")))),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Copy paste this into your ",(0,a.kt)("inlineCode",{parentName:"li"},"launch.json")," file")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title=".vscode/launch.json"',title:'".vscode/launch.json"'},'{\n  // Use IntelliSense to learn about possible attributes.\n  // Hover to view descriptions of existing attributes.\n  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "type": "node",\n      "request": "launch",\n      "name": "Debug bot",\n      "protocol": "inspector",\n      "args": ["${workspaceRoot}/PATH_TO_YOUR_MAIN.ts"],\n      "cwd": "${workspaceRoot}",\n      "runtimeArgs": ["-r", "ts-node/register"],\n      "internalConsoleOptions": "neverOpen"\n    }\n  ]\n}\n')),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"You can now put some breakpoints, go to the debug tab in VSCode and launch your bot")))}m.isMDXComponent=!0}}]);