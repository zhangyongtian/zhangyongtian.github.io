"use strict";(self.webpackChunkathenaserving=self.webpackChunkathenaserving||[]).push([[7263],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),k=r,d=m["".concat(s,".").concat(k)]||m[k]||u[k]||i;return n?a.createElement(d,l(l({ref:t},p),{},{components:n})):a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},19933:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:9,sidebar_label:"Flink CDC\u76f8\u5173\u5b9e\u8df5"},l=void 0,o={unversionedId:"\u6570\u636e\u96c6\u6210/Flink CDC/Flink CDC\u76f8\u5173\u5b9e\u8df5",id:"\u6570\u636e\u96c6\u6210/Flink CDC/Flink CDC\u76f8\u5173\u5b9e\u8df5",title:"Flink CDC\u76f8\u5173\u5b9e\u8df5",description:"\u5b98\u65b9\u63d0\u4f9b",source:"@site/docs/\u6570\u636e\u96c6\u6210/Flink CDC/Flink CDC\u76f8\u5173\u5b9e\u8df5.md",sourceDirName:"\u6570\u636e\u96c6\u6210/Flink CDC",slug:"/\u6570\u636e\u96c6\u6210/Flink CDC/Flink CDC\u76f8\u5173\u5b9e\u8df5",permalink:"/docs/\u6570\u636e\u96c6\u6210/Flink CDC/Flink CDC\u76f8\u5173\u5b9e\u8df5",draft:!1,editUrl:"https://github.com/zhangyongtian/bigdataknowledge/tree/dev/docs/\u6570\u636e\u96c6\u6210/Flink CDC/Flink CDC\u76f8\u5173\u5b9e\u8df5.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,sidebar_label:"Flink CDC\u76f8\u5173\u5b9e\u8df5"},sidebar:"docSidebar",previous:{title:"Flink CDC\u7248\u672c\u5f71\u54cd",permalink:"/docs/\u6570\u636e\u96c6\u6210/Flink CDC/FlinkCDC\u7248\u672c\u5f71\u54cd"},next:{title:"Maxwell",permalink:"/docs/category/maxwell"}},s={},c=[{value:"\u5b98\u65b9\u63d0\u4f9b",id:"\u5b98\u65b9\u63d0\u4f9b",level:2},{value:"\u9879\u76ee\u5b9e\u6218",id:"\u9879\u76ee\u5b9e\u6218",level:2},{value:"Flink CDC \u6574\u5e93\u540c\u6b65\u5230Kafka",id:"flink-cdc-\u6574\u5e93\u540c\u6b65\u5230kafka",level:3},{value:"\u9700\u6c42",id:"\u9700\u6c42",level:4},{value:"\u9700\u6c42\u5206\u6790",id:"\u9700\u6c42\u5206\u6790",level:4},{value:"\u9700\u6c42\u5b9e\u73b0\u601d\u8def",id:"\u9700\u6c42\u5b9e\u73b0\u601d\u8def",level:4},{value:"\u5b9e\u73b0\u7684\u96be\u70b9",id:"\u5b9e\u73b0\u7684\u96be\u70b9",level:4}],p={toc:c},m="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(m,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u5b98\u65b9\u63d0\u4f9b"},"\u5b98\u65b9\u63d0\u4f9b"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/9OCEN6_KgIeF1DdMtmVdqA"},"Flink CDC\u6784\u5efaMySQL\u548cPostgres\u4e0a\u7684 Streaming ETL")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/-kWgCUrQjcg2ee3-Rd-Pog"},"Flink CDC \u5b9e\u73b0 MySQL \u6570\u636e\u5b9e\u65f6\u5165 Apache Doris \u6570\u4ed3")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/mECOb5vSspPEsm6LZ8aN-g"},"\u57fa\u4e8e Flink CDC \u540c\u6b65 MySQL \u5206\u5e93\u5206\u8868\uff0c\u6784\u5efa Iceberg\u5b9e\u65f6\u6570\u636e\u6e56")),(0,r.kt)("h2",{id:"\u9879\u76ee\u5b9e\u6218"},"\u9879\u76ee\u5b9e\u6218"),(0,r.kt)("p",null,"\u77e5\u8bc6\u51c6\u5907"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u67e5\u770b\u6570\u636e\u5f00\u53d1\u4e2d\u7684Apache Flink End-to-End-Exactly-Once")),(0,r.kt)("h3",{id:"flink-cdc-\u6574\u5e93\u540c\u6b65\u5230kafka"},"Flink CDC \u6574\u5e93\u540c\u6b65\u5230Kafka"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u652f\u6301\u5e76\u53d1\u8bfb\u53d6\u7684 DataStream API\n\u5728 2.0 \u7248\u672c\u4e2d\uff0c\u65e0\u9501\u7b97\u6cd5\uff0c\u5e76\u53d1\u8bfb\u53d6\u7b49\u529f\u80fd\u53ea\u5728 SQL API \u4e0a\u900f\u51fa\u7ed9\u7528\u6237\uff0c\u800c DataStream API \u672a\u900f\u51fa\u7ed9\u7528\u6237\uff0c2.1 \u7248\u672c\u652f\u6301\u4e86 DataStream API\uff0c\u53ef\u901a\u8fc7 MySqlSourceBuilder \u521b\u5efa\u6570\u636e\u6e90\u3002\u7528\u6237\u53ef\u4ee5\u540c\u65f6\u6355\u83b7\u591a\u8868\u6570\u636e\uff0c\u501f\u6b64\u642d\u5efa\u6574\u5e93\u540c\u6b65\u94fe\u8def\u3002\u540c\u65f6\u901a\u8fc7 MySqlSourceBuilder#includeSchemaChanges \u8fd8\u80fd\u6355\u83b7schema \u53d8\u66f4\u3002")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5728 2.2 \u7248\u672c\u4e2dMySQL CDC \u652f\u6301\u52a8\u6001\u52a0\u8868\n\u8bbe\u60f3\u4e0b\u5047\u5982\u4f60\u4e00\u4e2a CDC pipeline \u76d1\u63a7\u4e86 4 \u5f20\u8868\uff0c\u7a81\u7136\u6709\u5929\u4e1a\u52a1\u9700\u6c42\u9700\u8981\u518d\u52a0\u51e0\u5f20\u8868\uff0c\u4f60\u80af\u5b9a\u4e0d\u60f3\u53e6\u8d77\u4f5c\u4e1a (\u6d6a\u8d39\u8d44\u6e90)\uff0c\u90a3\u4e48\u8fd9\u4e2a feature \u53ef\u4ee5\u8ba9\u4f60\u5728\u5f53\u524d\u4f5c\u4e1a\u76f4\u63a5\u589e\u52a0\u9700\u8981\u76d1\u63a7\u7684\u8868\u3002\u65b0\u589e\u8868\u90fd\u662f\u5148\u505a\u5168\u91cf\u518d\u4f18\u96c5\u5730\u5207\u6362\u5230\u589e\u91cf\uff0c\u9047\u5230\u65b0\u589e\u76d1\u63a7\u8868\u65f6\u4e0d\u7528\u65b0\u8d77\u4f5c\u4e1a\uff0c\u6781\u5927\u5730\u8282\u7ea6\u4e86\u8d44\u6e90\u3002Flink CDC \u7f51\u7ad9\u4e5f\u63d0\u4f9b\u4e86\u8be5\u529f\u80fd\u7684\u4f7f\u7528\u6587\u6863","[2]","\uff0c\u7528\u6237\u5728\u5f00\u53d1\u65f6\u53ef\u4ee5\u53c2\u8003\u3002")),(0,r.kt)("p",null,"\u7531\u4e0a\u53ef\u77e5\uff0cFlink CDC 2.0\u5f00\u59cb\u53ef\u4ee5\u652f\u6301\u642d\u5efa\u6574\u5e93\u540c\u6b65\u94fe\u8def\uff0c\u57282.2 \u7248\u672c\u652f\u6301\u52a8\u6001\u52a0\u8868\uff0c\u90a3\u4e48\u6211\u4eec\u6765\u5b9e\u73b0\u4e00\u4e2a\u52a8\u6001\u52a0\u8868\u7684\u6574\u5e93\u540c\u6b65\u5230Kafka\u6848\u4f8b\uff0c\u4f7f\u7528\u8fd9\u4e2a\u6848\u4f8b\u76f4\u63a5\u4f7f\u7528\u6700\u8fd1\u53d1\u5e03\u76842.4\u7248\u672c\u4f5c\u4e3a\u57fa\u7840\u6765\u5b9e\u73b0\u3002"),(0,r.kt)("h4",{id:"\u9700\u6c42"},"\u9700\u6c42"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"MySQL\u6574\u5e93\u7684changelog\u6570\u636e\u540c\u6b65\u5230Kafka\uff0c\u6570\u636e\u4e0d\u4e22\u4e0d\u91cd\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u652f\u6301\u52a8\u6001\u7684\u52a0\u5165\u65b0\u8868\uff0c\u52a0\u5165\u4ee5\u540e\u80fd\u591f\u5728\u4e0d\u505c\u52a0\u7684\u60c5\u51b5\uff0c\u65b0\u8868\u7684\u6570\u636e\u53d1\u9001\u5230Kafka\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6570\u636e\u53d1\u9001\u5230Kafka\u7684\u5355\u884c\u6570\u636e\u7684changelog\u4e0d\u4e71\u5e8f\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u53ef\u914d\u7f6e\u5316\u3002"))),(0,r.kt)("h4",{id:"\u9700\u6c42\u5206\u6790"},"\u9700\u6c42\u5206\u6790"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kafka\u751f\u4ea7\u8005\u56fe\u7247",src:n(79250).Z,width:"1046",height:"836"})),(0,r.kt)("h4",{id:"\u9700\u6c42\u5b9e\u73b0\u601d\u8def"},"\u9700\u6c42\u5b9e\u73b0\u601d\u8def"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u9700\u6c42"),(0,r.kt)("th",{parentName:"tr",align:null},"\u89e3\u51b3\u65b9\u6848"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MySQL\u6574\u5e93\u7684changelog\u6570\u636e\u540c\u6b65\u5230Kafka\uff0c\u6570\u636e\u4e0d\u4e22\u4e0d\u91cd\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"Flink CDC\u80fd\u591f\u4fdd\u8bc1\u8bfb\u53d6\u7684\u65f6\u5019\u4e0d\u4e22\u4e0d\u91cd\u590d\uff0c\u90a3\u4e48\u53ea\u8981\u4fdd\u8bc1\u53d1\u9001\u5230Kafka\u7684\u65f6\u5019\u4e0d\u4e22\u5c31\u884c\u4e86\uff08\u5177\u4f53\u539f\u7406\u548c\u64cd\u4f5c\u67e5\u770b\u6570\u636e\u5f00\u53d1Apache Flink \u7684 End-to-End-Exactly-Once\uff09\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u652f\u6301\u52a8\u6001\u7684\u52a0\u5165\u65b0\u8868\uff0c\u52a0\u5165\u4ee5\u540e\u80fd\u591f\u5728\u4e0d\u505c\u52a0\u7684\u60c5\u51b5\uff0c\u65b0\u8868\u7684\u6570\u636e\u53d1\u9001\u5230Kafka\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"Flink CDC\u6b63\u5219mysql_db=dbname mysql_tables=dbname.*\uff0c\u5c31\u80fd\u591f\u5b9e\u73b0\u52a8\u6001\u8868\u7684\u76d1\u542c\u4e0d\u505c\u673a\u64cd\u4f5c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u53d1\u9001\u5230Kafka\u7684\u5355\u884c\u6570\u636e\u7684changelog\u4e0d\u4e71\u5e8f\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e00\u5f20\u8868\u5bf9\u5e94\u4e00\u4e2atopic,\u5e76\u4e14\u5355\u884c\u6570\u636e\u7684crud\u64cd\u4f5c\u7684key\u7528","[tablename_id]"," \u8fd9\u6837\u5c31\u80fd\u591f\u4f7f\u5f97\u5355\u884c\u6570\u636e\u5230\u4e00\u4e2a\u4e3b\u9898\u7684\u4e00\u4e2a\u5206\u533a\uff0c\u5b9e\u73b0\u4e86\u6570\u636e\u4e0d\u4e71\u5e8f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u914d\u7f6e\u5316\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"ParameterTool parameter = ParameterTool.fromArgs(args);\u628a\u7a0b\u5e8f\u6240\u6709\u7684\u53d8\u91cf\u62bd\u8c61\u5904\u7406\u5b9e\u73b0\u5916\u90e8\u53ef\u914d\u7f6e\u5316\uff0c\u8fbe\u5230\u5f00\u53d1\u63a5\u53e3\u5b9e\u73b0\u6574\u5e93\u540c\u6b65\u7684\u6548\u679c\u3002")))),(0,r.kt)("h4",{id:"\u5b9e\u73b0\u7684\u96be\u70b9"},"\u5b9e\u73b0\u7684\u96be\u70b9"),(0,r.kt)("p",null,"Flink CDC \u672c\u8eab\u7684\u5e8f\u5217\u5316\u5668\u662f\u6ca1\u6709\u5305\u542b\u6570\u636e\u7684\u4e3b\u952e\u7684,\u90a3\u4e48\u5f97\u5230\u4e3b\u952e\u7684\u4e3b\u952e\u624d\u80fd\u4fdd\u8bc1\u5355\u884c\u6570\u636e\u53d1\u9001\u5230Kafka\u6570\u636e\u4e0d\u4e71\u5e8f\uff0c\u6bd4\u5982","[tablename_id]","\uff0c\u521a\u597d\u4e0b\u9762\u4f2a\u4ee3\u7801\u53ef\u4ee5\u5f97\u5230\u5bf9\u5e94\u7684\u4e3b\u952e\u4fe1\u606f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},' com.ververica.cdc.debezium.DebeziumDeserializationSchema\n public void deserialize(SourceRecord record, Collector<String> out)\n        Schema sourceKeySchema = record.keySchema();\n        List<Field> fields = sourceKeySchema.fields();\n        //\u5f97\u5230\u6570\u636e\u7684\u8868\u540d\n        String tableName = initDataInfo.getJSONObject("source").getString("table");\n        resultPrimaryKey.append(tableName);\n        //\u5f97\u5230\u6570\u636e\u7684\u4e3b\u952e\u6570\u636e\n        for (Field field : fields) {\n            String primaryKeyName = field.name();\n            String primaryKeyValueItem="";\n            if(initDataInfo.getJSONObject("after")!=null){\n                primaryKeyValueItem= initDataInfo.getJSONObject("after").getString(primaryKeyName);\n            }else{\n                primaryKeyValueItem=initDataInfo.getJSONObject("before").getString(primaryKeyName);\n            }\n            resultPrimaryKey.append(primaryKeyValueItem);\n        }\n\n//\u4e0a\u9762\u5b9e\u73b0\u7684FlinkCDC\u5e8f\u5217\u5316\u5668\u88c5\u8f7d\u8fdb\u6765\u3002\n        MySqlSource<String> mySqlSource = MySqlSource.<String>builder()\n                .hostname(mysql_server)\n                .port(Integer.parseInt(mysql_port))\n                .scanNewlyAddedTableEnabled(true)\n                .databaseList(mysql_db) // set captured database, If you need to synchronize the whole database, Please set tableList to ".*".\n                .tableList(mysql_tables) // set captured table\n                .username(mysql_username)\n                .password(mysql_password)\n//                .serverTimeZone(mysql_timezone)\n                .startupOptions(StartupOptions.initial())\n                .includeSchemaChanges(true)\n                .deserializer(new CustomFlinkCDCJsonDebeziumDeserializationSchema()) // converts SourceRecord to JSON String\n                .build();\n')),(0,r.kt)("p",null,"\u6700\u540e\u5f97\u5230\u7684\u7ed3\u679c\u6570\u636e\u4e3a\uff0c\u5982\u4e0b\u9762\u7684\u6570\u636e\u591a\u4e86\u4e00\u4e2adata_key\u548cdata_target_topic\uff0c\u8fd9\u91cc\u52a0\u8fdb\u53bb\u7684\u4e3b\u8981\u4f5c\u7528\u662f\u5728Flink Kafka Product\u7684\u65f6\u5019\u80fd\u591f\u77e5\u9053\u53d1\u9001\u5230\u4e86\u90a3\u4e2a\u4e3b\u9898\uff0c\u548c\u5bf9\u5e94\u7684\u5206\u533a\u505a\u597d\u6570\u636e\u51c6\u5907\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "op": "r",\n    "data_key": "tablename_id",\n    "data_target_topic": "databasename_tablename",\n    "after": {\n        "test1": "\u6570\u636e"\n        "id": 89\n    },\n    "source": {\n        "server_id": 0,\n        "version": "1.3",\n        "file": "",\n        "connector": "mysql",\n        "pos": 0,\n        "name": "mysql_binlog_source",\n        "row": 0,\n        "ts_ms": 0,\n        "snapshot": "false",\n        "db": "\u5e93\u540d",\n        "table": "\u8868\u540d"\n    },\n    "ts_ms": 1691472223325\n}\n')),(0,r.kt)("p",null,"KafkaSink,\u81ea\u5b9a\u4e49\u4e00\u4e9b\u4e3b\u9898\u9009\u62e9\u5668\uff0cKeySerialization\u548cValueSerialization\u5bf9\u4e4b\u524d\u7684\u6570\u636e\u8fdb\u884c\u5904\u7406\u5f97\u5230\u6700\u521d\u7684Flink CDC \u91c7\u96c6\u5230\u7684\u6570\u636e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'        Properties properties = new Properties();\n        properties.put(ProducerConfig.TRANSACTION_TIMEOUT_CONFIG,CommonString.CHECKPOINT_TIMEOUT+CommonString.CHECKPOINT_TIME*2);\n        properties.setProperty(ProducerConfig.LINGER_MS_CONFIG, "2000");\n        KafkaSink sink = KafkaSink.<String>builder()\n                .setBootstrapServers(kafka_servsers)\n                //\u81ea\u5b9a\u4e49\u5e8f\u5217\u5316\u5668\n                .setRecordSerializer(CustomKafkaRecordSerializationSchema.buildCustomKafkaRecordSerializationSchema())\n                .setDeliverGuarantee(DeliveryGuarantee.EXACTLY_ONCE)\n                .setTransactionalIdPrefix(kafka_transactionalIdprefix)\n                .setKafkaProducerConfig(properties)\n                .build();\n        env\n                .fromSource(mySqlSource, WatermarkStrategy.noWatermarks(), "CustomMySQL Source")\n                .setParallelism(3).sinkTo(sink);\n')),(0,r.kt)("p",null,"\u81ea\u5b9a\u4e49\u5e8f\u5217\u5316\u5668\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Selects a topic for the incoming record.\n *\n * @param <IN> type of the incoming record\n */\n@PublicEvolving\npublic interface TopicSelector<IN> extends Function<IN, String>, Serializable {}\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\npublic class CustomKafkaRecordSerializationSchema  {\n    public static KafkaRecordSerializationSchema buildCustomKafkaRecordSerializationSchema(){\n        return KafkaRecordSerializationSchema.builder()\n                .setTopicSelector(new TopicSelector<String>() {\n                    @Override\n                    public String apply(String initData) {\n                        JSONObject jsonObject = JSONObject.parseObject(initData);\n                        String targetTopic = jsonObject.getString("topic");\n                        return targetTopic;\n                    }\n                })\n                .setValueSerializationSchema(new CustomFlinkKafkaSimpleStringValueSchema())\n                .setKeySerializationSchema(new CustomFlinkKafkaSimpleStringKeySchema())\n                .setPartitioner(new FlinkKafkaPartitioner<String>() {\n                    @Override\n                    public int partition(String record, byte[] key, byte[] value, String topic, int[] partitions) {\n                        String keyString = new String(key, StandardCharsets.UTF_8);\n                        int keyHashCode =  keyString.hashCode();\n                        //\u786e\u4fdd\u6307\u5b9a\u7684\u5206\u533a\u4e0d\u4e3a\u8d1f\u6570\n                        int resHashNum=keyHashCode&0x7FFFFFFF;\n                        return resHashNum%partitions.length;\n                    }\n                })\n                .build();\n    }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'CustomFlinkKafkaSimpleStringKeySchema\npublic byte[] serialize(String element) {\n    JSONObject jsonObject = JSONObject.parseObject(element);\n    String data_key = jsonObject.getString("data_key");\n    return data_key.getBytes();\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'CustomFlinkKafkaSimpleStringValueSchema\npublic byte[] serialize(String element) {\n    JSONObject jsonObject = JSONObject.parseObject(element);\n    jsonObject.remove("data_key");\n    jsonObject.remove("data_target_topic");\n    element=jsonObject.toJSONString();\n    return element.getBytes(this.charset);\n}\n')),(0,r.kt)("p",null,"\u7ecf\u8fc7\u5904\u7406\u6700\u540e\u5f97\u5230Flink CDC\u6700\u539f\u59cb\u7684changelog\u6570\u636e\uff0c\u5e76\u4e14\u4fdd\u8bc1\u4e86",(0,r.kt)("strong",{parentName:"p"},"\u6570\u636e\u7684\u6574\u5e93\u540c\u6b65\uff0c\u4e0d\u4e22\u4e0d\u91cd\u590d\uff0c\u52a8\u6001\u52a0\u8868\uff0c\u5355\u884c\u6570\u636e\u5728Kafka\u4e0d\u4e71\u5e8f(\u5355\u884c\u6570\u636e\u90fd\u6839\u636e\u81ea\u5df1\u7684\u4e3b\u952e\u90fd\u53d1\u9001\u5230\u4e00\u4e2a\u5206\u533a)"),"\u7684\u9700\u6c42\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "op": "r",\n    "after": {\n        "test1": "\u6570\u636e"\n        "id": 89\n    },\n    "source": {\n        "server_id": 0,\n        "version": "1.3",\n        "file": "",\n        "connector": "mysql",\n        "pos": 0,\n        "name": "mysql_binlog_source",\n        "row": 0,\n        "ts_ms": 0,\n        "snapshot": "false",\n        "db": "\u5e93\u540d",\n        "table": "\u8868\u540d"\n    },\n    "ts_ms": 1691472223325\n}\n')))}u.isMDXComponent=!0},79250:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/shizhang1-7c427d47ba0073446a616fdfdefb8852.png"}}]);