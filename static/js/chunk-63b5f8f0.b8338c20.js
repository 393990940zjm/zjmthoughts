(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63b5f8f0"],{"1c31":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return c}));var a=n("b775"),i=function(e,t){return Object(a["k"])("deviceRepairReport/getRepairTaskReport.action?",e,t)},r=function(e,t){return Object(a["k"])("deviceMaintainReport/getMaintainTaskReport.action?",e,t)},o=function(e,t){return Object(a["k"])("deviceMaintainReport/getDeviceMaintainTaskFinishReport.action?",e,t)},c=function(e,t){return Object(a["k"])("deviceMaintainReport/getMaintainTaskPlanReport.action?",e,t)}},"35ee":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",[n("el-header",[n("header-buttons",{attrs:{showRefresh:!0,cssType:"1"},on:{buttonClickEvent:e.buttonClickEvent}})],1),n("header-search",{attrs:{"show-primary-search":!0,cssType:"1"},on:{refreshTableData:e.refreshTableData}}),n("el-main",{staticClass:"view eq maintenancePlan",staticStyle:{"overflow-y":"visible !important"}},[n("div",{staticClass:"searchDiv"},[n("span",[e._v("时间范围")]),n("el-date-picker",{staticClass:"dateTime",attrs:{clearable:!1,type:"datetimerange",align:"left",size:"mini","unlink-panels":"","value-format":"yyyy-MM-dd HH:mm:ss","range-separator":e.BTN_TEXT.TO,"start-placeholder":e.BTN_TEXT.STARTTIME,"end-placeholder":e.BTN_TEXT.ENDTIME,"default-time":["00:00:00","23:59:59"]},model:{value:e.dateTime,callback:function(t){e.dateTime=t},expression:"dateTime"}}),n("el-button",{staticStyle:{"margin-left":"5px"},attrs:{type:"default",size:"mini"},on:{click:function(t){return e.reset()}}},[e._v("查询")]),n("div",{staticClass:"legendWra"},e._l(e.legendList,(function(t,a){return n("div",{key:a,staticClass:"itemLegend"},[n("span",{class:["sign","pTextClass"+t.state]}),n("span",[e._v(e._s(t.name))])])})),0)],1),n("el-row",{staticClass:"tableShow"},[n("el-col",{attrs:{span:24}},[n("vxe-grid",{ref:"xGrid",staticClass:"reverse-table",attrs:{border:"",loading:e.mainPage.tableLoading,height:e.$options.filters.getTableHeight(270),"show-header-overflow":"tooltip","show-overflow":"","highlight-hover-row":"","show-header":!0,columns:e.tableColumns,data:e.mainPage.data,"cell-class-name":"grid-cell"}}),n("vxe-pager",{attrs:{align:"right","current-page":e.mainPage.page.currentPage,"page-size":e.mainPage.page.pageSize,total:e.mainPage.page.total,layouts:["Sizes","PrevJump","PrevPage","Number","NextPage","NextJump","FullJump","Total"],"page-sizes":e.mainPage.page.pageSizes,border:"",perfect:""},on:{"update:currentPage":function(t){return e.$set(e.mainPage.page,"currentPage",t)},"update:current-page":function(t){return e.$set(e.mainPage.page,"currentPage",t)},"update:pageSize":function(t){return e.$set(e.mainPage.page,"pageSize",t)},"update:page-size":function(t){return e.$set(e.mainPage.page,"pageSize",t)},"page-change":e.handleMainPageChange}})],1)],1)],1)],1)},i=[],r=(n("99af"),n("4de4"),n("7db0"),n("4160"),n("a15b"),n("d81d"),n("b0c0"),n("b680"),n("159b"),n("2909")),o=(n("96cf"),n("1da1")),c=n("f82c"),s=n("582a"),u=n("3fa5"),l=n("1c31"),d=n("6464"),f={name:"EquipmentStatus",components:{},inject:["reload"],data:function(){var e=this;return{BTN_TEXT:s["c"],TITLE:s["N"],maxHeight:document.body.clientHeight-250,tableColumns:[],legendList:[{name:"保养中",state:1},{name:"保养完成",state:2},{name:"保养超时完成",state:3},{name:"待保养",state:4},{name:"待审核",state:5}],mainPage:{show:!0,page:{total:0,currentPage:1,pageSize:10,align:"right",pageSizes:[10,20,50,100,200,500],layouts:["Sizes","PrevPage","Number","NextPage","Total"],perfect:!0},data:[],columns:[{field:"deviceName",title:"设备名称",width:"120",align:"center",visible:!0,fixed:"left"},{field:"devicePriCode",title:"设备编码",width:"120",align:"center",visible:!0,fixed:"left"},{field:"number",title:"设备编号",width:"120",align:"center",visible:!0,fixed:"left"},{field:"factory",title:"工厂",width:"120",visible:!0,align:"center"},{field:"workshop",title:"车间名称",width:"120",visible:!0,align:"center"},{field:"productionLine",title:"产线",width:"120",visible:!0,align:"center"},{field:"typeName",title:"设备类型",width:"120",visible:!0,align:"center"}],tableLoading:!1},searchData:{conditionJson1:[]},pickerOptions:{disabledDate:function(t){return t.getTime()>e.moment("".concat(e.moment(Date.now()).format("YYYY-MM-DD")," 23:59:59")).format("x")}},dateTime:[],savedSearchCondition:[],shiftOptions:[]}},methods:{buttonClickEvent:function(e){this["".concat(e)]()},reset:function(){this.mainPage.currentPage=1,this.mainPage.pageSize=10,this.findList()},handleMainPageChange:function(e){"size"===e.type&&(this.mainPage.page.currentPage=e.currentPage,this.mainPage.page.pageSize=e.pageSize),this.findList()},refresh:function(){this.findList()},findList:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var a,i,o,f,g;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,t.mainPage.tableLoading=!0,a={conditionJson1:[],operatorGroup:1,conditionJson2:[]},t.savedSearchCondition.length>0&&(a=c["l"].apply(void 0,Object(r["a"])(t.savedSearchCondition))),"export"===e?(a.size=99999999,a.current=1):(a.size=t.mainPage.page.pageSize,a.current=t.mainPage.page.currentPage),i={startTime:"",endTime:""},t.dateTime&&(i.startTime=t.dateTime[0],i.endTime=t.dateTime[1]),console.log(a),n.next=10,Object(l["d"])(i,a);case 10:o=n.sent,o.code===s["M"].OPERATION_SUCCESS?(t.tableColumns=[],f=o.dataset.map((function(e){return{field:e.substring(5,10),title:e.substring(5,10),width:"140",align:"center",visible:!0,formatter:function(e){var n=e.row,a=e.column,i=n[a.property];if(!i)return"";var r=[];return r=i.map((function(e){var n,a=null===(n=t.legendList.find((function(t){return t.state===e.maintainState})))||void 0===n?void 0:n.name;return"".concat(e.cycleName,"(").concat(a,")")})),r.join("\n")},slots:{default:function(n){var a=n.row;n.column;return t.showDayData(a,e.substring(5,10))}}}})),t.tableColumns=[].concat(Object(r["a"])(t.mainPage.columns),Object(r["a"])(f)),t.mainPage.data=o.rows,t.mainPage.page.total=o.total,"export"===e&&(g=[],g=o.rows.map((function(e){var n={};return t.mainPage.columns.forEach((function(t){n[t.field]=e[t.field]})),f.forEach((function(t){n[t.field]=e.maintainTaskVoList.filter((function(e){return e.maintainTime.substring(5,10)===t.field}))})),n})),t.$refs.xGrid.exportData({filename:"保养计划报表",type:"csv",data:g}))):Object(u["c"])(o.message),n.next=17;break;case 14:n.prev=14,n.t0=n["catch"](0),Object(d["a"])(s["N"].NOTIFY,n.t0);case 17:return n.prev=17,t.mainPage.tableLoading=!1,n.finish(17);case 20:case"end":return n.stop()}}),n,null,[[0,14,17,20]])})))()},showDayData:function(e,t){var n=this.$createElement,a=[];return e.maintainTaskVoList.length>0&&e.maintainTaskVoList.forEach((function(e){if(t===e.maintainTime.substring(5,10)){var i="pTextClass"+e.maintainState;a.push(n("p",{class:i},[e.cycleName]))}})),a},hourFormat:function(e){var t=e.cellValue;return(t/60).toFixed(2)},exportTable:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.findList("export");case 1:case"end":return t.stop()}}),t)})))()},refreshTableData:function(e){e&&(this.savedSearchCondition=Object(r["a"])(e),this.mainPage.page.currentPage=1),this.findList()}},created:function(){this.dateTime=["".concat(this.moment(new Date).format("YYYY-MM-DD")," 00:00:00"),"".concat(this.moment((new Date).getTime()+7776e6).format("YYYY-MM-DD")," 23:59:59")],this.findList()}},g=f,p=(n("c0a5"),n("2877")),h=Object(p["a"])(g,a,i,!1,null,"34126be4",null);t["default"]=h.exports},6464:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("5c96");function i(e,t){a["Notification"].error({title:e,message:t,duration:2e3,position:"bottom-right",showClose:!0})}},"81f5":function(e,t,n){},c0a5:function(e,t,n){"use strict";var a=n("81f5"),i=n.n(a);i.a},f82c:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return c})),n.d(t,"m",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"j",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f})),n.d(t,"k",(function(){return g})),n.d(t,"l",(function(){return p})),n.d(t,"f",(function(){return h})),n.d(t,"g",(function(){return m})),n.d(t,"h",(function(){return v})),n.d(t,"i",(function(){return b}));n("7db0"),n("a15b"),n("d81d"),n("b0c0"),n("d3b7");var a=n("b85c"),i=n("53ca"),r=n("b775");function o(){return new Promise((function(e,t){r["i"].post("deviceGroup/getAllGroupAndDevice.action").then((function(t){for(var n=0;n<t.data.rows.length;n++)t.data.rows[n].code&&(t.data.rows[n].id=t.data.rows[n].code);t.data.rows=d(t.data.rows),e(t.data)})).catch((function(e){t(e.data)}))}))}function c(){return new Promise((function(e,t){r["i"].post("deviceWorkshopType/getTree.action").then((function(t){t.data.rows=d(t.data.rows),e(t.data)})).catch((function(e){t(e.data)}))}))}function s(){return new Promise((function(e,t){r["i"].post("deviceGroup/getListGroupAndProductionLine.action").then((function(t){t.data.rows=d(t.data.rows),e(t.data)})).catch((function(e){t(e.data)}))}))}function u(){return new Promise((function(e,t){r["i"].post("deviceGroup/getTree.action?").then((function(t){t.data.rows=d(t.data.rows),e(t.data)})).catch((function(e){t(e.data)}))}))}function l(){return new Promise((function(e,t){r["i"].post("materialsType/getTree.action?").then((function(t){t.data.rows?t.data.rows=d(t.data.rows):t.data.rows=[],e(t.data)})).catch((function(e){t(e.data)}))}))}function d(e){var t=e;for(var n in t)t[n].value=t[n].id,t[n].label=t[n].name;for(var a=[],i={},r=0,o=t.length;r<o;r++)i[t[r].id]=t[r];for(r=0,o=t.length;r<o;r++){var c=i[t[r].pId];c?(c.children||(c.children=[]),c.children.push(t[r])):a.push(t[r])}return a}function f(e){var t=Array.isArray(e)?[]:{};if(e&&"object"===Object(i["a"])(e))for(var n in e)e.hasOwnProperty(n)&&(e[n]&&"object"===Object(i["a"])(e[n])?t[n]=this.deepClone(e[n]):t[n]=e[n]);return t}function g(e,t){var n=[];if(Array.isArray(e)&&Array.isArray(t)){if(e.length>0){var i,r=Object(a["a"])(e);try{var o=function(){var e=i.value,a=t.find((function(t){return t.field===e.field}));if(a){var r=Object.assign({},a,{minWidth:e.width,visible:e.visible,required:e.required});n.push(r)}};for(r.s();!(i=r.n()).done;)o()}catch(d){r.e(d)}finally{r.f()}t[1].type&&"checkbox"===t[1].type&&n.unshift(t[1]),t[0].type&&"radio"===t[0].type&&n.unshift(t[0]),t[0].type&&"checkbox"===t[0].type&&n.unshift(t[0]),console.log("7788",e,t,n);for(var c=0;c<t.length;c++)if(t[c].eType){for(var s=0,u=0;u<e.length;u++)t[c].field===e[u].field&&(s+=1);0===s&&n.push(t[c])}var l=t.length;return t[l-1].title&&"操作"===t[l-1].title&&n.push(t[l-1]),console.log("9999",n),n}return t}return[]}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a={conditionJson1:e,operatorGroup:t,conditionJson2:n};return a}function h(e,t){return t.map((function(t,n){return e.map((function(e){return null==t[e]||""===t[e]?"-":t[e]}))}))}function m(e){var t=new Date(e),n=t.getFullYear(),a=t.getMonth()+1,i=t.getDate();return a=a<10?"0"+a:a,i=i<10?"0"+i:i,[n,a,i].join("-")}function v(e){var t=new Date(e),n=t.getFullYear(),a=t.getMonth()+1,i=t.getDate();return a=a<10?"0"+a:a,i=i<10?"0"+i:i,[n,a,i].join("-")+" 00:00:00"}function b(e){var t=new Date(e),n=t.getFullYear(),a=t.getMonth()+1,i=t.getDate();return a=a<10?"0"+a:a,i=i<10?"0"+i:i,[n,a,i].join("-")+" 23:59:59"}}}]);
//# sourceMappingURL=chunk-63b5f8f0.b8338c20.js.map