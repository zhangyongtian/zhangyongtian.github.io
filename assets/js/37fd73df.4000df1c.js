"use strict";(self.webpackChunkathenaserving=self.webpackChunkathenaserving||[]).push([[480],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,d=s["".concat(p,".").concat(m)]||s[m]||u[m]||l;return n?r.createElement(d,i(i({ref:t},k),{},{components:n})):r.createElement(d,i({ref:t},k))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97298:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={sidebar_position:1,sidebar_label:"\u6982\u8ff0"},i=void 0,o={unversionedId:"\u6570\u636e\u96c6\u6210/Flink CDC/\u6982\u8ff0",id:"\u6570\u636e\u96c6\u6210/Flink CDC/\u6982\u8ff0",title:"\u6982\u8ff0",description:"Flink CDC \u5b98\u7f51",source:"@site/docs/\u6570\u636e\u96c6\u6210/Flink CDC/\u6982\u8ff0.md",sourceDirName:"\u6570\u636e\u96c6\u6210/Flink CDC",slug:"/\u6570\u636e\u96c6\u6210/Flink CDC/\u6982\u8ff0",permalink:"/docs/\u6570\u636e\u96c6\u6210/Flink CDC/\u6982\u8ff0",draft:!1,editUrl:"https://github.com/zhangyongtian/bigdataknowledge/tree/dev/docs/\u6570\u636e\u96c6\u6210/Flink CDC/\u6982\u8ff0.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"\u6982\u8ff0"},sidebar:"docSidebar",previous:{title:"Flink CDC",permalink:"/docs/category/flink-cdc"},next:{title:"\u6838\u5fc3\u7279\u6027",permalink:"/docs/\u6570\u636e\u96c6\u6210/Flink CDC/\u6838\u5fc3\u7279\u6027"}},p={},c=[{value:"Flink CDC \u5b98\u7f51",id:"flink-cdc-\u5b98\u7f51",level:2}],k={toc:c},s="wrapper";function u(e){let{components:t,...l}=e;return(0,a.kt)(s,(0,r.Z)({},k,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"flink-cdc-\u5b98\u7f51"},"Flink CDC \u5b98\u7f51"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://ververica.github.io/flink-cdc-connectors/master/"},"https://ververica.github.io/flink-cdc-connectors/master/"))),(0,a.kt)("p",null,"\u4ece\u5e7f\u4e49\u7684\u6982\u5ff5\u4e0a\u8bb2\uff0c\u80fd\u591f\u6355\u83b7\u6570\u636e\u53d8\u66f4\u7684\u6280\u672f, \u6211\u4eec\u90fd\u53ef\u4ee5\u79f0\u4e3a CDC \u6280\u672f\u3002\u901a\u5e38\u6211\u4eec\u8bf4\u7684 CDC \u6280\u672f\u662f\u4e00\u79cd\u7528\u4e8e\u6355\u83b7\u6570\u636e\u5e93\u4e2d\u6570\u636e\u53d8\u66f4\u7684\u6280\u672f\u3002CDC \u6280\u672f\u5e94\u7528\u573a\u666f\u4e5f\u975e\u5e38\u5e7f\u6cdb\uff0c\u5305\u62ec\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6570\u636e\u5206\u53d1\uff0c\u5c06\u4e00\u4e2a\u6570\u636e\u6e90",(0,a.kt)("strong",{parentName:"p"},"\u5206\u53d1\u7ed9\u591a\u4e2a\u4e0b\u6e38"),"\uff0c\u5e38\u7528\u4e8e\u4e1a\u52a1\u89e3\u8026\u3001\u5fae\u670d\u52a1\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6570\u636e\u96c6\u6210\uff0c\u5c06\u5206\u6563\u5f02\u6784\u7684",(0,a.kt)("strong",{parentName:"p"},"\u6570\u636e\u6e90\u96c6\u6210\u5230\u6570\u636e\u4ed3\u5e93"),"\u4e2d\uff0c\u6d88\u9664\u6570\u636e\u5b64\u5c9b\uff0c\u4fbf\u4e8e\u540e\u7eed\u7684\u5206\u6790\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6570\u636e\u8fc1\u79fb\uff0c\u5e38\u7528\u4e8e",(0,a.kt)("strong",{parentName:"p"},"\u6570\u636e\u5e93\u5907\u4efd\u3001\u5bb9\u707e"),"\u7b49\u3002"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"cdc\u6982\u8ff0",src:n(7994).Z,width:"2082",height:"1078"})),(0,a.kt)("p",null,"Flink CDC \u57fa\u4e8e",(0,a.kt)("strong",{parentName:"p"},"\u6570\u636e\u5e93\u65e5\u5fd7\u7684 Change Data Caputre \u6280\u672f"),"\uff0c\u5b9e\u73b0\u4e86",(0,a.kt)("strong",{parentName:"p"},"\u5168\u91cf\u548c\u589e\u91cf\u7684\u4e00\u4f53\u5316\u8bfb\u53d6\u80fd\u529b"),"\uff0c\u5e76\u501f\u52a9 Flink \u4f18\u79c0\u7684\u7ba1\u9053\u80fd\u529b\u548c\u4e30\u5bcc\u7684\u4e0a\u4e0b\u6e38\u751f\u6001\uff0c\u652f\u6301\u6355\u83b7\u591a\u79cd\u6570\u636e\u5e93\u7684\u53d8\u66f4\uff0c\u5e76\u5c06\u8fd9\u4e9b\u53d8\u66f4\u5b9e\u65f6\u540c\u6b65\u5230\u4e0b\u6e38\u5b58\u50a8\u3002"),(0,a.kt)("p",null,"\u76ee\u524d\uff0cFlink CDC \u7684\u4e0a\u6e38\u5df2\u7ecf\u652f\u6301\u4e86 MySQL\u3001MariaDB\u3001PG\u3001Oracle\u3001MongoDB \u7b49\u4e30\u5bcc\u7684\u6570\u636e\u6e90\uff0c\u5bf9 Oceanbase\u3001TiDB\u3001SQLServer \u7b49\u6570\u636e\u5e93\u7684\u652f\u6301\u4e5f\u5df2\u7ecf\u5728\u793e\u533a\u7684\u89c4\u5212\u4e2d\u3002"),(0,a.kt)("p",null,"Flink CDC \u7684\u4e0b\u6e38\u5219\u66f4\u52a0\u4e30\u5bcc\uff0c\u652f\u6301\u5199\u5165 Kafka\u3001Pulsar \u6d88\u606f\u961f\u5217\uff0c\u4e5f\u652f\u6301\u5199\u5165 Hudi\u3001Iceberg \u7b49\u6570\u636e\u6e56\uff0c\u8fd8\u652f\u6301\u5199\u5165\u5404\u79cd\u6570\u636e\u4ed3\u5e93\u3002"),(0,a.kt)("p",null,"\u540c\u65f6\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u901a\u8fc7 Flink SQL \u539f\u751f\u652f\u6301\u7684 Changelog \u673a\u5236\uff0c\u53ef\u4ee5\u8ba9 CDC \u6570\u636e\u7684\u52a0\u5de5\u53d8\u5f97\u975e\u5e38\u7b80\u5355"),"\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 SQL \u4fbf\u80fd\u5b9e\u73b0\u6570\u636e\u5e93\u5168\u91cf\u548c\u589e\u91cf\u6570\u636e\u7684\u6e05\u6d17\u3001\u6253\u5bbd\u3001\u805a\u5408\u7b49\u64cd\u4f5c\uff0c\u6781\u5927\u5730\u964d\u4f4e\u4e86\u7528\u6237\u95e8\u69db\u3002 \u6b64\u5916\uff0c Flink DataStream API \u652f\u6301\u7528\u6237\u7f16\u5199\u4ee3\u7801\u5b9e\u73b0\u81ea\u5b9a\u4e49\u903b\u8f91\uff0c\u7ed9\u7528\u6237\u63d0\u4f9b\u4e86\u6df1\u5ea6\u5b9a\u5236\u4e1a\u52a1\u7684\u81ea\u7531\u5ea6\u3002"),(0,a.kt)("p",null,"Flink CDC \u6280\u672f\u7684\u6838\u5fc3\u662f",(0,a.kt)("strong",{parentName:"p"},"\u652f\u6301\u5c06\u8868\u4e2d\u7684\u5168\u91cf\u6570\u636e\u548c\u589e\u91cf\u6570\u636e\u505a\u5b9e\u65f6\u4e00\u81f4\u6027\u7684\u540c\u6b65\u4e0e\u52a0\u5de5"),"\uff0c\u8ba9\u7528\u6237\u53ef\u4ee5\u65b9\u4fbf\u5730\u83b7\u6bcf\u5f20\u8868\u7684\u5b9e\u65f6\u4e00\u81f4\u6027\u5feb\u7167\u3002\u6bd4\u5982\u4e00\u5f20\u8868\u4e2d\u6709\u5386\u53f2\u7684\u5168\u91cf\u4e1a\u52a1\u6570\u636e\uff0c\u4e5f\u6709\u589e\u91cf\u7684\u4e1a\u52a1\u6570\u636e\u5728\u6e90\u6e90\u4e0d\u65ad\u5199\u5165\uff0c\u66f4\u65b0\u3002Flink CDC \u4f1a\u5b9e\u65f6\u6293\u53d6\u589e\u91cf\u7684\u66f4\u65b0\u8bb0\u5f55\uff0c\u5b9e\u65f6\u63d0\u4f9b\u4e0e\u6570\u636e\u5e93\u4e2d\u4e00\u81f4\u6027\u7684\u5feb\u7167\uff0c\u5982\u679c\u662f\u66f4\u65b0\u8bb0\u5f55\uff0c\u4f1a\u66f4\u65b0\u5df2\u6709\u6570\u636e\u3002\u5982\u679c\u662f\u63d2\u5165\u8bb0\u5f55\uff0c\u5219\u4f1a\u8ffd\u52a0\u5230\u5df2\u6709\u6570\u636e\uff0c\u6574\u4e2a\u8fc7\u7a0b\u4e2d\uff0c",(0,a.kt)("strong",{parentName:"p"},"Flink CDC \u63d0\u4f9b\u4e86\u4e00\u81f4\u6027\u4fdd\u969c\uff0c\u5373\u4e0d\u91cd\u4e0d\u4e22"),"\u3002"),(0,a.kt)("p",null,"\u90a3\u4e48 Flink CDC \u6280\u672f\u80fd\u7ed9\u73b0\u6709\u7684\u6570\u636e\u5165\u4ed3\u5165\u6e56\u67b6\u6784\u5e26\u6765\u4ec0\u4e48\u6837\u7684\u6539\u53d8\u5462\uff1f\u6211\u4eec\u53ef\u4ee5\u5148\u6765\u770b\u770b\u4f20\u7edf\u6570\u636e\u5165\u4ed3\u7684\u67b6\u6784\u3002"),(0,a.kt)("p",null,"\u5728",(0,a.kt)("strong",{parentName:"p"},"\u65e9\u671f\u7684\u6570\u636e\u5165\u4ed3\u67b6\u6784\u4e2d\uff0c\u4e00\u822c\u4f1a\u6bcf\u5929 SELECT \u5168\u91cf\u6570\u636e\u5bfc\u5165\u6570\u4ed3\u540e\u518d\u505a\u79bb\u7ebf\u5206\u6790"),"\u3002\u8fd9\u79cd\u67b6\u6784\u6709\u51e0\u4e2a\u660e\u663e\u7684\u7f3a\u70b9\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6bcf\u5929\u67e5\u8be2\u5168\u91cf\u7684\u4e1a\u52a1\u8868\u4f1a\u5f71\u54cd\u4e1a\u52a1\u81ea\u8eab\u7a33\u5b9a\u6027\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u79bb\u7ebf\u5929\u7ea7\u522b\u8c03\u5ea6\u7684\u65b9\u5f0f\uff0c\u5929\u7ea7\u522b\u7684\u4ea7\u51fa\u65f6\u6548\u6027\u5dee\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u57fa\u4e8e\u67e5\u8be2\u65b9\u5f0f\uff0c\u968f\u7740\u6570\u636e\u91cf\u7684\u4e0d\u65ad\u589e\u957f\uff0c\u5bf9\u6570\u636e\u5e93\u7684\u538b\u529b\u4e5f\u4f1a\u4e0d\u65ad\u589e\u52a0\uff0c\u67b6\u6784\u6027\u80fd\u74f6\u9888\u660e\u663e\u3002"))),(0,a.kt)("p",null,"\u5230\u4e86",(0,a.kt)("strong",{parentName:"p"},"\u6570\u636e\u4ed3\u5e93\u7684 2.0 \u65f6\u4ee3\uff0c\u6570\u636e\u5165\u4ed3\u8fdb\u5316\u5230\u4e86 Lambda \u67b6\u6784"),"\uff0c\u589e\u52a0\u4e86\u5b9e\u65f6\u540c\u6b65\u5bfc\u5165\u589e\u91cf\u7684\u94fe\u8def\u3002\u6574\u4f53\u6765\u8bf4\uff0cLambda \u67b6\u6784\u7684\u6269\u5c55\u6027\u66f4\u597d\uff0c\u4e5f\u4e0d\u518d\u5f71\u54cd\u4e1a\u52a1\u7684\u7a33\u5b9a\u6027\uff0c\u4f46\u4ecd\u7136\u5b58\u5728\u4e00\u4e9b\u95ee\u9898\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4f9d\u8d56\u79bb\u7ebf\u7684\u5b9a\u65f6\u5408\u5e76\uff0c\u53ea\u80fd\u505a\u5230\u5c0f\u65f6\u7ea7\u4ea7\u51fa\uff0c\u5ef6\u65f6\u8fd8\u662f\u8f83\u5927\uff1b")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5168\u91cf\u548c\u589e\u91cf\u662f\u5272\u88c2\u7684\u4e24\u6761\u94fe\u8def\uff1b")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6574\u4e2a\u67b6\u6784\u94fe\u8def\u957f\uff0c\u9700\u8981\u7ef4\u62a4\u7684\u7ec4\u4ef6\u6bd4\u8f83\u591a\uff0c\u8be5\u67b6\u6784\u7684\u5168\u91cf\u94fe\u8def\u9700\u8981\u7ef4\u62a4 DataX \u6216 Sqoop \u7ec4\u4ef6\uff0c\u589e\u91cf\u94fe\u8def\u8981\u7ef4\u62a4 Canal \u548c Kafka \u7ec4\u4ef6\uff0c\u540c\u65f6\u8fd8\u8981\u7ef4\u62a4\u5168\u91cf\u548c\u589e\u91cf\u7684\u5b9a\u65f6\u5408\u5e76\u94fe\u8def\u3002"))),(0,a.kt)("p",null,"\u5bf9\u4e8e\u4f20\u7edf\u6570\u636e\u5165\u4ed3\u67b6\u6784\u5b58\u5728\u7684\u95ee\u9898\uff0c",(0,a.kt)("strong",{parentName:"p"},"Flink CDC \u7684\u51fa\u73b0\u4e3a\u6570\u636e\u5165\u6e56\u67b6\u6784\u63d0\u4f9b\u4e86\u4e00\u4e9b\u65b0\u601d\u8def\u3002\u501f\u52a9 Flink CDC \u6280\u672f\u7684\u5168\u589e\u91cf\u4e00\u4f53\u5316\u5b9e\u65f6\u540c\u6b65\u80fd\u529b\uff0c\u7ed3\u5408\u6570\u636e\u6e56\u63d0\u4f9b\u7684\u66f4\u65b0\u80fd\u529b\uff0c\u6574\u4e2a\u67b6\u6784\u53d8\u5f97\u975e\u5e38\u7b80\u6d01\u3002\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 Flink CDC \u8bfb\u53d6 MySQL \u7684\u5168\u91cf\u548c\u589e\u91cf\u6570\u636e\uff0c\u5e76\u76f4\u63a5\u5199\u5165\u548c\u66f4\u65b0\u5230 Hudi"),"\u4e2d\u3002"),(0,a.kt)("p",null,"\u8fd9\u79cd\u7b80\u6d01\u7684\u67b6\u6784\u6709\u7740\u660e\u663e\u7684\u4f18\u52bf\u3002\u9996\u5148\uff0c\u4e0d\u4f1a\u5f71\u54cd\u4e1a\u52a1\u7a33\u5b9a\u6027\u3002\u5176\u6b21\uff0c\u63d0\u4f9b\u5206\u949f\u7ea7\u4ea7\u51fa\uff0c\u6ee1\u8db3\u8fd1\u5b9e\u65f6\u4e1a\u52a1\u7684\u9700\u6c42\u3002\u540c\u65f6\uff0c\u5168\u91cf\u548c\u589e\u91cf\u7684\u94fe\u8def\u5b8c\u6210\u4e86\u7edf\u4e00\uff0c\u5b9e\u73b0\u4e86\u4e00\u4f53\u5316\u540c\u6b65\u3002\u6700\u540e\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u8be5\u67b6\u6784\u7684\u94fe\u8def\u66f4\u77ed\uff0c\u9700\u8981\u7ef4\u62a4\u7684\u7ec4\u4ef6\u66f4\u5c11"),"\u3002"))}u.isMDXComponent=!0},7994:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cdcoverview-dd0555a6ad04db0eab048614d84c4aa0.png"}}]);