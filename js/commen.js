function alertDiss(){
	$("#myModal").modal('show');
}

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