"use strict";(self.webpackChunkconfig_env_file_docs=self.webpackChunkconfig_env_file_docs||[]).push([[404],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=l,b=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),l=n(6010);const a="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,l.Z)(a,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(7462),l=n(7294),a=n(6010),o=n(2389),i=n(7392),u=n(7094),s=n(2466);const c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,n;const{lazy:o,block:p,defaultValue:m,values:b,groupId:f,className:h}=e,v=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=b?b:v.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),g=(0,i.l)(y,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===m?m:null!=(t=null!=m?m:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:v[0].props.value;if(null!==k&&!y.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:O}=(0,u.U)(),[T,E]=(0,l.useState)(k),x=[],{blockElementScrollPositionUntilNextRender:N}=(0,s.o5)();if(null!=f){const e=w[f];null!=e&&e!==T&&y.some((t=>t.value===e))&&E(e)}const j=e=>{const t=e.currentTarget,n=x.indexOf(t),r=y[n].value;r!==T&&(N(t),E(r),null!=f&&O(f,String(r)))},C=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=x.indexOf(e.currentTarget)+1;n=null!=(r=x[t])?r:x[0];break}case"ArrowLeft":{var l;const t=x.indexOf(e.currentTarget)-1;n=null!=(l=x[t])?l:x[x.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,a.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":p},h)},y.map((e=>{let{value:t,label:n,attributes:o}=e;return l.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>x.push(e),onKeyDown:C,onFocus:j,onClick:j},o,{className:(0,a.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),o?(0,l.cloneElement)(v.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,o.Z)();return l.createElement(p,(0,r.Z)({key:String(t)},e))}},2552:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(7462),l=(n(7294),n(3905)),a=n(5488),o=n(5162);const i={sidebar_position:1},u="Installation",s={unversionedId:"cloud-github/installation",id:"cloud-github/installation",title:"Installation",description:"How to installthe cloud github.",source:"@site/docs/cloud-github/installation.mdx",sourceDirName:"cloud-github",slug:"/cloud-github/installation",permalink:"/cloud/docs/cloud-github/installation",draft:!1,editUrl:"https://github.com/iswilljr/cloud/tree/master/website/docs/cloud-github/installation.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Cloud - Github",permalink:"/cloud/docs/cloud-github"},next:{title:"Cloud - Deno",permalink:"/cloud/docs/cloud-deno"}},c={},d=[{value:"Clone the repository",id:"clone-the-repository",level:2},{value:"Install dependencies",id:"install-dependencies",level:2}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"installation"},"Installation"),(0,l.kt)("p",null,"How to installthe cloud github."),(0,l.kt)("h2",{id:"clone-the-repository"},"Clone the repository"),(0,l.kt)("p",null,"First clone the repository, by running"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir github # or whatever you want to call your directory\ncd github # or whatever you called your directory\ncurl https://codeload.github.com/iswilljr/cloud/tar.gz/master | \\\ntar -xz --strip=2 cloud-master/cloud-github\n")),(0,l.kt)("h2",{id:"install-dependencies"},"Install dependencies"),(0,l.kt)(a.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n"))),(0,l.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn\n")))))}m.isMDXComponent=!0}}]);