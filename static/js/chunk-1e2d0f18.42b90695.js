(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e2d0f18"],{"07ac":function(e,t,a){var r=a("23e7"),n=a("6f53").values;r({target:"Object",stat:!0},{values:function(e){return n(e)}})},"1b89":function(e,t,a){},"368a":function(e,t,a){},"39df":function(e,t,a){"use strict";var r=a("368a"),n=a.n(r);n.a},4681:function(e,t,a){"use strict";var r=a("1b89"),n=a.n(r);n.a},"5fd0":function(e,t,a){},"6f32":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("tree",{attrs:{nodes:e.nodes,setting:e.setting},on:{onCreated:e.handleCreated}})],1)},n=[],i=a("f419"),o=a.n(i),s={components:{tree:o.a},props:{isCheck:{type:Boolean,default:!1},isExpendAll:{type:Boolean,default:!1},isOneExpendAll:{type:Boolean,default:!1},nodes:{type:Array,default:function(){return[{}]}}},data:function(){return{selectedNode:null,ztreeObj:null,setting:{check:{enable:this.isCheck},data:{simpleData:{enable:!0,idKey:"id",pIdKey:"pId",rootPId:"0"}},callback:{onClick:this.onClick,onCheck:this.onCheck,onRightClick:this.onRightClick}}}},computed:{},created:function(){},methods:{onClick:function(e,t,a){this.selectedNode=a,this.$emit("ztreeOnClick",e,a,this.ztreeObj)},onCheck:function(e,t,a){this.$emit("ztreeOnCheck",e,a,this.ztreeObj)},handleCreated:function(e){if(this.ztreeObj=e,this.isExpendAll)e.expandAll(!0);else if(this.isOneExpendAll){var t=e.transformToArray(e.getNodes());e.expandNode(t[0],!0)}this.$emit("ztreeHandleCreated",e)},onRightClick:function(e,t,a){var r={};null===a?r=this.selectedNode:(this.selectedNode=a,r=a),this.ztreeObj.selectNode(r),this.$emit("ztreeOnRightClick",e,r,this.ztreeObj)},getNodesByParam:function(e,t,a){this.ztreeObj.expandAll(!0)},selectNode:function(e,t,a){this.ztreeObj.selectNode(e,t,a)}}},l=s,c=(a("39df"),a("2877")),u=Object(c["a"])(l,r,n,!1,null,"812aacfc",null);t["a"]=u.exports},"6f53":function(e,t,a){var r=a("83ab"),n=a("df75"),i=a("fc6a"),o=a("d1e7").f,s=function(e){return function(t){var a,s=i(t),l=n(s),c=l.length,u=0,d=[];while(c>u)a=l[u++],r&&!o.call(s,a)||d.push(e?[a,s[a]]:s[a]);return d}};e.exports={entries:s(!0),values:s(!1)}},"786f":function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return i}));var r=a("b775"),n=function(e,t){return Object(r["k"])("extendPropertyValue/insertOrUpdateBatch.action?",e,t)},i=function(e,t){return Object(r["k"])("extendProperty/getList.action?",e,t)}},efb7:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{directives:[{name:"show",rawName:"v-show",value:0===e.showPage,expression:"showPage === 0"}]},[a("el-container",{staticClass:"content"},[a("el-header",[a("HeaderTitle",{staticClass:"header-title"},[a("div",{staticClass:"head-search",attrs:{slot:"head-search"},slot:"head-search"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,size:"mini"}},[a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{attrs:{placeholder:"姓名"},model:{value:e.searchName,callback:function(t){e.searchName=t},expression:"searchName"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.findList}},[e._v(e._s(e.BTN_TEXT.SEARCH))]),a("el-button",{on:{click:e.onReset}},[e._v(e._s(e.BTN_TEXT.RESET))])],1)],1)],1),a("div",{staticClass:"head-operation",attrs:{slot:"head-operation"},slot:"head-operation"},[a("HeadOperationItem",{attrs:{name:"addDevice"},on:{onOprationItem:e.addUser}},[a("i",{staticClass:"icon-add",attrs:{slot:"operation-icon"},slot:"operation-icon"}),a("span",{attrs:{slot:"operation-name"},slot:"operation-name"},[e._v(e._s(e.BTN_TEXT.ADD)+e._s(e.COMPANY_USER.USER))])]),a("HeadOperationItem",{attrs:{name:"addDevice"},on:{onOprationItem:e.exportData}},[a("i",{staticClass:"icon-export",attrs:{slot:"operation-icon"},slot:"operation-icon"}),a("span",{attrs:{slot:"operation-name"},slot:"operation-name"},[e._v("导出")])])],1)])],1),a("el-main",[a("div",{staticClass:"area-main"},[a("div",{staticClass:"area-aside"},[a("HeaderTitle",{staticClass:"header-title",attrs:{titleName:e.COMPANY_USER.COMPANY_INFO}}),a("ZTree",{attrs:{nodes:e.nodeData},on:{ztreeOnClick:e.ztreeOnClick}})],1),a("div",{staticClass:"area-info"},[[a("div",{staticClass:"userInformation"},[a("HeaderTitle",{staticClass:"header-title",attrs:{titleName:e.COMPANY_USER.COMPANY_USER_INFO}},[a("div",{staticClass:"head-search",attrs:{slot:"head-search"},slot:"head-search"},[e._v(" "+e._s(e.ztreeSelectedNode.name)+" ")])]),a("VXETable",{ref:"xGrid",attrs:{id:"table",height:e.$options.filters.getTableHeight(190),tableName:"",tableLoading:e.tableLoading,"pager-config":e.tablePage,tableDatas:e.tableDatas,tableColumns:e.tableColumns,tablePage:e.tablePage},on:{onTablePageChange:e.onTablePageChange,chooseCheck:e.tableChooseCheck}},[a("div",{staticClass:"tableOperations",attrs:{slot:"tableOperation"},slot:"tableOperation"},[a("div",{staticClass:"tableOperation-item"},[a("HeadOperationItem",{attrs:{name:"batchDeleteStaff"},on:{onOprationItem:function(t){return e.resetPwdAll()}}},[a("i",{staticClass:"icon-batchDelete",attrs:{slot:"operation-icon"},slot:"operation-icon"}),a("span",{attrs:{slot:"operation-name"},slot:"operation-name"},[e._v(e._s(e.BTN_TEXT.BATCH_RESET_PWD))])]),a("HeadOperationItem",{attrs:{name:"batchDeleteStaff"},on:{onOprationItem:function(t){return e.deteleAll()}}},[a("i",{staticClass:"icon-batchDelete",attrs:{slot:"operation-icon"},slot:"operation-icon"}),a("span",{attrs:{slot:"operation-name"},slot:"operation-name"},[e._v(e._s(e.BTN_TEXT.BATCH_DELETE))])])],1)])])],1)]],2)])])],1)],1),1===e.showPage?a("div",[a("addUser",{on:{goBack:e.goBack}})],1):e._e(),a("el-dialog",{class:[e.$store.state.dialogMarginClass],attrs:{title:e.titleName,visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{ref:"editCodeForm",attrs:{model:e.tempRow,rules:e.rules}},[a("el-row",{attrs:{gutter:22}},[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{label:e.CONSTANTS_USER.USERNAME,"label-width":e.formLabelWidth,prop:"userName"}},[a("el-input",{attrs:{autocomplete:"off",disabled:""},model:{value:e.tempRow.userName,callback:function(t){e.$set(e.tempRow,"userName",t)},expression:"tempRow.userName"}})],1)],1),a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{label:e.CONSTANTS_USER.WECHAT_OPEN_ID,"label-width":e.formLabelWidth,prop:"wechatOpenId"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.tempRow.wechatOpenId,callback:function(t){e.$set(e.tempRow,"wechatOpenId",t)},expression:"tempRow.wechatOpenId"}})],1)],1),a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{label:e.CONSTANTS_USER.REALNAME,"label-width":e.formLabelWidth,prop:"realName"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.tempRow.realName,callback:function(t){e.$set(e.tempRow,"realName",t)},expression:"tempRow.realName"}})],1)],1),a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{label:e.CONSTANTS_USER.TELEPHONE_NUMBER,"label-width":e.formLabelWidth,prop:"telephoneNumber",rules:e.filter_rules({type:"phone"})}},[a("el-input",{attrs:{autocomplete:"off"},on:{input:e.change},model:{value:e.tempRow.telephoneNumber,callback:function(t){e.$set(e.tempRow,"telephoneNumber",t)},expression:"tempRow.telephoneNumber"}})],1)],1),a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{label:e.CONSTANTS_USER.SEX,"label-width":e.formLabelWidth,prop:"sex"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:e.VARIABLE.PLEASE_CHOOSE},model:{value:e.tempRow.sex,callback:function(t){e.$set(e.tempRow,"sex",t)},expression:"tempRow.sex"}},e._l(e.sexOptions,(function(e){return a("el-option",{key:e.id,attrs:{label:e.label,value:e.value}})})),1)],1)],1),a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{label:e.CONSTANTS_USER.EMAIL,"label-width":e.formLabelWidth,prop:"email"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.tempRow.email,callback:function(t){e.$set(e.tempRow,"email",t)},expression:"tempRow.email"}})],1)],1),a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{label:e.CONSTANTS_USER.OPERATOR_JOR_NUMBER,"label-width":e.formLabelWidth,prop:"operatorJorNumber"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.tempRow.operatorJorNumber,callback:function(t){e.$set(e.tempRow,"operatorJorNumber",t)},expression:"tempRow.operatorJorNumber"}})],1)],1),a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{label:e.CONSTANTS_USER.WECHAT_NICK_NAME,"label-width":e.formLabelWidth,prop:"wechatNickName"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.tempRow.wechatNickName,callback:function(t){e.$set(e.tempRow,"wechatNickName",t)},expression:"tempRow.wechatNickName"}})],1)],1),a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{label:e.CONSTANTS_USER.PWD,"label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off","show-password":""},model:{value:e.tempRow.newPassword,callback:function(t){e.$set(e.tempRow,"newPassword",t)},expression:"tempRow.newPassword"}})],1)],1),a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{label:e.CONSTANTS_USER.ROLE,"label-width":e.formLabelWidth}},[a("el-select",{staticStyle:{width:"100%"},attrs:{multiple:"",placeholder:e.VARIABLE.PLEASE_CHOOSE},model:{value:e.tempRow.roleIdList,callback:function(t){e.$set(e.tempRow,"roleIdList",t)},expression:"tempRow.roleIdList"}},e._l(e.roleOptions,(function(e){return a("el-option",{key:e.roleId,attrs:{label:e.roleName,value:e.roleId}})})),1)],1)],1),a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{label:e.CONSTANTS_USER.ISPWD,"label-width":e.formLabelWidth,rules:e.newPasswordRules,prop:"isNewPassword"}},[a("el-input",{attrs:{autocomplete:"off","show-password":""},model:{value:e.tempRow.isNewPassword,callback:function(t){e.$set(e.tempRow,"isNewPassword",t)},expression:"tempRow.isNewPassword"}})],1)],1)],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitEdit()}}},[e._v(e._s(e.BTN_TEXT.SAVE))]),a("el-button",{attrs:{type:"warning"},on:{click:e.resetEdit}},[e._v(e._s(e.BTN_TEXT.RESET))]),a("el-button",{on:{click:e.cancelBtnClick}},[e._v(e._s(e.BTN_TEXT.CANCEL))])],1)],1)],1)},n=[],i=(a("d81d"),a("5530")),o=(a("96cf"),a("1da1")),s=a("85a8"),l=a("5861"),c=a("6f32"),u=a("aa25"),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",{staticClass:"content"},[a("el-header",[a("HeaderTitle",{staticClass:"header-title",attrs:{titleName:e.titleName}},[a("div",{staticClass:"head-operation",attrs:{slot:"head-operation"},slot:"head-operation"},[a("el-button",{attrs:{type:"default",size:"mini"},on:{click:e.insertEvent}},[e._v(e._s(e.BTN_TEXT.INSERT_ONE_ROW))])],1)])],1),a("el-main",[a("div",{staticClass:"area-main"},[a("vxe-grid",{ref:"xGrid",staticClass:"vxe-table-element",attrs:{border:"full",resizable:"","keep-source":"",height:"550","edit-rules":e.validRules,columns:e.tableColumns,data:e.tableDatas,"edit-config":{trigger:"click",mode:"row",showStatus:!0,icon:"fa fa-file-text-o"}}}),a("div",{staticClass:"btnDiv"},[a("el-button",{attrs:{type:"primary"},on:{click:e.fullValidEvent}},[e._v(e._s(e.BTN_TEXT.SAVE))]),a("el-button",{on:{click:e.goBack}},[e._v(e._s(e.BTN_TEXT.RETURN))])],1)],1)])],1)},p=[],m=(a("99af"),a("4160"),a("fb6a"),a("d3b7"),a("07ac"),a("159b"),a("e072")),h=a("786f"),f=a("3fa5"),b=a("582a"),N=a("6464"),E={components:{HeaderTitle:s["a"],HeadOperationItem:l["a"]},props:{},data:function(){var e=this,t=this.$createElement,a=function(t){var a=t.column,r=(t.row,t.cellValue);return new Promise((function(t,n){return e.$options.filters.formatterTableValidate(a,r,e.extendPropertyValueVoList,t,n)}))},r=function(e){var t=e.cellValue;return new Promise((function(e,a){Object(m["Rb"])({userName:t}).then((function(t){t.code===b["M"].OPERATION_SUCCESS&&(t.rows?e():a(new Error(b["n"].RULES_USER_NAME)))}))}))},n=function(e){var t=e.cellValue;return new Promise((function(e,a){var r=/^([A-Za-z0-9_+-.])+@([A-Za-z0-9\-.])+\.([A-Za-z]{2,22})$/;t?r.test(t)?e():a(new Error(b["n"].RULES_EMAIL)):e()}))},i=function(e){var t=e.cellValue;return new Promise((function(e,a){var r=/(^(\d{3,4}-)?\d{7,8})$|(^1[34578]\d{9})$/;t?r.test(t)?e():a(new Error(b["n"].RULES_PHONE)):e()}))};return{setValidateForm:a,BTN_TEXT:b["c"],MSG:b["H"],imageUrl:"",titleName:b["n"].ADD_USER,validRules:{},OldRules:{userName:[{validator:r},{required:!0,message:b["H"].PLEASE_ENTER_CONTENT},{max:20,message:"长度不得大于20个字符"}],realName:[{required:!0,message:b["H"].PLEASE_ENTER_CONTENT},{max:10,message:"长度不得大于10个字符"},{pattern:/^[A-Za-z0-9\u4e00-\u9fa5]+$/,message:"不允许输入空格等特殊符号"}],operatorJorNumber:[{required:!0,message:b["H"].PLEASE_ENTER_CONTENT},{max:30,message:"长度不得大于30个字符"}],sex:[{required:!0,message:b["H"].PLEASE_CHOOSE_CONTENT}],password:[{required:!0,message:b["H"].PLEASE_ENTER_CONTENT},{max:12,message:"长度不得大于12个字符"}],wechatNickName:[{max:30,message:"长度不得大于30个字符"}],wechatOpenId:[{max:100,message:"长度不得大于100个字符"}],email:[{validator:n},{max:20,message:"长度不得大于20个字符"}],telephoneNumber:[{validator:i},{max:11,message:"长度不得大于11个字符"}]},tableDatas:[],tableColumns:[],tableColumns_old:[{field:"userName",title:b["n"].USERNAME,minWidth:"150",align:"center",editRender:{name:"input"}},{field:"operatorJorNumber",title:b["n"].OPERATOR_JOR_NUMBER,minWidth:"140",align:"center",editRender:{name:"input"}},{field:"wechatNickName",title:b["n"].WECHAT_NICK_NAME,minWidth:"140",align:"center",editRender:{name:"input"}},{field:"wechatOpenId",title:b["n"].WECHAT_OPEN_ID,minWidth:"140",align:"center",editRender:{name:"input"}},{field:"realName",title:b["n"].REALNAME,minWidth:"140",align:"center",editRender:{name:"input"}},{field:"sex",title:b["n"].SEX,minWidth:"140",align:"center",editRender:{name:"$select",options:[{label:b["P"].MAN,value:b["P"].ONE_NUMBER},{label:b["P"].WOMAN,value:b["P"].TWO_NUMBER}]}},{field:"telephoneNumber",title:b["n"].TELEPHONE_NUMBER,minWidth:"140",align:"center",editRender:{name:"input"}},{field:"email",title:b["n"].EMAIL,minWidth:"140",align:"center",editRender:{name:"input"}},{field:"role",title:b["n"].ROLE,minWidth:"140",align:"center",editRender:{name:"ElSelect",options:[],props:{multiple:!0}}},{field:"password",title:b["n"].PWD,minWidth:"140",align:"center",editRender:{name:"input"}},{field:"",title:b["c"].OPERATION,width:"100",fixed:"right",align:"center",slots:{default:function(a){var r=a.row,n=a.column;return[t("i",{on:{click:function(){return e.copyRow(r,n)}},class:"icon-table-addRow"}),t("i",{on:{click:function(){return e.deleteRow(r,n)}},class:"icon-table-delete"})]}}}],tableColumns_head:[],tableColumns_operation:[],extendPropertyValueVoList:[]}},computed:{},created:function(){this.initExtendTable()},mounted:function(){},methods:{initExtendTable:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(h["a"])({},{conditionJson1:[{column:"extendType",conditionJson1:[],conditionJson2:[],current:0,operator:1,operatorGroup:0,orderBy:{},ptype:"int",size:0,type:"eq",value:4}]});case 3:a=t.sent,a.code===b["M"].OPERATION_SUCCESS?(e.extendPropertyValueVoList=a.rows,e.setinitExtend(a.rows),e.extendRules(a.rows),e.insertEvent()):Object(f["c"])(a.message),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),Object(N["a"])(b["N"].NOTIFY,t.t0);case 10:return t.prev=10,t.finish(10);case 12:case"end":return t.stop()}}),t,null,[[0,7,10,12]])})))()},setinitExtend:function(e){if(this.tableColumns=[],this.tableColumns_head=this.tableColumns_old.slice(0,this.tableColumns_old.length-1),this.tableColumns_operation=this.tableColumns_old[this.tableColumns_old.length-1],this.tableColumns=this.tableColumns.concat(this.tableColumns_head),e.length>0)for(var t=0;t<e.length;t++)if(1===e[t].propertyType)this.tableColumns.push({field:e[t].propertyCode,title:e[t].extendName,width:"160",align:"center",className:t,editRender:{name:"input"}});else if(2===e[t].propertyType)this.tableColumns.push({field:e[t].propertyCode,title:e[t].extendName,width:"160",align:"center",className:t,editRender:{name:"$input",props:{type:"number"}}});else if(3===e[t].propertyType){var a="0";1===e[t].propertyLength?a="220":(2===e[t].propertyLength||3===e[t].propertyLength)&&(a="160"),this.tableColumns.push({field:e[t].propertyCode,title:e[t].extendName,width:a,align:"center",className:t,editRender:{name:"ElDatePicker",props:{type:"datetime",format:b["D"][e[t].propertyLength]}}})}this.tableColumns=this.tableColumns.concat(this.tableColumns_operation),this.toSearchRole()},deleteRow:function(e,t){var a=this;this.$XModal.confirm(b["H"].CONFIRM_DELETE).then((function(t){"confirm"===t&&a.$refs.xGrid.remove(e)}))},insertEvent:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(r in a={sex:1,companyId:8,role:[]},e.extendPropertyValueVoList)a[e.extendPropertyValueVoList[r].propertyCode]="";return t.next=4,e.$refs.xGrid.insertAt(a,-1);case 4:case"end":return t.stop()}}),t)})))()},copyRow:function(e,t){var a=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a.$refs.xGrid.clearActived(),r=Object(i["a"])({},e),delete r._XID,t.next=5,a.$refs.xGrid.insertAt(r,e);case 5:case"end":return t.stop()}}),t)})))()},submit:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,r,n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,a=e.$refs.xGrid.getRecordset(),r=a.insertRecords,n=JSON.parse(JSON.stringify(r)),t.next=5,Object(m["Wb"])({},n);case 5:i=t.sent,i.code===b["M"].OPERATION_SUCCESS?(e.setUserReleRole(i.rows,r),setTimeout((function(){e.extendPropertyValueVoList.length>0?e.saveExtend(i.rows,r):e.goBack()}),0),Object(f["b"])(i.message)):Object(f["c"])(i.message),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),Object(N["a"])(b["N"].NOTIFY,t.t0);case 12:return t.prev=12,t.finish(12);case 14:case"end":return t.stop()}}),t,null,[[0,9,12,14]])})))()},setUserReleRole:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function a(){var r,n,i,o,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:for(n in r=[],t)if(t[n].role.length>0)for(i=0;i<t[n].role.length;i++)o={},o.userId=e[n].userId,o.roleId=t[n].role[i],r.push(o);if(!(r.length>0)){a.next=15;break}return a.prev=3,a.next=6,Object(m["Yb"])({},r);case 6:s=a.sent,s.code===b["M"].OPERATION_SUCCESS||Object(f["c"])(s.message),a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](3),Object(N["a"])(b["N"].NOTIFY,a.t0);case 13:return a.prev=13,a.finish(13);case 15:case"end":return a.stop()}}),a,null,[[3,10,13,15]])})))()},fullValidEvent:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.$createElement,t.next=3,e.$refs.xGrid.fullValidate().catch((function(e){return e}));case 3:r=t.sent,r?(n=[],Object.values(r).forEach((function(e){e.forEach((function(e,t){var a=e.column,r=e.rules;r.forEach((function(e){n.push("".concat(b["P"].THE," ").concat(t+1," ").concat(b["P"].ROW," ").concat(a.title," ").concat(b["H"].VALIDATION_FAILED,"：").concat(e.message))}))}))})),e.$XModal.alert({status:"error",message:function(){return[a("div",{class:"red",style:"max-height: 400px;overflow: auto;"},[n.map((function(e){return a("div",[e])}))])]}})):e.submit();case 5:case"end":return t.stop()}}),t)})))()},saveExtend:function(e,t){var a=[];for(var r in e)for(var n in this.extendPropertyValueVoList){var i={extendId:this.extendPropertyValueVoList[n].extendId,extendValue:t[r][this.extendPropertyValueVoList[n].propertyCode],propertyCode:this.extendPropertyValueVoList[n].propertyCode,relationshipTypeId:e[r].userId};a.push(i)}this.setSaveExtend(a)},setSaveExtend:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(h["b"])({},e);case 3:r=a.sent,r.code===b["M"].OPERATION_SUCCESS?t.goBack():Object(f["c"])(r.message),a.next=10;break;case 7:a.prev=7,a.t0=a["catch"](0),Object(N["a"])(b["N"].NOTIFY,a.t0);case 10:return a.prev=10,a.finish(10);case 12:case"end":return a.stop()}}),a,null,[[0,7,10,12]])})))()},extendRules:function(e){for(var t in this.validRules=this.OldRules,this.extendPropertyValueVoList)1===this.extendPropertyValueVoList[t].propertyIsNull?(this.extendPropertyValueVoList[t].propertyType,this.validRules[this.extendPropertyValueVoList[t].propertyCode]=[{required:!0,message:b["H"].PLEASE_ENTER_CONTENT},{validator:this.setValidateForm}]):(this.extendPropertyValueVoList[t].propertyType,this.validRules[this.extendPropertyValueVoList[t].propertyCode]=[{validator:this.setValidateForm}])},goBack:function(){this.$emit("goBack",b["P"].ZERO_NUMBER)},toSearchRole:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(m["Ob"])();case 3:a=t.sent,a.code===b["M"].OPERATION_SUCCESS?e.tableColumns[8].editRender.options=a.rows.map((function(e){return e.value=e.roleId,e.label=e.roleName,e})):Object(f["c"])(a.message),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),Object(N["a"])(e.GLOBAL.TITLE.NOTIFY,t.t0);case 10:return t.prev=10,t.finish(10);case 12:case"end":return t.stop()}}),t,null,[[0,7,10,12]])})))()}}},g=E,O=g,R=(a("f4945"),a("2877")),w=Object(R["a"])(O,d,p,!1,null,"0ea1bd9e",null),v=w.exports,T=a("cf46"),C={name:"CompanyUsers",components:{ZTree:c["a"],companyInformation:u["a"],VXETable:T["a"],HeaderTitle:s["a"],HeadOperationItem:l["a"],addUser:v},data:function(){var e=this,t=this.$createElement,a=function(t,a,r){return e.$options.filters.formatterFormValidate(t,a,r,e.extendPropertyValueVoList)},r=function(t,a,r){""!==e.tempRow.newPassword&&e.tempRow.newPassword!==a?r(new Error("两次密码不一致")):r()};return{VARIABLE:b["P"],CONSTANTS_USER:b["n"],setValidateForm:a,BTN_TEXT:b["c"],COMPANY_USER:b["e"],titleName:b["n"].TITLE_MODIFY_USER_DIALOG,dialogVisible:!1,formLabelWidth:"100px",roleOptions:[],showPage:0,searchName:"",ztreeObj:{},ztreeSelectedNode:{},nodeData:[],tempRow:{},form:{},selectNodeData:"",tableLoading:!1,newPasswordRules:[{validator:r,trigger:"blur"}],sexOptions:[{label:b["P"].MAN,value:b["P"].ONE_NUMBER},{label:b["P"].WOMAN,value:b["P"].TWO_NUMBER}],rules:{userName:[{required:!0,trigger:"blur",message:b["H"].PLEASE_ENTER_CONTENT},{max:20,message:"长度不得大于20个字符"}],realName:[{required:!0,trigger:"blur",message:b["H"].PLEASE_ENTER_CONTENT},{max:10,message:"长度不得大于10个字符"},{pattern:/^[A-Za-z0-9\u4e00-\u9fa5]+$/,message:"不允许输入空格等特殊符号"}],operatorJorNumber:[{required:!0,trigger:"blur",message:b["H"].PLEASE_ENTER_CONTENT},{max:30,message:"长度不得大于30个字符"}],sex:[{required:!0,trigger:"change",message:b["H"].PLEASE_CHOOSE_CONTENT}],email:[{type:"email",message:b["n"].RULES_EMAIL,trigger:["blur"]},{max:20,message:"长度不得大于20个字符"}],userCrad:[{validator:this.isIdCardValid,trigger:"change"},{max:20,message:"长度不得大于20个字符"}],newPassword:[{max:12,message:"长度不得大于12个字符"}],wechatNickName:[{max:30,message:"长度不得大于30个字符"}],wechatOpenId:[{max:100,message:"长度不得大于100个字符"}]},tablePage:{total:0,currentPage:1,pageSize:5,align:"right",pageSizes:[5,20,50,100,200,500],layouts:["Sizes","PrevJump","PrevPage","Number","NextPage","NextJump","FullJump","Total"],perfect:!0,slots:{left:"pager_left"}},tableDatas:[],tableColumns:[{type:"checkbox",width:"50",fixed:"left",align:"center"},{field:"userName",title:b["e"].USERNAME,align:"center"},{field:"realName",title:b["e"].REALNAME,align:"center"},{field:"telephoneNumber",title:b["e"].TELEPHONE_NUMBER,align:"center"},{field:"email",title:b["e"].EMAIL,align:"center"},{field:"role",title:b["e"].ROLE,align:"center"},{field:"",title:b["c"].OPERATION,width:"300",fixed:"right",align:"center",slots:{default:function(a){var r=a.row;a.column;return[t("el-button",{on:{click:function(){return e.toUpdate(r)}},attrs:{type:"text"}},[b["c"].MODIFY]),t("el-button",{on:{click:function(){return e.toResetPwd(r)}},attrs:{type:"text"}},[b["e"].RESET_PWD]),t("el-button",{on:{click:function(){return e.setDelete(r)}},attrs:{type:"text"}},[b["c"].DELETE])]}}}]}},computed:{},created:function(){this.getTree()},methods:{addUser:function(){},onReset:function(){this.tablePage.currentPage=1,this.searchName="",this.findList()},tableChooseCheck:function(){},deteleall:function(){},resetPwdAll:function(){},toUpdate:function(e){this.toSearchRole(),this.dialogVisible=!0,this.tempRow=JSON.parse(JSON.stringify(e)),this.initRow=e},toResetPwd:function(){},setDelete:function(){},toSearchRole:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(m["Ob"])();case 3:a=t.sent,a.code===b["M"].OPERATION_SUCCESS?e.roleOptions=a.rows:Object(f["c"])(a.message),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),Object(N["a"])(e.GLOBAL.TITLE.NOTIFY,t.t0);case 10:return t.prev=10,t.finish(10);case 12:case"end":return t.stop()}}),t,null,[[0,7,10,12]])})))()},ztreeOnClick:function(e,t,a){this.nodeObj=a,this.ztreeSelectedNode=t,this.tablePage.currentPage=1,this.findList()},getTree:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(m["h"])({},{conditionJson1:[{column:"state",operator:1,ptype:"string",type:"in",value:"1,3"}]});case 3:a=t.sent,a.code===b["M"].OPERATION_SUCCESS?(r=a.rows.map((function(e){var t={};return t.id=e.companyId,t.pId=0,t.state=e.state,t.isParent=!1,t.name=e.companyName,t})),e.nodeData=r):Object(f["c"])(a.message),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),Object(N["a"])(b["N"].NOTIFY,t.t0);case 10:return t.prev=10,t.finish(10);case 12:case"end":return t.stop()}}),t,null,[[0,7,10,12]])})))()},onTablePageChange:function(e,t){this.tablePage.currentPage=e,this.tablePage.pageSize=t,this.findList()},goBack:function(e){this.showPage=e,this.findList()},findList:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.ztreeSelectedNode.id){t.next=2;break}return t.abrupt("return",!1);case 2:return t.prev=2,e.tableLoading=!0,a={current:e.tablePage.currentPage,size:e.tablePage.pageSize},t.next=7,Object(m["Tb"])(a,{conditionJson1:[{column:"companyId",operator:1,ptype:"int",type:"eq",value:e.ztreeSelectedNode.id},{column:"realName",operator:1,ptype:"string",type:"like",value:e.searchName}]});case 7:r=t.sent,r.code===b["M"].OPERATION_SUCCESS?(e.tableDatas=r.rows,e.tablePage.total=r.total,e.tableLoading=!1):Object(f["c"])(r.message),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](2),Object(N["a"])(b["N"].NOTIFY,t.t0);case 14:return t.prev=14,t.finish(14);case 16:case"end":return t.stop()}}),t,null,[[2,11,14,16]])})))()},exportData:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.ztreeSelectedNode.id){t.next=2;break}return t.abrupt("return",!1);case 2:return t.prev=2,e.tableLoading=!0,a={current:b["P"].ONE_NUMBER,size:b["P"].BIG_NUMBER},t.next=7,Object(m["Tb"])(a,[{column:"companyId",operator:1,ptype:"int",type:"eq",value:e.ztreeSelectedNode.id},{column:"realName",operator:1,ptype:"string",type:"like",value:e.searchName}]);case 7:r=t.sent,r.code===b["M"].OPERATION_SUCCESS?(e.tableLoading=!1,e.$refs.xGrid.exportData(b["e"].COMPANY_USER_INFO,r.rows)):Object(f["c"])(r.message),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](2),Object(N["a"])(b["N"].NOTIFY,t.t0);case 14:return t.prev=14,t.finish(14);case 16:case"end":return t.stop()}}),t,null,[[2,11,14,16]])})))()},submitEdit:function(){var e=this;this.$refs.editCodeForm.validate((function(t){t&&e.setSubmitEdit()}))},setSubmitEdit:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,a=JSON.parse(JSON.stringify(e.tempRow)),delete a.createTime,delete a.updateTime,delete a.extendPropertyValueVoList,delete a.companyId,delete a._XID,delete a.isNewPassword,""!==a.newPassword&&(a.password=a.newPassword),t.next=11,Object(m["ac"])(a);case 11:r=t.sent,r.code===b["M"].OPERATION_SUCCESS?(Object(f["b"])(r.message),e.dialogVisible=!1,e.initRow=null,setTimeout((function(){e.extendPropertyValueVoList.length>0?e.saveExtendValue():e.findTableList()}),0)):Object(f["c"])(r.message),t.next=18;break;case 15:t.prev=15,t.t0=t["catch"](0),e.$notify.error({title:b["N"].ERROR,message:t.t0,showClose:!1,duration:2e3,position:"bottom-right"});case 18:case"end":return t.stop()}}),t,null,[[0,15]])})))()},resetEdit:function(){this.tempRow=Object(i["a"])({},this.initRow),this.showDialog(this.initRow),this.$refs.editCodeForm.resetFields()},cancelBtnClick:function(){this.$refs.editCodeForm.resetFields(),this.dialogVisible=!1},change:function(){this.$forceUpdate()}}},_=C,x=_,S=(a("4681"),Object(R["a"])(x,r,n,!1,null,"041fa232",null));t["default"]=S.exports},f4945:function(e,t,a){"use strict";var r=a("5fd0"),n=a.n(r);n.a}}]);
//# sourceMappingURL=chunk-1e2d0f18.42b90695.js.map