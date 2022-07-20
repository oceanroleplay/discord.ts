"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3229],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,k=u["".concat(d,".").concat(m)]||u[m]||p[m]||l;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4841:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={},i="@Reaction",o={unversionedId:"decorators/general/reaction",id:"decorators/general/reaction",title:"@Reaction",description:"Create a reaction handler for messages using @Reaction.",source:"@site/docs/decorators/general/reaction.md",sourceDirName:"decorators/general",slug:"/decorators/general/reaction",permalink:"/docs/decorators/general/reaction",draft:!1,editUrl:"https://github.com/oceanroleplay/discord.ts/edit/main/docs/docs/decorators/general/reaction.md",tags:[],version:"current",lastUpdatedBy:"Victorique",lastUpdatedAt:1658340795,formattedLastUpdatedAt:"Jul 20, 2022",frontMatter:{},sidebar:"docSidebar",previous:{title:"@Once - Discord events",permalink:"/docs/decorators/general/once"},next:{title:"@ButtonComponent",permalink:"/docs/decorators/gui/button-component"}},d={},s=[{value:"Example",id:"example",level:2},{value:"Execute Reactions",id:"execute-reactions",level:3},{value:"Aliasing Reactions",id:"aliasing-reactions",level:3},{value:"Retain Reactions",id:"retain-reactions",level:3},{value:"Signature",id:"signature",level:2},{value:"Parameters",id:"parameters",level:2},{value:"name",id:"name",level:3},{value:"options",id:"options",level:3},{value:"<code>remove</code>",id:"remove",level:4},{value:"<code>aliases</code>",id:"aliases",level:4},{value:"<code>partial</code>",id:"partial",level:4},{value:"<code>Description</code>",id:"description",level:4},{value:"<code>botIds</code>",id:"botids",level:4},{value:"<code>directMessage</code>",id:"directmessage",level:4},{value:"<code>guilds</code>",id:"guilds",level:4}],c={toc:s};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"reaction"},"@Reaction"),(0,r.kt)("p",null,"Create a reaction handler for messages using ",(0,r.kt)("inlineCode",{parentName:"p"},"@Reaction"),"."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'@Discord()\nclass Example {\n  @Reaction("\ud83d\udccc")\n  async pin(reaction: MessageReaction): Promise<void> {\n    await reaction.message.pin();\n  }\n}\n')),(0,r.kt)("h3",{id:"execute-reactions"},"Execute Reactions"),(0,r.kt)("p",null,"You have to manually execute your reactions by using ",(0,r.kt)("inlineCode",{parentName:"p"},"client.executeReaction(reaction, user)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Client } from "discordx";\nasync function start() {\n  const client = new Client({\n    botId: "test",\n    intents: [\n      IntentsBitField.Flags.Guilds,\n      IntentsBitField.Flags.GuildMessages,\n    ],\n    partials: ["MESSAGE", "CHANNEL", "REACTION"], // Necessary to receive reactions for uncached messages\n  });\n\n  client.on("messageReactionAdd", (reaction, user) => {\n    this.Client.executeReaction(reaction, user);\n  });\n\n  await client.login("YOUR_TOKEN");\n}\n\nstart();\n')),(0,r.kt)("h3",{id:"aliasing-reactions"},"Aliasing Reactions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'@Reaction("\ud83d\udccc", { aliases: ["\ud83d\udccd", "custom_emoji"] })\nasync pin(reaction: MessageReaction): Promise<void> {\n  await reaction.message.pin();\n}\n')),(0,r.kt)("h3",{id:"retain-reactions"},"Retain Reactions"),(0,r.kt)("p",null,"By default, reactions will be removed when being executed. To prevent this, set the ",(0,r.kt)("inlineCode",{parentName:"p"},"delete")," option to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'@Reaction("\u2b50", { remove: false })\nasync starReaction(reaction: MessageReaction, user: User): Promise<void> {\n  await reaction.message.reply(`Received a ${reaction.emoji} from ${user}`);\n}\n')),(0,r.kt)("h2",{id:"signature"},"Signature"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"Reaction(name: string, options: ReactionOptions)\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("h3",{id:"name"},"name"),(0,r.kt)("p",null,"The reaction emoji, either unicode, custom emoji name, or custom emoji snowflake."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"default"),(0,r.kt)("th",{parentName:"tr",align:null},"required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,r.kt)("h3",{id:"options"},"options"),(0,r.kt)("p",null,"Multiple options, check below."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"default"),(0,r.kt)("th",{parentName:"tr",align:null},"required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("h4",{id:"remove"},(0,r.kt)("inlineCode",{parentName:"h4"},"remove")),(0,r.kt)("p",null,"Whether or not to remove the reaction upon execution."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"true")))),(0,r.kt)("h4",{id:"aliases"},(0,r.kt)("inlineCode",{parentName:"h4"},"aliases")),(0,r.kt)("p",null,"Alternative emojis for this reaction handler."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"string","[ ]"),(0,r.kt)("td",{parentName:"tr",align:null},"[ ]")))),(0,r.kt)("h4",{id:"partial"},(0,r.kt)("inlineCode",{parentName:"h4"},"partial")),(0,r.kt)("p",null,"If enabled, discord.ts will not fetch the reaction or user when they are partial."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("h4",{id:"description"},(0,r.kt)("inlineCode",{parentName:"h4"},"Description")),(0,r.kt)("p",null,"A description of what the reaction does."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"botids"},(0,r.kt)("inlineCode",{parentName:"h4"},"botIds")),(0,r.kt)("p",null,"Array of bot ids which the reaction will be executed on."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"string","[ ]"),(0,r.kt)("td",{parentName:"tr",align:null},"[ ]")))),(0,r.kt)("h4",{id:"directmessage"},(0,r.kt)("inlineCode",{parentName:"h4"},"directMessage")),(0,r.kt)("p",null,"Allow reaction execution from direct messages."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"true")))),(0,r.kt)("h4",{id:"guilds"},(0,r.kt)("inlineCode",{parentName:"h4"},"guilds")),(0,r.kt)("p",null,"Array of guild ids which the reaction will be executed in."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Snowflake","[ ]"),(0,r.kt)("td",{parentName:"tr",align:null},"[ ]")))))}p.isMDXComponent=!0}}]);