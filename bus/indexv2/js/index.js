$(function(){
	function $$ (id) {
		return document.getElementById(id);
	};
	var url = '/home/proxy.jsp?';
	var cncity = $$('cncity').value;
	var encity = $$('encity').value;
	var cityList = null;
	function setCityList () {
		cityList = new KCityList($("#citylist"), {
			sugurl: url,
			mburl: url + 't=clp&s=html&&hh=true',
			laturl:url,
			newcitylist:true,
			defcity : {name : cncity, ename : encity}
		});
		KEvent.bind(cityList,"citychanged",function(evtInfo, wgt, currCity, prevCity){
			if(encity === currCity.ename) return;
			if(currCity.ename === prevCity.ename) return;
			var _href = "";
			if("quanguo"==currCity.ename){
				_href='http://bus.mapbar.com';
			}else{
				_href='http://bus.mapbar.com/' + currCity.ename + '/';
			}
			window.location.href = _href;
			window.event.returnValue = false;
		});
		$(".mwp_cyl_new a").each(function(){
			$(this).attr("href","http://bus.mapbar.com/"+$(this).attr("en"));
		});
		$(".mwp_cyl_new a:contains('全国')").attr("en","").attr("href","http://bus.mapbar.com");
	};
	function setPindao () {
		var header_pinBox = $('.header_pinBox');
		var pindao = $('.pindao');
		var header_pinC = $('.header_pinC');
		header_pinBox.hover(function(){
			pindao.addClass('pindaoOn');
			header_pinC.show();		
		},function(){
			pindao.removeClass('pindaoOn');
			header_pinC.hide();	
		});
	};
	function setLineBox () {
		var curBox = $('.inputBox:eq(0)');
		var curBtn = $('.navBar_box a:eq(0)');
		var boxBtn = $('.navBar_box a');
		var curEm = $('.example:eq(0)');
		boxBtn.click(function () {
			curBox.hide();
			curBtn.removeClass('on');
			curEm.hide();
			var data = $(this).attr('data');
			curBox = $('#' + data);
			curBtn = $(this);
			curEm = $('#' + data + 'EM');
		
			curBox.show();
			curBtn.addClass('on');
			curEm.show();
		});
	};
	function tipExample (eBox, hBox) {
		var _href, _text, _title, _target;
		var _hA = hBox[0];
		if(_hA) {
			var _$hA = $(_hA);
			_text = _$hA.val();
			_title = _$hA.attr('title') || _text;
			_target = '_blank';
			_href = _$hA.attr('href');
			if(""!=_text){
				eBox.html('例如：<a target="' + _target +  '" href="' + _href + '" title="' + _title + '">' + _text + '</a>');
			}
		} else {
			eBox.html('');
		}
	};
	function setTipExample () {
		tipExample($('#transformEM'), $('#hostTransform'));
		tipExample($('#lineEM'), $('#hotLine'));
		tipExample($('#stationEM'), $('#hotStation'));
	};
	function setSearch () {
		var mc = encodeURIComponent(cncity);
		$("#transformSearch").click(function(){
				var on = $("#fromInput").val();
				var dn = $("#toInput").val();
				if(on == "" || dn == ""){
					alert("请输入起点或终点");
					return;
				}
				on = encodeURIComponent(on);
				dn = encodeURIComponent(dn);
				
				window.open("http://www.mapbar.com/search/#ac=bus&st=b&qbus=1&mc="+mc+"&on="+on+"&dn="+dn+"&wf=bs");
		});
		$("#lineSearch").click(function(){
			var line_keyword = $("#line_keyword").val();
			if(line_keyword == ""){
				alert("请输入线路名称");
				return;
			}
			line_keyword = encodeURIComponent(line_keyword);
			
			window.open("http://www.mapbar.com/search/#city="+mc+"&keyword="+line_keyword+"&ac=line&wf=bs");
		});
		$("#stationSearch").click(function(){
			var station_keyword = $("#station_keyword").val();
			if(station_keyword == ""){
				alert("请输入站点名称");
				return;
			}
			station_keyword = encodeURIComponent(station_keyword);
			
			window.open("http://www.mapbar.com/search/#city="+mc+"&keyword="+station_keyword+"&ac=station&wf=bs");	
		});
	};
	setPindao();
	setCityList();
	setLineBox();
	setTipExample();
	setSearch();
});
