"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3817],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>c});var a=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var o=a.createContext({}),d=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=d(t.components);return a.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),m=d(n),c=l,g=m["".concat(o,".").concat(c)]||m[c]||u[c]||r;return n?a.createElement(g,i(i({ref:e},p),{},{components:n})):a.createElement(g,i({ref:e},p))}));function c(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:l,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},726:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(7462),l=(n(7294),n(3905));const r={},i="Client",s={unversionedId:"general/client",id:"general/client",title:"Client",description:"It manages all the operations between your app and Discord's API using discord.js",source:"@site/docs/general/client.md",sourceDirName:"general",slug:"/general/client",permalink:"/docs/general/client",draft:!1,editUrl:"https://github.com/oceanroleplay/discord.ts/edit/main/docs/docs/general/client.md",tags:[],version:"current",lastUpdatedBy:"Victorique",lastUpdatedAt:1658340795,formattedLastUpdatedAt:"Jul 20, 2022",frontMatter:{},sidebar:"docSidebar",previous:{title:"ArgsOf",permalink:"/docs/general/argsof"},next:{title:"Debugging",permalink:"/docs/general/debugging"}},o={},d=[{value:"Setup and start your application",id:"setup-and-start-your-application",level:2},{value:"intents",id:"intents",level:3},{value:"botId",id:"botid",level:3},{value:"prefix",id:"prefix",level:3},{value:"commandUnauthorizedHandler",id:"commandunauthorizedhandler",level:3},{value:"silent",id:"silent",level:3},{value:"guards",id:"guards",level:3},{value:"botGuilds",id:"botguilds",level:3},{value:"Intents",id:"intents-1",level:2},{value:"Basic intents, just text messages",id:"basic-intents-just-text-messages",level:3},{value:"Enable direct messages from user",id:"enable-direct-messages-from-user",level:3},{value:"Voice activity intent, the ability to speak",id:"voice-activity-intent-the-ability-to-speak",level:3},{value:"List of all the intents",id:"list-of-all-the-intents",level:3},{value:"See also",id:"see-also",level:2}],p={toc:d};function u(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"client"},"Client"),(0,l.kt)("p",null,"It manages all the operations between your app and Discord's API using discord.js"),(0,l.kt)("h2",{id:"setup-and-start-your-application"},"Setup and start your application"),(0,l.kt)("p",null,"In order to start your application, you must use the discord.",(0,l.kt)("strong",{parentName:"p"},"ts"),"'s Client (not the client that is provided by discord.",(0,l.kt)("strong",{parentName:"p"},"js"),"!).",(0,l.kt)("br",{parentName:"p"}),"\n","It works the same as the discord.",(0,l.kt)("strong",{parentName:"p"},"js"),"'s Client (same methods, properties, ...)."),(0,l.kt)("h3",{id:"intents"},"intents"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"#list-of-all-the-intents"},"see Intents")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"default"),(0,l.kt)("th",{parentName:"tr",align:null},"required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Intents","[ ]"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,l.kt)("h3",{id:"botid"},"botId"),(0,l.kt)("p",null,"a bot id, help you manage your bot interactions, events (this is important in case there are more than one bot running in single instance)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"default"),(0,l.kt)("th",{parentName:"tr",align:null},"required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"bot"),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("h3",{id:"prefix"},"prefix"),(0,l.kt)("p",null,"simple commands use this prefix by default, use function to fetch different prefix for different guilds"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"default"),(0,l.kt)("th",{parentName:"tr",align:null},"required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"string ","|"," ((message: Message) =",">"," Promise<string",">",")"),(0,l.kt)("td",{parentName:"tr",align:null},"!"),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("h3",{id:"commandunauthorizedhandler"},"commandUnauthorizedHandler"),(0,l.kt)("p",null,"define bot reply, when command is not authorized"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"default"),(0,l.kt)("th",{parentName:"tr",align:null},"required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"string ","|"," ((command: SimpleCommandMessage) =",">"," Promise<void",">",")"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("h3",{id:"silent"},"silent"),(0,l.kt)("p",null,"Allows you to disable your event information at startup"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"default"),(0,l.kt)("th",{parentName:"tr",align:null},"required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("h3",{id:"guards"},"guards"),(0,l.kt)("p",null,"Global guards, it's an array of functions"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"default"),(0,l.kt)("th",{parentName:"tr",align:null},"required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GuardFunction ","[ ]"),(0,l.kt)("td",{parentName:"tr",align:null},"[ ]"),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("h3",{id:"botguilds"},"botGuilds"),(0,l.kt)("p",null,"The application commands are executed only on this list of guilds by default, ex. slash, button, select-menu, context-menu"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"default"),(0,l.kt)("th",{parentName:"tr",align:null},"required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IGuild ","[ ]"),(0,l.kt)("td",{parentName:"tr",align:null},"[ ]"),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("h2",{id:"intents-1"},"Intents"),(0,l.kt)("p",null,'When you initialize the Client, you must specify the "',(0,l.kt)("strong",{parentName:"p"},"intents"),'" of your bot, which determine what information your bot will receive from the Discord servers, ',(0,l.kt)("strong",{parentName:"p"},"it's different from the permissions")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Maintaining a stateful application can be difficult when it comes to the amount of data you're expected to process, especially at scale. Gateway Intents are a system to help you lower that computational burden.")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},'When identifying to the gateway, you can specify an intents parameter which allows you to conditionally subscribe to pre-defined "intents", groups of events defined by Discord. If you do not specify a certain intent, you will not receive any of the gateway events that are batched into that group.')),(0,l.kt)("admonition",{type:"danger"},(0,l.kt)("p",{parentName:"admonition"},"If an event of your app isn't triggered, you probably missed an ",(0,l.kt)("strong",{parentName:"p"},"Intent"))),(0,l.kt)("h3",{id:"basic-intents-just-text-messages"},"Basic intents, just text messages"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import { IntentsBitField } from "discord.js";\n\nconst client = new Client({\n  botId: "test",\n  intents: [IntentsBitField.Flags.Guilds, IntentsBitField.Flags.GuildMessages],\n  // ...\n});\n')),(0,l.kt)("h3",{id:"enable-direct-messages-from-user"},"Enable direct messages from user"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import { IntentsBitField } from "discord.js";\n\nconst client = new Client({\n  botId: "test",\n  // partial configuration required to enable direct messages\n  partials: ["CHANNEL", "MESSAGE"],\n  intents: [\n    IntentsBitField.Flags.Guilds,\n    IntentsBitField.Flags.GuildMessages,\n    IntentsBitField.Flags.DirectMessages,\n  ],\n  // ...\n});\n')),(0,l.kt)("h3",{id:"voice-activity-intent-the-ability-to-speak"},"Voice activity intent, the ability to speak"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import { IntentsBitField } from "discord.js";\n\nconst client = new Client({\n  botId: "test",\n  intents: [\n    IntentsBitField.Flags.Guilds,\n    IntentsBitField.Flags.GuildMessages,\n    IntentsBitField.Flags.GUILD_VOICE_STATES, // Can speak\n  ],\n  // ...\n});\n')),(0,l.kt)("h3",{id:"list-of-all-the-intents"},"List of all the intents"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://discord.com/developers/docs/topics/gateway#list-of-intents"},"You can find the complete list here")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Most used ones")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GUILDS"),(0,l.kt)("li",{parentName:"ul"},"GUILD_MEMBERS"),(0,l.kt)("li",{parentName:"ul"},"GUILD_BANS"),(0,l.kt)("li",{parentName:"ul"},"GUILD_EMOJIS_AND_STICKERS"),(0,l.kt)("li",{parentName:"ul"},"GUILD_INTEGRATIONS"),(0,l.kt)("li",{parentName:"ul"},"GUILD_WEBHOOKS"),(0,l.kt)("li",{parentName:"ul"},"GUILD_INVITES"),(0,l.kt)("li",{parentName:"ul"},"GUILD_VOICE_STATES"),(0,l.kt)("li",{parentName:"ul"},"GUILD_PRESENCES"),(0,l.kt)("li",{parentName:"ul"},"GUILD_MESSAGES"),(0,l.kt)("li",{parentName:"ul"},"GUILD_MESSAGE_REACTIONS"),(0,l.kt)("li",{parentName:"ul"},"GUILD_MESSAGE_TYPING"),(0,l.kt)("li",{parentName:"ul"},"DIRECT_MESSAGES"),(0,l.kt)("li",{parentName:"ul"},"DIRECT_MESSAGE_REACTIONS"),(0,l.kt)("li",{parentName:"ul"},"DIRECT_MESSAGE_TYPING")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import { IntentsBitField } from "discord.js";\n\nconst client = new Client({\n  botId: "test",\n  intents: [\n    IntentsBitField.Flags.Guilds,\n    IntentsBitField.Flags.GuildMessages,\n    IntentsBitField.Flags.GUILD_VOICE_STATES,\n    IntentsBitField.Flags.GUILD_EMOJIS_AND_STICKERS,\n    IntentsBitField.Flags.DIRECT_MESSAGE_REACTIONS,\n    IntentsBitField.Flags.DirectMessages,\n    IntentsBitField.Flags.DIRECT_MESSAGE_TYPING,\n    IntentsBitField.Flags.GUILD_INTEGRATIONS,\n    IntentsBitField.Flags.GUILD_PRESENCES,\n    IntentsBitField.Flags.GUILD_WEBHOOKS,\n    IntentsBitField.Flags.GuildMembers,\n    IntentsBitField.Flags.GUILD_INVITES,\n    IntentsBitField.Flags.GUILD_BANS,\n  ],\n  // ...\n});\n')),(0,l.kt)("h2",{id:"see-also"},"See also"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://discord.js.org/#/docs/main/stable/class/Intents"},"Discord.js documentation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://discord.com/developers/docs/topics/gateway#list-of-intents"},"Discord's documentation"))))}u.isMDXComponent=!0}}]);