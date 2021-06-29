
$(function(){
	
	$("#sortSide h3").click(function(){
		var i =$(this).index("h3");
		if($(this).hasClass("h3Yes")){
			$("#sortSide .sortBox").eq(i).hide();
			$(this).removeClass("h3Yes");
		}else{
			$("#sortSide .sortBox").hide().eq(i).show();
			$("#sortSide h3").removeClass("h3Yes");
			$(this).addClass("h3Yes");
		}
	})
	$(".header_pinBox").hover(
		function(){$(".header_pinC").show();},
		function(){$(".header_pinC").hide();}
	)
})