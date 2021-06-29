/**
*
*使用时注意:
*template.js 与 prototype.js 必须有其一
*prototype.js目前只适用到了 Ajax模块 下载模板与 template.js
*如果模板放在单独的文件中,则必须需要prototype.js
*http://img.mapbar.com/maplite/mapbank/ditu/js/sharefile/prototype1.5.0.js
*/

var ie=document.all?1:0;
function getIE6(){
	var tmp = navigator.userAgent.split(";");
	var _ie6 = 0;
	if(tmp.length >=2 ){
		var _ie6flag = tmp[1].toLowerCase().indexOf("msie 6.0");
		if(_ie6flag == "-1") _ie6 = 0;
		else _ie6 = 1;
	}
	return _ie6;
};
var ie6 = getIE6();
var Class = {create: function() {return function() {this.initialize.apply(this, arguments);}}};
//继承
Object.extend=function(destination, source) {
  for (var property in source) {destination[property] = source[property];}
  return destination;
}
extend = Object.extend;
var request={init:function(newUrl) {
        newUrl=newUrl||window.location.hash;
        var Request = {};
        var strs = newUrl;
        switch(newUrl.indexOf("#")){
            case 0:{strs = newUrl.substr(1); ;break;}
            case -1:{break;}
        }
        strs = strs.split("&");
        for (var id = 0; id < strs.length; id++) {
            Request[strs[id].split("=")[0]] = strs[id].split("=")[1];
        }
        return Request;
    },
    toHashString:function(Request){
        var newHash="";
        for(var i in Request){
			if(i!=""&&eval("Request."+i)!=undefined&&eval("Request."+i)!=""&&eval("Request."+i)!="undefined"){
                newHash+=(newHash==""?"":"&")+i+"="+eval("Request."+i);
            }
        }
        return newHash;
    }
};
/*******
*jsLoader
*
*/
var Transfer={}
Transfer.Base = function() {}
Transfer.Base.prototype = {
  setOptions: function(options) {
    if(typeof options!="object"){options={};}
    this.options = {
        bCache:options.bCache||false,
        id:options.id||"scriptTemp",
        onfailure:options.onfailure||function(){},
        oncomplate:options.oncomplate||function(){}
    }
  }
}
/**
new Transfer.Request(url,{oncomplate:'',id:''})
*/
Transfer.Request=Class.create();
Transfer.Request.prototype=Object.extend(new Transfer.Base(),{
    initialize: function(url, options) {
    this.setOptions(options);
    this.request(url);
    },
    request:function(url){
        this.url=url;
        this.bCache=this.options.bCache;
        this.id=this.options.id;
        this.oncomplate=this.options.oncomplate;
        this.onfailure=this.options.onfailure;
        this.symbol="?";
        if(this.url.indexOf("?")!="-1")this.symbol="&";
        var head=document.getElementsByTagName("head")[0];
        var sT = $(this.id);
        if(sT&&sT.src&&sT.src==this.url){
            this.oncomplate();
            return;
        }
        if (sT) {sT.parentNode.removeChild(sT);}
        var s = document.createElement("script");
        head.appendChild(s);
        s.setAttribute("language", "javascript");
	    s.setAttribute("type", "text/javascript");
	    s.setAttribute("id", this.id);
	    s.setAttribute("src", (this.bCache && this.bCache == true) ? this.url + this.symbol + Math.random() : this.url);
        var self=this;
        s.onload=s.onreadystatechange=function()
        {
            if (typeof ActiveXObject!="undefined") {
                if(s.readyState&&s.readyState=="loaded")self.oncomplate();
                if(s.readyState&&s.readyState=="complete")return;
            }else{
                self.oncomplate();
            }
        }
        s.onerror=function(){ //ie not work
            if(s&&s.parentNode)s.parentNode.removeChild(s);
            self.onfailure();
            throw new Error("connect faild,please try later;");
        }
     }
});
/****jsLoader end****/
/**
* cookie operate
*/
var Cookie=new Object();
Cookie.setCookie=function(name,value,option){
	//用于存储赋值给document.cookie的cookie格式字符串
	var str=name+"="+escape(value);
	if(option){
		//如果设置了过期时间
		if(option.expireDays){
			var date=new Date();
			var ms=option.expireDays*24*3600*1000;
			date.setTime(date.getTime()+ms);
			str+="; expires="+date.toGMTString();
		};
        if(option.path)str+="; path="+option.path;
		if(option.domain)str+="; domain="+option.domain;
		if(option.secure)str+="; true";
	};
	document.cookie=str;
};
Cookie.setMCookie=function(name,value,option){
	var domain=location.href.indexOf("mapbar.com")==-1?"":"mapbar.com";
	if(!option)option={expireDays:'30',domain:domain,path:'/'}
	else{
		option.domain=domain;
	}
	Cookie.setCookie(name,value,option);
};
Cookie.getCookie=function(name){
	var cookieRet="";
	var cookieArray=document.cookie.split("; ");
	var cookie=new Object();
	for(var i=0;i<cookieArray.length;i++){
		var arr=cookieArray[i].split("=");
		if(arr[0]==name){cookieRet=unescape(arr[1])};
	};
	return cookieRet;
};
Cookie.deleteCookie=function(name){
	this.setCookie(name,"",{expireDays:-1});
};

function addCdataTag(str){if(str){return "<![CDATA["+str+"]]>";}else{return "";}}
function isEmpty(obj){
	return (typeof obj=="undefined" ||obj==null)?true:false;
}
/**
getPath("/aa.html")=http://hostname/aa.html
getPath("aa.html")=http://hostname/folder/../aa.html
*/
window.location.getPath=function(template){
	if (isEmpty(template))return null;
	//处理从根目录开始
	if(template.charAt(0)=="/")template=window.location.getContextPath()+template;
	//相对路径处理办法
	else {template=window.location.href.replace(/(\/[^/]+$)/g,"/")+template}
	return template;
}
window.location.getContextPath=function(){
	var local= window.location;
	return local.protocol+"//"+local.hostname+(local.port?":"+local.port:"");
}
/**
解决 ie下 eval不能在全局空间内执行的问题
*/
window.Eval=function(code){
	if(!!(window.attachEvent && !window.opera)){
	execScript(code); //ie
	}else{
	window.eval(code);//not ie
	}
}
//////////////////////////////////////////////////////////////////////

//地图标点后显示在图标旁边的文字样式
var mapPoiConfig = {poiIcon: 'http://img.mapbar.com/maplite/mapbank/ditu/image/icon/custom/a-5.gif',
					lineIcon:'http://img.mapbar.com/maplite/mapbank/ditu/image/icon/line1.gif',
					areaIcon:'http://img.mapbar.com/maplite/mapbank/ditu/image/icon/area1.jpg'};
var mapLineConfig = {lineColor: '#FF0000',lineStroke   : 3};
//记录老方法画线id,以便做清除最后一条老方法画的线
var oldLineNum=0;
var PoiArr = [];//放入所有 点 对像的数组
var LineArr = [];//放入所有 线，面 对像的数组

function bmarker(){
	this.objId = new Date().getTime()+""+parseInt(Math.random()*10000); //对象的唯一id
	this.id = 0; //数据对应数据库的id
	this.mapId;
	this.userId;
	this.userName;
	this.marker; //标点对象 对应 地图显示的MMarker对象
	
	//for tipinfo
	this.name ; //标点名称
	this.phone ; //电话
	this.address ; //地址
	this.description ; //简介、描述
    this.poitype ;//点的类型 eg 公司企业。。
	this.template=null;//模板 有两种模式 1,传入 obj对象 obj对象的obj.value||obj.innerHTML值为模板的内容,或传入url字符串 调用ajax获取模板对象
	this.lazyLoadTipInfo=true;

	//for state
	this.markerType; //1poi 2-line 3-area
	this.type = 0;  //标点类型 0-search ;1 mymaps 2 fix
	this.state=0;   //0表示从数据库中读出  ；1 新增 2 修改 3 删除
    this.lock=0;//0-关闭 1-打开
	this.allowEdit=false;//当allowEdit为false的时候，不允许编辑

	//for local
	this.strlatlon ; //加密后经纬度字符串

	//自动生成地图标注点的marker信息 标题（可用html标签，可根据需要进行修改）
	this.title = null; //临时Title，如果给Title赋值，如果title为空 则使用name
	this.getTitle = function() {
		return isEmpty(this.title)?this.name:this.title;
	}
	//自动生成地图标注点的marker信息 内容（可用html标签，可根据需要进行修改）
	this.content = null;
	this.getSimpleContent = function(){
		var sHtml = [];
		if(this.poitype||this.phone||this.address||this.description){
			sHtml.push("<table  style='margin-top:10px;'>");
			if(this.poitype&&this.poitype.length>0) sHtml.push("<tr><td><b>类型:</b>&nbsp;"+this.poitype+"</td></tr>");
			if(this.phone&&this.phone.length>0) sHtml.push("<tr><td><b>电话:</b>&nbsp;" + this.phone+"</td></tr>");
			if(this.address&&this.address.length>0) sHtml.push("<tr><td><b>地址:</b>&nbsp;" + this.address+"</td></tr>");
			if(this.description&&this.description.length>0) sHtml.push("<tr><td ><b>简介:</b>&nbsp;" + this.description+"</td></tr>");
			sHtml.push("</table>");
		}
		if (sHtml.length>0) return sHtml.join("");
		else return null;
		
	}
	this.getContent = function() {
		if(!isEmpty(this.content)) return this.content; 
		else if(!isEmpty(this.template))return this.getText();
		else{	
			return this.getSimpleContent();
		}
    }
	//生成保存的xml片段
	this.toXml=function(){
		var item="<item><markerId>"+addCdataTag(this.objId)+"</markerId><pid>"+this.id+"</pid><operate>"+(this.id==0?1:this.state)+"</operate><type>"+this.markerType+"</type>";
		if(this.getTitle()&&this.getTitle().length>0)item+="<title>"+addCdataTag(this.getTitle())+"</title>";
		item+="<content>"+addCdataTag(this.getSimpleContent())+"</content><strlatlon>"+addCdataTag(this.strlatlon)+"</strlatlon>";
		if(this.markerType==1){item+="<icon>"+addCdataTag(this.getIcon())+"</icon>";}
		else {
			item+="<color>"+addCdataTag(this.color?this.color.replace("#","@-j-@"):"")+"</color><stroke>"+addCdataTag(this.stroke)+"</stroke><transparency>"+addCdataTag(this.transparency)+"</transparency><arrow>"+addCdataTag(this.arrow)+"</arrow>";
		}
		if(this.markerType==3){
			item+="<bgColor>"+addCdataTag(this.bgcolor)+"</bgColor><bgTransparency>"+addCdataTag(this.bgtransparency)+"</bgTransparency>";
		}
		if(!isEmpty(this.mapId))item+="<mapId>"+this.mapId+"</mapId>";
		item+="</item>";
		return item;
	}
	//根据模板获取内容 
	this.getText=function(template) {

		if(isEmpty(template))template=this.template;
		if(typeof template=="object"){//如果是对象 则调用对象的value或者innerHTML获取模板的内容
			if(template.id&&typeof TrimPath!="undefined"){
				return TrimPath.processDOMTemplate(template.id, {obj:this});//如果存在id 则使用官方方法
			}
			else {
				Mtemplate.getDependence();
				return (template.value||template.innerHTML).process({obj:this});
				}
			//
		}else{//如果是url字符串 则下载模板
			//放obj的目的是解决变量未定义的问题.
			//alert(1);
			return Mtemplate.getData(template).process({obj:this});
		}
	}
	
}
//基础对象,以便于继承,不在每次继承时重新new bmarker 为了减少内存开销
//TODO 是否有更优雅的实现方式呢?
var baseMarker=new bmarker();
function MapPoi() {
	extend(this,baseMarker);
	this.markerType=1;
	//for icon
	this.icon = mapPoiConfig.poiIcon; //使用图标
	this.iconTargetLeft = 0.5; //显示图标目标点的左侧相对位置 [0-1] 0表示图标最左边；1表示图标最右边
	this.iconTargetTop = 1;  //显示图标目标点的顶部相对位置 [0-1] 0表示图标最上边；1表示图标最下边
	this.iconWidth = null; //为null时自动获取大小 否则指定
	this.iconHeight = null;
	//for label
	this.label=null;//{text:"sss",color:"",borderColor:"",bgColor:""}
	this.labelLeft=null;
	this.labelTop=null;
	//自动生成地图标注点的marker信息 图标（可用html标签，可根据需要进行修改）
	this.Icon = null;
	this.getIcon = function() {
		return isEmpty(this.Icon)?this.icon:this.Icon; 
    }
	this.Label = null;
	this.getLabel = function(){
		return isEmpty(this.Label)?this.label:this.Label; 
	}
}
function MapLine(lineType) {
	extend(this,baseMarker);
	this.markerType=(isEmpty(lineType)?0:lineType)+2;
	this.method=1;//默认新方法 0老方法 1 新方法
    this.color = mapLineConfig.lineColor; //线颜色
	this.stroke = mapLineConfig.lineStroke; //线粗细
    this.transparency="60";
    this.bgtransparency="30";
    this.fill=true;
	this.bgcolor='red';
    this.arrow=false;
    this.style="0";

	//根据this.strlatlon自动生成线段各端点的Array集合
	this.getMPointArray = function() {
		var mpArray = [];
		var pArray = this.strlatlon?this.strlatlon.split(","):[];
		for(var i=0;i<pArray.length;i++) {
			if(pArray[i].length>0) {
				mpArray.push(new MPoint(pArray[i]));
			}
		}
		return mpArray;
	}
}
/*============================================================*/

/**
*methods for get obj
*/
//从集合中根据objId查找Poi对象的Index
function getPoiIndexByObjId(objId) {
	for(var i=0; i<PoiArr.length; i++) {if(objId == PoiArr[i].objId) return i;}
	return -1;
}

//从集合中根据Id查找Poi对象的Index
function getPoiIndexById(Id) {
	for(var i=0; i<PoiArr.length; i++) {if(Id == PoiArr[i].id) {return i;}}
	return -1;
}
//从集合中根据Id获取Poi对象
function getPoiById(Id) {
	var obj;return !isEmpty(obj=PoiArr[getPoiIndexById(Id)])?obj:null;
}
//从集合中根据objId获取Poi对象
function getPoiByObjId(objId) {
	var obj;return !isEmpty(obj=PoiArr[getPoiIndexByObjId(objId)])?obj:null;
}

//从集合中根据Id查找Line对象的Index
function getLineIndexById(Id) {
	for(var i=0; i<LineArr.length; i++) {if(Id == LineArr[i].id) {return i;}}
	return -1;
}
//从集合中根据objId查找Line对象的Index
function getLineIndexByObjId(objId) {
	for(var i=0; i<LineArr.length; i++) {if(objId == LineArr[i].objId) {return i;}}
	return -1;
}
//从集合中根据Id获取Line对象
function getLineById(Id) {
	var obj;return !isEmpty(obj=LineArr[getLineIndexById(Id)])?obj:null;
}
//从集合中根据objId获取Line对象
function getLineByObjId(objId) {
	var obj;return !isEmpty(obj=LineArr[getLineIndexByObjId(objId)])?obj:null;
}
function getObjByObjId(objId){
	var obj;return !isEmpty(obj=getPoiByObjId(objId))?obj:getLineByObjId(objId);
}

/**
*通过序列号码返回类型为0.marker
*markerType 1 poi 2 line or area
*type 对应baseObj的type 0-search ...
*/
function getObjBySeq(i,markerType,type){
	type=isEmpty(type)?0:type;
	if(markerType==1){
		 for(var j=0,k=0;j<PoiArr.length;j++){
			if((isEmpty(type)||PoiArr[j].type==type)&&PoiArr[j].marker){
				if(k==i) return PoiArr[j];
				k++;
			}
		}
	}else if(markerType==2){
		for(var j=0,k=0;j<LineArr.length;j++){
			if((isEmpty(type)||LineArr[j].type==type)&&LineArr[j].marker){
				if(k==i) return LineArr[j];
				k++;
			}
		}
	}return null;
	
}
/**
 *@parm type1  1-poi 2-line 3-area
 */
function getLenByType(type1){
    var num=0;
    if(type1==1){
        for(var i=0;i<PoiArr.length;i++){
            if(PoiArr[i].type = 1){num++;}
        }
    }else if(type1==2){
        for(var i=0;i<LineArr.length;i++){
            if(LineArr[i].type = 1&&LineArr[i].markerType==2){num++;}
        }
    }else{
        for(var i=0;i<LineArr.length;i++){
            if(LineArr[i].type = 1&&LineArr[i].markerType==3){num++;}
        }
    }return num;
}
/**
*del
*/
//在地图上删除指定点
function delPoi(poiObj) {
    maplet.hideBubble();
	maplet.removeOverlay(poiObj.marker);
	PoiArr.splice(getPoiIndexByObjId(poiObj.objId),1);
}
//在地图上删除指定线、面
function delLine(lineObj) {
	maplet.hideBubble();
	maplet.removeOverlay(lineObj.marker);
	LineArr.splice(getLineIndexByObjId(lineObj.objId),1);
}
/**
*删除时length会减少,循环需要特殊处理
*/
function delPoiByType(type){
    for(var i=0;i<PoiArr.length;){
		if(PoiArr[i].type==type){delPoi(PoiArr[i]);}
        else{i++;}
    }
}
function delLineByType(type){
	if(type==0){
		maplet.clean();//清除老方法打点画线。
		oldLineNum=0;
	}
    for(var i=0;i<LineArr.length;){
        if(LineArr[i].type==type){delLine(LineArr[i]);}
        else{i++;}
    }
}
/**
*for mymaps record state
*@MMid is objId
*to die
*/
function delPoiByMarkerId(MMid){
    var i = getPoiIndexByObjId(MMid);
    maplet.hideBubble();
    var poiMarker = PoiArr[i].marker;
	maplet.removeOverlay(poiMarker);
	//如果不是从数据库读出(即用户自行添加点),并且标志为新增时 可直接删除
    if(PoiArr[i].id == 0 && PoiArr[i].state==1){PoiArr.splice(i,1);}
	//如果有数据库对应的id号,则记录删除状态,以便自动保存时删除
    else if(PoiArr[i].id != 0){PoiArr[i].state=3;}
}

//***************************************************************

//移动模式
function setMoveMode(){
    maplet.setMode("pan");//设定地图移动方式
}


//地图随手标注模式
function setHandTaggingMode(mode,mapObj,callBack){
	//maplet.hideBubble();
	var pIcon = (mapObj&&mapObj.icon)?mapObj.icon : mapPoiConfig.poiIcon;
	maplet.setCursorIcon(pIcon);
	MEvent.clearListeners(maplet, mode);
	maplet.setMode(mode, function(strURL){
		handTaggingBack(strURL,mode,mapObj,callBack);
		});
	//修正图标的样式 当图标出现在地图上时则删除
	var changeMousetipbox=setInterval(function(){
		if(document.getElementById("mousetipbox")&&mode=="bookmark"){
			document.getElementById("mousetipbox").innerHTML="<img src='"+pIcon+"'>";	
			clearInterval(changeMousetipbox);
		}
	},20);
}

//编辑模式
function setEditMode(callback){
	MEvent.addListener(maplet, 'edit', function(obj){mapletEditCallback(obj,callback);});
	//maplet.setMode("edit",mapletEditCallback);
}

//--------------------callback操作------------------

function handTaggingBack(strURL,mode,mapObj,callBack){
	if(mode=="bookmark")poiCallback(strURL,mapObj,callBack);
	else if(mode=="drawline"||mode=="drawarea")lineCallback(strURL,mapObj,callBack);
}

//标点后处理
function poiCallback(strURL,poiObj,callBack) {
	setMoveMode();
    //关闭地图显示的气泡信息
	maplet.hideBubble();
    addPoiByLatLon(request.init("#"+strURL).latlon,poiObj,callBack);
}
function addPoiByLatLon(strlatlon,poiObj,callBack){
	var obj=(typeof poiObj=="object")?extend(new MapPoi(),poiObj):new MapPoi();
    obj.strlatlon=strlatlon;
    window.addPoi(obj,callBack);
}

/**
*画线、面后处理
*mymaps处需要改动 已不兼容之前
*/
function lineCallback(strURL,LineObj,callBack) {
	setMoveMode();
	//画线时采用的是老方法 画完后要清除掉
	maplet.removeLineAt(oldLineNum);
	//TODO 不要轻易使用此方法
	//maplet.refresh();
	//如果传入obj对象 则继承之
	var obj=(typeof LineObj=="object")?extend(new MapLine(),LineObj):new MapLine();
    obj.strlatlon=request.init(strURL).pline.split(":")[1];
    window.addLine(obj,callBack);
}

/**
*maplet edit callback normally for location change
*@param obj:marker object
*/
function mapletEditCallback(obj,func){
	var i=getPoiIndexByObjId(obj.id);
	var mapobj=null;
	//如果是MapPoi Object
	if(i!=-1){
		mapobj=PoiArr[i];
		//如果位置没有发生变化 则不做处理
		if(mapobj.strlatlon==obj.pt.pid)return;
		mapobj.strlatlon=obj.pt.pid;
	}else{
		if((i=getLineIndexByObjId(obj.id))==-1)return;
		mapobj=LineArr[i];
		var arr=[];
		for(var j =0;j<obj.pts.length;j++){arr.push(obj.pts[j].pid);}
		if(mapobj.strlatlon==arr.join(","))return;//如果没有变化则不做修改
		mapobj.strlatlon=arr.join(",");
	}
	if(!isEmpty(mapobj)){
		if(mapobj.lock==1||mapobj.id !=0){//如果不是新加点其锁定状态时 
			mapobj.state=2;//设置为修改状态
		}else{
			mapobj.state=1;//其他情况设置为新增
		}
	}
	//不检测mapobj的状态,保证func肯定执行.
	if(typeof func=="function")func(mapobj);
}
/*
*update Icon of PoiMarker
*为了减少内存开销不将此函数加入到PoiObj中
*/
function setMarkerIcon(poiObj){
	if(typeof poiObj.marker!="object")return;
	poiObj.preIcon=null;
	var imgonload=function(){
		var imgloaded = (poiObj.preIcon&&poiObj.preIcon.width>1 && poiObj.preIcon.height>1);
		var scale=imgloaded?poiObj.preIcon.width/poiObj.preIcon.height:1;//图片宽高比
		var bscale = imgloaded?poiObj.preIcon.height/poiObj.preIcon.width:1;//图片高宽比
		if(isEmpty(poiObj.iconWidth)&&isEmpty(poiObj.iconHeight)){//如果宽高都未设定
			poiObj.iconWidth = imgloaded?poiObj.preIcon.width:32;
			poiObj.iconHeight = imgloaded?poiObj.preIcon.height:32;
		}else if(!isEmpty(poiObj.iconWidth)&&isEmpty(poiObj.iconHeight)){//宽设定 高未设定 则按照图片比例设定高
			poiObj.iconHeight = poiObj.iconWidth * bscale;
		}else if(isEmpty(poiObj.iconWidth)&&!isEmpty(poiObj.iconHeight)){//宽未设定 高设定 则按照图片比例设定高
			poiObj.iconWidth = poiObj.iconHeight * scale;
		}
		if(poiObj.marker.icon)poiObj.marker.icon.remove();
		poiObj.marker.setIcon(new MIcon(poiObj.getIcon(), poiObj.iconWidth, poiObj.iconHeight,(poiObj.iconWidth*poiObj.iconTargetLeft),(poiObj.iconHeight*poiObj.iconTargetTop)),true);
		poiObj.preIcon=null;
	}
	poiObj.preIcon = new Image();
	if(poiObj.icon)poiObj.preIcon.src=poiObj.icon;
	else{imgonload();}//如果添加的icon是HTML格式的
	if(poiObj.preIcon.complete){imgonload();}else{poiObj.preIcon.onload=imgonload;}
}
/*
*set info of Mmarker(Poi Line)
*/
function setMarkerInfo(mapObj,title,content){
	var markerInfo=null;
	if(!isEmpty(mapObj)){
		//适应在marker不存在时,即创建marker时作为参数传入 infowindow
		if(isEmpty(title))title=mapObj.getTitle();
		if(isEmpty(content))content=mapObj.getContent();
		if(!isEmpty(title)||!isEmpty(content)){
			markerInfo=new MInfoWindow(title||"", content||"");
			if(mapObj.marker)mapObj.marker.info=markerInfo;
		}
	}
	return markerInfo;
}
/*
*update info of Mmarker(Poi Line)
*/
function updateMarkerInfo(mapObj,title,content){
	title=isEmpty(title)?mapObj.getTitle()||"":title;
	content=isEmpty(content)?mapObj.getContent()||"":content;
	if(mapObj&&mapObj.marker&&mapObj.marker.info){
		mapObj.marker.info.setTitle(title);
		mapObj.marker.info.setContent(content);
		//console.debug(title+":"+content);
		mapObj.marker.info=new MInfoWindow(title,content);
	}
}
/**
*set label of Mmarker
*/
function setMarkerLabel(mapObj,jsonOfLabel){
	jsonOfLabel=jsonOfLabel||mapObj.getLabel();
	if(!isEmpty(jsonOfLabel)&&!isEmpty(jsonOfLabel.text)){
		mapObj.marker.setLabel(new MLabel(jsonOfLabel.text||"",jsonOfLabel.x||mapObj.iconWidth/2||16,jsonOfLabel.y||-mapObj.iconHeight||-16),true);
	}
	
}
//地图上的marker操作
function addPoi(poiObj,callback) {
    if(!(typeof maplet=="object"&&poiObj&&poiObj.objId))return;
	//如果数组中存在则不再添加
    if(getPoiIndexByObjId(poiObj.objId)==-1)PoiArr.push(poiObj);
	//add marker
	poiObj.marker = new MMarker(new MPoint(poiObj.strlatlon),null,null);
	maplet.addOverlay(poiObj.marker);//打点
	poiObj.objId =poiObj.marker.id;

//	if(!poiObj.lazyLoadTipInfo)setMarkerInfo(poiObj);
//	else MEvent.addListener(poiObj.marker, 'click', function(){setMarkerInfo(poiObj);});

	poiObj.marker.setEditable(poiObj.allowEdit);
	if(typeof callback=="function"){callback(poiObj);}
	//get icon
	setMarkerIcon(poiObj);
	//set label info
	setMarkerLabel(poiObj);
	
}
//在地图上增加线、面
function addLine(lineObj,callBack) {
	if(!(typeof maplet=="object"&&lineObj&&lineObj.objId))return;
	if(lineObj.method==0&&lineObj.markerType==2){//用老方法划线
		addPolyline(lineObj);
	}else{//用新方法画线
		//如果数组中存在则不再添加(只有用新方法画线 线与数组才有对应关系)
		if(getLineIndexByObjId(lineObj.objId)==-1)LineArr.push(lineObj);
		//配置画笔
		var lineBrush = new MBrush();
		lineBrush.color=lineObj.color; //线颜色
		lineBrush.stroke=lineObj.stroke; //线粗细
		lineBrush.style=lineObj.style; //未知功能
		lineBrush.fill=lineObj.markerType==2?false:true; //false画线；true画面
		lineBrush.bgcolor=lineObj.bgcolor; //面颜色
		lineBrush.transparency=lineObj.transparency;; //线透明度
		lineBrush.bgtransparency=lineObj.bgtransparency; //面透明度
		lineBrush.arrow=lineObj.arrow; //箭头
		//draw line
		lineObj.marker = new MPolyline( lineObj.getMPointArray(), lineBrush, setMarkerInfo(lineObj));
		maplet.addOverlay(lineObj.marker);//打点
		lineObj.objId=   lineObj.marker.id;
		//如果lineObj.objId与marker的id相同 则使用template替换时会出现bug
		//TODO 采用lazyLoad的方式是比较理想的.
		updateMarkerInfo(lineObj);
		/*线面暂不支持lazyLoadTipInfo
		if(!lineObj.lazyLoadTipInfo||1==1)setMarkerInfo(lineObj);
		else MEvent.addListener(lineObj.marker, 'click', function(){setMarkerInfo(lineObj);});
		*/
		lineObj.marker.setEditable(lineObj.allowEdit);
		if(typeof callback=="function"){callback(lineObj);}
	}
    if(typeof callBack=="function"){callBack(lineObj);}   
}
/**
*统一的添加marker的方法
*/
var MapMarker=function(markerType){
	return markerType==1?new MapPoi():markerType==2?new MapLine():markerType==3?new MapLine(1):null;
}
var addMapMarker=function(markerObj,callBack){
	eval(markerObj.markerType==1?"addPoi":"addLine")(markerObj,callBack);
}
if(typeof Maplet=="function"){
	Maplet.prototype.Marker=MapMarker;
	Maplet.prototype.addMarker = addMapMarker;
}

function addPolyline(lineObj,callBack){
	maplet.addPolylineString(lineObj.stroke+",1,"+lineObj.color, lineObj.strlatlon);
	maplet.refresh();
	oldLineNum++;
	if(typeof callBack=="function"){callBack(lineObj);}   
}
//在地图上修改点
function updatePoi(poiObj,callback) {
	poiObj.marker.pt = new MPoint(poiObj.strlatlon);
	setMarkerInfo(poiObj);
	setMarkerIcon(poiObj);
	//poiObj.marker.paint();
}
//在地图上修改线、面
function updateLine(lineObj) {
	setMarkerInfo(lineObj);
	lineObj.marker.pts = lineObj.getMPointArray();
	lineObj.marker.paint();
	maplet.refresh();
}

/**
*气泡模板
*need http://www.mapbar.com/js/template/template.js & prototype.js
*/
function Mtemplate(obj,template,text) {
	this.obj = (obj) ? obj : {};
	if(!isEmpty(template))this.template=template;//设置模板路径
	if(!isEmpty(text))this.text=text;//直接传入html片段
}
Mtemplate.template=[];
Mtemplate.data=[];
//TODO ie6 simply not work
Mtemplate.evalScript=function(data){
	if(isEmpty(data))return;
	var begin = data.indexOf("<script>")+8;
	var end =data.indexOf("</script>");
	if(begin==7||end<=begin)return ;
	var scriptData=data.substring(begin,end);
//	try{window.Eval(scriptData);}catch(e){alert(e);}
	window.Eval(scriptData);
}
Mtemplate.prototype.getText = function(template,text) {
	if(isEmpty(template))template=this.template;
	if(isEmpty(text))text=this.text||Mtemplate.getData(template);
	Mtemplate.getDependence();
	//alert(text);
	return text.process(this);
}
Mtemplate.getData = function(template){
	if(isEmpty(template))return "";
    var i=Mtemplate.getTemplateIndex(template);
    if(i!=-1){return Mtemplate.data[i];}
    var templateData=Mtemplate.getUrlText(window.location.getPath(template));
    if(templateData!=""){
        Mtemplate.template.push(template);
        Mtemplate.data.push(templateData);
    }
	//处理script部分
	Mtemplate.evalScript(templateData);
	Mtemplate.getDependence();
    return templateData;
}
Mtemplate.getDependence=function(){
	//如果不加载template 则maputil自动在用的时候在同级目录下查找template.js下载
	if(typeof String.prototype.process!="function")Mtemplate.getUrlText(Mtemplate.getScriptUrl("maputil2.0.js").replace("maputil2.0.js","template.js"));

}
Mtemplate.getTemplateIndex=function(template){
    for(var i=0;i<Mtemplate.template.length;i++){
        if(template==Mtemplate.template[i]){
            return i;
        }
    }
    return -1;
}
Mtemplate.getUrlText=function(url,func){
	if(typeof Ajax=="undefined"){alert("需要prototype.js的Ajax组件,请加载");}
    this.retData="";
    var self=this;
    ttt=new Ajax.Request(url,{method:'get',asynchronous:false,onComplete:function(obj){self.retData=obj.responseText;}});
	if(typeof func=="function")func(self.retData);
    return self.retData;
}
Mtemplate.getScriptUrl=function(name) {
	var scripts = document.getElementsByTagName("script");
	  for (var i = 0; i < scripts.length; i++) {
		  if (scripts[i].src.indexOf(name)>=0) {
			 return  scripts[i].src;
		  }
		}
	  return name;
}