(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-771dadf0"],{"20ca":function(e,t,a){"use strict";function i(e,t){var a=null;return function(){var i=this,n=arguments;a&&clearTimeout(a),a=setTimeout((function(){e.apply(i,n)}),t)}}a.d(t,"a",(function(){return i}))},"2bda":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",[a("div",{staticClass:"main"},[a("el-header",[a("header-buttons",{attrs:{showRefresh:!0,cssType:"1"},on:{buttonClickEvent:e.buttonClickEvent}})],1),a("el-main",[a("Div",[a("div",{attrs:{id:"tabs"}},[a("ul",e._l(e.isAndon?e.tabs_andon:e.tabs,(function(t,i){return a("li",{key:i,class:{active:e.active==i},on:{click:function(a){return e.toggle(i,t.views)}}},[e._v(e._s(t.name))])})),0)]),a("div",[a(e.currentView,{ref:e.currentView,tag:"component"})],1)])],1)],1)])},n=[],r=(a("4d63"),a("ac1f"),a("25f0"),a("5319"),a("96cf"),a("1da1")),s=a("85a8"),o=a("5861"),c=a("582a"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-main",{staticClass:"spot-table-container"},[a("header-search",{attrs:{"show-primary-search":!0,cssType:"1"},on:{refreshTableData:e.refreshTableData}}),a("div",{staticClass:"searchDiv"},[a("div",[a("span",[e._v("时间范围:")]),a("el-date-picker",{staticClass:"dateTime",attrs:{type:"daterange",align:"left",size:"mini","value-format":"yyyy-MM-dd","range-separator":e.BTN_TEXT.TO,"start-placeholder":e.BTN_TEXT.STARTTIME,"end-placeholder":e.BTN_TEXT.ENDTIME,"picker-options":e.pickerOptions},model:{value:e.dateTime,callback:function(t){e.dateTime=t},expression:"dateTime"}})],1),a("Div",[a("el-button",{attrs:{size:"mini"},on:{click:e.search}},[e._v(e._s(e.BTN_TEXT.SEARCH))])],1)],1),a("VXETable",{ref:"xGrid",attrs:{height:e.$options.filters.getTableHeight(280),id:"table",tableName:"",tableLoading:e.tableLoadings,tableDatas:e.tableDatas,tableColumns:e.tableColumns,tablePage:e.tablePages,"edit-config":e.editConfig},on:{sortChange:e.sortChange,onTablePageChange:e.onTablePageChanges}})],1)},u=[],h=(a("99af"),a("4160"),a("a15b"),a("d81d"),a("fb6a"),a("4fad"),a("159b"),a("3835")),d=a("2909"),m=a("cf46"),p=a("eec9"),f=a("3fa5"),v=a("6464"),b=a("f82c"),g=a("8593"),T=a("68f8"),w={components:{VXETable:m["a"],SearchBox:p["a"]},data:function(){var e=this;return{EQUIPMENT_MANAGEMENT_REPORT:c["u"],BTN_TEXT:c["c"],maxHeight:document.body.clientHeight-250,deviceName:"",searchList:[],searchData:{conditionJson1:[]},orderByData:{},typeOptions:[],groupOptions:[],typeValue:[],groupValue:[],bcOptions:[],bcId:"",dateTime:[],editConfig:{trigger:"click",mode:"row",showStatus:!1},showTable:!0,tableLoadings:!1,outData:[],tableDatas:[],tableColumns:[],fixedColumns:[{field:"workshop",title:c["u"].WORKSHOP_NAME,width:"130px",align:"center"},{field:"deviceName",title:c["u"].DEVICE_NAME,width:"130px",align:"center",sortable:!0},{field:"devicePriCode",title:c["u"].EQUIPMENT_NO,width:"130px",align:"center",sortable:!0},{field:"typeName",title:c["u"].DEVICE_TYPE,width:"130px",align:"center",sortable:!0}],tablePages:{total:0,currentPage:1,pageSize:10,align:"right",pageSizes:[10,20,50,100,200,500],layouts:["Sizes","PrevJump","PrevPage","Number","NextPage","NextJump","FullJump","Total"],perfect:!0},pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}],disabledDate:function(t){return t.getTime()>e.moment("".concat(e.moment(Date.now()).format("YYYY-MM-DD")," 23:59:59")).format("x")}},savedSearchCondition:[],canReviewCheck:!1}},watch:{},created:function(){this.showReviewCheck()},methods:{refreshTableData:function(e){e&&(this.savedSearchCondition=Object(d["a"])(e)),this.findList()},search:function(){this.findList()},findList:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,i,n,r,s,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.$createElement,i="".concat(e.moment(new Date).format("YYYY-MM-DD")," 23:59:59"),n="".concat(e.moment(new Date-6048e5).format("YYYY-MM-DD")," 00:00:00"),void 0!==e.dateTime[0]&&(n=e.dateTime[0]+" 00:00:00",i=e.dateTime[1]+" 23:59:59"),r={conditionJson1:[],operatorGroup:1,conditionJson2:[],orderBy:e.orderByData},e.savedSearchCondition.length>0&&(r=b["l"].apply(void 0,Object(d["a"])(e.savedSearchCondition))),t.prev=6,e.tableLoadings=!0,t.next=10,Object(T["b"])({size:e.tablePages.pageSize,current:e.tablePages.currentPage,startTime:n,endTime:i},r);case 10:s=t.sent,s.code===c["M"].OPERATION_SUCCESS?(e.tableDatas=s.rows,o=s.rows[0].checkListHistoryVoList.map((function(t){return{field:t.dayDateTime.slice(0,10),title:t.dayDateTime.slice(0,10),formatter:function(t){var a=t.row,i=t.column,n=a[i.property];if(console.log(i),!n)return[];for(var r=[],s=0;s<n.length;s++){var o=n[s],c=o.shiftName+":"+(o.realNameList.length>0?o.realNameList.join(","):"未点检")+"\n"+(o.checkTime?o.checkTime:"");e.canReviewCheck&&(c+="\n"+e.reviewText(o.checkRecord)+"\n"),r.push(c)}return r.join(",")},align:"center",width:"160px",className:"spotCheckCell",slots:{default:function(t){var i=t.row,n=t.column,r=i[n.property];return r?e.canReviewCheck?r.map((function(t){return a("div",{style:e.styleShift(t,n.property)},[a("span",[t.shiftName,":"]),a("span",[t.realNameList.length>0?t.realNameList.join(","):"未点检"]),a("p",{style:"margin:0;"},[t.checkTime]),a("p",{style:"margin:0;"},[e.reviewText(t.checkRecord,t)])])})):r.map((function(t){return a("div",{style:e.styleShift(t,n.property)},[a("span",[t.shiftName,":"]),a("span",[t.realNameList.length>0?t.realNameList.join(","):"未点检"]),a("p",{style:"margin:0;"},[t.checkTime])])})):[]}}}})),e.tableColumns=[].concat(Object(d["a"])(e.fixedColumns),Object(d["a"])(o)),e.tableDatas=s.rows.map((function(t){var a={};e.fixedColumns.forEach((function(e){a[e.field]=t[e.field]}));for(var i=0,n=Object.entries(t.shiftUserCheckVoMap);i<n.length;i++){var r=Object(h["a"])(n[i],2),s=r[0],o=r[1];a[s.slice(0,10)]=o}return a})),e.tablePages.total=s.total):(e.tablePages.total=0,e.tableDatas=[],Object(f["c"])(s.message)),t.next=19;break;case 14:t.prev=14,t.t0=t["catch"](6),e.tablePages.total=0,e.tableDatas=[],Object(v["a"])(c["N"].NOTIFY,t.t0);case 19:return t.prev=19,e.tableLoadings=!1,t.finish(19);case 22:case"end":return t.stop()}}),t,null,[[6,14,19,22]])})))()},onTablePageChanges:function(e,t){this.tablePages.currentPage=e,this.tablePages.pageSize=t,this.findList()},sortChange:function(e,t){this.orderByData={},this.orderByData[e]=t,this.onTablePageChanges(1,this.tablePages.pageSize)},exportTable:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,i,n,r,s,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,i="".concat(e.moment(new Date).format("YYYY-MM-DD")," 23:59:59"),n="".concat(e.moment(new Date-6048e5).format("YYYY-MM-DD")," 00:00:00"),void 0!==e.dateTime[0]&&(n=e.dateTime[0]+" 00:00:00",i=e.dateTime[1]+" 23:59:59"),r={conditionJson1:[],operatorGroup:1,conditionJson2:[],orderBy:e.orderByData},e.savedSearchCondition.length>0&&(r=b["l"].apply(void 0,Object(d["a"])(e.savedSearchCondition))),t.prev=6,e.tableLoadings=!0,t.next=10,Object(T["b"])({size:999,current:e.tablePages.currentPage,startTime:n,endTime:i},r);case 10:s=t.sent,s.code===c["M"].OPERATION_SUCCESS?(o=[],o=s.rows.map((function(t){var a={};e.fixedColumns.forEach((function(e){a[e.field]=t[e.field]}));for(var i=0,n=Object.entries(t.shiftUserCheckVoMap);i<n.length;i++){var r=Object(h["a"])(n[i],2),s=r[0],o=r[1];a[s.slice(0,10)]=o}return a})),console.log(o),setTimeout((function(){a.$refs.xGrid.exportDatax("点检统计报表",o)}),1e3),e.tableLoadings=!1):(e.tablePages.total=0,e.tableDatas=[],Object(f["c"])(s.message)),t.next=19;break;case 14:t.prev=14,t.t0=t["catch"](6),e.tablePages.total=0,e.tableDatas=[],Object(v["a"])(c["N"].NOTIFY,t.t0);case 19:return t.prev=19,e.tableLoadings=!1,t.finish(19);case 22:case"end":return t.stop()}}),t,null,[[6,14,19,22]])})))()},styleShift:function(e,t){if(e.isFinish){var a=new Date(e.checkRecord.checkStartTime).getTime(),i=new Date(e.checkRecord.checkEndTime).getTime(),n=new Date(e.checkTime).getTime();if(e.shiftInformation.showColorList&&e.shiftInformation.showColorList.length>0){for(var r="red",s=e.shiftInformation.showColorList,o=0;o<s.length;o++)a<n&&n<i&&(r=s[o].color);return console.log(e.checkTime,r),{color:r}}return{color:"green"}}return{color:"red"}},showReviewCheck:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(1111),t.prev=1,t.next=4,Object(g["a"])({configurationTypeEnum:"CHECK_REVIEW"},{});case 4:a=t.sent,a.code===c["M"].OPERATION_SUCCESS?(console.log(a),1===a.rows.isEnable?(console.log(a.rows.isEnable),e.canReviewCheck=!0):(console.log(a.rows.isEnable),e.canReviewCheck=!1),e.findList()):Object(f["c"])(a.message),t.next=10;break;case 8:t.prev=8,t.t0=t["catch"](1);case 10:return t.prev=10,t.finish(10);case 12:case"end":return t.stop()}}),t,null,[[1,8,10,12]])})))()},reviewText:function(e,t){var a=new Date(e.checkStartTime).getTime(),i=new Date(e.checkEndTime).getTime(),n=new Date(e.checkTime).getTime();return a<n&&n<i?1===t.isFinish?"":"未点检完成":1===e.checkState||5===e.checkState?e.reviewState?1===e.reviewState?"【"+e.reviewedByName+"】审核通过":"【"+e.reviewedByName+"】审核不通过":" 超时点检":""}}},C=w,S=C,E=(a("a8c9"),a("2877")),x=Object(E["a"])(S,l,u,!1,null,"60dfa4c2",null),y=x.exports,O=a("616f"),k=a("083d"),_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-main",[a("header-search",{attrs:{"show-primary-search":!0,cssType:"2"},on:{refreshTableData:e.refreshTableData}}),a("div",{staticClass:"searchDiv"},[a("div",[a("span",[e._v("时间范围:")]),a("el-date-picker",{staticClass:"dateTime",attrs:{type:"datetimerange",align:"left",size:"mini","value-format":"yyyy-MM-dd HH:mm:ss","range-separator":e.BTN_TEXT.TO,"start-placeholder":e.BTN_TEXT.STARTTIME,"end-placeholder":e.BTN_TEXT.ENDTIME,"picker-options":e.pickerOptions},model:{value:e.dateTime,callback:function(t){e.dateTime=t},expression:"dateTime"}})],1),a("div",[a("span",[e._v("横坐标:")]),a("el-select",{attrs:{placeholder:"请选择",size:"mini"},model:{value:e.xModel,callback:function(t){e.xModel=t},expression:"xModel"}},e._l(e.xOptions,(function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:t}})})),1)],1),a("div",[a("span",[e._v("纵坐标:")]),a("el-select",{attrs:{placeholder:"请选择",size:"mini"},model:{value:e.yModel,callback:function(t){e.yModel=t},expression:"yModel"}},e._l(e.yOptions,(function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:t}})})),1)],1),a("Div",[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.search}},[e._v(e._s(e.BTN_TEXT.SEARCH))])],1)],1),a("VXETable",{ref:"xGrid",attrs:{id:"table",height:e.$options.filters.getTableHeightBfb(.3),tableName:"",tableLoading:e.tableLoadings,tableDatas:e.tableDatas,tableColumns:e.tableColumns_new,tablePage:e.tablePages,"edit-config":e.editConfig}}),a("div",{staticClass:"chartContent"},[a("p",{staticClass:"chartTitle"},[e._v("故障统计")]),a("div",{ref:"echartLine",staticClass:"device-chart-line"}),a("div",{ref:"echartPie",staticClass:"device-chart-pie"})])],1)},D=[],N=(a("b0c0"),a("a9e3"),a("b680"),a("8cb0")),M=a("20ca"),I=a("1c31"),R={components:{VXETable:m["a"],repairRecord:N["a"]},data:function(){var e=this.$createElement;return{EQUIPMENT_MANAGEMENT_REPORT:c["u"],BTN_TEXT:c["c"],FIXTASK_STATUS:c["A"],deviceName:"",groupOptions:[],lineOptions:[],lineId:"",groupId:"",searchData:[],deviceCode:"",hackReset:!1,dialogVisible:!1,editConfig:{trigger:"click",mode:"row",showStatus:!1},showTable:!0,tableLoadings:!1,outData:[],tableDatas:[],tableColumns_new:[],tableColumns_repair:[{field:"x",title:"故障类型",visible:!0,width:"auto",align:"center"}],tableColumns_Dev:[{field:"factory",title:"工厂",visible:!0,width:"auto",align:"center",formatter:function(e){e.cellValue;var t=e.row;return t.otherX2.factory}},{field:"workshop",title:c["u"].WORKSHOP_NAME,visible:!0,width:"auto",align:"center",formatter:function(e){e.cellValue;var t=e.row;return t.otherX2.workshop}},{field:"productionLine",title:"产线",visible:!0,width:"auto",align:"center",formatter:function(e){e.cellValue;var t=e.row;return t.otherX2.productionLine}},{field:"deviceName",title:c["u"].DEVICE_NAME,visible:!0,width:"auto",align:"center",formatter:function(e){e.cellValue;var t=e.row;return t.otherX2.deviceName},slots:{default:function(t){var a=t.row;t.column;return[e("p",{class:"textClass"},[a.otherX2.deviceName])]}}},{field:"devicePriCode",title:c["u"].EQUIPMENT_NO,visible:!0,width:"auto",align:"center",formatter:function(e){e.cellValue;var t=e.row;return t.otherX2.devicePriCode}},{field:"typeName",title:c["u"].DEVICE_TYPE,visible:!0,width:"auto",align:"center",formatter:function(e){e.cellValue;var t=e.row;return t.otherX2.typeName}}],tablePages:{total:0,currentPage:1,pageSize:10,align:"right",pageSizes:[10,20,50,100,200,500],layouts:["Sizes","PrevJump","PrevPage","Number","NextPage","NextJump","FullJump","Total"],perfect:!0},savedCustomColumns:[],isSettingCustomDialogShow:!1,myChart_line:null,myChart_pie:null,yModel:0,yOptions:[{name:"故障次数",value:"REPAIR_COUNT"},{name:"故障时长(分钟)",value:"REPAIR_TIME"}],xModel:0,xOptions:[{name:"设备名称",value:"DEVICE"},{name:"故障类型",value:"REPAIR_TYPE"}],dateTime:[],pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]},savedSearchCondition:[]}},watch:{groupId:function(e){this.getLine(),this.lineId=""}},created:function(){this.findList()},methods:{refreshTableData:function(e){e&&(this.savedSearchCondition=Object(d["a"])(e)),this.findList()},findList:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var i,n,r,s,o,l,u,h,m,p,g,T;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i=t,t.tableColumns_new=[],"DEVICE"===t.xOptions[t.xModel].value?t.tableColumns_new=Object(d["a"])(t.tableColumns_Dev):"REPAIR_TYPE"===t.xOptions[t.xModel].value&&(t.tableColumns_new=Object(d["a"])(t.tableColumns_repair)),"REPAIR_TIME"===t.yOptions[t.yModel].value?t.tableColumns_new.push({field:"y",title:"故障时长(分钟)",visible:!0,width:"160",align:"center",formatter:function(e){var t=e.cellValue;return Number((t/60).toFixed(0))}}):t.tableColumns_new.push({field:"y",title:"故障次数",visible:!0,width:"160",align:"center"}),t.tableColumns_new.push({field:"otherY",title:"占比(%)",visible:!0,width:"auto",align:"center",formatter:function(e){var t=e.cellValue,a=e.row;return 0===a.y?0:Number((100*t).toFixed(2))}}),a.prev=5,n="".concat(t.moment((new Date).setMonth((new Date).getMonth()-1)).format("YYYY-MM-DD")," 00:00:00"),r="".concat(t.moment(new Date).format("YYYY-MM-DD")," 23:59:59"),void 0!==t.dateTime[0]&&(n=t.dateTime[0],r=t.dateTime[1]),s={conditionJson1:[],operatorGroup:1,conditionJson2:[]},t.savedSearchCondition.length>0&&(s=b["l"].apply(void 0,Object(d["a"])(t.savedSearchCondition))),a.next=13,Object(I["b"])({deviceRepairStatisticalAbscissaEnum:t.xOptions[t.xModel].value,deviceRepairStatisticalIndicatorsEnum:t.yOptions[t.yModel].value,startTime:n,endTime:r},s);case 13:if(o=a.sent,o.code===c["M"].OPERATION_SUCCESS){if(t.tableDatas=o.rows,t.tablePages.total=o.rows.length,t.tableLoadings=!1,l=[],u=[],h=[],"DEVICE"===t.xOptions[t.xModel].value){for(m=0;m<o.rows.length;m++)o.rows[m].y>0&&(p=o.rows[m].y,"REPAIR_TIME"===t.yOptions[t.yModel].value&&(p=Number((o.rows[m].y/60).toFixed(0))),l.push(o.rows[m].otherX1),u.push(p),h.push({name:o.rows[m].otherX1,value:p}));t.draw_line(l,u),t.draw_pie(h)}else if("REPAIR_TYPE"===t.xOptions[t.xModel].value){for(g=0;g<o.rows.length;g++)o.rows[g].y>0&&(T=o.rows[g].y,"REPAIR_TIME"===t.yOptions[t.yModel].value&&(T=Number((o.rows[g].y/60).toFixed(0))),l.push(o.rows[g].x),u.push(T),h.push({name:o.rows[g].x,value:T}));t.draw_line(l,u),t.draw_pie(h)}"export"===e&&i.$refs.xGrid.exportDatax("维修统计报表",o.rows)}else Object(f["c"])(o.message);a.next=20;break;case 17:a.prev=17,a.t0=a["catch"](5),Object(v["a"])(c["N"].NOTIFY,a.t0);case 20:return a.prev=20,a.finish(20);case 22:case"end":return a.stop()}}),a,null,[[5,17,20,22]])})))()},search:function(){this.findList()},reset:function(){this.typeValue="",this.state="",this.groupValue="",this.deviceName="",this.groupId="",this.lineId="",this.getLine(),this.onTablePageChanges(1,10)},exportTable:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.findList("export");case 1:case"end":return t.stop()}}),t)})))()},draw_pie:function(e){this.myChart_pie=this.$echarts.init(this.$refs.echartPie),this.myChart_pie.setOption({color:["#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#9a60b4","#ea7ccc"],legend:{right:"right",top:"middle"},series:[{name:"Nightingale Chart",type:"pie",radius:[50,90],center:["45%","50%"],label:{formatter:"{b}: {@2012} ({d}%)"},data:e}]});var t=Object(M["a"])(this.myChart_pie.resize,300);window.addEventListener("resize",(function(){t()}))},draw_line:function(e,t){this.myChart_line=this.$echarts.init(this.$refs.echartLine),this.myChart_line.setOption({tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},grid:{containLabel:!0,left:"5%",right:"1%"},dataZoom:[{type:"slider",filterMode:"weakFilter",top:"bottom"},{type:"inside",filterMode:"weakFilter"}],xAxis:[{name:this.xOptions[this.xModel].name,type:"category",data:e,axisPointer:{type:"shadow"}}],yAxis:[{type:"value",name:this.yOptions[this.yModel].name,min:0,axisLabel:{}}],series:[{name:this.yOptions[this.yModel].name,type:"bar",barWidth:"30",tooltip:{valueFormatter:function(e){return e}},itemStyle:{normal:{barBorderRadius:[5,5,5,5],color:new this.$echarts.graphic.LinearGradient(0,1,0,0,[{offset:0,color:"#5982F6"},{offset:1,color:"#96ACF8"}],!1)}},data:t}]});var a=Object(M["a"])(this.myChart_line.resize,300);window.addEventListener("resize",(function(){a()}))}}},P=R,L=P,j=(a("671f"),Object(E["a"])(L,_,D,!1,null,"9166036e",null)),A=j.exports,Y=a("94a5"),V=a("99f6"),$={name:"EquipmentManagement",data:function(){var e=this;return{BTN_TEXT:c["c"],CHECK_IMG:!1,active:0,isSearchBoxShow:!1,searchList:[],searchData:[],dateTime:"",isAndon:V["j"],currentView:"",tabs:[{name:c["u"].SPOT_CHECK_STATISTICS,views:""},{name:c["u"].REPAIR_STATISTICS,views:"repairStatistics"},{name:c["u"].MAINTENANCE_STATISTICS,views:"maintenanceStatistics"}],tabs_andon:[{name:c["u"].SPOT_CHECK_STATISTICS,views:"spotCheckStatistics"},{name:c["u"].REPAIR_STATISTICS,views:"repairStatistics"}],pickerOptions:{disabledDate:function(t){return t.getTime()>e.moment("".concat(e.moment(Date.now()).format("YYYY-MM-DD")," 23:59:59")).format("x")}}}},created:function(){var e=this,t=this;if(V["x"]&&this.tab.push({name:c["u"].TOOL_LIFE_STATISTICS,views:"toolLifeStatistics"}),V["C"][localStorage.getItem("companyId")]&&(this.CHECK_IMG=V["C"][localStorage.getItem("companyId")].CHECK_IMG),this.$nextTick((function(){e.CHECK_IMG?(t.tabs[0].views="spotCheckStatisticsRz",t.currentView="spotCheckStatisticsRz"):(t.tabs[0].views="spotCheckStatistics",t.currentView="spotCheckStatistics")})),this.getSpotCheckQueryParameter(),this.getUrlKeyMain("tab",window.location.href)){var a=this.getUrlKeyMain("tab",window.location.href);switch(a){case"1":this.active=0,this.CHECK_IMG?this.currentView="spotCheckStatisticsRz":this.currentView="spotCheckStatistics";break;case"2":this.active=1,this.currentView="repairStatistics";break;case"3":this.active=2,this.currentView="maintenanceStatistics";break;case"4":this.active=3,this.currentView="toolLifeStatistics";break}}},methods:{getUrlKeyMain:function(e,t){return decodeURIComponent((new RegExp("[?|&]"+e+"=([^&;]+?)(&|#|;|$)").exec(t)||[,""])[1].replace(/\+/g,"%20"))||null},buttonClickEvent:function(e){this["".concat(e)]()},toggle:function(e,t){this.active=e,this.currentView=t,0===this.active?this.getSpotCheckQueryParameter():(1===this.active||this.active,this.isSearchBoxShow=!1)},complexReset:function(){0===this.active&&(this.dateTime=[])},refresh:function(){0===this.active?this.$refs.spotCheckStatistics.findList():1===this.active?this.$refs.repairStatistics.findList():2===this.active?this.$refs.maintenanceStatistics.findList():this.$refs.toolLifeStatistics.findList()},exportTable:function(){0===this.active?this.CHECK_IMG?this.$refs.spotCheckStatisticsRz.exportTable():this.$refs.spotCheckStatistics.exportTable():1===this.active?this.$refs.repairStatistics.exportTable():2===this.active?this.$refs.maintenanceStatistics.exportTable():this.$refs.toolLifeStatistics.exportTable()},getSpotCheckQueryParameter:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(T["a"])();case 3:a=t.sent,a.code===c["M"].OPERATION_SUCCESS?e.searchList=a.rows:Object(f["c"])(a.message),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),Object(v["a"])(c["N"].NOTIFY,t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},GetListQueryParameterMaintenance:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(T["d"])({});case 3:a=t.sent,a.code===c["M"].OPERATION_SUCCESS?e.searchList=a.rows:Object(f["c"])(a.message),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),Object(v["a"])(c["N"].NOTIFY,t.t0);case 10:return t.prev=10,t.finish(10);case 12:case"end":return t.stop()}}),t,null,[[0,7,10,12]])})))()},GetListQueryParameterRepair:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(T["e"])({});case 3:a=t.sent,a.code===c["M"].OPERATION_SUCCESS?e.searchList=a.rows:Object(f["c"])(a.message),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),Object(v["a"])(c["N"].NOTIFY,t.t0);case 10:return t.prev=10,t.finish(10);case 12:case"end":return t.stop()}}),t,null,[[0,7,10,12]])})))()},GetListQueryParameterTool:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(T["f"])({});case 3:a=t.sent,a.code===c["M"].OPERATION_SUCCESS?e.searchList=a.rows:Object(f["c"])(a.message),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),Object(v["a"])(c["N"].NOTIFY,t.t0);case 10:return t.prev=10,t.finish(10);case 12:case"end":return t.stop()}}),t,null,[[0,7,10,12]])})))()},showSearchCard:function(){this.isSearchBoxShow=!this.isSearchBoxShow},findTable:function(e,t,a){0===this.active?this.CHECK_IMG?this.$refs.spotCheckStatisticsRz.complexSearch(e,t,a,this.dateTime):this.$refs.spotCheckStatistics.complexSearch(e,t,a,this.dateTime):1===this.active?this.$refs.repairStatistics.findTable(e,t,a):2===this.active?this.$refs.maintenanceStatistics.findTable(e,t,a):this.$refs.toolLifeStatistics.findTable(e,t,a)}},components:{spotCheckStatisticsRz:y,HeaderTitle:s["a"],SearchBox:p["a"],HeadOperationItem:o["a"],spotCheckStatistics:O["a"],maintenanceStatistics:k["a"],repairStatistics:A,toolLifeStatistics:Y["a"]}},B=$,z=B,X=(a("de4a"),Object(E["a"])(z,i,n,!1,null,"6faee8b6",null));t["default"]=X.exports},"32db":function(e,t,a){},"671f":function(e,t,a){"use strict";var i=a("70ca"),n=a.n(i);n.a},"70b1":function(e,t,a){},"70ca":function(e,t,a){},a8c9:function(e,t,a){"use strict";var i=a("70b1"),n=a.n(i);n.a},de4a:function(e,t,a){"use strict";var i=a("32db"),n=a.n(i);n.a}}]);
//# sourceMappingURL=chunk-771dadf0.b96addec.js.map