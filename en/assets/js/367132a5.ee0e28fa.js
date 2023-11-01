"use strict";(self.webpackChunkathenaserving=self.webpackChunkathenaserving||[]).push([[4022],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),u=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},i=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=u(a),c=n,h=d["".concat(p,".").concat(c)]||d[c]||m[c]||l;return a?r.createElement(h,o(o({ref:t},i),{},{components:a})):r.createElement(h,o({ref:t},i))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:n,o[1]=s;for(var u=2;u<l;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},12493:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const l={sidebar_position:2,sidebar_label:"\u5c0f\u8bd5\u8eab\u624b"},o=void 0,s={unversionedId:"\u5e73\u53f0\u76d1\u63a7/Prometheus/\u5c0f\u8bd5\u8eab\u624b",id:"\u5e73\u53f0\u76d1\u63a7/Prometheus/\u5c0f\u8bd5\u8eab\u624b",title:"\u5c0f\u8bd5\u8eab\u624b",description:"\u5b89\u88c5Prometheus Server",source:"@site/docs/\u5e73\u53f0\u76d1\u63a7/Prometheus/\u5c0f\u8bd5\u8eab\u624b.md",sourceDirName:"\u5e73\u53f0\u76d1\u63a7/Prometheus",slug:"/\u5e73\u53f0\u76d1\u63a7/Prometheus/\u5c0f\u8bd5\u8eab\u624b",permalink:"/en/docs/\u5e73\u53f0\u76d1\u63a7/Prometheus/\u5c0f\u8bd5\u8eab\u624b",draft:!1,editUrl:"https://github.com/zhangyongtian/bigdataknowledge/tree/dev/docs/\u5e73\u53f0\u76d1\u63a7/Prometheus/\u5c0f\u8bd5\u8eab\u624b.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"\u5c0f\u8bd5\u8eab\u624b"},sidebar:"docSidebar",previous:{title:"\u6982\u89c8",permalink:"/en/docs/\u5e73\u53f0\u76d1\u63a7/Prometheus/\u6982\u89c8"},next:{title:"\u63a2\u7d22PromQL",permalink:"/en/docs/\u5e73\u53f0\u76d1\u63a7/Prometheus/\u63a2\u7d22PromQL"}},p={},u=[{value:"\u5b89\u88c5Prometheus Server",id:"\u5b89\u88c5prometheus-server",level:2},{value:"\u4ece\u4e8c\u8fdb\u5236\u5305\u5b89\u88c5",id:"\u4ece\u4e8c\u8fdb\u5236\u5305\u5b89\u88c5",level:3},{value:"\u4f7f\u7528\u5bb9\u5668\u5b89\u88c5",id:"\u4f7f\u7528\u5bb9\u5668\u5b89\u88c5",level:3},{value:"\u4f7f\u7528Node Exporter\u91c7\u96c6\u4e3b\u673a\u6570\u636e",id:"\u4f7f\u7528node-exporter\u91c7\u96c6\u4e3b\u673a\u6570\u636e",level:2},{value:"\u521d\u59cbNode Exporter\u76d1\u63a7\u6307\u6807",id:"\u521d\u59cbnode-exporter\u76d1\u63a7\u6307\u6807",level:3},{value:"\u4eceNode Exporter\u6536\u96c6\u76d1\u63a7\u6570\u636e",id:"\u4ecenode-exporter\u6536\u96c6\u76d1\u63a7\u6570\u636e",level:3},{value:"\u4f7f\u7528PromQL\u67e5\u8be2\u76d1\u63a7\u6570\u636e",id:"\u4f7f\u7528promql\u67e5\u8be2\u76d1\u63a7\u6570\u636e",level:2},{value:"\u76d1\u63a7\u6570\u636e\u53ef\u89c6\u5316Grafana",id:"\u76d1\u63a7\u6570\u636e\u53ef\u89c6\u5316grafana",level:2},{value:"\u56fe\u8868",id:"\u56fe\u8868",level:3},{value:"\u76d1\u63a7",id:"\u76d1\u63a7",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u542f\u52a8\u76f8\u5173",id:"\u542f\u52a8\u76f8\u5173",level:3},{value:"\u56fe\u8868\u76f8\u5173",id:"\u56fe\u8868\u76f8\u5173",level:3},{value:"\u544a\u8b66",id:"\u544a\u8b66",level:3}],i={toc:u},d="wrapper";function m(e){let{components:t,...l}=e;return(0,n.kt)(d,(0,r.Z)({},i,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u5b89\u88c5prometheus-server"},"\u5b89\u88c5Prometheus Server"),(0,n.kt)("p",null,"Prometheus\u57fa\u4e8eGolang\u7f16\u5199\uff0c\u7f16\u8bd1\u540e\u7684\u8f6f\u4ef6\u5305\uff0c\u4e0d\u4f9d\u8d56\u4e8e\u4efb\u4f55\u7684\u7b2c\u4e09\u65b9\u4f9d\u8d56\u3002\u7528\u6237\u53ea\u9700\u8981\u4e0b\u8f7d\u5bf9\u5e94\u5e73\u53f0\u7684\u4e8c\u8fdb\u5236\u5305\uff0c\u89e3\u538b\u5e76\u4e14\u6dfb\u52a0\u57fa\u672c\u7684\u914d\u7f6e\u5373\u53ef\u6b63\u5e38\u542f\u52a8Prometheus Server\u3002"),(0,n.kt)("h3",{id:"\u4ece\u4e8c\u8fdb\u5236\u5305\u5b89\u88c5"},"\u4ece\u4e8c\u8fdb\u5236\u5305\u5b89\u88c5"),(0,n.kt)("p",null,"\u5bf9\u4e8e\u975eDocker\u7528\u6237\uff0c\u53ef\u4ee5\u4ece",(0,n.kt)("inlineCode",{parentName:"p"},"https://prometheus.io/download/"),"\u627e\u5230\u6700\u65b0\u7248\u672c\u7684Prometheus Sevrer\u8f6f\u4ef6\u5305\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"export VERSION=2.4.3\ncurl -LO  https://github.com/prometheus/prometheus/releases/download/v$VERSION/prometheus-$VERSION.darwin-amd64.tar.gz\n")),(0,n.kt)("p",null,"\u89e3\u538b\uff0c\u5e76\u5c06Prometheus\u76f8\u5173\u7684\u547d\u4ee4\uff0c\u6dfb\u52a0\u5230\u7cfb\u7edf\u73af\u5883\u53d8\u91cf\u8def\u5f84\u5373\u53ef\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"tar -xzf prometheus-${VERSION}.darwin-amd64.tar.gz\ncd prometheus-${VERSION}.darwin-amd64\n")),(0,n.kt)("p",null,"\u89e3\u538b\u540e\u5f53\u524d\u76ee\u5f55\u4f1a\u5305\u542b\u9ed8\u8ba4\u7684Prometheus\u914d\u7f6e\u6587\u4ef6promethes.yml:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yml"},"# my global config\nglobal:\n  scrape_interval:     15s # Set the scrape interval to every 15 seconds. Default is every 1 minute.\n  evaluation_interval: 15s # Evaluate rules every 15 seconds. The default is every 1 minute.\n  # scrape_timeout is set to the global default (10s).\n\n# Alertmanager configuration\nalerting:\n  alertmanagers:\n  - static_configs:\n    - targets:\n      # - alertmanager:9093\n\n# Load rules once and periodically evaluate them according to the global 'evaluation_interval'.\nrule_files:\n  # - \"first_rules.yml\"\n  # - \"second_rules.yml\"\n\n# A scrape configuration containing exactly one endpoint to scrape:\n# Here it's Prometheus itself.\nscrape_configs:\n  # The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.\n  - job_name: 'prometheus'\n\n    # metrics_path defaults to '/metrics'\n    # scheme defaults to 'http'.\n\n    static_configs:\n    - targets: ['localhost:9090']\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u7b80\u8981\u8bf4\u660e\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,n.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"global:"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5168\u5c40\u914d\u7f6e\u90e8\u5206\uff0c\u8bbe\u7f6e\u4e86\u6574\u4e2a Prometheus \u7684\u5168\u5c40\u53c2\u6570\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"..."),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rule_files:"),(0,n.kt)("td",{parentName:"tr",align:null},"\u89c4\u5219\u6587\u4ef6\u914d\u7f6e\uff0c\u7528\u4e8e\u52a0\u8f7d\u548c\u5b9a\u671f\u8bc4\u4f30\u89c4\u5219\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},'- "first_rules.yml"'),(0,n.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u8981\u52a0\u8f7d\u7684\u7b2c\u4e00\u4e2a\u89c4\u5219\u6587\u4ef6\u7684\u8def\u5f84\u3002\u89c4\u5219\u6587\u4ef6\u5305\u542b\u4e86\u76d1\u63a7\u6570\u636e\u7684\u6761\u4ef6\u548c\u8b66\u62a5\u903b\u8f91\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},'- "second_rules.yml"'),(0,n.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u8981\u52a0\u8f7d\u7684\u7b2c\u4e8c\u4e2a\u89c4\u5219\u6587\u4ef6\u7684\u8def\u5f84\u3002\u53ef\u4ee5\u6839\u636e\u9700\u6c42\u6dfb\u52a0\u66f4\u591a\u7684\u89c4\u5219\u6587\u4ef6\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"scrape_configs:"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u6293\u53d6\u914d\u7f6e\u90e8\u5206\uff0c\u7528\u4e8e\u914d\u7f6e\u4ece\u54ea\u4e9b\u76ee\u6807\u6293\u53d6\u6570\u636e\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"..."),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("p",null,"Promtheus\u4f5c\u4e3a\u4e00\u4e2a\u65f6\u95f4\u5e8f\u5217\u6570\u636e\u5e93\uff0c\u5176\u91c7\u96c6\u7684\u6570\u636e\u4f1a\u4ee5\u6587\u4ef6\u7684\u5f62\u5f0f\u5b58\u50a8\u5728\u672c\u5730\u4e2d\uff0c\u9ed8\u8ba4\u7684\u5b58\u50a8\u8def\u5f84\u4e3adata/\uff0c\u56e0\u6b64\u6211\u4eec\u9700\u8981\u5148\u624b\u52a8\u521b\u5efa\u8be5\u76ee\u5f55\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir data\n")),(0,n.kt)("p",null,"\u7528\u6237\u4e5f\u53ef\u4ee5\u901a\u8fc7\u53c2\u6570",(0,n.kt)("inlineCode",{parentName:"p"},'--storage.tsdb.path="data/"'),"\u4fee\u6539\u672c\u5730\u6570\u636e\u5b58\u50a8\u7684\u8def\u5f84\u3002\n\u542f\u52a8prometheus\u670d\u52a1\uff0c\u5176\u4f1a\u9ed8\u8ba4\u52a0\u8f7d\u5f53\u524d\u8def\u5f84\u4e0b\u7684prometheus.yaml\u6587\u4ef6\uff1a"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u542f\u52a8")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'./prometheus --storage.tsdb.path="data/"\n')),(0,n.kt)("p",null,"\u6216\u8005"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'nohup ./prometheus --web.enable-lifecycle=true --config.file=prometheus.yml --storage.tsdb.path="data/" > ./prometheus.log 2>&1 &\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u5173\u95ed")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"curl -X POST http://localhost:9090/-/quit\n")),(0,n.kt)("p",null,"\u6b63\u5e38\u7684\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ef\u4ee5\u770b\u5230\u4ee5\u4e0b\u8f93\u51fa\u5185\u5bb9\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-log"},'level=info ts=2018-10-23T14:55:14.499484Z caller=main.go:554 msg="Starting TSDB ..."\nlevel=info ts=2018-10-23T14:55:14.499531Z caller=web.go:397 component=web msg="Start listening for connections" address=0.0.0.0:9090\nlevel=info ts=2018-10-23T14:55:14.507999Z caller=main.go:564 msg="TSDB started"\nlevel=info ts=2018-10-23T14:55:14.508068Z caller=main.go:624 msg="Loading configuration file" filename=prometheus.yml\nlevel=info ts=2018-10-23T14:55:14.509509Z caller=main.go:650 msg="Completed loading of configuration file" filename=prometheus.yml\nlevel=info ts=2018-10-23T14:55:14.509537Z caller=main.go:523 msg="Server is ready to receive web requests."\n')),(0,n.kt)("p",null,"Prometheus\u5177\u6709\u51e0\u4e2a\u914d\u7f6e\u672c\u5730\u5b58\u50a8\u7684\u6807\u5fd7\u3002\u5176\u4e2d\u6700\u91cd\u8981\u7684\u662f\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--storage.tsdb.path"),"\uff1aPrometheus\u5199\u5165\u5176\u6570\u636e\u5e93\u7684\u8def\u5f84\u3002\u9ed8\u8ba4\u4e3a data/\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--storage.tsdb.retention.time"),"\uff1a\u4f55\u65f6\u5220\u9664\u65e7\u6570\u636e\u3002",(0,n.kt)("strong",{parentName:"li"},"\u9ed8\u8ba4\u4e3a 15 \u5929"),"\u3002\u5982\u679c\u5c06\u6b64\u6807\u5fd7\u8bbe\u7f6e\u4e3a\u9664 default \u4ee5\u5916\u7684\u4efb\u4f55\u5185\u5bb9\uff0c\u5b83\u5c06\u8986\u76d6 storage.tsdb.retention\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--storage.tsdb.retention.size"),'\uff1a\u8981\u4fdd\u7559\u7684\u5b58\u50a8\u5757\u7684\u6700\u5927\u5b57\u8282\u6570\u3002\u5c06\u9996\u5148\u5220\u9664\u6700\u65e7\u7684\u6570\u636e\u3002\u9ed8\u8ba4\u4e3a 0 \u6216\u7981\u7528\u3002\u652f\u6301\u7684\u5355\u4f4d\u6709\uff1aB\u3001KB\u3001MB\u3001GB\u3001TB\u3001PB\u3001EB\u3002\u4f8b\u5982\uff1a"512MB"\u3002\u57fa\u4e8e2\u7684\u5e42\uff0c\u56e0\u6b64 1KB \u7b49\u4e8e 1024B\u3002\u4ec5\u4f1a\u5220\u9664\u6301\u4e45\u5757\u4ee5\u9075\u5b88\u4fdd\u7559\u7b56\u7565\uff0c\u867d\u7136WAL\u548c\u5185\u5b58\u6620\u5c04\u5757\u4f1a\u8ba1\u5165\u603b\u5927\u5c0f\u3002\u56e0\u6b64\uff0c\u78c1\u76d8\u7684\u6700\u5c0f\u8981\u6c42\u662fWAL\uff08WAL\u548cCheckpoint\uff09\u548cchunks_head\uff08\u5185\u5b58\u6620\u5c04\u7684Head\u5757\uff09\u76ee\u5f55\u7684\u5cf0\u503c\u7a7a\u95f4\uff08\u6bcf2\u5c0f\u65f6\u8fbe\u5230\u5cf0\u503c\uff09\u3002'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--storage.tsdb.retention"),"\uff1a\u5df2\u5f03\u7528\uff0c\u5efa\u8bae\u4f7f\u7528 storage.tsdb.retention.time\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--storage.tsdb.wal-compression"),"\uff1a\u542f\u7528\u5199\u524d\u65e5\u5fd7\uff08WAL\uff09\u7684\u538b\u7f29\u3002\u6839\u636e\u6570\u636e\u60c5\u51b5\uff0c\u60a8\u53ef\u4ee5\u9884\u671fWAL\u5927\u5c0f\u51cf\u534a\uff0c\u4f46\u989d\u5916\u7684CPU\u8d1f\u8f7d\u8f83\u5c0f\u3002\u6b64\u6807\u5fd7\u4ece2.11.0\u5f15\u5165\uff0c\u5e76\u57282.20.0\u4e2d\u9ed8\u8ba4\u542f\u7528\u3002\u8bf7\u6ce8\u610f\uff0c\u542f\u7528\u540e\uff0c\u5c06Prometheus\u964d\u7ea7\u52302.11.0\u4ee5\u4e0b\u7248\u672c\u5c06\u9700\u8981\u5220\u9664WAL\u3002")),(0,n.kt)("p",null,"Prometheus\u6bcf\u4e2a\u6837\u672c\u4ec5\u5b58\u50a8\u5e73\u5747 1-2 \u4e2a\u5b57\u8282\u3002\u56e0\u6b64\uff0c\u4e3a\u4e86\u8ba1\u5212Prometheus\u670d\u52a1\u5668\u7684\u5bb9\u91cf\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u7c97\u7565\u516c\u5f0f\uff1a"),(0,n.kt)("p",null,"\u6240\u9700\u7684\u78c1\u76d8\u7a7a\u95f4 = \u4fdd\u7559\u65f6\u95f4\uff08\u4ee5\u79d2\u4e3a\u5355\u4f4d\uff09\xd7 \u6bcf\u79d2\u6444\u53d6\u7684\u6837\u672c\u6570 \xd7 \u6bcf\u4e2a\u6837\u672c\u7684\u5b57\u8282\u6570"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"needed_disk_space = retention_time_seconds ","*"," ingested_samples_per_second ","*"," bytes_per_sample")),(0,n.kt)("p",null,"\u8981\u964d\u4f4e\u6444\u53d6\u6837\u672c\u7684\u901f\u7387\uff0c\u53ef\u4ee5\u51cf\u5c11\u6293\u53d6\u7684\u65f6\u95f4\u5e8f\u5217\u6570\u91cf\uff08\u51cf\u5c11\u76ee\u6807\u6570\u6216\u6bcf\u4e2a\u76ee\u6807\u7684\u7cfb\u5217\u6570\uff09\uff0c\u6216\u8005\u53ef\u4ee5\u589e\u52a0\u6293\u53d6\u95f4\u9694\u3002\u7136\u800c\uff0c\u7531\u4e8e\u5728\u7cfb\u5217\u5185\u5bf9\u6837\u672c\u8fdb\u884c\u4e86\u538b\u7f29\uff0c\u51cf\u5c11\u7cfb\u5217\u6570\u91cf\u53ef\u80fd\u66f4\u6709\u6548\u3002"),(0,n.kt)("p",null,"\u5982\u679c\u672c\u5730\u5b58\u50a8\u56e0\u4efb\u4f55\u539f\u56e0\u635f\u574f\uff0c\u89e3\u51b3\u95ee\u9898\u7684\u6700\u4f73\u7b56\u7565\u662f\u5173\u95ed Prometheus\uff0c\u7136\u540e\u5220\u9664\u6574\u4e2a\u5b58\u50a8\u76ee\u5f55\u3002\u60a8\u8fd8\u53ef\u4ee5\u5c1d\u8bd5\u5220\u9664\u5355\u4e2a\u5757\u76ee\u5f55\u6216WAL\u76ee\u5f55\u4ee5\u89e3\u51b3\u95ee\u9898\u3002\u8bf7\u6ce8\u610f\uff0c\u8fd9\u610f\u5473\u7740\u6bcf\u4e2a\u5757\u76ee\u5f55\u4e22\u5931\u7ea6\u4e24\u5c0f\u65f6\u7684\u6570\u636e\u3002\u518d\u6b21\u5f3a\u8c03\uff0cPrometheus\u7684\u672c\u5730\u5b58\u50a8\u4e0d\u9002\u7528\u4e8e\u957f\u671f\u6301\u4e45\u5b58\u50a8\uff1b\u5916\u90e8\u89e3\u51b3\u65b9\u6848\u63d0\u4f9b\u4e86\u6269\u5c55\u7684\u4fdd\u7559\u548c\u6570\u636e\u6301\u4e45\u6027\u3002"),(0,n.kt)("p",null,"\u6ce8\u610f\uff1a\u4e0d\u652f\u6301\u975ePOSIX\u517c\u5bb9\u7684\u6587\u4ef6\u7cfb\u7edf\u4f5c\u4e3aPrometheus\u7684\u672c\u5730\u5b58\u50a8\uff0c\u53ef\u80fd\u4f1a\u53d1\u751f\u65e0\u6cd5\u6062\u590d\u7684\u635f\u574f\u3002\u4e0d\u652f\u6301NFS\u6587\u4ef6\u7cfb\u7edf\uff08\u5305\u62ecAWS\u7684EFS\uff09\u3002NFS\u53ef\u4ee5\u662fPOSIX\u517c\u5bb9\u7684\uff0c\u4f46\u5927\u591a\u6570\u5b9e\u73b0\u4e0d\u662f\u3002\u5f3a\u70c8\u5efa\u8bae\u4f7f\u7528\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u4ee5\u786e\u4fdd\u53ef\u9760\u6027\u3002\n\u5982\u679c\u540c\u65f6\u6307\u5b9a\u4e86\u65f6\u95f4\u548c\u5927\u5c0f\u4fdd\u7559\u7b56\u7565\uff0c\u5c06\u4f7f\u7528\u6700\u5148\u89e6\u53d1\u7684\u7b56\u7565\u3002"),(0,n.kt)("p",null,"\u8fc7\u671f\u5757\u6e05\u7406\u5728\u540e\u53f0\u8fdb\u884c\u3002\u53ef\u80fd\u9700\u8981\u591a\u8fbe\u4e24\u5c0f\u65f6\u624d\u80fd\u5220\u9664\u8fc7\u671f\u5757\u3002\u5fc5\u987b\u5b8c\u5168\u8fc7\u671f\u540e\u624d\u80fd\u5220\u9664\u5757\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/storage/"},"https://prometheus.io/docs/prometheus/latest/storage/"))),(0,n.kt)("h3",{id:"\u4f7f\u7528\u5bb9\u5668\u5b89\u88c5"},"\u4f7f\u7528\u5bb9\u5668\u5b89\u88c5"),(0,n.kt)("p",null,"\u5bf9\u4e8eDocker\u7528\u6237\uff0c\u76f4\u63a5\u4f7f\u7528Prometheus\u7684\u955c\u50cf\u5373\u53ef\u542f\u52a8Prometheus Server\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -p 9090:9090 -v /etc/prometheus/prometheus.yml:/etc/prometheus/prometheus.yml prom/prometheus\n")),(0,n.kt)("p",null,"\u542f\u52a8\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,n.kt)("inlineCode",{parentName:"p"},"http://localhost:9090"),"\u8bbf\u95eePrometheus\u7684UI\u754c\u9762\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ui\u56fe\u7247",src:a(19476).Z,width:"2880",height:"734"})),(0,n.kt)("h2",{id:"\u4f7f\u7528node-exporter\u91c7\u96c6\u4e3b\u673a\u6570\u636e"},"\u4f7f\u7528Node Exporter\u91c7\u96c6\u4e3b\u673a\u6570\u636e"),(0,n.kt)("p",null,"\u5728Prometheus\u7684\u67b6\u6784\u8bbe\u8ba1\u4e2d\uff0cPrometheus Server\u5e76",(0,n.kt)("strong",{parentName:"p"},"\u4e0d\u76f4\u63a5\u670d\u52a1\u76d1\u63a7\u7279\u5b9a\u7684\u76ee\u6807\uff0c\u5176\u4e3b\u8981\u4efb\u52a1\u8d1f\u8d23\u6570\u636e\u7684\u6536\u96c6\uff0c\u5b58\u50a8\u5e76\u4e14\u5bf9\u5916\u63d0\u4f9b\u6570\u636e\u67e5\u8be2\u652f\u6301"),"\u3002\u56e0\u6b64\u4e3a\u4e86\u80fd\u591f\u80fd\u591f\u76d1\u63a7\u5230\u67d0\u4e9b\u4e1c\u897f\uff0c\u5982\u4e3b\u673a\u7684CPU\u4f7f\u7528\u7387\uff0c\u6211\u4eec\u9700\u8981\u4f7f\u7528\u5230Exporter\u3002Prometheus\u5468\u671f\u6027\u7684\u4eceExporter\u66b4\u9732\u7684HTTP\u670d\u52a1\u5730\u5740\uff08\u901a\u5e38\u662f/metrics\uff09\u62c9\u53d6\u76d1\u63a7\u6837\u672c\u6570\u636e\u3002\n\u4ece\u4e0a\u9762\u7684\u63cf\u8ff0\u4e2d\u53ef\u4ee5\u770b\u51faExporter\u53ef\u4ee5\u662f\u4e00\u4e2a\u76f8\u5bf9\u5f00\u653e\u7684\u6982\u5ff5\uff0c",(0,n.kt)("strong",{parentName:"p"},"\u5176\u53ef\u4ee5\u662f\u4e00\u4e2a\u72ec\u7acb\u8fd0\u884c\u7684\u7a0b\u5e8f\u72ec\u7acb\u4e8e\u76d1\u63a7\u76ee\u6807\u4ee5\u5916\uff0c\u4e5f\u53ef\u4ee5\u662f\u76f4\u63a5\u5185\u7f6e\u5728\u76d1\u63a7\u76ee\u6807\u4e2d"),"\u3002\u53ea\u8981\u80fd\u591f\u5411Prometheus\u63d0\u4f9b\u6807\u51c6\u683c\u5f0f\u7684\u76d1\u63a7\u6837\u672c\u6570\u636e\u5373\u53ef\u3002"),(0,n.kt)("p",null,"\u8fd9\u91cc\u4e3a\u4e86\u80fd\u591f\u91c7\u96c6\u5230\u4e3b\u673a\u7684\u8fd0\u884c\u6307\u6807\u5982CPU, \u5185\u5b58\uff0c\u78c1\u76d8\u7b49\u4fe1\u606f\u3002\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528Node Exporter\u3002\nNode Exporter\u540c\u6837\u91c7\u7528Golang\u7f16\u5199\uff0c\u5e76\u4e14\u4e0d\u5b58\u5728\u4efb\u4f55\u7684\u7b2c\u4e09\u65b9\u4f9d\u8d56\uff0c\u53ea\u9700\u8981\u4e0b\u8f7d\uff0c\u89e3\u538b\u5373\u53ef\u8fd0\u884c\u3002\u53ef\u4ee5\u4ece",(0,n.kt)("inlineCode",{parentName:"p"},"https://prometheus.io/download/"),"\u83b7\u53d6\u6700\u65b0\u7684node exporter\u7248\u672c\u7684\u4e8c\u8fdb\u5236\u5305\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"curl -OL https://github.com/prometheus/node_exporter/releases/download/v0.15.2/node_exporter-0.15.2.darwin-amd64.tar.gz\ntar -xzf node_exporter-0.15.2.darwin-amd64.tar.gz\n")),(0,n.kt)("p",null,"\u8fd0\u884cnode exporter:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"cd node_exporter-0.15.2.darwin-amd64\ncp node_exporter-0.15.2.darwin-amd64/node_exporter /usr/local/bin/\nnohup ./node_exporter  > ./node_exporter.log 2>&1 &\n")),(0,n.kt)("p",null,"\u542f\u52a8\u6210\u529f\u540e\uff0c\u53ef\u4ee5\u770b\u5230\u4ee5\u4e0b\u8f93\u51fa\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'INFO[0000] Listening on :9100                            source="node_exporter.go:76"\n')),(0,n.kt)("p",null,"\u8bbf\u95ee",(0,n.kt)("inlineCode",{parentName:"p"},"http://localhost:9100/"),"\u53ef\u4ee5\u770b\u5230\u4ee5\u4e0b\u9875\u9762\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"node_exporter",src:a(72796).Z,width:"549",height:"170"})),(0,n.kt)("h3",{id:"\u521d\u59cbnode-exporter\u76d1\u63a7\u6307\u6807"},"\u521d\u59cbNode Exporter\u76d1\u63a7\u6307\u6807"),(0,n.kt)("p",null,"\u8bbf\u95ee",(0,n.kt)("inlineCode",{parentName:"p"},"http://localhost:9100/metrics"),"\uff0c\u53ef\u4ee5\u770b\u5230\u5f53\u524dnode exporter\u83b7\u53d6\u5230\u7684\u5f53\u524d\u4e3b\u673a\u7684\u6240\u6709\u76d1\u63a7\u6570\u636e\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"node_exporter",src:a(53524).Z,width:"725",height:"474"})),(0,n.kt)("p",null,"\u6bcf\u4e00\u4e2a\u76d1\u63a7\u6307\u6807\u4e4b\u524d\u90fd\u4f1a\u6709\u4e00\u6bb5\u7c7b\u4f3c\u4e8e\u5982\u4e0b\u5f62\u5f0f\u7684\u4fe1\u606f\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'# HELP node_cpu Seconds the cpus spent in each mode.\n# TYPE node_cpu counter\nnode_cpu{cpu="cpu0",mode="idle"} 362812.7890625\n# HELP node_load1 1m load average.\n# TYPE node_load1 gauge\nnode_load1 3.0703125\n')),(0,n.kt)("p",null,"\u5176\u4e2dHELP\u7528\u4e8e\u89e3\u91ca\u5f53\u524d\u6307\u6807\u7684\u542b\u4e49\uff0c",(0,n.kt)("strong",{parentName:"p"},"TYPE\u5219\u8bf4\u660e\u5f53\u524d\u6307\u6807\u7684\u6570\u636e\u7c7b\u578b"),"\u3002\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2dnode_cpu\u7684\u6ce8\u91ca\u8868\u660e\u5f53\u524d\u6307\u6807\u662fcpu0\u4e0aidle\u8fdb\u7a0b\u5360\u7528CPU\u7684\u603b\u65f6\u95f4\uff0cCPU\u5360\u7528\u65f6\u95f4\u662f\u4e00\u4e2a\u53ea\u589e\u4e0d\u51cf\u7684\u5ea6\u91cf\u6307\u6807\uff0c",(0,n.kt)("strong",{parentName:"p"},"\u4ece\u7c7b\u578b\u4e2d\u4e5f\u53ef\u4ee5\u770b\u51fanode_cpu\u7684\u6570\u636e\u7c7b\u578b\u662f\u8ba1\u6570\u5668(counter)"),"\uff0c\u4e0e\u8be5\u6307\u6807\u7684\u5b9e\u9645\u542b\u4e49\u4e00\u81f4\u3002\u53c8\u4f8b\u5982node_load1\u8be5\u6307\u6807\u53cd\u6620\u4e86\u5f53\u524d\u4e3b\u673a\u5728\u6700\u8fd1\u4e00\u5206\u949f\u4ee5\u5185\u7684\u8d1f\u8f7d\u60c5\u51b5\uff0c\u7cfb\u7edf\u7684\u8d1f\u8f7d\u60c5\u51b5\u4f1a\u968f\u7cfb\u7edf\u8d44\u6e90\u7684\u4f7f\u7528\u800c\u53d8\u5316\uff0c\u56e0\u6b64node_load1\u53cd\u6620\u7684\u662f\u5f53\u524d\u72b6\u6001\uff0c",(0,n.kt)("strong",{parentName:"p"},"\u6570\u636e\u53ef\u80fd\u589e\u52a0\u4e5f\u53ef\u80fd\u51cf\u5c11\uff0c\u4ece\u6ce8\u91ca\u4e2d\u53ef\u4ee5\u770b\u51fa\u5f53\u524d\u6307\u6807\u7c7b\u578b\u4e3a\u4eea\u8868\u76d8(gauge)\uff0c\u4e0e\u6307\u6807\u53cd\u6620\u7684\u5b9e\u9645\u542b\u4e49\u4e00\u81f4"),"\u3002"),(0,n.kt)("h3",{id:"\u4ecenode-exporter\u6536\u96c6\u76d1\u63a7\u6570\u636e"},"\u4eceNode Exporter\u6536\u96c6\u76d1\u63a7\u6570\u636e"),(0,n.kt)("p",null,"\u4e3a\u4e86\u80fd\u591f\u8ba9Prometheus Server\u80fd\u591f\u4ece\u5f53\u524dnode exporter\u83b7\u53d6\u5230\u76d1\u63a7\u6570\u636e\uff0c\u8fd9\u91cc\u9700\u8981\u4fee\u6539Prometheus\u914d\u7f6e\u6587\u4ef6\u3002\u7f16\u8f91prometheus.yml\u5e76\u5728scrape_configs\u8282\u70b9\u4e0b\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yml"},"scrape_configs:\n  - job_name: 'prometheus'\n    static_configs:\n      - targets: ['localhost:9090']\n  # \u91c7\u96c6node exporter\u76d1\u63a7\u6570\u636e\n  - job_name: 'node'\n    static_configs:\n      - targets: ['localhost:9100']\n")),(0,n.kt)("p",null,"\u91cd\u65b0\u542f\u52a8Prometheus Server,\u8bbf\u95ee",(0,n.kt)("inlineCode",{parentName:"p"},"http://localhost:9090"),"\uff0c\u8fdb\u5165\u5230Prometheus Server\u3002\u5982\u679c\u8f93\u5165\u201cup\u201d\u5e76\u4e14\u70b9\u51fb\u6267\u884c\u6309\u94ae\u4ee5\u540e\uff0c\u53ef\u4ee5\u770b\u5230\u5982\u4e0b\u7ed3\u679c\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ui\u56fe\u7247",src:a(36109).Z,width:"951",height:"466"})),(0,n.kt)("p",null,"\u5982\u679cPrometheus\u80fd\u591f\u6b63\u5e38\u4ecenode exporter\u83b7\u53d6\u6570\u636e\uff0c\u5219\u4f1a\u770b\u5230\u4ee5\u4e0b\u7ed3\u679c\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'up{instance="localhost:9090",job="prometheus"}    1\nup{instance="localhost:9100",job="node"}    1\n')),(0,n.kt)("p",null,"\u5176\u4e2d\u201c1\u201d\u8868\u793a\u6b63\u5e38\uff0c\u53cd\u4e4b\u201c0\u201d\u5219\u4e3a\u5f02\u5e38\u3002"),(0,n.kt)("h2",{id:"\u4f7f\u7528promql\u67e5\u8be2\u76d1\u63a7\u6570\u636e"},"\u4f7f\u7528PromQL\u67e5\u8be2\u76d1\u63a7\u6570\u636e"),(0,n.kt)("p",null,"Prometheus UI\u662fPrometheus\u5185\u7f6e\u7684\u4e00\u4e2a\u53ef\u89c6\u5316\u7ba1\u7406\u754c\u9762\uff0c\u901a\u8fc7Prometheus UI\u7528\u6237\u80fd\u591f\u8f7b\u677e\u7684\u4e86\u89e3Prometheus\u5f53\u524d\u7684\u914d\u7f6e\uff0c\u76d1\u63a7\u4efb\u52a1\u8fd0\u884c\u72b6\u6001\u7b49\u3002 ",(0,n.kt)("strong",{parentName:"p"},"\u901a\u8fc7Graph\u9762\u677f\uff0c\u7528\u6237\u8fd8\u80fd\u76f4\u63a5\u4f7f\u7528PromQL\u5b9e\u65f6\u67e5\u8be2\u76d1\u63a7\u6570\u636e"),"\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ui\u56fe\u7247",src:a(77762).Z,width:"944",height:"378"})),(0,n.kt)("p",null,"\u5207\u6362\u5230Graph\u9762\u677f\uff0c\u7528\u6237\u53ef\u4ee5\u4f7f\u7528PromQL\u8868\u8fbe\u5f0f\u67e5\u8be2\u7279\u5b9a\u76d1\u63a7\u6307\u6807\u7684\u76d1\u63a7\u6570\u636e\u3002\u5982\u4e0b\u6240\u793a\uff0c\u67e5\u8be2\u4e3b\u673a\u8d1f\u8f7d\u53d8\u5316\u60c5\u51b5\uff0c\u53ef\u4ee5\u4f7f\u7528\u5173\u952e\u5b57node_load1\u53ef\u4ee5\u67e5\u8be2\u51faPrometheus\u91c7\u96c6\u5230\u7684\u4e3b\u673a\u8d1f\u8f7d\u7684\u6837\u672c\u6570\u636e\uff0c\u8fd9\u4e9b\u6837\u672c\u6570\u636e\u6309\u7167\u65f6\u95f4\u5148\u540e\u987a\u5e8f\u5c55\u793a\uff0c\u5f62\u6210\u4e86\u4e3b\u673a\u8d1f\u8f7d\u968f\u65f6\u95f4\u53d8\u5316\u7684\u8d8b\u52bf\u56fe\u8868\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ui\u56fe\u7247",src:a(77689).Z,width:"815",height:"496"})),(0,n.kt)("p",null,"PromQL\u662fPrometheus\u81ea\u5b9a\u4e49\u7684\u4e00\u5957\u5f3a\u5927\u7684\u6570\u636e\u67e5\u8be2\u8bed\u8a00\uff0c\u9664\u4e86\u4f7f\u7528\u76d1\u63a7\u6307\u6807\u4f5c\u4e3a\u67e5\u8be2\u5173\u952e\u5b57\u4ee5\u4e3a\uff0c\u8fd8\u5185\u7f6e\u4e86\u5927\u91cf\u7684\u51fd\u6570\uff0c\u5e2e\u52a9\u7528\u6237\u8fdb\u4e00\u6b65\u5bf9\u65f6\u5e8f\u6570\u636e\u8fdb\u884c\u5904\u7406\u3002\u4f8b\u5982\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"rate()"),"\u51fd\u6570\uff0c\u53ef\u4ee5\u8ba1\u7b97\u5728",(0,n.kt)("strong",{parentName:"p"},"\u5355\u4f4d\u65f6\u95f4\u5185\u6837\u672c\u6570\u636e\u7684\u53d8\u5316\u60c5\u51b5\u5373\u589e\u957f\u7387"),"\uff0c\u56e0\u6b64\u901a\u8fc7\u8be5\u51fd\u6570\u6211\u4eec\u53ef\u4ee5\u8fd1\u4f3c\u7684\u901a\u8fc7CPU\u4f7f\u7528\u65f6\u95f4\u8ba1\u7b97CPU\u7684\u5229\u7528\u7387\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-promql"},"rate(node_cpu[2m])\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ui\u56fe\u7247",src:a(42039).Z,width:"1044",height:"727"})),(0,n.kt)("p",null,"\u8fd9\u65f6\u5982\u679c\u8981\u5ffd\u7565\u662f\u54ea\u4e00\u4e2aCPU\u7684\uff0c\u53ea\u9700\u8981\u4f7f\u7528without\u8868\u8fbe\u5f0f\uff0c\u5c06\u6807\u7b7eCPU\u53bb\u9664\u540e\u805a\u5408\u6570\u636e\u5373\u53ef\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"avg without(cpu) (rate(node_cpu[2m]))\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ui\u56fe\u7247",src:a(74725).Z,width:"1041",height:"535"})),(0,n.kt)("p",null,"\u90a3\u5982\u679c\u9700\u8981\u8ba1\u7b97\u7cfb\u7edfCPU\u7684\u603b\u4f53\u4f7f\u7528\u7387\uff0c\u901a\u8fc7\u6392\u9664\u7cfb\u7edf\u95f2\u7f6e\u7684CPU\u4f7f\u7528\u7387\u5373\u53ef\u83b7\u5f97:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'1 - avg without(cpu) (rate(node_cpu{mode="idle"}[2m]))\n')),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ui\u56fe\u7247",src:a(45279).Z,width:"1035",height:"491"})),(0,n.kt)("p",null,"\u901a\u8fc7PromQL\u6211\u4eec\u53ef\u4ee5\u975e\u5e38\u65b9\u4fbf\u7684\u5bf9\u6570\u636e\u8fdb\u884c",(0,n.kt)("strong",{parentName:"p"},"\u67e5\u8be2\uff0c\u8fc7\u6ee4\uff0c\u4ee5\u53ca\u805a\u5408\uff0c\u8ba1\u7b97\u7b49\u64cd\u4f5c"),"\u3002\u901a\u8fc7\u8fd9\u4e9b\u4e30\u5bcc\u7684\u8868\u8fbe\u4e66\u8bed\u53e5\uff0c\u76d1\u63a7\u6307\u6807\u4e0d\u518d\u662f\u4e00\u4e2a\u5355\u72ec\u5b58\u5728\u7684\u4e2a\u4f53\uff0c\u800c\u662f\u4e00\u4e2a\u4e2a\u80fd\u591f\u8868\u8fbe\u51fa\u6b63\u5f0f\u4e1a\u52a1\u542b\u4e49\u7684\u8bed\u8a00\u3002"),(0,n.kt)("h2",{id:"\u76d1\u63a7\u6570\u636e\u53ef\u89c6\u5316grafana"},"\u76d1\u63a7\u6570\u636e\u53ef\u89c6\u5316Grafana"),(0,n.kt)("h3",{id:"\u56fe\u8868"},"\u56fe\u8868"),(0,n.kt)("p",null,"Prometheus UI\u63d0\u4f9b\u4e86\u5feb\u901f\u9a8c\u8bc1PromQL\u4ee5\u53ca\u4e34\u65f6\u53ef\u89c6\u5316\u652f\u6301\u7684\u80fd\u529b\uff0c\u800c\u5728\u5927\u591a\u6570\u573a\u666f\u4e0b\u5f15\u5165\u76d1\u63a7\u7cfb\u7edf\u901a\u5e38\u8fd8\u9700\u8981\u6784\u5efa\u53ef\u4ee5\u957f\u671f\u4f7f\u7528\u7684\u76d1\u63a7\u6570\u636e\u53ef\u89c6\u5316\u9762\u677f\uff08Dashboard\uff09\u3002\u8fd9\u65f6\u7528\u6237\u53ef\u4ee5\u8003\u8651\u4f7f\u7528\u7b2c\u4e09\u65b9\u7684\u53ef\u89c6\u5316\u5de5\u5177\u5982Grafana\uff0cGrafana\u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u53ef\u89c6\u5316\u5e73\u53f0\uff0c\u5e76\u4e14\u63d0\u4f9b\u4e86\u5bf9Prometheus\u7684\u5b8c\u6574\u652f\u6301\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d -p 3000:3000 grafana/grafana\n")),(0,n.kt)("p",null,"\u8bbf\u95ee",(0,n.kt)("inlineCode",{parentName:"p"},"http://localhost:3000"),"\u5c31\u53ef\u4ee5\u8fdb\u5165\u5230Grafana\u7684\u754c\u9762\u4e2d\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f7f\u7528\u8d26\u6237admin/admin\u8fdb\u884c\u767b\u5f55\u3002\u5728Grafana\u9996\u9875\u4e2d\u663e\u793a\u9ed8\u8ba4\u7684\u4f7f\u7528\u5411\u5bfc\uff0c\u5305\u62ec\uff1a\u5b89\u88c5\u3001\u6dfb\u52a0\u6570\u636e\u6e90\u3001\u521b\u5efaDashboard\u3001\u9080\u8bf7\u6210\u5458\u3001\u4ee5\u53ca\u5b89\u88c5\u5e94\u7528\u548c\u63d2\u4ef6\u7b49\u4e3b\u8981\u6d41\u7a0b:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ui\u56fe\u7247",src:a(19489).Z,width:"1878",height:"506"})),(0,n.kt)("p",null,"\u8fd9\u91cc\u5c06\u6dfb\u52a0Prometheus\u4f5c\u4e3a\u9ed8\u8ba4\u7684\u6570\u636e\u6e90\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u6307\u5b9a\u6570\u636e\u6e90\u7c7b\u578b\u4e3aPrometheus\u5e76\u4e14\u8bbe\u7f6ePrometheus\u7684\u8bbf\u95ee\u5730\u5740\u5373\u53ef\uff0c\u5728\u914d\u7f6e\u6b63\u786e\u7684\u60c5\u51b5\u4e0b\u70b9\u51fb\u201cAdd\u201d\u6309\u94ae\uff0c\u4f1a\u63d0\u793a\u8fde\u63a5\u6210\u529f\u7684\u4fe1\u606f\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ui\u56fe\u7247",src:a(22775).Z,width:"1013",height:"729"})),(0,n.kt)("p",null,"\u5728\u5b8c\u6210\u6570\u636e\u6e90\u7684\u6dfb\u52a0\u4e4b\u540e\u5c31\u53ef\u4ee5\u5728Grafana\u4e2d\u521b\u5efa\u6211\u4eec\u53ef\u89c6\u5316Dashboard\u4e86\u3002Grafana\u63d0\u4f9b\u4e86\u5bf9PromQL\u7684\u5b8c\u6574\u652f\u6301\uff0c\u5982\u4e0b\u6240\u793a\uff0c\u901a\u8fc7Grafana\u6dfb\u52a0Dashboard\u5e76\u4e14\u4e3a\u8be5Dashboard\u6dfb\u52a0\u4e00\u4e2a\u7c7b\u578b\u4e3a\u201cGraph\u201d\u7684\u9762\u677f\u3002 \u5e76\u5728\u8be5\u9762\u677f\u7684\u201cMetrics\u201d\u9009\u9879\u4e0b\u901a\u8fc7PromQL\u67e5\u8be2\u9700\u8981\u53ef\u89c6\u5316\u7684\u6570\u636e\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ui\u56fe\u7247",src:a(44289).Z,width:"1473",height:"798"})),(0,n.kt)("p",null,"\u70b9\u51fb\u754c\u9762\u4e2d\u7684\u4fdd\u5b58\u9009\u9879\uff0c\u5c31\u521b\u5efa\u4e86\u6211\u4eec\u7684\u7b2c\u4e00\u4e2a\u53ef\u89c6\u5316Dashboard\u4e86\u3002 \u5f53\u7136\u4f5c\u4e3a\u5f00\u6e90\u8f6f\u4ef6\uff0cGrafana\u793e\u533a\u9f13\u52b1\u7528\u6237\u5206\u4eabDashboard\u901a\u8fc7",(0,n.kt)("inlineCode",{parentName:"p"},"https://grafana.com/dashboards"),"\u7f51\u7ad9\uff0c\u53ef\u4ee5\u627e\u5230\u5927\u91cf\u53ef\u76f4\u63a5\u4f7f\u7528\u7684Dashboard\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ui\u56fe\u7247",src:a(54116).Z,width:"1233",height:"721"})),(0,n.kt)("p",null,"Grafana\u4e2d\u6240\u6709\u7684Dashboard\u901a\u8fc7JSON\u8fdb\u884c\u5171\u4eab\uff0c\u4e0b\u8f7d\u5e76\u4e14\u5bfc\u5165\u8fd9\u4e9bJSON\u6587\u4ef6\uff0c\u5c31\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u8fd9\u4e9b\u5df2\u7ecf\u5b9a\u4e49\u597d\u7684Dashboard\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ui\u56fe\u7247",src:a(63791).Z,width:"1250",height:"633"})),(0,n.kt)("h3",{id:"\u76d1\u63a7"},"\u76d1\u63a7"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u98de\u4e66")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://www.feishu.cn/hc/zh-CN/articles/555473130655-%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%8C%87%E4%BB%A4"},"https://www.feishu.cn/hc/zh-CN/articles/555473130655-%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%8C%87%E4%BB%A4"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u9489\u9489")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://blog.csdn.net/zephyr_wang/article/details/126924575"},"https://blog.csdn.net/zephyr_wang/article/details/126924575"))),(0,n.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,n.kt)("h3",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://blog.csdn.net/S1124654/article/details/126159497"},"https://blog.csdn.net/S1124654/article/details/126159497"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://yunlzheng.gitbook.io/prometheus-book/parti-prometheus-ji-chu/quickstart/prometheus-quick-start/use-grafana-create-dashboard"},"https://yunlzheng.gitbook.io/prometheus-book/parti-prometheus-ji-chu/quickstart/prometheus-quick-start/use-grafana-create-dashboard"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/chanshuyi/category/1862951.html"},"https://www.cnblogs.com/chanshuyi/category/1862951.html"))),(0,n.kt)("h3",{id:"\u542f\u52a8\u76f8\u5173"},"\u542f\u52a8\u76f8\u5173"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/command-line/prometheus/"},"https://prometheus.io/docs/prometheus/latest/command-line/prometheus/"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/introduction/first_steps/"},"https://prometheus.io/docs/introduction/first_steps/"))),(0,n.kt)("h3",{id:"\u56fe\u8868\u76f8\u5173"},"\u56fe\u8868\u76f8\u5173"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://blog.csdn.net/S1124654/article/details/132060805"},"https://blog.csdn.net/S1124654/article/details/132060805"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://www.51cto.com/article/689315.html"},"https://www.51cto.com/article/689315.html"))),(0,n.kt)("h3",{id:"\u544a\u8b66"},"\u544a\u8b66"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u98de\u4e66")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://www.feishu.cn/hc/zh-CN/articles/555473130655-%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%8C%87%E4%BB%A4"},"https://www.feishu.cn/hc/zh-CN/articles/555473130655-%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%8C%87%E4%BB%A4"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u9489\u9489")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"https://blog.csdn.net/zephyr_wang/article/details/126924575"},"https://blog.csdn.net/zephyr_wang/article/details/126924575"))))}m.isMDXComponent=!0},22775:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/add_default_prometheus_datasource-69ff5dde6da655d11eb35285a667fe8c.png"},44289:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/first_grafana_dashboard-ee3090e670fe23235c4bc93e6e4b025b.png"},19489:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/get_start_with_grafana2-cf96c69d1cde4f7d650e1de4187fedaf.png"},54116:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/grafana_dashboards-0d03b5d01f77bb5282770d26ccac7b2c.png"},42039:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/node_cpu_usage_by_cpu_and_mode-3f6c0c0a705d560e23e3494990197d09.png"},74725:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/node_cpu_usage_by_mode-79fbab8b50274b616019e180c7111f9a.png"},45279:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/node_cpu_usage_total-51bf27a11b5112f6e2dbf4d665ab6e73.png"},63791:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/node_exporter_dashboard-5a9effc9f476502c47eaf40d4adaf4e3.png"},72796:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/node_exporter_home_page-d882963bebe2670bf5fd74d6b750ad2b.png"},53524:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/node_exporter_metrics_page-4409b4a6ecfcf5d8f1f8e13299d10e69.png"},77689:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/node_node1_graph-3722906aa49853fda2f65e040f3fa787.png"},19476:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/prometheus-ui-graph-37d6fa3fbc4093ab94903ccd87c84c6b.png"},77762:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/prometheus_ui_graph_query1-e3140842105d8e060db77a639dfeac9b.png"},36109:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/prometheus_ui_up_query-69717cc955f105afa01bb323d0088956.png"}}]);