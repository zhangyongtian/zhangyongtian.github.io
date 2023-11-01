"use strict";(self.webpackChunkathenaserving=self.webpackChunkathenaserving||[]).push([[6283],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(n),d=l,m=s["".concat(p,".").concat(d)]||s[d]||k[d]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38522:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(87462),l=(n(67294),n(3905));const a={sidebar_position:1,sidebar_label:"\u6982\u8ff0"},i=void 0,o={unversionedId:"\u6570\u636e\u5b58\u50a8/ClickHouse/\u6982\u8ff0",id:"\u6570\u636e\u5b58\u50a8/ClickHouse/\u6982\u8ff0",title:"\u6982\u8ff0",description:"\u4ec0\u4e48\u662fClickHouse",source:"@site/docs/\u6570\u636e\u5b58\u50a8/ClickHouse/\u6982\u8ff0.md",sourceDirName:"\u6570\u636e\u5b58\u50a8/ClickHouse",slug:"/\u6570\u636e\u5b58\u50a8/ClickHouse/\u6982\u8ff0",permalink:"/en/docs/\u6570\u636e\u5b58\u50a8/ClickHouse/\u6982\u8ff0",draft:!1,editUrl:"https://github.com/zhangyongtian/bigdataknowledge/tree/dev/docs/\u6570\u636e\u5b58\u50a8/ClickHouse/\u6982\u8ff0.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"\u6982\u8ff0"},sidebar:"docSidebar",previous:{title:"ClickHouse",permalink:"/en/docs/category/clickhouse"},next:{title:"\u5b89\u88c5",permalink:"/en/docs/\u6570\u636e\u5b58\u50a8/ClickHouse/\u5b89\u88c5"}},p={},u=[{value:"\u4ec0\u4e48\u662fClickHouse",id:"\u4ec0\u4e48\u662fclickhouse",level:2},{value:"\u4ec0\u4e48\u662f OLAP",id:"\u4ec0\u4e48\u662f-olap",level:2},{value:"\u9762\u5411\u5217\u4e0e\u9762\u5411\u884c\u7684",id:"\u9762\u5411\u5217\u4e0e\u9762\u5411\u884c\u7684",level:2},{value:"\u4e3a\u4ec0\u4e48\u5217\u5f0f\u6570\u636e\u5e93\u5728 OLAP",id:"\u4e3a\u4ec0\u4e48\u5217\u5f0f\u6570\u636e\u5e93\u5728-olap",level:2},{value:"\u4e3a\u4ec0\u4e48 ClickHouse \u8fd9\u4e48\u5feb\uff1f",id:"\u4e3a\u4ec0\u4e48-clickhouse-\u8fd9\u4e48\u5feb",level:2},{value:"ClickHouse\u7684\u7279\u8272",id:"clickhouse\u7684\u7279\u8272",level:2},{value:"\u771f\u6b63\u7684\u9762\u5411\u5217\u7684\u6570\u636e\u5e93\u7ba1\u7406",id:"\u771f\u6b63\u7684\u9762\u5411\u5217\u7684\u6570\u636e\u5e93\u7ba1\u7406",level:3},{value:"\u6570\u636e\u5b58\u50a8\u7279\u6027",id:"\u6570\u636e\u5b58\u50a8\u7279\u6027",level:3},{value:"\u5206\u5e03\u5f0f\u5904\u7406",id:"\u5206\u5e03\u5f0f\u5904\u7406",level:3},{value:"\u81ea\u9002\u5e94Join",id:"\u81ea\u9002\u5e94join",level:3}],c={toc:u},s="wrapper";function k(e){let{components:t,...a}=e;return(0,l.kt)(s,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4ec0\u4e48\u662fclickhouse"},"\u4ec0\u4e48\u662fClickHouse"),(0,l.kt)("p",null,"ClickHouse\xae \u662f\u4e00\u79cd\u7528\u4e8e\u5728\u7ebf\u5206\u6790\u5904\u7406 (OLAP) \u7684\u9ad8\u6027\u80fd\u3001\u9762\u5411\u5217\u7684 SQL \u6570\u636e\u5e93\u7ba1\u7406\u7cfb\u7edf (DBMS)\u3002\u5b83\u65e2\u53ef\u4ee5\u4f5c\u4e3a\u5f00\u6e90\u8f6f\u4ef6\u4e5f\u53ef\u4ee5\u4f5c\u4e3a\u4e91\u4ea7\u54c1\u63d0\u4f9b\u3002"),(0,l.kt)("h2",{id:"\u4ec0\u4e48\u662f-olap"},"\u4ec0\u4e48\u662f OLAP"),(0,l.kt)("p",null,"OLAP \u573a\u666f\u9700\u8981\u5728\u5927\u578b\u6570\u636e\u96c6\u4e4b\u4e0a\u5b9e\u65f6\u54cd\u5e94\u590d\u6742\u7684\u5206\u6790\u67e5\u8be2\uff0c\u5177\u6709\u4ee5\u4e0b\u7279\u5f81\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u96c6\u53ef\u80fd\u975e\u5e38\u5e9e\u5927 - \u6570\u5341\u4ebf\u6216\u6570\u4e07\u4ebf\u884c"),(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u7ec4\u7ec7\u5728\u5305\u542b\u8bb8\u591a\u5217\u7684\u8868\u4e2d"),(0,l.kt)("li",{parentName:"ul"},"\u4ec5\u9009\u62e9\u51e0\u5217\u6765\u56de\u7b54\u4efb\u4f55\u7279\u5b9a\u67e5\u8be2"),(0,l.kt)("li",{parentName:"ul"},"\u7ed3\u679c\u5fc5\u987b\u4ee5\u6beb\u79d2\u6216\u79d2\u4e3a\u5355\u4f4d\u8fd4\u56de")),(0,l.kt)("h2",{id:"\u9762\u5411\u5217\u4e0e\u9762\u5411\u884c\u7684"},"\u9762\u5411\u5217\u4e0e\u9762\u5411\u884c\u7684"),(0,l.kt)("p",null,"\u5728\u9762\u5411\u884c\u7684 DBMS \u4e2d\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u6570\u636e\u5b58\u50a8\u5728\u884c\u4e2d\uff0c\u4e0e\u884c\u76f8\u5173\u7684\u6240\u6709\u503c\u7269\u7406\u4e0a\u5f7c\u6b64\u76f8\u90bb\u5b58\u50a8"),"\u3002"),(0,l.kt)("p",null,"\u5728\u9762\u5411\u5217\u7684 DBMS \u4e2d\uff0c\u6570\u636e\u5b58\u50a8\u5728\u5217\u4e2d\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u540c\u4e00\u5217\u4e2d\u7684\u503c\u5b58\u50a8\u5728\u4e00\u8d77"),"\u3002"),(0,l.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u5217\u5f0f\u6570\u636e\u5e93\u5728-olap"},"\u4e3a\u4ec0\u4e48\u5217\u5f0f\u6570\u636e\u5e93\u5728 OLAP"),(0,l.kt)("p",null,"\u9762\u5411\u5217\u7684\u6570\u636e\u5e93\u66f4\u9002\u5408 OLAP \u573a\u666f\uff1a\u5b83\u4eec\u5904\u7406\u5927\u591a\u6570\u67e5\u8be2\u7684\u901f\u5ea6\u81f3\u5c11\u5feb 100 \u500d\u3002\u4e0b\u9762\u8be6\u7ec6\u89e3\u91ca\u4e86\u539f\u56e0\uff0c\u4f46\u4e8b\u5b9e\u66f4\u5bb9\u6613\u76f4\u89c2\u5730\u5c55\u793a\uff1a"),(0,l.kt)("p",null,"\u9762\u5411\u884c\u7684\u6570\u636e\u5e93\u7ba1\u7406\u7cfb\u7edf"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u9762\u5411\u884c\u5b58",src:n(81245).Z,width:"630",height:"258"})),(0,l.kt)("p",null,"\u9762\u5411\u5217\u7684\u6570\u636e\u5e93\u7ba1\u7406\u7cfb\u7edf"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u9762\u5411\u884c\u5b58",src:n(58746).Z,width:"630",height:"258"})),(0,l.kt)("h2",{id:"\u4e3a\u4ec0\u4e48-clickhouse-\u8fd9\u4e48\u5feb"},"\u4e3a\u4ec0\u4e48 ClickHouse \u8fd9\u4e48\u5feb\uff1f"),(0,l.kt)("p",null,"\u5b83\u88ab\u8bbe\u8ba1\u5f97\u5f88\u5feb\u3002\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\uff0c\u67e5\u8be2\u6267\u884c\u6027\u80fd\u59cb\u7ec8\u662f\u91cd\u4e2d\u4e4b\u91cd\uff0c\u4f46\u4e5f\u8003\u8651\u4e86\u7528\u6237\u53cb\u597d\u6027\u3001\u53ef\u6269\u5c55\u6027\u548c\u5b89\u5168\u6027\u7b49\u5176\u4ed6\u91cd\u8981\u7279\u6027\uff0c\u4ee5\u4fbf ClickHouse \u80fd\u591f\u6210\u4e3a\u771f\u6b63\u7684\u751f\u4ea7\u7cfb\u7edf\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u9762\u5411\u5217\u7684\u5b58\u50a8\uff1a \u6e90\u6570\u636e\u901a\u5e38\u5305\u542b\u6570\u767e\u751a\u81f3\u6570\u5343\u5217\uff0c\u800c\u62a5\u8868\u53ea\u80fd\u4f7f\u7528\u5176\u4e2d\u7684\u51e0\u4e2a\u5217\u3002",(0,l.kt)("strong",{parentName:"p"},"\u7cfb\u7edf\u9700\u8981\u907f\u514d\u8bfb\u53d6\u4e0d\u5fc5\u8981\u7684\u5217\uff0c\u4ee5\u907f\u514d\u6602\u8d35\u7684\u78c1\u76d8\u8bfb\u53d6\u64cd\u4f5c"),"\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u7d22\u5f15\uff1a \u5185\u5b58\u9a7b\u7559\u7684 ClickHouse \u6570\u636e\u7ed3\u6784\u5141\u8bb8\u4ec5\u8bfb\u53d6\u5fc5\u8981\u7684\u5217\uff0c\u4ee5\u53ca\u8fd9\u4e9b\u5217\u7684\u5fc5\u8981\u7684\u884c\u8303\u56f4\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6570\u636e\u538b\u7f29\uff1a ",(0,l.kt)("strong",{parentName:"p"},"\u5c06\u540c\u4e00\u5217\u7684\u4e0d\u540c\u503c\u5b58\u50a8\u5728\u4e00\u8d77\u901a\u5e38\u4f1a\u5e26\u6765\u66f4\u597d\u7684\u538b\u7f29\u6bd4\uff08\u4e0e\u9762\u5411\u884c\u7684\u7cfb\u7edf\u76f8\u6bd4\uff09"),"\uff0c\u56e0\u4e3a\u5728\u5b9e\u9645\u6570\u636e\u4e2d\uff0c\u5217\u7684\u76f8\u90bb\u884c\u901a\u5e38\u5177\u6709\u76f8\u540c\u6216\u6ca1\u6709\u90a3\u4e48\u591a\u4e0d\u540c\u7684\u503c\u3002\u9664\u4e86\u901a\u7528\u538b\u7f29\u4e4b\u5916\uff0c",(0,l.kt)("strong",{parentName:"p"},"ClickHouse \u8fd8\u652f\u6301\u4e13\u7528\u7f16\u89e3\u7801\u5668\uff0c\u53ef\u4ee5\u4f7f\u6570\u636e\u66f4\u52a0\u7d27\u51d1"),"\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5411\u91cf\u5316\u67e5\u8be2\u6267\u884c\uff1a ClickHouse\u4e0d\u4ec5\u6309\u5217\u5b58\u50a8\u6570\u636e\uff0c\u8fd8\u6309\u5217\u5904\u7406\u6570\u636e\u3002\u8fd9\u4f1a\u5e26\u6765\u66f4\u597d\u7684 ",(0,l.kt)("strong",{parentName:"p"},"CPU \u7f13\u5b58\u5229\u7528\u7387\u5e76\u5141\u8bb8\u4f7f\u7528SIMD CPU \u6307\u4ee4"),"\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u53ef\u6269\u5c55\u6027\uff1a ClickHouse \u53ef\u4ee5\u5229\u7528",(0,l.kt)("strong",{parentName:"p"},"\u6240\u6709\u53ef\u7528\u7684 CPU \u6838\u5fc3\u548c\u78c1\u76d8\u6765\u6267\u884c\u5355\u4e2a\u67e5\u8be2"),"\u3002\u4e0d\u4ec5\u5728\u5355\u4e2a\u670d\u52a1\u5668\u4e0a\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u800c\u4e14\u5728\u96c6\u7fa4\u7684\u6240\u6709 CPU \u6838\u5fc3\u548c\u78c1\u76d8\u4e0a"),"\u3002"))),(0,l.kt)("h2",{id:"clickhouse\u7684\u7279\u8272"},"ClickHouse\u7684\u7279\u8272"),(0,l.kt)("h3",{id:"\u771f\u6b63\u7684\u9762\u5411\u5217\u7684\u6570\u636e\u5e93\u7ba1\u7406"},"\u771f\u6b63\u7684\u9762\u5411\u5217\u7684\u6570\u636e\u5e93\u7ba1\u7406"),(0,l.kt)("p",null,"\u5728\u771f\u6b63\u7684\u9762\u5411\u5217\u7684 DBMS \u4e2d\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u6ca1\u6709\u989d\u5916\u7684\u6570\u636e\u4e0e\u503c\u4e00\u8d77\u5b58\u50a8\u3002\u8fd9\u610f\u5473\u7740\u5fc5\u987b\u652f\u6301\u6052\u5b9a\u957f\u5ea6\u503c"),"\uff0c\u4ee5\u907f\u514d\u5c06\u5176\u957f\u5ea6\u201c\u6570\u5b57\u201d\u5b58\u50a8\u5728\u503c\u65c1\u8fb9\u3002\u4f8b\u5982\uff0c\u5341\u4ebf\u4e2a UInt8 \u7c7b\u578b\u7684\u503c\u5728\u672a\u538b\u7f29\u7684\u60c5\u51b5\u4e0b\u5e94\u8be5\u6d88\u8017\u5927\u7ea6 1 GB \u7684\u7a7a\u95f4\uff0c\u5426\u5219\u8fd9\u4f1a\u4e25\u91cd\u5f71\u54cd CPU \u7684\u4f7f\u7528\u3002\u5373\u4f7f\u672a\u538b\u7f29\uff0c\u4e5f\u5fc5\u987b\u7d27\u51d1\u5730\u5b58\u50a8\u6570\u636e\uff08\u6ca1\u6709\u4efb\u4f55\u201c\u5783\u573e\u201d\uff09\uff0c\u56e0\u4e3a\u89e3\u538b\u7f29\u7684\u901f\u5ea6\uff08CPU \u4f7f\u7528\u7387\uff09\u4e3b\u8981\u53d6\u51b3\u4e8e\u672a\u538b\u7f29\u6570\u636e\u7684\u91cf\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e0eHBase\u3001BigTable\u3001Cassandra\u3001HyperTable\u7b49\u7cfb\u7edf\u4e0d\u540c\uff0c\u8fd9\u4e9b\u7cfb\u7edf\u53ef\u4ee5\u5355\u72ec\u5b58\u50a8\u4e0d\u540c\u5217\u7684\u503c\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u4f46\u7531\u4e8e\u9488\u5bf9\u5176\u4ed6\u573a\u666f\u7684\u4f18\u5316\u800c\u65e0\u6cd5\u6709\u6548\u5904\u7406\u5206\u6790\u67e5\u8be2"),"\u3002\u5728\u8fd9\u4e9b\u7cfb\u7edf\u4e2d\uff0c\u60a8\u5c06\u83b7\u5f97\u6bcf\u79d2\u5927\u7ea6\u5341\u4e07\u884c\u7684\u541e\u5410\u91cf\uff0c\u4f46\u6bcf\u79d2\u4e0d\u4f1a\u8fbe\u5230\u6570\u4ebf\u884c\u3002"),(0,l.kt)("h3",{id:"\u6570\u636e\u5b58\u50a8\u7279\u6027"},"\u6570\u636e\u5b58\u50a8\u7279\u6027"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u901a\u8fc7\u4e3b\u952e\u5bf9\u6570\u636e\u8fdb\u884c\u7269\u7406\u6392\u5e8f\uff0c\u53ef\u4ee5\u5728\u4e0d\u5230\u51e0\u5341\u6beb\u79d2\u7684\u65f6\u95f4\u5185\u4ee5\u4f4e\u5ef6\u8fdf\u63d0\u53d6\u57fa\u4e8e\u7279\u5b9a\u503c\u6216\u503c\u8303\u56f4\u7684\u6570\u636e"),"\u3002\u4e00\u4e9b\u9762\u5411\u5217\u7684 DBMS\uff0c\u4f8b\u5982 SAP HANA \u548c Google PowerDrill\uff0c\u53ea\u80fd\u5728 RAM \u4e2d\u5de5\u4f5c\u3002\u8fd9\u79cd\u65b9\u6cd5\u9700\u8981\u5206\u914d\u6bd4\u5b9e\u65f6\u5206\u6790\u6240\u9700\u7684\u66f4\u5927\u7684\u786c\u4ef6\u9884\u7b97\u3002"),(0,l.kt)("p",null,"ClickHouse \u8bbe\u8ba1\u7528\u4e8e\u5728\u5e38\u89c4\u786c\u76d8\u4e0a\u8fd0\u884c\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u8fd9\u610f\u5473\u7740\u6bcf GB \u6570\u636e\u5b58\u50a8\u7684\u6210\u672c\u8f83\u4f4e"),"\uff0c\u4f46\u5982\u679c\u53ef\u7528\uff0cSSD \u548c\u989d\u5916\u7684 RAM \u4e5f\u4f1a\u5f97\u5230\u5145\u5206\u5229\u7528\u3002"),(0,l.kt)("h3",{id:"\u5206\u5e03\u5f0f\u5904\u7406"},"\u5206\u5e03\u5f0f\u5904\u7406"),(0,l.kt)("p",null,"\u4e0a\u9762\u63d0\u5230\u7684\u5217\u5f0f DBMS \u51e0\u4e4e\u90fd\u4e0d\u652f\u6301\u5206\u5e03\u5f0f\u67e5\u8be2\u5904\u7406\u3002"),(0,l.kt)("p",null,"\u5728 ClickHouse \u4e2d\uff0c\u6570\u636e\u53ef\u4ee5\u9a7b\u7559\u5728\u4e0d\u540c\u7684\u5206\u7247\u4e0a\u3002\u6bcf\u4e2a\u5206\u7247\u53ef\u4ee5\u662f\u4e00\u7ec4\u7528\u4e8e\u5bb9\u9519\u7684\u526f\u672c\u3002",(0,l.kt)("strong",{parentName:"p"},"\u6240\u6709\u5206\u7247\u90fd\u7528\u4e8e\u5e76\u884c\u8fd0\u884c\u67e5\u8be2\uff0c\u5bf9\u7528\u6237\u900f\u660e"),"\uff0c\u4e5f\u5c31\u662f\u8bf4\u591a\u4e2a\u526f\u672c\u80fd\u591f\u63d0\u9ad8\u67e5\u8be2\u7684\u901f\u5ea6\u3002"),(0,l.kt)("h3",{id:"\u81ea\u9002\u5e94join"},"\u81ea\u9002\u5e94Join"),(0,l.kt)("p",null,"ClickHouse \u81ea\u9002\u5e94\u5730\u9009\u62e9\u5982\u4f55JOIN\u591a\u4e2a\u8868\uff0c\u5982\u679c\u6709\u591a\u4e2a\u5927\u8868\uff0c\u5219\u4f18\u5148\u9009\u62e9\u54c8\u5e0c\u8fde\u63a5\u7b97\u6cd5\uff0c\u5e76\u56de\u9000\u5230\u5408\u5e76\u8fde\u63a5\u7b97\u6cd5\u3002"))}k.isMDXComponent=!0},81245:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/hang-3e6fd5aa48e3075202d242b4799da8fa.gif"},58746:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/lie-d082e49b7743d4ded32c7952bfdb028f.gif"}}]);