(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21f3deae"],{"1bb8":function(e,t,n){"use strict";var i=n("f356"),a=n.n(i);a.a},3177:function(e,t,n){},6998:function(e,t,n){"use strict";var i=n("3177"),a=n.n(i);a.a},"857a":function(e,t,n){var i=n("1d80"),a=/"/g;e.exports=function(e,t,n,o){var s=String(i(e)),l="<"+t;return""!==n&&(l+=" "+n+'="'+String(o).replace(a,"&quot;")+'"'),l+">"+s+"</"+t+">"}},9914:function(e,t,n){"use strict";var i=n("f8f0"),a=n.n(i);a.a},af03:function(e,t,n){var i=n("d039");e.exports=function(e){return i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},b3af:function(e,t,n){"use strict";n.d(t,"k",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"h",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"t",(function(){return r})),n.d(t,"i",(function(){return c})),n.d(t,"l",(function(){return u})),n.d(t,"j",(function(){return d})),n.d(t,"q",(function(){return h})),n.d(t,"p",(function(){return m})),n.d(t,"o",(function(){return f})),n.d(t,"m",(function(){return b})),n.d(t,"n",(function(){return v})),n.d(t,"f",(function(){return p})),n.d(t,"g",(function(){return C})),n.d(t,"d",(function(){return g})),n.d(t,"a",(function(){return w})),n.d(t,"e",(function(){return T})),n.d(t,"s",(function(){return k})),n.d(t,"u",(function(){return y})),n.d(t,"r",(function(){return S}));var i=n("b775"),a=function(e,t){return Object(i["k"])("deviceLive/getPageByDevice.action?",e,t)},o=function(e,t){return Object(i["k"])("deviceLive/getDeviceInfo.action?",e,t)},s=function(e,t){return Object(i["k"])("deviceLive/getOneDayDetailStateClock.action?",e,t)},l=function(e,t){return Object(i["k"])("device/getById.action?",e,t)},r=function(e,t){return Object(i["k"])("deviceRealState/getRelationshipOffLineState.action?",e,t)},c=function(e,t){return Object(i["k"])("deviceLive/getOneDayDetailStateClockInfo.action?",e,t)},u=function(e,t){return Object(i["k"])("deviceLive/getPageHamsterInformation.action?",e,t)},d=function(e,t){return Object(i["k"])("deviceLive/getPageAPPHamsterInformation.action?",e,t)},h=function(e,t){return Object(i["k"])("deviceLive/getPageWarningUnprocessed.action?",e,t)},m=function(e,t){return Object(i["k"])("deviceLive/getPageWarningProcessed.action?",e,t)},f=function(e,t){return Object(i["k"])("deviceLive/getPageWarningInfo.action?",e,t)},b=function(e,t){return Object(i["k"])("deviceLive/getPageParameterWarning.action?",e,t)},v=function(e,t){return Object(i["k"])("deviceLive/getPageParameterWarningInfo.action?",e,t)},p=function(e,t){return Object(i["k"])("deviceLive/getListQueryParameter.action?",e,t)},C=function(e,t){return Object(i["k"])("deviceLive/getListQueryParameterWarning.action?",e,t)},g=function(e,t){return Object(i["k"])("webReportStatistics/deviceGanttChart.action?",e,t)},w=function(e,t){return Object(i["k"])("existFunctionUpdate/deviceGanttChart.action?",e,t)},T=function(e,t){return Object(i["k"])("webReportStatistics/getDeviceGanttChartQueryParameter.action?",e,t)},k=function(e,t){return Object(i["k"])("deviceRealParameterValue/getPageDeviceProductionSnapshotByDeviceCodeAndTime.action?",e,t)},y=function(e,t){return Object(i["k"])("deviceRealParameterValue/getTimeDeviceParameterReport.action?",e,t)},S=function(e,t){return Object(i["k"])("existFunctionUpdate/getDeviceHistoryParmaState.action?",e,t)}},bcc1:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("vue-draggable",{staticClass:"draggable",attrs:{animation:"380",ghostClass:"ghost",handle:".move-row"},model:{value:e.headColumn,callback:function(t){e.headColumn=t},expression:"headColumn"}},e._l(e.headColumn,(function(t){return n("li",{key:t.field,staticClass:"node-row"},[n("el-checkbox",{attrs:{disabled:!0,checked:t.visible}}),n("div",{staticClass:"headProess move-row"},[n("div",{staticClass:"title move-row"},[e._v(" "+e._s(t.title)+" "),n("i",{staticClass:"icon-button",attrs:{icon:"node-move"}})]),n("div",{staticClass:"proess",style:"width:"+t.width})]),n("el-input",{model:{value:t.width,callback:function(n){e.$set(t,"width",n)},expression:"item.width"}},[n("template",{slot:"append"},[e._v("px")])],2)],1)})),0),n("vue-draggable",{staticClass:"draggable",attrs:{animation:"380",ghostClass:"ghost",handle:".move-row"},model:{value:e.middleColumn,callback:function(t){e.middleColumn=t},expression:"middleColumn"}},e._l(e.middleColumn,(function(t){return n("li",{key:t.field,staticClass:"node-row move-row"},[n("el-checkbox",{attrs:{checked:t.visible},on:{change:function(n){return e.checkChange(t)}}}),n("div",{staticClass:"headProess move-row"},[n("div",{staticClass:"title"},[e._v(" "+e._s(t.title)+" "),n("i",{staticClass:"icon-button",attrs:{icon:"node-move"}})]),n("div",{staticClass:"proess",style:"width:"+t.width})]),n("el-input",{model:{value:t.width,callback:function(n){e.$set(t,"width",n)},expression:"item.width"}},[n("template",{slot:"append"},[e._v("px")])],2)],1)})),0),n("vue-draggable",{staticClass:"draggable",attrs:{animation:"380",ghostClass:"ghost",handle:".move-row"},model:{value:e.operationColumn,callback:function(t){e.operationColumn=t},expression:"operationColumn"}},e._l(e.operationColumn,(function(t){return n("li",{key:t.field,staticClass:"node-row"},[n("el-checkbox",{attrs:{disabled:!0,checked:t.visible}}),n("div",{staticClass:"headProess move-row"},[n("div",{staticClass:"title"},[e._v(" "+e._s(t.title)+" "),n("i",{staticClass:"icon-button",attrs:{icon:"node-move"}})]),n("div",{staticClass:"proess",style:"width:"+t.width})]),n("el-input",{model:{value:t.width,callback:function(n){e.$set(t,"width",n)},expression:"item.width"}},[n("template",{slot:"append"},[e._v("px")])],2)],1)})),0),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:e.saveCustomColumn}},[e._v(e._s(e.BTN_TEXT.CONFIRM))]),n("el-button",{on:{click:e.canleCustomColumn}},[e._v(e._s(e.BTN_TEXT.CLOSE))]),n("el-button",{on:{click:e.resetCustomColumn}},[e._v(e._s(e.BTN_TEXT.RESTORE_DEFAULT))])],1)],1)},a=[],o=(n("99af"),n("c7cd"),n("53ca")),s=n("582a"),l=n("310e"),r=n.n(l),c={components:{VueDraggable:r.a},props:{nowColumns:{type:Array,default:function(){return[]}}},data:function(){return{first:!1,BTN_TEXT:s["c"],checkColumn:[],headColumn:[],middleColumn:[],operationColumn:[],columns:[],oldColumns:[],width:[]}},computed:{},created:function(){var e=this;this.$nextTick((function(){e.oldColumns=e.deepClone(e.nowColumns),e.checkColumn=[],e.headColumn=[],e.middleColumn=[],e.operationColumn=[],e.columns=[];for(var t=0;t<e.nowColumns.length;t++)if("checkbox"!==e.nowColumns[t].type){void 0===e.nowColumns[t].visible&&(e.nowColumns[t].visible=!0);var n={};void 0===e.nowColumns[t].width?(e.nowColumns[t].width="auto",n.width="auto",n.field=e.nowColumns[t].field):(n.width=e.nowColumns[t].width,n.field=e.nowColumns[t].field),e.width.push(n),"left"===e.nowColumns[t].fixed?e.headColumn.push(e.deepClone(e.nowColumns[t])):"right"===e.nowColumns[t].fixed?e.operationColumn.push(e.deepClone(e.nowColumns[t])):e.middleColumn.push(e.deepClone(e.nowColumns[t]))}else e.checkColumn.push(e.deepClone(e.nowColumns[t]))}))},methods:{init:function(e){var t=this;this.$nextTick((function(){t.checkColumn=[],t.headColumn=[],t.middleColumn=[],t.operationColumn=[],t.columns=[],setTimeout((function(){for(var n=0;n<e.length;n++)if("checkbox"!==e[n].type){for(var i in void 0===e[n].visible&&(e[n].visible=!0),t.width)t.width[i].field===e[n].field&&(e[n].width=t.width[i].width);"left"===e[n].fixed?t.headColumn.push(e[n]):"right"===e[n].fixed?t.operationColumn.push(e[n]):t.middleColumn.push(e[n])}else t.checkColumn.push(e[n])}),0)}))},saveCustomColumn:function(){var e=this;this.columns=[],this.columns=this.columns.concat(this.checkColumn).concat(this.headColumn).concat(this.middleColumn).concat(this.operationColumn),setTimeout((function(){for(var t in e.oldColumns=e.deepClone(e.columns),e.width=[],e.columns){var n={};n.width=e.nowColumns[t].width,n.field=e.nowColumns[t].field,e.width.push(n)}e.$emit("saveCustomColumn",e.columns)}),150)},deepClone:function(e){var t=Array.isArray(e)?[]:{};if(e&&"object"===Object(o["a"])(e))for(var n in e)e.hasOwnProperty(n)&&(e[n]&&"object"===Object(o["a"])(e[n])?t[n]=this.deepClone(e[n]):t[n]=e[n]);return t},checkChange:function(e){e.visible=!e.visible},canleCustomColumn:function(){this.$emit("showCustomColumn")},resetCustomColumn:function(){this.$emit("resetCustomColumn")}}},u=c,d=(n("9914"),n("2877")),h=Object(d["a"])(u,i,a,!1,null,"17e8e46c",null);t["a"]=h.exports},be7c:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{staticClass:"customize-column-dialog",attrs:{"show-close":!1,visible:e.isDialogShow,"close-on-click-modal":!1},on:{"update:visible":function(t){e.isDialogShow=t}}},[n("span",{attrs:{slot:"title"},slot:"title"},[n("span",{staticClass:"customize-column-dialog__title"},[e._v(e._s(e.dialogTitle))]),n("span",{staticClass:"customize-column-dialog__prompt"},[e._v("勾选需要显示的列，拖动列名进行排序")])]),n("div",{staticStyle:{height:"400px",overflow:"auto"}},[n("vue-draggable",{attrs:{animation:"380",ghostClass:"ghost",handle:".move-row",scroll:""},model:{value:e.tempTableColumns,callback:function(t){e.tempTableColumns=t},expression:"tempTableColumns"}},e._l(e.tempTableColumns,(function(t,i){return n("li",{key:i,staticClass:"column-row"},[n("el-checkbox",{staticClass:"column-row__checkbox",attrs:{disabled:t.required},model:{value:t.visible,callback:function(n){e.$set(t,"visible",n)},expression:"column.visible"}}),n("span",{staticClass:"column-row__tilte",class:t.required?"":"move-row"},[e._v(e._s(t.title))]),n("el-input",{staticClass:"column-low__input",attrs:{size:"mini"},model:{value:t.width,callback:function(n){e.$set(t,"width",n)},expression:"column.width"}}),n("span",{staticClass:"column-row__unit"},[e._v("px")])],1)})),0)],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{staticClass:"custom-button",attrs:{plain:""},on:{click:e.handleResetEvent}},[e._v(" 恢复默认 ")]),n("el-button",{staticClass:"custom-button",attrs:{plain:""},on:{click:e.handleCloseEvent}},[e._v(" 关闭 ")]),n("el-button",{staticClass:"custom-button",attrs:{type:"primary"},on:{click:e.handleSaveEvent}},[e._v(" 保存 ")])],1)])},a=[],o=(n("a434"),n("b85c")),s=n("310e"),l=n.n(s),r={name:"dialogCustomizeColumnsDialogSettingColumn",components:{VueDraggable:l.a},props:{pageColumns:{type:Array,default:function(){return[]},required:!0},showSettingDialog:{type:Boolean,default:function(){return!1}},defaultColumns:{type:Array,default:function(){return[]},required:!0}},watch:{pageColumns:{handler:function(e){var t,n;this.tempTableColumns.splice(0);var i,a=[],s=Object(o["a"])(e);try{for(s.s();!(i=s.n()).done;){var l=i.value;l.field&&l.title&&a.push({field:l.field,title:l.title,width:l.minWidth||"100",visible:l.visible,required:l.required})}}catch(r){s.e(r)}finally{s.f()}(t=this.tempTableColumns).push.apply(t,a),(n=this.initTableColumns).push.apply(n,a)},immediate:!0,deep:!0},defaultColumns:{handler:function(e){var t;this.defaultTableColumns.splice(0);var n,i=[],a=Object(o["a"])(e);try{for(a.s();!(n=a.n()).done;){var s=n.value;s.field&&i.push({field:s.field,title:s.title,width:s.minWidth||"100",visible:s.visible,required:s.required})}}catch(l){a.e(l)}finally{a.f()}(t=this.defaultTableColumns).push.apply(t,i)},immediate:!0,deep:!0},showSettingDialog:{handler:function(e){this.isDialogShow=e},immediate:!0}},data:function(){return{dialogTitle:"自定义列",isDialogShow:!1,tempTableColumns:[],initTableColumns:[],defaultTableColumns:[]}},methods:{handleSaveEvent:function(){this.$emit("saveMyColumnSetting",this.tempTableColumns)},handleCloseEvent:function(){for(var e=this.tempTableColumns.length,t=!0,n=0;n<e;n++){var i=this.tempTableColumns[n],a=this.initTableColumns[n];if(i.field!==a.field){t=!1;break}if(i.width!==a.width){t=!1;break}if(i.visible!==a.visible){t=!1;break}}if(!t){var s,l,r=[],c=Object(o["a"])(this.pageColumns);try{for(c.s();!(l=c.n()).done;){var u=l.value;u.field&&r.push({field:u.field,title:u.title,width:u.minWidth||"100",visible:u.visible,required:u.required})}}catch(d){c.e(d)}finally{c.f()}this.tempTableColumns.splice(0),(s=this.tempTableColumns).push.apply(s,r)}this.$emit("update:showSettingDialog",!1)},handleResetEvent:function(){var e,t,n=[],i=Object(o["a"])(this.defaultColumns);try{for(i.s();!(t=i.n()).done;){var a=t.value;a.field&&n.push({field:a.field,title:a.title,width:a.minWidth||"100",visible:a.visible,required:a.required})}}catch(s){i.e(s)}finally{i.f()}this.tempTableColumns.splice(0),(e=this.tempTableColumns).push.apply(e,n)}}},c=r,u=(n("1bb8"),n("2877")),d=Object(u["a"])(c,i,a,!1,null,"2d822b9c",null);t["a"]=d.exports},c7cd:function(e,t,n){"use strict";var i=n("23e7"),a=n("857a"),o=n("af03");i({target:"String",proto:!0,forced:o("fixed")},{fixed:function(){return a(this,"tt","","")}})},d506:function(e,t,n){"use strict";var i=n("f3c6"),a=n.n(i);a.a},ef6b:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.hideMain,expression:"hideMain"}],staticClass:"main"},[n("div",[n("Div",[n(e.currentView,{ref:e.currentView,tag:"component",attrs:{showInfo:e.showInfo,isSearchBoxShow:e.isSearchBoxShow}})],1)],1)])])},a=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("header-buttons",{attrs:{cssType:"1"},on:{buttonClickEvent:e.buttonClickEvent}}),n("header-search",{attrs:{"show-primary-search":!0,cssType:"1"},on:{refreshTableData:e.refreshTableData}}),n("VXETable",{ref:"xGrid",staticStyle:{padding:"0 10px"},attrs:{id:"table",resizable:!0,autoResize:!0,height:e.$options.filters.getTableHeight(190),tableName:"",tableLoading:e.tableLoadings,tableDatas:e.tableDatas,tableColumns:e.tableColumns,tablePage:e.tablePages,highlightCurrentRow:!0,"edit-config":e.editConfig},on:{sortChange:e.sortChange,onTablePageChange:e.onTablePageChanges}})],1)},s=[],l=n("2909"),r=(n("96cf"),n("1da1")),c=n("c1df"),u=n.n(c),d=n("cf46"),h=n("3fa5"),m=n("6464"),f=n("eec9"),b=n("be7c"),v=n("582a"),p=n("f82c"),C=n("b3af"),g=n("bcc1"),w={components:{VXETable:d["a"],SearchBox:f["a"],CustomColumn:g["a"],DialogSettingColumn:b["a"]},props:{groupType:String,isSearchBoxShow:{type:Boolean},showInfo:{type:Function,default:null}},data:function(){return{VARIABLE:v["P"],EQUIPMENT_LIVE:v["t"],BTN_TEXT:v["c"],deviceName:"",dialogVisible:!1,hackReset:!1,srearchList:[],orderByData:{},editConfig:{trigger:"click",mode:"row",showStatus:!1},searchData:[],showTable:!0,tableLoadings:!1,dialogVisibleCustomColumn:!1,outData:[],tableDatas:[],tableColumn:[],tableColumns:[{field:"deviceName",title:v["t"].DEVICE_NAME,visible:!0,sortable:!0,align:"center"},{field:"deviceCode",visible:!0,sortable:!0,title:v["i"].DEVICE_CODE,align:"center"},{field:"devicePriCode",visible:!0,sortable:!0,title:v["i"].DEVICE_PRCODE,align:"center"},{field:"number",visible:!0,sortable:!0,title:v["i"].DEVICE_EXTEND,align:"center"},{field:"typeName",title:v["t"].DEVICE_TYPE,visible:!0,align:"center"},{field:"stateStartTime",title:"离线开始时间",visible:!0,align:"center",formatter:function(e){var t=e.cellValue;return t?u()(t).format("YYYY-MM-DD HH:mm:ss"):"从未上线"}},{field:"stateDurationTime",title:"离线持续时长",visible:!0,align:"center"}],typeOptions:[],groupOptions:[],typeValue:"",groupValue:"",tablePages:{total:0,currentPage:1,pageSize:20,align:"right",pageSizes:[20,50,100,200,500,1e3],layouts:["Sizes","PrevJump","PrevPage","Number","NextPage","NextJump","FullJump","Total"],perfect:!0},savedSearchCondition:[]}},computed:{},created:function(){this.findList()},methods:{buttonClickEvent:function(e){this["".concat(e)]()},findList:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.tableLoadings=!0,n={conditionJson1:[],operatorGroup:1,conditionJson2:[],orderBy:e.orderByData},e.savedSearchCondition.length>0&&(n=p["l"].apply(void 0,Object(l["a"])(e.savedSearchCondition))),n.size=e.tablePages.pageSize,n.current=e.tablePages.currentPage,t.next=8,Object(C["t"])({},n);case 8:i=t.sent,i.code===v["M"].OPERATION_SUCCESS?(e.tableDatas=i.rows,e.tablePages.total=i.total,e.tableLoadings=!1):Object(h["c"])(i.message),t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](0),Object(m["a"])(v["N"].NOTIFY,t.t0);case 15:return t.prev=15,t.finish(15);case 17:case"end":return t.stop()}}),t,null,[[0,12,15,17]])})))()},onTablePageChanges:function(e,t){this.tablePages.currentPage=e,this.tablePages.pageSize=t,this.findList()},search:function(){this.onTablePageChanges(1,10)},reset:function(){this.onTablePageChanges(1,this.tablePages.pageSize)},exportTable:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var n,i,a,o,s,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,t.prev=1,e.tableLoadings=!0,i={conditionJson1:[],operatorGroup:1,conditionJson2:[],orderBy:e.orderByData},e.savedSearchCondition.length>0&&(i=p["l"].apply(void 0,Object(l["a"])(e.savedSearchCondition))),i.size=99999999,i.current=1,t.next=9,Object(C["t"])({},i);case 9:if(a=t.sent,a.code===v["M"].OPERATION_SUCCESS){for(o=[],o=n.tableColumns,s=[],r=0;r<o.length;r++)"radio"!==o[r].type&&"checkbox"!==o[r].type&&s.push(o[r].field);e.$refs.xGrid.exportData("离线设备",a.rows,s),e.tableLoadings=!1}else Object(h["c"])(a.message);t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](1),Object(m["a"])(v["N"].NOTIFY,t.t0);case 16:return t.prev=16,t.finish(16);case 18:case"end":return t.stop()}}),t,null,[[1,13,16,18]])})))()},sortChange:function(e,t){this.orderByData={},this.orderByData[e]=t,this.onTablePageChanges(1,this.tablePages.pageSize)},changeTable:function(){var e=this;this.dialogVisible=!0,this.$nextTick((function(){e.hackReset=!0}))},refreshTableColumns:function(){this.refreshTableData()},refreshTableData:function(e){e&&(this.savedSearchCondition=Object(l["a"])(e),this.tablePages.currentPage=1),this.findList()}}},T=w,k=T,y=(n("6998"),n("2877")),S=Object(y["a"])(k,o,s,!1,null,"35e680a4",null),x=S.exports,_=n("85a8"),O=n("5861"),P={name:"EquipmentStatus",data:function(){return{isSearchBoxShow:!1,BTN_TEXT:v["c"],EQUIPMENT_LIVE:v["t"],active:0,showFlag:0,deviceData:{},hideMain:!0,currentView:"deviceTable",dialogVisible:!1}},created:function(){this.$refs.deviceTable.findList()},computed:{},watch:{},methods:{showSearchCard:function(){this.isSearchBoxShow=!this.isSearchBoxShow},exportTable:function(){0===this.active?this.$refs.deviceTable.exportTable():this.$refs.warningTable.exportTable()},refresh:function(){this.$refs.deviceTable.findList()}},components:{deviceTable:x,HeaderTitle:_["a"],HeadOperationItem:O["a"],SearchBox:f["a"]}},E=P,D=E,j=(n("d506"),Object(y["a"])(D,i,a,!1,null,"9feaedde",null));t["default"]=j.exports},f356:function(e,t,n){},f3c6:function(e,t,n){},f8f0:function(e,t,n){}}]);
//# sourceMappingURL=chunk-21f3deae.4b9b3ae5.js.map