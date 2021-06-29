/*
* justify ie
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
var request={
    /**
     * @description request HASH param。
     */
    init:function(newUrl) {
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
    /**
     * @description make string 。
     */
    toHashString:function(Request){
        var newHash="";
        for(var i in Request){
            if((i!=undefined) && (i!=""))
            {
                if(eval("Request."+i)!=undefined&&eval("Request."+i)!=""&&eval("Request."+i)!="undefined"){
                    newHash+=(newHash==""?"":"&")+i+"="+eval("Request."+i);
                }
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
        
        //alert("this.bCache:"+this.bCache+"\nthis.id:"
        //+this.id+"\nthis.oncomplate:"+this.oncomplate
        //+"\nthis.url:"+this.url+"\nsT:"+sT+"\nthis.symbol:"+this.symbol+"\ns.getAttribute:"+s);
     }
});
/****jsLoader end****/
/**
* encode after decode void double encode
*/
function encodeDURI(uri,com){
    if(com){return encodeURIComponent(decodeURIComponent(uri));}
    return encodeURI(decodeURI(uri));
}
function decodeDURI(uri,com){
    if(com){return decodeURIComponent(decodeURIComponent(uri));}
    return decodeURI(decodeURI(uri));
}
//convert string to html format
function toHtmlStr(str)
{
str=str.replace(/</ig,"&lt;");
str=str.replace(/>/ig,"&gt;");
str=str.replace(/\r\n|\n\r|\n|\r/g,"<br>");
str=str.replace(/\"/ig,"&quot;");
str=str.replace(/\ /ig,"&nbsp;");
return str;
}