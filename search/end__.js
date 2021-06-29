/**
 * 定义了页面中所有使用到的地址、主要城市city扩展定义(现无用)和IE6背景图片缓存
 */
var NowCity = "北京市";
var subwayBasePath = "http://img.mapbar.com/maplite/mapbank/maplayer/subway/1.1/";
var baseLayersPath = "http://img.mapbar.com/maplite/mapbank/maplayer/1.1/";
var cameraLayersPath = "http://img.mapbar.com/maplite/mapbank/maplayer/camera/";
var expoLayerPath = "http://img.mapbar.com/maplite/mapbank/maplayer/expo/";
/*var base_url = "./s";
var wg_geo_url = "./s";
var wg_geo_sugurl = "./s";
var wg_geo_mburl = "./s?t=clp&s=html";
var wg_geo_laturl = "./s";
var topSearch_sugopts_url = "./s";
var losResult_tipurl = "./s";
var losResult_url = "./s?t=s&s=json";
var traffic_url = "./s";
var ipCity_url = "./s";
var geoCode_url = "./s";
var expo_url = "./s";
var bjLayers_url = "./s";
var ad_url = "./s?t=ad&at=s";*/
var base_url = "./s";
var wg_geo_url = "./s";
var wg_geo_sugurl = "./s";
var wg_geo_mburl = "./s?t=clp&s=html&hh=true";
var wg_geo_laturl = "./s";
var topSearch_sugopts_url = "./s";
var losResult_tipurl = "./s";
var losResult_url = "./s?t=s&s=json";
var traffic_url = "./s";
var ipCity_url = "./s";
var geoCode_url = "./s";
var expo_url = "./s";
var bjLayers_url = "./s";
var ad_url = "./s?t=ad&at=s";
var cityInfo_url = "./s?t=cn";
var collec_info_url = "./s?t=gct";
var collec_del_url = "./s?t=dct";
var collec_add_url = "./s?t=act";
//这是短链接的临时请求地址
var short_url = "./s?t=surl";
//纠错组件地址
var feedback_Url = {
	url:base_url
};
//标记组件地址
var mapmarker_Url = {
	shareurl:"./mm"
	,uploadUrl:"./ul"
	//,roadurl:"./s?t=snsn"
	,roadurl:"./s?t=snsn"
};
//发送组件的地址
var sender_Url = {
	url:base_url
	,previewurl:base_url
};
//打印组件的地址
var print_Url = {
	lsurl:"./print/print_ls.html"
	,bsurl:"./print/print_bs.html"
	,blurl:"./print/print_bl.html"
	,bsturl:"./print/print_bst.html"
	,navsurl:"./print/print_navs.html"
};
//var _cityMore =
//{
//    "北京市": {}
//    ,"上海市": {}
//};
if(KTools.isIE6) document.execCommand("BackgroundImageCache", false, true);
/*
 * 缓存了页面中所有直接用到的dom链接
 * 基本dom引用、变量 、方法
 */
//dom引用  jQuery引用
/*
var _doms = "wrapper,pageBody,topBar,mapbar,pbRight,pbLeft,pageHeader,opCamera,btnCtrac,iconPlusDiv" +
            ",wg_geo,rtTraf,swLine,myCollec,topSearch,backSelect,toolsPanel,toolsIcon,toolsPanelBg,disBut,advBar,trafficDiv,myCollecNullDiv,subwayULDiv,pbrBody" +
            ",losResult,olResult,bussResult,navResult,pnBar,nfLink,copyLink,copyLinkText,copyLinkMsg,bssButton,pbrHead,orReturn,navTopBts,navButton" +
            ",resultCount,swLineBub,opCameraBub,rtTrafBub,myCollecNullBub,busNavLink,topLink,login,sender,senderBub,feedback,fdbs,lsNoResult,bsNoResult,blNoResult,bstNoResult" + 
			",navNoResult,mapmarker,tempResult,mmBar,addMarker,pbrFoot";
*/
var _doms = "wrapper,pageHeader,topLink,"+
							   "headInner,topSearch,lc,"+
												   "bus,buschange,"+
														"busline,"+
														"busstation,"+
												   "nav,"+
												   "nb,"+
					"pageBody,pbRight,feedback,"+
									 "fdbs,"+
									 "pbrHead,orReturn,"+
									 		 "orReturn_,"+
											 "backSelect,"+
											 "backSelect_,"+
											 "navTopBts,"+
											 "resultCount,"+
											 "bkbtn,"+
									 "mmBar,shareLinks,"+
											"clearMarker,"+
									 "pbrBody,losResult,olResult,"+
									 				   "lsNoResult,"+
											 "bussResult,bsNoResult,"+
														"blNoResult,"+
														"bstNoResult,"+
											 "navResult,navNoResult,"+
											 "tempResult,"+
											 "defaultDiv, defaultCurCity, defaultKeyWord,"+
											 "trainSearch, liecheS, liecheE, liecheSmt,"+
											 "mapmarker,"+
									 "pbrFoot,pnBar,"+
											 "busNavLink,"+
										     "nfLink,bssButton,"+
													"navButton,"+
									 "btnCtrac,"+
							  "pbLeft,topBar,wg_geo,"+
									 "mapOptions,copyLink,copyLinkBub,copyLinkText,copyLinkMsg,"+
									 					 "smallBox,smallBoxBub,up,down,left,right,"+
													 	 "opCamera,opCameraBub,"+
														 "myCollecNull,myCollecNullBub,myCollecNullLogin,"+
														 "myCollecList,myCollecListBub,collecList,collecListDiv,"+
														 							   "myCollecListLogin,"+
														 "getMyCollec,"+
														 "collecNotice,noticeContent,"+
														 "rtTraf,rtTrafBub,trafficDiv,"+
														 "swLine,swLineBub,subwayULDiv,"+
									 "toolsPanel,toolsIcon,addMarker,"+
														 "toolsPanelBg,"+
														 "disBut,"+
									 "mapbar,"+
									 "advBar,"+
									 "iconPlusDiv,"+
									 "inviewsearch,inviewsearch_bub,inviewsearch_box,"+
		   "login,"+
		   "sender,tabs,tabs0,tab1,tab2,tab3,"+
		   "senderBub";
var toolsIconLis = null;
var losResultDiv0 = null;
var pnBarAS = null;
var topLinkChildren = null;
var navTopBtsAS = null;
var busNavLinkAS = null;
var rightResultDom = null;
var wg_geo_aA = null;
var fdbsBtn = null;
var lsNoResultAS = null;
var lsNoResultSrongS = null;
var bsNoResultAS = null;
var bsNoResultSrongS = null;
var blNoResultAS = null;
var blNoResultSrongS = null;
var bstNoResultAS = null;
var bstNoResultSrongS = null;
var navNoResultAS = null;
var navNoResultSrongS = null;
var senderBubAS = null;
var initIDS = function()
{
    _doms = _doms.split(",");
    for(var i = 0; i < _doms.length; i++) window[_doms[i]] = $("#"+_doms[i]);
    toolsIconLis = $(">li", toolsIcon);
    losResultDiv0 = $(">div:eq(0)", losResult);
    pnBarAS = $(">a", pnBar);
    topLinkChildren = $(topLink).children();
    navTopBtsAS = $("a", navTopBts);
    busNavLinkAS = $("a", busNavLink);
    rightResultDom = tempResult;
    losResult.hide();
    wg_geo_aA = $("span.mwp_cyl_i >a", wg_geo);
	fdbsBtn = $(">input", fdbs);
	lsNoResultAS = $("a", lsNoResult);
	lsNoResultSrongS = $("strong", lsNoResult);
	bsNoResultAS = $("a", bsNoResult);
	bsNoResultSrongS = $("strong", bsNoResult);
	blNoResultAS = $("a", blNoResult);
	blNoResultSrongS = $("strong", blNoResult);
	bstNoResultAS = $("a", bstNoResult);
	bstNoResultSrongS = $("strong", bstNoResult);
	navNoResultAS = $("a", navNoResult);
	navNoResultSrongS = $("strong", navNoResult);
	senderBubAS = $("a", senderBub);
};
/**
 * 定义了页面大小变化时的事件处理方法和两个KTools.showMsg方法的使用
 */
var mapletEventList = [];
var windowSize = null;
var mapMinWidth = 630;
var rightWidth = 350;
var viewsearchminzoomlevel = 8;//区域搜最小缩放级别，会根据viewsearchmaxrange动态设定，初始值8
var viewsearchmaxrange = 6000;//区域搜对角线最大距离
var _setHeight = function(h){
	$("div.mwp_ns_sr").height(h);
	defaultDiv.height(h);
	rightResultDom.height(h);
	olResult.height(h);
	$("div.mwp_lst","div#pbrBody").height(h/2-25);	
};
var resizePage = function(wResized, maxLeftUpdate, maxWindowUPdate)
{
    var heightCa = 1;
        if(wResized) {
			wrapper.width(0);
            windowSize = KTools.getBounds(window).size();
			if (windowSize.width - rightWidth - 2 < mapMinWidth) {
				$(document.body).css("overflow-x", "scroll");
				var _thisWindowWidth = mapMinWidth + rightWidth + 2;
				wrapper.width(_thisWindowWidth);
				windowSize = KTools.getBounds(window).size();
				windowSize.width = _thisWindowWidth;
			} else {
				$(document.body).css("overflow-x", "hidden");
				windowSize = KTools.getBounds(window).size();
				wrapper.width(windowSize.width);
			}
            wrapper.height(windowSize.height);
//            if(windowSize.width <= 780)  pageHeader.css("width", 780);
//            else 
			pageHeader.css("width", windowSize.width);
            if (windowSize.width % 2 == 1) {
					pbRight.css("right", (maxLeft ? -1 : -rightWidth - 1));
				}
				else {
					pbRight.css("right", (maxLeft ? 0 : -rightWidth));
				}
            btnCtrac.removeClass().addClass(maxLeft ? "btnCtrac":"btnExp");
            if (KTools.isIE6) {
				heightCa = -1;
			}
        }
        if((wResized || maxWindowUPdate || maxLeftUpdate))
        {
            if(wResized || maxWindowUPdate)
            {
                pbLeft.css({"height" : windowSize.height - pbLeft.offset().top});
                pbrBody.height(pbLeft.height() - 59);
                pbRight.height(pbLeft.height());
            }
            if(wResized || maxLeftUpdate) pbLeft.css({"width": windowSize.width - (maxLeft ? rightWidth :0)});
            mapbar.css({"height": windowSize.height - mapbar.offset().top - heightCa - advBar.outerHeight(true), "width" : pbLeft.width() - 2});
            if(KMap.isInitialized(mapbar.get(0))) KMap.resize(new KSize(mapbar.width(), mapbar.height()));
            //toolsPanel.width(50);
            toolsPanel.css("margin-left",pbLeft.width()-40); 
        }
        _setHeight(pbLeft.height() - 64);
		feedback.height(pbLeft.height() - 30);
        mapmarker.height(pbLeft.height() - 40);
        if($.browser.mozilla && rightResultDom === losResult) pnBar.height(pnBar.height()==30?31:30);
        if(KMap.maplet()){
        	viewsearchminzoomlevel = getNowMinScale();
        }
};
/**
 * 获取区域搜最小缩放级别
 */
var getNowMinScale = function(){
	var km = KMap.maplet().measDistance([new MPoint(KMap.getMapViewBound().RightDown),new MPoint(KMap.getMapViewBound().LeftUp)]);//对角线距离（米）
    var px = Math.sqrt(KMap.maplet().width*KMap.maplet().width+KMap.maplet().height*KMap.maplet().height);//对角线距离（像素）
    return getNowViewZoomLevel(viewsearchmaxrange*67.5/px);
};
/**
 * 获取当前比例尺（米）
 */
var getNowScaleDistance = function(){
	var scaledistance = null;
	switch (KMap.zoom()) {
	case 0:
		scaledistance = 1800000;
		break;
	case 1:
		scaledistance = 800000;
		break;
	case 2:
		scaledistance = 400000;
		break;
	case 3:
		scaledistance = 200000;
		break;
	case 4:
		scaledistance = 100000;
		break;
	case 5:
		scaledistance = 40000;
		break;
	case 6:
		scaledistance = 20000;
		break;
	case 7:
		scaledistance = 10000;
		break;
	case 8:
		scaledistance = 4000;
		break;
	case 9:
		scaledistance = 2000;
		break;
	case 10:
		scaledistance = 1000;
		break;
	case 11:
		scaledistance = 400;
		break;
	case 12:
		scaledistance = 200;
		break;
	case 13:
		scaledistance = 100;
		break;
	case 14:
		scaledistance = 40;
		break;
	default:
		break;
	}
	return scaledistance;
};
/**
 * 根据比例尺获取缩放级别
 */
var getNowViewZoomLevel = function(dis){
	var scaledistance = null;
	if(dis < 100){
		return 14;
	}else if(dis >= 100 && dis < 200){
		return 14;
	}else if(dis >= 100 && dis < 200){
		return 13;
	}else if(dis >= 200 && dis < 400){
		return 12;
	}else if(dis >= 400 && dis < 1000){
		return 11;
	}else if(dis >= 1000 && dis < 2000){
		return 10;
	}else if(dis >= 2000 && dis < 4000){
		return 9;
	}else{
		return 8;
	}
};
var _show8Msg = function(domId, pos, closebtn, css, offsetx)
{
    if(!css) css = "";
    if(!offsetx) offsetx = 0;
    var dom = $("#"+domId)[0];
    KTools.hideMsg(dom._msgid);
    dom._msgid = KTools.showMsg('<div style="text-align:center;'+ css+'">显示范围过大，请<a href="javascript:void(0);" onclick="KMap.maplet().setZoomLevel(8);">放大</a>地图！</div><div style="text-align:center;"></div>', {autoclose:0, range:KTools.getBounds(mapbar[0]), node:dom, buboptions:{outside:false,closebtn:closebtn, arrow:false, pos:pos,marginx:1,marginy:1,offsetx:offsetx}});
};
//基本的提示显示 当dom不为空时为发送和打印的特殊提示
var _showBaseMsg = function(content, dom) {
	if(!dom) return KTools.showMsg('<div style="padding:3px 7px 3px 7px;">'+content+'</div>', {title:"提示",lightbox :true, autoclose:3});
	KTools.hideMsg(_showBaseMsg._last);
	_showBaseMsg._last = KTools.showMsg('<div style="padding:3px 7px 3px 7px;">'+content+'</div>', {lightbox :false, autoclose:5, node:dom, buboptions:{outside:true,closebtn:false, arrow:true, pos:KPosition.BOTTOM,marginx:1,marginy:1,offsetx:0}});
};
var _showViewSearchMsg2 = function(domId, pos, closebtn, css, offsetx)
{
    if(!css) css = "";
    if(!offsetx) offsetx = 0;
    var dom = $("#"+domId)[0];
    KTools.hideMsg(dom._msgid);
    dom._msgid = KTools.showMsg('<div style="text-align:center;'+ css+'">已经缩放到视野内搜索最小级别', {autoclose:1, range:KTools.getBounds(mapbar[0]), node:dom, buboptions:{outside:false,closebtn:closebtn, arrow:false, pos:pos,marginx:1,marginy:1,offsetx:offsetx}});
};
/**
 * 重置消息框位置
 * @param domId 需要重置的消息框dom Id
 * @private
 */
var _resizeMsg = function(domId){
	var dom = $("#"+domId)[0];
    KTools.resizeMsg(dom._msgid);
};
var getUrlVars = function(){
	var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('#') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
      hash = hashes[i].split('=');
      vars[hash[0]] = hash[1];
    }
    return vars;
};
/**
 * 获取url参数
 * @param name 参数名称
 * @returns 参数值
 */
var getUrlVar = function(name){
	return getUrlVars()[name];
};
/**
 * 地铁数据
 */
var subwayData ={
    "北京市":[
        { name : "1号线", value : "1", center : "HETFFFZVVHSTV", level : "9", color : "D73C23" },
        { name : "2号线", value : "2", center : "HESVJGZVVIBTF", level : "9",  color : "006098" },
        { name : "4号线", value : "4", center : "HESBBJZVVHCJT", level : "9",  color : "008E9C" },
        { name : "5号线", value : "5", center : "HETGACZVVIHBS", level : "9",  color : "A6217F" },
        { name : "6号线", value : "6", center : "HETVTDWVVJFEA", level : "9",  color : "CEA100" },
        { name : "8号线", value : "8", center : "HERACSZVVJIVE", level : "9",  color : "009B6B" },
        { name : "9号线", value : "9", center : "HERRBRXVVDWDD", level : "9",  color : "8FC31F" },
        { name : "10号线", value : "10", center : "HETATGZVVITBF", level : "9",  color : "2387B9" },
        { name : "13号线", value : "13", center : "HEJVSGZVVJSGF", level : "9",  color : "F8B62D" },
        { name : "14号线", value : "14", center : "HERCCFWVVDTTR", level : "9",  color : "FFB3B3" },
        { name : "15号线", value : "15", center : "HESTDAZVVVRDW", level : "9",  color : "6A357D" },
        { name : "八通线", value : "bt", center : "HFBABCZVVSVDF", level : "9",  color : "962337" },
        { name : "机场快轨", value : "ap", center : "HEUEJVZVVTBRU", level : "9",  color : "A29BBB" },
        { name : "昌平线", value : "cp", center : "HEEBDJZVVRRDT", level : "9",  color : "F59BC3" },
        { name : "大兴线", value : "dx", center : "HEVSICZVVCVJB", level : "9",  color : "008E9C" },
        { name : "亦庄线", value : "yz", center : "HFBBAGZVVIDAU", level : "9",  color : "D719A5" },
        { name : "房山线", value : "fs", center : "HERUAJZVUWTEG", level : "9",  color : "F06414" }
    ],
    "长春市":[
        { name : "轻轨3号线", value : "qg3", center : "HTGSSHUBACCBCC", level : "9", color : "F091C8" },
        { name : "轻轨4号线", value : "qg4", center : "HTGCGEUBACDACB", level : "9",  color : "5AB45A" }
    ], "成都市":[
        { name : "1号线", value : "1", center : "HABSJBZTUIHUE", level : "9", color : "009BD7" },
        { name : "2号线", value : "2", center : "HAARVUWTUJFJT", level : "9",  color : "FF9B23" }
    ], "大连市":[
        { name : "快轨3号线", value : "kg3", center : "HVEEJCXWFGEGJ", level : "8", color : "5ab45a" },
        { name : "快轨7号线", value : "kg7", center : "HVCDFAXWFGFJB", level : "9",  color : "5ab45a" },
        { name : "地铁8号线", value : "8", center : "HUVUGDZWEGDDV", level : "8",  color : "933385" }
    ], "广州市":[
        { name : "1号线", value : "1", center : "IJJIIHXUACAWR", level : "9", color : "FFD200" },
        { name : "2号线", value : "2", center : "IJJGGSWUABRHV", level : "9",  color : "006EBE" },
        { name : "3号线", value : "3", center : "IJUFWJXUAAHHI", level : "9", color : "FF9B23" },
        { name : "北延线", value : "3b", center : "IJGAABVUAGSHI", level : "9",  color : "FF9B23" },
        { name : "4号线", value : "4", center : "IRAHSUWUACVTE", level : "9", color : "009B64" },
        { name : "5号线", value : "5", center : "IJSUHSVUADURG", level : "9",  color : "C80037" },
        { name : "6号线", value : "6", center : "IJJIARVUABGTU", level : "9", color : "605AAF" },
        { name : "8号线", value : "8", center : "IJSEJUWUACEVT", level : "9",  color : "008E9C" },
        { name : "APM线", value : "apm", center : "IJRTESWUADDHV", level : "9",  color : "32C8F5" },
        { name : "广佛线", value : "gf", center : "IJIBWDXTWURJG", level : "9",  color : "B4D214" }
    ], "南京市":[
        { name : "1号线", value : "1", center : "IEGJBRWVGCSCU", level : "9", color : "32C8F5" },
        { name : "1号线南延长线", value : "1b", center : "IEJVUWXVGBGDR", level : "9",  color : "32C8F5" },
        { name : "2号线", value : "2", center : "IEGJBRWVGCSCU", level : "9",  color : "D73C23" },
        { name : "10号线", value : "10", center : "IEFGHSWVGADDT", level : "9",  color : "F0AA78" },
        { name : "机场线", value : "jcx", center : "IERVTVXVFVFWD", level : "8",  color : "2DBEAF" }
    ], "上海市":[
        { name : "1号线", value : "1", center : "IJRHCUWVJAJST", level : "9", color : "D70F37" },
        { name : "2号线", value : "2", center : "IJSUIWXVJAEIR", level : "9",  color : "87D200" },
        { name : "3号线", value : "3", center : "IJSFVHWVJAFCR", level : "9", color : "FFD200" },
        { name : "4号线", value : "4", center : "IJSWFBXVJBSAA", level : "9", color : "402080" },
        { name : "5号线", value : "5", center : "IJVSWHXVIRADR", level : "9",  color : "9B50AF" },
        { name : "6号线", value : "6", center : "IJUDTJWVJBEJI", level : "9", color : "D7006E" },
        { name : "7号线", value : "7", center : "IJSGDHXVIWEHC", level : "9", color : "FF7300" },
        { name : "8号线", value : "8", center : "IJSTJFWVJADCT", level : "9",  color : "009BD7" },
        { name : "9号线", value : "9", center : "IJSTUBWVIVAJA", level : "9", color : "78D7EB" },
        { name : "10号线", value : "10", center : "IJRRIBWVITDUR", level : "9",  color : "CD9BC8" },
        { name : "10号线支线", value : "10b", center : "IJTFFFWVJAEJE", level : "9", color : "CD9BC8" },
        { name : "11号线", value : "11", center : "IJIAVWXVIVIVC", level : "9",  color : "7D1E32" },
        { name : "11号线支线", value : "11b", center : "IJDRAIWVIRISH", level : "9", color : "7D1E32" },
        { name : "12号线", value : "12", center : "IJTIEAWVJCVDU", level : "9",  color : "32826E" },
        { name : "13号线", value : "13", center : "IJJDRIZVIUFVF", level : "9",  color : "F59BC3" },
        { name : "16号线", value : "16", center : "IRGSHGWVJCEAH", level : "9",  color : "32826E" },
        { name : "磁悬浮", value : "cxf", center : "IRBAIHWVJBSAR", level : "9",  color : "a29bbb" }
    ], "深圳市":[
        { name : "罗宝线（1号线）", value : "1", center : "ISRDSSWUAFVVV", level : "9", color : "00A564" },
        { name : "蛇口线（2号线）", value : "2", center : "ISIWJUXUAEVFE", level : "9",  color : "FA9B1E" },
        { name : "龙岗线（3号线）", value : "3", center : "ISSCGSWUARVTG", level : "9", color : "32C8F5" },
        { name : "龙华线（4号线）", value : "4", center : "ISIJFDWUAHVTV", level : "9",  color : "EB1E1E" },
        { name : "环中线（5号线）", value : "5", center : "ISJBRWXUAJECC", level : "9",  color : "6E4BA0" }
    ], "沈阳市":[
        { name : "1号线", value : "1", center : "HTIIWJXWTADWA", level : "9", color : "EB1E1E" },
        { name : "2号线", value : "2", center : "HTJIVBXWTBVUC", level : "9",  color : "F8B62D" }
    ], "天津市":[
        { name : "1号线", value : "1", center : "HHDFIJXVVIGWI", level : "9",  color : "D73C23" },
        { name : "2号线", value : "2", center : "HHDFIJXVVIGWI", level : "9",  color : "FFD200" },
        { name : "3号线", value : "3", center : "HHCTTBXVVIWAE", level : "9",  color : "32C8F5" },
        { name : "津滨轻轨", value : "jb", center : "HHVHUBXVVWWCA", level : "9",  color : "3C7DC8" }
    ], "武汉市":[
        { name : "1号线", value : "1", center : "HWSHWJXUTWICA", level : "9",  color : "009BD7" },
        { name : "2号线", value : "2", center : "HWSHWJXUTWICA", level : "9",  color : "F59BC3" },
        { name : "4号线", value : "4", center : "HWVDBJXUUBVJV", level : "9",  color : "78c800" }
    ], "重庆市":[
        { name : "1号线", value : "1", center : "HFHSTVXTWRUBH", level : "9",  color : "C80037" },
        { name : "2号线", value : "qg2", center : "HFJIRJXTWRGIR", level : "9",  color : "5AB45A" },
        { name : "3号线", value : "qg3", center : "HFHSTVXTWRUBH", level : "9",  color : "009BD7" },
        { name : "6号线", value : "6", center : "HFHSTVXTWRUBH", level : "9",  color : "F59BC3" },
        { name : "6号线支线", value : "6b", center : "HFERGHXTWURWC", level : "9",  color : "F59BC3" }
    ], "西安市":[
        { name : "1号线", value : "1", center : "HCAHRVXURJBBW", level : "9",  color : "0582ff" },
        { name : "2号线", value : "2", center : "HBWVHUXURIDUI", level : "9",  color : "D73C23" }
    ],"昆明市":[
        { name : "1号线", value : "1", center : "HGVSCRWTCUUFD", level : "9",  color : "D73C23" },
        { name : "6号线", value : "6", center : "HGRGFJXTCWCFE", level : "9",  color : "008E9C" },
        { name : "轨道交通2号线", value : "2", center : "HGIIGTUTDADEH", level : "9",  color : "2387B9" }
    ],"苏州市":[
        { name : "地铁1号线", value : "1", center : "IIFEWRXVHTWVS", level : "9",  color : "5AB45A" },
        { name : "地铁2号线", value : "2", center : "IIEHEAWVHTUBU", level : "9",  color : "2da5f0" }
    ],"香港特别行政区":[
        { name : "迪士尼线", value : "dsn", center : "ISWUVRXUABBCW", level : "9", color : "D287BE" },
        { name : "东铁线", value : "dt", center : "ITBWTJXUAHIDG", level : "9", color : "64B9EB" },
        { name : "东铁支线", value : "dtb", center : "ISUDJAVUAHSDD", level : "9", color : "64B9EB" },
        { name : "东涌线", value : "dy", center : "ITAJBBVUADHAC", level : "9", color : "EB9B23" },
        { name : "港岛线", value : "gd", center : "ITETDAVUAEGBU", level : "9", color : "3C7DC8" },
        { name : "观塘线", value : "gt", center : "ITECFVWUAFIEU", level : "9", color : "5AB45A" },
        { name : "机场快线", value : "jc", center : "ISWJDRXUABGDB", level : "9", color : "008287" },
        { name : "马鞍山线", value : "mas", center : "ITCGEWXUAHBSA", level : "9", color : "A05A2D" },
        { name : "荃湾线", value : "qw", center : "ITCCDFXUADWTG", level : "9", color : "DC4137" },
        { name : "西铁线", value : "xt", center : "ISTGISWUADSFV", level : "9", color : "A03296" },
        { name : "轻铁", value : "qt", center : "ISTEBFVUACSGG", level : "9", color : "AAAAAA" },
        { name : "将军澳线", value : "jja", center : "ITFTJTXUAGDFW", level : "9", color : "9173B4" },
        { name : "将军澳支线", value : "jjab", center : "ITFSCIVUAGHHS", level : "9", color : "9173B4" }
    ],"郑州市":[
        { name : "1号线", value : "1", center : "HIHFVFWVCIAJT", level : "9", color : "D70F37" }
    ],"哈尔滨市":[
        { name : "1号线", value : "1", center : "HSHHJSWBAHAVFT", level : "9", color : "F53719" }
    ],"杭州市":[
        { name : "1号线", value : "1", center : "IJDDHIWVFIUBD", level : "9", color : "C80037" },
        { name : "1号线支线", value : "1b", center : "IJEHCDWVFUHHR", level : "9", color : "C80037" },
        { name : "2号线", value : "2", center : "IJHFBUWVFJUFT", level : "9", color : "F8B62D" }
    ],"佛山市":[
        { name : "广佛线", value : "gf", center : "IJIBWDXTWURJG", level : "9",  color : "B4D214" }
    ],"长沙市":[
        { name : "地铁2号线", value : "2", center : "IBIAUSWUHHVIA", level : "9",  color : "00afeb" }
    ],"宁波市": [
        { name : "地铁1号线", value : "1", center : "ISVUHCWVHATHF", level : "9",  color : "D70F37" }
    ],"无锡市": [
        { name : "地铁1号线", value : "1", center : "IHHCTUWVHSTIE", level : "9",  color : "D70F37" }
    ]
};
String.prototype.cut = function(length,rep){
    if( this.length === 0 ) return this;
    var strArr = this.split(''), temLength = 0, temArr = [], d = rep || '...';
    for(var i = 0 ; i < strArr.length ; i++){
        temLength += (strArr[i].charCodeAt(0) > 255 || strArr[i].charCodeAt(0) < 0 ? 2 : 1);
        if(temLength > length*2){
            break;
        }
        temArr.push(strArr[i]);
        i == strArr.length-1 && (d = '');
    }
    return length <= 4 ? temArr.join('') : temArr.join('') + d;
};
/*
 * 地图初始化前对页面和组件的处理工作 
 */
//搜索框
var topSearchKSearchBox = null;
//本地搜
var losResultKLocalsearch = null;
//公交
var bussResultKBusearch = null;
//驾车
var navResultKNavsearch = null;
//当前活动Kquery组件的引用
var rightResultWidget = null;
//调用marker上次使用的组件dom
var tempResultDom = null;
//逆地理
var wg_geoKStdGeocoder = null;
//登录
var loginKStdAccount = null;
//打印
var mapPrintKStdPrinter = null;
//发送
var senderKStdSender = null;
//纠错
var feedbackKStdFeedback = null;
//标记
var mapmarkerKStdMapMarkers = null;
var updateCity = function(city, prevcity, currcity)
{
	NowCity = city;
	defaultDivInit(city);
	collection.init();
	traffic.init();
	traffic.setCity(city);
	mapbarLayers.init();
	mapbarLayers.setCity(city);
	if(rightUpNowOpened) rightUpNowOpened.layout();
	if(!prevcity || !currcity || !topSearchKSearchBox.tab() || topSearchKSearchBox.tab().kvalue != "bs") return;
	showBsMsg(currcity,prevcity);
};
var showBsMsg = function(currcity,prevcity)
{
    if(currcity.bus == true && (typeof prevcity =="undefined" || prevcity.bus == false))
    {
        topSearchKSearchBox.enableQuery([KQueryType.busearch, KQueryType.busline, KQueryType.bustation]);
    }
    if(currcity.bus == false)
    {
        topSearchKSearchBox.disableQuery([KQueryType.busearch, KQueryType.busline, KQueryType.bustation]);
        wg_geo_aA.get(0)._msgID = KTools.showMsg('<div style="text-align:center;">该地区暂无公交数据，请选择其他地区查询</div>', {autoclose:0,node:wg_geo_aA.get(0), buboptions:{outside:true,closebtn:true, pos:KPosition.RIGHT,marginx:1,marginy:1,offsety:0}});
    }
};
var initPreMapWidgets = function()
{
    //topLinkAS 顶部链接相关设置 登录 登出相关
	loginKStdAccount = new KStdAccount(login[0]);
    /**
     * topLinkAS.q 图吧圈地会
     * topLinkAS.wellcome 欢迎
     * topLinkAS.user 用户名显示
     * topLinkAS.login 登录
     * topLinkAS.logout 退出
     * topLinkAS.reg 注册
     * topLinkAS.myq 我的圈地会
     */
    topLinkChildren.each(function() {
        var text = $(this).text();
        switch(text) {
            case "切换到旧版":
                //KEvent.bind(this, "click", tin1ToWww);
                break;
			case "图吧圈地会":
                topLinkChildren.q = this;
                break;
			case "欢迎":
                topLinkChildren.wellcome = this;
                break;
			case "user":
                topLinkChildren.user = this;
                break;
            case "登录":
                KEvent.bind(this, "click", function() {
	                	initNullFlag = true;
	                	initListFlag = true;
	                	myCollecNullKDropPanel.close();
	                	myCollecListKList.close();
						loginKStdAccount.show();
				});
                topLinkChildren.login = this;
                break;
            case "退出":
                KEvent.bind(this, "click", function() {
	                	initNullFlag = true;
	                	initListFlag = true;
	                	myCollecNullKDropPanel.close();
	                	myCollecListKList.close();
						loginKStdAccount.signout();
				});
                topLinkChildren.logout = this;
                break;
			case "注册":
                topLinkChildren.reg = this;
                break;
			case "我的圈地会":
                topLinkChildren.myq = this;
                break;
        }
    });
	var signinFun = function(evt, w, account) {
		$(topLinkChildren.login).hide();
		//$(topLinkChildren.q).hide();
		$(topLinkChildren.logout).show();
		$(topLinkChildren.reg).hide();
		$(topLinkChildren.wellcome).show();
		//$(topLinkChildren.myq).show();
		$(topLinkChildren.user).text(account.user).show();
	};
	KEvent.bind(loginKStdAccount, "signin", signinFun);
	KEvent.bind(loginKStdAccount, "signout", function() {
		$(topLinkChildren.logout).hide();
		$(topLinkChildren.login).show();
		$(topLinkChildren.wellcome).hide();
		$(topLinkChildren.user).hide();
		//$(topLinkChildren.q).show();
		//$(topLinkChildren.myq).hide();
		$(topLinkChildren.reg).show();
	});
	var account = loginKStdAccount.account();
	if(account && account.signin) {
		signinFun(null, null, account);
	}
	//打印组件初始化
	mapPrintKStdPrinter = new KStdPrinter({lsurl:print_Url.lsurl, bsurl:print_Url.bsurl, blurl:print_Url.blurl, bsturl:print_Url.bsturl, navsurl:print_Url.navsurl});
    KManager.register(mapPrintKStdPrinter);
	//发送组件初始化
	senderKStdSender = new KStdSender(sender[0], {url:sender_Url.url, previewurl:sender_Url.previewurl, signinfun: {thisobj:loginKStdAccount, fun:loginKStdAccount.account}});
	KManager.register(senderKStdSender);
	//纠错组件初始化
	feedbackKStdFeedback = new KStdFeedback(feedback, {mapcontainer: mapbar[0], url:feedback_Url.url, closebtn:true});
    KManager.register(feedbackKStdFeedback);
	KEvent.bind(feedbackKStdFeedback, "resultstate", function(evt, wg, success) {
		if (success) {
			fdbs.show();
			feedbackKStdFeedback.hide();
		}
	});
	//标记组件初始化
	mapmarkerKStdMapMarkers = new KStdMapMarkers(mapmarker[0], {mapcontainer : mapbar.get(0),
        shareurl : mapmarker_Url.shareurl,
        latlonurl : geoCode_url,
        uploadUrl : mapmarker_Url.uploadUrl,
        roadurl : mapmarker_Url.roadurl,
        markbtn : $('#addMarker').get(0),
        offset : {top : 30, left : -80},
        sharebtn : $('#shareLinks').get(0),
        clearbtn : $('#clearMarker').get(0)});
	KManager.register(mapmarkerKStdMapMarkers);
    KEvent.bind(mapmarkerKStdMapMarkers, "search", function(evt, dom, queryOpts) {
        var query = KManager.match(queryOpts.type, KQuery)[0];
        if(query) query.query(queryOpts);
    });
    KEvent.bind(mapmarkerKStdMapMarkers, "shown", function(evt, wi)
    {
    	_defaultDivHide();
            pbrHead.hide();
            mmBar.show();
            pbrFoot.hide();
            mapmarkerKStdMapMarkers.layout();
			if(feedbackKStdFeedback.visible()) feedbackKStdFeedback.hide();
        if(mapmarker != rightResultDom )
        {
            tempResultdom =  rightResultDom;
            rightResultDom.hide();
            rightResultDom = mapmarker;
            rightResultDom.show();
            maxLeft = true;
            resizePage(true);
        }
        mmBar.show();
    });
    KEvent.bind(mapmarkerKStdMapMarkers, "hide", function(evt, wi)
    {
        $(">a",toolsIconLis.eq(1)).get(0)._selected = false;
        if($(">a",toolsIconLis.eq(1)).get(0)._onclick && tempResultdom)
        //记录以前的状态，如果有的话，就切换到以前的地方
        {
           tempResultdom.show();
           rightResultDom = tempResultdom;
        }
        tempResultdom = null;
        $(">a",toolsIconLis.eq(1)).eq(0).removeClass("toolSel").get(0)._selected =false;
        pbrHead.show();
        pbrFoot.show();
        mmBar.hide();
    });
	//纠错成功提示事件绑定
	$(">input", fdbs).click(function() {
		fdbs.hide();
	});
	var _comBeforeS = function()
    {
        updateCopyLink();
		if(feedbackKStdFeedback.visible()) feedbackKStdFeedback.hide();
		if(senderKStdSender.visible()) senderKStdSender.close();
		if(fdbs.is(":visible")) fdbs.hide();
        mapmarkerKStdMapMarkers.hide();
    };
    var _comBeforeS_end = function()
    {
        if(!maxLeft) KEvent.trigger(btnCtrac, "click");
        KMap.setMode(KMapMode.PAN);
        //delete by zhangq 取消工具栏自动隐藏
        //if(disBut._v) setTimeout(function(){KEvent.trigger(disBut, "click");});
    };
	//搜索组件初始化
    topSearchKSearchBox = new KSearchbox(topSearch, {demopos:KPosition.RIGHT, demolist : true, sugopts:{cache : false, url:topSearch_sugopts_url,minwidth:418}});
    KManager.register(topSearchKSearchBox);
    topSearchKSearchBox.setFirstTab();
    //绑定搜索组件的funtab事件。
    KEvent.bind(topSearchKSearchBox,"funtab",function(evt,wi,tabitem)
    {
        if( tabitem.kvalue =="more")
        {
            window.open("http://www.mapbar.com/more/index.html");
        }
        if( tabitem.kvalue =="hotel")
        {
            window.open("http://jiudian.mapbar.com/?cityname=%E5%8C%97%E4%BA%AC&fromid=Kmapbar123-S1679378-T1382361&est=marketing");
        }
		if( tabitem.kvalue =="api")
        {
            window.open("http://s.mapbar.com/nOwZ3Ps");
        }
    });
	//搜索相关组件中找不到结果时 客户建议事件
	var _userSuggestFun = function() {
		feedbackKStdFeedback.show();
		feedbackKStdFeedback.showTab(KFeedbackType.SUGGEST);
	};
	//本地搜索组件初始化
    losResultKLocalsearch = new KLocalsearch(
		losResult.get(0)
		, {
			mapcontainer : mapbar.get(0)
			, tipurl:losResult_tipurl
			, url:losResult_url
			, searchbox: topSearchKSearchBox
			, printer : mapPrintKStdPrinter
			, sender : senderKStdSender
		}
	);
    KManager.register(losResultKLocalsearch);
    var _SXPageFun = function(evt) {
        losResultKLocalsearch.goPage(evt.data.page);
    };
    KEvent.bind(losResultKLocalsearch, "searchbefore", function(evt, ls, ro) {
    	if(!ro || !ro.ls || !ro.ls.vs){
            ViewSearch.isShowViewSearch(false);
    	}
    	_defaultDivHide();
    	if(myCollecListKList){
    		myCollecListKList.close();
    	}
    	if(myCollecNullKDropPanel){
    		myCollecNullKDropPanel.close();
    	}
        _comBeforeS();
        bssButton.hide();
        busNavLink.hide();
        navTopBts.hide();
        navButton.hide();
        hideMapMarkerfun();
        if(rightResultWidget == mapmarkerKStdMapMarkers)    //如果当前是标记组件
        {
            mapmarkerKStdMapMarkers.hide(); //隐藏标记组件
            addMarker.removeClass();    //恢复按钮状态
        }
        if(rightResultWidget != losResultKLocalsearch)
        {
            if(rightResultWidget) rightResultWidget.clearResult();
            rightResultWidget = losResultKLocalsearch;
        }
        if(losResult != rightResultDom )
        {
            rightResultDom.hide();
            rightResultDom = losResult;
            rightResultDom.show();
            maxLeft = true;
            resizePage(true);
            if(KTools.isIE6){
            	$("#opCameraBub").find("div.mwp_lst").height(150);
        	};
        }
        _comBeforeS_end();
    });
    KEvent.bind(losResultKLocalsearch, "resultshown", function(evt, ls, ro) {
        losResultKLocalsearch.layout();
        $(">a", pnBar).each(function() {
            KEvent.clear(this);
        });
        //右上角条数显示
		resultCount.show();
		//重新选择隐藏
		selectbackShow(false);
		if(ls.totalCount()!=0){
			resultCount.html("共"+ls.totalCount()+"条信息");
		}
        losResult.show();
		//处理分页
        nfLink.show();
        $("#beian").hide();
        pnBar.empty();
        var pageCount = ls.pageCount();
        var currentPage = ls.currentPage();
        pnBar.append(pnBarAS);
        if(pageCount > 10) pageCount = 10;
        if(pageCount < 1)
        {
			pnBar.hide();
            return;
        }
        pnBar.show();
        if(currentPage === 1) {pnBarAS.eq(0).hide();pnBarAS.eq(1).show();} else {pnBarAS.eq(1).hide();pnBarAS.eq(0).show();}
        if(currentPage === pageCount) {pnBarAS.eq(2).hide();pnBarAS.eq(3).show();} else {pnBarAS.eq(3).hide();pnBarAS.eq(2).show();}
        KEvent.bind(pnBarAS.get(0), "click", _SXPageFun, {page:currentPage - 1});
        KEvent.bind(pnBarAS.get(2), "click", _SXPageFun, {page:currentPage + 1});
        var start = (currentPage > 2) ? (currentPage - 2) : 1;
        var end = (pageCount > currentPage + 2) ? (currentPage + 2) : pageCount;
        if(end - start < 4 && pageCount > 4)
        {
            if(start == 1) end = 5;
            if(end == pageCount) start = end - 4;
        }
        if(start != 1)
        {
            var a = $('<a href="javascript:void(0);">1</a>');
            KEvent.bind(a[0], "click", function() {
                losResultKLocalsearch.goPage(parseInt($(this).text()));
            });
            pnBarAS.eq(2).before(a);
            pnBarAS.eq(2).before("…");
        }
        for(var i = start; i <= end; i++) {
            var a;
            if(i != currentPage)
            {
                a = $('<a href="javascript:void(0);">'+i+'</a>');
                KEvent.bind(a[0], "click", function() {
                    losResultKLocalsearch.goPage(parseInt($(this).text()));
                });
            } else a = $('<a class="pnSed">'+i+'</a>');
            pnBarAS.eq(2).before(a);
        }
		updateSenderBubASClass(true, true, $.browser.msie,true);
		canPrint = true;
    });
	KEvent.bind(losResultKLocalsearch, "noresults", function(evt, ls, node) {
		lsNoResultSrongS.eq(0).text(ls.queryOptions().ls.name);
		lsNoResultSrongS.eq(1).text(ls.queryOptions().ls.city);
		lsNoResultSrongS.eq(3).text(NowCity);
		resultCount.html("").hide();
		if(!lsNoResultAS._eBinded) {
			lsNoResultAS.eq(0).click(function() {
				wg_geoKStdGeocoder.cityWidget().showMoreCity();
			});
			lsNoResultAS.eq(1).click(_userSuggestFun);
			lsNoResultAS._eBinded = true;
		}
		if(!lsNoResultAS._eBinded2) {
			lsNoResultAS.eq(2).click(function(){
				var zoom = KMap.zoom()-1;
				if(zoom >= viewsearchminzoomlevel){
					KMap.centerAndZoom(KMap.center(),zoom);	
				}else{
					_showViewSearchMsg2("lsNoResult", KPosition.BOTTOM,false, "width:330px;line-height:20px;");
				}
			});
			lsNoResultAS._eBinded2 = true;
		}
		if(!lsNoResultAS._eBinded3) {
			lsNoResultAS.eq(3).click(function(){
				var url = '#c='+encodeURIComponent(NowCity)+'&k='+encodeURIComponent(ViewSearch.vs_keyword)+'&pn=1&rn=10&wf=ls&vs=false';
				window.location.href = url;
			});
			lsNoResultAS._eBinded3 = true;
		}
		updateSenderBubASClass(false, false, false,false);
		canPrint = false;
	});
	//公交组件初始化
    bussResultKBusearch = new KBusearch(bussResult.get(0), {
		stationurl:base_url+"?t=bsl"
        , lineurl:base_url+"?t=bsrn&m=true"
        , busurl:base_url+"?t=bt"
        , mapcontainer:mapbar[0]
        , searchbox: topSearchKSearchBox
        , slopts : {
        	url : base_url+"?t=nl1.1"
            ,mapcontainer:mapbar[0]
            ,simplenoresult:true
            ,querytype : KQueryType.busearch
            ,submitbtn : bssButton[0]
        }
		, printer : mapPrintKStdPrinter
		, sender : senderKStdSender
    });
    KManager.register(bussResultKBusearch);
    KEvent.bind(bussResultKBusearch, "searchbefore", function(evt, bs, ro) {
        ViewSearch.isShowViewSearch(false);
    	_defaultDivHide();
        _comBeforeS();
        navTopBts.hide();
        resultCount.hide();
        pnBar.hide();
        navButton.hide();
        hideMapMarkerfun();
        if(rightResultWidget != bussResultKBusearch)
        {
            if(rightResultWidget) rightResultWidget.clearResult();
            rightResultWidget = bussResultKBusearch;
            busNavLink.hide();
            nfLink.hide();
            $("#beian").hide();
            
        }
        if(bussResult != rightResultDom)
        {
            rightResultDom.hide();
            rightResultDom = bussResult;
            rightResultDom.show();
            maxLeft =true;
            resizePage(true);
        }
        _comBeforeS_end();
    });
    KEvent.bind(bussResultKBusearch,"nbsearch", function(evt,wt,opt){
          losResultKLocalsearch.query(opt);
    });
    KEvent.bind(bussResultKBusearch, "resultshown", function(evt, bs, action, result) {
		if(action =="stationlist")
		{
			selectbackShow(false);
            busNavLink.hide();
		}
		else
		{
        var _qOpts = this.queryOptions();
		nfLink.show();
		$("#beian").hide();
        if(_qOpts && _qOpts.type == KQueryType.busearch)
        {
            busNavLinkAS.eq(1).text("自驾车");
            busNavLink.show();
            bussResultKBusearch.supportTaxi() ? busNavLinkAS.eq(2).show() : busNavLinkAS.eq(2).hide();
			selectbackShow(bussResultKBusearch.allowReList());
        } else {
            busNavLink.hide();
            busNavLinkAS.eq(2).hide();
			selectbackShow(false);
        }
         //bssButton.parent().hide();
		updateSenderBubASClass(true, true, false,false);
		canPrint = true;
	}
    });
	KEvent.bind(bussResultKBusearch, "noresults", function(evt, bs, node) {
		var _qOpts = bs.queryOptions();
		var _type = _qOpts.type;
		if(_type == KQueryType.busearch) {
			bsNoResultSrongS.eq(0).text(_qOpts.busorig.name);
			bsNoResultSrongS.eq(1).text(_qOpts.busdest.name);
			bsNoResultSrongS.eq(2).text(_qOpts.busorig.city?_qOpts.busorig.city:wg_geoKStdGeocoder.cityWidget().city().name);
			if(!bsNoResultAS._eBinded) {
				bsNoResultAS.eq(0).click(function() {
					wg_geoKStdGeocoder.cityWidget().showMoreCity();
				});
				bsNoResultAS.eq(1).click(function() {
					busNavLinkAS.eq(1).trigger("click");
				});
				bsNoResultAS.eq(2).click(_userSuggestFun);
				bsNoResultAS._eBinded = true;
			}
		} else if(_type == KQueryType.busline) {
			blNoResultSrongS.eq(0).text(_qOpts.busline.name);
			blNoResultSrongS.eq(1).text(_qOpts.busline.city);
			if(!blNoResultAS._eBinded) {
				blNoResultAS.eq(0).click(function() {
					wg_geoKStdGeocoder.cityWidget().showMoreCity();
				});
				blNoResultAS.eq(1).click(_userSuggestFun);
				blNoResultAS._eBinded = true;
			}
		} else if(_type == KQueryType.bustation) {
			bstNoResultSrongS.eq(0).text(_qOpts.bustation.name);
			bstNoResultSrongS.eq(1).text(_qOpts.bustation.city);
			if(!bstNoResultAS._eBinded) {
				bstNoResultAS.eq(0).click(function() {
					wg_geoKStdGeocoder.cityWidget().showMoreCity();
				});
				bstNoResultAS.eq(1).click(_userSuggestFun);
				bstNoResultAS._eBinded = true;
			}
		}
		updateSenderBubASClass(false, false, false,false);
		canPrint = false;
	});
	//驾车组件初始化
    navResultKNavsearch = new KNavsearch(navResult.get(0), {
		url:base_url
		, mapcontainer:mapbar[0]
		, slopts:{
			url:base_url+'?t=nl1.1'
			,mapcontainer:mapbar[0]
			,submitbtn:navButton[0]
            ,simplenoresult:true
			,cylopts:{
				closebtn:false
				, sugurl:base_url
				, mburl: wg_geo_mburl
			}
			,pagesize:15
			,pagecount:6
		}
		, searchbox:topSearchKSearchBox
		, cylopts:{
			closebtn:false
			, sugurl:base_url
			, mburl: wg_geo_mburl
		}
		, printer : mapPrintKStdPrinter
		, sender : senderKStdSender
		});
    KManager.register(navResultKNavsearch);
	KEvent.bind(navResultKNavsearch, "cancelappend", function(evt, ns) {
			busNavLink.show();
	});
    KEvent.bind(navResultKNavsearch, "searchbefore", function(evt, ns, ro) {
        ViewSearch.isShowViewSearch(false);
    	_defaultDivHide();
        _comBeforeS();
        resultCount.hide();
        pnBar.hide();
        bssButton.hide();
		backSelect.hide();
		backSelect_.hide();
		orReturn.show();
		orReturn_.show();
        hideMapMarkerfun();
        if(rightResultWidget != navResultKNavsearch)
        {
            if(rightResultWidget == mapmarkerKStdMapMarkers)    //如果当前是标记组件
            {
                mapmarkerKStdMapMarkers.hide(); //隐藏标记组件
                addMarker.removeClass();    //恢复按钮状态
            }
            if(rightResultWidget) rightResultWidget.clearResult();
            rightResultWidget = navResultKNavsearch;
            busNavLink.hide();
            nfLink.hide();
            $("#beian").hide();
            mmBar.hide();
        }
        if(navResult != rightResultDom)
        {
            rightResultDom.hide();
            rightResultDom = navResult;
            rightResultDom.show();
            maxLeft =true;
            resizePage(true);
        }
        _comBeforeS_end();
    });
    var selectbackShow = function(flag)
    {
       if(flag)
       {
        backSelect.show();
        backSelect_.show();
	    orReturn.hide();
	    orReturn_.hide();
        }else {
           backSelect.hide();
           backSelect_.hide();
		  orReturn.show();
		  orReturn_.show();
       }
        pbrHead.show();
        pbrFoot.show();
         mmBar.hide();
    };
  var hideMapMarkerfun  = function() // 隐藏标记组件。表明和点击标记分开。点击标记会将原来查询的给显示。
  {
     if(rightResultWidget == mapmarkerKStdMapMarkers)    //如果当前是标记组件
            {
                mapmarkerKStdMapMarkers.hide(); //隐藏标记组件
                addMarker.removeClass();    //恢复按钮状态
            }
  };
    var navResultTopBtFun = function(evt){
        if(this._dis) return;
        this._dis = true;
        if($(this).text() === "简要描述")
        {
            navTopBtsAS.eq(0).addClass("disLink");
            navTopBtsAS.eq(1).removeClass("disLink");
            navTopBtsAS[1]._dis = false;
            navResultKNavsearch.summary();
        } else {
            navTopBtsAS.eq(1).addClass("disLink");
            navTopBtsAS.eq(0).removeClass("disLink");
            navTopBtsAS[0]._dis = false;
            navResultKNavsearch.detail();
        }
    };
    KEvent.bind(navTopBtsAS.get(0), "click", navResultTopBtFun);
    KEvent.bind(navTopBtsAS.get(1), "click", navResultTopBtFun);
   KEvent.bind(navResultKNavsearch, "sl_resultshown", function(evt, ns, action, ro) {
             if(action == "query") {busNavLink.hide(); }
   });
    KEvent.bind(navResultKNavsearch, "resultshown", function(evt, ns, action, ro) {
		updateSenderBubASClass(false, true, false,false);
		canPrint = true;
		  //bssButton.parent().hide();
		selectbackShow(navResultKNavsearch.allowReList());
        if(action != "query")
		{
			if(action == "appendest") navTopBts.show();
		}
        else
        {
            navTopBtsAS.eq(0).addClass("disLink");
            navTopBtsAS.eq(1).removeClass("disLink");
            navTopBtsAS[0]._dis = true;
            navTopBtsAS[1]._dis = false;
        }
        navTopBts.show();
        if(ns.supportbus()){ busNavLinkAS.eq(1).text("乘公交");
           ns.supportTaxi() ? busNavLinkAS.eq(2).show() : busNavLinkAS.eq(2).hide();}
        else {
            busNavLinkAS.eq(2).hide();
            if(ns.airticket()) {
                busNavLinkAS.eq(1).text("特价机票");
                busNavLinkAS.eq(1).attr("jpURL", ns.airticket());
            } else busNavLinkAS.eq(1).text("");
        }
        nfLink.show();
        $("#beian").hide();
        busNavLink.show();
    });
	KEvent.bind(navResultKNavsearch, "noresults", function(evt, ns, node) {
		var _qOpts = ns.queryOptions();
		var _type = _qOpts.type;
		navNoResultSrongS.eq(0).text(_qOpts.navorig.name);
		navNoResultSrongS.eq(1).text(_qOpts.navdest.name);
		if(ns.supportbus()) {navNoResultAS.eq(1).text("公交");busNavLinkAS.eq(2).show();}
        else {
             ;busNavLinkAS.eq(2).hide();
            if(ns.airticket()) {
                navNoResultAS.eq(1).text("特价机票");
                navNoResultAS.eq(1).attr("jpURL", ns.airticket());
            } else navNoResultAS.eq(1).text("");
        }
		if(!navNoResultAS._eBinded) {
			navNoResultAS.eq(0).click(function() {
				navResultKNavsearch.reListStations();
			});
			navNoResultAS.eq(1).click(_busNavLinksFun);
			navNoResultAS.eq(2).click(_userSuggestFun);
			navNoResultAS._eBinded = true;
		}
		updateSenderBubASClass(false, false, false,false);
		canPrint = false;
	});
     KEvent.bind(bussResultKBusearch, "sl_submitbtn", function(evt,o, v) {
        if(v)
        {
            busNavLink.hide();
            nfLink.hide();
            $("#beian").hide();
            bssButton.show();
        } else
        {
             nfLink.show();
             $("#beian").hide();
            bssButton.hide();
        }
		updateSenderBubASClass(false, false, false,false);
		canPrint = false;
    });
    KEvent.bind(navResultKNavsearch, "sl_submitbtn", function(evt,o, v) {
        if (v) {
			busNavLink.hide();
			nfLink.hide();
			$("#beian").hide();
			navTopBts.hide();
			navButton.show();
		}
		else {
             nfLink.show();
             $("#beian").hide();
			navButton.hide();
		}
		updateSenderBubASClass(false, false, false,false);
		canPrint = false;
    });
    var _busNavLinksFun = function(evt) {
        var _queryOpts;
        if(rightResultWidget && (_queryOpts = rightResultWidget.queryOptions()))
        {
            var _index = evt.data.index;
            if(_index == 0)
            {
                if($(this).text() == "特价机票")
                {
                    window.open(busNavLinkAS.eq(1).attr("jpURL"));
                    return;
                }
                if(_queryOpts.type == KQueryType.busearch)
                {
                    _queryOpts.type = KQueryType.navsearch;
                    _queryOpts.navorig = _queryOpts.busorig;
                    _queryOpts.navdest = _queryOpts.busdest;
                    navResultKNavsearch.query(_queryOpts);
                } else if(_queryOpts.type == KQueryType.navsearch)
                {
                    _queryOpts.type = KQueryType.busearch;
                    _queryOpts.busorig = _queryOpts.navorig;
                    _queryOpts.busdest = _queryOpts.navdest;
                    bussResultKBusearch.query(_queryOpts);
                }
            } else  if(_index == 1) {
                if(_queryOpts.type == KQueryType.busearch)
                {
                	$('input[type=checkbox]').each(function(){
    	    			if($(this).attr('name') == 'sopt'){ 
    	    				$(this).attr('checked', false);
    	    			}
    	    		});
                    var _temp = _queryOpts.busorig;
                    _queryOpts.busorig = _queryOpts.busdest;
                    _queryOpts.busdest = _temp;
                    bussResultKBusearch.query(_queryOpts,false);
                } else if(_queryOpts.type == KQueryType.navsearch)
                {
                    var _temp = _queryOpts.navorig;
                    _queryOpts.navorig = _queryOpts.navdest;
                    _queryOpts.navdest = _temp;
                    navResultKNavsearch.query(_queryOpts);
                }
            }
            else
            {
               var msgopt ={node:busNavLinkAS.get(2),theme:"blue",buboptions:{offsetx:-10,offsety:-40,marginy:10},title:"打车费用"};
                 if(_queryOpts.type == KQueryType.busearch)
                {
					  bussResultKBusearch.showTaxiFare(msgopt);
                } else if(_queryOpts.type == KQueryType.navsearch)
                {
                      navResultKNavsearch.showTaxiFare(msgopt);
                }
            }
        }
    };
    KEvent.bind(busNavLinkAS.get(1), "click", _busNavLinksFun, {index:0});
    KEvent.bind(busNavLinkAS.get(0), "click", _busNavLinksFun, {index:1});
    KEvent.bind(busNavLinkAS.get(2), "click", _busNavLinksFun, {index:2});
	//逆地理组件初始化
    wg_geoKStdGeocoder = new KStdGeocoder(wg_geo, {url:wg_geo_url, mapcontainer:mapbar[0], cylopts:{sugurl: wg_geo_sugurl, closebtn:false, mburl:wg_geo_mburl,laturl:wg_geo_laturl,newcitylist:true}});
    KManager.register(wg_geoKStdGeocoder);
    var _first = false;
	KEvent.bind(wg_geoKStdGeocoder, "cyl_citychanged", function(evt, geo, prevcity, currcity) {
		if(!_first)
		{
			KEvent.bind(wg_geo_aA.get(0), "click", function() {
				KTools.hideMsg(this._msgID);
			});
			KEvent.bind(topSearchKSearchBox, "tabchanged", function(evt, widget, tab) {
				if(tab.kvalue == "bs")
				{
					$("#phoneBusAd").hide();
					var _geoCity = wg_geoKStdGeocoder.cityWidget().city();
					showBsMsg(_geoCity);
				}else{
					$("#phoneBusAd").show();
				}
			});
			initUI();
			var _cityWidget = wg_geoKStdGeocoder.cityWidget();
			if(_cityWidget) topSearchKSearchBox.setOptions({cityfun:{fun:_cityWidget.city, thisobj:_cityWidget}});
			_first = true;
		}
       updateCity(currcity.name, prevcity, currcity);
    });
	//找不到想要的结果的相关处理
	nfLink.click(function() {
		KMap.closeInfoWindow();
		feedbackKStdFeedback.show();
		feedbackKStdFeedback.showTab(KFeedbackType.SUGGEST);
		_defaultDivHide();
	});
	$('.mwp_fdb_cb',feedback).click(function(){
		if(rightResultDom == mapmarker || rightResultDom == losResult || rightResultDom == bussResult || rightResultDom == navResult){
			_defaultDivHide();
			rightResultDom.show();
		}else{
			_defaultDivShow();
			rightResultDom.hide();
		}
	});
	KEvent.bind(losResultKLocalsearch, "feedback", function(evt, wg, info, marker) {
		fdbs.hide();
		KMap.closeInfoWindow();
		var url= info.url;
		var kinfo= info.poinfo;
		feedbackKStdFeedback.setErrorType(KFeedbackType.POI_ERROR);
		feedbackKStdFeedback.setErrorPOI(kinfo, marker, url);
	});
	KEvent.bind(bussResultKBusearch, "feedback", function(evt, wg, fbinfo, routeinfo) {
		fdbs.hide();
		KMap.closeInfoWindow();
		if(fbinfo.type == KFeedbackType.POI_ERROR) {
			feedbackKStdFeedback.setErrorType(fbinfo.errortype);
			feedbackKStdFeedback.setErrorPOI(fbinfo.poinfo, undefined, fbinfo.url);
		} else {
			feedbackKStdFeedback.setErrorRoute(routeinfo, fbinfo.url);
		}
	});
	KEvent.bind(navResultKNavsearch, "feedback", function(evt, wg, fbinfo, routeinfo) {
		fdbs.hide();
		KMap.closeInfoWindow();
		feedbackKStdFeedback.setErrorRoute(routeinfo, fbinfo.url);
	});
};
/**
 * 工具栏 北京地铁 世博 摄像头 返回上一步 发送 相关UI的初始化
 */
var maxWindow = false;
var maxLeft = true;
var defaultDivF = true;
//小工具UI
var smallBoxKDropList = null;
//摄像头 UI
var opCameraKDropList = null;
// UI
var iconPlusDivKHScrollList = null;
//var expoPlusDivKHScrollList = null;
//UI
var rtTrafKDropPanel = null;
var myCollecNullKDropPanel = null;
var myCollecListKList = null;
var inviewsearchKDropPanel = null;
//地铁线路组件 UI
var swLineKDropPanel = null;
var rightUpBubbletoolBars = null;
var copyLinkKDropPanel = null;
var senderBubKBubble = null;
//一个标识 是否可打印
var canPrint = false;
window.copyLinkGet = function() {
    return copyLinkText.get(0).value;
};
window.copyLinkBak = function(str) {
    var _success = true;
    if(!str) {
    	try{
    		if(dTitle) document.title = dTitle;
    	}catch(e){}
        str = window.copyLinkGet();
        _success = (window.clipboardData.clearData() && window.clipboardData.setData("Text",str));
    }
    if(_success)
        copyLinkMsg.html("复制成功！");
    else
        copyLinkMsg.html("复制失败！");
    setTimeout(function() {
        copyLinkMsg.html("&nbsp;");
    }, 1000);
};
//url转为短链接
var copyLinkShortUrl = function(){
	function surlError(){
		copyLinkText.get(0).value = decodeURI(winLoc);
	}
	copyLinkText.get(0).value = "";
	var winLoc = window.location + "";
	var lurl = escape(winLoc).replace('#','23%').replace('/','%2F','g');
	$.ajax({
    	type 	: "GET",
        url 	: short_url,
        cache	: false,
        data 	: "url="+lurl,
        success	: function(data) {
        			if(data && data.surl){
        				copyLinkText.get(0).value = data.surl;
        			}else{
        				surlError();
        			}
                  },
        error 	: surlError,
        dataType:"json"
    });
}
window.updateCopyLink = function()
{
    dTitle = document.title;
    if(copyLinkKDropPanel){
    	copyLinkKDropPanel.close();
    }
//    copyLinkText.get(0).value = ""+window.location;
};
var mapMode = KMapMode.PAN;
var initUI = function()
{
	smallBoxKDropList = new KDropList(smallBox.get(0), {pos:2,offsetx:34,marginy:-10,editable:false, deletable:false, autolayout:false, sortable:false, closebtn:true, outside:false, multiple:false});
    opCameraKDropList = new KDropList(opCamera.get(0), {pos:4,marginx:-8, offsety:-1000,editable:false, deletable:false, autolayout:false, size:new KSize(200,170),sortable:false, closebtn:true, outside:false});
    iconPlusDivKHScrollList = new KHScrollList(iconPlusDiv.get(0));
    //expoPlusDivKHScrollList = new KHScrollList(expoPlusDiv.get(0));
    rtTrafKDropPanel = new KDropPanel(rtTraf.get(0), {pos:4,marginx:-8, offsety:-1000, autolayout:false, size:new KSize(310,220), closebtn:true, outside:false});
    myCollecNullKDropPanel = new KDropPanel(myCollecNull.get(0), {pos:4,marginx:-8, offsety:-1000, autolayout:false, size:new KSize(310,175),closebtn:true, outside:false});
    myCollecListKList = new KDropList(myCollecList.get(0), {scroll2view:false,pos:4,marginx:-8, offsety:-1000,editable:false, deletable:true, checkbox:false, autolayout:false, sortable:false, closebtn:true, outside:false});
    swLineKDropPanel = new KDropPanel(swLine.get(0), {pos:4,marginx:-8,offsety:-1000,autolayout:false, closebtn:true, outside:false});
    var cY = 18;
    if(KTools.isIE6){    	cY = -10;    };
    copyLinkKDropPanel = new KDropPanel(copyLink[0], {pos:2,offsetx:-70,marginy:cY, autolayout:false, closebtn:true, outside:false});
    KEvent.bind(copyLinkKDropPanel, "closed", function() {
        $(toolsIconLis["链接"]).removeClass("toolSel");
        toolsIconLis["链接"]._selected = false;
    });
    inviewsearchKDropPanel = new KDropPanel(inviewsearch[0], {pos:2,offsetx:-70,marginy:cY, autolayout:false, closebtn:true, outside:false});
    KEvent.bind(inviewsearchKDropPanel, "closed", ViewSearch.inviewsearchClose);
    KEvent.bind(inviewsearchKDropPanel, "opened", ViewSearch.inviewsearchOpen);
    var openinfowindow_timeout;
    KEvent.bind(losResultKLocalsearch, "beforeopeninfowindow", function(evt, ls, ro) {
        ViewSearch.vs_zomm_query = false;
        openinfowindow_timeout && clearTimeout(openinfowindow_timeout);
    });
    KEvent.bind(losResultKLocalsearch, "afteropeninfowindow", function(evt, ls, ro) {
        openinfowindow_timeout = setTimeout(function(){
            ViewSearch.vs_zomm_query = true;
            clearTimeout(openinfowindow_timeout);
        },1000);
    });
    smallBoxKDropList.setGroup("rightUpBubbletoolBars");
    opCameraKDropList.setGroup("rightUpBubbletoolBars");
    rtTrafKDropPanel.setGroup("rightUpBubbletoolBars");
    myCollecNullKDropPanel.setGroup("rightUpBubbletoolBars");
    myCollecListKList.setGroup("rightUpBubbletoolBars");
    swLineKDropPanel.setGroup("rightUpBubbletoolBars");
    copyLinkKDropPanel.setGroup("rightUpBubbletoolBars");
    inviewsearchKDropPanel.setGroup("rightUpBubbletoolBars");
    KManager.register(smallBoxKDropList);
    KManager.register(opCameraKDropList);
    KManager.register(iconPlusDivKHScrollList);
    //KManager.register(expoPlusDivKHScrollList);
    KManager.register(rtTrafKDropPanel);
    KManager.register(myCollecNullKDropPanel);
    KManager.register(myCollecListKList);
    KManager.register(swLineKDropPanel);
    KManager.register(copyLinkKDropPanel);
    KManager.register(inviewsearchKDropPanel);
    rightUpBubbletoolBars = KManager.getByGroup("rightUpBubbletoolBars");
    rightUpBubbleWidgetsOpened(opCameraKDropList);
    rightUpBubbleWidgetsOpened(rtTrafKDropPanel);
    rightUpBubbleWidgetsOpened(myCollecNullKDropPanel);
    rightUpBubbleWidgetsOpened(myCollecListKList);
    rightUpBubbleWidgetsOpened(swLineKDropPanel);
    rightUpBubbleWidgetsOpened(copyLinkKDropPanel);
    rightUpBubbleWidgetsOpened(smallBoxKDropList);
    rightUpBubbleWidgetsOpened(inviewsearchKDropPanel);
 //   toolsPanel.css("top", "0");
    var toolsPanelM = new MPanel({content:toolsPanel.get(0), location:{type:"xy"}});
    maplet.addPanel(toolsPanelM);
    toolsPanelM.show();
    toolsPanelM.setLocation({x:0,y:0});
    toolsPanelM.setMouseWheel(false);
    disBut._v = KTools.getCookie("disBut") != "false";
    var updateToolsPanel = function() {
        if(disBut._v)
        {
            KTools.setCookie("disBut", "true");
            toolsIcon.slideDown("fast");
            toolsPanelBg.slideDown("fast",function(){
                if($("a",toolsIconLis.eq(1)).get(0)._selected) {mapmarkerKStdMapMarkers.showToolbar();}
                mapmarkerKStdMapMarkers.layout();});
            toolsPanel.attr("className", "toolsPanelA");
        } else {
            //工具栏始终打开
            //KTools.setCookie("disBut", "false");
            KTools.setCookie("disBut", "true");
            toolsIcon.slideUp("fast");
            toolsPanelBg.slideUp("fast",function(){
                mapmarkerKStdMapMarkers.hideToolbar();
            });
            toolsPanel.attr("className", "toolsPanelB");
        }
    };
    updateToolsPanel();
    KEvent.bind(toolsPanel,"click",function(event) {
        event.stopPropagation();
    });
    KEvent.bind(disBut, "click", function(event) {
        event.stopPropagation();
        disBut._v = !disBut._v;
        updateToolsPanel();
    });
    KEvent.bind(KMap, "afteropeninfowindow", function() {
        //delete by zhangsq  取消工具栏自动隐藏
        //if(disBut._v) setTimeout(function(){KEvent.trigger(disBut, "click");});
    });
    var fullScreenFun = function(){
        if(maxWindow) {
            pageBody.css({"position": "relative", "z-index" : "", "top":"", "left":""});
            var _maxLeftUpdate = pbRight._beforeMaxLeft && !maxLeft;
            resizePage(false, false, true);
            if(_maxLeftUpdate) setTimeout(function(){KEvent.trigger(btnCtrac, "click", false);}, $.browser.mozilla?111:0);
        } else {
            pageBody.css({"position": "absolute", "z-index" : "11", "top":"0px", "left":"0px"});
        /*    pbRight._beforeMaxLeft = maxLeft;
            var _maxLeftUpdate= maxLeft;*/
            pbRight._beforeMaxLeft = false;
            var _maxLeftUpdate= false;
            if(_maxLeftUpdate) KEvent.trigger(btnCtrac, "click", true);
            resizePage(false, _maxLeftUpdate, true);
        }
         //调用标记组件的layout方法，会改变标记组件的位置。
        if(mapmarkerKStdMapMarkers)mapmarkerKStdMapMarkers.layout();
        if(rightResultWidget) rightResultWidget.layout();
    };
    //工具栏相关 
    var _lastToolDom = null;
    var _nowToolDom = null;
    /**
     * 工具图标事件函数
     * @param event
     */
    var iconClickFun = function(event) {
        if(this._selected == true) this._selected = false;
        else this._selected = true;
        var aHtml = $(this).text();
        if(this._selected)
        {
            if(aHtml == "全屏")
            {
                $(this).parent().removeClass("icon9");
                $(this).parent().addClass("icon10");
            } else {
                if(aHtml != "打印") $(this).addClass("toolSel");
                if(aHtml != "打印" && aHtml != "链接") copyLinkKDropPanel.close();
            }
        } else {
            if(aHtml == "全屏")
            {
                $(this).parent().addClass("icon9");
                $(this).parent().removeClass("icon10");
            } else $(this).removeClass("toolSel");
        }
		//add by xgq，为了标记功能操作
		toolsIconLis._markselect = (aHtml =="标记");
        switch(aHtml)
        {
			case "标记" :
				if(this._selected) {
					var _this = this;
					mapmarkerKStdMapMarkers.show();
                    this._onclick = false;
                    _defaultDivHide();
                }else{
                    this._onclick = true; 
					mapmarkerKStdMapMarkers.hide();
					rightResultDom.hide();
					_defaultDivShow();
				}
                break;
            case "测距" :
                if(this._selected)  mapMode = KMapMode.MEASURE;
                else  mapMode = KMapMode.PAN;
                KMap.setMode(mapMode);
                break;
            case "放大" :
                if(this._selected)  mapMode = KMapMode.ZOOMIN;
                else  mapMode = KMapMode.PAN;
                KMap.setMode(mapMode);
                break;
            case "缩小" :
                if(this._selected)  mapMode = KMapMode.ZOOMOUT;
                else  mapMode = KMapMode.PAN;
                KMap.setMode(mapMode);
                break;
            case "截图" :
                if(this._selected)  {
                	mapMode = KMapMode.SNAPSHOT;
                }else{
                	mapMode = KMapMode.PAN;
                }
                KMap.setMode(mapMode);
                break;
            case "链接" :
                if(this._selected) {
                    KMap.setMode(KMapMode.PAN);
                    copyLinkShortUrl();
                    copyLinkKDropPanel.open();
                } else {
                    copyLinkKDropPanel.close();
                }
                break;
			case "打印" :
				if(canPrint && rightResultWidget && (rightResultWidget != bussResultKBusearch || (rightResultWidget == bussResultKBusearch && bussResultKBusearch.selectedResult() != -1))) rightResultWidget.print();
				else {
					_showBaseMsg("地图上没有可打印的内容！", this);//没有查询结果无法打印！
				}
                break;
            case "发送" :
				if (this._selected) {
					if(rightResultWidget) {
						if(rightResultWidget == bussResultKBusearch) {
							if(bussResultKBusearch.selectedResult() != -1) {
								updateSenderBubASClass(true, true, false,false);
							} else {
								updateSenderBubASClass(false, false, false,false);
							}
						}
						senderBubKBubble.show(this, {pos:2,offsetx:0,marginy:4, arrow:false});
					} else {
						_showBaseMsg("没有查询结果无法发送！", this);
						KEvent.trigger(this, "click");
					}
				} else senderBubKBubble.hide();
                break;
			case "全屏" :
				maxWindow = !this._selected;
				fullScreenFun();
                break;
			case "视野内搜索" :
				if(this._selected) {
                    inviewsearchKDropPanel.open();
                } else {
                	inviewsearchKDropPanel.close();
                }
                break;
        }
        if(aHtml != "全屏" && aHtml != "发送") _lastToolDom = this;
        event.stopPropagation();
        return false;
    };
    /**
     * 小工具
     * add by liufang 20111231
     * */
    var iKvalue = "";
    var _iKvalue = "";
    KEvent.bind(smallBoxKDropList, "itemclick", function(evt, widget, item) { 
    	iKvalue = item.kvalue;
    	if(iKvalue == _iKvalue){	return;	}
    	else{	_iKvalue = iKvalue;    	}
    	switch(iKvalue){
    	case "up":
    		maxWindow = false;
			fullScreenFun();
			$('div.mwp_cyl_mc_n').css('top','34px');
			if(maxLeft){
	    		KEvent.trigger(btnCtrac, "click", false)
    		};
    		break;
    	case "down":
    		maxWindow = true;
			fullScreenFun();
			$('div.mwp_cyl_mc_n').css('top','113px');
			if(maxLeft){
	    		KEvent.trigger(btnCtrac, "click", false)
    		};
    		break;
    	case "left":
    		maxWindow = false;
			fullScreenFun();
			$('div.mwp_cyl_mc_n').css('top','34px');
			if(!maxLeft){
	    		KEvent.trigger(btnCtrac, "click", false)
    		};
    		break;
	    case "right":
	    	maxWindow = true;
			fullScreenFun();
			$('div.mwp_cyl_mc_n').css('top','113px');
			if(!maxLeft){
	    		KEvent.trigger(btnCtrac, "click", false)
    		};
			break;
    	}
    });
    toolsIconLis.each(function() {
        var a = $(">a", this).get(0);
        toolsIconLis[$(a).text()] = a;
        KEvent.bind(a, "click", iconClickFun);
    });
    KEvent.bind(KMap, "modechanged", function(event, map, lastMode, nowMode) {
		var markIcon = toolsIconLis["标记"];
		if(!toolsIconLis._markselect && markIcon._selected)
		{
            var modeArr = mapmarkerKStdMapMarkers.supportMapModels();
            var length =  modeArr.length;
            var flag = true;
            for(var i=0;i<length;i++)
            {
                if(nowMode ==modeArr[i]) {flag =false; break;}
            }
            if(nowMode ==KMapMode.PAN)  flag= false;
			if(flag)
            {
                $(markIcon).removeClass("toolSel");
                mapmarkerKStdMapMarkers.hideToolbar();
                markIcon._selected = false;
            }
		}
        if(nowMode == KMapMode.SNAPSHOT)
        {
            if(NowCity == "北京市")
            {
                //iconPlusDiv[0]._dslV = true;
                iconPlusDiv.hide();
            }
            if(NowCity == "上海市")
            {
                //expoPlusDiv[0]._dslV = true;
                expoPlusDiv.hide();
            }
            //delete by zhangsq 取消工具栏自动隐藏
            //KEvent.trigger(disBut, "click");
            closeRightUpBubbletooBars({});
        }
        if(lastMode == KMapMode.SNAPSHOT) {
            if(nowMode != KMapMode.PAN) KMap.resumeMap();
            else mapMode = KMapMode.PAN;
            //delete by zhangsq  取消工具栏自动隐藏
            //if(!disBut._v) KEvent.trigger(disBut, "click");
            $(toolsIconLis["截图"]).removeClass("toolSel");
            toolsIconLis["截图"]._selected = false;
            if(NowCity == "北京市")
            {
                iconPlusDiv.show();
            }
            if(NowCity == "上海市")
            {
                expoPlusDiv.show();
            }
            if(rightUpNowOpened) rightUpNowOpened.open();
        } else if(lastMode == KMapMode.ZOOMIN) {
            $(toolsIconLis["放大"]).removeClass("toolSel");
            toolsIconLis["放大"]._selected = false;
        } else if(lastMode == KMapMode.ZOOMOUT) {
            $(toolsIconLis["缩小"]).removeClass("toolSel");
            toolsIconLis["缩小"]._selected = false;
        } else if(lastMode == KMapMode.MEASURE) {
            $(toolsIconLis["测距"]).removeClass("toolSel");
            toolsIconLis["测距"]._selected = false;
        }
    });
	/*
    MEvent.addListener(KMap.maplet(), "measure", function() {
        $(toolsIconLis["测距"]).removeClass("toolSel");
        toolsIconLis["测距"]._selected = false;
        KMap.setMode(KMapMode.PAN);
    });
	*/
    KEvent.bind(KMap, "snapshot", function() {
       if(arguments[4])  window.open(arguments[4]);
    });
    KEvent.bind(btnCtrac, "click", function(event, self) {
        var _this_ = this;
        var _msg = rightUpNowOpenedbubMsg();
        if(_msg)
        {
            KTools.hideMsg(_msg.id());
            _msg = true;
        }
        if(maxLeft)
        {
            maxLeft = false;
            _this_.className = "btnExp";
            if(!self) resizePage(false, true, false);
            setTimeout(function(){
                var _ri = "-" + rightWidth;
                if(KTools.isIE6 && KTools.getBounds(window).size().width % 2 === 1) _ri = "-"+(rightWidth+1);
                pbRight.stop();
                pbRight.animate({right: _ri}, "fast",function(){
					if(mapmarkerKStdMapMarkers) {
						var dragBounds = KTools.getBounds(mapbar.get(0));
						if(mapmarkerKStdMapMarkers)mapmarkerKStdMapMarkers.layout();
					}
				});
                if(_msg == true) openRightUpNowOpenedbubMsg();
             }, $.browser.mozilla?133:0);
        } else {
            maxLeft = true;
            var _ri = "-0";
            if(KTools.isIE6 && KTools.getBounds(window).size().width % 2 === 1) _ri = "-1";
            pbRight.stop();
            pbRight.animate({right : _ri}, "fast", function() {
                setTimeout(function(){
                    _this_.className = "btnCtrac";
                    if(!self) resizePage(false, true, false);
                    if(_msg == true) openRightUpNowOpenedbubMsg();
					if(mapmarkerKStdMapMarkers) {
						var dragBounds = KTools.getBounds(mapbar.get(0));
						if(mapmarkerKStdMapMarkers)mapmarkerKStdMapMarkers.layout();
					}
                },$.browser.mozilla?110:0);
            });
        }
    });
	//返回上一步处理
    KEvent.bind(orReturn[0], "click", function() {
    	if(defaultDivF){
    		_defaultDivHide();
    		rightResultDom.show();
           	return;
    	}
       	_defaultDivHide();
       	rightResultDom.show();
    	window.history.back();        
//		if(window.location.href == KListener.firstURL) orReturn.hide();
    });
	//返回上一步处理
    KEvent.bind(backSelect[0], "click", function() {
    	if(defaultDivF){
    		_defaultDivHide();
    		rightResultDom.show();
           	return;
    	}
    	rightResultDom.show();
       	_defaultDivHide();
         if(rightResultWidget && rightResultWidget.reListStations)
		 {
			rightResultWidget.reListStations();
		 }
//		if(window.location.href == KListener.firstURL) orReturn.hide();
    });
//	KEvent.bind(KListener, "hashchanged", function() {
//		if(window.location.href != KListener.firstURL) orReturn.show(); else orReturn.hide();
//	});
//	if(window.history.length < 2) orReturn.hide();
	//发送的气泡设置
	senderBubKBubble = new KBubble(senderBub[0], {outsite:true});
	KEvent.bind(senderBubKBubble, "afterhide", function(evt, o, action) {
		if(action != "method") KEvent.trigger(toolsIconLis["发送"], "click");
	});
	var _senderFun = function() {
		if($(this).attr("class") != "") return;
		var _sendType = null;
		switch(this) {
			case senderBubAS.get(0):
				_sendType = KSendType.sms;
				break;
			case senderBubAS.get(1):
				_sendType = KSendType.email;
				break;
			case senderBubAS.get(2):
				_sendType = KSendType.gps;
				break;
			case senderBubAS.get(3):
				_sendType = KSendType.car;
				break;
		}
		if(_sendType != null) rightResultWidget.send(_sendType, _sendType);
        return false;
	};
	senderBubAS.click(_senderFun);
    //本地按钮处理
    KEvent.bind(bkbtn, "click", function() {
    	if(defaultDivF){
    		if(rightResultDom.html()){
    			rightResultDom.show();
            	_defaultDivHide();
    		}else{
    			rightResultDom.hide();
            	_defaultDivShow();
    		}
    	}else{
    		rightResultDom.hide();
        	_defaultDivShow();
    	};	
    });
    ViewSearch.init();
};
var updateSenderBubASClass = function(gsm, email, gps,car) {
	senderBubAS.eq(0).attr("class", gsm?"":"dsnd");
	senderBubAS.eq(1).attr("class", email?"":"dsnd");
    //update by tanzh
	//senderBubAS.eq(2).attr("class", gps?"":"dsnd");
	senderBubAS.eq(3).attr("class", car?"":"dsnd");
};
var rightUpNowOpened = null;
/**
 * 气泡相关组件的打开事件
 */
var rightUpBubbleWidgetsOpened = function(widget)
{	
    KEvent.bind(widget, "opened", function(event, widget, action) {
      //  if("method" == action && copyLinkKDropPanel != widget) return;
        var notClosees = {};
        notClosees[widget.id()] = true;
        closeRightUpBubbletooBars(notClosees);
        if(copyLinkKDropPanel != widget) rightUpNowOpened = widget;
    });
    KEvent.bind(widget, "closed", function(event, widget, action) {
        if("method" != action && rightUpNowOpened == widget){ 
        	rightUpNowOpened = null;
        }else if(widget == inviewsearchKDropPanel){
        	rightUpNowOpened = null;
        }
     //   if(copyLinkKDropPanel == widget && rightUpNowOpened) rightUpNowOpened.open();
    });
};
var closeRightUpBubbletooBars = function(notClosees)
{
    for(var i = 0; i < rightUpBubbletoolBars.length; i++)
    {
        var _w = rightUpBubbletoolBars[i];
        if(!notClosees[_w.id()]) _w.close();
    }
};
var rightUpNowOpenedbubMsg = function() {
    if(rightUpNowOpened)
    {
        var _msg;
        if(rightUpNowOpened == swLineKDropPanel) _msg = $("#swLineBub")[0];
        if(rightUpNowOpened == opCameraKDropList) _msg = $("#opCameraBub")[0];
        if(rightUpNowOpened == rtTrafKDropPanel) _msg = $("#rtTrafBub")[0];
        if(rightUpNowOpened == smallBoxKDropList) _msg = $("#smallBoxBub")[0];
        if(rightUpNowOpened == myCollecNullKDropPanel) _msg = $("#myCollecNullBub")[0];
        if(rightUpNowOpened == myCollecNullKDropPanel) _msg = $("#myCollecListBub")[0];
        if(rightUpNowOpened == myCollecListKList) _msg = $("#copyLinkBub")[0];
        if(rightUpNowOpened == inviewsearchKDropPanel) _msg = $("#inviewsearch")[0];
        if(_msg) return KTools.getMsg(_msg._msgid);
    }
};
var openRightUpNowOpenedbubMsg = function() {
    if(KMap.maplet().getZoomLevel() < 8) if(rightUpNowOpened) KEvent.trigger(rightUpNowOpened, "opened", rightUpNowOpened, "text");
};
var defKeyClick = function(param){
	var wurl = window.location.href+"";
	if(wurl == param){
		_defaultDivHide();
		if(rightResultDom == losResult){
			losResult.show();
		}
	}
};
//右侧默认面板
var defaultDivInit = function(defcity){	
	$("#defaultCurCity").html("在"+defcity+"找");
	var defkw = ["餐饮", "酒吧", "咖啡馆", "超市", "KTV", "电影院", "健身", "酒店", "药店", "医院", "银行", "ATM", "加油站", "充电站", "停车场", "火车站"];
	var defaultKeyWord = $("#defaultKeyWord");
	defaultKeyWord.empty();
	var d_long = defkw.length;
	var str='';
	for(var i = 0; i < d_long; i ++){
		str += '<a href="#c='+encodeURIComponent(NowCity)+'&k='+encodeURIComponent(defkw[i])+'&pn=1&rn=10&wf=ls" onclick="defKeyClick(this.href);"> '+defkw[i]+' </a>';
		if(i == 7){
			str += "<br>";
		}	
	};
	defaultKeyWord.append(str);	
	var hasFocus = false;
	$("#liecheForm").submit(function(e){
		if(hasFocus){
			return false;
		}
		var sc =$("input#liecheS").val();
		var ec =$("input#liecheE").val();
		var href = 'http://lieche.mapbar.com/lines_'+sc+'_'+ec+'__.html';
		$(this).attr('action',href);
		return true;
	});
	$("#liecheS").blur(function(){
		hasFocus = false;
	});
	$("#liecheS").focus(function(){
		hasFocus = true;
	});
	$("#liecheE").keydown(function(e) {
		var ua = navigator.userAgent.toLowerCase();
	    var s = null;
	    var isIE8 = false;
	    if (s = ua.match(new RegExp("msie ([\\d.]+)")))  isIE8 = (parseInt(s[1]) == 8);
	    if(isIE8){
	    	if(e.keyCode == 13){
	    		$("#liecheSmt").select();
	    	}	    	
	    }
	});
};
var _defaultDivHide = function(){
	defaultDiv.hide();
	bkbtn.attr("class","bkbtn bkbtn_bg_hide");
	defaultDivF = false;
	if(rightResultDom == losResult){
		resultCount.show();
		pnBar.show();
	}
	else if(rightResultDom == navResult){
		if(navResult.find('div.mwp_lst').length >=2){			
			navButton.show();
			nfLink.hide();
			$("#beian").hide();
			navTopBts.hide();
		}else{
			navTopBts.show();
			busNavLink.show();
		}
	}else if(rightResultDom == mapmarker){
		pbrFoot.hide();
	}
	else if(rightResultDom == bussResult){
		var bsId = $('input[name="bstype"]:checked').attr('id');
		switch(bsId){
		case 'bst1':
			if(bussResult.find('div.mwp_lst').length >=2){	
				nfLink.hide();
				$("#beian").hide();
				bssButton.show();
			}else{
				busNavLink.show();
				nfLink.show();
				$("#beian").hide();
			}
			break;
		case 'bst2':
			break;
		case 'bst3':
			break;
		}
	}
};
var _defaultDivShow = function(){
	if(feedbackKStdFeedback.visible()) feedbackKStdFeedback.hide();
	defaultDiv.show();
	bkbtn.attr("class","bkbtn bkbtn_bg_show");
	pbrFoot.show();
	nfLink.show();
	$("#beian").hide();
	defaultDivF = true;
	pnBar.hide();
	navButton.hide();
	resultCount.hide();
	navTopBts.hide();
	busNavLink.hide();
	bssButton.hide();
};
/**
 *update by liufang 2011-10-10 11:10
 *
 * 收藏相关
 * 用户登录，uid来自于mapbar的数据库
 * 所有的收藏信息保存在mapbar的数据库中
 */
var initNullFlag = true;
var initListFlag = true;
var collection = new (function(){
	/**
	 * 参数：
	 * _inited			: 地图初始化标记
	 * coolecCount		: 收藏数量
	 * uid				: 用户标识
	 * RECORDMAX		: 最大收藏数量
	 * allSelect		: 全选标记
	 * collecId			: 收藏记录标记
	 * errordataFlag	: 加载收藏记录标记
	 * _data			: 返回记录对象数组，下标为自然数
	 * markers			: 地标数组，下标收藏id
	 * initNullFlag		: 收藏空初始化标记
	 * initListFlag		: 收藏列表初始化标记
	 * */
	var markers = new Array();
	var infoWins = new Array();
	var _inited = false;
	var token = null;
	var collecCount, allSelect, collecId, errordataFlag, _data, _data_ext;
	var initParam = function(){
		collecCount = 0;
		allSelect = false;
		collecId = null;
		errordataFlag = false;
		_data = new Array();
		_data_ext = new Array();
        markers = [];
        infoWins = [];
	};
	var getToken = function(){
		var account = loginKStdAccount.account();
		if(account && account.signin) {
			return account.token;
		}else{
			return null;
		};
	};
	var showLogin = function(message){
		myCollecNullKDropPanel.close();
		myCollecListKList.close();
		myCollecListKList.keepOpenedStyle(false);
		if(message){
			_showBaseMsg(message);
		}else{
			_showBaseMsg("请先登录！");
		}
		setTimeout(function(){
			loginKStdAccount.show();
		},2000);
		return false;
	};
	this.init = function(){
        var _this = this;
		if(!KMap.isInitialized() || _inited) return;
		_inited = true;
		initParam();
        KEvent.bind(myCollecNullKDropPanel, "opened", function(evt, widget, action) {
        	myCollecNullKDropPanel.keepOpenedStyle(true);
        	myCollecListKList.keepOpenedStyle(false);
			return false;
        });	
        KEvent.bind(myCollecNullKDropPanel, "closed", function(evt, widget, action) {
			myCollecNullKDropPanel.keepOpenedStyle(false);
			myCollecList.show();
			myCollecNull.hide();
			return false;
        });
        KEvent.bind(myCollecListKList, "opened", function(evt, widget, action) {
        	myCollecListKList.keepOpenedStyle(true);
        	myCollecListBub.hide();
    		getRecord();
			return false;
        });	
        /*收藏列表气泡关闭时清理地图*/
        KEvent.bind(myCollecListKList, "closed", function(evt, widget, action) {
        	myCollecListKList.keepOpenedStyle(false);
        	allSelect = false;
        	$(">input[type=checkbox]",".weep_Bub_tit2").attr("checked",allSelect);
        	changeClass(collecList, "mouseup");
        	for(var i = 0; i< _data.length; i ++){
        		try{ 	
        			KMap.removeMarker(markers[_data[i].i]); 	
        		}catch(e){}
        	}
        	KMap.clearMarker();
        	KMap.closeInfoWindow();
        	markers = new Array();
			return false;
        });
        _bindMapEvents();
        //全选
        $(">input","div.weep_Bub_tit2").click(function(){
        	allSelect = $(this).attr("checked");
        	$(">input[type=checkbox]",this).attr("checked",allSelect);
        	if(allSelect){
        		changeClass(collecList, "mousedown");
        		for(var i  = 0; i < collecCount; i ++){
    				var markerCid =  _data[i].i;
        			if(markers[markerCid]) continue;
                    addMarker(markerCid,_data[i]);
        			$("div.mwpg_poiw_caV").hide();
        		}
          	}else{
            	for(var i = 0; i< _data.length; i ++){
            		try{ 	
            			KMap.removeMarker(markers[_data[i].i]); 	
            		}catch(e){}
            	} 
          		changeClass(collecList, "mouseup");
            	KMap.clearMarker();
            	markers = new Array();
          	}
        	KMap.closeInfoWindow();
			return ;
        });
        /* 关闭收藏提示 */
        $("#collecNotice_close").click(function(){	collecNotice.hide(); });
        /* 单击事件*/
        KEvent.bind(myCollecListKList, "itemclick", function(evt, widget, item) { 
        	var itemCollecId = item.kvalue;
        	var currLi = $("li[kvalue=" + itemCollecId + "]",collecList);
        	currLi.removeClass("mwp_lst_s");
       		switch(_data_ext[itemCollecId].b){
                case "1" : $("span.we_icon",currLi).addClass("down_we"); break;
                case "2" : break;
                case "3" : break;
    		}		
       		showMarker(itemCollecId);
			return false;
        });
		return false;
	};
    /**
     * 绑定与地图相关的事件
     */
    var _bindMapEvents = function(){
        var _this = this;
        KEvent.unbind(_this,"afteropeninfowindow", _afteropeninfowindow);
        KEvent.bind(_this, "afteropeninfowindow", _afteropeninfowindow);
    };
    var _afteropeninfowindow = function(event, map, theMarker){
        try{
            KMap.getGeo(theMarker.latlon().pid, function (city,name){
                theMarker.options().infowin.cmdata.poi.city = city;
            });
        }catch(e){}
    };
	var showMarker = function(collecId){
   		if(markers[collecId]){
   			KMap.setCenter(markers[collecId].latlon());
   			KMap.openInfoWindow(markers[collecId]);
			return;
   		}
   		var markerInfo = _data_ext[collecId];
   		if(markerInfo){
   			switch(markerInfo.b){
                case "1":
                        addMarker(collecId,markerInfo,true);
                        break;
                case "2": break;
                case "3": break;
    		} 
   		}
		return false;
	};
    var addMarker = function (collecId, markerInfo, isOpenMarker){
        var _this = this;
        var iwOpts = KConfig.get("iw_iwo_poi",{c:markerInfo.h, d:markerInfo.g, djp:"none",  djd:"none", 58:"none"});
        iwOpts.title = markerInfo.c;
        iwOpts.content = "<div class='mwpg_poiw_caW'><p>" + markerInfo.h + "<br>" + markerInfo.g + "</p></div>";
        iwOpts.cmdata = {poi:{city:markerInfo.j,name:markerInfo.c,pid:markerInfo.i,latlon:markerInfo.d}};
        var _marker = new KMarker(markerInfo.d,{icon:{img:'<div class="poi_marker_sn"><span></span></div>'},infowin:iwOpts, group:"tbsc"});
        _marker._classObj = _this;
        markers[collecId] = _marker;
        isOpenMarker ? KMap.addMarker(_marker,true,true) : KMap.addMarker(_marker);
    };
	var getRecord = function(){
		initParam();
		token = getToken();
		if(!token){
			showLogin();
			return false;
		}
		collecList.removeClass("mwp_lst");
		$.ajax({type 	: "GET",
				url 	: collec_info_url,
				cache 	: false,
				data 	: "tk="+encodeURIComponent(encodeURIComponent(token)),
				success : function(data){
							if(data){
								try{		_data = data;						}
								catch(e){	errordataFlag = true;	return;		}
								collecCount = _data.length;
								if(_data.code && _data.code == "401"){
									showLogin("登录超时，请重新登录！");
									return false;
								}else if(_data.code){
									myCollecListKList.close();
									myCollecList.hide();
									myCollecNull.show();
									myCollecNullKDropPanel.open();
								}else{
									myCollecListBub.show();
									loadRecord();
								}
							}else{		errordataFlag = true;		return;		}
						  },
				error 	: function(){	_showBaseMsg("加载数据失败！");	},
				dataType: "json"
		});	
		return false;
	};
	var collecListSize = function(){
		var collecStyleHeight = "";
		if(collecCount <= 10){
            collecStyleHeight = "height:" + (33 * collecCount) + "px";
			if(KTools.isIE6){    	
	    		$("#collecList").height(33 * collecCount);
	    	};
		}else{
            collecStyleHeight = "height:331px;overflow:auto;position:relative;";
        }
		collecListDiv.attr("style",collecStyleHeight);
		$("i",myCollecListBub).html("在地图上全部显示[共" +collecCount + "条]");
		return false;
	};
	var loadRecord = function(){
		collecListSize();		
		myCollecListKList.clearResult();
		myCollecNull.hide();
		myCollecList.show();
		var text = null;
		var iconClass = null;
		for(var i = 0; i < collecCount; i ++){
			collecId = _data[i].i;
			_data_ext[collecId] = _data[i];
			switch(_data[i].b){
			case "1": text = _data[i].c; iconClass = "we_icon";	break;
			case "2": iconClass = "bus_icon"; 					break;
			case "3": iconClass = "car_icon"; 					break;
			}
			if(text.length > 14) text = text.substring(0,13) + "...";
			myCollecListKList.insert({text:text, kvalue:collecId, deletable:true, editable:false, iconClass:iconClass});
		};
        /*鼠标经过li*/        
        KEvent.bind($("li",collecList), "mouseover", function(event) {	this.className = "ghover";	});
        KEvent.bind($("li",collecList), "mouseout",  function(event) {  this.className = "";   });
        /*删除某项记录*/
        $("li>a[title='删除']",collecList).click(function(){
        	var liIndex = $(this).parent().index();
        	var liKvalue = $(this).parent().attr("kvalue");
        	var markerInfo = _data_ext[liKvalue]
    		$.ajax({type 	: "GET",
					url 	: collec_del_url,
					cache 	: false,
					data 	: "tk="+encodeURIComponent(encodeURIComponent(token))+"&id="+liKvalue + "&fn=" + encodeURIComponent(encodeURIComponent(markerInfo.c)),
					success : function(data){	
						switch(data.code){	
						case "200": 
							try{  	
				    			KMap.removeMarker(markers[liKvalue]);    			
				    		}catch(e){}
							myCollecListKList.remove(liIndex);
							KMap.closeInfoWindow();
				        	collecCount --;
				        	if(collecCount <= 0){
								myCollecListKList.close();
								myCollecList.hide();
								myCollecNull.show();
				        		myCollecNullKDropPanel.open();
								KMap.clearMarker();	
				        	}else collecListSize();
							break;	
						case "401":
							showLogin("登录超时，请重新登录！");
							return false;
							break;
						default:
							_showBaseMsg("删除数据失败！");
							break;
						}	
						},
					error 	: function(){	_showBaseMsg("删除数据失败！");	},
					dataType: "json"
    		});
    		return false;
        });
		return false;
	};
	this.addRecord = function(obj){
		token = getToken();
		if(!token){
			showLogin();
			return false;
		}
		myCollecListKList.close();
		myCollecNullKDropPanel.close();
		if(!obj || obj.length <= 0){
			_showBaseMsg("加载数据失败！");
			return false;
		}
		var l = obj.latlon.trim(),	
			fd = obj.intro.trim(),	
			fp = obj.tel.trim(),
			fa = obj.addr.trim(),	
			id = obj.pid.trim(),
			c = obj.city.trim(),
			fn = obj.name.trim();
		if(!l || !fn || !id){		_showBaseMsg("该点无法收藏！");		return;		}
        var _param = new KUrlHash();
        	_param.setKey("tk",token);
        	_param.setKey("l",l);
        	_param.setKey("fn",fn);
        	_param.setKey("fd",fd);
        	_param.setKey("fp",fp);
        	_param.setKey("fa",fa);
        	_param.setKey("id",id);
        	_param.setKey("c",c);
		$.ajax({type 	: "POST",
				url 	: collec_add_url,
				cache 	: false,
				data 	: _param.toString(),
				success : function(data){
							switch(data.code){
							case "200"  : 
								showCollecNotice("添加收藏成功！");
								return;
								break;
							case "1201" : 
								showCollecNotice("您最多能收藏250条！");
								return;
								break;
							case "401":
								showLogin("登录超时，请重新登录！");
								return false;
								break;
							default   :	
								showCollecNotice("添加收藏失败！"); 
								break;
							}
				},
				error 	: function(){ _showBaseMsg("插入数据失败！");},
				dataType: "json"
		});
		return false;
	};
	var changeClass = function(obj, state){
		/**
		 * state:
		 * mousedown : 选中
		 * mouseup   : 放弃
		 * */
		switch(state){
		case "mousedown" :  $("span.we_icon",obj).addClass("down_we");
					    	$("span.bus_icon",obj).addClass("down_bus");
					    	$("span.car_icon",obj).addClass("down_car");
					    	break;
		case "mouseup"   :  $("span.we_icon",obj).removeClass("down_we");
					    	$("span.bus_icon",obj).removeClass("down_bus");
					    	$("span.car_icon",obj).removeClass("down_car");
					    	break;		
		}
		return false;
	};
	//删除字符串两端空格
	String.prototype.trim=function(){ return this.replace(/(^\s*)|(\s*$)/g, ""); }	;
	//显示收藏结果提示，3秒后消失
	var showCollecNotice = function(msg,callBack) {
    	noticeContent.html(msg);
    	collecNotice.show();
    	setTimeout(function(){
    		collecNotice.hide();
    		if(callBack){
    			callBack();
    		}
    	}
    	,3000);
		return false;
    };
})();
//区域搜
var ViewSearch = new (function(){
    var _oldCenter = null,  //区域搜上一次中心点
        _oldZomm = null,    //区域搜上一次缩放级别
        _timeoutId = null,   //延时计时器
        _switchCode = null,  //
        _switchKeyword = null,
        _isSwitch = false;
    /**
     * 区域搜关键字
     */
    this.vs_keyword = null;
    /**
     * 是否执行区域搜查询，用于移动或缩放地图时判断是否执行查询操作
     * @type {boolean}
     */
    this.vs_zomm_query = true;
    var $this = this;
    /**
     * 搜索范围过大提示
     */
    var _showViewSearchMsg = function(domId, pos, closebtn, css, offsetx)
    {
        if(!css) css = "";
        if(!offsetx) offsetx = 0;
        var dom = $("#"+domId)[0];
        KTools.hideMsg(dom._msgid);
        dom._msgid = KTools.showMsg('<div style="text-align:center;'+ css+'">搜索范围过大，请<a href="javascript:void(0);" onclick="KMap.maplet().setZoomLevel(viewsearchminzoomlevel);">放大地图</a>后继续</div><div style="text-align:center;"></div>', {autoclose:0, range:KTools.getBounds(mapbar[0]), node:dom, buboptions:{outside:false,closebtn:closebtn, arrow:false, pos:pos,marginx:1,marginy:1,offsetx:offsetx}});
    };
    /**
     * 判断区域搜功能是否正在使用
     * @returns {boolean}
     */
    var isviewsearch = function(){
        if($(".inviewsearch_box_current").length > 0){
            return true;
        } else{
            return false;
        }
    };
    /**
     * 执行区域搜索
     * @private
     */
    var _viewSearchQuery = function(){
        losResultKLocalsearch.viewSearchQuery(NowCity,ViewSearch.vs_keyword);
    };
    //地图缩放触发区域搜提示
    var _viewSearchPanZoomAction = function(){
        _oldCenter = _oldCenter || KMap.maplet().getCenter();
        _oldZomm = _oldZomm || KMap.zoom();
        _timeoutId && clearTimeout(_timeoutId);
        //延时500毫秒,解决连续移动地图时请求过多情况
        _timeoutId = setTimeout(function(){
            //判断是否执行搜索，点开气泡时 vs_zomm_query = false，气泡打开1秒后 vs_zomm_query = true，解决点开气泡时会执行区域搜索bug
            if(!$this.vs_zomm_query){
                clearTimeout(_timeoutId);
                return;
            }
            var _isQuery = false;
            var _distance = KMap.maplet().measDistance([new MPoint(_oldCenter),new MPoint(KMap.maplet().getCenter())]);
            switch (KMap.zoom()) {
                case 8:
                    if(_distance > 4000*2){_isQuery = true;}
                    break;
                case 9:
                    if(_distance > 2000*2){_isQuery = true;}
                    break;
                case 10:
                    if(_distance > 1000*2){_isQuery = true;}
                    break;
                case 11:
                    if(_distance > 400*2){_isQuery = true;}
                    break;
                case 12:
                    if(_distance > 200*2){_isQuery = true;}
                    break;
                case 13:
                    if(_distance > 100*2){_isQuery = true;}
                    break;
                case 14:
                    if(_distance > 40*2){_isQuery = true;}
                    break;
                default:
                    _isQuery = false;
                    break;
            }
            if (KMap.maplet().getZoomLevel() >= viewsearchminzoomlevel){
                KTools.hideMsg(inviewsearch_bub[0]._msgid);
                if((_isQuery || _oldZomm != KMap.zoom()) && isviewsearch()) {
                    _viewSearchQuery();
                    _oldCenter = KMap.maplet().getCenter();
                    _oldZomm = KMap.zoom();
                    clearTimeout(_timeoutId);
                }
            }else{
                _showViewSearchMsg("inviewsearch_bub", KPosition.BOTTOM,false, "width:226px;line-height:20px;");
            }
        },500);
    };
    /**
     * 区域搜控件打开事件
     */
    this.inviewsearchClose = function() {
        KEvent.unbind(KMap, "zoomed", _viewSearchPanZoomAction);
        KEvent.unbind(KMap, "centerchanged", _viewSearchPanZoomAction);
        $(toolsIconLis["视野内搜索"]).removeClass("toolSel");
        toolsIconLis["视野内搜索"]._selected = false;
        KTools.hideMsg(inviewsearch_bub[0]._msgid);
        if(isviewsearch()){
            $(inviewsearch_bub).removeClass("inviewsearch_bub_back");
            _switchCode = null;
            _switchKeyword = null;
            _isSwitch = false;
            var as = $(">div",inviewsearch_box).eq(0);
            $(">a",as).removeClass("inviewsearch_box_current").show().eq(0).remove();
            $(":text",inviewsearch_box).val("");
        }
    };
    /**
     * 区域搜控件关闭事件
     */
    this.inviewsearchOpen = function (){
        KEvent.bind(KMap, "zoomed", _viewSearchPanZoomAction);
        KEvent.bind(KMap, "centerchanged", _viewSearchPanZoomAction);
        $(toolsIconLis["视野内搜索"]).addClass("toolSel");
        toolsIconLis["视野内搜索"]._selected = true;
        if(KMap.zoom() < viewsearchminzoomlevel){
            _viewSearchPanZoomAction();
        }
    };
    /**
     * 区域搜初始化
     */
    this.init = function(){
        var _this = this;
        var as = $(">div",inviewsearch_box).eq(0);
        //绑定点击选项事件
        $(">a",as).click(function(){
            if(KMap.zoom()<viewsearchminzoomlevel){
                KMap.centerAndZoom(KMap.center(),viewsearchminzoomlevel);
            }
            $(">a",as).removeClass("inviewsearch_box_current");
            $(this).addClass("inviewsearch_box_current");
            (_switchKeyword && _switchKeyword != $(this).text()) && $("a[text='"+_switchKeyword+"']",as).remove();
            _switchCode = $(this).index();
            _switchKeyword = null;
            $(":text",inviewsearch_box).val("");
            _this.vs_keyword = $(this).text();
            _viewSearchQuery();
        });
        $(":text",inviewsearch_box).keydown(function(event){
            if(event.keyCode == '13'){
                $("button",inviewsearch_box).click();
            }
        });
        //搜索按钮事件
        $("button",inviewsearch_box).click(function(){
            $(":text",inviewsearch_box).blur();
            if(_switchKeyword == $(":text",inviewsearch_box).val() || $(":text",inviewsearch_box).val()=='') {return false;}
            if(KMap.zoom()<viewsearchminzoomlevel){
                KMap.centerAndZoom(KMap.center(),viewsearchminzoomlevel);
            }
            if(_switchKeyword){$(">a",as).eq(0).remove();}
            _switchKeyword = $(":text",inviewsearch_box).val();
            $(">a",as).removeClass("inviewsearch_box_current");
            if(!_switchKeyword){
                $(":text",inviewsearch_box).focus();
            }else if($("a[text='"+_switchKeyword+"']",as).length > 0){
                $("a[text='"+_switchKeyword+"']",as).click();
                return false;
            }else{
                $(">a",as).eq(0).before("<a class=inviewsearch_box_current style=display:none>"+_switchKeyword+"</a>");
                _this.vs_keyword = _switchKeyword;
                _viewSearchQuery();
            }
            _switchCode = null;
        });
        //鼠标移入移出功能区事件绑定
        var inviewsearch_bub_timeout_id = null;
        $(inviewsearch_bub).mouseover(function(){
            if(inviewsearch_bub_timeout_id){
                clearTimeout(inviewsearch_bub_timeout_id);
            }
            inviewsearch_bub_timeout_id = setTimeout(function(){//鼠标连续操作延时1秒
                if($(".inviewsearch_box_current").length > 0){
                    $(inviewsearch_bub).removeClass("inviewsearch_bub_back");
                    if(_switchCode && _isSwitch){
                        $(">a",as).eq(_switchCode+1).show().end().eq(0).remove();
                        _isSwitch = false;
                    }else if(_switchKeyword){
                        $(">a",as).eq(0).hide();
                    }
                    if (KMap.maplet().getZoomLevel() < viewsearchminzoomlevel){
                        _resizeMsg("inviewsearch_bub");
                    }
                }
                clearTimeout(inviewsearch_bub_timeout_id);
            },10);
        })
        .mouseout(function(){
            if(inviewsearch_bub_timeout_id){
                clearTimeout(inviewsearch_bub_timeout_id);
            }
            inviewsearch_bub_timeout_id = setTimeout(function(){//鼠标连续操作延时1秒
                if($(".inviewsearch_box_current").length > 0){
                    $(":text",inviewsearch_box).blur();
                    $(inviewsearch_bub).addClass("inviewsearch_bub_back");
                    if(_switchCode && !_isSwitch){
                        $(">a",as).eq(_switchCode).hide().clone().insertBefore($(">a",as).eq(0));
                        $(">a",as).eq(0).show();
                        _isSwitch = true;
                    }else if(_switchKeyword){
                        $(">a",as).eq(0).css('display','inline-block');
                    }
                    if (KMap.maplet().getZoomLevel() < viewsearchminzoomlevel){
                        _resizeMsg("inviewsearch_bub");
                    }
                }
                clearTimeout(inviewsearch_bub_timeout_id);
            },10);
        });
    };
    /**
     * 是否关闭区域搜控件
     * @param vs false时关闭
     */
    this.isShowViewSearch = function(vs){
        if(!vs && inviewsearchKDropPanel){
            inviewsearchKDropPanel.close();
        }
    };
})();
/**
 1 南京市 增加 1号线南延长线 接口 
 2 西安市 新加入口 新加 2号线 
 3 重庆市 修改原来接口名称 轻轨 为 轻轨2号线，增加 轻轨1号线，轻轨3号线 接口。 
 * 北京叠加层的管理
 */
var mapbarLayers = new (function()
{
	//added by liufang
	//添加了七个城市的地铁 长春，成都，大连，沈阳，重庆，武汉，南京
    var data = {};
    this._data = function(){return data;}
    data["food"] = {type:"base"};
	data["bank"] = {type:"base"};
	data["hotel"] = {type:"base"};
	data["market"] = {type:"base"};
	data["supermarket"] = {type:"base"};
	data["hospital"] = {type:"base"};
	data["drugstore"] = {type:"base"};
	data["post"] = {type:"base"};
	data["park"] = {type:"base"};
	data["grease"] = {type:"base"};
	data["camera1"] = {type:"camera"};
	data["camera8"] = {type:"camera"};
	data["camera9"] = {type:"camera"};
	data["camera5"] = {type:"camera"};
	var _inited = false;
    var _this = this;
    var _lastSA = null;
    var _liAS = {};
    var _nowLine = null;
    var _baseLayers = {};
    var _cameraLayers = {};
    var _layerIndex = 0;//parseInt(KTools._zindexMax/2)
    var _lastCity = undefined;
    var _city;
    var _tempMarker = null;
    var _hideAllMsg = function() {
        KTools.hideMsg(swLineBub[0]._msgid);
        KTools.hideMsg(iconPlusDiv[0]._msgid);
        KTools.hideMsg(opCameraBub[0]._msgid);
    };
    this.setCity = function(city)
    {
        if(!_inited || !KMap.maplet()) return;
        if(_city == city)return;
        _lastCity = _city;
        _city = city;
        var swlcFlag = !subwayData[_lastCity];
        iconPlusDiv.hide();
        if(!subwayData[city]){
            opCamera.hide();
            swLine.hide();
            iconPlusDiv.hide();
            _hideAllMsg();
            if(swlcFlag){
                this.close("subway");
                this.close("base");
                this.close("camera");
            }
        } else {
        	//是地铁城市
        	//动态写入城市地铁名称
        	swLine.find("div").eq(0).find("a").html(NowCity + "地铁");
        	subwayULDiv.find("div").eq(0).find("b").html(NowCity + "地铁");
        	swLine.show();
            var swUlHtml = [];
            for(var i = 0; i < subwayData[city].length; i++){
                swUlHtml.push(
                        '<li><span style="background-color: #' + subwayData[city][i].color + '"></span>' +
                        '<a href="javascript:void(0);" ' +
                        'title="' + subwayData[city][i].name + '" '+
                        'kvalue="' + subwayData[city][i].value + '|' + subwayData[city][i].center + '|' + subwayData[city][i].level  +'">'
                        + subwayData[city][i].name.cut(4) + '</a></li>');
            }
            subwayULDiv.find("ul").html(swUlHtml.join(""));
        	//切换城市后，如果上一城市不是当前城市，关闭气泡
            if(swLineKDropPanel.bubbleVisible()){
//                swLineKDropPanel.close();
                if(subwayData[city].length === 1){
                    _this.open("subway" + subwayData[city][0].value);
                }else{
                    _this.open("subwayall");
                }
            }
            if(mapMode != KMapMode.SNAPSHOT) iconPlusDiv.show();
            if(swlcFlag){
                setTimeout(function(){
                    _this.resumeLast(city);
                }, 122);
            }
        }
        if (city != "北京市") {
            iconPlusDiv.hide();
            opCamera.hide();
            if(_lastCity==="北京市"){
            	this.close("camera");
            }
        } else {
        	opCamera.show();
        }
    };
    var last = {};
    this.resumeLast = function(city)
    {
        if(!!subwayData[city])
        {
//            _this.open(swLine._lineValue);
            var _baseSelected = iconPlusDivKHScrollList.selected();
            for(var i = 0; i < _baseSelected.length; i++)
            {
                _this.open(_baseSelected[i].kvalue);
            }
            if(opCameraKDropList.openedStyleKept())
            {
                var _cameraSelected = opCameraKDropList.selected();
                for(var i = 0; i < _cameraSelected.length; i++)
                {
                    _this.open(_cameraSelected[i].kvalue);
                }
            }
        } 
    };
    var infoWinTheme = null;
    this.init = function()
    {
        if(!KMap.isInitialized() || _inited) return;
        _inited = true;
        //绑定地铁tip点击事件
        subwayULDiv.find("ul").click(function(e){
            if(e.target.tagName === 'A'){
                var _thisDom = $(e.target);
                var values = _thisDom.attr("kvalue").split("|");
                var lineValue = "subway" + values[0];
                if(values.length === 3) {
                    KMap.centerAndZoom(values[1], parseInt(values[2]));
                }
                if(_lastSA == _thisDom)
                {
                    return;
                }
                _this.open(lineValue, true,lineValue);
                if(_lastSA) $(_lastSA).removeClass("swLine_s");
                _thisDom.addClass("swLine_s");
                _lastSA = _thisDom;
                swLine._lineValue = lineValue;
            }
        });
        KEvent.bind(KMap, "layerclick", function(evt, map, data) {
            var _data = data;
            switch(data.layer._$LT)
            {
                case "subway":
                        if(data.data.indexOf("+") == -1) {
                            var _this_ = _liAS["subway" + data.data.split("_")[1]];
                            if(_lastSA == _this_) return;
                            _this.open("subway" + $(_this_).attr("kvalue"), false);
                            if(_lastSA) $(_lastSA).removeClass("swLine_s");
                            $(_this_).addClass("swLine_s");
                            _lastSA = _this_;
                        } else {
                            if(_lastSA) $(_lastSA).removeClass("swLine_s");
                            _lastSA = null;
                            var _data = data.data.split("_");
                            _data = _data[_data.length - 1];
                            _data = _data.split("+");
                            _this.open("subway" + $(_this_).attr("kvalue"), false);
                            _this.open("subway" + _data.join("_"));
                        }
                    break;
                case "base" ://idx=MAPEQWHWTRJBXRJPQNQWS&city=北京市&all=1
                		infoWinTheme = data.layer.theme;
                        var _param = new KUrlHash();
                        _param.setKey("t","ps");
                        _param.setKey("id",data.pid);
                        _param.setKey("c","北京市");
                        $.ajax({
                            url : bjLayers_url
                            ,cache : false
                            ,data :  _param.toString()
                            ,success:function(data) {
                                try{
                                    var ex_djd_url = data.s.a;
                                    var ex_djp_url = data.s.b;
                                    var _58_url = data.s.d;
                                    var ex_djd = "none";
                                    var ex_djp = "none";
                                    var _58 = "none";
                                    if(ex_djd_url) ex_djd = "";
                                    if(ex_djp_url) ex_djp = "";
                                    if(_58_url) _58 = "";
                                    var _iwOpts = KConfig.get("iw_iwo_poi",{g:data.g,c:data.c,d:data.d,djp:ex_djp,djd:ex_djd, "58": _58,djdurl:ex_djd_url,djpurl:ex_djp_url, "58url":_58_url});
                                    _iwOpts.title = data.n;
                           //         _iwOpts.content = data.c + "<br>" + data.d;
                                    _iwOpts.content = "<div class='mwpg_poiw_caW'><p>" + data.c + "<br>" + data.d + "</p></div>";
                                    _iwOpts.cmdata = {poi:{city:"北京市",name:data.n,pid:data.f,latlon:data.e}};
								/*	_iwOpts.content = $(_iwOpts.content)[0];
									$('[mfg="fs"]', _iwOpts.content).hide();
									$('[mfg="err"]', _iwOpts.content).hide();*/
                                    KMap.openInfoWindow(new MPoint(_data.area), _iwOpts, "tbsc");
                                } catch(e) {_showBaseMsg("加载数据失败！");}
                            }
                            ,error : function() {
                                _showBaseMsg("加载数据失败！");
                            }
                            ,dataType:"json"
                        });
                    break;
            }
        });
        /**
         * 地铁叠加层相关
         */
         KEvent.bind(swLineKDropPanel, "opened", function(evt, widget, action) {
        	//added by liufang
        	 KEvent.trigger(rtTrafKDropPanel, "closed", rtTrafKDropPanel, "text");
        	 KEvent.trigger(opCameraKDropList, "closed", opCameraKDropList, "text");
        	 if(swLineKDropPanel.openedStyleKept()){
        		KEvent.trigger(swLineKDropPanel, "closed", swLineKDropPanel, "text");
             	return;
        	 }
        	 var swOnlyOne = false;
        	 var lineValue = "", _subway = {};
        	 if(subwayData[NowCity]){
        		 _subway = subwayData[NowCity];
        		 if (_subway.length === 1) {
        			 lineValue = "subway" + _subway[0].value;
                     swOnlyOne = true;
        		 }
        	 }
//	    	bswLineShow();
            if(action != "text") return;
          //切换城市后，如果当前城市只有一条地铁线，则显示这条地铁线
            if(!_nowLine || !_nowLine.showed) {
            	if(swOnlyOne == true){
	                _this.open(lineValue, true,lineValue);
            	}else{
            		_this.open("subwayall");
            	}                
            }
            swLine._lineValue = "subwayall";
            swLineKDropPanel.keepOpenedStyle(true);
            if(KMap.maplet().getZoomLevel() < 8)
            {
                _show8Msg("swLineBub", KPosition.BOTTOM, false,"width:295px;line-height:20px;");
            }
        });
        KEvent.bind(swLineKDropPanel, "closed", function(evt, widget, action) {
            KTools.hideMsg(swLineBub[0]._msgid);
            $("#swLineBub").hide();
            if(action == "closebtn"){
            	swLineKDropPanel.keepOpenedStyle(true);
            }
            //if(action != "text" && action != "closebtn") return;
            if(action == "text"){
            	_this.close("subway");
                swLine._lineValue = null;
                swLineKDropPanel.keepOpenedStyle(false);
                if(_lastSA)
                {
                    $(_lastSA).removeClass("swLine_s");
                    _lastSA = null;
                }
            }
        });
        var bswLineShow = function () {        	
        	$(">ul >li >a", subwayULDiv).each(function() {
	            _liAS["subway" + $(this).attr("kvalue")] = this;	            
	            KEvent.bind(this, "click", function() {
	            var typeValue = "subway";
                var lineCenterValue = typeValue + $(this).attr("kvalue");
                var lineValue = "subway" + $(this).attr("kvalue");
                if(_lastSA == this)
	                {
	                    if(data[lineCenterValue]) {
                            KMap.centerAndZoom(data[lineCenterValue].center, parseInt(data[lineCenterValue].level));
                        }
	                    return;
	                }
	                //lineValue="subway"+$(this).attr("kvalue")
	                _this.open(lineCenterValue, true,lineValue);
                if(_lastSA) $(_lastSA).removeClass("swLine_s");
                	$(this).addClass("swLine_s");
	                _lastSA = this;
	                swLine._lineValue = lineValue;
	            });
        	})
        };
        /**
         * 基本叠加层相关
         */
        KEvent.bind(iconPlusDivKHScrollList, "reset", function(evt, widget){
            KMap.closeInfoWindow();
            _this.close("base");
            KTools.hideMsg(iconPlusDiv[0]._msgid);
        });
        KEvent.bind(iconPlusDivKHScrollList, "selectchanged", function(evt, widget, item) {
            if(item.selected)
            {
                _this.open(item.kvalue);
                if(KMap.maplet().getZoomLevel() < 8)
                {
                    _show8Msg("iconPlusDiv", KPosition.TOP, true,"width:200px;line-height:20px;", 1);
                }
            } else {
            	if(item.kvalue == infoWinTheme){
            		KMap.closeInfoWindow();
            	}
            	_this.close("base", item.kvalue);                
            }
        });
        /**
         * 雨点（poi、站点）叠加层相关
         * */
        var basalLayer = function (){
            var serverPath;
            var imgType;
            var needData = true;
            var safeLevel = false;
            var minLevel = 8;
            var maxLevel = 15;
            var nps = false;
        	var poiLayer = new MLayer({
        	     serverPath: "http://img.mapbar.com/maplite/mapbank/maplayer/poi/output/",
                 dataFormat: MLayer.DATAFORMAT.JSONP,
                 getterName: "getPoiData",
                 needData: true,
                 needImg: false,
                 minLevel: minLevel,
                 maxLevel: maxLevel,
                 tip:{mode:MLayer.TM_MOUSEOVER},
                 click : {
 					fun : function(){
	 						var _param = new KUrlHash();
	 						var currlat = arguments[0]['l'];
	                        _param.setKey("t","ps");
	                        _param.setKey("id",arguments[0]['p']);
	                        _param.setKey("c",_city);
	                        $.ajax({
	                            url : bjLayers_url
	                            ,cache : false
	                            ,data :  _param.toString()
	                            ,success:function(data) {
	                                try{
	                                	var datac = data.c;
	                                	if(!data.c && !data.d && !data.e){
	                                		datac = "对不起，暂时读取不到信息，请尝试搜索！"
	                                	};
	                                    var _iwOpts = KConfig.get("iw_iwo_poi",{g:data.g,c:datac,d:data.d});
	                                    _iwOpts.title = data.n;
	                                    _iwOpts.content = "<div class='mwpg_poiw_caW'><p>" + datac + "<br>" + data.d + "</p></div>";
	                                    _iwOpts.cmdata = {poi:{city:data.h,name:data.n,pid:data.f,latlon:currlat}};
	                                    KMap.openInfoWindow(new MPoint(currlat), _iwOpts);
	                                } catch(e) {
//	                                	_showBaseMsg("加载数据失败！");
	                                }
	                            }
	                            ,error : function() {
//	                                _showBaseMsg("加载数据失败！");
	                            }
	                            ,dataType:"json"
	                        });
 					}
 				}
            });
        	var stationLayer = new MLayer({
                serverPath: "http://img.mapbar.com/maplite/mapbank/maplayer/gongjiao/",
                dataFormat: MLayer.DATAFORMAT.JSONP,
                getterName: "getStationData",
                needData: true,
                needImg: false,
                minLevel: 13,
                maxLevel: 14,
                tip:{mode:MLayer.TM_MOUSEOVER}
            });
        	maplet.addLayer(poiLayer);
        	maplet.addLayer(stationLayer);
        }
     //暂时屏蔽底图可点击功能
     //basalLayer();
        /**
         * 摄像头叠加层相关
         */
        KEvent.bind(opCameraKDropList, "opened", function(evt, widget, action) {
        	KEvent.trigger(swLineKDropPanel, "closed", swLineKDropPanel, "text");
        	KEvent.trigger(rtTrafKDropPanel, "closed", rtTrafKDropPanel, "text");
        	if(KTools.isIE6){    	
        		$("#opCameraBub").find("div.mwp_lst").height(150);
        	};
        	if(opCameraKDropList.openedStyleKept()){
        		KEvent.trigger(opCameraKDropList, "closed", opCameraKDropList, "text");
        		return;
        	}
            if(action != "text") return;
            var list = opCameraKDropList.selected();
            for(var i = 0; i < list.length; i++) _this.open(list[i].kvalue);
            opCameraKDropList.keepOpenedStyle(true);
            if(KMap.maplet().getZoomLevel() < 8)
            {
                _show8Msg("opCameraBub", KPosition.BOTTOM, false,"width:310px;line-height:20px;");
            }
        });
        KEvent.bind(opCameraKDropList, "closed", function(evt, widget, action) {
        	$("#opCameraBub").hide();
        	if(action == "closebtn"){
        		opCameraKDropList.keepOpenedStyle(true);
            }
        	if(action !="text") return;
            KTools.hideMsg(opCameraBub[0]._msgid);
            if(action != "text" && action != "closebtn" && widget.selected().length > 0) return;
            _this.close("camera");
            opCameraKDropList.keepOpenedStyle(false);
        });
        KEvent.bind(opCameraKDropList, "selectchanged", function(evt, widget, item) {
            if(item.selected)
            {
                _this.open(item.kvalue);
                if(KMap.maplet().getZoomLevel() < 8)
                {
                    _show8Msg("opCameraBub", KPosition.BOTTOM, false,"width:310px;line-height:20px;");
                }
            } else {
                _this.close("camera", item.kvalue);
            }
        });
        KEvent.bind(KMap, "zoomed", function(){
            _this.setCity(NowCity);
            if(rightUpNowOpened) rightUpNowOpened.layout();
            if(KMap.maplet().getZoomLevel() >= 8) _hideAllMsg();
        });
    };
    //theme不能为空
    this.open = function(theme, center,ccsubway)
    {
        if(typeof theme != 'string' || theme.length < 1) return;
        if(typeof center != 'boolean') center = false;
        if(!data[theme])
        {
            data[theme] = {};
            data[theme].type = "subway";
        }
        var _sLayer = data[theme];
        _sLayer.theme = theme;        
//        _sLayer.theme = ccsubway||theme;
        if(_sLayer.showed == true) return;
        var serverPath;
        var imgType;
        var needData = true;
        var safeLevel = false;
        var minLevel = 8;
        var maxLevel = 15;
        var nps = false;
//        var p;
//        var realpath = theme;
        switch(_sLayer.type)
        {
            case "subway":
            	//added by liufang
            	if(ccsubway == undefined){
            		ccsubway = theme;
            		serverPath = subwayBasePath + theme + "/";
           		}else{           			
           			serverPath = subwayBasePath + ccsubway + "/";
           		}
                imgType = "png";
                break;
            case "base":
            		ccsubway = theme;
                    serverPath = baseLayersPath + theme + "/";
                    imgType = "gif";
                    _baseLayers[_sLayer.theme] = _sLayer;
                break;
            case "camera":
            		ccsubway = theme;
                    serverPath = cameraLayersPath + theme + "/";
                    imgType = "gif";
                    _cameraLayers[_sLayer.theme] = _sLayer;
                break;
        }
        if(!serverPath || !imgType) return;
        _sLayer.layer = new MLayer({
            serverPath: serverPath,
            needData: needData,
            safeLevel: safeLevel,
            nps : nps ,
            imgType: imgType,
            minLevel: minLevel,
            maxLevel: maxLevel,
            dataPattern: ccsubway + MLayer.DPLACEHOLDER,
            tip:{mode:MLayer.TM_MOUSEOVER}
        });
        _sLayer.layer._$LT = _sLayer.type;
        _sLayer.layer.theme = theme;
        maplet.addLayer(_sLayer.layer);
        _sLayer.showed = true;
        if(_sLayer.type == "subway")
        {
        	if(_nowLine) {        		
        		this.close("subway", _nowLine.theme);        	
        	}
             _nowLine = _sLayer;
        }
        if(center && typeof _sLayer.center == 'string')
        {
            if(typeof _sLayer.level == 'number')
                KMap.maplet().centerAndZoom(new MPoint(_sLayer.center), _sLayer.level);
            else
                KMap.maplet().setCenter(new MPoint(_sLayer.center));
        }
    };
    //theme为空时 关闭所有
    this.close = function(type, theme)
    {
        if(typeof theme != 'string' || theme.length < 1)
        {
            if(type === "subway")
            {
                if(_nowLine)
                {
                    _nowLine.showed = false;
                    KMap.maplet().removeLayer(_nowLine.layer, true);
                    _nowLine.layer = null;
                }
                _nowLine = null;
            } else if(type === "base") {
                for(var i in _baseLayers)
                 {
                     _baseLayers[i].showed = false;
                     KMap.maplet().removeLayer(_baseLayers[i].layer, true);
                     _baseLayers[i].layer = null;
                 }
                _baseLayers = {};
            } else if(type === "camera") {
                 for(var i in _cameraLayers)
                 {
                     _cameraLayers[i].showed = false;
                     KMap.maplet().removeLayer(_cameraLayers[i].layer, true);
                     _cameraLayers[i].layer = null;
                 }
                _cameraLayers = {};
            }
        } else  if(data[theme] && data[theme].layer)
        {
            data[theme].showed = false;
            KMap.maplet().removeLayer(data[theme].layer, true);
            data[theme].layer = null;
        }
    };
    this.finalize = function()
    {
        this.close("subway");
        this.close("base");  
        this.close("camera");
        data = null;
        _nowLine = null;
        _this = null;
        _lastSA = null;
        _baseLayers = null;
        _cameraLayers = null;
    };
})();
/**
 * 实时交通相关
 */
var traffic = new (function()
{
    var _timeJDom = null;
    var _cityList = {
		  "北京市" : ["beijing", "HETCUFZVVHUEE"]
		, "上海市" : ["shanghai", "IJSRVJZVIWCHC"]
		, "沈阳市" : ["shenyang", "HTJIVCZWTBVUB"]
		, "南京市" : ["nanjing", "IEGEITZVGCVHF"]
		, "深圳市" : ["shenzhen", "ISSGSEZUAHSIH"]
		, "重庆市" : ["chongqing", "HFISFCXTWJRFB"]
		, "大连市" : ["dalian", "HVDTTCXWEWAFW"]
		, "宁波市" : ["ningbo", "ISVUHUWVHAUFE"]
		, "天津市" : ["tianjin", "HHCIWHXVVJDBG"]
		, "常州市" : ["changzhou", "IGJFJWXVHIHDA"]
		, "武汉市" : ["wuhan", "HWTARHXUUAIWI"]
		, "太原市" : ["taiyuan", "HCAFICWVFITUB"]
		, "成都市" : ["chengdu", "HAAUTSVTUJCFE"]
		, "广州市" : ["guangzhou", "IJJDGAXUABUIW"]
		, "长沙市" : ["changsha", "IBGRTCVUHGRSF"]
		, "西安市" : ["xian", "HBWVHUXURIDUI"]
		, "福州市" : ["fuzhou", "IVEJETWUUUASU"]
		, "石家庄市" : ["shijiazhuang", "HESSBDWVITGDA"]
		, "呼和浩特市" : ["huhehaote", "GTCIEDWVIRJSI"]
		, "杭州市" : ["hangzhou", "IJDATIWVFIIBH"]
		, "青岛市" : ["qingdao", "IASDGIWVVSGIU"]
		, "佛山市" : ["foshan", "IJHTDHXTWSGTT"]
	    , "东莞市" : ["dongguan", "IRHDSEVUASTDU"]
		, "泉州市" : ["quanzhou", "IVWVHJXURWGTT"]
		, "台州市" : ["taizhou", "IUJHGTWVFADDF"]
		, "无锡市" : ["wuxi", "IHHBVAWVHSRRD"]
		, "珠海市" : ["zhuhai", "ISFTBFXTWEIUG"]
	    , "苏州市" : ["suzhou", "IIFEWRXVHTWVS"]
	    , "漳州市" : ["zhangzhou", "IVCTCHWUIVUGC"]
	    , "厦门市" : ["xiamen", "IVVJBBWUJJGJI"]
	    , "三明市" : ["sanming", "ISHGIGVUSJBFU"]
	    , "莆田市" : ["putian", "IVUDRUWUTGIEV"]
	    , "宁德市" : ["ningde", "IUTHDHXUWBCGA"]
	    , "龙岩市" : ["longyan", "ITFETFWUIUVJR"]
	    , "南昌市" : ["nanchang", "IFCEUTVUTJJDU"]
	    , "南平市" : ["nanping", "ISSGHCXUTWJGD"]
	    , "乌鲁木齐市" : ["wulumuqi", "ECUVDCXTIIWGF"]
	    , "长春市" : ["changchun", "HTESJCVBACCRUU"]
    };
    this.cityList = _cityList;
    //实时交通城市列表
    var _city = "北京市";	//当前城市
    var _lastCity = "北京市";	//上一个城市
    var _inited = false;	//初始化
    var _this = this;	//当前交通对象
    var _cityAs = {};
    var _opend = false;
    var _searchData = {text:"", latlon:"", level:0};
    var _inputs;
    var _getTrafficUrl = function()
    {
        var _param = new KUrlHash();
        _param.setKey("t", "ts");
        _param.setKey("c", _city);
        return traffic_url + "?" +_param.toString();
    };
    this.setCity = function(city)
    {
        if(!_inited || !KMap.maplet()) return;
        _lastCity = _city;
        _city = city;
        //如果当前城市曾经出现过
        if (_cityList[_city])
        {
        	//隐藏当前城市
            $(_cityAs[_city]).hide();
            if (_lastCity != _city)	//如果当前城市不是上一城市
            {
                $(_cityAs[_lastCity]).show();
                rtTraf.show();
                if (city != "北京市") rtTrafKDropPanel.setOptions({offsetx:90});
                else rtTrafKDropPanel.setOptions({offsetx:16});
                if(_opend) setTimeout(function(){_this.enableTraffic();},610);
                this.suggest.setOptions({url:_getTrafficUrl()});
                this.suggest.clearCache();
                this.suggest.clearResult();
                _searchData.text = "";
            }
        } else {
            $(_cityAs[_lastCity]).show();
            rtTraf.hide();
            KTools.hideMsg(rtTrafBub[0]._msgid);
            this.disableTraffic();
            this.suggest.clearResult();
        }
    };
    this.init = function(city)
    {
        if (_inited) return;
        _inited = true;
//        _city = city;
        _inputs = $("input", trafficDiv);
//        _timeJDom = $(">div:eq(1) >div:eq(1) >p", trafficDiv);
        _timeJDom = $(">div:eq(1) >div.dataT >p", trafficDiv);
        var _this_ = this;
        MEvent.addListener(maplet, "traffic_update", traffic_onUpdate);
        var _openT = function()
        {
            if (KMap.maplet().getZoomLevel() >= 8)
            {
                if(KTools.isIE6) setTimeout(function(){_this.enableTraffic();}); else _this.enableTraffic();
                KEvent.unbind(KMap, "zoomed", _openT);
            }
        };
        KEvent.bind(rtTrafKDropPanel, "opened", function(evt, widget, action) {
            if (action != "text") return;
            KEvent.trigger(swLineKDropPanel, "closed", swLineKDropPanel, "text");
            KEvent.trigger(opCameraKDropList, "closed", opCameraKDropList, "text");
            if(rtTrafKDropPanel.openedStyleKept()){
            	KEvent.trigger(rtTrafKDropPanel, "closed", rtTrafKDropPanel, "text");
            	return;
            };
            _opend = true;
            if (KMap.maplet().getZoomLevel() < 8) {
                _show8Msg("rtTrafBub", KPosition.BOTTOM,false, "width:310px;line-height:20px;");
                KEvent.bind(KMap, "zoomed", _openT);
            } else if(KTools.isIE6) setTimeout(function(){_this.enableTraffic();}); else _this.enableTraffic();
            rtTrafKDropPanel.keepOpenedStyle(true);
        });
        KEvent.bind(rtTrafKDropPanel, "closed", function(evt, widget, action) {
            KTools.hideMsg(rtTrafBub[0]._msgid);
            if (action != "text" && action != "closebtn") return;
            _inputs[0].value = "";
            _this.suggest.clearCache();
            _this.suggest.clearResult();
            _opend = false;
            $("#rtTrafBub").hide();
            if(action=="text"){
            	_this.disableTraffic();
            	 rtTrafKDropPanel.keepOpenedStyle(false);
                 KEvent.unbind(KMap, "zoomed", _openT);
            }
        });
        $(">div:eq(3) >a", trafficDiv).each(function() {
            _cityAs[$(this).text() + "市"] = this;
            KEvent.bind(this, "mouseup", function() {
                _this_.disableTraffic();
                KMap.setCenter(new MPoint(_cityList[$(this).text() + "市"][1]), 8);
                var _this = this;
                setTimeout(function(){updateCity($(_this).text() + "市");_this_.enableTraffic();},2);
            });
        });
        this.suggest = new KStdSuggest(_inputs[0], {url:_getTrafficUrl(), minwidth:176, autocomplete:false});
        KEvent.bind(this.suggest, "datachanged", function(evt, w, data) {
			var value = data.kvalue;
            _searchData.text = data.text;
            _searchData.latlon = value.a;
            _searchData.level = parseInt(value.b);
        });
        KEvent.bind($("form", trafficDiv), "submit", function() {
            var txt = _inputs[0];
            if(txt.value == "")
            {
                _showMsg("地址不能为空！");
                return false;
            }
            if(_searchData.text === txt.value && typeof _searchData.latlon == 'string' && _searchData.latlon.length >= 14 && _searchData.level) {
                KMap.setCenter(new MPoint(_searchData.latlon), parseInt(_searchData.level));
            } else {
                var _param = new KUrlHash();
                _param.setKey("t", "g");
                _param.setKey("c", _city);
                _param.setKey("ad", txt.value);
                $.ajax({type : "GET"
                    ,url : geoCode_url
                    ,cache : false
                    ,data :  _param.toString()
                    ,success:function(data) {
                        if(typeof data.l == 'string' && data.l.length >= 13 && data.s)
                        {
                            KMap.setCenter(new MPoint(data.l), parseInt(14));
                            _searchData.text = txt.value;
                            _searchData.latlon = data.l;
                            _searchData.level = 14;
                        }
                        else _showMsg("无法定位！");
                    }
                    ,error:function(){_showMsg("无法定位！");}
                    ,dataType:"json"
                });
            }
            return false;
        });
        KEvent.bind(KMap, "zoomed", function() {
            _this.setCity(NowCity);
            if(rightUpNowOpened) rightUpNowOpened.layout();
            if(KMap.maplet().getZoomLevel() >= 8)
            {
                KTools.hideMsg(rtTrafBub[0]._msgid);
            }
        });
    };
    var _abled = false;
    this.enableTraffic = function() {
        $(_cityAs[_city]).hide();
        _timeJDom.html("&nbsp;&nbsp;");
        if (!_abled)
        {
            maplet.enableTraffic({
                minLevel: 8, //最小级别，默认值为TRAFFIC_MIN_LEVEL，值为8。
                maxLevel: 14, //最大级别，默认值为TRAFFIC_MAX_LEVEL，此值和地图最大级别一致。
                interval: 5, //设置实时路况刷新时间间隔，单位：秒。最小值不能低于5分钟。
                city: _cityList[_city][0] //实时路况城市拼音名，现在支持四个城市：beijing shanghai nanjing shenyang。
            });
            _abled = true;
        } else {
            maplet.traffic.setCity(_cityList[_city][0]);
        }
    };
    this.disableTraffic = function() {
        if (_abled) {
            maplet.disableTraffic();
            _abled = false;
        }
    };
    this.finalize = function()
    {
        this.disableTraffic();
    };
    var traffic_onUpdate = function(data) {
        var t = maplet.traffic.getTimestamp();
        var h = t.getHours() < 10 ? "0" + t.getHours() : t.getHours();
        var m = t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes();
        if (t) _timeJDom.html(h + ":" + m);
    };
    var _showMsg = function(msg) {
        KTools.showMsg('<div style="padding:3px 8px 3px 8px;">'+msg+'</div>', {autoclose:8,node:_inputs[0],buboptions:{outside:true,closebtn:false}});
    };
})();
/**
 * 页面流程的主文件 对页面和地址初始化工作从此文件开始
 */
var initMap = function(center, zoom, self,isCheckCity)
{
    if(self != true && (!(center instanceof MPoint) || zoom === undefined) )
    {
    	var city = decodeURIComponent(decodeURIComponent(getUrlVar('c'))); 
    	if(city != '' && city != undefined && city != 'undefined' && !isCheckCity){
      	  $.ajax({
                url : cityInfo_url
                ,cache : false
                ,data :  "t=cn&c="+encodeURIComponent(encodeURIComponent(city))
                ,success:function(data) {
                	if(data.f && data.g){
                		initMap(data.f, data.g, true ,true);	
                	}else{
                		initMap(undefined, undefined, false,true);
                	}
                }
                ,error : function() {
                    initMap(undefined, undefined, false,true);
                }
                ,dataType:"json"
            });
        }else{
        	$.ajax({
                url : ipCity_url
                ,cache : false
                ,data :  "t=ip&k="
                ,success:function(data) {
                	var args = window.location.href.split("#");
//                	if(args.length <2 ){
//                		$("#defaultDiv").show();
//                	}
                    if(data && typeof data.c == "string" && data.c.length >= 13 && parseInt(data.d) >= 0)
                    {	
    					initMap(new MPoint(data.c), data.d, true,true);
    				} else{
    					initMap(undefined, undefined, true,true);
    				} 
                }
                ,error : function() {
                    initMap(undefined, undefined, true,true);
                }
                ,dataType:"json"
            });
        }
        return;
    }
    KMap.init(mapbar.get(0), {overview:KMapCtrlState.MINI, center:center, zoom:zoom,click2center:false});
    (function(){
		//右键事件功能
    	var menu = new MContextMenu();
    	KMap.maplet().setContextMenu(menu);
    	var mpoint = undefined;
    	MEvent.addListener(maplet,"contextmenu",function(){
    		mpoint = arguments[0];
    	});
    	//当前城市名注入右键菜单
    	var menuCity = function(){return wg_geoKStdGeocoder.cityWidget().city().name;}
        KEvent.bind(topSearchKSearchBox,'tabchanged',function(){
            if(arguments[2].kvalue === "navs"){
                var se = bussResultKBusearch.getStartAndEnd();
                if(se.s && se.s.options){
                    var start = se.s.name ? se.s : se.s.options().infowin.cmdata.poi;
                    navResultKNavsearch.menuaddMarker("s",(typeof start.latlon === 'function') ? start.latlon() : start.latlon,start.name,start.city);
                }
                if(se.e && se.e.options){
                    var end = se.e.name ? se.e : se.e.options().infowin.cmdata.poi;
                    navResultKNavsearch.menuaddMarker("e",(typeof end.latlon === 'function') ? end.latlon() : end.latlon,end.name,end.city);
                }
                if((se.s && se.s.options) || (se.e && se.e.options))
                {
                    bussResultKBusearch.removeStartAndEnd();
                }
            }else if(arguments[2].kvalue === "bs"){
                var se = navResultKNavsearch.getStartAndEnd();
                if(se.s){
                    bussResultKBusearch.menuaddMarker("s",se.s.latlon(),se.s.POIName,se.s.city || menuCity);
                }
                if(se.e){
                    bussResultKBusearch.menuaddMarker("e",se.e.latlon(),se.e.POIName,se.e.city || menuCity);
                }
                se.s && se.e && navResultKNavsearch.removeStartAndEnd();
            }
        });
    	menu.addItem(new MContextMenuItem("设为起点",function(){
    		if(topSearchKSearchBox.tab().kvalue === "navs"){
                KMap.getGeo(mpoint.getPid(),function (city,name){
                    navResultKNavsearch.menuaddMarker("s",mpoint.getPid(),name,city);
                });
    		}else{
                KMap.getGeo(mpoint.getPid(),function (city,name){
                    bussResultKBusearch.menuaddMarker("s",mpoint.getPid(),name,city);
                });
    		}
    	}));
    	menu.addItem(new MContextMenuItem("设为终点",function(contextMenuItem,contextMenu,overlay){
    		if(topSearchKSearchBox.tab().kvalue === "navs"){
                KMap.getGeo(mpoint.getPid(),function (city,name){
                    navResultKNavsearch.menuaddMarker("e",mpoint.getPid(),name,city);
                });
    		}else{
                KMap.getGeo(mpoint.getPid(),function (city,name){
                    bussResultKBusearch.menuaddMarker("e",mpoint.getPid(),name,city);
                });
    		}
    	}));
    	menu.addItem(new MContextMenuItem("查询周边",function(contextMenuItem,contextMenu,overlay){
    		losResultKLocalsearch.menuNbQuery(mpoint,menuCity());
    	}));
    	menu.addItem(new MContextMenuItem("在此标记",function(contextMenuItem,contextMenu,overlay){
    		mapmarkerKStdMapMarkers.setMenuMarkMode(mpoint);
    		KEvent.trigger(mapmarkerKStdMapMarkers, 'shown');
    	}));
    	menu.addItem(new MContextMenuItem("居中地图",function(contextMenuItem,contextMenu,overlay){
    		KMap.setCenter(mpoint);
    	})); 
	})();
    viewsearchminzoomlevel = getNowMinScale();
	//MapMenuContext();
    KEvent.bind(KMap, "cmfun", function(evt, dom, queryOpts) {
        var query = KManager.match(queryOpts.type, KQuery)[0];
        if(query) query.query(queryOpts);
    });
	var _hash = window.location.href.replace(/^[^#]*#(.*)$/, "$1");
	if(_hash) {
		_hash = _hash.split("&");
		if(_hash.length > 2) return;
		$("#defaultDiv").show();
		var _o = {};
		for(var i = 0; i < _hash.length; i++) {
			var _hi = _hash[i].split("=");
			if(_hi.length == 2) _o[_hi[0]] = _hi[1];
		}
		var ac,c;
		if(_o["ac"]) ac = _o["ac"];
		if(_o["c"]) c = _o["c"];
		if(_o["mc"]) c = _o["mc"];
		if(_o["city"]) c = _o["city"];
		if(ac) {
			var _center;
			if(ac == "nb") {ac = "ls";_center = {};}
			topSearchKSearchBox.query({type:ac, center:_center}, true);
		}
	}
};
if(KTools.isIE6) document.execCommand("BackgroundImageCache",false,true);
initIDS();
pageBody.show();
resizePage(true);
KEvent.bind(window, "resize", function() {
    resizePage(true);
    if(rightResultWidget) rightResultWidget.layout();
    if(wg_geoKStdGeocoder) wg_geoKStdGeocoder.layout();
    if(mapmarkerKStdMapMarkers)mapmarkerKStdMapMarkers.layout();
});
initPreMapWidgets();
KEvent.bind(KListener, "initialized", function(evt, kquery) {
if(!kquery && kquery != '' && kquery != null)
{
  if((/(.*)ll=[^&]/g).test(window.location.href) && (/(.*)z=[^&]/g).test(window.location.href))
  {
	  var _hash = window.location.href.replace(/^[^#]*#(.*)$/, "$1");
	  if(_hash) {
		_hash = _hash.split("&");
		var _o = {};
		for(var i = 0; i < _hash.length; i++) {
		var _hi = _hash[i].split("=");
		if(_hi.length == 2) _o[_hi[0]] = _hi[1];
		}
		initMap(new MPoint(_o["ll"]),parseInt(_o["z"]),true);
		}
		else initMap();
  }
  else initMap();
}
else {
	var _runed = false;
	var _mapreadyFun = function(evt, query, center, zoom) {
		if(_runed) return;
		_runed = true;
        KEvent.unbind(this, "mapready", _mapreadyFun);
        initMap(center, parseInt(zoom));
    };
    KEvent.bind(kquery, "mapready", _mapreadyFun,{}, kquery);
        _mapreadyFun();
		setTimeout(_mapreadyFun, 8000);
    }
});
KListener.start();
if(!$.browser.opera) {
    KEvent.bind(window, "unload", function() {
        KEvent.clear(document);
        mapbarLayers.finalize();
        traffic.finalize();
        KMap.finalize();
        KManager.finalize();
        KTools.removeNode(document.body);
        KEvent.finalize();
        KTools.finalize();
    });
}
