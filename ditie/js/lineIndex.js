
var maplet = null; 
(function () {
	function $ (id) {
		return document.getElementById(id);
	}
	var zoom = $('scale').value || 12, 
		center = $('center').value || $('cncity').value;
	var layer = null;
	var sp = 'http://img.mapbar.com/maplite/mapbank/maplayer/subway/1.1/',
		jsHeader = 'subwayall',
		minLevel = 8,
		maxLevel = 14;
    function initMap(){  
        maplet = new Maplet("ditieMap");  
        maplet.centerAndZoom(new MPoint(center), zoom);  
        maplet.addControl(new MStandardControl());  
        maplet.showOverview(true, false);
    };
	function addLine () {
		var stationlatlons = $('stationlatlons').value.split(','),
			length = stationlatlons.length;
		var pt = null,
			points = [];
		for(var i = 0; i < length; i ++) {
			pt = new MPoint(stationlatlons[i]);
			points.push(pt);
		}
		var brush = new MBrush('blue');
		brush.fill = false;
		brush.stroke = 10;
		var line = new MPolyline(points, brush);
		maplet.addOverlay(line);
	};
	function addMarkers () {
		var stationlatlonsPoints = $('stationlatlonsPoints').value.split(',');
		var	names = $('names').value.split(','),
			length = names.length;
		for(var i = 0; i < length; i ++) {
			pt = new MPoint(stationlatlonsPoints[i]);
			var label = new MLabel(names[i], {visible : false});
			marker = new MMarker(
				pt, 
				new MIcon('<div class="stationIcon"></div>',6,6,3,3),
				null, label
			);
			maplet.addOverlay(marker);
			MEvent.addListener(marker, 'mouseover', function (m) { m.label.setVisible(true); });
			MEvent.addListener(marker, 'mouseout', function (m) { m.label.setVisible(false);	});
		}		
	};
	function init () {
		initMap();
		addLine();
		addMarkers();
		window.setTimeout(function () {
			maplet.setAutoZoom();
		}, 300);
	};
	init();
})();