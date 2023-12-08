
(function () {
  // const APP_ID = 'A184E9B3-1442-346A-FF32-26B851AEBB00';
  // const API_KEY = '184CD862-43CC-4E24-89F1-FF3FFA1956B4';

  // Backendless.serverURL = 'https://api.backendless.com';
  // Backendless.initApp(APP_ID, API_KEY);
  
  
  
  // LeanCloud - 初始化 - 将这里的 appId 、 appKey 和 serverURL 替换成自己的应用数据
  
	AV.init({
	  appId: 'qpteF7Ts9fDrXUSq3vctyU1v-gzGzoHsz',
	  appKey: 'fTBouTNouAeSD0talmQy3I0N',
	  serverURLs: 'https://qptef7ts.lc-cn-n1-shared.com'
	});

    // 创建一个 TestObject 对象
    var TestObject = AV.Object.extend('TestObject');
    var testObject = new TestObject();
    
    // 设置数据
    testObject.set('foo', 'bar');
    
    // 保存数据到 LeanCloud 的 TestObject 表
    testObject.save().then(function(object) {
      // 数据保存成功后的处理
      console.log('LeanCloud Object saved with objectId: ' + object.id);
    }).catch(function(error) {
      // 数据保存失败后的处理
      console.error('Error while saving to LeanCloud:', error);
    });
	
	// 定义每页的数据量
	// var pageSize = 1000;

	// // 创建查询对象
	// var query = new AV.Query('TestObject');

	// // 设置每页数据的数量
	// query.limit(pageSize);

	// // 设置当前页码（示例中的 page 变量可以是你想要获取的页码）
	// query.skip(pageSize * (1 - 1));
	
	// // 查询 TestObject 表的全部数据
	// query.find().then(function(results) {
	//   // 查询成功后的处理
	//   console.log('Successfully retrieved ' + results.length + ' TestObjects');
	//   // 遍历查询结果
	//   for (var i = 0; i < results.length; i++) {
	//     var object = results[i];
	//     console.log(object.id + ' - foo: ' + object.get('foo'));
	//   }
	// }).catch(function(error) {
	//   // 查询失败后的处理
	//   console.error('Error while fetching data from TestObject:', error);
	// });
	

	
	// // 假设你有一个 User 表
	// var query = new AV.Query('user');
	
	// // 设置查询条件
	// query.equalTo('userName', '17012340244');
	
	// // 查询操作
	// query.find().then((results) => {
	//   if (results.length > 0) {
	//     console.log('用户存在');
	//   } else {
	//     console.log('用户不存在');
	//   }
	// }).catch((error) => {
	//   console.error('查询失败：', error);
	// });
  
  // Backendless.Data.of( "TestTable2" ).save( { foo:"bar" } )
  //     .then( function( obj ) {
  //         console.log( "object saved. objectId " + obj.objectId )
  //     } )
  //     .catch( function( error ) {
  //         console.log( "got error - " + error )
  //     })
	  
// Backendless.Data.of('TestTable').find('7898')
//   .then(function(result) {
//     // 查询成功，result 包含了查询到的数据
//     console.log('2查询到的数据:', result);
//   })
//   .catch(function(error) {
//     // 查询失败，处理错误
//     console.error('2查询失败:', error);
//   });	 
   
   
//    // 创建一个数据查询
//    var queryBuilder = Backendless.DataQueryBuilder.create();
//    queryBuilder.setPageSize(100); // 设置每页返回的数据量
//    queryBuilder.setOffset(0); // 设置偏移量，0 表示第一页
   
//    // 设置模糊查询条件，假设要查找包含 'keyword' 的 name 列数据
//    queryBuilder.setWhereClause('foo LIKE \'%bar%\'');
   
//    // 查询 TestTable2 表的数据
//    Backendless.Data.of('TestTable').find(queryBuilder)
//      .then(function(result) {
//        // 查询成功，result 包含了查询到的数据
//        console.log('3查询到的数据:', result);
//      })
//      .catch(function(error) {
//        // 查询失败，处理错误
//        console.error('3查询失败:', error);
//      });
   
   
//    var queryBuilder = Backendless.DataQueryBuilder.create();
//    queryBuilder.setPageSize(100); // 设置每页返回的数据量
//    queryBuilder.setOffset(0); // 设置偏移量，0 表示第一页
   
//    // 查询 TestTable2 表的所有数据
//    Backendless.Data.of('TestTable2').find(queryBuilder)
//      .then(function(result) {
//        // 查询成功，result 包含了查询到的数据
//        console.log('3查询到的数据:', result);
//      })
//      .catch(function(error) {
//        // 查询失败，处理错误
//        console.error('3查询失败:', error);
//      });




// // 创建一个数据查询
// var queryBuilder = Backendless.DataQueryBuilder.create();

// // 查询 writeTable 表的数据
// Backendless.Data.of('writeTable').find(queryBuilder)
//   .then(function(result) {
//     // 查询成功，result 包含了所有数据
//     // 对查询结果进行处理，计算每个类型的数量
//     var typeCounts = {}; // 用于存储每个类型的数量

//     // 遍历每条数据，统计每个类型的数量
//     result.forEach(function(item) {
//       var type = item.type; // 假设类型保存在 type 字段中
//       typeCounts[type] = (typeCounts[type] || 0) + 1; // 计算每个类型出现的次数
//     });

//     // 输出每个类型的数量
//     console.log('每个类型的数量:', typeCounts);
//   })
//   .catch(function(error) {
//     // 查询失败，处理错误
//     console.error('查询失败:', error);
//   });


















  // const testTableStore = Backendless.Data.of('TestTable');

  // const $createObjStatusMsg = document.getElementById('create-obj-status');
  // const $modifierPanel = document.getElementById('modifier-panel');
  // const $currentValue = document.getElementById('current-value');
  // const $input = document.getElementById('input');
  // const $updateBtn = document.getElementById('update-btn');

  // function createObject() {
  //   return testTableStore.save({ foo: 'Hello World' })
  //     .then(function (object) {
  //       $createObjStatusMsg.classList.add('text-success');
  //       $createObjStatusMsg.innerText = 'Object has been saved in real-time database';

  //       return object;
  //     })
  //     .catch(function (error) {
  //       $createObjStatusMsg.classList.add('text-danger');
  //       $createObjStatusMsg.innerText = error.message;

  //       throw error;
  //     });
  // }

  // function updateObjectValue(object) {
  //   $currentValue.innerText = object.foo
  // }

  // function subscribeOnObjectChanges(object) {
  //   testTableStore.rt().addUpdateListener("objectId = '" + object.objectId + "'", updateObjectValue);
  // }

  // function onEnter(callback) {
  //   return function onKeyPress(e) {
  //     if (e.keyCode === 13) {//Enter key
  //       callback()
  //     }
  //   }
  // }

  // function onObjectCreate(object) {
  //   $modifierPanel.classList.remove('d-none');

  //   $updateBtn.addEventListener('click', saveObject);
  //   $input.addEventListener('keypress', onEnter(saveObject));

  //   updateObjectValue(object);
  //   subscribeOnObjectChanges(object);

  //   function saveObject() {
  //     object.foo = $input.value;

  //     $input.value = '';

  //     testTableStore.save(object);
  //   }
  // }

  // createObject().then(onObjectCreate)
})();

function formatDate(date) {
	const year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate();

	// 补零
	month = (month < 10) ? `0${month}` : month;
	day = (day < 10) ? `0${day}` : day;

	// 返回特定格式的日期
	return `${year}年${month}月${day}日`;
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