(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74915f50"],{"083d":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-main",[a("header-search",{attrs:{"show-primary-search":!0,cssType:"3"},on:{refreshTableData:e.refreshTableData}}),a("div",{staticClass:"searchDiv"},[a("div",[a("span",[e._v("年份:")]),a("el-date-picker",{attrs:{type:"year",size:"small","value-format":"yyyy",placeholder:"选择年"},model:{value:e.year,callback:function(t){e.year=t},expression:"year"}})],1),a("div",[a("span",[e._v("横坐标:")]),a("el-select",{attrs:{placeholder:"请选择",size:"mini"},model:{value:e.xModel,callback:function(t){e.xModel=t},expression:"xModel"}},e._l(e.xOptions,(function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:t}})})),1)],1),a("div",[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.search}},[e._v(e._s(e.BTN_TEXT.SEARCH))])],1)]),a("VXETable",{ref:"xGridM",attrs:{id:"table",height:e.$options.filters.getTableHeight(280),tableName:"",tableLoading:e.tableLoadings,tableDatas:e.tableDatas,tableColumns:e.tableColumns_new,tablePage:e.tablePages,"edit-config":{trigger:"click",mode:"row",showStatus:!0,icon:"fa fa-file-text-o"}},on:{onTablePageChange:e.onTablePageChanges}})],1)},n=[],r=(a("a15b"),a("a9e3"),a("2909")),s=(a("96cf"),a("1da1")),o=a("cf46"),l=a("3fa5"),c=a("6464"),u=a("582a"),d=a("1c31"),m=a("f82c"),h={components:{VXETable:o["a"]},data:function(){return{EQUIPMENT_MANAGEMENT_REPORT:u["u"],BTN_TEXT:u["c"],MAINTAINTASK_STATUS:u["G"],deviceName:"",groupOptions:[],lineOptions:[],lineId:"",groupId:"",optionsState:[],userOptions:[],searchData:[],userId:"",state:"",dateTime:"",year:"",editConfig:{trigger:"click",mode:"row",showStatus:!1},showTable:!0,tableLoadings:!0,outData:[],tableDatas:[],tableColumns_new:[],tableColumns:[{field:"factory",title:"工厂",visible:!0,width:"120",align:"center"},{field:"workshop",title:u["u"].WORKSHOP_NAME,visible:!0,width:"120",align:"center"},{field:"productionLine",title:"产线",visible:!0,width:"120",align:"center"},{field:"deviceName",title:u["u"].DEVICE_NAME,visible:!0,width:"120",align:"center"},{field:"devicePriCode",title:u["u"].EQUIPMENT_NO,visible:!0,width:"120",align:"center"},{field:"typeName",title:u["u"].DEVICE_TYPE,visible:!0,width:"120",align:"center"}],tablePages:{total:0,currentPage:1,pageSize:10,align:"right",pageSizes:[10,20,50,100,200,500],layouts:["Sizes","PrevJump","PrevPage","Number","NextPage","NextJump","FullJump","Total"],perfect:!0},pickerOptions:{shortcuts:[{text:u["c"].LAST_WEEK,onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:u["c"].LAST_MONTH,onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:u["c"].LAST_THREE_MONTHS,onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]},savedCustomColumns:[],isSettingCustomDialogShow:!1,xModel:0,xOptions:[{name:"设备维度",value:"DEVICE"},{name:"周期维度",value:"CYCLE"}],defaultOption:0,savedSearchCondition:[]}},watch:{groupId:function(e){this.getLine(),this.lineId=""}},computed:{},created:function(){var e=new Date;this.year=this.$utils.toDateString(e,"yyyy"),this.findList()},methods:{findList:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var i,n,s,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:for(t.defaultOption=t.xModel,i=t,t.tableColumns_new=[],t.tableColumns_new=Object(r["a"])(t.tableColumns),"CYCLE"===t.xOptions[t.xModel].value&&t.tableColumns_new.push({field:"y",title:"保养周期",visible:!0,width:"160",align:"center",slots:{default:function(e){var a=e.row;e.column;return t.showCycleData(a)}},formatter:function(e){e.cellValue;var t=e.row;return i.showCycleDataText(t)}}),n=0;n<12;n++)(function(e){t.tableColumns_new.push({field:e+1,title:e+1+"月",visible:!0,width:"160",align:"center",slots:{default:function(a){var i=a.row;a.column;return t.showMonthData(i,e+1)}},formatter:function(t){t.cellValue;var a=t.row;t.column;return i.showMonthDataText(a,e+1)}})})(n);return s={conditionJson1:[],operatorGroup:1,conditionJson2:[],current:t.tablePages.currentPage,size:t.tablePages.pageSize},t.savedSearchCondition.length>0&&(s=m["l"].apply(void 0,Object(r["a"])(t.savedSearchCondition))),a.prev=8,t.tableLoadings=!0,a.next=12,Object(d["a"])({startTime:t.year+"-01-01 14:34:00",endTime:t.year+"-12-30 14:34:00",deviceMaintainStatisticalAbscissaEnum:t.xOptions[t.xModel].value},s);case 12:o=a.sent,o.code===u["M"].OPERATION_SUCCESS?(console.log(o),t.tableDatas=o.rows,t.tablePages.total=o.total,t.tableLoadings=!1,"export"===e&&i.$refs.xGridM.exportDatax("保养统计报表",o.rows)):Object(l["c"])(o.message),a.next=19;break;case 16:a.prev=16,a.t0=a["catch"](8),Object(c["a"])(u["N"].NOTIFY,a.t0);case 19:return a.prev=19,a.finish(19);case 21:case"end":return a.stop()}}),a,null,[[8,16,19,21]])})))()},showCycleData:function(e){var t=this.$createElement,a=[],i=0;for(var n in e.cycleTimeMaintainTaskVo){var r=e.cycleTimeMaintainTaskVo[n];for(var s in r){var o=r[s];o.length>i&&(i=o.length)}a.push(t("div",[n]))}return a},showCycleDataText:function(e){var t=[],a=0;for(var i in e.cycleTimeMaintainTaskVo){var n=e.cycleTimeMaintainTaskVo[i];for(var r in n){var s=n[r];s.length>a&&(a=s.length)}t.push(i)}return t.join("\n")},showMonthData:function(e,t){var a=this.$createElement;if("DEVICE"===this.xOptions[this.defaultOption].value){var i=[];for(var n in e.timeMaintainTaskVo){var r=Number(n.substring(5,7));if(r===t)for(var s=e.timeMaintainTaskVo[n],o=0;o<s.length;o++){var l="";s[o].maintainUserNameList&&(l="-"+s[o].maintainUserNameList);var c="pTextClass"+s[o].maintainState;i.push(a("p",{class:c},["["+s[o].cycleName+"] "+s[o].maintainTime.substring(0,10)+l]))}}return i}if("CYCLE"===this.xOptions[this.defaultOption].value){i=[];for(var u in e.cycleTimeMaintainTaskVo){var d=e.cycleTimeMaintainTaskVo[u];for(var n in d){r=Number(n.substring(5,7));if(r===t)for(s=d[n],o=0;o<s.length;o++){l="";s[o].maintainUserNameList&&(l="-"+s[o].maintainUserNameList);c="pTextClass"+s[o].maintainState;i.push(a("p",{class:c},["["+s[o].cycleName+"] "+s[o].maintainTime.substring(0,10)+l]))}}}return i}},showMonthDataText:function(e,t){if("DEVICE"===this.xOptions[this.xModel].value){var a=[];for(var i in e.timeMaintainTaskVo){var n=Number(i.substring(5,7));if(n===t)for(var r=e.timeMaintainTaskVo[i],s=0;s<r.length;s++){var o="";r[s].maintainUserNameList&&(o="-"+r[s].maintainUserNameList),a.push("["+r[s].cycleName+"] "+r[s].maintainTime.substring(0,10)+o)}}return a.join("\n")}if("CYCLE"===this.xOptions[this.xModel].value){a=[];for(var l in e.cycleTimeMaintainTaskVo){var c=e.cycleTimeMaintainTaskVo[l];for(var i in c){n=Number(i.substring(5,7));if(n===t)for(r=c[i],s=0;s<r.length;s++){o="";r[s].maintainUserNameList&&(o="-"+r[s].maintainUserNameList),a.push("["+r[s].cycleName+"] "+r[s].maintainTime.substring(0,10)+o)}}}return a.join("\n")}},onTablePageChanges:function(e,t){this.tablePages.currentPage=e,this.tablePages.pageSize=t,this.findList()},refreshTableData:function(e){e&&(this.savedSearchCondition=Object(r["a"])(e),this.tablePages.currentPage=1),this.findList()},search:function(){this.onTablePageChanges(1,this.tablePages.pageSize)},reset:function(){this.deviceName="",this.userId="",this.deviceName="",this.state="",this.typeValue="",this.groupValue="",this.groupId="",this.lineId="",this.getLine();var e=new Date,t=new Date;t.setTime(t.getTime()-2592e6),this.dateTime=[this.$utils.toDateString(t,"yyyy-MM-dd"),this.$utils.toDateString(e,"yyyy-MM-dd")],this.onTablePageChanges(1,10)},exportTable:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.findList("export");case 1:case"end":return t.stop()}}),t)})))()}}},f=h,g=f,p=(a("72ba"),a("2877")),b=Object(p["a"])(g,i,n,!1,null,"a18f2fac",null);t["a"]=b.exports},"09fd":function(e,t,a){"use strict";var i=a("230a"),n=a.n(i);n.a},"0ecb":function(e,t,a){},"110e":function(e,t,a){},"1bb8":function(e,t,a){"use strict";var i=a("f356"),n=a.n(i);n.a},"1c31":function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return s})),a.d(t,"d",(function(){return o}));var i=a("b775"),n=function(e,t){return Object(i["k"])("deviceRepairReport/getRepairTaskReport.action?",e,t)},r=function(e,t){return Object(i["k"])("deviceMaintainReport/getMaintainTaskReport.action?",e,t)},s=function(e,t){return Object(i["k"])("deviceMaintainReport/getDeviceMaintainTaskFinishReport.action?",e,t)},o=function(e,t){return Object(i["k"])("deviceMaintainReport/getMaintainTaskPlanReport.action?",e,t)}},"230a":function(e,t,a){},"250c":function(e,t,a){},"37f0":function(e,t,a){"use strict";var i=a("0ecb"),n=a.n(i);n.a},3835:function(e,t,a){"use strict";function i(e){if(Array.isArray(e))return e}a.d(t,"a",(function(){return o}));a("a4d3"),a("e01a"),a("d28b"),a("e260"),a("d3b7"),a("3ca3"),a("ddb0");function n(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],i=!0,n=!1,r=void 0;try{for(var s,o=e[Symbol.iterator]();!(i=(s=o.next()).done);i=!0)if(a.push(s.value),t&&a.length===t)break}catch(l){n=!0,r=l}finally{try{i||null==o["return"]||o["return"]()}finally{if(n)throw r}}return a}}var r=a("06c5");function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){return i(e)||n(e,t)||Object(r["a"])(e,t)||s()}},"4fad":function(e,t,a){var i=a("23e7"),n=a("6f53").entries;i({target:"Object",stat:!0},{entries:function(e){return n(e)}})},"616f":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-main",{staticClass:"spot-table-container"},[a("header-search",{attrs:{"show-primary-search":!0,cssType:"1"},on:{refreshTableData:e.refreshTableData}}),a("div",{staticClass:"searchDiv"},[a("div",[a("span",[e._v("时间范围:")]),a("el-date-picker",{staticClass:"dateTime",attrs:{type:"daterange",align:"left",size:"mini","value-format":"yyyy-MM-dd","range-separator":e.BTN_TEXT.TO,"start-placeholder":e.BTN_TEXT.STARTTIME,"end-placeholder":e.BTN_TEXT.ENDTIME,"picker-options":e.pickerOptions},model:{value:e.dateTime,callback:function(t){e.dateTime=t},expression:"dateTime"}})],1),a("Div",[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.search}},[e._v(e._s(e.BTN_TEXT.SEARCH))])],1)],1),a("VXETable",{ref:"xGrid",attrs:{height:e.$options.filters.getTableHeight(280),id:"table",tableName:"",tableLoading:e.tableLoadings,tableDatas:e.tableDatas,tableColumns:e.tableColumns,tablePage:e.tablePages,"edit-config":e.editConfig},on:{sortChange:e.sortChange,onTablePageChange:e.onTablePageChanges}})],1)},n=[],r=(a("99af"),a("4160"),a("a15b"),a("d81d"),a("fb6a"),a("a9e3"),a("4fad"),a("ac1f"),a("1276"),a("159b"),a("3835")),s=(a("96cf"),a("1da1")),o=a("2909"),l=a("cf46"),c=a("eec9"),u=a("3fa5"),d=a("6464"),m=a("582a"),h=a("f82c"),f=a("8593"),g=a("68f8"),p={components:{VXETable:l["a"],SearchBox:c["a"]},data:function(){var e=this;return{EQUIPMENT_MANAGEMENT_REPORT:m["u"],BTN_TEXT:m["c"],maxHeight:document.body.clientHeight-250,deviceName:"",searchList:[],searchData:{conditionJson1:[]},orderByData:{},typeOptions:[],groupOptions:[],typeValue:[],groupValue:[],bcOptions:[],bcId:"",dateTime:[],editConfig:{trigger:"click",mode:"row",showStatus:!1},showTable:!0,tableLoadings:!1,outData:[],tableDatas:[],tableColumns:[],fixedColumns:[{field:"workshop",title:m["u"].WORKSHOP_NAME,width:"130px",align:"center"},{field:"deviceName",title:m["u"].DEVICE_NAME,width:"130px",align:"center",sortable:!0},{field:"devicePriCode",title:m["u"].EQUIPMENT_NO,width:"130px",align:"center",sortable:!0},{field:"typeName",title:m["u"].DEVICE_TYPE,width:"130px",align:"center",sortable:!0}],tablePages:{total:0,currentPage:1,pageSize:10,align:"right",pageSizes:[10,20,50,100,200,500],layouts:["Sizes","PrevJump","PrevPage","Number","NextPage","NextJump","FullJump","Total"],perfect:!0},pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}],disabledDate:function(t){return t.getTime()>e.moment("".concat(e.moment(Date.now()).format("YYYY-MM-DD")," 23:59:59")).format("x")}},savedSearchCondition:[],canReviewCheck:!1}},watch:{},created:function(){this.showReviewCheck()},methods:{refreshTableData:function(e){e&&(this.savedSearchCondition=Object(o["a"])(e)),this.findList()},search:function(){this.findList()},findList:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,i,n,s,l,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.$createElement,i="".concat(e.moment(new Date).format("YYYY-MM-DD")," 23:59:59"),n="".concat(e.moment(new Date-6048e5).format("YYYY-MM-DD")," 00:00:00"),void 0!==e.dateTime[0]&&(n=e.dateTime[0]+" 00:00:00",i=e.dateTime[1]+" 23:59:59"),s={conditionJson1:[],operatorGroup:1,conditionJson2:[],orderBy:e.orderByData},e.savedSearchCondition.length>0&&(s=h["l"].apply(void 0,Object(o["a"])(e.savedSearchCondition))),t.prev=6,e.tableLoadings=!0,t.next=10,Object(g["b"])({size:e.tablePages.pageSize,current:e.tablePages.currentPage,startTime:n,endTime:i},s);case 10:l=t.sent,l.code===m["M"].OPERATION_SUCCESS?(e.tableDatas=l.rows,c=l.rows[0].checkListHistoryVoList.map((function(t){return{field:t.dayDateTime.slice(0,10),title:t.dayDateTime.slice(0,10),formatter:function(t){var a=t.row,i=t.column,n=a[i.property];if(console.log(i),!n)return[];for(var r=[],s=0;s<n.length;s++){var o=n[s],l=o.shiftName+":"+(o.realNameList.length>0?o.realNameList.join(","):"未点检")+"\n"+(o.checkTime?o.checkTime:"");e.canReviewCheck&&(l+="\n"+e.reviewText(o.checkRecord)+"\n"),r.push(l)}return r.join(",")},align:"center",width:"160px",className:"spotCheckCell",slots:{default:function(t){var i=t.row,n=t.column,r=i[n.property];return r?e.canReviewCheck?r.map((function(t){return a("div",{style:e.styleShift(t,n.property)},[a("span",[t.shiftName,":"]),a("span",[t.realNameList.length>0?t.realNameList.join(","):"未点检"]),a("p",{style:"margin:0;"},[t.checkTime]),a("p",{style:"margin:0;"},[e.reviewText(t.checkRecord)])])})):r.map((function(t){return a("div",{style:e.styleShift(t,n.property)},[a("span",[t.shiftName,":"]),a("span",[t.realNameList.length>0?t.realNameList.join(","):"未点检"]),a("p",{style:"margin:0;"},[t.checkTime])])})):[]}}}})),e.tableColumns=[].concat(Object(o["a"])(e.fixedColumns),Object(o["a"])(c)),e.tableDatas=l.rows.map((function(t){var a={};e.fixedColumns.forEach((function(e){a[e.field]=t[e.field]}));for(var i=0,n=Object.entries(t.shiftUserCheckVoMap);i<n.length;i++){var s=Object(r["a"])(n[i],2),o=s[0],l=s[1];a[o.slice(0,10)]=l}return a})),e.tablePages.total=l.total):(e.tablePages.total=0,e.tableDatas=[],Object(u["c"])(l.message)),t.next=19;break;case 14:t.prev=14,t.t0=t["catch"](6),e.tablePages.total=0,e.tableDatas=[],Object(d["a"])(m["N"].NOTIFY,t.t0);case 19:return t.prev=19,e.tableLoadings=!1,t.finish(19);case 22:case"end":return t.stop()}}),t,null,[[6,14,19,22]])})))()},onTablePageChanges:function(e,t){this.tablePages.currentPage=e,this.tablePages.pageSize=t,this.findList()},sortChange:function(e,t){this.orderByData={},this.orderByData[e]=t,this.onTablePageChanges(1,this.tablePages.pageSize)},exportTable:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,i,n,s,l,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,i="".concat(e.moment(new Date).format("YYYY-MM-DD")," 23:59:59"),n="".concat(e.moment(new Date-6048e5).format("YYYY-MM-DD")," 00:00:00"),void 0!==e.dateTime[0]&&(n=e.dateTime[0]+" 00:00:00",i=e.dateTime[1]+" 23:59:59"),s={conditionJson1:[],operatorGroup:1,conditionJson2:[],orderBy:e.orderByData},e.savedSearchCondition.length>0&&(s=h["l"].apply(void 0,Object(o["a"])(e.savedSearchCondition))),t.prev=6,e.tableLoadings=!0,t.next=10,Object(g["b"])({size:999,current:e.tablePages.currentPage,startTime:n,endTime:i},s);case 10:l=t.sent,l.code===m["M"].OPERATION_SUCCESS?(c=[],c=l.rows.map((function(t){var a={};e.fixedColumns.forEach((function(e){a[e.field]=t[e.field]}));for(var i=0,n=Object.entries(t.shiftUserCheckVoMap);i<n.length;i++){var s=Object(r["a"])(n[i],2),o=s[0],l=s[1];a[o.slice(0,10)]=l}return a})),console.log(c),setTimeout((function(){a.$refs.xGrid.exportDatax("点检统计报表",c)}),1e3),e.tableLoadings=!1):(e.tablePages.total=0,e.tableDatas=[],Object(u["c"])(l.message)),t.next=19;break;case 14:t.prev=14,t.t0=t["catch"](6),e.tablePages.total=0,e.tableDatas=[],Object(d["a"])(m["N"].NOTIFY,t.t0);case 19:return t.prev=19,e.tableLoadings=!1,t.finish(19);case 22:case"end":return t.stop()}}),t,null,[[6,14,19,22]])})))()},styleShift:function(e,t){if(e.isFinish){if(e.shiftInformation.showColorList&&e.shiftInformation.showColorList.length>0){for(var a="red",i=e.shiftInformation.showColorList,n=0;n<i.length;n++){var r=i[n].startHHmm.split(":"),s=i[n].endHHmm.split(":"),o=0,l=0,c=60*Number(r[0])+Number(r[1]),u=60*Number(s[0])+Number(s[1]),d=new Date(t.substring(0,10)+" 00:00:00").getTime(),m=new Date(e.shiftInformation.updateTime).getTime();c>u?(o=d+60*(60*Number(r[0])+Number(r[1]))*1e3,l=d+864e5+60*(60*Number(s[0])+Number(s[1]))*1e3):(o=d+60*(60*Number(r[0])+Number(r[1]))*1e3,l=d+60*(60*Number(s[0])+Number(s[1]))*1e3),o<=m&&m<=l&&(a=i[n].color)}return{color:a}}return{color:"green"}}return{color:"red"}},showReviewCheck:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(1111),t.prev=1,t.next=4,Object(f["a"])({configurationTypeEnum:"CHECK_REVIEW"},{});case 4:a=t.sent,a.code===m["M"].OPERATION_SUCCESS?(console.log(a),1===a.rows.isEnable?(console.log(a.rows.isEnable),e.canReviewCheck=!0):(console.log(a.rows.isEnable),e.canReviewCheck=!1),e.findList()):Object(u["c"])(a.message),t.next=10;break;case 8:t.prev=8,t.t0=t["catch"](1);case 10:return t.prev=10,t.finish(10);case 12:case"end":return t.stop()}}),t,null,[[1,8,10,12]])})))()},reviewText:function(e){return console.log(e),e.reviewState?1===e.reviewState?"【"+e.reviewedByName+"】审核通过":"【"+e.reviewedByName+"】审核不通过":"未审核"}}},b=p,v=b,T=(a("37f0"),a("2877")),C=Object(T["a"])(v,i,n,!1,null,"7a33e286",null);t["a"]=C.exports},"68f8":function(e,t,a){"use strict";a.d(t,"h",(function(){return n})),a.d(t,"c",(function(){return r})),a.d(t,"g",(function(){return s})),a.d(t,"d",(function(){return o})),a.d(t,"e",(function(){return l})),a.d(t,"f",(function(){return c})),a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var i=a("b775"),n=function(e,t){return Object(i["k"])("deviceManagementReport/getToolLifeStatistical.action?",e,t)},r=function(e,t){return Object(i["k"])("deviceGroup/getList.action?",e,t)},s=function(e,t){return Object(i["k"])("deviceManagementReport/getRepairStatisticalDetail.action?",e,t)},o=function(e,t){return Object(i["k"])("deviceManagementReport/getListQueryParameterMaintenance.action?",e,t)},l=function(e,t){return Object(i["k"])("deviceManagementReport/getListQueryParameterRepair.action?",e,t)},c=function(e,t){return Object(i["k"])("deviceManagementReport/getListQueryParameterTool.action?",e,t)},u=function(e,t){return Object(i["k"])("webReportStatistics/getCheckStatisticsQueryParameter.action?",e,t)},d=function(e,t){return Object(i["k"])("webReportStatistics/checkStatistics.action?",e,t)}},"6f53":function(e,t,a){var i=a("83ab"),n=a("df75"),r=a("fc6a"),s=a("d1e7").f,o=function(e){return function(t){var a,o=r(t),l=n(o),c=l.length,u=0,d=[];while(c>u)a=l[u++],i&&!s.call(o,a)||d.push(e?[a,o[a]]:o[a]);return d}};e.exports={entries:o(!0),values:o(!1)}},"72ba":function(e,t,a){"use strict";var i=a("110e"),n=a.n(i);n.a},"8cb0":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-main",[a("div",{staticClass:"searchDiv"},[a("div",[a("span",[e._v(e._s(e.EQUIPMENT_MANAGEMENT_REPORT.ASSIGN_TIME)+":")]),a("el-date-picker",{staticClass:"dateTime",attrs:{type:"daterange",align:"left","unlink-panels":"","value-format":"yyyy-MM-dd","range-separator":e.BTN_TEXT.TO,"start-placeholder":e.BTN_TEXT.STARTTIME,"end-placeholder":e.BTN_TEXT.ENDTIME,"picker-options":e.pickerOptions},model:{value:e.dateTime,callback:function(t){e.dateTime=t},expression:"dateTime"}})],1),a("div",[a("el-button",{attrs:{type:"primary"},on:{click:e.search}},[e._v(e._s(e.BTN_TEXT.SEARCH))])],1)]),a("VXETable",{ref:"xGrid",attrs:{id:"table",maxHeight:500,tableName:"",tableLoading:e.tableLoadings,tableDatas:e.tableDatas,tableColumns:e.tableColumns,tablePage:e.tablePages,"edit-config":{trigger:"click",mode:"row",showStatus:!0,icon:"fa fa-file-text-o"}},on:{onTablePageChange:e.onTablePageChanges}})],1)},n=[],r=(a("4160"),a("159b"),a("96cf"),a("1da1")),s=a("cf46"),o=a("c1df"),l=a.n(o),c=a("3fa5"),u=a("6464"),d=a("582a"),m=a("68f8"),h={components:{VXETable:s["a"]},props:{deviceCode:String},data:function(){return{EQUIPMENT_MANAGEMENT_REPORT:d["u"],BTN_TEXT:d["c"],FIXTASK_STATUS:d["A"],dateTime:"",editConfig:{trigger:"click",mode:"row",showStatus:!1},showTable:!0,tableLoadings:!0,outData:[],tableDatas:[],tableColumns:[{field:"occurTime",title:d["u"].REPAIR_APPLICATION_TIME,formatter:["formatDate","yyyy-MM-dd HH:mm:ss"],width:"",align:"center",sortable:!0},{field:"endTime",title:d["u"].ENDTIME,formatter:["formatDate","yyyy-MM-dd HH:mm:ss"],width:"",align:"center",sortable:!0},{field:"repairTypeNames",title:d["u"].FAULT_TYPE,width:"",align:"center",sortable:!0},{field:"repairUserName",title:d["u"].MAINTAINER,width:"",align:"center"},{field:"occurUserName",title:d["u"].REPAIRER,width:"",align:"center"},{field:"repairState",title:d["u"].STATE,width:"",align:"center",slots:{default:function(e){var t=e.row;e.column;return d["A"][t.repairState]}}}],tablePages:{total:0,currentPage:1,pageSize:10,align:"right",pageSizes:[10,20,50,100,200,500],layouts:["Sizes","PrevJump","PrevPage","Number","NextPage","NextJump","FullJump","Total"],perfect:!0},pickerOptions:{shortcuts:[{text:d["c"].LAST_WEEK,onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:d["c"].LAST_MONTH,onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:d["c"].LAST_THREE_MONTHS,onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]}}},watch:{},created:function(){var e=new Date,t=new Date;t.setTime(t.getTime()-2592e6),this.dateTime=[this.$utils.toDateString(t,"yyyy-MM-dd"),this.$utils.toDateString(e,"yyyy-MM-dd")],this.findList()},methods:{findList:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.tableLoadings=!0,t.next=4,Object(m["g"])({size:e.tablePages.pageSize,current:e.tablePages.currentPage,startTime:e.dateTime[0]+" 00:00:00",endTime:e.dateTime[1]+" 23:59:59",deviceCode:e.deviceCode},{});case 4:a=t.sent,a.code===d["M"].OPERATION_SUCCESS?(e.tableDatas=a.rows,e.tablePages.total=a.total,e.tableLoadings=!1):Object(c["c"])(a.message),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),Object(u["a"])(d["N"].NOTIFY,t.t0);case 11:return t.prev=11,t.finish(11);case 13:case"end":return t.stop()}}),t,null,[[0,8,11,13]])})))()},onTablePageChanges:function(e,t){this.tablePages.currentPage=e,this.tablePages.pageSize=t,this.findList()},search:function(){this.onTablePageChanges(1,10)},exportTable:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,i,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,""!==e.typeValue&&(a=e.typeValue[e.typeValue.length-1]),e.tableLoadings=!0,i={size:1e5,current:1,startTime:e.dateTime[0]+" 00:00:00",endTime:e.dateTime[1]+" 23:59:59",state:e.state,typeId:a,userId:e.userId,workshopId:e.groupValue,deviceName:e.deviceName},t.next=6,Object(m["g"])(i);case 6:n=t.sent,n.code===d["M"].OPERATION_SUCCESS?(e.tableLoadings=!1,e.outData=n.rows,e.outData.forEach((function(e){var t=l()(e.startTime),a=l()(e.endTime);e.totalTime=a.diff(t,"seconds")})),e.$refs.xGrid.exportData("基础信息",e.outData)):Object(c["c"])(n.message),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),Object(u["a"])(e.GLOBAL.TITLE.NOTIFY,t.t0);case 13:return t.prev=13,t.finish(13);case 15:case"end":return t.stop()}}),t,null,[[0,10,13,15]])})))()}}},f=h,g=f,p=(a("09fd"),a("2877")),b=Object(p["a"])(g,i,n,!1,null,"60f95172",null);t["a"]=b.exports},"94a5":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-main",[a("div",{staticClass:"searchDiv"},[a("div",[a("span",[e._v(e._s(e.EQUIPMENT_MANAGEMENT_REPORT.WORKSHOP_NAME)+":")]),a("el-select",{attrs:{placeholder:"请选择",size:"mini"},model:{value:e.groupId,callback:function(t){e.groupId=t},expression:"groupId"}},e._l(e.groupOptions,(function(e){return a("el-option",{key:e.groupId,attrs:{label:e.groupName,value:e.groupId}})})),1)],1),a("div",[a("span",[e._v("产线名称:")]),a("el-select",{attrs:{placeholder:"请选择",size:"mini"},model:{value:e.lineId,callback:function(t){e.lineId=t},expression:"lineId"}},e._l(e.lineOptions,(function(e){return a("el-option",{key:e.groupId,attrs:{label:e.groupName,value:e.groupId}})})),1)],1),a("div",[a("span",[e._v(e._s(e.EQUIPMENT_MANAGEMENT_REPORT.DEVICE_NAME)+":")]),a("el-input",{attrs:{size:"mini"},model:{value:e.deviceName,callback:function(t){e.deviceName=t},expression:"deviceName"}})],1),a("div",[a("span",[e._v("工具名称:")]),a("el-input",{attrs:{size:"mini"},model:{value:e.toolName,callback:function(t){e.toolName=t},expression:"toolName"}})],1),a("el-button",{attrs:{size:"mini"},on:{click:e.search}},[e._v(e._s(e.BTN_TEXT.SEARCH))]),a("el-button",{attrs:{size:"mini"},on:{click:e.reset}},[e._v(e._s(e.BTN_TEXT.RESET))])],1),a("VXETable",{ref:"xGrid",attrs:{id:"table",height:e.$options.filters.getTableHeight(240),tableName:"",tableLoading:e.tableLoadings,tableDatas:e.tableDatas,tableColumns:e.myTableColumns,tablePage:e.tablePages,"edit-config":e.editConfig},on:{onTablePageChange:e.onTablePageChanges}}),a("dialog-setting-column",{attrs:{"show-setting-dialog":e.isSettingCustomDialogShow,"default-columns":e.tableColumns,"page-columns":e.myTableColumns},on:{"update:showSettingDialog":function(t){e.isSettingCustomDialogShow=t},"update:show-setting-dialog":function(t){e.isSettingCustomDialogShow=t},saveMyColumnSetting:e.handleSaveColumnSetting}})],1)},n=[],r=(a("a434"),a("d3b7"),a("ac1f"),a("25f0"),a("5319"),a("2909")),s=(a("96cf"),a("1da1")),o=a("cf46"),l=a("3fa5"),c=a("6464"),u=a("582a"),d=a("68f8"),m=a("be7c"),h=a("cf45"),f=a("f82c"),g=a("b82e"),p={components:{VXETable:o["a"],DialogSettingColumn:m["a"]},data:function(){var e=this,t=this.$createElement;return{EQUIPMENT_MANAGEMENT_REPORT:u["u"],BTN_TEXT:u["c"],deviceName:"",toolName:"",groupOptions:[],lineOptions:[],lineId:"",groupId:"",searchData:[],editConfig:{trigger:"click",mode:"row",showStatus:!1},showTable:!0,tableLoadings:!0,outData:[],tableDatas:[],tableColumns:[{field:"factory",title:"工厂",visible:!0,width:"160",align:"center",sortable:!0},{field:"workshop",title:u["u"].WORKSHOP_NAME,visible:!0,width:"160",align:"center",sortable:!0},{field:"productionLine",title:u["u"].PRODUCTION_LINE_NAME,visible:!0,width:"160",align:"center",sortable:!0},{field:"deviceName",title:u["u"].DEVICE_NAME,visible:!0,width:"160",align:"center",sortable:!0},{field:"toolName",title:u["u"].TOOL_NAME,visible:!0,width:"160",align:"center",sortable:!0},{field:"toolModel",title:u["u"].TOOL_TYPE,visible:!0,width:"160",align:"center",sortable:!0},{field:"toolState",title:u["u"].STATE,visible:!0,width:"160",align:"center",sortable:!0,slots:{default:function(e){var t=e.row;e.column;return 1===t.toolState?u["u"].USEING:2===t.toolState?u["u"].SUSPEND:3===t.toolState?u["u"].SCRAP:void 0}}},{field:"useCount",title:u["u"].USE_COUNT,visible:!0,width:"160",align:"center",sortable:!0},{field:"initialLife",title:u["u"].INITIALLIFE,visible:!0,width:"160",align:"center",sortable:!0},{field:"toolMaxLife",title:"最大寿命",visible:!0,width:"160",align:"center",sortable:!0},{field:"overLife",title:"剩余寿命",visible:!0,width:"160",align:"center",sortable:!0},{field:"",title:u["c"].OPERATION,visible:!0,width:"50",align:"center",fixed:"right",slots:{header:function(a){a.column;return[t("span",[t("i",{on:{click:function(){return e.showCustomColumn()}},class:"el-icon-s-tools set-btn"})])]}}}],tablePages:{total:0,currentPage:1,pageSize:10,align:"right",pageSizes:[10,20,50,100,200,500],layouts:["Sizes","PrevJump","PrevPage","Number","NextPage","NextJump","FullJump","Total"],perfect:!0},savedCustomColumns:[],isSettingCustomDialogShow:!1}},watch:{groupId:function(e){this.getLine(),this.lineId=""}},computed:{myTableColumns:function(){return Array.isArray(this.savedCustomColumns)&&this.savedCustomColumns.length>0?this.savedCustomColumns:this.tableColumns}},created:function(){this.getCustomColumn(33),this.findList(),this.getLine(),this.getGroup()},methods:{getGroup:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.tableLoading=!0,t.next=4,Object(d["c"])({},{conditionJson1:[{column:"groupType",operator:1,ptype:"int",type:"eq",value:2}]});case 4:a=t.sent,a.code===u["M"].OPERATION_SUCCESS?e.groupOptions=a.rows:Object(l["c"])(a.message),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),Object(c["a"])(u["N"].NOTIFY,t.t0);case 11:return t.prev=11,t.finish(11);case 13:case"end":return t.stop()}}),t,null,[[0,8,11,13]])})))()},getLine:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={conditionJson1:[{column:"groupType",operator:1,ptype:"int",type:"eq",value:3}]},""!==e.groupId&&a.conditionJson1.push({column:"parentId",operator:1,ptype:"int",type:"eq",value:e.groupId}),t.prev=2,e.tableLoading=!0,t.next=6,Object(d["c"])({},a);case 6:i=t.sent,i.code===u["M"].OPERATION_SUCCESS?e.lineOptions=i.rows:Object(l["c"])(i.message),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](2),Object(c["a"])(u["N"].NOTIFY,t.t0);case 13:return t.prev=13,t.finish(13);case 15:case"end":return t.stop()}}),t,null,[[2,10,13,15]])})))()},findList:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a="",a=""!==e.lineId?e.lineId:e.groupId,t.prev=2,e.tableLoadings=!0,t.next=6,Object(d["h"])({size:e.tablePages.pageSize,current:e.tablePages.currentPage,workshopId:a,deviceName:e.deviceName,toolName:e.toolName},{conditionJson1:e.searchData.conditionArr1,operator:e.searchData.groupOperator,conditionJson2:e.searchData.conditionArr2});case 6:i=t.sent,i.code===u["M"].OPERATION_SUCCESS?(e.tableDatas=i.rows,e.tablePages.total=i.total,e.tableLoadings=!1):Object(l["c"])(i.message),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](2),Object(c["a"])(u["N"].NOTIFY,t.t0);case 13:return t.prev=13,t.finish(13);case 15:case"end":return t.stop()}}),t,null,[[2,10,13,15]])})))()},onTablePageChanges:function(e,t){this.tablePages.currentPage=e,this.tablePages.pageSize=t,this.findList()},search:function(){this.onTablePageChanges(1,this.tablePages.pageSize)},reset:function(){this.toolName="",this.deviceName="",this.groupId="",this.lineId="",this.getLine(),this.onTablePageChanges(1,10)},exportTable:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a="",a=""!==e.lineId?e.lineId:e.groupId,t.prev=2,e.tableLoadings=!0,t.next=6,Object(d["h"])({size:99999999,current:e.tablePages.currentPage,workshopId:a,deviceName:e.deviceName,toolName:e.toolName},{conditionJson1:e.searchData.conditionArr1,operator:e.searchData.groupOperator,conditionJson2:e.searchData.conditionArr2});case 6:i=t.sent,i.code===u["M"].OPERATION_SUCCESS?(e.$refs.xGrid.exportData("工具寿命统计报表",i.rows),e.tableLoadings=!1):Object(l["c"])(i.message),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](2),Object(c["a"])(u["N"].NOTIFY,t.t0);case 13:return t.prev=13,t.finish(13);case 15:case"end":return t.stop()}}),t,null,[[2,10,13,15]])})))()},findTable:function(e,t,a){if(this.searchData=[],void 0!==e)for(var i in this.searchData.conditionArr1=JSON.parse(JSON.stringify(e)),this.searchData.conditionArr1)this.searchData.conditionArr1[i].value=this.searchData.conditionArr1[i].value.toString();if(void 0!==t&&(this.searchData.groupOperator=t),void 0!==a)for(var n in this.searchData.conditionArr2=JSON.parse(JSON.stringify(a)),this.searchData.conditionArr2)this.searchData.conditionArr2[n].value=this.searchData.conditionArr2[n].value.toString();this.onTablePageChanges(1,this.tablePages.pageSize)},showCustomColumn:function(){this.isSettingCustomDialogShow=!this.isSettingCustomDialogShow},handleSaveColumnSetting:function(e){var t=arguments,a=this;return Object(s["a"])(regeneratorRuntime.mark((function i(){var n,r,s,o,c;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return t.length>1&&void 0!==t[1]?t[1]:a.cssType,n=a.$loading({body:!0,lock:!0,text:"自定列配置提交中..."}),i.prev=2,r=Object(h["c"])("id"),s=window.localStorage.getItem("account").replace(/"/g,""),o={account:s,cssType:33,menuId:r},i.next=8,Object(g["b"])(o,e);case 8:c=i.sent,"0000"===c.code?(n.close(),Object(l["b"])(c.message),a.refreshTableColumns()):(n.close(),Object(l["a"])(c.message||"操作失败！")),i.next=17;break;case 12:i.prev=12,i.t0=i["catch"](2),console.log(i.t0),n.close(),Object(l["a"])(i.t0+"666");case 17:return i.prev=17,a.isSettingCustomDialogShow=!1,i.finish(17);case 20:case"end":return i.stop()}}),i,null,[[2,12,17,20]])})))()},getCustomColumn:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var i,n,s,o,c,u;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,i=Object(h["c"])("id"),n=window.localStorage.getItem("account").replace(/"/g,""),s={account:n,cssType:e,menuId:i},a.next=6,Object(g["a"])(s);case 6:o=a.sent,Array.isArray(o)&&o.length>0&&(u=Object(f["k"])(o,t.tableColumns),t.savedCustomColumns.length>0&&t.savedCustomColumns.splice(0),(c=t.savedCustomColumns).push.apply(c,Object(r["a"])(u))),a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](0),Object(l["a"])(a.t0);case 13:case"end":return a.stop()}}),a,null,[[0,10]])})))()},refreshTableColumns:function(){this.getCustomColumn(33),this.refreshTableData()},refreshTableData:function(){this.findTable()}}},b=p,v=b,T=(a("e5a9"),a("2877")),C=Object(T["a"])(v,i,n,!1,null,"11980b00",null);t["a"]=C.exports},b82e:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}));var i=a("b775"),n=function(e,t){return Object(i["m"])("/configure/pageUserCustom/savePageUserCustomInfo.action?",e,t)},r=function(e,t){return Object(i["m"])("/configure/pageUserCustom/getPageUserCustomDetails.action?",e,t)}},be7c:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{staticClass:"customize-column-dialog",attrs:{"show-close":!1,visible:e.isDialogShow,"close-on-click-modal":!1},on:{"update:visible":function(t){e.isDialogShow=t}}},[a("span",{attrs:{slot:"title"},slot:"title"},[a("span",{staticClass:"customize-column-dialog__title"},[e._v(e._s(e.dialogTitle))]),a("span",{staticClass:"customize-column-dialog__prompt"},[e._v("勾选需要显示的列，拖动列名进行排序")])]),a("div",{staticStyle:{height:"400px",overflow:"auto"}},[a("vue-draggable",{attrs:{animation:"380",ghostClass:"ghost",handle:".move-row",scroll:""},model:{value:e.tempTableColumns,callback:function(t){e.tempTableColumns=t},expression:"tempTableColumns"}},e._l(e.tempTableColumns,(function(t,i){return a("li",{key:i,staticClass:"column-row"},[a("el-checkbox",{staticClass:"column-row__checkbox",attrs:{disabled:t.required},model:{value:t.visible,callback:function(a){e.$set(t,"visible",a)},expression:"column.visible"}}),a("span",{staticClass:"column-row__tilte",class:t.required?"":"move-row"},[e._v(e._s(t.title))]),a("el-input",{staticClass:"column-low__input",attrs:{size:"mini"},model:{value:t.width,callback:function(a){e.$set(t,"width",a)},expression:"column.width"}}),a("span",{staticClass:"column-row__unit"},[e._v("px")])],1)})),0)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{staticClass:"custom-button",attrs:{plain:""},on:{click:e.handleResetEvent}},[e._v(" 恢复默认 ")]),a("el-button",{staticClass:"custom-button",attrs:{plain:""},on:{click:e.handleCloseEvent}},[e._v(" 关闭 ")]),a("el-button",{staticClass:"custom-button",attrs:{type:"primary"},on:{click:e.handleSaveEvent}},[e._v(" 保存 ")])],1)])},n=[],r=(a("a434"),a("b85c")),s=a("310e"),o=a.n(s),l={name:"dialogCustomizeColumnsDialogSettingColumn",components:{VueDraggable:o.a},props:{pageColumns:{type:Array,default:function(){return[]},required:!0},showSettingDialog:{type:Boolean,default:function(){return!1}},defaultColumns:{type:Array,default:function(){return[]},required:!0}},watch:{pageColumns:{handler:function(e){var t,a;this.tempTableColumns.splice(0);var i,n=[],s=Object(r["a"])(e);try{for(s.s();!(i=s.n()).done;){var o=i.value;o.field&&o.title&&n.push({field:o.field,title:o.title,width:o.minWidth||"100",visible:o.visible,required:o.required})}}catch(l){s.e(l)}finally{s.f()}(t=this.tempTableColumns).push.apply(t,n),(a=this.initTableColumns).push.apply(a,n)},immediate:!0,deep:!0},defaultColumns:{handler:function(e){var t;this.defaultTableColumns.splice(0);var a,i=[],n=Object(r["a"])(e);try{for(n.s();!(a=n.n()).done;){var s=a.value;s.field&&i.push({field:s.field,title:s.title,width:s.minWidth||"100",visible:s.visible,required:s.required})}}catch(o){n.e(o)}finally{n.f()}(t=this.defaultTableColumns).push.apply(t,i)},immediate:!0,deep:!0},showSettingDialog:{handler:function(e){this.isDialogShow=e},immediate:!0}},data:function(){return{dialogTitle:"自定义列",isDialogShow:!1,tempTableColumns:[],initTableColumns:[],defaultTableColumns:[]}},methods:{handleSaveEvent:function(){this.$emit("saveMyColumnSetting",this.tempTableColumns)},handleCloseEvent:function(){for(var e=this.tempTableColumns.length,t=!0,a=0;a<e;a++){var i=this.tempTableColumns[a],n=this.initTableColumns[a];if(i.field!==n.field){t=!1;break}if(i.width!==n.width){t=!1;break}if(i.visible!==n.visible){t=!1;break}}if(!t){var s,o,l=[],c=Object(r["a"])(this.pageColumns);try{for(c.s();!(o=c.n()).done;){var u=o.value;u.field&&l.push({field:u.field,title:u.title,width:u.minWidth||"100",visible:u.visible,required:u.required})}}catch(d){c.e(d)}finally{c.f()}this.tempTableColumns.splice(0),(s=this.tempTableColumns).push.apply(s,l)}this.$emit("update:showSettingDialog",!1)},handleResetEvent:function(){var e,t,a=[],i=Object(r["a"])(this.defaultColumns);try{for(i.s();!(t=i.n()).done;){var n=t.value;n.field&&a.push({field:n.field,title:n.title,width:n.minWidth||"100",visible:n.visible,required:n.required})}}catch(s){i.e(s)}finally{i.f()}this.tempTableColumns.splice(0),(e=this.tempTableColumns).push.apply(e,a)}}},c=l,u=(a("1bb8"),a("2877")),d=Object(u["a"])(c,i,n,!1,null,"2d822b9c",null);t["a"]=d.exports},e5a9:function(e,t,a){"use strict";var i=a("250c"),n=a.n(i);n.a},f356:function(e,t,a){}}]);
//# sourceMappingURL=chunk-74915f50.e9a03c9b.js.map