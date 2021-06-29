// JavaScript Document
function moreCity(){
	var oCity=document.getElementById("cityList"),
		oClose=document.getElementById("close"),
		oA=document.getElementById("swith");
	oA.onclick=function(){
		if(oCity.style.display=="none"){
			oCity.style.display="block";
		}else{
			oCity.style.display="none";	
		}
	}
	oClose.onclick=function(){
		oCity.style.display="none";
	}
}
moreCity();


$(function(){
	$(".header_pinBox").hover(
		function(){$(".header_pinC").show();},
		function(){$(".header_pinC").hide();}
	);
	var lis = $('.btab ul li');
	var sbox = $('#searchBox>div>div');
	lis.click(function () {	
		lis.removeClass('search_nav_on');
		sbox.hide();
		var idx = +$(this).attr('idx');
		$(lis[idx]).addClass('search_nav_on');
		$(sbox[idx]).show();	
	});
})
function setCity(ename,cname,csname){
	document.getElementById("h_city").value = csname;
	document.getElementById("f_title").innerHTML = cname+"公交网";
	document.getElementById("a_title").href = "http://bus.mapbar.com/"+ename+"/";
	document.getElementById("cityList").style.display = "none";
}
function searchBus(type){
	var mc = encodeURIComponent(document.getElementById("h_city").value);
	if(type == "1"){
		var on = $("#on").val();
		var dn = $("#dn").val();

		
		if(on == "" || dn == ""){
			alert("请输入起点或终点");
			return;
		}
		on = encodeURIComponent(on);
		dn = encodeURIComponent(dn);
		
		window.open("http://www.mapbar.com/search/#ac=bus&st=b&qbus=1&mc="+mc+"&on="+on+"&dn="+dn+"&wf=bs");
	}else if(type == "2"){
		var line_keyword = $("#line_keyword").val();
		if(line_keyword == ""){
			alert("请输入线路名称");
			return;
		}
		line_keyword = encodeURIComponent(line_keyword);
		
		window.open("http://www.mapbar.com/search/#city="+mc+"&keyword="+line_keyword+"&ac=line&wf=bs");
	}else if(type == "3"){
		var station_keyword = $("#station_keyword").val();
		if(station_keyword == ""){
			alert("请输入站点名称");
			return;
		}
		station_keyword = encodeURIComponent(station_keyword);
		
		window.open("http://www.mapbar.com/search/#city="+mc+"&keyword="+station_keyword+"&ac=station&wf=bs");
	}
}
//按省份 按钮，按拼音 按钮
var $ProvinceBtn = $('#ProvinceBtn'), $PinyinBtn = $('#PinyinBtn'),
	$Province = $('#Province'), $Pinyin = $('#Pinyin');
$ProvinceBtn.click(function () {
	$Province.show();
	$ProvinceBtn.addClass('cur');
	$Pinyin.hide();
	$PinyinBtn.removeClass('cur');
});
$PinyinBtn.click(function () {
	$Pinyin.show();
	$PinyinBtn.addClass('cur');
	$Province.hide();
	$ProvinceBtn.removeClass('cur');
});	
