"use strict";(self.webpackChunkathenaserving=self.webpackChunkathenaserving||[]).push([[5820],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),p=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=p(e.components);return o.createElement(u.Provider,{value:t},e.children)},i="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),i=p(r),c=n,d=i["".concat(u,".").concat(c)]||i[c]||h[c]||a;return r?o.createElement(d,s(s({ref:t},m),{},{components:r})):o.createElement(d,s({ref:t},m))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[i]="string"==typeof e?e:n,s[1]=l;for(var p=2;p<a;p++)s[p]=r[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},14801:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const a={sidebar_position:1,sidebar_label:"\u6982\u89c8"},s=void 0,l={unversionedId:"\u5e73\u53f0\u76d1\u63a7/Prometheus/\u6982\u89c8",id:"\u5e73\u53f0\u76d1\u63a7/Prometheus/\u6982\u89c8",title:"\u6982\u89c8",description:"Prometheus\u7b80\u4ecb",source:"@site/docs/\u5e73\u53f0\u76d1\u63a7/Prometheus/\u6982\u89c8.md",sourceDirName:"\u5e73\u53f0\u76d1\u63a7/Prometheus",slug:"/\u5e73\u53f0\u76d1\u63a7/Prometheus/\u6982\u89c8",permalink:"/en/docs/\u5e73\u53f0\u76d1\u63a7/Prometheus/\u6982\u89c8",draft:!1,editUrl:"https://github.com/zhangyongtian/bigdataknowledge/tree/dev/docs/\u5e73\u53f0\u76d1\u63a7/Prometheus/\u6982\u89c8.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"\u6982\u89c8"},sidebar:"docSidebar",previous:{title:"Prometheus",permalink:"/en/docs/category/prometheus"},next:{title:"\u5c0f\u8bd5\u8eab\u624b",permalink:"/en/docs/\u5e73\u53f0\u76d1\u63a7/Prometheus/\u5c0f\u8bd5\u8eab\u624b"}},u={},p=[{value:"Prometheus\u7b80\u4ecb",id:"prometheus\u7b80\u4ecb",level:2},{value:"Prometheus\u67b6\u6784",id:"prometheus\u67b6\u6784",level:2},{value:"Prometheus Server",id:"prometheus-server",level:3},{value:"Exporters",id:"exporters",level:3},{value:"AlertManager",id:"alertmanager",level:3},{value:"PushGateway",id:"pushgateway",level:3},{value:"Prometheus\u7684\u4f18\u52bf",id:"prometheus\u7684\u4f18\u52bf",level:2},{value:"\u6613\u4e8e\u7ba1\u7406",id:"\u6613\u4e8e\u7ba1\u7406",level:3},{value:"\u76d1\u63a7\u670d\u52a1\u7684\u5185\u90e8\u8fd0\u884c\u72b6\u6001",id:"\u76d1\u63a7\u670d\u52a1\u7684\u5185\u90e8\u8fd0\u884c\u72b6\u6001",level:3},{value:"\u5f3a\u5927\u7684\u6570\u636e\u6a21\u578b",id:"\u5f3a\u5927\u7684\u6570\u636e\u6a21\u578b",level:3},{value:"\u5f3a\u5927\u7684\u67e5\u8be2\u8bed\u8a00PromQL",id:"\u5f3a\u5927\u7684\u67e5\u8be2\u8bed\u8a00promql",level:3},{value:"\u9ad8\u6548",id:"\u9ad8\u6548",level:3},{value:"\u53ef\u6269\u5c55",id:"\u53ef\u6269\u5c55",level:3},{value:"\u6613\u4e8e\u96c6\u6210",id:"\u6613\u4e8e\u96c6\u6210",level:3},{value:"\u53ef\u89c6\u5316",id:"\u53ef\u89c6\u5316",level:3},{value:"\u5f00\u653e\u6027",id:"\u5f00\u653e\u6027",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],m={toc:p},i="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(i,(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"prometheus\u7b80\u4ecb"},"Prometheus\u7b80\u4ecb"),(0,n.kt)("p",null,"Prometheus\u53d7\u542f\u53d1\u4e8eGoogle\u7684Brogmon\u76d1\u63a7\u7cfb\u7edf\uff08\u76f8\u4f3c\u7684Kubernetes\u662f\u4eceGoogle\u7684Brog\u7cfb\u7edf\u6f14\u53d8\u800c\u6765\uff09\uff0c\u4ece2012\u5e74\u5f00\u59cb\u7531\u524dGoogle\u5de5\u7a0b\u5e08\u5728Soundcloud\u4ee5\u5f00\u6e90\u8f6f\u4ef6\u7684\u5f62\u5f0f\u8fdb\u884c\u7814\u53d1\uff0c\u5e76\u4e14\u4e8e2015\u5e74\u65e9\u671f\u5bf9\u5916\u53d1\u5e03\u65e9\u671f\u7248\u672c\u30022016\u5e745\u6708\u7ee7Kubernetes\u4e4b\u540e\u6210\u4e3a\u7b2c\u4e8c\u4e2a\u6b63\u5f0f\u52a0\u5165CNCF\u57fa\u91d1\u4f1a\u7684\u9879\u76ee\uff0c\u540c\u5e746\u6708\u6b63\u5f0f\u53d1\u5e031.0\u7248\u672c\u30022017\u5e74\u5e95\u53d1\u5e03\u4e86\u57fa\u4e8e\u5168\u65b0\u5b58\u50a8\u5c42\u76842.0\u7248\u672c\uff0c\u80fd\u66f4\u597d\u5730\u4e0e\u5bb9\u5668\u5e73\u53f0\u3001\u4e91\u5e73\u53f0\u914d\u5408\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u7b80\u4ecb",src:r(44473).Z,width:"869",height:"269"})),(0,n.kt)("p",null,"Prometheus\u4f5c\u4e3a\u65b0\u4e00\u4ee3\u7684\u4e91\u539f\u751f\u76d1\u63a7\u7cfb\u7edf\uff0c\u76ee\u524d\u5df2\u7ecf\u6709\u8d85\u8fc7650+\u4f4d\u8d21\u732e\u8005\u53c2\u4e0e\u5230Prometheus\u7684\u7814\u53d1\u5de5\u4f5c\u4e0a\uff0c\u5e76\u4e14\u8d85\u8fc7120+\u9879\u7684\u7b2c\u4e09\u65b9\u96c6\u6210\u3002"),(0,n.kt)("h2",{id:"prometheus\u67b6\u6784"},"Prometheus\u67b6\u6784"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u7b80\u4ecb",src:r(63506).Z,width:"1351",height:"811"})),(0,n.kt)("h3",{id:"prometheus-server"},"Prometheus Server"),(0,n.kt)("p",null,"Prometheus Server\u662fPrometheus\u7ec4\u4ef6\u4e2d\u7684\u6838\u5fc3\u90e8\u5206\uff0c",(0,n.kt)("strong",{parentName:"p"},"\u8d1f\u8d23\u5b9e\u73b0\u5bf9\u76d1\u63a7\u6570\u636e\u7684\u83b7\u53d6\uff0c\u5b58\u50a8\u4ee5\u53ca\u67e5\u8be2"),"\u3002 ",(0,n.kt)("strong",{parentName:"p"},"Prometheus Server\u53ef\u4ee5\u901a\u8fc7\u9759\u6001\u914d\u7f6e\u7ba1\u7406\u76d1\u63a7\u76ee\u6807\uff0c\u4e5f\u53ef\u4ee5\u914d\u5408\u4f7f\u7528Service Discovery\u7684\u65b9\u5f0f\u52a8\u6001\u7ba1\u7406\u76d1\u63a7\u76ee\u6807\uff0c\u5e76\u4ece\u8fd9\u4e9b\u76d1\u63a7\u76ee\u6807\u4e2d\u83b7\u53d6\u6570\u636e"),"\u3002\u5176\u6b21Prometheus Server\u9700\u8981\u5bf9\u91c7\u96c6\u5230\u7684\u76d1\u63a7\u6570\u636e\u8fdb\u884c\u5b58\u50a8\uff0cPrometheus Server\u672c\u8eab\u5c31\u662f\u4e00\u4e2a\u65f6\u5e8f\u6570\u636e\u5e93\uff0c\u5c06\u91c7\u96c6\u5230\u7684\u76d1\u63a7\u6570\u636e\u6309\u7167\u65f6\u95f4\u5e8f\u5217\u7684\u65b9\u5f0f\u5b58\u50a8\u5728\u672c\u5730\u78c1\u76d8\u5f53\u4e2d\u3002\u6700\u540ePrometheus Server\u5bf9\u5916",(0,n.kt)("strong",{parentName:"p"},"\u63d0\u4f9b\u4e86\u81ea\u5b9a\u4e49\u7684PromQL\u8bed\u8a00\uff0c\u5b9e\u73b0\u5bf9\u6570\u636e\u7684\u67e5\u8be2\u4ee5\u53ca\u5206\u6790"),"\u3002"),(0,n.kt)("p",null,"Prometheus Server\u5185\u7f6e\u7684Express Browser UI\uff0c\u901a\u8fc7\u8fd9\u4e2aUI\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7PromQL\u5b9e\u73b0\u6570\u636e\u7684\u67e5\u8be2\u4ee5\u53ca\u53ef\u89c6\u5316\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Prometheus Server\u7684\u8054\u90a6\u96c6\u7fa4\u80fd\u529b\u53ef\u4ee5\u4f7f\u5176\u4ece\u5176\u4ed6\u7684Prometheus Server\u5b9e\u4f8b\u4e2d\u83b7\u53d6\u6570\u636e"),"\uff0c\u56e0\u6b64\u5728\u5927\u89c4\u6a21\u76d1\u63a7\u7684\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u901a\u8fc7\u8054\u90a6\u96c6\u7fa4\u4ee5\u53ca\u529f\u80fd\u5206\u533a\u7684\u65b9\u5f0f\u5bf9Prometheus Server\u8fdb\u884c\u6269\u5c55\u3002"),(0,n.kt)("h3",{id:"exporters"},"Exporters"),(0,n.kt)("p",null,"Exporter\u5c06\u76d1\u63a7\u6570\u636e",(0,n.kt)("strong",{parentName:"p"},"\u91c7\u96c6\u7684\u7aef\u70b9\u901a\u8fc7HTTP\u670d\u52a1\u7684\u5f62\u5f0f\u66b4\u9732\u7ed9Prometheus Server"),"\uff0cPrometheus Server\u901a\u8fc7\u8bbf\u95ee\u8be5Exporter\u63d0\u4f9b\u7684Endpoint\u7aef\u70b9\uff0c\u5373\u53ef\u83b7\u53d6\u5230\u9700\u8981\u91c7\u96c6\u7684\u76d1\u63a7\u6570\u636e\u3002\n\u4e00\u822c\u6765\u8bf4\u53ef\u4ee5\u5c06Exporter\u5206\u4e3a2\u7c7b\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u91c7\u96c6\uff1a\u8fd9\u4e00\u7c7bExporter\u76f4\u63a5\u5185\u7f6e\u4e86\u5bf9Prometheus\u76d1\u63a7\u7684\u652f\u6301\uff0c\u6bd4\u5982cAdvisor\uff0cKubernetes\uff0cEtcd\uff0cGokit\u7b49\uff0c\u90fd\u76f4\u63a5\u5185\u7f6e\u4e86\u7528\u4e8e\u5411Prometheus\u66b4\u9732\u76d1\u63a7\u6570\u636e\u7684\u7aef\u70b9\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u95f4\u63a5\u91c7\u96c6\uff1a\u95f4\u63a5\u91c7\u96c6\uff0c",(0,n.kt)("strong",{parentName:"li"},"\u539f\u6709\u76d1\u63a7\u76ee\u6807\u5e76\u4e0d\u76f4\u63a5\u652f\u6301Prometheus\uff0c\u56e0\u6b64\u6211\u4eec\u9700\u8981\u901a\u8fc7Prometheus\u63d0\u4f9b\u7684Client Library\u7f16\u5199\u8be5\u76d1\u63a7\u76ee\u6807\u7684\u76d1\u63a7\u91c7\u96c6\u7a0b\u5e8f"),"\u3002\u4f8b\u5982\uff1a Mysql Exporter\uff0cJMX Exporter\uff0cConsul Exporter\u7b49\u3002")),(0,n.kt)("h3",{id:"alertmanager"},"AlertManager"),(0,n.kt)("p",null,"\u5728Prometheus Server\u4e2d\u652f\u6301\u57fa\u4e8ePromQL\u521b\u5efa\u544a\u8b66\u89c4\u5219\uff0c\u5982\u679c\u6ee1\u8db3PromQL\u5b9a\u4e49\u7684\u89c4\u5219\uff0c\u5219\u4f1a\u4ea7\u751f\u4e00\u6761\u544a\u8b66\uff0c\u800c\u544a\u8b66\u7684\u540e\u7eed\u5904\u7406\u6d41\u7a0b\u5219\u7531AlertManager\u8fdb\u884c\u7ba1\u7406\u3002\u5728AlertManager\u4e2d\u6211\u4eec\u53ef\u4ee5\u4e0e\u90ae\u4ef6\uff0cSlack\u7b49\u7b49\u5185\u7f6e\u7684\u901a\u77e5\u65b9\u5f0f\u8fdb\u884c\u96c6\u6210\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7Webhook\u81ea\u5b9a\u4e49\u544a\u8b66\u5904\u7406\u65b9\u5f0f\u3002AlertManager\u5373Prometheus\u4f53\u7cfb\u4e2d\u7684\u544a\u8b66\u5904\u7406\u4e2d\u5fc3\u3002"),(0,n.kt)("h3",{id:"pushgateway"},"PushGateway"),(0,n.kt)("p",null,"\u7531\u4e8ePrometheus\u6570\u636e\u91c7\u96c6\u57fa\u4e8ePull\u6a21\u578b\u8fdb\u884c\u8bbe\u8ba1\uff0c\u56e0\u6b64\u5728\u7f51\u7edc\u73af\u5883\u7684\u914d\u7f6e\u4e0a\u5fc5\u987b\u8981\u8ba9Prometheus Server\u80fd\u591f\u76f4\u63a5\u4e0eExporter\u8fdb\u884c\u901a\u4fe1\u3002 ",(0,n.kt)("strong",{parentName:"p"},"\u5f53\u8fd9\u79cd\u7f51\u7edc\u9700\u6c42\u65e0\u6cd5\u76f4\u63a5\u6ee1\u8db3\u65f6\uff0c\u5c31\u53ef\u4ee5\u5229\u7528PushGateway\u6765\u8fdb\u884c\u4e2d\u8f6c"),"\u3002\u53ef\u4ee5\u901a\u8fc7PushGateway\u5c06\u5185\u90e8\u7f51\u7edc\u7684\u76d1\u63a7\u6570\u636e\u4e3b\u52a8Push\u5230Gateway\u5f53\u4e2d\u3002\u800cPrometheus Server\u5219\u53ef\u4ee5\u91c7\u7528\u540c\u6837Pull\u7684\u65b9\u5f0f\u4ecePushGateway\u4e2d\u83b7\u53d6\u5230\u76d1\u63a7\u6570\u636e\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u7b80\u4ecb",src:r(85887).Z,width:"848",height:"334"})),(0,n.kt)("h2",{id:"prometheus\u7684\u4f18\u52bf"},"Prometheus\u7684\u4f18\u52bf"),(0,n.kt)("p",null,"Prometheus\u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u5b8c\u6574\u76d1\u63a7\u89e3\u51b3\u65b9\u6848\uff0c\u5176\u5bf9\u4f20\u7edf\u76d1\u63a7\u7cfb\u7edf\u7684\u6d4b\u8bd5\u548c\u544a\u8b66\u6a21\u578b\u8fdb\u884c\u4e86\u5f7b\u5e95\u7684\u98a0\u8986\uff0c\u5f62\u6210\u4e86\u57fa\u4e8e\u4e2d\u592e\u5316\u7684\u89c4\u5219\u8ba1\u7b97\u3001\u7edf\u4e00\u5206\u6790\u548c\u544a\u8b66\u7684\u65b0\u6a21\u578b\u3002 \u76f8\u6bd4\u4e8e\u4f20\u7edf\u76d1\u63a7\u7cfb\u7edfPrometheus\u5177\u6709\u4ee5\u4e0b\u4f18\u70b9"),(0,n.kt)("h3",{id:"\u6613\u4e8e\u7ba1\u7406"},"\u6613\u4e8e\u7ba1\u7406"),(0,n.kt)("p",null,"Prometheus\u6838\u5fc3\u90e8\u5206",(0,n.kt)("strong",{parentName:"p"},"\u53ea\u6709\u4e00\u4e2a\u5355\u72ec\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u4e0d\u5b58\u5728\u4efb\u4f55\u7684\u7b2c\u4e09\u65b9\u4f9d\u8d56(\u6570\u636e\u5e93\uff0c\u7f13\u5b58\u7b49\u7b49)"),"\u3002\u552f\u4e00\u9700\u8981\u7684\u5c31\u662f\u672c\u5730\u78c1\u76d8\uff0c\u56e0\u6b64\u4e0d\u4f1a\u6709\u6f5c\u5728\u7ea7\u8054\u6545\u969c\u7684\u98ce\u9669\u3002\n",(0,n.kt)("strong",{parentName:"p"},"Prometheus\u57fa\u4e8ePull\u6a21\u578b\u7684\u67b6\u6784\u65b9\u5f0f"),"\uff0c\u53ef\u4ee5\u5728\u4efb\u4f55\u5730\u65b9\uff08\u672c\u5730\u7535\u8111\uff0c\u5f00\u53d1\u73af\u5883\uff0c\u6d4b\u8bd5\u73af\u5883\uff09\u642d\u5efa\u6211\u4eec\u7684\u76d1\u63a7\u7cfb\u7edf\u3002",(0,n.kt)("strong",{parentName:"p"},"\u5bf9\u4e8e\u4e00\u4e9b\u590d\u6742\u7684\u60c5\u51b5\uff0c\u8fd8\u53ef\u4ee5\u4f7f\u7528Prometheus\u670d\u52a1\u53d1\u73b0(Service Discovery)\u7684\u80fd\u529b\u52a8\u6001\u7ba1\u7406\u76d1\u63a7\u76ee\u6807"),"\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u5bf9\u4e8ePrometheus\u8fd9\u4e00\u7c7b\u57fa\u4e8ePull\u6a21\u5f0f\u7684\u76d1\u63a7\u7cfb\u7edf"),"\uff0c\u663e\u7136\u4e5f\u65e0\u6cd5\u7ee7\u7eed\u4f7f\u7528\u7684static_configs\u7684\u65b9\u5f0f\u9759\u6001\u7684\u5b9a\u4e49\u76d1\u63a7\u76ee\u6807\u3002\u800c\u5bf9\u4e8ePrometheus\u800c\u8a00\u5176\u89e3\u51b3\u65b9\u6848\u5c31\u662f\u5f15\u5165\u4e00\u4e2a\u4e2d\u95f4\u7684\u4ee3\u7406\u4eba\uff08\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3\uff09\uff0c\u8fd9\u4e2a\u4ee3\u7406\u4eba\u638c\u63e1\u7740\u5f53\u524d\u6240\u6709\u76d1\u63a7\u76ee\u6807\u7684\u8bbf\u95ee\u4fe1\u606f\uff0cPrometheus\u53ea\u9700\u8981\u5411\u8fd9\u4e2a\u4ee3\u7406\u4eba\u8be2\u95ee\u6709\u54ea\u4e9b\u76d1\u63a7\u76ee\u6807\u5373\u53ef\uff0c \u8fd9\u79cd\u6a21\u5f0f\u88ab\u79f0\u4e3a\u670d\u52a1\u53d1\u73b0\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u7b80\u4ecb",src:r(92796).Z,width:"1636",height:"518"})),(0,n.kt)("p",null,"\u76f8\u8f83\u4e8ePush\u6a21\u5f0f\uff0cPull\u6a21\u5f0f\u7684\u4f18\u70b9\u53ef\u4ee5\u7b80\u5355\u603b\u7ed3\u4e3a\u4ee5\u4e0b\u51e0\u70b9\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u53ea\u8981Exporter\u5728\u8fd0\u884c\uff0c\u4f60\u53ef\u4ee5\u5728\u4efb\u4f55\u5730\u65b9\uff08\u6bd4\u5982\u5728\u672c\u5730\uff09\uff0c\u642d\u5efa\u4f60\u7684\u76d1\u63a7\u7cfb\u7edf\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u4f60\u53ef\u4ee5\u66f4\u5bb9\u6613\u7684\u67e5\u770b\u76d1\u63a7\u76ee\u6807\u5b9e\u4f8b\u7684\u5065\u5eb7\u72b6\u6001\uff0c\u5e76\u4e14\u53ef\u4ee5\u5feb\u901f\u5b9a\u4f4d\u6545\u969c\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u66f4\u5229\u4e8e\u6784\u5efaDevOps\u6587\u5316\u7684\u56e2\u961f\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u677e\u8026\u5408\u7684\u67b6\u6784\u6a21\u5f0f\u66f4\u9002\u5408\u4e8e\u4e91\u539f\u751f\u7684\u90e8\u7f72\u73af\u5883\u3002")),(0,n.kt)("h3",{id:"\u76d1\u63a7\u670d\u52a1\u7684\u5185\u90e8\u8fd0\u884c\u72b6\u6001"},"\u76d1\u63a7\u670d\u52a1\u7684\u5185\u90e8\u8fd0\u884c\u72b6\u6001"),(0,n.kt)("p",null,"Pometheus\u9f13\u52b1\u7528\u6237\u76d1\u63a7\u670d\u52a1\u7684\u5185\u90e8\u72b6\u6001\uff0c",(0,n.kt)("strong",{parentName:"p"},"\u57fa\u4e8ePrometheus\u4e30\u5bcc\u7684Client\u5e93\uff0c\u7528\u6237\u53ef\u4ee5\u8f7b\u677e\u7684\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u6dfb\u52a0\u5bf9Prometheus\u7684\u652f\u6301"),"\uff0c\u4ece\u800c\u8ba9\u7528\u6237\u53ef\u4ee5\u83b7\u53d6\u670d\u52a1\u548c\u5e94\u7528\u5185\u90e8\u771f\u6b63\u7684\u8fd0\u884c\u72b6\u6001\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u7b80\u4ecb",src:r(97980).Z,width:"1226",height:"290"})),(0,n.kt)("h3",{id:"\u5f3a\u5927\u7684\u6570\u636e\u6a21\u578b"},"\u5f3a\u5927\u7684\u6570\u636e\u6a21\u578b"),(0,n.kt)("p",null,"\u6240\u6709\u91c7\u96c6\u7684\u76d1\u63a7\u6570\u636e\u5747",(0,n.kt)("strong",{parentName:"p"},"\u4ee5\u6307\u6807(metric)\u7684\u5f62\u5f0f\u4fdd\u5b58\u5728\u5185\u7f6e\u7684\u65f6\u95f4\u5e8f\u5217\u6570\u636e\u5e93\u5f53\u4e2d(TSDB)"),"\u3002\u6240\u6709\u7684\u6837\u672c\u9664\u4e86\u57fa\u672c\u7684\u6307\u6807\u540d\u79f0\u4ee5\u5916\uff0c\u8fd8\u5305\u542b\u4e00\u7ec4\u7528\u4e8e\u63cf\u8ff0\u8be5\u6837\u672c\u7279\u5f81\u7684\u6807\u7b7e\u3002"),(0,n.kt)("p",null,"\u5982\u4e0b\u6240\u793a\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"http_request_status{code='200',content_path='/api/path', environment='produment'} => [value1@timestamp1,value2@timestamp2...]\n\nhttp_request_status{code='200',content_path='/api/path2', environment='produment'} => [value1@timestamp1,value2@timestamp2...]\n")),(0,n.kt)("p",null,"\u6bcf\u4e00\u6761\u65f6\u95f4\u5e8f\u5217\u7531",(0,n.kt)("strong",{parentName:"p"},"\u6307\u6807\u540d\u79f0(Metrics Name)\u4ee5\u53ca\u4e00\u7ec4\u6807\u7b7e(Labels)\u552f\u4e00\u6807\u8bc6"),"\u3002",(0,n.kt)("strong",{parentName:"p"},"\u6bcf\u6761\u65f6\u95f4\u5e8f\u5217\u6309\u7167\u65f6\u95f4\u7684\u5148\u540e\u987a\u5e8f\u5b58\u50a8\u4e00\u7cfb\u5217\u7684\u6837\u672c\u503c"),"\u3002"),(0,n.kt)("p",null,"\u8868\u793a\u7ef4\u5ea6\u7684\u6807\u7b7e\u53ef\u80fd\u6765\u6e90\u4e8e\u4f60\u7684\u76d1\u63a7\u5bf9\u8c61\u7684\u72b6\u6001\uff0c\u6bd4\u5982code=404\u6216\u8005content_path=/api/path\u3002\u4e5f\u53ef\u80fd\u6765\u6e90\u4e8e\u7684\u4f60\u7684\u73af\u5883\u5b9a\u4e49\uff0c\u6bd4\u5982environment=produment\u3002",(0,n.kt)("strong",{parentName:"p"},"\u57fa\u4e8e\u8fd9\u4e9bLabels\u6211\u4eec\u53ef\u4ee5\u65b9\u4fbf\u5730\u5bf9\u76d1\u63a7\u6570\u636e\u8fdb\u884c\u805a\u5408\uff0c\u8fc7\u6ee4\uff0c\u88c1\u526a"),"\u3002"),(0,n.kt)("h3",{id:"\u5f3a\u5927\u7684\u67e5\u8be2\u8bed\u8a00promql"},"\u5f3a\u5927\u7684\u67e5\u8be2\u8bed\u8a00PromQL"),(0,n.kt)("p",null,"Prometheus\u5185\u7f6e\u4e86\u4e00\u4e2a\u5f3a\u5927\u7684\u6570\u636e\u67e5\u8be2\u8bed\u8a00PromQL\u3002 \u901a\u8fc7PromQL\u53ef\u4ee5\u5b9e\u73b0\u5bf9\u76d1\u63a7\u6570\u636e\u7684\u67e5\u8be2\u3001\u805a\u5408\u3002\u540c\u65f6PromQL\u4e5f\u88ab\u5e94\u7528\u4e8e\u6570\u636e\u53ef\u89c6\u5316(\u5982Grafana)\u4ee5\u53ca\u544a\u8b66\u5f53\u4e2d\u3002\n\u901a\u8fc7PromQL\u53ef\u4ee5\u8f7b\u677e\u56de\u7b54\u7c7b\u4f3c\u4e8e\u4ee5\u4e0b\u95ee\u9898\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5728\u8fc7\u53bb\u4e00\u6bb5\u65f6\u95f4\u4e2d95%\u5e94\u7528\u5ef6\u8fdf\u65f6\u95f4\u7684\u5206\u5e03\u8303\u56f4\uff1f"),(0,n.kt)("li",{parentName:"ul"},"\u9884\u6d4b\u57284\u5c0f\u65f6\u540e\uff0c\u78c1\u76d8\u7a7a\u95f4\u5360\u7528\u5927\u81f4\u4f1a\u662f\u4ec0\u4e48\u60c5\u51b5\uff1f"),(0,n.kt)("li",{parentName:"ul"},"CPU\u5360\u7528\u7387\u524d5\u4f4d\u7684\u670d\u52a1\u6709\u54ea\u4e9b\uff1f(\u8fc7\u6ee4)")),(0,n.kt)("h3",{id:"\u9ad8\u6548"},"\u9ad8\u6548"),(0,n.kt)("p",null,"\u5bf9\u4e8e\u76d1\u63a7\u7cfb\u7edf\u800c\u8a00\uff0c\u5927\u91cf\u7684\u76d1\u63a7\u4efb\u52a1\u5fc5\u7136\u5bfc\u81f4\u6709\u5927\u91cf\u7684\u6570\u636e\u4ea7\u751f\u3002\u800cPrometheus\u53ef\u4ee5\u9ad8\u6548\u5730\u5904\u7406\u8fd9\u4e9b\u6570\u636e\uff0c\u5bf9\u4e8e",(0,n.kt)("strong",{parentName:"p"},"\u5355\u4e00Prometheus Server\u5b9e\u4f8b"),"\u800c\u8a00\u5b83\u53ef\u4ee5\u5904\u7406\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6570\u4ee5\u767e\u4e07\u7684\u76d1\u63a7\u6307\u6807"),(0,n.kt)("li",{parentName:"ul"},"\u6bcf\u79d2\u5904\u7406\u6570\u5341\u4e07\u7684\u6570\u636e\u70b9\u3002")),(0,n.kt)("h3",{id:"\u53ef\u6269\u5c55"},"\u53ef\u6269\u5c55"),(0,n.kt)("p",null,"Prometheus\u662f\u5982\u6b64\u7b80\u5355\uff0c\u56e0\u6b64\u4f60\u53ef\u4ee5\u5728\u6bcf\u4e2a\u6570\u636e\u4e2d\u5fc3\u3001",(0,n.kt)("strong",{parentName:"p"},"\u6bcf\u4e2a\u56e2\u961f\u8fd0\u884c\u72ec\u7acb\u7684Prometheus Sevrer"),"\u3002Prometheus\u5bf9\u4e8e\u8054\u90a6\u96c6\u7fa4\u7684\u652f\u6301\uff0c",(0,n.kt)("strong",{parentName:"p"},"\u53ef\u4ee5\u8ba9\u591a\u4e2aPrometheus\u5b9e\u4f8b\u4ea7\u751f\u4e00\u4e2a\u903b\u8f91\u96c6\u7fa4\uff0c\u5f53\u5355\u5b9e\u4f8bPrometheus Server\u5904\u7406\u7684\u4efb\u52a1\u91cf\u8fc7\u5927\u65f6\uff0c\u901a\u8fc7\u4f7f\u7528\u529f\u80fd\u5206\u533a(sharding)+\u8054\u90a6\u96c6\u7fa4(federation)\u53ef\u4ee5\u5bf9\u5176\u8fdb\u884c\u6269\u5c55"),"\u3002"),(0,n.kt)("h3",{id:"\u6613\u4e8e\u96c6\u6210"},"\u6613\u4e8e\u96c6\u6210"),(0,n.kt)("p",null,"\u4f7f\u7528Prometheus\u53ef\u4ee5\u5feb\u901f\u642d\u5efa\u76d1\u63a7\u670d\u52a1\uff0c\u5e76\u4e14\u53ef\u4ee5\u975e\u5e38\u65b9\u4fbf\u5730\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u8fdb\u884c\u96c6\u6210\u3002\u76ee\u524d\u652f\u6301\uff1a Java\uff0c JMX\uff0c Python\uff0c Go\uff0cRuby\uff0c .Net\uff0c Node.js\u7b49\u7b49\u8bed\u8a00\u7684\u5ba2\u6237\u7aefSDK\uff0c\u57fa\u4e8e\u8fd9\u4e9bSDK\u53ef\u4ee5\u5feb\u901f\u8ba9\u5e94\u7528\u7a0b\u5e8f\u7eb3\u5165\u5230Prometheus\u7684\u76d1\u63a7\u5f53\u4e2d\uff0c\u6216\u8005\u5f00\u53d1\u81ea\u5df1\u7684\u76d1\u63a7\u6570\u636e\u6536\u96c6\u7a0b\u5e8f\u3002\u540c\u65f6\u8fd9\u4e9b\u5ba2\u6237\u7aef\u6536\u96c6\u7684\u76d1\u63a7\u6570\u636e\uff0c\u4e0d\u4ec5\u4ec5\u652f\u6301Prometheus\uff0c\u8fd8\u80fd\u652f\u6301Graphite\u8fd9\u4e9b\u5176\u4ed6\u7684\u76d1\u63a7\u5de5\u5177\u3002"),(0,n.kt)("p",null,"\u540c\u65f6Prometheus\u8fd8\u652f\u6301\u4e0e\u5176\u4ed6\u7684\u76d1\u63a7\u7cfb\u7edf\u8fdb\u884c\u96c6\u6210\uff1aGraphite\uff0c Statsd\uff0c Collected\uff0c Scollector\uff0c muini\uff0c Nagios\u7b49\u3002\nPrometheus\u793e\u533a\u8fd8\u63d0\u4f9b\u4e86\u5927\u91cf\u7b2c\u4e09\u65b9\u5b9e\u73b0\u7684\u76d1\u63a7\u6570\u636e\u91c7\u96c6\u652f\u6301\uff1aJMX\uff0c CloudWatch\uff0c EC2\uff0c MySQL\uff0c PostgresSQL\uff0c Haskell\uff0c Bash\uff0c SNMP\uff0c Consul\uff0c Haproxy\uff0c Mesos\uff0c Bind\uff0c CouchDB\uff0c Django\uff0c Memcached\uff0c RabbitMQ\uff0c Redis\uff0c RethinkDB\uff0c Rsyslog\u7b49\u7b49\u3002"),(0,n.kt)("h3",{id:"\u53ef\u89c6\u5316"},"\u53ef\u89c6\u5316"),(0,n.kt)("p",null,"Prometheus Server\u4e2d\u81ea\u5e26\u4e86\u4e00\u4e2aPrometheus UI\uff0c\u901a\u8fc7\u8fd9\u4e2aUI\u53ef",(0,n.kt)("strong",{parentName:"p"},"\u4ee5\u65b9\u4fbf\u5730\u76f4\u63a5\u5bf9\u6570\u636e\u8fdb\u884c\u67e5\u8be2\uff0c\u5e76\u4e14\u652f\u6301\u76f4\u63a5\u4ee5\u56fe\u5f62\u5316\u7684\u5f62\u5f0f\u5c55\u793a\u6570\u636e"),"\u3002\u540c\u65f6Prometheus\u8fd8\u63d0\u4f9b\u4e86\u4e00\u4e2a\u72ec\u7acb\u7684\u57fa\u4e8eRuby On Rails\u7684Dashboard\u89e3\u51b3\u65b9\u6848Promdash\u3002\u6700\u65b0\u7684Grafana\u53ef\u89c6\u5316\u5de5\u5177\u4e5f\u5df2\u7ecf\u63d0\u4f9b\u4e86\u5b8c\u6574\u7684Prometheus\u652f\u6301\uff0c",(0,n.kt)("strong",{parentName:"p"},"\u57fa\u4e8eGrafana\u53ef\u4ee5\u521b\u5efa\u66f4\u52a0\u7cbe\u7f8e\u7684\u76d1\u63a7\u56fe\u6807\u3002\u57fa\u4e8ePrometheus\u63d0\u4f9b\u7684API\u8fd8\u53ef\u4ee5\u5b9e\u73b0\u81ea\u5df1\u7684\u76d1\u63a7\u53ef\u89c6\u5316UI"),"\u3002"),(0,n.kt)("h3",{id:"\u5f00\u653e\u6027"},"\u5f00\u653e\u6027"),(0,n.kt)("p",null,"\u901a\u5e38\u6765\u8bf4\u5f53\u6211\u4eec\u9700\u8981\u76d1\u63a7\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\u65f6\uff0c\u4e00\u822c\u9700\u8981\u8be5\u5e94\u7528\u7a0b\u5e8f\u63d0\u4f9b\u5bf9\u76f8\u5e94\u76d1\u63a7\u7cfb\u7edf\u534f\u8bae\u7684\u652f\u6301\u3002\u56e0\u6b64\u5e94\u7528\u7a0b\u5e8f\u4f1a\u4e0e\u6240\u9009\u62e9\u7684\u76d1\u63a7\u7cfb\u7edf\u8fdb\u884c\u7ed1\u5b9a\u3002\u4e3a\u4e86\u51cf\u5c11\u8fd9\u79cd\u7ed1\u5b9a\u6240\u5e26\u6765\u7684\u9650\u5236\u3002\u5bf9\u4e8e\u51b3\u7b56\u8005\u800c\u8a00\u8981\u4e48\u4f60\u5c31\u76f4\u63a5\u5728\u5e94\u7528\u4e2d\u96c6\u6210\u8be5\u76d1\u63a7\u7cfb\u7edf\u7684\u652f\u6301\uff0c\u8981\u4e48\u5c31\u5728\u5916\u90e8\u521b\u5efa\u5355\u72ec\u7684\u670d\u52a1\u6765\u9002\u914d\u4e0d\u540c\u7684\u76d1\u63a7\u7cfb\u7edf\u3002"),(0,n.kt)("p",null,"\u800c\u5bf9\u4e8ePrometheus\u6765\u8bf4\uff0c\u4f7f\u7528Prometheus\u7684client library\u7684\u8f93\u51fa\u683c\u5f0f\u4e0d\u6b62\u652f\u6301Prometheus\u7684\u683c\u5f0f\u5316\u6570\u636e\uff0c\u4e5f\u53ef\u4ee5\u8f93\u51fa\u652f\u6301\u5176\u5b83\u76d1\u63a7\u7cfb\u7edf\u7684\u683c\u5f0f\u5316\u6570\u636e\uff0c\u6bd4\u5982Graphite\u3002\n\u56e0\u6b64\u4f60\u751a\u81f3\u53ef\u4ee5\u5728\u4e0d\u4f7f\u7528Prometheus\u7684\u60c5\u51b5\u4e0b\uff0c\u91c7\u7528Prometheus\u7684client library\u6765\u8ba9\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u652f\u6301\u76d1\u63a7\u6570\u636e\u91c7\u96c6\u3002\n\u63a5\u4e0b\u6765\uff0c\u5728\u672c\u4e66\u5f53\u4e2d\uff0c\u5c06\u5e26\u9886\u8bfb\u8005\u611f\u53d7Prometheus\u662f\u5982\u4f55\u5bf9\u76d1\u63a7\u7cfb\u7edf\u7684\u91cd\u65b0\u5b9a\u4e49\u3002"),(0,n.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/getting_started/"},"https://prometheus.io/docs/prometheus/latest/getting_started/"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://yunlzheng.gitbook.io/prometheus-book/part-ii-prometheus-jin-jie/sd/why-need-service-discovery"},"https://yunlzheng.gitbook.io/prometheus-book/part-ii-prometheus-jin-jie/sd/why-need-service-discovery"))))}h.isMDXComponent=!0},85887:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/013d02077cda78274928967731f7818-379d8400f280ef3ccc3fd65131f1d2af.png"},63506:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/architecture-573eb9edf2f37984e264cc3c2d4bd3a6.png"},97980:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/monitor-internal-6f6d2e71dff98358bc67fb22ed2c9d7a.png"},44473:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/prometheus-release-roadmaps-ea8c0e6e7caa1bf355d1e81b5726e630.png"},92796:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/prometheus-sd-12b35fa323fd2d56ae3403406f55530f.png"}}]);