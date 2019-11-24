


var APP_ID = '{{appid}}';
var APP_KEY = '{{appkey}}';
 
AV.init({
  appId: 'KFgQElcSadU5UkzXNreHt1cB-gzGzoHsz',
  appKey: 'yLASWKfAAaOnLc9toHMTq4K6'
});

var flag_type = 4;






function operate(value, row, index) {
   	var html = "";
   	

	   	html +="<div class='task' >"
		html +="  <div class='task_title' ><span>"+row._serverData.name+"</span></div>";
		html +="  <div class='task_num'><span>浏览次数:</span><span>"+row._serverData.number+"</span></div>";
		html +="  <div class='task_time'><span>发布时间:</span><span>"+formatDTime2(row._serverData.createdDate)+"</span></div>";
		html +="</div>";


	
	return html;
}
/**
 * 操作点击事件
 */
window.operateEvents = {
		'click .task' : function(e, value, row, index) {
			$("#childPage").attr("src","");
			localStorage.setItem("name", row._serverData.name);
			localStorage.setItem("id", row.id);
			
			$(".head,.container").hide()
			
			$("#childPage").show(); 
			$("#childPage").attr("src","rj/write_lucky.html")
			
		}
};


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


AV.Query.doCloudQuery('select * from article where type = 5 order by createdDate desc').then(function (data) {
    console.log(data);
    $('#table').bootstrapTable('load',data.results);
}, function (error) {
    console.log(JSON.stringify(error));
});  




function toWz(flag){
	
	flag_type = flag;
	AV.Query.doCloudQuery('select * from article where type = 5 order by createdDate desc').then(function (data) {
	    console.log(data);
	    $('#table').bootstrapTable('load',data.results);
	}, function (error) {
	    console.log(JSON.stringify(error));
	});  
}




function refresh(){
	AV.Query.doCloudQuery('select * from article where type = 5 order by createdDate desc').then(function (data) {
	    console.log(data);
	    $('#table').bootstrapTable('load',data.results);
	}, function (error) {
	    console.log(JSON.stringify(error));
	}); 
}







toWz(1);






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
