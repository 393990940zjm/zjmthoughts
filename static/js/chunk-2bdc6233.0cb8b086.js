(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2bdc6233"],{"04ea":function(e,t,n){},5355:function(e,t,n){},5995:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("p",{staticClass:"ta-c title"},[e._v(e._s(e.titleName))]),n("span",{staticClass:"time"},[e._v(e._s(e.time))])])},r=[],i=n("cf45"),c={name:"Header",props:{titleName:{type:String,default:""}},data:function(){return{time:"",timer:null}},created:function(){var e=this;this.timer=setInterval((function(){e.time=Object(i["f"])(new Date,"{y}年{m}月{d}日 {h}:{i}:{s}")}),1e3)},destroyed:function(){this.timer&&clearInterval(this.timer)}},o=c,u=(n("a216"),n("2877")),s=Object(u["a"])(o,a,r,!1,null,"a481fb9c",null);t["a"]=s.exports},7598:function(e,t,n){"use strict";n.d(t,"f",(function(){return r})),n.d(t,"g",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"e",(function(){return o})),n.d(t,"d",(function(){return u})),n.d(t,"i",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"h",(function(){return d})),n.d(t,"s",(function(){return p})),n.d(t,"y",(function(){return f})),n.d(t,"x",(function(){return v})),n.d(t,"w",(function(){return g})),n.d(t,"H",(function(){return h})),n.d(t,"I",(function(){return b})),n.d(t,"j",(function(){return y})),n.d(t,"m",(function(){return m})),n.d(t,"k",(function(){return k})),n.d(t,"l",(function(){return T})),n.d(t,"o",(function(){return O})),n.d(t,"J",(function(){return D})),n.d(t,"t",(function(){return B})),n.d(t,"E",(function(){return j})),n.d(t,"A",(function(){return R})),n.d(t,"F",(function(){return C})),n.d(t,"z",(function(){return w})),n.d(t,"p",(function(){return _})),n.d(t,"n",(function(){return x})),n.d(t,"v",(function(){return E})),n.d(t,"u",(function(){return S})),n.d(t,"a",(function(){return L})),n.d(t,"C",(function(){return P})),n.d(t,"r",(function(){return N})),n.d(t,"q",(function(){return $})),n.d(t,"G",(function(){return M})),n.d(t,"D",(function(){return I})),n.d(t,"B",(function(){return A}));var a=n("b775"),r=function(e,t){return Object(a["k"])("open-api/TvBoard/deviceRealLive/getDeviceRealState.action?",e,t)},i=function(e,t){return Object(a["k"])("open-api/TvBoard/deviceRealLive/getDeviceStateReportStatistics.action?",e,t)},c=function(e,t){return Object(a["k"])("open-api/TvBoard/deviceManager/getCheckCount.action?",e,t)},o=function(e,t){return Object(a["k"])("open-api/TvBoard/deviceManager/getRepairTaskCount.action?",e,t)},u=function(e,t){return Object(a["k"])("open-api/TvBoard/deviceManager/getMaintainTaskCount.action?",e,t)},s=function(e,t){return Object(a["k"])("open-api/TvBoard/deviceReport/getDeviceDayUtilization.action?",e,t)},l=function(e,t){return Object(a["k"])("open-api/TvBoard/deviceEarlyWarning/getDeviceWarnRecord.action?",e,t)},d=function(e,t){return Object(a["k"])("open-api/TvBoard/deviceRealLive/getPageByDevice.action?",e,t)},p=function(e,t){return Object(a["k"])("open-api/TvBoard/deviceRealLive/getDeviceMonitorReport.action?",e,t)},f=function(e,t){return Object(a["k"])("open-api/TvBoard/energyReport/getGasHoursUseReportBoard.action?",e,t)},v=function(e,t){return Object(a["k"])("open-api/TvBoard/energyReport/getEnergyTodayUse.action?",e,t)},g=function(e,t){return Object(a["k"])("open-api/TvBoard/energyReport/getEnergyTodayAndWeek.action?",e,t)},h=function(e,t){return Object(a["k"])("open-api/TvBoard/energyReport/getTodayAndYesterdayElectricityRecord.action?",e,t)},b=function(e,t){return Object(a["k"])("open-api/TvBoard/energyReport/getTopTenElectricityDevices.action?",e,t)},y=function(e,t){return Object(a["k"])("open-api/TvBoard/energyReport/getElectricityEnergyReport.action?",e,t)},m=function(e,t){return Object(a["k"])("open-api/TvBoard/energyReport/getWaterEnergyReport.action?",e,t)},k=function(e,t){return Object(a["k"])("open-api/TvBoard/energyReport/getGasEnergyReport.action?",e,t)},T=function(e,t){return Object(a["k"])("open-api/TvBoard/energyReport/getRecentDayEnergyRecord.action?",e,t)},O=function(e,t){return Object(a["k"])("realUserWork/getAndonKanbanOfRiSheng.action?",e,t)},D=function(e,t,n){return Object(a["k"])("existFunctionUpdate/listDeviceExceptionCount.action",e,t,n)},B=function(e,t,n){return Object(a["k"])("open-api/TvBoard/deviceReport/getDeviceStateReportStatistics.action?",e,t,n)},j=function(e,t,n){return Object(a["k"])("open-api/TvBoard/deviceManager/getRepairTask.action?",e,t,n)},R=function(e,t,n){return Object(a["k"])("open-api/TvBoard/deviceManager/getMaintainTask.action?",e,t,n)},C=function(e,t,n){return Object(a["d"])("open-api/getTime.action?",e,t,n)},w=function(e,t,n){return Object(a["k"])("open-api/getGroupTree.action?",e,t,n)},_=function(e,t,n){return Object(a["k"])("open-api/TvBoard/deviceManager/getConfigurationByEnum.action?",e,t,n)},x=function(e,t,n){return Object(a["k"])("open-api/TvBoard/device/getAllGroupAndDevice.action?",e,t,n)},E=function(e,t,n){return Object(a["k"])("open-api/TvBoard/deviceRealLive/getDeviceTimeFluctuationRate.action?",e,t,n)},S=function(e,t,n){return Object(a["k"])("open-api/TvBoard/deviceRealLive/getDeviceTimeCapacityAndEnergyEfficiency.action?",e,t,n)},L=function(e,t){return Object(a["k"])("open-api/TvBoard/deviceRealLive/getOneDayDetailStateClockInfo.action?",e,t)},P=function(e,t){return Object(a["k"])("open-api/TvBoard/deviceReport/getOneDayDetailStateClock.action?",e,t)},N=function(e,t){return Object(a["k"])("open-api/TvBoard/deviceRealLive/getDeviceInfo.action?",e,t)},$=function(e,t){return Object(a["k"])("open-api/TvBoard/deviceRealLive/getDeviceHoursEffTrend.action?",e,t)},M=function(e,t){return Object(a["k"])("open-api/TvBoard/deviceRealLive/getTimeDayTypeProduction.action?",e,t)},I=function(e,t){return Object(a["k"])("open-api/TvBoard/deviceReport/getQueryDeviceStateTimeUtilization.action?",e,t)},A=function(e,t){return Object(a["k"])("open-api/TvBoard/deviceRealLive/getManyDeviceTimeFluctuationRate.action?",e,t)}},"78fe":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cardModule",style:{height:e.height,width:e.width}},[n("div",{class:["wrapper",e.cardBg]},[n("div",{class:["title",e.titleBg],style:{width:e.titleWidth}},[e._v(e._s(e.title))]),n("div",{staticClass:"module_content"},[e.isExport?n("div",{staticClass:"export_btn",on:{click:e.exportExcel}},[n("i",{staticClass:"icon-export",attrs:{slot:"operation-icon"},slot:"operation-icon"}),n("span",[e._v("导出")])]):e._e(),e._t("default")],2),n("div",{staticClass:"bottonLine"})])])},r=[],i={name:"CardModule",props:{title:String,width:{width:String,default:"100%"},height:{type:String,default:"66.66%"},titleWidth:{type:String,default:"60%"},cardBg:{type:String,default:"cardBg_small"},titleBg:{type:String,default:"cardTitle_small"},isExport:{type:Boolean,default:!0}},computed:{},data:function(){return{}},methods:{exportExcel:function(){this.$emit("exportExcel")}}},c=i,o=(n("e960"),n("2877")),u=Object(o["a"])(c,a,r,!1,null,"d23eb726",null);t["a"]=u.exports},"7bff":function(e,t,n){},a216:function(e,t,n){"use strict";var a=n("04ea"),r=n.n(a);r.a},cfb8:function(e,t,n){"use strict";var a=n("5355"),r=n.n(a);r.a},e960:function(e,t,n){"use strict";var a=n("7bff"),r=n.n(a);r.a},e9c43:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search_content"},[e.isShowSelectPage?n("el-select",{staticClass:"commonSelect m-r10",attrs:{placeholder:"请选择报表"},on:{change:e.selectPage},model:{value:e.pagePath,callback:function(t){e.pagePath=t},expression:"pagePath"}},e._l(e.pageList,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1):e._e(),e._l(e.searchOptions,(function(t){return n("div",{key:t.key,staticClass:"item_condition"},[t.name&&"cascader"===t.type?n("span",[e._v("车间: ")]):e._e(),"cascader"===t.type?n("el-cascader",{ref:"demoCascader",refInFor:!0,staticClass:"formItem_full",attrs:{options:t.options,"show-all-levels":!1,filterable:"",props:{checkStrictly:!0,expandTrigger:"hover"}},on:{change:e.changeCascader},model:{value:e.searchData[t.key],callback:function(n){e.$set(e.searchData,t.key,n)},expression:"searchData[item.key]"}}):e._e(),"select"===t.type?n("el-select",{staticClass:"commonSelect",attrs:{placeholder:"请选择"},on:{change:function(n){return e.transmitName(n,t.options)}},model:{value:e.searchData[t.key],callback:function(n){e.$set(e.searchData,t.key,n)},expression:"searchData[item.key]"}},e._l(t.options,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1):e._e(),t.name&&"daterange"===t.type?n("span",[e._v("时间: ")]):e._e(),"daterange"===t.type?n("el-select",{staticClass:"timeType",attrs:{placeholder:"请选择"},model:{value:e.searchData["timeKeyEnum"],callback:function(t){e.$set(e.searchData,"timeKeyEnum",t)},expression:"searchData['timeKeyEnum']"}},e._l(t.options,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1):e._e(),"daterange"===t.type?n("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.searchData[t.key],callback:function(n){e.$set(e.searchData,t.key,n)},expression:"searchData[item.key]"}}):e._e()],1)})),n("el-button",{attrs:{type:"primary"},on:{click:e.search}},[e._v("查询")]),e.isShowSelectPage?n("el-button",{staticClass:"backBtn",on:{click:e.back}},[e._v("返回")]):e._e()],2)},r=[],i=(n("4de4"),n("a9e3"),n("d3b7"),n("ac1f"),n("3ca3"),n("5319"),n("841c"),n("ddb0"),n("2b3d"),n("96cf"),n("1da1")),c=n("f82c"),o=n("7598"),u=n("99f6"),s={name:"searchBar",props:{searchData:{type:Object,default:function(){return{}}},searchOptions:{type:Array,default:function(){return[]}},groupSearchType:{type:Number,default:1}},data:function(){return{groupValue:"",timeType:"天",year:"",day:"",groupOptions:[],deviceCode:"",deviceName:"",pagePath:"",isShowSelectPage:!1,kanbanConfig:{key:""},pageList:[{label:"OEE推移图",value:"/xwreport/oee"},{label:"产能推移图",value:"/xwreport/capacity"},{label:"当机推移图",value:"/xwreport/currentCapacity"},{label:"DT柏拉图及明细",value:"/xwreport/DTplato"},{label:"良率报表",value:"/xwreport/yieldReport"},{label:"DT改善决策及水平展开",value:"/xwreport/troubleImprove"},{label:"OEE报表",value:"/xwreport/currentDetail"}]}},created:function(){this.pathname=location.pathname;var e=new URLSearchParams(location.search);this.isShowSelectPage=e.has("deviceCode"),this.deviceCode=e.get("deviceCode"),this.deviceName=e.get("deviceName");var t=e.get("cid");t&&(this.kanbanConfig=u["m"][t])},methods:{back:function(){this.$router.back()},selectPage:function(e){this.$router.replace({path:e,query:{deviceCode:this.deviceCode,deviceName:this.deviceName}})},transmitName:function(e,t){var n=t.filter((function(t){return t.value===e}))[0].label;this.searchData.deviceName=n,this.$emit("transmitName",n)},changeCascader:function(){var e=this.$refs.demoCascader[0].getCheckedNodes()[0].label;this.$refs.demoCascader[0].dropDownVisible=!1,this.searchData.deviceName=e,this.$emit("transmitYieldName",e)},search:function(){console.log(this.searchData),this.$emit("search")},getGroupLineDevice:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,n={isProductionDevice:1},t.next=4,Object(o["n"])(n,{secretKey:e.kanbanConfig.key});case 4:for(a=t.sent,r=0;r<a.rows.length;r++)a.rows[r].code&&(a.rows[r].id=a.rows[r].code);a.rows=Object(c["a"])(a.rows),e.groupOptions=a.rows,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},getParentsById:function(e,t){for(var n in e){if(e[n].value===t)return[e[n].value];if(e[n].children){var a=this.getParentsById(e[n].children,t);if(void 0!==a)return a.unshift(e[n].value),a}}}}},l=s,d=(n("cfb8"),n("2877")),p=Object(d["a"])(l,a,r,!1,null,"37b7094c",null);t["a"]=p.exports}}]);
//# sourceMappingURL=chunk-2bdc6233.0cb8b086.js.map