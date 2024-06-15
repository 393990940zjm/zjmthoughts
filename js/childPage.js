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



function a1() {
	if(localStorage.fy_type == 3) {
		var fontSize = $("pre").css("font-size");
		var fontSizeNum = Number(fontSize.split("px")[0]);
		$("pre").css("font-size",(fontSizeNum + 1) + 'px');
		localStorage.setItem("fy_fontSize", (fontSizeNum + 1) + 'px');
	} else {
		var fontSize = $(".writeContent").css("font-size");
		var fontSizeNum = Number(fontSize.split("px")[0]);
		$(".writeContent").css("font-size",(fontSizeNum + 1) + 'px');
		localStorage.setItem("fy_fontSize", (fontSizeNum + 1) + 'px');
	}
	
}
function a0() {
	if(localStorage.fy_type == 3) {
		var fontSize = $("pre").css("font-size");
		var fontSizeNum = Number(fontSize.split("px")[0]);
		if(fontSizeNum > 12) {
			$("pre").css("font-size",(fontSizeNum - 1) + 'px');
			localStorage.setItem("fy_fontSize", (fontSizeNum + 1) + 'px');
		}
	} else {
		var fontSize = $(".writeContent").css("font-size");
		var fontSizeNum = Number(fontSize.split("px")[0]);
		if(fontSizeNum > 12) {
			$(".writeContent").css("font-size",(fontSizeNum - 1) + 'px');
			localStorage.setItem("fy_fontSize", (fontSizeNum + 1) + 'px');
		}
	}

}
function c1(color) {
	if(localStorage.fy_type == 3) { 
		$("pre").css("background-color",color);
	} else {
		$(".writeContent").css("background-color",color);
	}
	localStorage.setItem("fy_backgroundColor", color);
}


function back(){
	// window.parent.refresh();
	$("#childPage" , parent.document).show();
	$("#childPage2" , parent.document).hide();
	$("#childPage2" , parent.document).attr("src","")
	// $(".head,.footer" , parent.document).show();
	// $(".head,.footer").show();
}

var ReadRecord = AV.Object.extend('readRecord');
var readRecord = new ReadRecord();

// 设置数据
readRecord.set('userId', localStorage.fy_userId);
readRecord.set('userName', localStorage.fy_userName);
readRecord.set('nicename', localStorage.fy_nickName);

readRecord.set('index', localStorage.fy_index);
readRecord.set('type', localStorage.fy_type);
readRecord.set('title', localStorage.fy_name);
readRecord.set('readDate', formatDTime2(new Date()));

// 保存数据到 LeanCloud 的 TestObject 表
readRecord.save().then(function(object) {
	
}).catch(function(error) {
  // 数据保存失败后的处理
  console.error('Error while saving to LeanCloud:', error);
});



const query = new AV.Query('readTable');
query.get(localStorage.fy_id).then(object => {
  // 读取当前 readNum 的值
  let readNum = object.get('readNum');
  
  // 将 readNum 值加 1
  readNum++;

  // 更新对象的 readNum 字段
  object.set('readNum', readNum);

  // 保存更新到 LeanCloud 数据库
  return object.save();
}).then(updatedObject => {
  console.log('成功更新 readNum 字段:', updatedObject);
}).catch(error => {
  console.error('更新字段失败:', error);
});

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


/*****************************评论*************************/

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

/***************************/
$.ajax({
	url: 'wz/type' + localStorage.fy_type + '/' + localStorage.fy_index + ".txt",
	// url: "wz/采蘑菇的小男孩.txt",
	success: function(data, status) {
		$("#txtContent").html(data)
		
		if(localStorage.fy_fontSize) {
			$("pre").css("font-size",localStorage.fy_fontSize);
		}
		// if(localStorage.fy_lineHeight) {
		// 	$("pre").css("line-height",localStorage.fy_lineHeight);
		// }
		if(localStorage.fy_backgroundColor) {
			$("pre").css("background-color",localStorage.fy_backgroundColor);
		}
		
	},
	error: function(data, status) {
	}
});


/****************************************/

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
