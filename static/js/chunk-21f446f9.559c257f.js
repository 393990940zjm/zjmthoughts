(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21f446f9"],{"0102":function(e,t,a){},"6a12":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",[a("div",{staticClass:"main"},[a("el-header",[a("header-buttons",{attrs:{showRefresh:!0,cssType:"1"},on:{buttonClickEvent:e.buttonClickEvent}})],1),a("el-main",[a("Div",[a("div",[a(e.currentView,{ref:e.currentView,tag:"component"})],1)])],1)],1)])},r=[],n=(a("4d63"),a("ac1f"),a("25f0"),a("5319"),a("96cf"),a("1da1")),s=a("85a8"),c=a("5861"),o=a("582a"),l=a("616f"),u=a("083d"),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-main",[a("div",{staticClass:"searchDiv"},[a("div",[a("span",[e._v("时间范围:")]),a("el-date-picker",{staticClass:"dateTime",attrs:{type:"datetimerange",align:"left",size:"mini","value-format":"yyyy-MM-dd HH:mm:ss","range-separator":e.BTN_TEXT.TO,"start-placeholder":e.BTN_TEXT.STARTTIME,"end-placeholder":e.BTN_TEXT.ENDTIME,"picker-options":e.pickerOptions,mergeArr:e.mergeArr},model:{value:e.dateTime,callback:function(t){e.dateTime=t},expression:"dateTime"}})],1),a("div",[a("span",[e._v("任务类型:")]),a("el-select",{attrs:{placeholder:"请选择",size:"mini"},model:{value:e.yModel,callback:function(t){e.yModel=t},expression:"yModel"}},e._l(e.yOptions,(function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:t}})})),1)],1),a("div",[a("span",[e._v("维度:")]),a("el-select",{attrs:{placeholder:"请选择",size:"mini"},model:{value:e.xModel,callback:function(t){e.xModel=t},expression:"xModel"}},e._l(e.xOptions,(function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:t}})})),1)],1),a("Div",[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.search}},[e._v(e._s(e.BTN_TEXT.SEARCH))])],1)],1),a("VXETable",{ref:"xGrid",attrs:{id:"table",height:e.$options.filters.getTableHeight(200),tableName:"",tableLoading:e.tableLoadings,tableDatas:e.tableDatas,tableColumns:e.tableColumns_new,tablePage:e.tablePages,"edit-config":e.editConfig}})],1)},m=[],f=a("5530"),p=a("2909"),g=a("cf46"),v=a("3fa5"),h=a("6464"),b=a("8cb0"),w=a("cd122"),T={components:{VXETable:g["a"],repairRecord:b["a"]},data:function(){return{EQUIPMENT_MANAGEMENT_REPORT:o["u"],BTN_TEXT:o["c"],FIXTASK_STATUS:o["A"],deviceName:"",groupOptions:[],lineOptions:[],lineId:"",groupId:"",searchData:[],deviceCode:"",hackReset:!1,dialogVisible:!1,editConfig:{trigger:"click",mode:"row",showStatus:!1},showTable:!0,tableLoadings:!1,outData:[],mergeArr:[],tableDatas:[],tableColumns_new:[],tableColumns_parts:[{field:"materialsName",title:"备件名称",visible:!0,width:"auto",align:"center",formatter:function(e){e.cellValue;var t=e.row;return t.partsPickingMaterials.materialsName}},{field:"materialsCode",title:"备件编码",visible:!0,width:"auto",align:"center",formatter:function(e){e.cellValue;var t=e.row;return t.partsPickingMaterials.materialsCode}},{field:"unit",title:"单位",visible:!0,width:"auto",align:"center",formatter:function(e){e.cellValue;var t=e.row;return t.partsPickingMaterials.unit}},{field:"realCount",title:"数量",visible:!0,width:"auto",align:"center",formatter:function(e){e.cellValue;var t=e.row;return t.partsPickingMaterials.realCount}}],tableColumns_receipt:[{field:"documentNumber",title:"单据编号",visible:!0,width:"auto",align:"center"},{field:"preparedDate",title:"制单时间",visible:!0,width:"auto",align:"center"},{field:"preparedBy",title:"制单人",visible:!0,width:"auto",align:"center"},{field:"materialsName",title:"备件名称",visible:!0,width:"auto",align:"center",formatter:function(e){e.cellValue;var t=e.row;return t.partsPicking.materialsName}},{field:"materialsCode",title:"备件编码",visible:!0,width:"auto",align:"center",formatter:function(e){e.cellValue;var t=e.row;return t.partsPicking.materialsCode}},{field:"unit",title:"单位",visible:!0,width:"auto",align:"center",formatter:function(e){e.cellValue;var t=e.row;return t.partsPicking.unit}},{field:"realCount",title:"数量",visible:!0,width:"auto",align:"center",formatter:function(e){e.cellValue;var t=e.row;return t.partsPicking.realCount}}],tableColumns_device:[{field:"deviceName",title:"设备名称",visible:!0,width:"auto",align:"center"},{field:"materialsName",title:"备件名称",visible:!0,width:"auto",align:"center",formatter:function(e){e.cellValue;var t=e.row;return t.deviceVo.materialsName}},{field:"materialsCode",title:"备件编码",visible:!0,width:"auto",align:"center",formatter:function(e){e.cellValue;var t=e.row;return t.deviceVo.materialsCode}},{field:"unit",title:"单位",visible:!0,width:"auto",align:"center",formatter:function(e){e.cellValue;var t=e.row;return t.deviceVo.unit}},{field:"realCount",title:"数量",visible:!0,width:"auto",align:"center",formatter:function(e){e.cellValue;var t=e.row;return t.deviceVo.realCount}}],tablePages:{total:0,currentPage:1,pageSize:10,align:"right",pageSizes:[10,20,50,100,200,500],layouts:["Sizes","PrevJump","PrevPage","Number","NextPage","NextJump","FullJump","Total"],perfect:!0},savedCustomColumns:[],isSettingCustomDialogShow:!1,myChart_line:null,myChart_pie:null,yModel:0,yOptions:[{name:"全部",value:""},{name:"维修",value:"REPAIR"},{name:"保养",value:"MAINTAIN"}],xModel:0,xOptions:[{name:"备件",value:"PARTS"},{name:"单据",value:"RECEIPT"},{name:"设备",value:"DEVICE"}],dateTime:[],pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]},savedSearchCondition:[]}},watch:{groupId:function(e){this.getLine(),this.lineId=""}},mounted:function(){this.findList()},created:function(){},methods:{refreshTableData:function(e){e&&(this.savedSearchCondition=Object(p["a"])(e)),this.findList()},findList:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var i,r,n,s,c,l,u,d,m,g;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return console.log(e),i=t,t.tableColumns_new=[],"PARTS"===t.xOptions[t.xModel].value?(t.tableColumns_new=Object(p["a"])(t.tableColumns_parts),t.$refs.xGrid.mergeArr=[]):"RECEIPT"===t.xOptions[t.xModel].value?(t.tableColumns_new=Object(p["a"])(t.tableColumns_receipt),t.$refs.xGrid.mergeArr=["documentNumber","preparedDate","preparedBy"]):"DEVICE"===t.xOptions[t.xModel].value&&(t.tableColumns_new=Object(p["a"])(t.tableColumns_device),t.$refs.xGrid.mergeArr=["deviceName"]),a.prev=4,r="".concat(t.moment((new Date).setMonth((new Date).getMonth()-3)).format("YYYY-MM-DD")," 00:00:00"),n="".concat(t.moment(new Date).format("YYYY-MM-DD")," 23:59:59"),void 0!==t.dateTime[0]&&(r=t.dateTime[0],n=t.dateTime[1]),s={startTime:r,endTime:n,pickingStatisticsEnum:t.xOptions[t.xModel].value,current:t.tablePages.currentPage,size:t.tablePages.pageSize},"export"===e&&(s.current=1,s.size=9999999),""!==t.yOptions[t.yModel].value&&(s.pickingTypeEnum=t.yOptions[t.yModel].value),a.next=13,Object(w["a"])(s,{});case 13:if(c=a.sent,c.code===o["M"].OPERATION_SUCCESS){if("PARTS"===t.xOptions[t.xModel].value)"export"===e?i.$refs.xGrid.exportData("备件统计报表",c.rows):t.tableDatas=c.rows;else if("RECEIPT"===t.xOptions[t.xModel].value){for(l=[],u=0;u<c.rows.length;u++)for(d=0;d<c.rows[u].partsPickingMaterialsList.length;d++)m={partsPicking:{}},m.partsPicking=JSON.parse(JSON.stringify(c.rows[u].partsPicking)),g=Object(f["a"])({},c.rows[u].partsPickingMaterialsList[d]),m.documentNumber=m.partsPicking.documentNumber,m.preparedDate=m.partsPicking.preparedDate,m.preparedBy=m.partsPicking.preparedBy,m.partsPicking.materialsName=g.materialsName,m.partsPicking.materialsCode=g.materialsCode,m.partsPicking.unit=g.unit,m.partsPicking.realCount=g.realCount,l.push(m);"export"===e?i.$refs.xGrid.exportData("备件统计报表",l):t.tableDatas=l}else if("DEVICE"===t.xOptions[t.xModel].value){for(l=[],u=0;u<c.rows.length;u++)for(d=0;d<c.rows[u].partsPickingMaterialsList.length;d++)m={deviceVo:{}},m.deviceVo=JSON.parse(JSON.stringify(c.rows[u].deviceVo)),g=Object(f["a"])({},c.rows[u].partsPickingMaterialsList[d]),m.deviceName=m.deviceVo.deviceName,m.deviceVo.materialsName=g.materialsName,m.deviceVo.materialsCode=g.materialsCode,m.deviceVo.unit=g.unit,m.deviceVo.realCount=g.realCount,l.push(m);"export"===e?i.$refs.xGrid.exportData("备件统计报表",l):t.tableDatas=l}t.tablePages.total=c.rows.length,t.tableLoadings=!1}else t.tableDatas=[],t.tablePages.total=0,Object(v["c"])(c.message);a.next=20;break;case 17:a.prev=17,a.t0=a["catch"](4),Object(h["a"])(o["N"].NOTIFY,a.t0);case 20:return a.prev=20,a.finish(20);case 22:case"end":return a.stop()}}),a,null,[[4,17,20,22]])})))()},search:function(){this.findList()},reset:function(){this.typeValue="",this.state="",this.groupValue="",this.deviceName="",this.groupId="",this.lineId="",this.getLine(),this.onTablePageChanges(1,10)},exportTable:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log("lalala"),e.findList("export");case 2:case"end":return t.stop()}}),t)})))()}}},C=T,O=C,P=(a("b8c6"),a("2877")),S=Object(P["a"])(O,d,m,!1,null,"3323bd2d",null),k=S.exports,x=a("94a5"),M=a("eec9"),N=a("68f8"),E={name:"EquipmentManagement",data:function(){var e=this;return{BTN_TEXT:o["c"],active:0,isSearchBoxShow:!1,searchList:[],searchData:[],dateTime:"",currentView:"sparePartStatistics",tabs:[{name:o["u"].SPOT_CHECK_STATISTICS,views:"spotCheckStatistics"},{name:o["u"].REPAIR_STATISTICS,views:"repairStatistics"},{name:o["u"].MAINTENANCE_STATISTICS,views:"maintenanceStatistics"},{name:o["u"].TOOL_LIFE_STATISTICS,views:"toolLifeStatistics"}],pickerOptions:{disabledDate:function(t){return t.getTime()>e.moment("".concat(e.moment(Date.now()).format("YYYY-MM-DD")," 23:59:59")).format("x")}}}},created:function(){},methods:{getUrlKeyMain:function(e,t){return decodeURIComponent((new RegExp("[?|&]"+e+"=([^&;]+?)(&|#|;|$)").exec(t)||[,""])[1].replace(/\+/g,"%20"))||null},buttonClickEvent:function(e){console.log(e),this["".concat(e)]()},toggle:function(e,t){console.log(e,t),this.active=e,this.currentView=t,0===this.active?this.getSpotCheckQueryParameter():(1===this.active||this.active,this.isSearchBoxShow=!1)},complexReset:function(){0===this.active&&(this.dateTime=[])},refresh:function(){this.$refs.sparePartStatistics.findList()},exportTable:function(){console.log(1,"export"),this.$refs.sparePartStatistics.exportTable()},getSpotCheckQueryParameter:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(N["a"])();case 3:a=t.sent,a.code===o["M"].OPERATION_SUCCESS?e.searchList=a.rows:Object(v["c"])(a.message),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),Object(h["a"])(o["N"].NOTIFY,t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},GetListQueryParameterMaintenance:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(N["d"])({});case 3:a=t.sent,a.code===o["M"].OPERATION_SUCCESS?e.searchList=a.rows:Object(v["c"])(a.message),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),Object(h["a"])(o["N"].NOTIFY,t.t0);case 10:return t.prev=10,t.finish(10);case 12:case"end":return t.stop()}}),t,null,[[0,7,10,12]])})))()},GetListQueryParameterRepair:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(N["e"])({});case 3:a=t.sent,a.code===o["M"].OPERATION_SUCCESS?e.searchList=a.rows:Object(v["c"])(a.message),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),Object(h["a"])(o["N"].NOTIFY,t.t0);case 10:return t.prev=10,t.finish(10);case 12:case"end":return t.stop()}}),t,null,[[0,7,10,12]])})))()},GetListQueryParameterTool:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(N["f"])({});case 3:a=t.sent,a.code===o["M"].OPERATION_SUCCESS?e.searchList=a.rows:Object(v["c"])(a.message),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),Object(h["a"])(o["N"].NOTIFY,t.t0);case 10:return t.prev=10,t.finish(10);case 12:case"end":return t.stop()}}),t,null,[[0,7,10,12]])})))()},showSearchCard:function(){this.isSearchBoxShow=!this.isSearchBoxShow},findTable:function(e,t,a){0===this.active?this.$refs.spotCheckStatistics.complexSearch(e,t,a,this.dateTime):1===this.active?this.$refs.repairStatistics.findTable(e,t,a):2===this.active?this.$refs.maintenanceStatistics.findTable(e,t,a):this.$refs.toolLifeStatistics.findTable(e,t,a)}},components:{HeaderTitle:s["a"],SearchBox:M["a"],HeadOperationItem:c["a"],spotCheckStatistics:l["a"],maintenanceStatistics:u["a"],sparePartStatistics:k,toolLifeStatistics:x["a"]}},R=E,D=R,_=(a("884e"),Object(P["a"])(D,i,r,!1,null,"e9c7f520",null));t["default"]=_.exports},"884e":function(e,t,a){"use strict";var i=a("d7ce"),r=a.n(i);r.a},b8c6:function(e,t,a){"use strict";var i=a("0102"),r=a.n(i);r.a},cd122:function(e,t,a){"use strict";a.d(t,"h",(function(){return n})),a.d(t,"c",(function(){return s})),a.d(t,"i",(function(){return c})),a.d(t,"d",(function(){return o})),a.d(t,"g",(function(){return l})),a.d(t,"j",(function(){return u})),a.d(t,"e",(function(){return d})),a.d(t,"k",(function(){return m})),a.d(t,"f",(function(){return f})),a.d(t,"b",(function(){return p})),a.d(t,"a",(function(){return g}));var i=a("b775"),r=a("99f6"),n=function(e,t){return Object(i["f"])(r["t"]+"partsPicking/getPartPinking?",e,t)},s=function(e,t){return Object(i["f"])(r["t"]+"partsMaterialReturn/getPartsMaterialReturn?",e,t)},c=function(e,t){return Object(i["f"])(r["t"]+"partsPicking/getPartPinkingMaterials?",e,t)},o=function(e,t){return Object(i["f"])(r["t"]+"partsMaterialReturn/getPartsMaterialReturnMaterials?",e,t)},l=function(e,t){return Object(i["f"])(r["t"]+"partsPicking/getAllPartPinkingMaterialsByRelationshipId?",e,t)},u=function(e,t){return Object(i["f"])(r["t"]+"partsPicking/removePartPinking?",e,t)},d=function(e,t){return Object(i["f"])(r["t"]+"partsMaterialReturn/removePartsMaterialReturn?",e,t)},m=function(e,t){return Object(i["f"])(r["t"]+"sapInteractController/getDevicePartByDevicePriCode?",e,t)},f=function(e,t){return Object(i["f"])(r["t"]+"partsPicking/createPartPinking?",e,t)},p=function(e,t){return Object(i["f"])(r["t"]+"partsMaterialReturn/createPartsMaterialReturn?",e,t)},g=function(e,t){return Object(i["f"])(r["t"]+"partReport/getPartStatistics?",e,t)}},d7ce:function(e,t,a){}}]);
//# sourceMappingURL=chunk-21f446f9.559c257f.js.map