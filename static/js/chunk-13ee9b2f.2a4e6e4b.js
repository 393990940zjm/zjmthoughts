(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13ee9b2f"],{"415d":function(e,t,a){},6464:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("5c96");function i(e,t){n["Notification"].error({title:e,message:t,duration:2e3,position:"bottom-right",showClose:!0})}},"6dcf":function(e,t,a){"use strict";var n=a("abd0"),i=a.n(n);i.a},7319:function(e,t,a){"use strict";var n=a("cece"),i=a.n(n);i.a},"78b3":function(e,t,a){"use strict";var n=a("415d"),i=a.n(n);i.a},"7a15":function(e,t,a){},"85a8":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header"},[a("div",{staticClass:"header-left-border"},[a("div",[a("span",{staticClass:"head-title-span"},[e._v(e._s(e.title))])]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.flag,expression:"flag"}],staticClass:"head-search",on:{click:e.onSearch}},[a("i",{staticClass:"icon-search"}),a("span",{staticClass:"search-span"},[e._v("搜索")])]),a("div",[e._t("head-search")],2)]),a("div",[e._t("head-operation")],2)])},i=[],r=(a("b0c0"),{name:"HeaderTitle",props:{titleName:{type:String,default:""},flag:{type:Boolean,default:!1}},data:function(){return{title:""}},methods:{getTitle:function(){""===this.titleName?this.title=this.$route.name:this.title=this.titleName},onSearch:function(){this.$emit("searchButtonClick")}},watch:{titleName:function(e,t){this.getTitle()}},created:function(){this.getTitle()},components:{}}),s=r,o=(a("af73"),a("2877")),c=Object(o["a"])(s,n,i,!1,null,"d1fc4504",null);t["a"]=c.exports},a00b:function(e,t,a){"use strict";var n=a("a813"),i=a.n(n);i.a},a5fe:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",[n("div",{staticClass:"main"},[n("el-header",[n("header-buttons",{attrs:{showRefresh:!0,cssType:"1"},on:{buttonClickEvent:e.buttonClickEvent}})],1),n("el-main",[n("div",{staticClass:"elMain"},[n("div",{staticClass:"echatsContent"},[e.showEchartsDiv1?n("div",{staticClass:"echatsDiv echatsDiv1"},[n("img",{attrs:{src:a("52ef")},on:{click:function(t){return e.closeEcharts(1)}}}),n("div",{attrs:{id:"echats1"}})]):e._e(),e.showEchartsDiv2?n("div",{staticClass:"echatsDiv echatsDiv2"},[n("img",{attrs:{src:a("52ef")},on:{click:function(t){return e.closeEcharts(2)}}}),n("div",{attrs:{id:"echats2"}})]):e._e(),e.showEchartsDiv3?n("div",{staticClass:"echatsDiv echatsDiv3"},[n("img",{attrs:{src:a("52ef")},on:{click:function(t){return e.closeEcharts(3)}}}),n("div",{attrs:{id:"echats3"}})]):e._e()]),n("div",{attrs:{id:"tabs"}},[n("ul",e._l(e.tabs,(function(t,a){return n("li",{key:a,class:{active:e.active==a},on:{click:function(n){return e.toggle(a,t.views)}}},[e._v(" "+e._s(t.name)+" ")])})),0),n("ul",{staticStyle:{float:"right"}},e._l(e.tabss,(function(t,a){return n("li",{key:a,class:{active:e.activeN==a},on:{click:function(n){return e.togglex(a,t.views)}}},[e._v(" "+e._s(t.name)+" ")])})),0)]),n("div",[n(e.currentView,{ref:e.currentView,tag:"component",attrs:{type:e.type,conditionArr1:e.conditionArr1,conditionArr2:e.conditionArr2,groupOperator:e.groupOperator,savedSearchCondition:e.savedSearchCondition,currenType:e.currenType},on:{alertEchart:e.alertEchart}})],1)])])],1)])},i=[],r=(a("a9e3"),a("b680"),a("96cf"),a("1da1")),s=a("2909"),o=a("85a8"),c=a("5861"),l=a("582a"),u=a("3fa5"),d=a("6464"),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-main",[a("VXETable",{ref:"xGrid",attrs:{id:"table",height:e.$options.filters.getTableHeight(240),tableName:"",tableLoading:e.tableLoadings,tableDatas:e.tableDatas,tableColumns:e.tableColumns,tablePage:e.tablePages,"edit-config":e.editConfig},on:{onTablePageChange:e.onTablePageChanges}})],1)},f=[],g=a("cf46"),p=a("b775"),m=function(e,t){return Object(p["k"])("webProductionStatistics/getAllGroupRealProductionStatistics.action?",e,t)},b=function(e,t){return Object(p["k"])("webProductionStatistics/getAllGroupHistoryProductionStatistics.action?",e,t)},v=function(e,t){return Object(p["k"])("webProductionStatistics/getAllGroupProductionStatistics.action?",e,t)},T=a("f82c"),y={components:{VXETable:g["a"]},props:{type:Number,conditionArr1:{type:Array,default:function(){return[]}},conditionArr2:{type:Array,default:function(){return[]}},savedSearchCondition:{type:Array,default:function(){return[]}},groupOperator:Number,currenType:String},data:function(){return{EQUIPMENT_MONITORING:l["v"],BTN_TEXT:l["c"],searchData:{conditionJson1:[]},dateTime:"",editConfig:{trigger:"click",mode:"row",showStatus:!1},showTable:!0,tableLoadings:!1,outData:[],tableDatas:[],tableColumns:[{field:"groupName",title:"分组名称",width:"",align:"center"},{field:"todayValue",title:"当日"+this.$store.state.pageInfo.pageConfigInfo.yieldKey,width:"",align:"center"},{field:"recentSevenDayProduction",title:"近7日"+this.$store.state.pageInfo.pageConfigInfo.yieldKey,width:"",align:"center"},{field:"avgRecentSevenDayProduction",title:"近7日日平均"+this.$store.state.pageInfo.pageConfigInfo.yieldKey,width:"",align:"center"},{field:"recentThirtyDayProduction",title:"近30日"+this.$store.state.pageInfo.pageConfigInfo.yieldKey,width:"",align:"center"},{field:"avgRecentThirtyDayProduction",title:"近30日平均"+this.$store.state.pageInfo.pageConfigInfo.yieldKey,width:"",align:"center"}],tablePages:{total:0,currentPage:1,pageSize:10,align:"right",pageSizes:[10,20,50,100,200,500],layouts:["Sizes","PrevJump","PrevPage","Number","NextPage","NextJump","FullJump","Total"],perfect:!0},pickerOptions:{disabledDate:function(e){return e.getTime()>Date.now()}}}},watch:{},created:function(){this.findList()},methods:{alertEchart:function(e,t){this.$emit("alertEchart",e,t)},findList:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={conditionJson1:[],operatorGroup:1,conditionJson2:[]},e.savedSearchCondition.length>0&&(a=T["l"].apply(void 0,Object(s["a"])(e.savedSearchCondition))),t.prev=2,e.tableLoadings=!0,t.next=6,m({size:e.tablePages.pageSize,current:e.tablePages.currentPage,deviceGroupTypeEnum:e.currenType},a);case 6:n=t.sent,n.code===l["M"].OPERATION_SUCCESS?(e.tableDatas=n.rows,e.tablePages.total=n.total,e.tableLoadings=!1):Object(u["c"])(n.message),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](2),Object(d["a"])(l["N"].NOTIFY,t.t0);case 13:return t.prev=13,t.finish(13);case 15:case"end":return t.stop()}}),t,null,[[2,10,13,15]])})))()},onTablePageChanges:function(e,t){this.tablePages.currentPage=e,this.tablePages.pageSize=t,this.findList()},exportTable:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={conditionJson1:[],operatorGroup:1,conditionJson2:[]},e.savedSearchCondition.length>0&&(a=T["l"].apply(void 0,Object(s["a"])(e.savedSearchCondition))),t.prev=2,e.tableLoadings=!0,t.next=6,m({size:99999999,current:e.tablePages.currentPage,deviceGroupTypeEnum:e.currenType},a);case 6:n=t.sent,n.code===l["M"].OPERATION_SUCCESS?(e.$refs.xGrid.exportDatax(e.$store.state.pageInfo.pageConfigInfo.yieldKey+"报表【实时】",n.rows),e.tableLoadings=!1):Object(u["c"])(n.message),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](2),Object(d["a"])(l["N"].NOTIFY,t.t0);case 13:return t.prev=13,t.finish(13);case 15:case"end":return t.stop()}}),t,null,[[2,10,13,15]])})))()}}},w=y,O=(a("78b3"),a("2877")),C=Object(O["a"])(w,h,f,!1,null,"1a52d44c",null),S=C.exports,P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-main",[a("div",{staticClass:"searchDiv"},[a("div",[a("span",[e._v(e._s(e.EQUIPMENT_MONITORING.DATE_RANGE)+":")]),a("el-date-picker",{staticClass:"dateTime",attrs:{type:"daterange",size:"mini","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd HH:mm:ss","picker-options":e.pickerOptions},model:{value:e.dateTime,callback:function(t){e.dateTime=t},expression:"dateTime"}})],1),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.findList}},[e._v(e._s(e.BTN_TEXT.SEARCH))])],1),a("VXETable",{ref:"xGrid",attrs:{id:"table",height:e.$options.filters.getTableHeight(280),tableName:"",tableLoading:e.tableLoadings,tableDatas:e.tableDatas,tableColumns:e.tableColumns,tablePage:e.tablePages,"edit-config":e.editConfig},on:{onTablePageChange:e.onTablePageChanges}})],1)},D=[],x={components:{VXETable:g["a"]},props:{type:Number,conditionArr1:{type:Array,default:function(){return[]}},conditionArr2:{type:Array,default:function(){return[]}},savedSearchCondition:{type:Array,default:function(){return[]}},groupOperator:Number,currenType:String},data:function(){return{EQUIPMENT_MONITORING:l["v"],BTN_TEXT:l["c"],dateTime:"",groupId:"",lineId:"",editConfig:{trigger:"click",mode:"row",showStatus:!1},showTable:!0,tableLoadings:!1,outData:[],tableDatas:[],tableColumns:[{field:"groupName",title:"分组名称",width:"",align:"center"},{field:"recordTime",title:"日期",width:"",align:"center"},{field:"recordValue",title:this.$store.state.pageInfo.pageConfigInfo.yieldKey,width:"",align:"center"}],tablePages:{total:0,currentPage:1,pageSize:10,align:"right",pageSizes:[10,20,50,100,200,500],layouts:["Sizes","PrevJump","PrevPage","Number","NextPage","NextJump","FullJump","Total"],perfect:!0},pickerOptions:{disabledDate:function(e){return e.getTime()>Date.now()}}}},watch:{},created:function(){var e=new Date;this.dateTime=["".concat(this.moment(e.getTime()-864e5).format("YYYY-MM-DD")," 00:00:00"),"".concat(this.moment(e.getTime()-864e5).format("YYYY-MM-DD")," 23:59:59")],this.findList()},methods:{findList:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,n,i,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={conditionJson1:[],operatorGroup:1,conditionJson2:[]},e.savedSearchCondition.length>0&&(a=T["l"].apply(void 0,Object(s["a"])(e.savedSearchCondition))),e.dateTime||(n=new Date,e.dateTime=["".concat(e.moment(n.getTime()-864e5).format("YYYY-MM-DD")," 00:00:00"),"".concat(e.moment(n.getTime()-864e5).format("YYYY-MM-DD")," 23:59:59")]),i=e.dateTime[0],r=e.dateTime[1],t.prev=5,e.tableLoadings=!0,t.next=9,b({size:e.tablePages.pageSize,current:e.tablePages.currentPage,startTime:i,endTime:r,deviceGroupTypeEnum:e.currenType},a);case 9:o=t.sent,o.code===l["M"].OPERATION_SUCCESS?(e.tableDatas=o.rows,e.tablePages.total=o.total,e.tableLoadings=!1):Object(u["c"])(o.message),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](5),Object(d["a"])(l["N"].NOTIFY,t.t0);case 16:return t.prev=16,t.finish(16);case 18:case"end":return t.stop()}}),t,null,[[5,13,16,18]])})))()},onTablePageChanges:function(e,t){this.tablePages.currentPage=e,this.tablePages.pageSize=t,this.findList()},reset:function(){},exportTable:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,n,i,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={conditionJson1:[],operatorGroup:1,conditionJson2:[]},e.savedSearchCondition.length>0&&(a=T["l"].apply(void 0,Object(s["a"])(e.savedSearchCondition))),e.dateTime||(n=new Date,e.dateTime=["".concat(e.moment(n.getTime()-864e5).format("YYYY-MM-DD")," 00:00:00"),"".concat(e.moment(n.getTime()-864e5).format("YYYY-MM-DD")," 23:59:59")]),i=e.dateTime[0],r=e.dateTime[1],t.prev=5,e.tableLoadings=!0,t.next=9,b({size:99999999,current:e.tablePages.currentPage,startTime:i,endTime:r,deviceGroupTypeEnum:e.currenType},a);case 9:o=t.sent,o.code===l["M"].OPERATION_SUCCESS?(e.$refs.xGrid.exportDatax(e.$store.state.pageInfo.pageConfigInfo.yieldKey+"报表【历史】",o.rows),e.tableLoadings=!1):Object(u["c"])(o.message),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](5),Object(d["a"])(l["N"].NOTIFY,t.t0);case 16:return t.prev=16,t.finish(16);case 18:case"end":return t.stop()}}),t,null,[[5,13,16,18]])})))()}}},E=x,N=(a("7319"),Object(O["a"])(E,P,D,!1,null,"66af08b6",null)),I=N.exports,k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-main",[a("div",{staticClass:"searchDiv"},[a("div",[a("span",[e._v(e._s(e.EQUIPMENT_MONITORING.DATE_RANGE)+":")]),a("el-date-picker",{staticClass:"dateTime",attrs:{type:"datetimerange",size:"mini","start-placeholder":"开始日期","end-placeholder":"结束日期",format:"yyyy-MM-dd HH:mm:ss","value-format":"yyyy-MM-dd HH:mm:ss","picker-options":e.pickerOptions},model:{value:e.dateTime,callback:function(t){e.dateTime=t},expression:"dateTime"}}),a("span",[e._v("班次范围")]),a("el-select",{attrs:{size:"mini",placeholder:"请选择"},model:{value:e.shiftData,callback:function(t){e.shiftData=t},expression:"shiftData"}},e._l(e.shiftOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.search}},[e._v(e._s(e.BTN_TEXT.SEARCH))])],1),a("VXETable",{ref:"xGrid",attrs:{id:"table",height:e.$options.filters.getTableHeight(280),tableName:"",tableLoading:e.tableLoadings,tableDatas:e.tableDatas,tableColumns:e.tableColumns,tablePage:e.tablePages,"edit-config":e.editConfig},on:{onTablePageChange:e.onTablePageChanges}})],1)},_=[],Y=(a("ac1f"),a("1276"),a("e9bc")),M={components:{VXETable:g["a"]},props:{type:Number,conditionArr1:{type:Array,default:function(){return[]}},conditionArr2:{type:Array,default:function(){return[]}},savedSearchCondition:{type:Array,default:function(){return[]}},groupOperator:Number,currenType:String},data:function(){return{EQUIPMENT_MONITORING:l["v"],BTN_TEXT:l["c"],dateTime:"",editConfig:{trigger:"click",mode:"row",showStatus:!1},showTable:!0,tableLoadings:!1,outData:[],tableDatas:[],tableColumns:[{field:"groupName",title:"分组名称",width:"",align:"center"},{field:"recordValue",title:this.$store.state.pageInfo.pageConfigInfo.yieldKey,width:"",align:"center"}],tablePages:{total:0,currentPage:1,pageSize:10,align:"right",pageSizes:[10,20,50,100,200,500],layouts:["Sizes","PrevJump","PrevPage","Number","NextPage","NextJump","FullJump","Total"],perfect:!0},pickerOptions:{disabledDate:function(e){return e.getTime()>Date.now()}},shiftOptions:[],shiftData:null}},watch:{},created:function(){this.getSystemShift(),this.dateTime=["".concat(this.moment(new Date).format("YYYY-MM-DD")," 00:00:00"),"".concat(this.moment(new Date).format("YYYY-MM-DD")," 23:59:59")],this.findList()},methods:{findList:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,n,i,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={conditionJson1:[],operatorGroup:1,conditionJson2:[]},e.savedSearchCondition.length>0&&(a=T["l"].apply(void 0,Object(s["a"])(e.savedSearchCondition))),e.dateTime||(e.dateTime=["".concat(e.moment(new Date).format("YYYY-MM-DD")," 00:00:00"),"".concat(e.moment(new Date).format("YYYY-MM-DD")," 23:59:59")]),n=e.dateTime[0],i=e.dateTime[1],r={size:e.tablePages.pageSize,current:e.tablePages.currentPage,startTime:n,endTime:i,deviceGroupTypeEnum:e.currenType},null!==e.shiftData&&(r.shiftStart=e.shiftOptions[e.shiftData].shiftStart,r.shiftEnd=e.shiftOptions[e.shiftData].shiftEnd),t.prev=7,e.tableLoadings=!0,t.next=11,v(r,a);case 11:o=t.sent,o.code===l["M"].OPERATION_SUCCESS?(e.tableDatas=o.rows,e.tablePages.total=o.total,e.tableLoadings=!1):Object(u["c"])(o.message),t.next=18;break;case 15:t.prev=15,t.t0=t["catch"](7),Object(d["a"])(l["N"].NOTIFY,t.t0);case 18:return t.prev=18,t.finish(18);case 20:case"end":return t.stop()}}),t,null,[[7,15,18,20]])})))()},onTablePageChanges:function(e,t){this.tablePages.currentPage=e,this.tablePages.pageSize=t,this.findList()},search:function(){this.onTablePageChanges(1,10)},reset:function(){this.groupId="",this.lineId="",this.deviceName="",this.dateTime="",this.onTablePageChanges(1,10)},exportTable:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,n,i,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={conditionJson1:[],operatorGroup:1,conditionJson2:[]},e.savedSearchCondition.length>0&&(a=T["l"].apply(void 0,Object(s["a"])(e.savedSearchCondition))),e.dateTime||(e.dateTime=["".concat(e.moment(new Date).format("YYYY-MM-DD")," 00:00:00"),"".concat(e.moment(new Date).format("YYYY-MM-DD")," 23:59:59")]),n=e.dateTime[0],i=e.dateTime[1],r={size:99999999,current:e.tablePages.currentPage,startTime:n,endTime:i,deviceGroupTypeEnum:e.currenType},null!==e.shiftData&&(r.shiftStart=e.shiftOptions[e.shiftData].shiftStart,r.shiftEnd=e.shiftOptions[e.shiftData].shiftEnd),t.prev=7,e.tableLoadings=!0,t.next=11,v(r,a);case 11:o=t.sent,o.code===l["M"].OPERATION_SUCCESS?(e.$refs.xGrid.exportDatax(e.$store.state.pageInfo.pageConfigInfo.yieldKey+"报表【历史总计】",o.rows),e.tableLoadings=!1):Object(u["c"])(o.message),t.next=18;break;case 15:t.prev=15,t.t0=t["catch"](7),Object(d["a"])(l["N"].NOTIFY,t.t0);case 18:return t.prev=18,t.finish(18);case 20:case"end":return t.stop()}}),t,null,[[7,15,18,20]])})))()},getSystemShift:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,n,i,r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(Y["g"])({configurationTypeEnum:"SHIFT_TIME"},{});case 3:if(a=t.sent,a.code===l["M"].OPERATION_SUCCESS){if(console.log(a),a.rows.processConfiguration)for(r in n=JSON.parse(a.rows.processConfiguration),e.shiftOptions=[],e.shiftData=null,i=0,n)s={value:i,label:r+" "+n[r],shiftStart:n[r].split("-")[0],shiftEnd:n[r].split("-")[1]},++i,e.shiftOptions.push(s)}else Object(u["c"])(a.message);t.next=9;break;case 7:t.prev=7,t.t0=t["catch"](0);case 9:return t.prev=9,t.finish(9);case 11:case"end":return t.stop()}}),t,null,[[0,7,9,11]])})))()}}},j=M,A=(a("a00b"),Object(O["a"])(j,k,_,!1,null,"40df2746",null)),L=A.exports,R=a("967e"),$={name:"tabs",data:function(){return{searchList:[],isSearchBoxShow:!1,BTN_TEXT:l["c"],active:0,activeN:0,type:2,showEchartsDiv1:!1,showEchartsDiv2:!1,showEchartsDiv3:!1,conditionArr1:[],groupOperator:0,conditionArr2:[],currentView:"newPage",currenType:"COMPANY",tabs:[{name:"实时",views:"newPage"},{name:"历史每日",views:"historyPage"},{name:"历史总计",views:"historyTotalPage"}],tabss:[{name:"全厂",views:"COMPANY"},{name:"车间",views:"WORK_SHOP"},{name:"产线",views:"PRODUCTION_LINE"}],savedSearchCondition:[]}},created:function(){this.getSearchBoxData()},methods:{buttonClickEvent:function(e){this["".concat(e)]()},refresh:function(){this.findList()},refreshTableData:function(e){e&&(this.savedSearchCondition=Object(s["a"])(e)),this.findList()},findList:function(){var e=this;this.$nextTick((function(){0===e.active?e.$refs.newPage.findList():1===e.active?e.$refs.historyPage.findList():2===e.active&&e.$refs.historyTotalPage.findList()}))},findTable:function(e,t,a){var n=this;this.conditionArr1=e,this.groupOperator=t,this.conditionArr2=a,this.$nextTick((function(){0===n.active?n.$refs.newPage.findList():1===n.active?n.$refs.historyPage.findList():2===n.active&&n.$refs.historyTotalPage.findList()}))},getSearchBoxData:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(R["c"])();case 3:a=t.sent,a.code===l["M"].OPERATION_SUCCESS?e.searchList=a.rows:Object(u["c"])(a.message),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),Object(d["a"])(l["N"].NOTIFY,t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},complexReset:function(){this.conditionArr1=[],this.groupOperator=0,this.conditionArr2=[]},showSearchCard:function(){this.isSearchBoxShow=!this.isSearchBoxShow},alertEchart:function(e,t){var a=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var i,r,s,o,c,h,f,g,p,m,b;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(1!==e){n.next=14;break}return a.showEchartsDiv1=!0,n.prev=2,n.next=5,Object(R["f"])({deviceCode:t.deviceCode,recentCount:10});case 5:if(i=n.sent,i.code===l["M"].OPERATION_SUCCESS){for(r=[],s=0;s<i.rows.length;s++)r.push(Number((i.rows[s].productionCycle/1e3).toFixed(2)));a.showEcharts("echats"+e,t.deviceName+"--近10次加工平均生产周期",[1,2,3,4,5,6,7,8,9,10],r)}else Object(u["c"])(i.message);n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](2),Object(d["a"])(l["N"].NOTIFY,n.t0);case 12:n.next=40;break;case 14:if(2!==e){n.next=28;break}return a.showEchartsDiv2=!0,n.prev=16,n.next=19,Object(R["e"])({deviceCode:t.deviceCode,recentDay:7});case 19:if(o=n.sent,o.code===l["M"].OPERATION_SUCCESS){for(c=[],h=[],f=0;f<o.rows.length;f++)c.push(o.rows[f].recordTime.substring(0,10)),h.push(o.rows[f].dayValue);a.showEcharts("echats"+e,t.deviceName+"--近7日日平均"+a.$store.state.pageInfo.pageConfigInfo.yieldKey,c,h)}else Object(u["c"])(o.message);n.next=26;break;case 23:n.prev=23,n.t1=n["catch"](16),Object(d["a"])(l["N"].NOTIFY,n.t1);case 26:n.next=40;break;case 28:if(3!==e){n.next=40;break}return a.showEchartsDiv3=!0,n.prev=30,n.next=33,Object(R["e"])({deviceCode:t.deviceCode,recentDay:30});case 33:if(g=n.sent,g.code===l["M"].OPERATION_SUCCESS){for(p=[],m=[],b=0;b<g.rows.length;b++)p.push(g.rows[b].recordTime.substring(0,10)),m.push(g.rows[b].dayValue);a.showEcharts("echats"+e,t.deviceName+"--近30日日平均"+a.$store.state.pageInfo.pageConfigInfo.yieldKey,p,m)}else Object(u["c"])(g.message);n.next=40;break;case 37:n.prev=37,n.t2=n["catch"](30),Object(d["a"])(l["N"].NOTIFY,n.t2);case 40:case"end":return n.stop()}}),n,null,[[2,9],[16,23],[30,37]])})))()},toggle:function(e,t){this.active=e,this.currentView=t},togglex:function(e,t){var a=this;this.activeN=e,this.currenType=t,this.$nextTick((function(){a.$refs[a.currentView].onTablePageChanges(1,10)}))},exportTable:function(){0===this.active?this.$refs.newPage.exportTable():1===this.active?this.$refs.historyPage.exportTable():2===this.active&&this.$refs.historyTotalPage.exportTable()},closeEcharts:function(e){1===e?this.showEchartsDiv1=!1:2===e?this.showEchartsDiv2=!1:3===e&&(this.showEchartsDiv3=!1)},showEcharts:function(e,t,a,n,i){var r=this.$echarts.init(document.getElementById(e));r.setOption({title:{text:t,y:"20px",x:"center",textStyle:{color:"#000",fontSize:20,fontWeight:500}},color:["#1b89f7"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"6%",bottom:"6%",containLabel:!0},xAxis:[{type:"category",data:a,axisTick:{alignWithLabel:!0},axisLine:{symbol:["none","arrow"]},name:"加工数"}],yAxis:[{type:"value",name:"周期（秒）",splitLine:{show:!1},axisLine:{symbol:["none","arrow"]}}],dataZoom:[{show:i,height:15,xAxisIndex:[0],bottom:0,start:0,end:100,handleIcon:"path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",handleSize:"110%",handleStyle:{color:"#d3dee5"},textStyle:{color:"#000"},borderColor:"#90979c"},{type:"inside",show:!0,height:15,start:1,end:35}],series:[{name:"周期",type:"bar",barMaxWidth:"20px",label:{normal:{show:!0,position:"outside"}},data:n}]})}},components:{HeaderTitle:o["a"],HeadOperationItem:c["a"],newPage:S,historyPage:I,historyTotalPage:L}},z=$,G=(a("6dcf"),Object(O["a"])(z,n,i,!1,null,"3df9a40a",null));t["default"]=G.exports},a813:function(e,t,a){},abd0:function(e,t,a){},af73:function(e,t,a){"use strict";var n=a("7a15"),i=a.n(n);i.a},cece:function(e,t,a){}}]);
//# sourceMappingURL=chunk-13ee9b2f.2a4e6e4b.js.map