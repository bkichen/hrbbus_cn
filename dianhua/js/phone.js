function initPlaceHolders(){
    if('placeholder' in document.createElement('input'))return;
	function target (e){
        var e = e || window.event;
        return e.target || e.srcElement;
    };
    function blurFn(e){		
		var el = target(e);
		if(!el || el.tagName !='INPUT')return;		
        var emptyHintEl = el.__emptyHintEl;
        if(emptyHintEl){
			if($(el).val()) {
				emptyHintEl.hide();
			} else {
				emptyHintEl.show();
			}
        }
    };
    function focusFn(e){
		var el = target(e);
		if(!el || el.tagName !='INPUT')return;		
		var emptyHintEl = el.__emptyHintEl;        
        if(emptyHintEl){
            emptyHintEl.hide();
        }
    };
    if (document.addEventListener){		
        document.addEventListener('focus',focusFn, true);
        document.addEventListener('blur', blurFn, true);
    } else {
        document.attachEvent('onfocusin',focusFn);
        document.attachEvent('onfocusout',blurFn);
    };
	var inputs = $('input');
	if(inputs.length > 0) {
		inputs.each(function () {
			var _this = this;
			var placeholder = $(this).attr('placeholder'),
                emptyHintEl = this.__emptyHintEl;			
			if(placeholder && !emptyHintEl){
				emptyHintEl = $('<span class="placeholder">' + placeholder + '</span>');
				emptyHintEl.bind('click', function(e) {
					$(_this).focus();
					focusFn(e);				
				});
				emptyHintEl.insertBefore(this);
				this.__emptyHintEl = emptyHintEl;
			}			
		});
	}
}
$(function(){
	initPlaceHolders();
	$('#sidebar .tags').hide();
	$('#sidebar .tags a').click(function(){
		$(this).addClass('cur').siblings().removeClass('cur');
	})
	$('#sidebar > strong').click(function(){
		$(this).toggleClass('up');
		$(this).next().toggle();
	});
	var current_type = $('#current_type').val();
	$('#sidebar > strong:contains("'+current_type+'")').toggleClass('up');
	$('#sidebar > strong:contains("'+current_type+'")').next().toggle();

	$('.page a').click(function(){
		$(this).addClass('cur').siblings().removeClass('cur');
	});
	$('.searchlist li').hover(function(){
		$(this).addClass('bg');
	},function(){
		$(this).removeClass('bg');
	});
	$('.plist > div').hover(function(){
		$(this).addClass('bg');
	},function(){
		$(this).removeClass('bg');
	})
	$('.header_pinC').hide();
	$('.header_pinBox').hover(function(){
		$('.header_pinC').show();		
	},function(){
		$('.header_pinC').hide();	
	});
});
