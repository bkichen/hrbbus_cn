//poi详情页面地图
var maplet = null;
(function ($) {
	if(!$) return;
	var $mapPanel = $('#mapPanel'),
		$curLineName = $('#curLineName');
		containerTop = $('.content').offset().top;
	var _stationLatlon, _stationName, _lineNumber, _scale;
	var _commonName, _startStationLatLon, _endStationLatLon, _lineLatLon, _startStation, _endStation;
	var _endMk, _startMk, _stationMk, _line;
	var _startLabel, _endLabel, _stationLabel;
	$mapPanel.find('.close').bind('click', function () {
		$mapPanel.hide();
	});
	function initMap () {
		maplet = new Maplet("poiMap");  
        maplet.centerAndZoom(new MPoint(_stationLatlon), _scale);  
        maplet.addControl(new MStandardControl());  
        maplet.showOverview(false, false);
        maplet.showScale(false);        
	}
	function setLine () {
		var length = _lineLatLon.length;
		for(var i = 0; i < length; i ++) {
			_lineLatLon[i] = new MPoint(_lineLatLon[i]);
		}
		if(!_line) {
			_line = new MPolyline(_lineLatLon);
			maplet.addOverlay(_line);			
		} else {
			_line.setPoints(_lineLatLon);
		}		
		window.setTimeout(function () {
			maplet.setAutoZoom();
		}, 0);
	}	
	function setMarkers () {
		_startLabel = '<div class="stationBox2"><div></div><div class="stationBox_right"><span class="transIcon"></span>'+ _startStation +'</div></div>';
		_endLabel = '<div class="stationBox2"><div></div><div class="stationBox_right"><span class="transIcon"></span>'+ _endStation +'</div></div>';
		if(!_startMk) {
			_startMk = new MMarker(
				new MPoint(_startStationLatLon), 
				new MIcon('<div class="beginStation">起点</div>', 41, 27, 20, 27), null,
				new MLabel(_startLabel, 35, 0, 100, {enableStyle: false})
			);
			_endMk = new MMarker(
				new MPoint(_endStationLatLon), 
				new MIcon('<div class="endStation">终点</div>', 41, 27, 20, 27), null,
				new MLabel(_endLabel, 35, 0, 100, {enableStyle: false})
			);
			maplet.addOverlay(_startMk);
			maplet.addOverlay(_endMk);

		} else {
			_startMk.label.resetLabel({content : _startLabel});
			_startMk.setPoint(new MPoint(_startStationLatLon));
			_endMk.label.resetLabel({content : _endLabel});
			_endMk.setPoint(new MPoint(_endStationLatLon));			
		}
	}
	function setStation () {
		_stationLabel = '<div class="stationBox"><div></div><div class="stationBox_right"><span class="transIcon"></span>'+ _stationName +'</div></div>';
		if(!_stationMk) {
			_stationMk = new MMarker(
				new MPoint(_stationLatlon), 
				new MIcon('<div class="onpassStation"></div>', 11, 11), null,
				new MLabel(_stationLabel, 8,-29, 100, {enableStyle: false})
			);
			maplet.addOverlay(_stationMk);
		} else {
			_stationMk.label.resetLabel({content : _stationLabel});
			_stationMk.setPoint(new MPoint(_stationLatlon));
		}
	};
	//返程时，linenumber为 -1，其他参数为空
	function mapControl(lineNumber, stationLatlon, stationName) {
		lineNumber = +lineNumber;		
		if(lineNumber < 0) {
			_lineNumber = lineNumber;
			$mapPanel.hide();
			return;
		}
		if(lineNumber != _lineNumber) {			
			$mapPanel.css('top', $('#listContainer' + lineNumber).offset().top - containerTop);
			_lineNumber = lineNumber;
			_scale = +$('#scale' + lineNumber).val();
			_startStation = $('#startStation' + lineNumber).val();
			_endStation = $('#endStation' + lineNumber).val();
			_startStationLatLon = $('#startStationLatLon' + lineNumber).val();
			_endStationLatLon = $('#endStationLatLon' + lineNumber).val();
			_commonName = $('#commonName' + lineNumber).val();
			$curLineName.html(_commonName);
			$curLineName.attr('href', 'http://bus.mapbar.com/' + $('#encity').val() + '/xianlu/' + $('#pinyinName' + lineNumber).val() + '/');			
			_lineLatLon = null;
		}
		_stationLatlon = stationLatlon;
		_stationName = stationName;
		if(!maplet) {			
			initMap();
		}
		if(!_lineLatLon) {			
			_lineLatLon = $('#lineLatLon' + lineNumber).val().split(',');
			setLine();
			setMarkers();
		}
		setStation();
		$mapPanel.show();
	};


/**********************************************************************************************************************************************/

    function bindStationEvent(index,div){
        var ul =  $('.atbR>ul',div).eq(0),
            lis = $(">li",ul),
            lisSize = lis.length,
            selectStationIndex = $(">li.selectStaion b",ul).eq(0).html(),
            liMaxSize = parseInt($('#lineStationCount').val()),
            liWidth = parseInt($('#lineStationWidth').val()) / liMaxSize;
        var timer = null;
        //处理站点数超过25站
        if(lisSize > liMaxSize){
            if(selectStationIndex > liMaxSize){
                ul.css({
                    position  :'relative',
                    left : -(selectStationIndex - liMaxSize) * liWidth
                });
            }
            $(div).find('.switchOther>a').click(function(){
                if($(this).text().indexOf('全部') > -1){
                    ul.css({
                        left : 0,
                        width : ''
                    });
                    $(this).html('收起<img src="http://r.mapbar.com/bus/detailv2/images/t1px.gif" class="openIoc" name="img_putover">');
                }else{
                    ul.css({
                            left : selectStationIndex > liMaxSize ? (-(selectStationIndex - liMaxSize) * liWidth) : 0,
                            width : liWidth * lisSize
                        }
                    );
                    $(this).html('全部站点<img src="http://r.mapbar.com/bus/detailv2/images/t1px.gif" class="" name="img_putover">');
                }
            });
        }
        //绑定点击返程
        $(div).find('.depict>a').click(function(){
            typeof mapControl === 'function' && mapControl(-1);
            $.get('/services/bus/getLineInfoFromStation?' +
                    'encity=' + $('#encity').val() +
                    '&name=' + encodeURIComponent($('#oppositeName' + (index + 1)).val()) +
                    '&stationName=' + encodeURIComponent($('#stationName').val()) +
                    '&index=' + (index + 1),
                function(data){
                    $(div).html(data);
                    bindStationEvent(index,$(div));
                });
        });
        $('>div',lis).mouseenter(function(){
            var tip = $('>a',this).eq(1);
            if(timer) window.clearTimeout(timer);
            timer = window.setTimeout(function () {
            	typeof mapControl === 'function' && mapControl($(tip).attr('index'),$(tip).attr('lonlat'),$(tip).attr('stationName'));
            }, 200);            
        });
    }
    $('.onBox').each(bindStationEvent);
})(jQuery);
