(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3fa0dc98"],{"1c31":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return c}));var a=n("b775"),i=function(t,e){return Object(a["k"])("deviceRepairReport/getRepairTaskReport.action?",t,e)},r=function(t,e){return Object(a["k"])("deviceMaintainReport/getMaintainTaskReport.action?",t,e)},o=function(t,e){return Object(a["k"])("deviceMaintainReport/getDeviceMaintainTaskFinishReport.action?",t,e)},c=function(t,e){return Object(a["k"])("deviceMaintainReport/getMaintainTaskPlanReport.action?",t,e)}},"3db2":function(t,e,n){},6464:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=n("5c96");function i(t,e){a["Notification"].error({title:t,message:e,duration:2e3,position:"bottom-right",showClose:!0})}},"6e5b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",[n("el-header",[n("header-buttons",{attrs:{showRefresh:!0,cssType:"1"},on:{buttonClickEvent:t.buttonClickEvent}})],1),n("header-search",{attrs:{"show-primary-search":!0,cssType:"1"},on:{refreshTableData:t.refreshTableData}}),n("el-main",{staticClass:"view eq"},[n("div",{staticClass:"searchDiv"},[n("span",[t._v("时间范围")]),n("el-date-picker",{staticClass:"dateTime",attrs:{clearable:!1,type:"datetimerange",align:"left",size:"mini","unlink-panels":"","value-format":"yyyy-MM-dd HH:mm:ss","range-separator":t.BTN_TEXT.TO,"start-placeholder":t.BTN_TEXT.STARTTIME,"end-placeholder":t.BTN_TEXT.ENDTIME,"default-time":["00:00:00","23:59:59"]},model:{value:t.dateTime,callback:function(e){t.dateTime=e},expression:"dateTime"}}),n("el-button",{staticStyle:{"margin-left":"5px"},attrs:{type:"default",size:"mini"},on:{click:function(e){return t.reset()}}},[t._v("查询")])],1),n("el-row",{staticClass:"tableShow yearStatistics"},[n("el-col",{staticClass:"echartsWra",attrs:{span:24}},[n("div",{ref:"statisticalEchart",staticStyle:{width:"100%",height:"100%"}})]),n("el-col",{attrs:{span:24}},[n("vxe-pager",{attrs:{align:"right","current-page":t.current,"page-size":t.pageSize,total:t.total,layouts:["Sizes","PrevJump","PrevPage","Number","NextPage","NextJump","FullJump","Total"],"page-sizes":[5,10,25,100],border:"",perfect:""},on:{"update:currentPage":function(e){t.current=e},"update:current-page":function(e){t.current=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"page-change":t.pageChange}})],1),t.tableColumn.length>1?n("el-col",{attrs:{span:24}},[n("vxe-grid",{ref:"xGrid",staticClass:"reverse-table",attrs:{border:"","show-overflow":"","show-header-overflow":"tooltip","highlight-hover-row":"","show-header":!0,columns:t.tableColumn,data:t.tableData,"cell-class-name":"grid-cell"}})],1):t._e()],1)],1)],1)},i=[],r=(n("99af"),n("4160"),n("a15b"),n("d81d"),n("fb6a"),n("b680"),n("159b"),n("2909")),o=n("5530"),c=(n("96cf"),n("1da1")),s=n("f82c"),u=n("582a"),d=n("3fa5"),l=n("1c31"),f=n("6464"),h=n("cf45"),p={name:"EquipmentStatus",components:{},inject:["reload"],data:function(){var t=this;return{BTN_TEXT:u["c"],TITLE:u["N"],total:0,pageSize:10,current:1,tableColumn:[],tableData:[],searchList:[],searchData:{conditionJson1:[]},pickerOptions:{disabledDate:function(e){return e.getTime()>t.moment("".concat(t.moment(Date.now()).format("YYYY-MM-DD")," 23:59:59")).format("x")}},dateTime:[],savedSearchCondition:[]}},methods:{buttonClickEvent:function(t){console.log(t),this["".concat(t)]()},reset:function(){this.findList()},pageChange:function(t){"size"===t.type&&(this.current=t.currentPage,this.pageSize=t.pageSize),this.findList()},refresh:function(){this.findList()},findList:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n,a,i,c,p,m,g,v;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n={conditionJson1:[],operatorGroup:1,conditionJson2:[],current:t.current,size:t.pageSize},t.savedSearchCondition.length>0&&(n=Object(o["a"])(Object(o["a"])({},s["l"].apply(void 0,Object(r["a"])(t.savedSearchCondition))),{},{current:t.current,size:t.pageSize})),a={startTime:"",endTime:""},t.dateTime&&(a.startTime=t.dateTime[0],a.endTime=t.dateTime[1]),e.next=7,Object(l["c"])(a,n);case 7:i=e.sent,i.code===u["M"].OPERATION_SUCCESS?(console.log(i),t.total=i.total,c=i.rows||[],p={xAxis:[],data1:[],data2:[],data3:[],data4:[]},c.forEach((function(t){p.xAxis.push(t.deviceName),p.data1.push(t.planCount),p.data2.push(t.finishCount),p.data3.push(Object(h["a"])(t.achievementRate,100)),p.data4.push(Object(h["a"])(t.avgAchievementRate,100))})),t.draw(p),m=c.map((function(t){return{field:String(t.deviceId),title:t.deviceName,width:"150",align:"center"}}))||[],g=[{field:"mode",title:"",width:"160",align:"center",fixed:"left"}],t.tableColumn=[].concat(g,Object(r["a"])(m)),v=[{mode:"预计计划保养次数"},{mode:"实际累计保养次数"},{mode:"实际保养完成率"},{mode:"平均保养完成率"}],c.forEach((function(t){v[0][String(t.deviceId)]=t.planCount,v[1][String(t.deviceId)]=t.finishCount,v[2][String(t.deviceId)]=Object(h["a"])(t.achievementRate,100)+"%",v[3][String(t.deviceId)]=Object(h["a"])(t.avgAchievementRate,100)+"%"})),t.tableData=v,console.log(v)):(t.total=0,Object(d["c"])(i.message)),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),Object(f["a"])(u["N"].NOTIFY,e.t0);case 14:return e.prev=14,e.finish(14);case 16:case"end":return e.stop()}}),e,null,[[0,11,14,16]])})))()},draw:function(t){var e=this.$echarts.init(this.$refs.statisticalEchart);e.setOption({color:["#55a2f0","#0b4e92","#3d5064","#8e8b8b"],tooltip:{trigger:"axis"},toolbox:{show:!0,feature:{saveAsImage:{show:!0,name:"保养年度统计",title:"导出",pixelRatio:1,type:"png"}}},grid:{containLabel:!0,top:"8%",bottom:"12%",left:"15%",right:"2%"},legend:{orient:"vertical",itemGap:20,top:"40%",left:"3%"},dataZoom:[{type:"slider",top:"bottom"}],xAxis:{data:t.xAxis,axisLabel:{formatter:function(t){var e=9,n=[],a=0;while(a<t.length)n.push(t.slice(a,a+=e));return n.join("\n")}}},yAxis:[{type:"value",name:"",splitLine:{show:!1}},{type:"value",name:"",min:0,max:100,axisLabel:{formatter:"{value}%"},splitLine:{show:!1}}],series:[{name:"预计计划保养次数",type:"bar",data:t.data1},{name:"实际累计保养次数",type:"line",showSymbol:!1,lineStyle:{width:4},data:t.data2},{name:"实际保养完成率(%)",type:"line",showSymbol:!1,yAxisIndex:1,lineStyle:{width:4},data:t.data3},{name:"平均保养完成率(%)",type:"line",showSymbol:!1,yAxisIndex:1,lineStyle:{width:4},data:t.data4}]})},hourFormat:function(t){var e=t.cellValue;return(e/60).toFixed(2)},exportTable:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$refs.xGrid.exportData({filename:"保养年度统计报表"});case 1:case"end":return e.stop()}}),e)})))()},refreshTableData:function(t){t&&(this.savedSearchCondition=Object(r["a"])(t)),this.findList()}},created:function(){var t=(new Date).getFullYear();this.dateTime=["".concat(this.moment(new Date(t,0,1)).format("YYYY-MM-DD")," 00:00:00"),"".concat(this.moment(new Date).format("YYYY-MM-DD")," 23:59:59")],this.findList()},mounted:function(){}},m=p,g=(n("8606"),n("2877")),v=Object(g["a"])(m,a,i,!1,null,"5ff679a5",null);e["default"]=v.exports},8606:function(t,e,n){"use strict";var a=n("3db2"),i=n.n(a);i.a},f82c:function(t,e,n){"use strict";n.d(e,"d",(function(){return o})),n.d(e,"e",(function(){return c})),n.d(e,"m",(function(){return s})),n.d(e,"c",(function(){return u})),n.d(e,"j",(function(){return d})),n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"k",(function(){return h})),n.d(e,"l",(function(){return p})),n.d(e,"f",(function(){return m})),n.d(e,"g",(function(){return g})),n.d(e,"h",(function(){return v})),n.d(e,"i",(function(){return b}));n("7db0"),n("a15b"),n("d81d"),n("b0c0"),n("d3b7");var a=n("b85c"),i=n("53ca"),r=n("b775");function o(){return new Promise((function(t,e){r["i"].post("deviceGroup/getAllGroupAndDevice.action").then((function(e){for(var n=0;n<e.data.rows.length;n++)e.data.rows[n].code&&(e.data.rows[n].id=e.data.rows[n].code);e.data.rows=l(e.data.rows),t(e.data)})).catch((function(t){e(t.data)}))}))}function c(){return new Promise((function(t,e){r["i"].post("deviceWorkshopType/getTree.action").then((function(e){e.data.rows=l(e.data.rows),t(e.data)})).catch((function(t){e(t.data)}))}))}function s(){return new Promise((function(t,e){r["i"].post("deviceGroup/getListGroupAndProductionLine.action").then((function(e){e.data.rows=l(e.data.rows),t(e.data)})).catch((function(t){e(t.data)}))}))}function u(){return new Promise((function(t,e){r["i"].post("deviceGroup/getTree.action?").then((function(e){e.data.rows=l(e.data.rows),t(e.data)})).catch((function(t){e(t.data)}))}))}function d(){return new Promise((function(t,e){r["i"].post("materialsType/getTree.action?").then((function(e){e.data.rows?e.data.rows=l(e.data.rows):e.data.rows=[],t(e.data)})).catch((function(t){e(t.data)}))}))}function l(t){var e=t;for(var n in e)e[n].value=e[n].id,e[n].label=e[n].name;for(var a=[],i={},r=0,o=e.length;r<o;r++)i[e[r].id]=e[r];for(r=0,o=e.length;r<o;r++){var c=i[e[r].pId];c?(c.children||(c.children=[]),c.children.push(e[r])):a.push(e[r])}return a}function f(t){var e=Array.isArray(t)?[]:{};if(t&&"object"===Object(i["a"])(t))for(var n in t)t.hasOwnProperty(n)&&(t[n]&&"object"===Object(i["a"])(t[n])?e[n]=this.deepClone(t[n]):e[n]=t[n]);return e}function h(t,e){var n=[];if(Array.isArray(t)&&Array.isArray(e)){if(t.length>0){var i,r=Object(a["a"])(t);try{var o=function(){var t=i.value,a=e.find((function(e){return e.field===t.field}));if(a){var r=Object.assign({},a,{minWidth:t.width,visible:t.visible,required:t.required});n.push(r)}};for(r.s();!(i=r.n()).done;)o()}catch(l){r.e(l)}finally{r.f()}e[1].type&&"checkbox"===e[1].type&&n.unshift(e[1]),e[0].type&&"radio"===e[0].type&&n.unshift(e[0]),e[0].type&&"checkbox"===e[0].type&&n.unshift(e[0]),console.log("7788",t,e,n);for(var c=0;c<e.length;c++)if(e[c].eType){for(var s=0,u=0;u<t.length;u++)e[c].field===t[u].field&&(s+=1);0===s&&n.push(e[c])}var d=e.length;return e[d-1].title&&"操作"===e[d-1].title&&n.push(e[d-1]),console.log("9999",n),n}return e}return[]}function p(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a={conditionJson1:t,operatorGroup:e,conditionJson2:n};return a}function m(t,e){return e.map((function(e,n){return t.map((function(t){return null==e[t]||""===e[t]?"-":e[t]}))}))}function g(t){var e=new Date(t),n=e.getFullYear(),a=e.getMonth()+1,i=e.getDate();return a=a<10?"0"+a:a,i=i<10?"0"+i:i,[n,a,i].join("-")}function v(t){var e=new Date(t),n=e.getFullYear(),a=e.getMonth()+1,i=e.getDate();return a=a<10?"0"+a:a,i=i<10?"0"+i:i,[n,a,i].join("-")+" 00:00:00"}function b(t){var e=new Date(t),n=e.getFullYear(),a=e.getMonth()+1,i=e.getDate();return a=a<10?"0"+a:a,i=i<10?"0"+i:i,[n,a,i].join("-")+" 23:59:59"}}}]);
//# sourceMappingURL=chunk-3fa0dc98.38e3b2d8.js.map