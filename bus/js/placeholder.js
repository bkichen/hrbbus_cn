(function () {
	//如果浏览器原生支持placeholder
    if('placeholder' in document.createElement('input'))return;
    function target (e){
        var e = e || window.event;
        return e.target || e.srcElement;
    };
    function blurFn(e){
        var el=target(e);
        if(!el || el.tagName !='INPUT' && el.tagName !='TEXTAREA') return;//IE下，onfocusin会在div等元素触发 
        var  emptyHintEl=el.__emptyHintEl;
        if(emptyHintEl){
            //clearTimeout(el.__placeholderTimer||0);
            //el.__placeholderTimer=setTimeout(function(){//在360浏览器下，autocomplete会先blur再change
			emptyHintEl.style.display = el.value ? 'none' : '';
            //},600);
        }
    };
    function focusFn(e){
        var el = target(e);
		//IE下，onfocusin会在div等元素触发
        if(!el || el.tagName !='INPUT' && el.tagName !='TEXTAREA') return; 
        var emptyHintEl = el.__emptyHintEl;
        if(emptyHintEl){
            //clearTimeout(el.__placeholderTimer||0);
            emptyHintEl.style.display='none';
        }
    };
    if (document.addEventListener){//ie
        document.addEventListener('focus',focusFn, true);
        document.addEventListener('blur', blurFn, true);
    } else {
        document.attachEvent('onfocusin',focusFn);
        document.attachEvent('onfocusout',blurFn);
    };
	var elss = [];
	var inputs = document.getElementsByTagName('input');
	if(inputs.length > 0) {	elss.push(inputs);	};
	var textareas = document.getElementsByTagName('textarea');
	if(textareas.length > 0) {	elss.push(textareas);	};
	var elength = elss.length;
	if(elength == 0) return;    
	for(var n = 0;n < elength; n ++){		
        var els = elss[n];
		var length = els.length;
        for(var i = 0; i < length; i ++){
            var el = els[i];
            var placeholder = el.getAttribute('placeholder') || (el.getAttributeNode('placeholder') && el.getAttributeNode('placeholder').nodeValue),
                emptyHintEl = el.__emptyHintEl;
            if(placeholder && !emptyHintEl){
                emptyHintEl = document.createElement('span');
                emptyHintEl.innerHTML = placeholder;
                emptyHintEl.className ='placeholder';
                emptyHintEl.onclick = function (el){
					return function(){
						try {
							el.focus();
						} catch(ex){}
					}
				}(el);
                if(el.value) emptyHintEl.style.display = 'none';
                el.parentNode.insertBefore(emptyHintEl,el);
                el.__emptyHintEl = emptyHintEl;
            }
        }
    }
})();