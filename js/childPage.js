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



function back(){
	window.parent.refresh();
	$("#childPage" , parent.document).hide();
}


var APP_ID = '{{appid}}';
var APP_KEY = '{{appkey}}';
 
AV.init({
  appId: 'KFgQElcSadU5UkzXNreHt1cB-gzGzoHsz',
  appKey: 'yLASWKfAAaOnLc9toHMTq4K6'
});


var query = new AV.Query('article'); 
query.get(localStorage.id).then(function (todo) {
    // 成功获得实例
    // todo 就是 id 为 57328ca079bc44005c2472d0 的 Todo 对象实例
    console.log(JSON.stringify(todo));
    
    addRecord(todo);
    
    
}, function (error) {
    // 异常处理
    console.log(error);
});

function addRecord(param){
	console.log(param);
	 var str = 'update article set number='+(param._serverData.number+1)+' where objectId="'+localStorage.id+'"';
	AV.Query.doCloudQuery(str).then(function (data) {
	  console.log(JSON.stringify(data));
	}, function (error) {
	  console.error(error);
	});
	
	var Record = AV.Object.extend('record');
	var record = new Record();
		record.save(
			{
				articleId: localStorage.id,
				name:localStorage.name,
				createDate:new Date().getTime()
			}
		).then(function(object) {
			console.log(object);
	})
}


/*****************************评论*************************/

function alertDiss(){
	$("#myModal").modal('show');
}

showDiss()
function showDiss(){
	AV.Query.doCloudQuery('select * from discuss where uid="'+localStorage.id+'" order by createDate desc').then(function (data) {
	    console.log(data); 
	    var html = "";
	    for(var i=0;i<data.results.length;i++){
	    	html += '<div>';
	    	html += ' <p>'+data.results[i]._serverData.content+'</p>';
	    	html += ' <p>'+formatDTime2(data.results[i]._serverData.createDate)+'</p>';
	    	html += '</div>';
	    }
	    $(".dissTaskContent").html(html);
	}, function (error) {
	    console.log(JSON.stringify(error));
	}); 
}

function addDiss(){
	if($("#dissIn").val()==""){
//		alert("请输入内容");
		return false;
	}
	var discuss = AV.Object.extend('discuss');
	var discuss = new discuss();
		discuss.save({
			
			content: $("#dissIn").val(),
			createDate:new Date().getTime(),
			uid:localStorage.id,
			name:localStorage.name
		
		}).then(function(object) {
			
			query.get(localStorage.id).then(function (todo) {

			    console.log(JSON.stringify(todo));
			    
			    diss_tc(todo);
			    
			}, function (error) {
			    // 异常处理
			    console.log(error);
			});
			
			$("#myModal").modal('hide');
			$("#dissIn").val('');
			showDiss();
	})
}

function diss_tc(param){
	console.log(param);
    var str = 'update article set discuss='+(param._serverData.discuss+1)+' where objectId="'+localStorage.id+'"';
	AV.Query.doCloudQuery(str).then(function (data) {
	  console.log(JSON.stringify(data));
	}, function (error) {
	  console.error(error);
	});
}


/****************************************/

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