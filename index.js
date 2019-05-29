var APP_ID = '{{appid}}';
var APP_KEY = '{{appkey}}';
 
AV.init({
  appId: 'KFgQElcSadU5UkzXNreHt1cB-gzGzoHsz',
  appKey: 'yLASWKfAAaOnLc9toHMTq4K6'
});

var flag_type = 2;

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





function operate(value, row, index) {
	var str = "";
	 str += "<button class='btn btn-info btn-sm  check' >查看</button>"
	return str;
}
/**
 * 操作点击事件
 */
window.operateEvents = {
		'click .check' : function(e, value, row, index) {
			
			var str = 'update article set number='+(row._serverData.number+1)+' where objectId="'+row.id+'"';
			AV.Query.doCloudQuery(str).then(function (data) {
			  console.log(JSON.stringify(data));
			}, function (error) {
			  console.error(error);
			});
			
			var Record = AV.Object.extend('record');
			var record = new Record();
				record.save(
					{
						articleId: row.id,
						name:row._serverData.name,
						createDate:new Date().getTime()
					}
				).then(function(object) {
					console.log(object);
			})
			
			$("#childPage").show(); 
			if(row._serverData.type==1){
				$("#childPage").attr("src","rj/"+row._serverData.name+".html") 
			}else if(row._serverData.type==2){
				$("#childPage").attr("src","wz/"+row._serverData.name+".html") 
			}
//			$("#childPage").attr("src","rj/2019-05-05.html") 
		}
};


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
	       	field : 'number',
	       	title : '浏览次数',
	       	align:"center",
	       	valign:'middle',
	       	formatter:function(val,row){
	       		return row._serverData.number;
	       	}
       },
       {
	       	field : 'createdDate',
	       	title : '创建时间',
	       	align:"center",
	       	valign:'middle',
	       	formatter:function(val,row){
	       		var time = row._serverData.createdDate;
	       		if(time==null || time=="" || time==undefined){
	       			return ""
	       		}else{
	       			return formatDTime2(row._serverData.createdDate);
	       		}
	       	}
       },
       	{
       		field : 'op',
       		title : '操作',
       		align:"center",
       		formatter : operate,
       		events : operateEvents
       	}
		],
		onLoadSuccess : function(data) {

		}
	});
	
};


AV.Query.doCloudQuery('select * from article where type = 2 order by createdDate desc').then(function (data) {
    console.log(data);
    $('#table').bootstrapTable('load',data.results);
}, function (error) {
    console.log(JSON.stringify(error));
});  


function toRj(){
	flag_type = 1;
	AV.Query.doCloudQuery('select * from article where type = 1 order by createdDate desc').then(function (data) {
	    console.log(data);
	    $('#table').bootstrapTable('load',data.results);
	}, function (error) {
	    console.log(JSON.stringify(error));
	});  
}

function toWz(){
	flag_type = 2;
	AV.Query.doCloudQuery('select * from article where type = 2 order by createdDate desc').then(function (data) {
	    console.log(data);
	    $('#table').bootstrapTable('load',data.results);
	}, function (error) {
	    console.log(JSON.stringify(error));
	});  
}

function refresh(){
	AV.Query.doCloudQuery('select * from article where type = '+flag_type+' order by createdDate desc').then(function (data) {
	    console.log(data);
	    $('#table').bootstrapTable('load',data.results);
	}, function (error) {
	    console.log(JSON.stringify(error));
	}); 
}


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