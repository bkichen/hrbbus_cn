//xianlu页面 和 oldxianlu页面公用此文件
var maplet = null;
(function ($) {
	var stationList = $('#scrollTr');
	var showPoi = $('#showPoi');
	var showAllPoi = false;
	showPoi.bind('change', function () {
		showAllPoi = this.checked;
		showLabels(showAllPoi);
	})
	var startStation = $('#startStation').val(),
		endStation = $('#endStation').val(),
		stationNames = $('#stationNames').val().split(','),
		stationLatLons = $('#stationLatLons').val().split(','),
		lineLatLon = $('#lineLatLon').val().split(','),
		center = $('#center').val(),
		scale = +$('#scale').val();

	var markers = [], $icons = [], $labels = [];
	var length = stationNames.length;
	var sIndex = 0, eIndex = length - 1;
	var tmpMk, $tmpIcon;
	function initMap () {
		maplet = new Maplet("mapbar");  
        maplet.centerAndZoom(center, scale);  
        maplet.addControl(new MStandardControl({location : {type : Maplet.LEFT_BOTTOM}}));  
        maplet.showOverview(true, false);
	}
	//添加线路
	function addLine () {
		var length = lineLatLon.length;
		for(var i = 0; i < length; i ++) {
			lineLatLon[i] = new MPoint(lineLatLon[i]);
		}
		var line = new MPolyline(lineLatLon);
		maplet.addOverlay(line);
	}
	//添加站点
	function addStations () {
		var sMk, eMk;
		$tmpIcon = $('<div class="onpassStation"></div>');
		tmpMk = new MMarker(new MPoint(stationLatLons[0]), new MIcon($tmpIcon.get(0), 11, 11));
		tmpMk.zindex = length;
		$tmpIcon.hide();
		for(var i = sIndex + 1; i < eIndex; i ++) {
			if(!stationLatLons[i]) continue;
			var $icon = $('<div class="passStation"></div>'),
				$label = $('<div class="stationBox"><div></div><div class="stationBox_right"><span class="transIcon"></span>'+ stationNames[i] +'</div></div>');
			$icons[i] = $icon;			
			var marker = new MMarker(
				new MPoint(stationLatLons[i]), 
				new MIcon($icon.get(0), 11, 11), null,
				new MLabel($label.get(0), 8,-29, 100, {enableStyle: false,visible: false})
			);
			markers[i] = marker;
			marker.index = i;
			$icon.hover(function(i) {
				return function () {
					showLabel(i);
				}
			}(i));
			maplet.addOverlay(marker);
			$labels[i] = $label.parent();
		}
		
		sMk = new MMarker(
			new MPoint(stationLatLons[sIndex]), 
			new MIcon('<div class="beginStation">起点</div>', 41, 27, 20, 27), null,
			new MLabel('<div class="stationBox2"><div></div><div class="stationBox_right"><span class="transIcon"></span>'+ stationNames[sIndex] +'</div></div>', 35, 0, 100, {enableStyle: false
			})
		);
		markers[sIndex] = sMk;
		maplet.addOverlay(sMk);
		eMk = new MMarker(
			new MPoint(stationLatLons[eIndex]), 
			new MIcon('<div class="endStation">终点</div>', 41, 27, 20, 27), null,
			new MLabel('<div class="stationBox2"><div></div><div class="stationBox_right"><span class="transIcon"></span>'+ stationNames[eIndex] +'</div></div>', 35, 0, 100, {enableStyle: false})
		);
		markers[eIndex] = eMk;
		maplet.addOverlay(eMk);
		maplet.addOverlay(tmpMk);
		$tmpIcon.hover(function() {}, function () {		
			hideLabel();
		});
	}
	//隐藏所有label
	function showLabels (show) {
		var m = show ? 'show' : 'hide';
		for(var i = sIndex + 1; i < eIndex; i ++) {
			var _label = $labels[i];
			if(!_label) return;
			$labels[i][m]();
		}
	}
	//显示指定编号的label
	function showLabel(i) {
		if(showAllPoi) return;
		$icons[i].hide();
		$tmpIcon.show();
		tmpMk.index = i;
		tmpMk.setPoint(markers[i].pt);
		$labels[i].show();
		tmpMk.setZIndex(tmpMk.zindex ++);
	}
	//隐藏当前显示的label
	function hideLabel () {
		if(showAllPoi) return;
		showLabels(false)
		var i = tmpMk.index;
		$tmpIcon.hide();
		$icons[i].show();
		tmpMk.setZIndex(0);
	}
	//初始化站点列表
	function initStationList () {
		stationList.children().hover(function () {
			if(showAllPoi) return;			
			var index = +$(this).attr('stationIndex') - 1;
			if(index > sIndex && index < eIndex) {
				showLabels(false)
				showLabel(index);
			}			
		}, function () {
			hideLabel();
		});
	}
	initMap();
	addLine();
	addStations();
	initStationList();
})(jQuery);
