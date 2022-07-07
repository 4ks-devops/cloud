"use strict";(self.webpackChunkconfig_env_file_docs=self.webpackChunkconfig_env_file_docs||[]).push([[567],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(a),d=l,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),l=a(6010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7462),l=a(7294),r=a(6010),o=a(2389),i=a(7392),s=a(7094),u=a(2466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,a;const{lazy:o,block:m,defaultValue:d,values:h,groupId:f,className:b}=e,k=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:k.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,i.l)(v,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===d?d:null!=(t=null!=d?d:null==(a=k.find((e=>e.props.default)))?void 0:a.props.value)?t:k[0].props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:w}=(0,s.U)(),[T,C]=(0,l.useState)(y),j=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=f){const e=N[f];null!=e&&e!==T&&v.some((t=>t.value===e))&&C(e)}const E=e=>{const t=e.currentTarget,a=j.indexOf(t),n=v[a].value;n!==T&&(O(t),C(n),null!=f&&w(f,String(n)))},x=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=j.indexOf(e.currentTarget)+1;a=null!=(n=j[t])?n:j[0];break}case"ArrowLeft":{var l;const t=j.indexOf(e.currentTarget)-1;a=null!=(l=j[t])?l:j[j.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},b)},v.map((e=>{let{value:t,label:a,attributes:o}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>j.push(e),onKeyDown:x,onFocus:E,onClick:E},o,{className:(0,r.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=a?a:t)}))),o?(0,l.cloneElement)(k.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function d(e){const t=(0,o.Z)();return l.createElement(m,(0,n.Z)({key:String(t)},e))}},8639:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=a(7462),l=(a(7294),a(3905)),r=a(5488),o=a(5162);const i={sidebar_position:6},s="Create Home Cloud",u={unversionedId:"create-home-cloud",id:"create-home-cloud",title:"Create Home Cloud",description:"Create the home cloud with the command line tool.",source:"@site/docs/create-home-cloud.mdx",sourceDirName:".",slug:"/create-home-cloud",permalink:"/cloud/docs/create-home-cloud",draft:!1,editUrl:"https://github.com/iswilljr/cloud/tree/master/website/docs/create-home-cloud.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/cloud/docs/cloud-deno/installation"}},c={},p=[{value:"Get started",id:"get-started",level:2},{value:"Usage",id:"usage",level:2},{value:"Project name",id:"project-name",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"How to pass more than one interfaces",id:"how-to-pass-more-than-one-interfaces",level:3},{value:"Options",id:"options",level:2}],m={toc:p};function d(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"create-home-cloud"},"Create Home Cloud"),(0,l.kt)("p",null,"Create the home cloud with the command line tool."),(0,l.kt)("h2",{id:"get-started"},"Get started"),(0,l.kt)("p",null,"Get started just by running the following command:"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm init home-cloud@latest\n"))),(0,l.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn create home-cloud\n")))),(0,l.kt)("p",null,"The command will ask you for some information."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"command ",(0,l.kt)("a",{parentName:"strong",href:"#project-name"},"[project-name]")," ",(0,l.kt)("a",{parentName:"strong",href:"#interfaces"},"[interfaces]")," ",(0,l.kt)("a",{parentName:"strong",href:"#options"},"[options]"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"project-name")," : The name of the project."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"interfaces"),": The interfaces to be created."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options"),": The options to be used.")),(0,l.kt)("p",null,"Example:"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm init home-cloud@latest my-cloud github,deno -s\n"))),(0,l.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn create home-cloud my-cloud github,deno -s\n")))),(0,l.kt)("h2",{id:"project-name"},"Project name"),(0,l.kt)("p",null,"If you pass the project name as the first argument, it will be used as the project name.\nIf you don't pass the project name, it will ask you to enter the project name, you can simply press enter and it will set the default project name. "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"default"),": cloud")),(0,l.kt)("h2",{id:"interfaces"},"Interfaces"),(0,l.kt)("p",null,"Interfaces avaliables:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"github"),": Create the cloud with github interface"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"deno"),": Create the cloud with deno interface")),(0,l.kt)("p",null,"you can pass the interfaces as the second argument, if you don't pass the interfaces, it will ask you to enter the interfaces."),(0,l.kt)("h3",{id:"how-to-pass-more-than-one-interfaces"},"How to pass more than one interfaces"),(0,l.kt)("p",null,"You can use comma to separate them. Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"github,deno # github and deno\ngithub # only github\ndeno # only deno\n")),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("p",null,"These are the options to be used."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-h, --help"),": Show the help."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-p, --package-manager <package-manager>"),": The package manager to be used",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"options:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"npm"),": Use npm to install the dependencies."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"yarn"),": Use yarn to install the dependencies."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pnpm"),": Use pnpm to install the dependencies."))),(0,l.kt)("li",{parentName:"ul"},"if you don't pass the package manager, it will ask you to enter the package manager."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-s, --skip-install"),": Skip the installation of dependencies.")))}d.isMDXComponent=!0}}]);