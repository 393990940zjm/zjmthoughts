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
   	var html = "";
   	
   	if(row._serverData.type==3){
   		html +="<div class='task' style='height:90px;' >";
   		html +="	<div class='task_left' >";
   		html +="		<img src='"+row._serverData.img+"' />";
   		html +="	</div>";
   		html +="	<div class='task_right' >";
		html +="       <div class='task_title' ><span>"+row._serverData.name+"</span></div>";
		html +="       <div class='task_num'><span>浏览次数:</span><span>"+row._serverData.number+"</span></div>";
		html +="       <div class='task_time'><span>发布时间:</span><span>"+formatDTime2(row._serverData.createdDate)+"</span></div>";   					
   		html +="	</div>";
		html +="</div>";
   	}else{
	   	html +="<div class='task' >"
		html +="  <div class='task_title' ><span>"+row._serverData.name+"</span></div>";
		html +="  <div class='task_num'><span>浏览次数:</span><span>"+row._serverData.number+"</span></div>";
		html +="  <div class='task_time'><span>发布时间:</span><span>"+formatDTime2(row._serverData.createdDate)+"</span></div>";
		html +="</div>";
   	}

	
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
			
			$(".head,.footer").hide();
			
			$("#childPage").show(); 
			$("#childPage").attr("src","wz/write.html")
			
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
//		pageList : [ 10, 25, 50, 100 ], // 可供选择的每页的行数（*）
		strictSearch : true,
		clickToSelect : true, // 是否启用点击选中行
		height : $(window).height()-100, // 行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
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


AV.Query.doCloudQuery('select * from article where type = 2 order by createdDate desc').then(function (data) {
    console.log(data);
    $('#table').bootstrapTable('load',data.results);
}, function (error) {
    console.log(JSON.stringify(error));
});  


function toRj(){
	$(".head_menu").removeClass('active');
	$(param).addClass('active');
	
	$("#article1").show();
	$("#article2,#childPage").hide();
	$("#childPage").attr("src",""); 
	
	flag_type = 1;
	AV.Query.doCloudQuery('select * from article where type = 1 order by createdDate desc').then(function (data) {
	    console.log(data);
	    $('#table').bootstrapTable('load',data.results);
	}, function (error) {
	    console.log(JSON.stringify(error));
	});  
}

function toWz(flag){
//	$(".head_menu").removeClass('active');
//	$(param).addClass('active');
//	
//	$("#article1").show();
//	$("#article2,#childPage").hide();
//	$("#childPage").attr("src",""); 
	
	flag_type = flag;
	AV.Query.doCloudQuery('select * from article where type = '+flag+' order by createdDate desc').then(function (data) {
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
	AV.Query.doCloudQuery('select * from messageboard order by createDate desc').then(function (data) {
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
	var messageboard = AV.Object.extend('messageboard');
	var messageboard = new messageboard();
		messageboard.save({
			
			content: $("#dissIn").val(),
			createDate:new Date().getTime(),
			ip:returnCitySN["cip"],
			cname:returnCitySN['cname']
		
		}).then(function(object) {
			$("#dissIn").val('');
			showDiss();
	})
}

/*********************热门原创阅读**********************/

function hotRead(){
	AV.Query.doCloudQuery('select * from article where type = 2 order by number desc limit 0,5').then(function (data) {
	    console.log(data);
	    var html = "";
	    for(var i=0;i<data.results.length;i++){
	    	html += '<div class="home1_3d" data-id="'+data.results[i].id+'"  data-name="'+data.results[i]._serverData.name+'"  onclick="toWz_d(this)" >';
			html += '	<span>'+(i+1)+'</span>';
			html += '	<span>'+data.results[i]._serverData.name+'</span>';
			html += '	<span>阅读量    : '+data.results[i]._serverData.number+'</span>';
			html += '</div>';
	    }
	    $(".home1_3content").html(html)
	}, function (error) {
	    console.log(JSON.stringify(error));
	});  
}

function toWz_d(param){
	$("#childPage").attr("src","");
	localStorage.setItem("name", $(param).data('name'));
	localStorage.setItem("id", $(param).data('id'));
	
	$(".head,.footer").hide();
	
	$("#childPage").show(); 
	$("#childPage").attr("src","wz/write.html")
}

/*********************热门原创杂志**********************/

function hotZz(){
	AV.Query.doCloudQuery('select * from article where type = 3 order by createDate desc limit 0,3').then(function (data) {
	    console.log(data);
	    var html = "";
	    for(var i=0;i<data.results.length;i++){
	    	html += '<div class="home1_2d" data-id="'+data.results[i].id+'"  data-name="'+data.results[i]._serverData.name+'"  onclick="toWz_d(this)" >';
			html += '	<img src="'+data.results[i]._serverData.img+'" >';
			html += '	<p>'+data.results[i]._serverData.name+'</p>';
			html += '</div>';
	    }
	    $(".home1_2content").html(html)
	}, function (error) {
	    console.log(JSON.stringify(error));
	});  
}

function toWz_z(param){
	$("#childPage").attr("src","");
	localStorage.setItem("name", $(param).data('name'));
	localStorage.setItem("id", $(param).data('id'));
	
	$(".head,.footer").hide();
	
	$("#childPage").show(); 
	$("#childPage").attr("src","wz/write.html")
}


/********************数据统计*********************/

function showStatistics(){
	var start = new Date(new Date(new Date().toLocaleDateString()).getTime()).getTime();
	console.log(start);
	
	AV.Query.doCloudQuery("select count(*) from record where createDate >= "+start+" ").then(function (data) {
		    console.log('当日阅读统计',data,data.count);
		     $(".drYd").html(data.count);
	}, function (error) {
	    console.log(JSON.stringify(error));
	});
	
	AV.Query.doCloudQuery("select count(*) from access where createDate >= "+start+" ").then(function (data) {
		    console.log('当日访问统计',data,data.count);
		    $(".drFw").html(data.count);
	}, function (error) {
	    console.log(JSON.stringify(error));
	});  
	
	AV.Query.doCloudQuery("select count(*) from record").then(function (data) {
		    console.log('历史阅读统计',data,data.count);
		     $(".lsYd").html(data.count);
	}, function (error) {
	    console.log(JSON.stringify(error));
	});
	
	AV.Query.doCloudQuery("select count(*) from access").then(function (data) {
		    console.log('历史访问统计',data,data.count);
		    $(".lsFw").html(data.count);
	}, function (error) {
	    console.log(JSON.stringify(error));
	});  
}

/********************访问********************/


var access = AV.Object.extend('access');
var access = new access();
	access.save({
		
		createDate:new Date().getTime(),
		ip:returnCitySN["cip"],
		cname:returnCitySN['cname']
	
	}).then(function(object) {
		
		console.log('欢迎访问')

})

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

