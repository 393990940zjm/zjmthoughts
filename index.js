window.onload = function(){
 //屏蔽键盘事件
 document.onkeydown = function (){
	 var e = window.event || arguments[0];
	//F12
	 if(e.keyCode == 123){
		 return false;
	 //Ctrl+Shift+I
	 }else if((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)){
		 return false;
	 //Shift+F10
	 }else if((e.shiftKey) && (e.keyCode == 121)){
		 return false;
	 //Ctrl+U
	 }else if((e.ctrlKey) && (e.keyCode == 85)){
		 return false;
	 }
 };
 //屏蔽鼠标右键
 document.oncontextmenu = function (){
	 return false;
 }
}


// var APP_ID = '{{appid}}';
// var APP_KEY = '{{appkey}}';
 
// AV.init({
// 	appId: 'KFgQElcSadU5UkzXNreHt1cB-gzGzoHsz',
// 	appKey: 'yLASWKfAAaOnLc9toHMTq4K6',
// });

// var flag_type = 2;

// var TestObject = AV.Object.extend('TestObject');
// var testObject = new TestObject();
// 	testObject.save({
// 	words: 'Hello World!'
// 		}).then(function(object) {
// 	alert('LeanCloud Rocks!');
// })




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
  
// 每日金句  
dayScripture()  
function dayScripture() {
	$.ajax({
	  url: 'json/mrjj.json',
	  dataType: 'json',
	  success: function(data) {
	    // 获取 JSON 文件中的数据
		console.log(data)
		$(".home1_1_content .dd").html(data.wirteData[0].Attribution);
		$(".home1_1_content .zw").html(data.wirteData[0].content);
		$(".home1_1_content .ly").html(data.wirteData[0].Preface);
		$(".home1_1_content .sy").html(data.wirteData[0].mean);
	
	    // 可以对 data 进行其他操作
	  },
	  error: function(xhr, status, error) {
	    console.error('发生错误:', error);
	  }
	});
	// // 创建一个数据查询
	// var queryBuilder = Backendless.DataQueryBuilder.create();
	
	// // 按特定字段降序排列，并限制查询结果数量为 1
	// queryBuilder.setSortBy(['created DESC']); // 根据 created 字段降序排列
	// queryBuilder.setPageSize(1); // 设置查询结果数量为 1
	// queryBuilder.setWhereClause('type = 2');
	
	// // 查询 writeTable 表的数据，获取最新的一条数据
	// Backendless.Data.of('writeTable').find(queryBuilder)
	//   .then(function(result) {
	//     // 查询成功，result 包含了最新的一条数据
	//     console.log('最新的一条数据:', result[0]); // 如果存在数据的话，最新的一条数据位于数组的第一个位置
	// 	$(".home1_1_content .dd").html(result[0].Attribution)
	// 	$(".home1_1_content .zw").html(result[0].content)
	// 	$(".home1_1_content .ly").html(result[0].Preface)
	// 	$(".home1_1_content .sy").html(result[0].mean)
	//   })
	//   .catch(function(error) {
	//     // 查询失败，处理错误
	//     console.error('查询失败:', error);
	//   });
}
  
  
  
  
/** 
 * 查询全部
 */

function operate(value, row, index) {
   	var html = "";
	
	html +="<div class='task' >"
	html +="  <div class='task_title' ><span>"+row.name+"</span></div>";
	html +="  <div class='task_num'><span>浏览次数:</span><span>"+20+"</span></div>";
	html +="  <div class='task_time'><span>发布时间:</span><span>"+formatDTime2(new Date().getTime())+"</span></div>";
	html +="</div>";
   	
  //  	if(row._serverData.type==3){
  //  		html +="<div class='task' style='height:90px;' >";
  //  		html +="	<div class='task_left' >";
  //  		html +="		<img src='"+row._serverData.img+"' />";
  //  		html +="	</div>";
  //  		html +="	<div class='task_right' >";
		// html +="       <div class='task_title' ><span>"+row._serverData.name+"</span></div>";
		// html +="       <div class='task_num'><span>浏览次数:</span><span>"+row._serverData.number+"</span></div>";
		// html +="       <div class='task_time'><span>发布时间:</span><span>"+formatDTime2(row._serverData.createdDate)+"</span></div>";   					
  //  		html +="	</div>";
		// html +="</div>";
  //  	}else{
	 //   	html +="<div class='task' >"
		// html +="  <div class='task_title' ><span>"+row._serverData.name+"</span></div>";
		// html +="  <div class='task_num'><span>浏览次数:</span><span>"+row._serverData.number+"</span></div>";
		// html +="  <div class='task_time'><span>发布时间:</span><span>"+formatDTime2(row._serverData.createdDate)+"</span></div>";
		// html +="</div>";
  //  	}

	
	return html;
}
/**
 * 操作点击事件
 */
window.operateEvents = {
		'click .task' : function(e, value, row, index) {
			$("#childPage").attr("src","");
			// localStorage.setItem("name", row._serverData.name);
			// localStorage.setItem("id", row.id);
			
			$(".head,.footer").hide();
			
			$("#childPage").show(); 
			$("#childPage").attr("src","directory.html")
			
		}
};



showTable();
function showTable() {
// 	$('#table').bootstrapTable('destroy').bootstrapTable({
// //		url : subURL('equipmentCapacity/search.action'), //请求后台的URL（*）  
// 		dataType:'jsonp',
// //		striped : false, // 是否显示行间隔色
// 		pagination : true, // 是否显示分页（*）
// //		sortable : false, // 是否启用排序
// //		sortOrder : "asc", // 排序方式
// //      toolbar:"#toolbar",
// 		pageNumber : 1, // 初始化加载第一页，默认第一页
// 		pageSize : 10, // 每页的记录行数（*）
// //		pageList : [ 10, 25, 50, 100 ], // 可供选择的每页的行数（*）
// 		strictSearch : true,
// 		clickToSelect : true, // 是否启用点击选中行
// 		height : $(window).height()-100, // 行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
// 		columns : [ 
//        {
// 	       	field : '',
// 	       	title : '',
// 	       	align:"center",
// 	       	valign:'middle',
// 	       	formatter:operate,
// 	       	events : operateEvents
//        }
// 		],
// 		onLoadSuccess : function(data) {

// 		}
// 	});
var directoryData = [
	{
		name: "主日传道",
		type: 7
	},
	{
		name: "诗篇三十首",
		type: 3
	},
	{
		name: "灵修三十问",
		type: 4
	},
	{
		name: "简读圣经",
		type: 5
	},
	{
		name: "教会历史",
		type: 6
	}
]
	var html = "";
	for(var i=0;i<directoryData.length;i++) {
		html +="<div class='task' onclick='myFunction("+directoryData[i].type+")' >"
		html +="  <div class='task_title' ><span>"+directoryData[i].name+"</span></div>";
		html +="</div>";
	}
	$("#article1").html(html);
};

function myFunction(type) {
	console.log(type);
	$("#childPage").attr("src","");
	localStorage.setItem("fy_type", type);
	
	$(".head,.footer").hide();
	
	$("#childPage").show(); 
	$("#childPage").attr("src","directory.html")
}

// $('#table').bootstrapTable('load',directoryData);
// AV.Query.doCloudQuery('select * from article where type = 2 order by createdDate desc').then(function (data) {
//     console.log(data);
//     $('#table').bootstrapTable('load',data.results);
// }, function (error) {
//     console.log(JSON.stringify(error));
// });  


function toRj(){
	$(".head_menu").removeClass('active');
	$(param).addClass('active');
	
	$("#article1").show();
	$("#article2,#childPage").hide();
	$("#childPage").attr("src",""); 
	
	flag_type = 1;
	// AV.Query.doCloudQuery('select * from article where type = 1 order by createdDate desc').then(function (data) {
	//     console.log(data);
	//     $('#table').bootstrapTable('load',data.results);
	// }, function (error) {
	//     console.log(JSON.stringify(error));
	// });  
}

function toWz(flag){
//	$(".head_menu").removeClass('active');
//	$(param).addClass('active');
//	
//	$("#article1").show();
//	$("#article2,#childPage").hide();
//	$("#childPage").attr("src",""); 
	
	flag_type = flag;
	// AV.Query.doCloudQuery('select * from article where type = '+flag+' order by createdDate desc').then(function (data) {
	//     console.log(data);
	//     $('#table').bootstrapTable('load',data.results);
	// }, function (error) {
	//     console.log(JSON.stringify(error));
	// });  
}




function refresh(){
	// AV.Query.doCloudQuery('select * from article where type = '+flag_type+' order by createdDate desc').then(function (data) {
	//     console.log(data);
	//     $('#table').bootstrapTable('load',data.results);
	// }, function (error) {
	//     console.log(JSON.stringify(error));
	// }); 
}




function toAbout(){
	$("#myModal").modal('show');
}




/**********************留言板************************/

function toDiss(){
	$("#article1,#childPage").hide();
	$("#childPage").attr("src",""); 
	$("#article2").show();
	showDiss();
}


function showDiss(){
	// AV.Query.doCloudQuery('select * from messageboard order by createDate desc').then(function (data) {
	//     console.log(data);
	//     var html = "";
	//     for(var i=0;i<data.results.length;i++){
	//     	html += '<div>';
	//     	html += ' <p>'+data.results[i]._serverData.content+'</p>';
	//     	html += ' <p>'+formatDTime2(data.results[i]._serverData.createDate)+'</p>';
	//     	html += '</div>';
	//     }
	//     $(".dissTaskContent").html(html);
	// }, function (error) {
	//     console.log(JSON.stringify(error));
	// }); 
}

function addDiss(){
	if($("#dissIn").val()==""){
//		alert("请输入内容");
		return false;
	}
	// var messageboard = AV.Object.extend('messageboard');
	// var messageboard = new messageboard();
	// 	messageboard.save({
			
	// 		content: $("#dissIn").val(),
	// 		createDate:new Date().getTime(),
	// 		ip:returnCitySN["cip"],
	// 		cname:returnCitySN['cname']
		
	// 	}).then(function(object) {
	// 		$("#dissIn").val('');
	// 		showDiss();
	// })
}

/*********************热门原创阅读**********************/
// hotRead();
function hotRead(){
	console.log(123);
	
	// // 创建一个数据查询
	// var queryBuilder = Backendless.DataQueryBuilder.create();
	
	// // 按 readNum 字段降序排列，并限制查询结果数量为 6
	// queryBuilder.setSortBy('readNum DESC'); // 根据 readNum 字段降序排列
	// queryBuilder.setPageSize(6); // 设置查询结果数量为 6
	
	// // 查询 articleTable 表字段 readNum 数值最大的前 6 条数据
	// Backendless.Data.of('articleTable').find(queryBuilder)
	//   .then(function(result) {
	//     // 查询成功，result 包含 readNum 数值最大的前 6 条数据
	//     console.log('readNum 数值最大的前 6 条数据:', result);
	//   })
	//   .catch(function(error) {
	//     // 查询失败，处理错误
	//     console.error('查询失败:', error);
	//   });
	
	
	// AV.Query.doCloudQuery('select * from article where type = 2 order by number desc limit 0,5').then(function (data) {
	//     console.log(data);
	//     var html = "";
	//     for(var i=0;i<data.results.length;i++){
	//     	html += '<div class="home1_3d" data-id="'+data.results[i].id+'"  data-name="'+data.results[i]._serverData.name+'"  onclick="toWz_d(this)" >';
	// 		html += '	<span>'+(i+1)+'</span>';
	// 		html += '	<span>'+data.results[i]._serverData.name+'</span>';
	// 		html += '	<span>阅读量    : '+data.results[i]._serverData.number+'</span>';
	// 		html += '</div>';
	//     }
	//     $(".home1_3content").html(html)
	// }, function (error) {
	//     console.log(JSON.stringify(error));
	// });  
}

function toWz_d(param){
	// $("#childPage").attr("src","");
	// localStorage.setItem("name", $(param).data('name'));
	// localStorage.setItem("id", $(param).data('id'));
	
	// $(".head,.footer").hide();
	
	// $("#childPage").show(); 
	// $("#childPage").attr("src","wz/write.html")
	$(".head,.footer").hide();
	localStorage.setItem("fy_type", $(param).data('type'));
	localStorage.setItem("fy_name", $(param).data('title'));
	localStorage.setItem("fy_index", $(param).data('index'));
	
	$("#childPage" , parent.document).hide();
	$("#childPage2" , parent.document).show();
	$("#childPage2" , parent.document).attr("src","write2.html")
}

/*********************热门原创杂志**********************/

function hotZz(){
	
	$.ajax({
	  url: 'json/fy.json',
	  dataType: 'json',
	  success: function(data) {
	    // 获取 JSON 文件中的数据
		
		const result = getTop5ByReadNum(data);
		// console.log(result);
		
		var html = "";
		for(var i=0;i<result.length;i++){
			html += '<div class="home1_3d" data-title="'+result[i].title+'" data-index="'+result[i].index+'" data-type="'+result[i].type+'" onclick="toWz_d(this)" >';
			html += '	<span>'+(i+1)+'</span>';
			html += '	<span>'+result[i].title+'</span>';
			html += '	<span>阅读量    : '+result[i].readNum+'</span>';
			html += '</div>';
		}
		$(".home1_2content").html(html)
	
	    // 可以对 data 进行其他操作
	  },
	  error: function(xhr, status, error) {
	    console.error('发生错误:', error);
	  }
	});
	
	
	

	
	// AV.Query.doCloudQuery('select * from article where type = 3 order by createDate desc limit 0,3').then(function (data) {
	//     console.log(data);
	//     var html = "";
	//     for(var i=0;i<data.results.length;i++){
	//     	html += '<div class="home1_2d" data-id="'+data.results[i].id+'"  data-name="'+data.results[i]._serverData.name+'"  onclick="toWz_d(this)" >';
	// 		html += '	<img src="'+data.results[i]._serverData.img+'" >';
	// 		html += '	<p>'+data.results[i]._serverData.name+'</p>';
	// 		html += '</div>';
	//     }
	//     $(".home1_2content").html(html)
	// }, function (error) {
	//     console.log(JSON.stringify(error));
	// });  
}

function getTop5ByReadNum(jsonData) {
  const data = jsonData;
  let allObjects = [];
  
  for (const key in data) {
	  if (Array.isArray(data[key])) {
		  // var dataType = data[key];
		  for(var i=0; i<data[key].length; i++) {
			  if(localStorage.getItem("readArr")) {
				  var readArr = JSON.parse(localStorage.getItem("readArr"));
				  
				  // console.log(777,readArr);
				  for(const key2 in readArr) {
					// console.log(666, data[key][i]);
					var keyData = key2.split('_');
					var type = keyData[0];
					var index = keyData[1];
					var num = readArr[key2];
					// console.log(777,index)
				  	if(data[key][i].index == index && data[key][i].type == type) {
						data[key][i].readNum = num;
					}
				  }
			  }
		  }
	  }
  }

  // Combine all objects with readNum into a single array
  for (const key in data) {
    if (Array.isArray(data[key])) {
      const objectsWithReadNum = data[key].filter(item => item.hasOwnProperty('readNum'));
      allObjects = allObjects.concat(objectsWithReadNum);
    }
  }

  // Sort objects by readNum in descending order
  const sortedObjects = allObjects.sort((a, b) => b.readNum - a.readNum);

  // Take the top 5 objects
  const top10 = sortedObjects.slice(0, 10);

  return top10;
}


// function myFunction(param) {
// 	localStorage.setItem("fy_name", $(param).data('title'));
// 	localStorage.setItem("fy_index", $(param).data('index'));
	
// 	$("#childPage" , parent.document).hide();
// 	$("#childPage2" , parent.document).show();
// 	$("#childPage2" , parent.document).attr("src","write.html")
// }

function toWz_z(param){
	// $("#childPage").attr("src","");
	// localStorage.setItem("name", $(param).data('name'));
	// localStorage.setItem("id", $(param).data('id'));
	
	// $(".head,.footer").hide();
	
	// $("#childPage").show(); 
	// $("#childPage").attr("src","wz/write.html")
	localStorage.setItem("fy_type", $(param).data('type'));
	localStorage.setItem("fy_name", $(param).data('title'));
	localStorage.setItem("fy_index", $(param).data('index'));
	
	$("#childPage" , parent.document).hide();
	$("#childPage2" , parent.document).show();
	$("#childPage2" , parent.document).attr("src","write.html")
}


/********************数据统计*********************/

function showStatistics(){
	// var start = new Date(new Date(new Date().toLocaleDateString()).getTime()).getTime();
	// console.log(start);
	
	// var today = new Date();
	// var todayString = today.toISOString().split('T')[0]; // 获取当天的日期字符串（格式：YYYY-MM-DD）
	
	// // 构建查询条件，查询当日的数据条数
	// var queryBuilder = Backendless.DataQueryBuilder.create();
	// queryBuilder.setWhereClause('created LIKE \'' + todayString + '%\''); // 查询条件为当天日期开头的数据
	
	// // 查询 logTable 表当日的数据条数
	// Backendless.Data.of('logTable').getObjectCount(queryBuilder)
	//   .then(function(count) {
	//     // 查询成功，count 包含当日数据的条数
	//     console.log('当日数据条数:', count);
	// 	$(".drFw").html(count);
	//   })
	//   .catch(function(error) {
	//     // 查询失败，处理错误
	//     console.error('查询失败:', error);
	//   });
	
	$.ajax({
	  url: 'json/readRecord.json',
	  dataType: 'json',
	  success: function(result) {
		// 获取当前时间戳
		// 获取当前时间的时间戳
		const currentTimeStamp = Date.now();
		
		// 获取昨天的时间戳
		const oneDayMilliseconds = 24 * 60 * 60 * 1000; // 一天的毫秒数
		const yesterdayTimeStamp = currentTimeStamp - oneDayMilliseconds;
		
		// 获取昨天 00:00:00 的时间戳
		const yesterdayStart = new Date(yesterdayTimeStamp);
		yesterdayStart.setHours(0, 0, 0, 0);
		const yesterdayStartTimeStamp = yesterdayStart.getTime();
		
		// 获取昨天 23:59:59 的时间戳
		const yesterdayEnd = new Date(yesterdayTimeStamp);
		yesterdayEnd.setHours(23, 59, 59, 999);
		const yesterdayEndTimeStamp = yesterdayEnd.getTime();
		
		// 给定的数据
		const data = result;
		
		// 计算昨天 00:00:00 到 23:59:59 的数据条数
		const yesterdayData = data.filter(
		  (item) => item.created >= yesterdayStartTimeStamp && item.created <= yesterdayEndTimeStamp
		);
		
		console.log(`昨日数据条数：${yesterdayData.length}`);
		$(".drYd").html(yesterdayData.length);
		$(".lsYd").html(result.length);
	  },
	  error: function(xhr, status, error) {
	    console.error('发生错误:', error);
	  }
	});
	  
	
	  
	  
	//   Backendless.Data.of('readTable').getObjectCount(queryBuilder)
	//     .then(function(count) {
	//       // 查询成功，count 包含当日数据的条数
	//       console.log('当日数据条数:', count);
	//   	$(".drYd").html(count);
	//     })
	//     .catch(function(error) {
	//       // 查询失败，处理错误
	//       console.error('查询失败:', error);
	//     });
	  
	  
	  
	//   // 查询 logTable 表所有数据的条数
	//   Backendless.Data.of('logTable').getObjectCount()
	// 	.then(function(count) {
	// 	  // 查询成功，count 包含所有数据的条数
	// 	  console.log('所有数据的条数:', count);
	// 	  $(".lsFw").html(count);
	// 	})
	// 	.catch(function(error) {
	// 	  // 查询失败，处理错误
	// 	  console.error('查询失败:', error);
	// 	});
		
		
		
	// 	// 查询 logTable 表所有数据的条数
	// 	Backendless.Data.of('readTable').getObjectCount()
	// 		.then(function(count) {
	// 		  // 查询成功，count 包含所有数据的条数
	// 		  console.log('所有数据的条数:', count);
	// 		  $(".lsYd").html(count);
	// 		})
	// 		.catch(function(error) {
	// 		  // 查询失败，处理错误
	// 		  console.error('查询失败:', error);
	// 		}); 
}

/********************访问********************/


  // Backendless.Data.of( "logTable" ).save( { userId:returnCitySN['cname'] } )
  //     .then( function( obj ) {
  //         console.log( "object saved. objectId " + obj.objectId )
  //     } )
  //     .catch( function( error ) {
  //         console.log( "got error - " + error )
  //     })

// var access = AV.Object.extend('access');
// var access = new access();
// 	access.save({
		
// 		createDate:new Date().getTime(),
// 		ip:returnCitySN["cip"],
// 		cname:returnCitySN['cname']
	
// 	}).then(function(object) {
		
// 		console.log('欢迎访问')

// })

/*****************切换tab*******************/

function headTab(param,num){
	$(".head0 .head0_d,.head1 .head1_d,.head2 .head2_d").removeClass('d_active');
	$(param).addClass('d_active');
	switch (num){
		case '01':
			$(".homed").hide();
			$(".home1").show();
			hotRead();
			hotZz();
			showStatistics();
			// showStatistics();
			break;
		case '02':
			$(".homed").hide();
			$(".home2").show();
			break;
		case '03':
			$(".homed").hide();
			$(".home3").show();		
			break;
		case '11':
			toWz(2)
			break;
		case '12':
			toWz(1)
			break;
		case '13':
			toWz(3)
			break;
		case '21':
			$(".aboutd").hide();
			$(".about1").show();			
			break;
		case '22':
			$(".aboutd").hide();
			$(".about2").show();			
			break;	
		case '23':
			$(".aboutd").hide();
			$(".about3").show();	
			showDiss();
			break;				
	}
}

function tab(param,num){
	$(".footer_d").removeClass('f_active');
	$(param).addClass('f_active');
	$(".container").hide();
	$("#article"+num).show();
	$(".head0,.head1,.head2").hide();
	
	switch (num){
		case 0:
			$(".head0").show();
			$(".footer .footer_d:nth-child(2)").find('img').attr('src','homeImg/zp_black.png');
			$(".footer .footer_d:nth-child(3)").find('img').attr('src','homeImg/about_black.png');
			$(".footer .footer_d:nth-child(1)").find('img').attr('src','homeImg/home_blue.png');
			$(".head0 div:nth-child(1)").click();
			break;
		case 1:
			$(".head1").show();
			$(".footer .footer_d:nth-child(2)").find('img').attr('src','homeImg/zp_blue.png');
			$(".footer .footer_d:nth-child(3)").find('img').attr('src','homeImg/about_black.png');
			$(".footer .footer_d:nth-child(1)").find('img').attr('src','homeImg/home_black.png');
			$(".head1 div:nth-child(1)").click();
			break;
		case 2:
			$(".head2").show();
			$(".footer .footer_d:nth-child(2)").find('img').attr('src','homeImg/zp_black.png');
			$(".footer .footer_d:nth-child(3)").find('img').attr('src','homeImg/about_blue.png');
			$(".footer .footer_d:nth-child(1)").find('img').attr('src','homeImg/home_black.png');
			$(".head2 div:nth-child(1)").click();
			break;
	}
}

$(".head0 div:nth-child(1)").click();

/*********************************/
$("#myCarousel").carousel('cycle');

var frist = 2
if(localStorage.frist != frist){
	$("#myModal2").modal('show');
	localStorage.setItem("frist", frist );
}






var ios = navigator.userAgent.indexOf('iPhone');//判断是否为ios
if(ios != -1){  
    //ios下运行
    var scroll = document.getElementById("scroll")//你需要滑动的dom元素
    touchScroll(scroll);
}
 
var canScroll = true;
function touchScroll(el) {
	canScroll = false;
    //el需要滑动的元素
    el.addEventListener('touchmove',function(e){
        canScroll = true;
    })
    document.body.addEventListener('touchmove',function(e){
// 		    	alert(canScroll);
        if(!canScroll){
            e.preventDefault(); //阻止默认事件(上下滑动)
        }else{
            //需要滑动的区域
            var top = el.scrollTop; //对象最顶端和窗口最顶端之间的距离 
            var scrollH = el.scrollHeight; //含滚动内容的元素大小
            var offsetH = el.offsetHeight; //网页可见区域高
            var cScroll = top + offsetH; //当前滚动的距离
 
            //被滑动到最上方和最下方的时候
            if(top == 0){
                top = 1; //0～1之间的小数会被当成0
            }else if(cScroll === scrollH){
                  el.scrollTop = top - 0.1;
            }
        }
    }, {passive: false}) //passive防止阻止默认事件不生效
}

//  document.getElementById('exportButton').addEventListener('click', function() {
//   const elementToExport = document.getElementById('contentToExport');

//   html2canvas(elementToExport).then(canvas => {
// 	// Convert canvas to image and create a download link
// 	const imgData = canvas.toDataURL('image/png');
// 	const img = new Image();
// 	img.src = imgData;

// 	const link = document.createElement('a');
// 	link.download = 'exported_image.png';
// 	link.href = img.src;
// 	link.click();
//   });
// });


histroyRead();
function histroyRead() {
	// var queryBuilder = Backendless.DataQueryBuilder.create();
	

 //  queryBuilder.setPageSize(10000); // 设置每页返回的数据量
 //  queryBuilder.setOffset(0); // 设置偏移量，0 表示第一页
	// // 查询 readTable 表的数据
	// Backendless.Data.of('readTable').find()
	//   .then(function(result) {
	// 	console.log(7788,result)
	//     // 查询成功，result 包含了所有数据
	//     // 对 flag 字段进行统计

	// 	hotZz();
	//   })
	//   .catch(function(error) {
	//     // 查询失败，处理错误
	//     console.error('查询失败:', error);
	// 	hotZz();
	//   });
	$.ajax({
	  url: 'json/readRecord.json',
	  dataType: 'json',
	  success: function(result) {
		localStorage.setItem("readRecord",JSON.stringify(result));
	    // 获取 JSON 文件中的数据
	    var flagCount = {}; // 用于存储 flag 字段对应的数据条数
	
	    result.forEach(item => {
	      var flag = item['flag'];
	      flagCount[flag] = (flagCount[flag] || 0) + 1;
	    });
		
		localStorage.setItem("readArr",JSON.stringify(flagCount));
	
		
	    // 输出每个 flag 值对应的数据条数
	    for (var flag in flagCount) {
	      console.log(`Flag 值为 ${flag} 的数据条数: ${flagCount[flag]}`);
	    }
		hotZz();
		showStatistics();
	    // 可以对 data 进行其他操作
	  },
	  error: function(xhr, status, error) {
	    console.error('发生错误:', error);
	  }
	});
}


