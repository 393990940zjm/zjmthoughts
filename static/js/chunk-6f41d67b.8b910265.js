(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f41d67b"],{"01f6":function(t,e,n){"use strict";var a=n("4ce3"),r=n.n(a);r.a},"0fc2":function(t,e,n){},"175c":function(t,e,n){"use strict";var a=n("8aee"),r=n.n(a);r.a},"1ddf":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",[n("div",{staticClass:"main"},[n("el-header"),n("el-main",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[n("div",{staticClass:"searchDiv"},[n("el-select",{attrs:{placeholder:"请选择",size:"mini",width:"80"},on:{change:function(e){return t.getValue3(e)}},model:{value:t.searchData.statisticsType,callback:function(e){t.$set(t.searchData,"statisticsType",e)},expression:"searchData.statisticsType"}},t._l(t.typeOption,(function(t,e){return n("el-option",{key:e,attrs:{label:t.name,value:t.value}})})),1),n("span",[t._v("：")]),t._l(t.searchSelectList,(function(e,a){return n("div",{key:a,staticClass:"searchSelect"},[0===t.searchData.statisticsType?n("div",[0!==a?n("span",{staticClass:"dbtext"},[t._v("对比")]):t._e(),n("el-select",{attrs:{placeholder:"请选择",size:"mini"},on:{change:function(e){return t.getValue2(e,a)}},model:{value:e.value,callback:function(n){t.$set(e,"value",n)},expression:"item.value"}},t._l(t.nowOption,(function(t,e){return n("el-option",{key:e,attrs:{label:t.name,value:t.id}})})),1)],1):t._e(),1===t.searchData.statisticsType||2===t.searchData.statisticsType?n("div",[0!==a?n("span",{staticClass:"dbtext"},[t._v("对比")]):t._e(),n("el-cascader",{staticClass:"formItem_full",attrs:{size:"mini",options:t.nowOption,props:{checkStrictly:!0},"show-all-levels":!1},model:{value:e.value,callback:function(n){t.$set(e,"value",n)},expression:"item.value"}})],1):t._e()])})),n("div",{staticClass:"searchSelect date"},[n("span",[t._v("日期：")]),n("el-select",{attrs:{placeholder:"请选择",size:"mini"},model:{value:t.searchData.dateType,callback:function(e){t.$set(t.searchData,"dateType",e)},expression:"searchData.dateType"}},[n("el-option",{attrs:{label:"月",value:"month"}}),n("el-option",{attrs:{label:"年",value:"year"}})],1),n("span",[t._v("：")]),n("el-date-picker",{attrs:{size:"mini","value-format":"yyyy-MM-dd",type:t.searchData.dateType},model:{value:t.searchData.dateVal,callback:function(e){t.$set(t.searchData,"dateVal",e)},expression:"searchData.dateVal"}})],1),n("div",{staticClass:"standardVal"},[n("span",[t._v("稼动率标准值：")]),n("el-input",{attrs:{size:"mini",type:"number"},model:{value:t.searchData.standardVal,callback:function(e){t.$set(t.searchData,"standardVal",e)},expression:"searchData.standardVal"}})],1),n("el-button",{attrs:{size:"mini"},on:{click:t.search}},[t._v(t._s(t.BTN_TEXT.SEARCH))]),n("el-button",{attrs:{size:"mini"},on:{click:t.reset}},[t._v(t._s(t.BTN_TEXT.RESET))])],2),t.currentName?n("h2",{staticClass:"chartTitle"},[t._v(t._s(t.currentName)+"稼动率趋势图")]):t._e(),t.allData.length>0?n("div",{staticClass:"chart_wra"},[n("chart-module",{attrs:{param:t.searchData,chartData:t.allData}})],1):t._e(),t.allData.length>0?n("detail-table",{attrs:{param:t.searchData,currentName:t.currentName,tableInfo:t.allData}}):t._e()],1)],1)])},r=[],i=(n("7db0"),n("d81d"),n("b0c0"),n("ac1f"),n("841c"),n("96cf"),n("1da1")),c=n("85a8"),o=n("5861"),s=n("582a"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table_wra"},[n("el-button",{attrs:{size:"mini"},on:{click:t.exportTable}},[t._v("导出")]),n("vxe-grid",{ref:"xGrid",staticClass:"reverse-table",attrs:{border:"","show-overflow":"","show-header-overflow":"tooltip","highlight-hover-row":"","show-header":!0,columns:t.tableColumn,data:t.tableData,"cell-class-name":"grid-cell"}})],1)},l=[],d=(n("99af"),n("4160"),n("b680"),n("159b"),n("2909")),p=n("3fa5"),f=n("6464"),h=n("afb1"),v={components:{},props:{tableInfo:{type:Array,default:function(){return[]}},param:{type:Object},currentName:{type:String,default:""}},data:function(){return{BTN_TEXT:s["c"],deviceName:"",lineOptions:[],groupOptions:[],tableLoadings:!0,tableData:[],tableColumn:[{field:"title",title:"",visible:!0,width:"140",align:"center",fixed:"left"}],pickerOptions:{disabledDate:function(t){return t.getTime()>Date.now()}}}},computed:{},watch:{},created:function(){console.log(this.param);var t=this.param,e=t.dateType,n=t.dateVal,a="month"===e?"日":"月";this.tableColumn[0].title="month"===e?(null===n||void 0===n?void 0:n.substring(5,7))+"月":(null===n||void 0===n?void 0:n.substring(0,4))+"年";var r=this.tableInfo.map((function(t){return{field:t.index,title:t.index+a,width:"100",align:"center"}}));this.tableColumn=[].concat(Object(d["a"])(this.tableColumn),Object(d["a"])(r));var i=[{title:this.currentName}];this.tableInfo.forEach((function(t){i[0][t.index]=t.utilization.toFixed(2)+"%"})),this.tableData=i,console.log(this.tableColumn)},methods:{findList:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,a,r,i,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={conditionJson1:[{column:"startTime",value:t.startTime},{column:"endTime",value:t.endTime}]},0===t.typeValue?n.conditionJson1.push({column:"groupId",operator:1,ptype:"int",type:"eq",value:t.modelValue}):n.conditionJson1.push({column:"deviceCode",operator:1,ptype:"string",type:"eq",value:t.modelValue}),e.prev=2,e.next=5,Object(h["c"])({},n);case 5:if(a=e.sent,a.code===s["M"].OPERATION_SUCCESS){for(t.tableDatas=a.rows,r=a.rows,i=[{title:"故障时间"},{title:"故障次数"},{title:"运行时间"},{title:"MTBF"},{title:"MTTR"}],c=0;c<r.length;c++)t.tableColumns.push({field:r[c].deviceCode+"task",title:r[c].deviceName,visible:!0,minWidth:"200",align:"center"}),i[0][r[c].deviceCode+"task"]=t.timeStampSeconds(r[c].warnAllTime),i[1][r[c].deviceCode+"task"]=r[c].warnAllCount+" 次",i[2][r[c].deviceCode+"task"]=t.timeStampSeconds(r[c].runTime),i[3][r[c].deviceCode+"task"]=t.timeStampSeconds(r[c].mtbf),i[4][r[c].deviceCode+"task"]=t.timeStampSeconds(r[c].mttr);t.tableDatas=i}else Object(p["c"])(a.message);e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](2),Object(f["a"])(s["N"].NOTIFY,e.t0);case 12:return e.prev=12,e.finish(12);case 14:case"end":return e.stop()}}),e,null,[[2,9,12,14]])})))()},exportTable:function(){this.$refs.xGrid.exportData({filename:"设备稼动率"})},timeStampSeconds:function(t){var e=parseInt(t/60/60/24),n=parseInt(t/60/60%24),a=parseInt(t/60%60),r=parseInt(t%60);return t="",e>0&&(t=e+"天"),n>0&&(t+=n+"小时"),a>0&&(t+=parseFloat(a)+"分钟"),r>0&&(t+=parseFloat(r)+"秒"),t}}},m=v,b=m,g=(n("175c"),n("2877")),w=Object(g["a"])(b,u,l,!1,null,"381f2738",null),y=w.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"echartGantt",staticClass:"device-gantt"})},x=[],D={props:{chartData:{type:Array,default:function(){return[]}},param:{type:Object}},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){var t=this.param,e=t.dateType,n=t.standardVal,a="month"===e?"日":"月",r=[],i=[],c=[];this.chartData.forEach((function(t){i.push(t.index+a),r.push(t.utilization.toFixed(2)),c.push(n)})),this.draw(i,r,c)},methods:{draw:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0;this.myChart=this.$echarts.init(this.$refs.echartGantt),this.myChart.setOption({tooltip:{trigger:"axis",formatter:function(t){var e=t[0].name;return t.forEach((function(t,n){e+="<br>".concat(t.marker).concat(t.seriesName,": ").concat(t.value,"%")})),e}},toolbox:{show:!0,feature:{saveAsImage:{show:!0}}},legend:{right:40},grid:{containLabel:!0,left:"3%",right:"5%"},dataZoom:[{type:"slider",filterMode:"weakFilter",top:"bottom"}],xAxis:[{type:"category",data:t,axisPointer:{type:"shadow"}}],yAxis:[{type:"value",name:"%",min:0}],series:[{name:"成型机",type:"line",yAxisIndex:0,symbolSize:5,itemStyle:{normal:{color:"#326FD5"}},label:{show:!0,position:"top"},data:e},{name:"稼动率标准线",type:"line",itemStyle:{normal:{color:"#8ECC4B"}},smooth:!1,symbolSize:.01,data:n}]})},timeStampSeconds:function(t){var e=parseInt(t/60/60/24),n=parseInt(t/60/60%24),a=parseInt(t/60%60),r=parseInt(t%60);return t="",e>0&&(t=e+"天"),n>0&&(t+=n+"小时"),a>0&&(t+=parseFloat(a)+"分钟"),r>0&&(t+=parseFloat(r)+"秒"),t}}},T=D,k=T,j=(n("e894"),Object(g["a"])(k,O,x,!1,null,"3ebe0d40",null)),C=j.exports,S=n("eec9"),_=n("f82c"),E=n("e072"),N=n("e7dd"),A={name:"EquipmentMonitoring",data:function(){return{BTN_TEXT:s["c"],searchData:{dateVal:this.$utils.toDateString(new Date,"yyyy-MM-dd"),statisticsType:1,dateType:"month",standardVal:"90"},typeOption:[{name:"车间",value:2},{name:"产线",value:1},{name:"设备",value:0}],nowOption:[],nowOptionx:[],searchSelectList:[{value:[4]}],currentName:"",activeN:0,selectTabs:[{type:0,name:"图表"},{type:1,name:"列表"}],loading:!1,allData:[]}},created:function(){this.getGroupTree(),this.search()},methods:{toggleN:function(t){this.activeN=t,this.search()},getValue3:function(t){console.log(t),this.searchSelectList=[{value:null}],this.nowOption=[],0===t?this.getDev():this.getGroupTree()},getValue:function(t,e){this.searchSelectList[e].value=t[t.length-1];var n={};n=this.nowOptionx.find((function(e){return e.id===t[t.length-1]})),this.currentName=n.name},getValue2:function(t,e){this.searchSelectList[e].value=t+"";var n={};n=this.nowOption.find((function(e){return e.id===t})),this.currentName=n.deviceName},search:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,a,r,i,c,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.loading=!0,t.allData=[],a=t.searchData,r=a.dateType,i=a.dateVal,c=a.statisticsType,e.next=6,Object(N["e"])({},{shiftStart:"",shiftEnd:"",startDate:"month"===r?i.substring(0,8)+"01":i.substring(0,5)+"01-01",endDate:"month"===r?i.substring(0,8)+"31":i.substring(0,5)+"12-31",statisticsType:c,statisticsValues:t.searchSelectList.map((function(t){return t.value[t.value.length-1]}))});case 6:o=e.sent,t.allData=o.rows[0]||[],t.currentName=null===(n=t.nowOptionx.find((function(e){var n=t.searchSelectList[0].value;return e.id===n[n.length-1]})))||void 0===n?void 0:n.name,t.loading=!1,e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](0),t.loading=!1;case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))()},reset:function(){this.searchData.statisticsType=1,this.nowOption=[],this.searchSelectList=[{value:""}],this.getGroupTree()},getGroupTree:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(_["c"])();case 3:return n=e.sent,n.code===s["M"].OPERATION_SUCCESS?t.nowOption=n.rows:Object(p["c"])(n.message),e.next=7,Object(E["R"])();case 7:a=e.sent,a.code===s["M"].OPERATION_SUCCESS?(t.nowOptionx=a.rows,t.currentName=null===(r=t.nowOptionx.find((function(e){var n=t.searchSelectList[0].value;return e.id===n[n.length-1]})))||void 0===r?void 0:r.name):Object(p["c"])(a.message),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),Object(f["a"])(s["N"].NOTIFY,e.t0);case 14:return e.prev=14,e.finish(14);case 16:case"end":return e.stop()}}),e,null,[[0,11,14,16]])})))()},getDev:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(E["P"])({current:1,size:99999999},{});case 3:n=e.sent,n.code===s["M"].OPERATION_SUCCESS?t.nowOption=n.rows.map((function(t){return t.id=t.deviceCode,t.name=t.deviceName,t})):Object(p["c"])(n.message),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),Object(f["a"])(s["N"].NOTIFY,e.t0);case 10:return e.prev=10,e.finish(10);case 12:case"end":return e.stop()}}),e,null,[[0,7,10,12]])})))()}},components:{SearchBox:S["a"],HeaderTitle:c["a"],HeadOperationItem:o["a"],detailTable:y,chartModule:C}},I=A,R=I,V=(n("66d6"),Object(g["a"])(R,a,r,!1,null,"7861d5f1",null));e["default"]=V.exports},"4ce3":function(t,e,n){},5861:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"operation-item",on:{click:t.onOprationItem}},[n("div",{staticClass:"operation-icon"},[t._t("operation-icon")],2),n("div",{staticClass:"operation-span"},[t._t("operation-name")],2)])},r=[],i=(n("b0c0"),{props:{name:{type:String,required:!0}},methods:{onOprationItem:function(){this.$emit("onOprationItem",this.name)}}}),c=i,o=(n("01f6"),n("2877")),s=Object(o["a"])(c,a,r,!1,null,"0cfe45f8",null);e["a"]=s.exports},"66d6":function(t,e,n){"use strict";var a=n("0fc2"),r=n.n(a);r.a},"8aee":function(t,e,n){},afb1:function(t,e,n){"use strict";n.d(e,"e",(function(){return r})),n.d(e,"g",(function(){return i})),n.d(e,"h",(function(){return c})),n.d(e,"a",(function(){return o})),n.d(e,"d",(function(){return s})),n.d(e,"f",(function(){return u})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return d})),n.d(e,"i",(function(){return p}));var a=n("b775"),r=function(t,e){return Object(a["k"])("deviceException/getDeviceWarnStatisticsAnalyze.action?",t,e)},i=function(t,e){return Object(a["k"])("deviceException/getParameterWarnStatisticsAnalyze.action?",t,e)},c=function(t,e){return Object(a["k"])("deviceException/getRealWarnDeviceCount.action?",t,e)},o=function(t,e){return Object(a["k"])("deviceException/getAllRealDeviceWarn.action?",t,e)},s=function(t,e){return Object(a["k"])("deviceException/getDeviceHistoryWarn.action?",t,e)},u=function(t,e){return Object(a["k"])("deviceException/getParameterHistoryWarn.action?",t,e)},l=function(t,e){return Object(a["k"])("deviceException/getAllRealParameterWarn.action?",t,e)},d=function(t,e){return Object(a["k"])("deviceException/getDeviceExceptionComparedAnalyze.action?",t,e)},p=function(t,e){return Object(a["k"])("deviceException/getDeviceExceptionComparedAnalyzeNew.action?",t,e)}},bbd9:function(t,e,n){},e7dd:function(t,e,n){"use strict";n.d(e,"e",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return c})),n.d(e,"f",(function(){return o})),n.d(e,"h",(function(){return s})),n.d(e,"d",(function(){return u})),n.d(e,"c",(function(){return l})),n.d(e,"i",(function(){return d})),n.d(e,"j",(function(){return p})),n.d(e,"g",(function(){return f}));var a=n("b775"),r=function(t,e){return Object(a["k"])("existFunctionUpdate/listAndonMttRMtbF.action?",t,e)},i=function(t,e){return Object(a["k"])("deviceException/getDeviceExceptionComparedAnalyzeNew.action?",t,e)},c=function(t,e){return Object(a["k"])("existFunctionUpdate/getAndonExceptionWarnReport.action?",t,e)},o=function(t,e){return Object(a["k"])("existFunctionUpdate/listDeviceCallDetail.action?",t,e)},s=function(t,e){return Object(a["k"])("existFunctionUpdate/listRepairTimeAnalysis.action?",t,e)},u=function(t,e){return Object(a["d"])("realUserWork/getWorkDeviceOfUser.action?",t,e)},l=function(t,e){return Object(a["d"])("realUserWork/getDeviceWorkState.action?",t,e)},d=function(t,e){return Object(a["d"])("realUserWork/startWork.action?",t,e)},p=function(t,e){return Object(a["d"])("realUserWork/stopWork.action?",t,e)},f=function(t,e){return Object(a["k"])("realUserWork/listRealUserWorkRecord.action?",t,e)}},e894:function(t,e,n){"use strict";var a=n("bbd9"),r=n.n(a);r.a},f82c:function(t,e,n){"use strict";n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return o})),n.d(e,"m",(function(){return s})),n.d(e,"c",(function(){return u})),n.d(e,"j",(function(){return l})),n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return p})),n.d(e,"k",(function(){return f})),n.d(e,"l",(function(){return h})),n.d(e,"f",(function(){return v})),n.d(e,"g",(function(){return m})),n.d(e,"h",(function(){return b})),n.d(e,"i",(function(){return g}));n("7db0"),n("a15b"),n("d81d"),n("b0c0"),n("d3b7");var a=n("b85c"),r=n("53ca"),i=n("b775");function c(){return new Promise((function(t,e){i["i"].post("deviceGroup/getAllGroupAndDevice.action").then((function(e){for(var n=0;n<e.data.rows.length;n++)e.data.rows[n].code&&(e.data.rows[n].id=e.data.rows[n].code);e.data.rows=d(e.data.rows),t(e.data)})).catch((function(t){e(t.data)}))}))}function o(){return new Promise((function(t,e){i["i"].post("deviceWorkshopType/getTree.action").then((function(e){e.data.rows=d(e.data.rows),t(e.data)})).catch((function(t){e(t.data)}))}))}function s(){return new Promise((function(t,e){i["i"].post("deviceGroup/getListGroupAndProductionLine.action").then((function(e){e.data.rows=d(e.data.rows),t(e.data)})).catch((function(t){e(t.data)}))}))}function u(){return new Promise((function(t,e){i["i"].post("deviceGroup/getTree.action?").then((function(e){e.data.rows=d(e.data.rows),t(e.data)})).catch((function(t){e(t.data)}))}))}function l(){return new Promise((function(t,e){i["i"].post("materialsType/getTree.action?").then((function(e){e.data.rows?e.data.rows=d(e.data.rows):e.data.rows=[],t(e.data)})).catch((function(t){e(t.data)}))}))}function d(t){var e=t;for(var n in e)e[n].value=e[n].id,e[n].label=e[n].name;for(var a=[],r={},i=0,c=e.length;i<c;i++)r[e[i].id]=e[i];for(i=0,c=e.length;i<c;i++){var o=r[e[i].pId];o?(o.children||(o.children=[]),o.children.push(e[i])):a.push(e[i])}return a}function p(t){var e=Array.isArray(t)?[]:{};if(t&&"object"===Object(r["a"])(t))for(var n in t)t.hasOwnProperty(n)&&(t[n]&&"object"===Object(r["a"])(t[n])?e[n]=this.deepClone(t[n]):e[n]=t[n]);return e}function f(t,e){var n=[];if(Array.isArray(t)&&Array.isArray(e)){if(t.length>0){var r,i=Object(a["a"])(t);try{var c=function(){var t=r.value,a=e.find((function(e){return e.field===t.field}));if(a){var i=Object.assign({},a,{minWidth:t.width,visible:t.visible,required:t.required});n.push(i)}};for(i.s();!(r=i.n()).done;)c()}catch(d){i.e(d)}finally{i.f()}e[1].type&&"checkbox"===e[1].type&&n.unshift(e[1]),e[0].type&&"radio"===e[0].type&&n.unshift(e[0]),e[0].type&&"checkbox"===e[0].type&&n.unshift(e[0]),console.log("7788",t,e,n);for(var o=0;o<e.length;o++)if(e[o].eType){for(var s=0,u=0;u<t.length;u++)e[o].field===t[u].field&&(s+=1);0===s&&n.push(e[o])}var l=e.length;return e[l-1].title&&"操作"===e[l-1].title&&n.push(e[l-1]),console.log("9999",n),n}return e}return[]}function h(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a={conditionJson1:t,operatorGroup:e,conditionJson2:n};return a}function v(t,e){return e.map((function(e,n){return t.map((function(t){return null==e[t]||""===e[t]?"-":e[t]}))}))}function m(t){var e=new Date(t),n=e.getFullYear(),a=e.getMonth()+1,r=e.getDate();return a=a<10?"0"+a:a,r=r<10?"0"+r:r,[n,a,r].join("-")}function b(t){var e=new Date(t),n=e.getFullYear(),a=e.getMonth()+1,r=e.getDate();return a=a<10?"0"+a:a,r=r<10?"0"+r:r,[n,a,r].join("-")+" 00:00:00"}function g(t){var e=new Date(t),n=e.getFullYear(),a=e.getMonth()+1,r=e.getDate();return a=a<10?"0"+a:a,r=r<10?"0"+r:r,[n,a,r].join("-")+" 23:59:59"}}}]);
//# sourceMappingURL=chunk-6f41d67b.8b910265.js.map