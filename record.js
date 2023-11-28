var APP_ID = '{{appid}}';
var APP_KEY = '{{appkey}}';
 
AV.init({
  appId: 'KFgQElcSadU5UkzXNreHt1cB-gzGzoHsz',
  appKey: 'yLASWKfAAaOnLc9toHMTq4K6'
});

//var TestObject = AV.Object.extend('TestObject');
//var testObject = new TestObject();
//	testObject.save({
//	words: 'Hello World!'
//		}).then(function(object) {
//	alert('LeanCloud Rocks!');
//})




/**
 * 根据id查询
 */
// var query = new AV.Query('TestObject');
//query.get('5ca5c31ca91c930071e2b84b').then(function (todo) {
//  // 成功获得实例
//  // todo 就是 id 为 57328ca079bc44005c2472d0 的 Todo 对象实例
//  console.log(JSON.stringify(todo));
//}, function (error) {
//  // 异常处理
//      console.log(error);
//});




/**
 * 根据id修改
// */
//AV.Query.doCloudQuery('update TestObject set words="家庭" where objectId="5ca6bd5aa91c93007280d03b"')
//.then(function (data) {
//  // data 中的 results 是本次查询返回的结果，AV.Object 实例列表
//  var results = data.results;
//  console.log(JSON.stringify(data));
//}, function (error) {
//  // 异常处理
//  console.error(error);
//});
//
  
  
  
  
/**
 * 根据id删除
 */
//AV.Query.doCloudQuery('delete from TestObject where objectId="5ca5c31ca91c930071e2b84b"').then(function (data) {
//  // 删除成功
//  console.log(JSON.stringify(data));
//}, function (error) {
//  // 异常处理
//  console.log(JSON.stringify(error));
//});  
  
  
  
/** 
 * 查询全部
 */



showTable();
function showTable() {
	$('#table').bootstrapTable('destroy').bootstrapTable({
//		url : subURL('equipmentCapacity/search.action'), //请求后台的URL（*）  
		dataType:'jsonp',
		striped : false, // 是否显示行间隔色
		pagination : true, // 是否显示分页（*）
		sortable : false, // 是否启用排序
		sortOrder : "asc", // 排序方式
        toolbar:"#toolbar",
		pageNumber : 1, // 初始化加载第一页，默认第一页
		pageSize : 10, // 每页的记录行数（*）
		pageList : [ 10, 25, 50, 100 ], // 可供选择的每页的行数（*）
		strictSearch : true,
		clickToSelect : true, // 是否启用点击选中行
		height : 512, // 行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
		columns : [ 
       {
	       	field : 'name',
	       	title : '名称',
	       	align:"center",
	       	valign:'middle',
	       	formatter:function(val,row){
	       		return row._serverData.name;
	       	}
       },
        {
	       	field : 'ip',
	       	title : 'ip',
	       	align:"center",
	       	valign:'middle',
	       	formatter:function(val,row){
	       		return row._serverData.ip;
	       	}
       },
        {
	       	field : 'cname',
	       	title : '地点',
	       	align:"center",
	       	valign:'middle',
	       	formatter:function(val,row){
	       		return row._serverData.cname;
	       	}
       },
       {
	       	field : 'createDate',
	       	title : '浏览时间',
	       	align:"center",
	       	valign:'middle',
	       	formatter:function(val,row){
	       		var time = row._serverData.createDate;
	       		if(time==null || time=="" || time==undefined){
	       			return ""
	       		}else{
	       			return formatDTime2(row._serverData.createDate);
	       		}
	       	}
       }
		],
		onLoadSuccess : function(data) {

		}
	});
	
};


AV.Query.doCloudQuery('select * from record order by createDate desc limit 0,10000').then(function (data) {
    console.log(data);
    $('#table').bootstrapTable('load',data.results);
}, function (error) {
    console.log(JSON.stringify(error)); 
});  

AV.Query.doCloudQuery('select count(*) from record order by createDate desc limit 0,10000').then(function (data) {
    console.log(data);
//  $('#table').bootstrapTable('load',data.results);
}, function (error) {
    console.log(JSON.stringify(error)); 
});  



function formatDTime2(time) {
	var Rime = "";
	if(time != 0){
		var date = new Date(time);
		var y = date.getFullYear();
		var M = date.getMonth()<9 ? '0'+(date.getMonth()+1) : (date.getMonth()+1);
		var d = date.getDate()<10 ? '0'+date.getDate() : date.getDate();
		var h = date.getHours()<10 ? '0'+date.getHours() : date.getHours();
		var m = date.getMinutes()<10 ? '0'+date.getMinutes() : date.getMinutes();
		var s = date.getSeconds()<10 ? '0'+date.getSeconds() : date.getSeconds();
		Rime = y+"-"+M+"-"+d+" "+h+":"+m+":"+s;
	}
	return Rime;
}