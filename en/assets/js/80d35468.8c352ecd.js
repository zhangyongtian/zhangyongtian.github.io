"use strict";(self.webpackChunkathenaserving=self.webpackChunkathenaserving||[]).push([[7155],{3905:(e,l,t)=>{t.d(l,{Zo:()=>u,kt:()=>h});var n=t(67294);function o(e,l,t){return l in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}function r(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);l&&(n=n.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?arguments[l]:{};l%2?r(Object(t),!0).forEach((function(l){o(e,l,t[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))}))}return e}function s(e,l){if(null==e)return{};var t,n,o=function(e,l){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||(o[t]=e[t]);return o}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),a=function(e){var l=n.useContext(i),t=l;return e&&(t="function"==typeof e?e(l):c(c({},l),e)),t},u=function(e){var l=a(e.components);return n.createElement(i.Provider,{value:l},e.children)},p="mdxType",k={inlineCode:"code",wrapper:function(e){var l=e.children;return n.createElement(n.Fragment,{},l)}},m=n.forwardRef((function(e,l){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=a(t),m=o,h=p["".concat(i,".").concat(m)]||p[m]||k[m]||r;return t?n.createElement(h,c(c({ref:l},u),{},{components:t})):n.createElement(h,c({ref:l},u))}));function h(e,l){var t=arguments,o=l&&l.mdxType;if("string"==typeof e||o){var r=t.length,c=new Array(r);c[0]=m;var s={};for(var i in l)hasOwnProperty.call(l,i)&&(s[i]=l[i]);s.originalType=e,s[p]="string"==typeof e?e:o,c[1]=s;for(var a=2;a<r;a++)c[a]=t[a];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},64773:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>i,contentTitle:()=>c,default:()=>k,frontMatter:()=>r,metadata:()=>s,toc:()=>a});var n=t(87462),o=(t(67294),t(3905));const r={sidebar_position:2,sidebar_label:"\u5b89\u88c5"},c=void 0,s={unversionedId:"\u6570\u636e\u5b58\u50a8/ClickHouse/\u5b89\u88c5",id:"\u6570\u636e\u5b58\u50a8/ClickHouse/\u5b89\u88c5",title:"\u5b89\u88c5",description:"\u73af\u5883\u51c6\u5907",source:"@site/docs/\u6570\u636e\u5b58\u50a8/ClickHouse/\u5b89\u88c5.md",sourceDirName:"\u6570\u636e\u5b58\u50a8/ClickHouse",slug:"/\u6570\u636e\u5b58\u50a8/ClickHouse/\u5b89\u88c5",permalink:"/en/docs/\u6570\u636e\u5b58\u50a8/ClickHouse/\u5b89\u88c5",draft:!1,editUrl:"https://github.com/zhangyongtian/bigdataknowledge/tree/dev/docs/\u6570\u636e\u5b58\u50a8/ClickHouse/\u5b89\u88c5.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"\u5b89\u88c5"},sidebar:"docSidebar",previous:{title:"\u6982\u8ff0",permalink:"/en/docs/\u6570\u636e\u5b58\u50a8/ClickHouse/\u6982\u8ff0"},next:{title:"\u524d\u671f\u914d\u7f6e",permalink:"/en/docs/\u6570\u636e\u5b58\u50a8/ClickHouse/\u524d\u671f\u914d\u7f6e"}},i={},a=[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",level:2},{value:"\u5b66\u4e60\u7248\u672c\u5b89\u88c5",id:"\u5b66\u4e60\u7248\u672c\u5b89\u88c5",level:2},{value:"\u751f\u4ea7\u90e8\u7f72",id:"\u751f\u4ea7\u90e8\u7f72",level:2},{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907-1",level:3},{value:"\u5b89\u88c5ClickHouse\u670d\u52a1\u5668\u548c\u5ba2\u6237\u7aef",id:"\u5b89\u88c5clickhouse\u670d\u52a1\u5668\u548c\u5ba2\u6237\u7aef",level:3},{value:"\u542f\u52a8ClickHouse",id:"\u542f\u52a8clickhouse",level:3},{value:"\u76f8\u5173rpm\u5305\u4e0b\u8f7d\u5730\u5740(\u79bb\u7ebf\u4e0b\u8f7d\u65b9\u5f0f)",id:"\u76f8\u5173rpm\u5305\u4e0b\u8f7d\u5730\u5740\u79bb\u7ebf\u4e0b\u8f7d\u65b9\u5f0f",level:2},{value:"\u4e0b\u8f7d\u79bb\u7ebf\u5b89\u88c5\u5305",id:"\u4e0b\u8f7d\u79bb\u7ebf\u5b89\u88c5\u5305",level:3},{value:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",id:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u542f\u52a8Server",id:"\u542f\u52a8server",level:3},{value:"\u4f7f\u7528client\u8fde\u63a5server",id:"\u4f7f\u7528client\u8fde\u63a5server",level:3}],u={toc:a},p="wrapper";function k(e){let{components:l,...t}=e;return(0,o.kt)(p,(0,n.Z)({},u,t,{components:l,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"\ncat /proc/sys/vm/overcommit_memory\necho 1 > /proc/sys/vm/overcommit_memory\nsudo sh -c 'echo 1 > /proc/sys/vm/overcommit_memory'\n\n// \u8bbe\u7f6e\u7528\u6237\u53ef\u4ee5\u540c\u65f6\u8fd0\u884c\u7684\u8fdb\u7a0b\u6570\u7684\u6700\u5927\u9650\u5236\u548c\u6587\u4ef6\u6253\u5f00\u9650\u5236\uff08\u7cfb\u7edf\u7ea7\u522b\u7684\u914d\u7f6e\uff09\nsudo vim /etc/security/limits.conf\n\nroot soft nofile 65536\nroot hard nofile 65536\nroot soft nproc 131072\nroot hard nproc 131072\n* soft nofile 65536\n* hard nofile 65536\n* soft nproc 131072\n* hard nproc 131072\n\n\n// \u8bbe\u7f6e\u7528\u6237\u53ef\u4ee5\u540c\u65f6\u8fd0\u884c\u7684\u8fdb\u7a0b\u6570\u7684\u6700\u5927\u9650\u5236\u548c\u6587\u4ef6\u6253\u5f00\u9650\u5236\uff08\u4e2a\u6027\u5316\u7684\u914d\u7f6e\uff09\nsudo vim /etc/security/limits.d/20-nproc.conf\n\nroot soft nofile 65536\nroot hard nofile 65536\nroot soft nproc 131072\nroot hard nproc 131072\n* soft nofile 65536\n* hard nofile 65536\n* soft nproc 131072\n* hard nproc 131072\n\nsudo yum install -y libtool\nsudo yum install -y *unixODBC*\n\nsudo vim /etc/selinux/config\nSELINUX=disabled\n")),(0,o.kt)("p",null,"\u76f8\u5173\u6587\u6863"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://blog.51cto.com/lookingdream/1933132"},"https://blog.51cto.com/lookingdream/1933132"))),(0,o.kt)("h2",{id:"\u5b66\u4e60\u7248\u672c\u5b89\u88c5"},"\u5b66\u4e60\u7248\u672c\u5b89\u88c5"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5982\u679c\u60a8\u521a\u521a\u5165\u95e8\u5e76\u60f3\u770b\u770b ClickHouse \u80fd\u505a\u4ec0\u4e48\uff0c\u5c06 ClickHouse \u4e0b\u8f7d\u5230\u672c\u5730\u6700\u7b80\u5355\u7684\u65b9\u6cd5\u662f\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u3002\u5b83\u4f1a\u4e3a\u60a8\u7684\u64cd\u4f5c\u7cfb\u7edf\u4e0b\u8f7d\u4e00\u4e2a\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u53ef\u7528\u4e8e\u8fd0\u884c ClickHouse \u670d\u52a1\u5668\u3001clickhouse-client\u3001clickhouse-local\u3001ClickHouse Keeper \u548c\u5176\u4ed6\u5de5\u5177\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"curl https://clickhouse.com/ | sh\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8ClickHouse\u670d\u52a1\u5668\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./clickhouse server\n")),(0,o.kt)("p",null,"\u7b2c\u4e00\u6b21\u8fd0\u884c\u6b64\u811a\u672c\u65f6\uff0c\u5c06\u5728\u5f53\u524d\u76ee\u5f55\u4e2d\u521b\u5efa\u5fc5\u8981\u7684\u6587\u4ef6\u548c\u6587\u4ef6\u5939\uff0c\u7136\u540e\u670d\u52a1\u5668\u542f\u52a8\u3002"),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"\u6253\u5f00\u4e00\u4e2a\u65b0\u7ec8\u7aef\u5e76\u4f7f\u7528./clickhouse \u5ba2\u6237\u7aef\u8fde\u63a5\u5230\u60a8\u7684\u670d\u52a1\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./clickhouse client\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./clickhouse client\nClickHouse client version 23.2.1.1501 (official build).\nConnecting to localhost:9000 as user default.\nConnected to ClickHouse server version 23.2.1 revision 54461.\n\nlocal-host :)\n")),(0,o.kt)("p",null,"\u60a8\u5df2\u51c6\u5907\u597d\u5f00\u59cb\u5411 ClickHouse \u53d1\u9001 DDL \u548c SQL \u547d\u4ee4\uff01"),(0,o.kt)("h2",{id:"\u751f\u4ea7\u90e8\u7f72"},"\u751f\u4ea7\u90e8\u7f72"),(0,o.kt)("h3",{id:"\u73af\u5883\u51c6\u5907-1"},"\u73af\u5883\u51c6\u5907"),(0,o.kt)("p",null,"\u5efa\u8bae\u4f7f\u7528rpm CentOS\u3001RedHat \u548c\u6240\u6709\u5176\u4ed6\u57fa\u4e8e rpm \u7684 Linux \u53d1\u884c\u7248\u7684\u5b98\u65b9\u9884\u7f16\u8bd1\u5305\u3002"),(0,o.kt)("p",null,"\u9996\u5148\uff0c\u60a8\u9700\u8981\u6dfb\u52a0\u5b98\u65b9\u5b58\u50a8\u5e93\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo yum install -y yum-utils\nsudo yum-config-manager --add-repo https://packages.clickhouse.com/rpm/clickhouse.repo\n")),(0,o.kt)("h3",{id:"\u5b89\u88c5clickhouse\u670d\u52a1\u5668\u548c\u5ba2\u6237\u7aef"},"\u5b89\u88c5ClickHouse\u670d\u52a1\u5668\u548c\u5ba2\u6237\u7aef"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo yum install -y clickhouse-server clickhouse-client\n")),(0,o.kt)("h3",{id:"\u542f\u52a8clickhouse"},"\u542f\u52a8ClickHouse"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'sudo systemctl enable clickhouse-server\nsudo systemctl start clickhouse-server\nsudo systemctl status clickhouse-server\nclickhouse-client -m # or "clickhouse-client --password" if you set up a password.\n\n#\u4fee\u6539\u5bf9\u5e94\u7684\u914d\u7f6e\u6587\u4ef6\nsudo vim /etc/clickhouse-server/config.xml\n')),(0,o.kt)("h2",{id:"\u76f8\u5173rpm\u5305\u4e0b\u8f7d\u5730\u5740\u79bb\u7ebf\u4e0b\u8f7d\u65b9\u5f0f"},"\u76f8\u5173rpm\u5305\u4e0b\u8f7d\u5730\u5740(\u79bb\u7ebf\u4e0b\u8f7d\u65b9\u5f0f)"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://packages.clickhouse.com/rpm/stable/"},"https://packages.clickhouse.com/rpm/stable/"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"clickhouse-common-static \u5b89\u88c5 ClickHouse \u7f16\u8bd1\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u3002"),(0,o.kt)("li",{parentName:"ul"},"clickhouse-server \u521b\u5efa\u7b26\u53f7\u94fe\u63a5clickhouse-server\u5e76\u5b89\u88c5\u9ed8\u8ba4\u670d\u52a1\u5668\u914d\u7f6e\u3002"),(0,o.kt)("li",{parentName:"ul"},"clickhouse-client clickhouse-client\u2014 \u4e3a\u548c\u5176\u4ed6\u5ba2\u6237\u7aef\u76f8\u5173\u5de5\u5177\u521b\u5efa\u7b26\u53f7\u94fe\u63a5\u3002\u5e76\u5b89\u88c5\u5ba2\u6237\u7aef\u914d\u7f6e\u6587\u4ef6\u3002"),(0,o.kt)("li",{parentName:"ul"},"clickhouse-common-static-dbg \u5b89\u88c5\u5e26\u6709\u8c03\u8bd5\u4fe1\u606f\u7684 ClickHouse \u7f16\u8bd1\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u3002"),(0,o.kt)("li",{parentName:"ul"},"clickhouse-keeper \u7528\u4e8e\u5728\u4e13\u7528 ClickHouse Keeper \u8282\u70b9\u4e0a\u5b89\u88c5 ClickHouse Keeper\u3002\u5982\u679c\u60a8\u5728\u4e0e ClickHouse \u670d\u52a1\u5668\u76f8\u540c\u7684\u670d\u52a1\n\u5668\u4e0a\u8fd0\u884c ClickHouse Keeper\uff0c\u5219\u65e0\u9700\u5b89\u88c5\u6b64\u8f6f\u4ef6\u5305\u3002\u5b89\u88c5 ClickHouse Keeper \u548c\u9ed8\u8ba4\u7684 ClickHouse Keeper \u914d\u7f6e\u6587\u4ef6\u3002")),(0,o.kt)("p",null,"\u4f7f\u7528yum\u5b89\u88c5\u4ee5\u540e\u7684\u5305\u6709,\u90a3\u4e48\u5176\u4ed6\u7684\u5305\u90fd\u662f\u53ef\u9009\u7684\u5305"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"clickhouse-client-23.7.3.14-1.x86_64\nclickhouse-common-static-23.7.3.14-1.x86_64\nclickhouse-server-23.7.3.14-1.x86_64\n")),(0,o.kt)("h3",{id:"\u4e0b\u8f7d\u79bb\u7ebf\u5b89\u88c5\u5305"},"\u4e0b\u8f7d\u79bb\u7ebf\u5b89\u88c5\u5305"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://packages.clickhouse.com/rpm/stable/clickhouse-client-23.7.3.14.x86_64.rpm\nwget https://packages.clickhouse.com/rpm/stable/clickhouse-common-static-23.7.3.14.x86_64.rpm\nwget https://packages.clickhouse.com/rpm/stable/clickhouse-server-23.7.3.14.x86_64.rpm\nsudo rpm -ivh *.rpm\n\n#\u5b89\u88c5\u7684\u65f6\u5019\u5982\u679c\u8981\u8f93\u5165\u5bc6\u7801\u76f4\u63a5\u56de\u8f66\u5c31\u4e0d\u9700\u8981\u8f93\u5165\u5bc6\u7801\n\n#clickhouse\u67e5\u770b\u5b89\u88c5\u60c5\u51b5\nsudo rpm -qa | grep clickhouse\n\n[root]# sudo rpm -qa | grep clickhouse\nclickhouse-common-static-23.7.3.14-1.x86_64\nclickhouse-client-23.7.3.14-1.x86_64\nclickhouse-server-23.7.3.14-1.x86_64\n")),(0,o.kt)("h3",{id:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6"},"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo vim /etc/clickhouse-server/config.xml\n")),(0,o.kt)("p",null,"\u628a <listen_host>::</listen_host> \u7684\u6ce8\u91ca\u6253\u5f00\uff0c\u8fd9\u6837\u7684\u8bdd\u624d\u80fd\u8ba9ClickHouse\u88ab\u9664\u672c\u673a\u4ee5\u5916\u7684\u670d\u52a1\u5668\u8bbf\u95ee"),(0,o.kt)("p",null,"\u6570\u636e\u6587\u4ef6\u8def\u5f84\uff1a",(0,o.kt)("path",null,"/var/lib/clickhouse/")),(0,o.kt)("p",null,"\u65e5\u5fd7\u6587\u4ef6\u8def\u5f84\uff1a",(0,o.kt)("log",null,"/var/log/clickhouse-server/clickhouse-server.log")),(0,o.kt)("h3",{id:"\u542f\u52a8server"},"\u542f\u52a8Server"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo systemctl start clickhouse-server\nsudo systemctl enable clickhouse-server\nsudo systemctl status clickhouse-server\nsudo systemctl restart clickhouse-server\n")),(0,o.kt)("h3",{id:"\u4f7f\u7528client\u8fde\u63a5server"},"\u4f7f\u7528client\u8fde\u63a5server"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"clickhouse-client -h host  --port 9000  -m\n\nclickhouse-client -m\n")),(0,o.kt)("p",null,"-m :\u53ef\u4ee5\u5728\u547d\u4ee4\u7a97\u53e3\u8f93\u5165\u591a\u884c\u547d\u4ee4"))}k.isMDXComponent=!0}}]);