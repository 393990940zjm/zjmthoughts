


var APP_ID = '{{appid}}';
var APP_KEY = '{{appkey}}';
 
AV.init({
  appId: 'KFgQElcSadU5UkzXNreHt1cB-gzGzoHsz',
  appKey: 'yLASWKfAAaOnLc9toHMTq4K6'
});

var flag_type = 4;

var flagAdd = 0; //0： 新增   1：修改
var toMeId = '';



function operate(value, row, index) {
   	var html = "";
   	

	   	html +="<div class='task' >"
		html +="  <div class='task_title' ><span>"+formatDTime(row._serverData.date)+"</span></div>";
		html +="  <div class='task_num'><span>浏览次数:</span><span>"+row._serverData.number+"</span></div>";
		html +="  <div class='task_time'><span>发布时间:</span><span>"+formatDTime2(row._serverData.createdDate)+"</span></div>";
		html +="  <div class='delete' onclick='deletex(this);' data-id='"+row.id+"' >删除</div>";
		html +="</div>";


	
	return html;
}
/**
 * 操作点击事件
 */
window.operateEvents = {
		'click .task' : function(e, value, row, index) {
			
			if(e.toElement.className!="delete"){
				flagAdd = 1;
				toMeId = row.id;
				$("#myModal").modal('show');
				$("#myDate").val(formatDTime(row._serverData.date));
				$("#addtext").val(row._serverData.content);
				
				var query = new AV.Query('article'); 
				query.get(row.id).then(function (todo) {
				    // 成功获得实例
				    // todo 就是 id 为 57328ca079bc44005c2472d0 的 Todo 对象实例
				    
				    addRecord(todo);
				    
				    
				}, function (error) {
				    // 异常处理
				    console.log(error);
				});
			}
			
	
			
//			$("#childPage").attr("src","");
//			localStorage.setItem("name", row._serverData.name);
//			localStorage.setItem("id", row.id);
//			
//			$(".head,.container").hide()
//			
//			$("#childPage").show(); 
//			$("#childPage").attr("src","rj/write_lucky.html")
			
		},
	
};




function addRecord(param){
	console.log(param);
	 var str = 'update article set number='+(param._serverData.number+1)+' where objectId="'+toMeId+'"';
	AV.Query.doCloudQuery(str).then(function (data) {
	  console.log(JSON.stringify(data));
	}, function (error) {
	  console.error(error);
	});
	
	var Record = AV.Object.extend('record');
	var record = new Record();
		record.save(
			{
				articleId: toMeId,
				name:param._serverData.name,
				createDate:new Date().getTime(),
				ip:returnCitySN["cip"],
				cname:returnCitySN['cname']
			}
		).then(function(object) {
			console.log(object);
	})
}



showTable();
function showTable() {
	$('#table').bootstrapTable('destroy').bootstrapTable({
//		url : subURL('equipmentCapacity/search.action'), //请求后台的URL（*）  
		dataType:'jsonp',
//		striped : false, // 是否显示行间隔色
		pagination : true, // 是否显示分页（*）
//		sortable : false, // 是否启用排序
//		sortOrder : "asc", // 排序方式
//      toolbar:"#toolbar",
		pageNumber : 1, // 初始化加载第一页，默认第一页
		pageSize : 10, // 每页的记录行数（*）
		pageList : [ ], // 可供选择的每页的行数（*）
		strictSearch : true,
		clickToSelect : true, // 是否启用点击选中行
		height : $(window).height()-50, // 行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
		columns : [ 
       {
	       	field : '',
	       	title : '',
	       	align:"center",
	       	valign:'middle',
	       	formatter:operate,
	       	events : operateEvents
       }
		],
		onLoadSuccess : function(data) {

		}
	});
	
};


AV.Query.doCloudQuery('select * from article where type = 7 order by createdDate desc').then(function (data) {
    console.log(data);
    $('#table').bootstrapTable('load',data.results);
}, function (error) {
    console.log(JSON.stringify(error));
});  




function toWz(flag){
	
	flag_type = flag;
	AV.Query.doCloudQuery('select * from article where type = 7 order by createdDate desc').then(function (data) {
	    console.log(data);
	    $('#table').bootstrapTable('load',data.results);
	}, function (error) {
	    console.log(JSON.stringify(error));
	});  
}




function refresh(){
	AV.Query.doCloudQuery('select * from article where type = 7 order by createdDate desc').then(function (data) {
	    console.log(data);
	    $('#table').bootstrapTable('load',data.results);
	}, function (error) {
	    console.log(JSON.stringify(error));
	}); 
}







toWz(1);




function formatDTime(time) {
	var Rime = "";
	if(time != 0){
		var date = new Date(time);
		var y = date.getFullYear();
		var M = date.getMonth()<9 ? '0'+(date.getMonth()+1) : (date.getMonth()+1);
		var d = date.getDate()<10 ? '0'+date.getDate() : date.getDate();
		Rime = y+"-"+M+"-"+d;
	}
	return Rime;
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

function toloveForever(){
	location.href='loveforever.html';
}

function add(){
	flagAdd = 0;
	$("#myDate,#addtext").val('');
	$("#myModal").modal('show');
}

function saveAdd(){
	
	if($("#myDate").val()==""){
		alert('请选择日期');
		return false;
	}
	
	if($("#addtext").val()==""){
		alert('请输入内容');
		return false;
	}
	
	if(flagAdd==0){
		
		var article = AV.Object.extend('article');
		var article = new article();
		article.save({
			
			date:new Date($("#myDate").val()).getTime(),
			content: $("#addtext").val(),
			createdDate:new Date().getTime(),
			name:formatDTime2(new Date().getTime()),
			number:0,
			type:7,
			discuss:0
		
		}).then(function(object) {
			$("#myModal").modal('hide');
			refresh();
	})
		
	}else if(flagAdd==1){
		
		AV.Query.doCloudQuery('update article set content="'+$("#addtext").val()+'" , date='+new Date($("#myDate").val()).getTime()+' where objectId="'+toMeId+'"')
			.then(function (data) {
			    // data 中的 results 是本次查询返回的结果，AV.Object 实例列表
			    $("#myModal").modal('hide');
				refresh();
			}, function (error) {
			    // 异常处理
			    console.error(error);
		});
		
	}
	
	
	
}

function deletex(param){
	
	toMeId = $(param).data('id');
	
	 if(confirm("确定要删除吗？")){
	 	
	      AV.Query.doCloudQuery('update article set type=-1 where objectId="'+toMeId+'"')
			.then(function (data) {
			    // data 中的 results 是本次查询返回的结果，AV.Object 实例列表
//			    var results = data.results;
//			    console.log(JSON.stringify(data));
				refresh();
				alert('已删除');
			}, function (error) {
			    // 异常处理
			    console.error(error);
		});
	  }
	
	return false;
}

initDay();
function initDay(){
	var date = new Date().getTime();
	var old = 1589212800000;
	$("#day").html(Math.ceil((date-old)/(1000*60*60*24)))
}
