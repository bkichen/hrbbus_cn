function mScroll(id){
	var obj=$("#list"+id).offset();
	if(null!=obj){
		var topV=$("#list"+id).offset().top;
		var time=1000;
		$("html,body").stop(true);
		$("html,body").animate({scrollTop: topV}, topV/9);
	}
}
function getData(key,string){
	var str=string.split(key+"=")[1];
	if(str.indexOf("&")==-1){
		return str;
	}
	return str.substr(0,str.indexOf("&"));
}
$(function(){
	$(".crumbs a").attr("target","_self");
	$("img").error(function(){
		$(this).attr("src","http://r.mapbar.com/map/imagesV2/default.jpg");
	});
})