function alertDiss(){
	$("#myModal").modal('show');
}

showDiss()
async function showDiss(){
	
	// 创建一个查询 commentTable 表的查询
	    const commentQuery = new AV.Query('commenTable');
	
	    // 查询 commentTable 中 objectId 为 '6572cfc29c4d834fea07ce8b' 的数据
	    commentQuery.equalTo('readId', localStorage.getItem('fy_id'));
	    const commentResults = await commentQuery.find();
	
	    // 获取 commentTable 表中的 userId 数组
	    const userIds = commentResults.map(comment => comment.get('userId'));
	
	    // 创建一个 user 表的查询
	    const userQuery = new AV.Query('user');
	
	    // 设置查询条件，在 user 表中查询匹配的 objectId
	    userQuery.containedIn('objectId', userIds);
	    const userResults = await userQuery.find();
	
	    // 合并数据
	    const mergedData = commentResults.map(comment => {
	      const userId = comment.get('userId');
	      const userData = userResults.find(user => user.id === userId); // 在 user 表结果中寻找匹配的用户数据
	      return {
	        commentData: comment,
	        userData: userData ? userData.toJSON() : null, // 将用户数据转换为 JSON 格式
	      };
	    });
	
		// 输出合并后的数据
		console.log('合并后的数据：', mergedData);
		var html = '';
	    for(var i=0;i<mergedData.length;i++){
	    	html += '<div>';
			html += ' <p>'+mergedData[i].userData.nickname+'<span style="margin:0 5px;" >于</span>'+formatDTime2(mergedData[i].commentData._serverData.addDate)+'评论</p>';
	    	html += ' <p>'+mergedData[i].commentData._serverData.content+'</p>';
			if(mergedData[i].userData.objectId == localStorage.getItem('fy_userId')) {
				html += ' <button class="btn btn-danger btn-sm removeBtn" >删除</button>';
			}
	    	html += '</div>';
	    }
	    $(".dissTaskContent").html(html);
	
	// // 创建一个查询
	// const commentQuery = new AV.Query('commenTable');
	
	// // 查询 commentTable 中 objectId 为 '6572cfc29c4d834fea07ce8b' 的数据
	// commentQuery.equalTo('readId', localStorage.getItem('fy_id'));
	
	// // 执行 commentTable 表的查询
	// commentQuery.find().then(commentResults => {
	//   // 处理 commentTable 表中 objectId 为 '6572cfc29c4d834fea07ce8b' 的数据
	//   console.log('commentTable 表中 objectId 为 6572cfc29c4d834fea07ce8b 的数据：', commentResults);
	
	//   // 获取 commentTable 表中的 userId 数组
	//   const userIds = commentResults.map(comment => comment.get('userId'));
	
	//   // 创建一个查询 user 表的查询
	//   const userQuery = new AV.Query('_User');
	
	//   // 设置查询条件，在 user 表中查询匹配的 objectId
	//   userQuery.containedIn('objectId', userIds);
	
	//   // 执行 user 表的查询
	//   userQuery.find().then(userResults => {
	//     // 处理与 commentTable 表中 userId 匹配的 user 表数据
	//     console.log('与 commentTable 表中 userId 匹配的 user 表数据：', userResults);
	//   }).catch(userError => {
	//     console.error('查询 user 表出错：', userError);
	//   });
	// }).catch(commentError => {
	//   console.error('查询 commentTable 表出错：', commentError);
	// });
	// AV.Query.doCloudQuery('select * from discuss where uid="'+localStorage.id+'" order by createDate desc').then(function (data) {
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

// 示例异步函数
function performAsyncOperation(results) {
  const queryx = new AV.Query('user');
  
  // 设置查询条件
  queryx.equalTo('objectId', results[i]._serverData.userId); // 替换 userId 为你想要匹配的用户 ID
  
  // 执行查询
  queryx.find().then(resultsx => {
    // 处理查询结果
    console.log('查询结果：', resultsx);
    var html = '';
    html += '<div>';
    html += ' <p>'+resultsx[0]._serverData.nickname+'</p>';
   
   return "666";
  
  }).catch(error => {
    // 处理查询错误
    console.error('查询出错：', error);
  });  
}

function addDiss(){
	if($("#dissIn").val()==""){
		alert("请输入内容");
		return false;
	} else {
		var CommenTable = AV.Object.extend('commenTable');
		var commenTable = new CommenTable();
		
		commenTable.set('content', $("#dissIn").val());
		// 设置数据
		commenTable.set('userId', localStorage.fy_userId);
		commenTable.set('userName', localStorage.fy_userName);
		
		commenTable.set('readId', localStorage.fy_id);
		commenTable.set('index', localStorage.fy_index);
		commenTable.set('type', localStorage.fy_type);
		commenTable.set('title', localStorage.fy_name);
		
		commenTable.set('addDate', formatDTime2(new Date()));
		
		// 保存数据到 LeanCloud 的 TestObject 表
		commenTable.save().then(function(object) {
		  // 数据保存成功后的处理
			$("#myModal").modal('hide');
			showDiss();
		}).catch(function(error) {
		  // 数据保存失败后的处理
		  console.error('Error while saving to LeanCloud:', error);
		});
	}
}

// function diss_tc(param){
// 	console.log(param);
//     var str = 'update article set discuss='+(param._serverData.discuss+1)+' where objectId="'+localStorage.id+'"';
// 	AV.Query.doCloudQuery(str).then(function (data) {
// 	  console.log(JSON.stringify(data));
// 	}, function (error) {
// 	  console.error(error);
// 	});
// }