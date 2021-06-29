//实时公交刷新时间
var TRAFFIC_REFRESH_INTERVAL = 120;
var traffcityList = ["北京","成都","大连","东莞","佛山","福州","广州","杭州","合肥","呼和浩特","昆明","南京","南宁","南通","宁波","青岛","泉州","厦门","上海","深圳","沈阳","苏州","台州","太原","天津","温州","无锡","武汉","西安","长春","长沙","中山","重庆","珠海","石家庄","哈尔滨","嘉兴","金华","济南","郑州","唐山","潍坊","徐州","常州","惠州","汕头"];
var traffcityPY = 	["beijing","chengdu","dalian","dongguan","foshan","fuzhou","guangzhou","hangzhou","hefei","huhehaote","kunming","nanjing","nanning","nantong","ningbo","qingdao","quanzhou","xiamen","shanghai","shenzhen","shenyang","suzhou","taizhou","taiyuan","tianjin","wenzhou","wuxi","wuhan","xian","changchun","changsha","zhongshan","chongqing","zhuhai","shijiazhuang","haerbin","jiaxing","jinhua","jinan","zhengzhou","tangshan","weifang","xuzhou","changzhou","huizhou","shantou"];
var traffcityPath = ["bjtraffic","cdtraffic","dltraffic","dgtraffic","fstraffic","fztraffic","gztraffic","hztraffic","hftraffic","hhhttraffic","kmtraffic","njtraffic","nntraffic","nttraffic","nbtraffic","qdtraffic","qztraffic","xmtraffic","shtraffic","sztraffic","sytraffic","sztraffic","tztraffic","tytraffic","tjtraffic","wztraffic","wxtraffic","whtraffic","xatraffic","cctraffic","cstraffic","zstraffic","cqtraffic","zhtraffic","sjztraffic","hebtraffic","jxtraffic","jhtraffic","jntraffic","zztraffic","tstraffic","wftraffic","xztraffic","cztraffic","hztraffic","sttraffic"];
var mainURL = "http://lukuang.mapbar.com/";
var xml_geocode="geoproxy.do?";
var xml_keyword="keyproxy.do?";
var goCity=traffcityList[cityNum] + "市";
var pinyin = traffcityPY[cityNum];
var cookieCity = traffcityPY[cityNum];
var urlhead = "roadProxy.do?"+mainURL;
var urlbus = "/json/getBusyRoad.jsp";
var urlmain = "/json/getMainRoad.jsp?customer=0";
var urlinfo = "/json/getRoadInfo.jsp";
var urlifbn = "/json/getRoadInfoByName.jsp"; 

city_traffic = traffcityPath[cityNum];

city_busroad = urlhead+city_traffic+urlbus;
city_mainroad = urlhead+city_traffic+urlmain;

city_roadinfo = urlhead+city_traffic+urlinfo;
city_roadInfoByName = urlhead+city_traffic+urlifbn;

function $(obj){
	return document.getElementById(obj);
}

