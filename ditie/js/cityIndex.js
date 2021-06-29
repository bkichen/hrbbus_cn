var maplet = null; 
(function () {
	function $ (id) {
		return document.getElementById(id);
	};
	/***********************对地铁城市的特殊处理************************/
	var subwayOnlyoneCitys = {
		'宁波市' : 'subway1',
		'哈尔滨市' : 'subway1',
		'郑州市' : 'subway1',
		'佛山市' : 'subway1',
		'昆明市' : 'subway1',
		'长沙市' : 'subway2'
	};
	var cncity = $("cncity") && $("cncity").value || '北京市';
	if(cncity == '香港特别行政区'){
		cncity = "香港";
	};
	var subwayCount = $("subwayCount") && $("subwayCount").value;
	var jsHeader = 'subwayall';    
	if(subwayCount == 1) {
		jsHeader = subwayOnlyoneCitys[cncity];
	};
	/******************************************************************/
	var planSubwayFlag = $('planSubwayFlag') && $('planSubwayFlag').value,
		planSubwayCount = $('planSubwayCount') && $('planSubwayCount');
		planSubwayCount = planSubwayFlag === 'true' ? (+planSubwayCount.value) : 0;

	var zoom = 8; 
	var layer = null;
	var sp = 'http://img.mapbar.com/maplite/mapbank/maplayer/subway/1.1/',
		minLevel = 8,
		maxLevel = 14;
    function initMap(){  
        maplet = new Maplet("ditieMap");  
        maplet.centerAndZoom(new MPoint(cncity), zoom);  
        maplet.addControl(new MStandardControl());  
        maplet.clickToCenter = false;
		maplet.showOverview(true,false);
    };
	function addLayer () {
		layer = new MLayer({
			serverPath : sp + jsHeader + '/',
			dataPattern : jsHeader + MLayer.DPLACEHOLDER,
			needData: true,
			needImg: true,
			safeLevel: false,
			imgType: 'png',
			dataType : 'js',
			minLevel: minLevel,
			maxLevel: maxLevel,
			tip:{
				mode:MLayer.TM_MOUSEOVER
			}
		});
		maplet.addLayer(layer);
	};
	var brush = new MBrush('gray');
		brush.fill = false;
		brush.stroke = 12;
		brush.overlap.enable = true;
		brush.overlap.stroke = 6;
	function addLine (ln) {			
		var stationlatlons = $('planLatLon' + ln).value.split(','),
			length = stationlatlons.length;
		var pt = null,
			points = [];
		for(var i = 0; i < length; i ++) {
			pt = new MPoint(stationlatlons[i]);
			points.push(pt);
		}		
		var line = new MPolyline(points, brush);
		maplet.addOverlay(line);
		
	};
	function addMarkers (ln) {
		var stationlatlonsPoints = $('planStationLonlats' + ln).value.split(',');
		var	names = $('planStationNames' + ln).value.split(','),
			length = names.length;
		for(var i = 0; i < length; i ++) {
			var pt = new MPoint(stationlatlonsPoints[i]);
			var label = new MLabel('<div style="font-size: 14px;background-color: white;border: 1px solid gray;color: rgb(100, 100, 100);padding: 0 4px;">' + names[i] + '</div>', {visible : false, enableStyle : false});
			marker = new MMarker(
				pt, 
				new MIcon('<div style="width:2px;height:2px;border:1px solid gray;font-size:0;cursor:pointer;"></div>',4,4,2,2),
				null, label
			);
			maplet.addOverlay(marker);
			MEvent.addListener(marker, 'mouseover', function (m) { m.label.setVisible(true);});
			MEvent.addListener(marker, 'mouseout', function (m) { m.label.setVisible(false);});
		}		
	};
	function addPlanLines () {
		for(var i = 1; i <= planSubwayCount; i ++) {
			var ln = $('plan' + i).value;	
			addLine(ln);		
			addMarkers(ln);	
		}
	};
	function init () {
		initMap();
		addLayer();
		addPlanLines();
		var flag=1;
		MEvent.addListener(maplet, 'zoom', function () {
			var zoom = maplet.getZoomLevel();
			if(zoom<8){
				maplet.clearOverlays(true);
				flag=0;
			}else{
				if(flag==0){
					addPlanLines();
					flag=1;
				}
			}
		});
	};
	init();
})();