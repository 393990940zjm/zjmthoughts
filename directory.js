// window.onload = function(){
//      //屏蔽键盘事件
//      document.onkeydown = function (){
//          var e = window.event || arguments[0];
//         //F12
//          if(e.keyCode == 123){
//              return false;
//          //Ctrl+Shift+I
//          }else if((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)){
//              return false;
//          //Shift+F10
//          }else if((e.shiftKey) && (e.keyCode == 121)){
//              return false;
//          //Ctrl+U
//          }else if((e.ctrlKey) && (e.keyCode == 85)){
//              return false;
//          }
//      };
//      //屏蔽鼠标右键
//      document.oncontextmenu = function (){
//          return false;
//      }
//    }



function back(){
	window.parent.refresh();
	$("#childPage" , parent.document).hide();
	$("#childPage2" , parent.document).attr("src","")
	$(".head,.footer" , parent.document).show();
	$(".head,.footer").show();
}

function operate(value, row, index) {
   	var html = "";
	
	if(row.index > 0) {
		html +="<div class='task' >"
		html +="  <div class='task_title' ><span>"+row.title+"</span></div>";
		html +="  <div class='task_num'><span>浏览次数 : </span><span>"+row.readNum+"</span></div>";
		html +="  <div class='task_time'><span>发布时间 : </span><span>"+formatDTime2(row.created)+"</span></div>";
		html +="</div>";
	} else {
		html +="<div class='tasks' >"
		html +="  <div class='task_title' ><span>"+row.title+"</span></div>";
		html +="</div>";
	}

   	
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
			
			$("#childPage" , parent.document).hide();
			$("#childPage2" , parent.document).show();
			$("#childPage2" , parent.document).attr("src","write.html")
			
			
			// $("#childPage").attr("src","");
			// // localStorage.setItem("name", row._serverData.name);
			// // localStorage.setItem("id", row.id);
			
			// $("#article1").hide();
			
			// $("#childPage").show(); 
			// $("#childPage").attr("src","write.html")
			
		}
};



showTable();
function showTable() {
// 	$('#table').bootstrapTable('destroy').bootstrapTable({
// //		url : subURL('equipmentCapacity/search.action'), //请求后台的URL（*）  
// 		dataType:'jsonp',
// //		striped : false, // 是否显示行间隔色
// 		pagination : false, // 是否显示分页（*）
// //		sortable : false, // 是否启用排序
// //		sortOrder : "asc", // 排序方式
// //      toolbar:"#toolbar",
// 		pageNumber : 1, // 初始化加载第一页，默认第一页
// 		pageSize : 99999, // 每页的记录行数（*）
// //		pageList : [ 10, 25, 50, 100 ], // 可供选择的每页的行数（*）
// 		strictSearch : true,
// 		clickToSelect : true, // 是否启用点击选中行
// 		height : $(window).height()-55, // 行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
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
	
	$.ajax({
	  url: 'json/fy.json',
	  dataType: 'json',
	  success: function(data) {
	    // 获取 JSON 文件中的数据
		console.log(eval('data.type' + localStorage.getItem("fy_type")))
		var result = eval('data.type' + localStorage.getItem("fy_type"))
		
		var html = "";
		for(var i=0;i<result.length;i++) {
			
			if(result[i].index > 0) {
				html +="<div class='task' data-title='"+result[i].title+"' data-index='"+result[i].index+"' onclick='myFunction(this)' >"
				html +="  <div class='task_title' ><span>"+result[i].title+"</span></div>";
				// html +="  <div class='task_num'><span>浏览次数 : </span><span>"+result[i].readNum+"</span></div>";
				// html +="  <div class='task_time'><span>发布时间 : </span><span>"+formatDTime2(row.created)+"</span></div>";
				html +="</div>";
			} else {
				html +="<div class='tasks' >"
				html +="  <div class='task_title' ><span>"+result[i].title+"</span></div>";
				html +="</div>";
			}
		}
		
		$("#article1").html(html);
		// $('#table').bootstrapTable('load',result);
		// $(".home1_1_content .dd").html(data.wirteData[0].Attribution);
		// $(".home1_1_content .zw").html(data.wirteData[0].content);
		// $(".home1_1_content .ly").html(data.wirteData[0].Preface);
		// $(".home1_1_content .sy").html(data.wirteData[0].mean);
	
	    // 可以对 data 进行其他操作
	  },
	  error: function(xhr, status, error) {
	    console.error('发生错误:', error);
	  }
	});
	
	// var queryBuilder = Backendless.DataQueryBuilder.create();
	
	// // 按特定字段降序排列，并限制查询结果数量为 1
	// queryBuilder.setSortBy(['created ASC']); // 根据 created 字段降序排列
	// queryBuilder.setWhereClause('type = ' + localStorage.getItem("fy_type"));
	
	// // 查询 articleTable 表的数据，获取最新的一条数据
	// Backendless.Data.of('articleTable').find(queryBuilder)
	//   .then(function(result) {
	//     // 查询成功，result 包含了最新的一条数据
	//     console.log('最新的一条数据:', result); // 如果存在数据的话，最新的一条数据位于数组的第一个位置
	// 	$('#table').bootstrapTable('load',result);
	//   })
	//   .catch(function(error) {
	//     // 查询失败，处理错误
	//     console.error('查询失败:', error);
	//   });
	
	// var directoryData = [
	// 	{
	// 		name: "主日传道"
	// 	},
	// 	{
	// 		name: "诗篇三十首"
	// 	},
	// 	{
	// 		name: "灵修三十问"
	// 	},
	// 	{
	// 		name: "简读圣经"
	// 	},
	// 	{
	// 		name: "教会历史"
	// 	}
	// ]
	
	// $('#table').bootstrapTable('load',directoryData);
	
};

function myFunction(param) {
	localStorage.setItem("fy_name", $(param).data('title'));
	localStorage.setItem("fy_index", $(param).data('index'));
	
	$("#childPage" , parent.document).hide();
	$("#childPage2" , parent.document).show();
	$("#childPage2" , parent.document).attr("src","write.html")
}


// var APP_ID = '{{appid}}';
// var APP_KEY = '{{appkey}}';
 
// AV.init({
// appId: 'KFgQElcSadU5UkzXNreHt1cB-gzGzoHsz',
// appKey: 'yLASWKfAAaOnLc9toHMTq4K6'
// });


// var query = new AV.Query('article'); 
// query.get(localStorage.id).then(function (todo) {
//     // 成功获得实例
//     // todo 就是 id 为 57328ca079bc44005c2472d0 的 Todo 对象实例
//     console.log(JSON.stringify(todo));
    
//     addRecord(todo);
    
    
// }, function (error) {
//     // 异常处理
//     console.log(error);
// });

// function addRecord(param){
// 	console.log(param);
// 	 var str = 'update article set number='+(param._serverData.number+1)+' where objectId="'+localStorage.id+'"';
// 	AV.Query.doCloudQuery(str).then(function (data) {
// 	  console.log(JSON.stringify(data));
// 	}, function (error) {
// 	  console.error(error);
// 	});
	
// 	var Record = AV.Object.extend('record');
// 	var record = new Record();
// 		record.save(
// 			{
// 				articleId: localStorage.id,
// 				name:localStorage.name,
// 				createDate:new Date().getTime(),
// 				ip:returnCitySN["cip"],
// 				cname:returnCitySN['cname']
// 			}
// 		).then(function(object) {
// 			console.log(object);
// 	})
// }


// /*****************************评论*************************/

// function alertDiss(){
// 	$("#myModal").modal('show');
// }

// showDiss()
// function showDiss(){
// 	AV.Query.doCloudQuery('select * from discuss where uid="'+localStorage.id+'" order by createDate desc').then(function (data) {
// 	    console.log(data); 
// 	    var html = "";
// 	    for(var i=0;i<data.results.length;i++){
// 	    	html += '<div>';
// 	    	html += ' <p>'+data.results[i]._serverData.content+'</p>';
// 	    	html += ' <p>'+formatDTime2(data.results[i]._serverData.createDate)+'</p>';
// 	    	html += '</div>';
// 	    }
// 	    $(".dissTaskContent").html(html);
// 	}, function (error) {
// 	    console.log(JSON.stringify(error));
// 	}); 
// }

// function addDiss(){
// 	if($("#dissIn").val()==""){
// //		alert("请输入内容");
// 		return false;
// 	}
// 	var discuss = AV.Object.extend('discuss');
// 	var discuss = new discuss();
// 		discuss.save({
			
// 			content: $("#dissIn").val(),
// 			createDate:new Date().getTime(),
// 			uid:localStorage.id,
// 			name:localStorage.name,
// 			ip:returnCitySN["cip"],
// 			cname:returnCitySN['cname']
		
// 		}).then(function(object) {
			
// 			query.get(localStorage.id).then(function (todo) {

// 			    console.log(JSON.stringify(todo));
			    
// 			    diss_tc(todo);
			    
// 			}, function (error) {
// 			    // 异常处理
// 			    console.log(error);
// 			});
			
// 			$("#myModal").modal('hide');
// 			$("#dissIn").val('');
// 			showDiss();
// 	})
// }

// function diss_tc(param){
// 	console.log(param);
//     var str = 'update article set discuss='+(param._serverData.discuss+1)+' where objectId="'+localStorage.id+'"';
// 	AV.Query.doCloudQuery(str).then(function (data) {
// 	  console.log(JSON.stringify(data));
// 	}, function (error) {
// 	  console.error(error);
// 	});
// }

// /***************************/
// $.ajax({
// 	url: localStorage.name + ".txt",
// 	success: function(data, status) {
// 		$("#txtContent").html(data)
// 	},
// 	error: function(data, status) {
// 	}
// });


// /****************************************/

// function formatDTime2(time) {
// 	var Rime = "";
// 	if(time != 0){
// 		var date = new Date(time);
// 		var y = date.getFullYear();
// 		var M = date.getMonth()<9 ? '0'+(date.getMonth()+1) : (date.getMonth()+1);
// 		var d = date.getDate()<10 ? '0'+date.getDate() : date.getDate();
// 		var h = date.getHours()<10 ? '0'+date.getHours() : date.getHours();
// 		var m = date.getMinutes()<10 ? '0'+date.getMinutes() : date.getMinutes();
// 		var s = date.getSeconds()<10 ? '0'+date.getSeconds() : date.getSeconds();
// 		Rime = y+"-"+M+"-"+d+" "+h+":"+m+":"+s;
// 	}
// 	return Rime;
// }


