var cityDataFun = {
    /*
    document.write(cityDataFun.initCityOption("北京市","&nbsp;├"));
    */
    initCityOption:function(defaultCity,cChar,pClass,cClass){
        var optionArr=[];
        for(var i=0;i<cityData.province.length;i++){
            optionArr.push('<option class="'+(pClass||"")+((defaultCity==cityData.province[i].pname)?'" selected="selected':'')+'" value='+(cityData.province[i].pname) +'>'+cityData.province[i].pname+'</option>\n');
            for(var j=0;j<cityData.province[i].city.length;j++){
                optionArr.push('<option class="'+(cClass||"")+((defaultCity==cityData.province[i].city[j].cityName)?'" selected="selected':'')+'" value='+cityData.province[i].city[j].cityName+'>'+(cChar||"&nbsp;├")+cityData.province[i].city[j].cityName+'</option>\n');
            }
        }
       document.write(optionArr);
    } ,
	 initCityOptionWithCode:function(defaultCity,cChar,pClass,cClass){
        var optionArr=[];
        for(var i=0;i<cityData.province.length;i++){
            optionArr.push('<option class="'+(pClass||"")+((defaultCity==cityData.province[i].pname)?'" selected="selected':'')+'" value='+(cityData.province[i].pcode!="undefined"?cityData.province[i].pcode:"") +'>'+cityData.province[i].pname+'</option>\n');
            for(var j=0;j<cityData.province[i].city.length;j++){
                optionArr.push('<option class="'+(cClass||"")+((defaultCity==cityData.province[i].city[j].cityName)?'" selected="selected':'')+'" value='+cityData.province[i].city[j].citycode+'>'+(cChar||"&nbsp;├")+cityData.province[i].city[j].cityName+'</option>\n');
            }
        }
       document.write(optionArr);
    } ,
    getCityPropertiesByCity:function(cityValue){
        var cityProperties={strLatLon:"GVCUSBXUIWTCR",zoom:"1",code:"086",city:"全国"};
        for(var i=0;i<cityData.province.length;i++){
            for(var j=0;j<cityData.province[i].city.length;j++){
                if(cityData.province[i].city[j].cityName==cityValue){
                    cityProperties.strLatLon= cityData.province[i].city[j].citylatlon;
                    cityProperties.zoom= cityData.province[i].city[j].cityzoom;
                    cityProperties.code= cityData.province[i].city[j].citycode;
                    cityProperties.city= cityValue;
                    return cityProperties;
                }
            }
        }
        return cityProperties;
    } ,
    getCityNameByCode:function(citycode){
        var cityName = "";
        for(var i=0;i<cityData.province.length;i++){
            for(var j=0;j<cityData.province[i].city.length;j++){
                if(cityData.province[i].city[j].citycode==citycode){
                    cityName = cityData.province[i].city[j].cityName;
                }
            }
        }
        document.write(cityName);
    } ,
    cityOption:function (obj){
        var city = obj.value;
        if(city==null||city=="")city="北京市";
		if (city=="全国"||city.indexOf("省") > 0 || city.indexOf("自治区") > 0 || city.indexOf("行政区") > 0 || city == "内蒙古"||city == "直辖市") {
		  alert("请选择城市.");
          obj.value="北京市";
		  return;
		}
	},
    cityOptionCode:function (obj){
        var city = obj.options[obj.selectedIndex].text;
        city = city.replace("├","");
        //alert(city);
        if(city==null||city=="")city="北京市";
		if (city=="全国"||city.indexOf("省") > 0 || city.indexOf("自治区") > 0 || city.indexOf("行政区") > 0 || city == "内蒙古"||city == "直辖市") {
		  alert("请选择城市.");
          obj.value="010";
		  return;
		}
	}

}
//init select value
function initSelect(selectObj,v){
    for(var i=0;i<selectObj.length;i++){
        if(selectObj.options[i].value==v){
           selectObj.options[i].selected=true;
        }
    }
}
//全选
function selAll(check,elemname){
    var isCheck = true;
    if(!check.checked)isCheck = false;
    var frm = check.form;
    var elements = frm.ownerDocument.getElementsByName(elemname);
    if(elements.length > 0){
        for(var i = 0; i < elements.length; i++){
            elements[i].checked = isCheck;
        }
    }
}
function isSel(elem){
    if(typeof elem != "object")return;
    var len = elem.length;
    var m = 0;
    if(len > 0){
        for(var i = 0; i < len; i++){
            if(elem[i].checked = false){m++;}
        }
    }
    if(m!=1){
        alert("请选择一条您所要操作的记录！");
    }
}
//显示
function showAdd(url,id) {	
	if(typeof id=="undefined")
    document.location.href = url;
    else    
    	document.location.href = url+"?rscount="+document.getElementById(id).value;    
}
//修改
function modify(frm,elemname){
    var j = 0;
    var lid = "";
    var elements = frm.ownerDocument.getElementsByName(elemname);
    for(var i=0;i<elements.length;i++){
        if(elements[i].checked == true){
            j++;
            lid = elements[i].value;
        }
    }
    if(j == 0){
        alert("请选择一个需要修改的记录!");
        return false;
    }
    if(j > 1){
        alert("一次只能修改一个记录!");
        return false;
    }
    frm.action = "modifyLink.jsp?lid="+lid;
    frm.submit();
}
//删除
function delLink(frm,elemname){
    var elements = frm.ownerDocument.getElementsByName(elemname);
    var j = 0;
    for(var i=0;i<elements.length;i++){
        if(elements[i].checked == true){
            j++;
        }
    }
    if(j == 0){
        alert("请选择一个需要修改的记录!");
        return false;
    }
    if(confirm("确定要删除吗？")){
        frm.action = "delLink.jsp";
        frm.submit();
    }
}
function delClass(frm,elemname){
    var elements = frm.ownerDocument.getElementsByName(elemname);
    var j = 0;
    for(var i=0;i<elements.length;i++){
        if(elements[i].checked == true){
            j++;
        }
    }
    if(j == 0){
        alert("请选择一个需要修改的记录!");
        return false;
    }
    if(confirm("确定要删除吗？")){
        frm.action = "delClass.jsp";
        frm.submit();
    }
}
//审批
function veryfyLink(frm,elemname,status){
    var elements = frm.ownerDocument.getElementsByName(elemname);
    var j = 0;
    for(var i=0;i<elements.length;i++){
        if(elements[i].checked == true){
            j++;
        }
    }
    if(j == 0){
        alert("请选择一个需要审批的记录!");
        return false;
    }
    frm.status.value = status; 
    frm.action = "veryfyLink.jsp";
    frm.submit();
}
//排序
function doOrder(linktype){
    var  iWidth=400; //模态窗口宽度
    var  iHeight=500;//模态窗口高度
    var  iTop=(window.screen.height-iHeight)/2;
    var  iLeft=(window.screen.width-iWidth)/2;
    var url="orderLink.jsp?linktype="+linktype;
    window.open(url,"Order","Scrollbars=yes,Toolbar=no,Location=no,Direction=no,Resizeable=no,Width="+iWidth+",Height="+iHeight+",top="+iTop+",left="+iLeft);
}
function checkLength(obj,len){
    var vlength = obj.value.length;
    if(vlength>len){
        alert('字数不能超过'+len+'个');
        obj.value = obj.value.substring(0,len);
    }
}

function isIP(strIP) {
    var re=/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/g //匹配IP地址的正则表达式
    if(re.test(strIP))
    {
        if( (RegExp.$1 <256 && RegExp.$2<256 && RegExp.$3<256 && RegExp.$4<256) ) return true;
    }
    return false;
}
function showLink(){
    var dom = document.getElementById("link");
	var domlabel = document.getElementById("linkLabel");
    var domview = document.getElementById("review");
    var linktype = document.getElementById("linktype").value;
    var sitetype = document.getElementById("sitetype").value;//http://img.mapbar.com/maplite/mapbank/ditu/image/logo.gif
    var linktext = "";
    if(linktype == 'pic'){
		domlabel.innerHTML = '图片链接：';
        if(sitetype == 'main')linktext = "<a href='http://www.mapbar.com' target='_blank'><img src='http://img.mapbar.com/maplite/mapbank/ditu/image/logo.gif' border='0' width='193' height='47' alt='mapbar地图'></a>";
        if(sitetype == 'bus')linktext = "<a href='http://bus.mapbar.com' target='_blank'><img src='http://img.mapbar.com/maplite/mapbank/ditu/image/logo.gif' border='0' width='193' height='47' alt='mapbar地图'></a>";
        review(domview,"图片链接效果：<a href='http://www.mapbar.com' target='_blank'><img src='http://img.mapbar.com/maplite/mapbank/ditu/image/logo.gif' border='0' width='193' height='47' alt='mapbar地图'></a>");
    }else if(linktype == 'word'){
		domlabel.innerHTML = '文字链接：';
        if(sitetype == 'main')linktext = "<a href='http://www.mapbar.com' title='mapbar地图' target='_blank'>mapbar地图</a>";
        if(sitetype == 'bus')linktext = "<a href='http://bus.mapbar.com' title='mapbar公交地图' target='_blank'>mapbar公交地图</a>";
        review(domview,"文字链接效果：<a href='http://www.mapbar.com' title='mapbar地图' target='_blank'>mapbar地图</a>");
    }
    if(dom)dom.value = linktext;
}
function review(dom,str){
    dom.innerHTML = str;
}
function refreshParent(){
    window.opener.location.reload();
}
function showdetail(lid,linktype){
    var  iWidth=400; //模态窗口宽度
    var  iHeight=500;//模态窗口高度
    var  iTop=(window.screen.height-iHeight)/2;
    var  iLeft=(window.screen.width-iWidth)/2;
    var url="viewLink.jsp?lid="+lid+"&linktype="+linktype;
    window.open(url,"Detail","Scrollbars=yes,Toolbar=no,Location=no,Direction=no,Resizeable=no,Width="+iWidth+",Height="+iHeight+",top="+iTop+",left="+iLeft);
}