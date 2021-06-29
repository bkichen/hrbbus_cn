/**
 * @fileOverview 行政地图
 * @author mahe
 */
if (!window.mapbar) {
	window.mapbar = {};
}
if (!window.mapbar.viewmap) {
	window.mapbar.viewmap = {};
}

(function(package){
	jQuery.extend(package, {
		onmaxmin : 0,
		//排行
		show : function (index,tagId) {
			jQuery("a[id^='"+tagId+"']").attr("class","");
			jQuery("div[id^='"+tagId+"list_']").hide();
			
			jQuery("#"+tagId+index).attr("class","on");
			jQuery("#"+tagId+"list_"+index).show();
			//console.debug("#"+tagId+"list_"+index);
		},
		//根据城市名称获取城市
		getByCity : function(cityName) {
			var province = cityData.province;
			if(typeof cityName != "undefined" && cityName != "") {
				if(cityName.indexOf("市") == -1) {
					cityName = cityName+"市";
				}
			}
			var cityObj;
			//console.debug(cityName);
			for(var i=0;i<province.length;i++) {
				var city = province[i].city;
				for(var j=0;j<city.length;j++) {
					//console.debug(city[j].cityName);
					if(city[j].cityName == cityName || 
						city[j].cityName.indexOf(cityName)!=-1 || 
						cityName.indexOf(city[j].cityName)!=-1) {
						cityObj = city[j];
						//alert(city[j].cityName+"  "+cityName);
						return cityObj;
					}
				}
			}
			return cityObj;
		},
		subIn : function() {
			var city = jQuery("#searchInput").val();
			if(jQuery.trim(city) != "" && jQuery.trim(city) != "请输入城市") {
				var cityObj = this.getByCity(jQuery.trim(city));
				if(typeof cityObj != "undefined") {
					location.href = "http://map.mapbar.com/c_"+cityObj.esname+"_map/";
					return false;
				} else {
					alert("城市名称填写错误");
					jQuery("#searchInput").focus();
					return false;
				}
			} else {
				alert("请输入城市");
				jQuery("#searchInput").focus();
				return false;
			}
		},
		textOn : function(obj) {
			var o = jQuery(obj);
			if(o) {
				if(o.val()=="" || o.val()=="请输入城市") {
					o.val("");
					o.css("color","");
				}
			}
		},
		onMaxMin : function() {
			var map = window.frames["map"];
			if(this.onmaxmin==0) {
				map.maplet.resize(950, 295);
				jQuery("#leftBoxId").attr("class","leftBox_contentOn");
				jQuery("#col_map01").attr("class","col_map01On");
				jQuery("#showWmapId").attr("class","showWmap_on");
				jQuery("#showTextId").html("缩回小地图");
				this.onmaxmin=1;
			} else {
				map.maplet.resize(344, 295);
				jQuery("#leftBoxId").attr("class","leftBox_content");
				jQuery("#col_map01").attr("class","col_map01");
				jQuery("#showWmapId").attr("class","showWmap");
				jQuery("#showTextId").html("查看大地图");
				this.onmaxmin=0;
			}
		}
	});
})(mapbar.viewmap);