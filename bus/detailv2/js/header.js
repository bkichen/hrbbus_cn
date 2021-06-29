var SearchBox = function (container) {
	var $ = jQuery;
	var _container = $(container),
	_items = $('>div>div', _container),
	_buttons = $('>div>ul>li', _container);

	_buttons.click(function () {
		var index = $(this).index(),
			item;
		_buttons.each(function (idx) {
			if (index === idx) {
				_buttons.eq(idx).addClass('search_nav_on');
				_item = _items.eq(idx).show();
				$('input:eq(0)', _item).focus();
			} else {
				_buttons.eq(idx).removeClass('search_nav_on');
				_items.eq(idx).hide();
			}
		});
	});
};

new SearchBox('#searchBox');
(function(jq) {
	var $ = jq;
	//按省份 按钮，按拼音 按钮
	var $ProvinceBtn = $('#ProvinceBtn'), $PinyinBtn = $('#PinyinBtn'),
		$Province = $('#Province'), $Pinyin = $('#Pinyin');
	$ProvinceBtn.click(function () {
		$Province.show();
		$ProvinceBtn.addClass('cur');
		$Pinyin.hide();
		$PinyinBtn.removeClass('cur');
	});
	$PinyinBtn.click(function () {
		$Pinyin.show();
		$PinyinBtn.addClass('cur');
		$Province.hide();
		$ProvinceBtn.removeClass('cur');
	});	
})(jQuery);

