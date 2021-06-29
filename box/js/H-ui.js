/* -----------H-ui前端框架-------------
 * H-ui.js v2.3.5
 * http://www.h-ui.net/
 * Created & Modified by guojunhui
 * Date modified 2016-01.08
 *
 * Copyright 2013-2016 北京颖杰联创科技有限公司 All rights reserved.
 * Licensed under MIT license.
 * http://opensource.org/licenses/MIT
 *
 */

/*placeholder兼容性处理*/
(function (window, document, $) {
    var isInputSupported = 'placeholder' in document.createElement('input');
    var isTextareaSupported = 'placeholder' in document.createElement('textarea');
    var prototype = $.fn;
    var valHooks = $.valHooks;
    var propHooks = $.propHooks;
    var hooks;
    var placeholder;

    if (isInputSupported && isTextareaSupported) {
        placeholder = prototype.placeholder = function () {
            return this;
        };
        placeholder.input = placeholder.textarea = true;
    } else {
        placeholder = prototype.placeholder = function () {
            var $this = this;
            $this
                .filter((isInputSupported ? 'textarea' : ':input') + '[placeholder]')
                .not('.placeholder')
                .bind({
                    'focus.placeholder': clearPlaceholder,
                    'blur.placeholder': setPlaceholder
                })
                .data('placeholder-enabled', true)
                .trigger('blur.placeholder');
            return $this;
        };
        placeholder.input = isInputSupported;
        placeholder.textarea = isTextareaSupported;
        hooks = {
            'get': function (element) {
                var $element = $(element);
                var $passwordInput = $element.data('placeholder-password');
                if ($passwordInput) {
                    return $passwordInput[0].value;
                }
                return $element.data('placeholder-enabled') && $element.hasClass('placeholder') ? '' : element.value;
            },
            'set': function (element, value) {
                var $element = $(element);
                var $passwordInput = $element.data('placeholder-password');
                if ($passwordInput) {
                    return $passwordInput[0].value = value;
                }
                if (!$element.data('placeholder-enabled')) {
                    return element.value = value;
                }
                if (value == '') {
                    element.value = value;
                    if (element != safeActiveElement()) {
                        setPlaceholder.call(element);
                    }
                } else if ($element.hasClass('placeholder')) {
                    clearPlaceholder.call(element, true, value) || (element.value = value);
                } else {
                    element.value = value;
                }
                return $element;
            }
        };

        if (!isInputSupported) {
            valHooks.input = hooks;
            propHooks.value = hooks;
        }
        if (!isTextareaSupported) {
            valHooks.textarea = hooks;
            propHooks.value = hooks;
        }

        $(function () {
            $(document).delegate('form', 'submit.placeholder', function () {
                var $inputs = $('.placeholder', this).each(clearPlaceholder);
                setTimeout(function () {
                    $inputs.each(setPlaceholder);
                }, 10);
            });
        });

        $(window).bind('beforeunload.placeholder', function () {
            $('.placeholder').each(function () {
                this.value = '';
            });
        });
    }

    function args(elem) {
        var newAttrs = {};
        var rinlinejQuery = /^jQuery\d+$/;
        $.each(elem.attributes, function (i, attr) {
            if (attr.specified && !rinlinejQuery.test(attr.name)) {
                newAttrs[attr.name] = attr.value;
            }
        });
        return newAttrs;
    }

    function clearPlaceholder(event, value) {
        var input = this;
        var $input = $(input);
        if (input.value == $input.attr('placeholder') && $input.hasClass('placeholder')) {
            if ($input.data('placeholder-password')) {
                $input = $input.hide().next().show().attr('id', $input.removeAttr('id').data('placeholder-id'));
                if (event === true) {
                    return $input[0].value = value;
                }
                $input.focus();
            } else {
                input.value = '';
                $input.removeClass('placeholder');
                input == safeActiveElement() && input.select();
            }
        }
    }

    function setPlaceholder() {
        var $replacement;
        var input = this;
        var $input = $(input);
        var id = this.id;
        if (input.value == '') {
            if (input.type == 'password') {
                if (!$input.data('placeholder-textinput')) {
                    try {
                        $replacement = $input.clone().prop('type', 'text');
                    } catch (e) {
                        $replacement = $('<input>').prop($.extend(args(this), {'type': 'text'}));
                    }
                    $replacement
                        .removeAttr('name')
                        .data({
                            'placeholder-password': $input,
                            'placeholder-id': id
                        })
                        .bind('focus.placeholder', clearPlaceholder);
                    $input
                        .data({
                            'placeholder-textinput': $replacement,
                            'placeholder-id': id
                        })
                        .before($replacement);
                }
                $input = $input.removeAttr('id').hide().prev().attr('id', id).show();
            }
            $input.addClass('placeholder');
            $input[0].value = $input.attr('placeholder');
        } else {
            $input.removeClass('placeholder');
        }
    }

    function safeActiveElement() {
        try {
            return document.activeElement;
        } catch (exception) {
        }
    }
}(this, document, jQuery));
/**/
(function ($) {
    $.extend({
        format: function (str, step, splitor) {
            str = str.toString();
            var len = str.length;

            if (len > step) {
                var l1 = len % step,
                    l2 = parseInt(len / step),
                    arr = [],
                    first = str.substr(0, l1);
                if (first != '') {
                    arr.push(first);
                }
                ;
                for (var i = 0; i < l2; i++) {
                    arr.push(str.substr(l1 + i * step, step));
                }
                ;
                str = arr.join(splitor);
            }
            ;
            return str;
        }
    });
})(jQuery);

/*隐藏显示密码*/
!(function ($) {
    $.fn.togglePassword = function (options) {
        var s = $.extend($.fn.togglePassword.defaults, options),
            input = $(this);

        $(s.el).on(s.ev, function () {
            "password" == $(input).attr("type") ?
                $(input).attr("type", "text") :
                $(input).attr("type", "password");
        });
    };

    $.fn.togglePassword.defaults = {
        ev: "click"
    };
}(jQuery));
/*transition*/
!function ($) {
    "use strict";
    $(function () {
        $.support.transition = (function () {
            var transitionEnd = (function () {
                var el = document.createElement('bootstrap'),
                    transEndEventNames = {
                        'WebkitTransition': 'webkitTransitionEnd',
                        'MozTransition': 'transitionend',
                        'OTransition': 'oTransitionEnd otransitionend',
                        'transition': 'transitionend'
                    },
                    name
                for (name in transEndEventNames) {
                    if (el.style[name] !== undefined) {
                        return transEndEventNames[name]
                    }
                }
            }())
            return transitionEnd && {
                    end: transitionEnd
                }
        })()
    });
}(window.jQuery);

/*添加收藏
 <a title="收藏本站" href="javascript:;" onClick="addFavoritepage('H-ui前端框架','http://www.h-ui.net/');">收藏本站</a>
 */
/*收藏主站*/
function addFavorite(name, site) {
    try {
        window.external.addFavorite(site, name);
    }
    catch (e) {
        try {
            window.sidebar.addPanel(name, site, "");
        }
        catch (e) {
            alert("加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
}
/*收藏页面
 <a title="收藏本页" href="javascript:addFavoritepage(0);">收藏本页</a>
 */
function addFavoritepage() {
    var sURL = window.location.href;
    var sTitle = document.title;
    try {
        window.external.addFavorite(sURL, sTitle);
    } catch (e) {
        try {
            window.sidebar.addPanel(sTitle, sURL, "");
        } catch (e) {
            alert("加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
}

/*设为首页*/
function setHome(obj) {
    try {
        obj.style.behavior = "url(#default#homepage)";
        obj.setHomePage(webSite);
    }
    catch (e) {
        if (window.netscape) {
            try {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            }
            catch (e) {
                alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入\"about:config\"并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。");
            }
            var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
            prefs.setCharPref('browser.startup.homepage', url);
        }
    }
}
/*滚动*/
function marquee(height, speed, delay) {
    var scrollT;
    var pause = false;
    var ScrollBox = document.getElementById("marquee");
    if (document.getElementById("holder").offsetHeight <= height) return;
    var _tmp = ScrollBox.innerHTML.replace('holder', 'holder2')
    ScrollBox.innerHTML += _tmp;
    ScrollBox.onmouseover = function () {
        pause = true
    }
    ScrollBox.onmouseout = function () {
        pause = false
    }
    ScrollBox.scrollTop = 0;
    function start() {
        scrollT = setInterval(scrolling, speed);
        if (!pause) ScrollBox.scrollTop += 2;
    }

    function scrolling() {
        if (ScrollBox.scrollTop % height != 0) {
            ScrollBox.scrollTop += 2;
            if (ScrollBox.scrollTop >= ScrollBox.scrollHeight / 2) ScrollBox.scrollTop = 0;
        }
        else {
            clearInterval(scrollT);
            setTimeout(start, delay);
        }
    }

    setTimeout(start, delay);
}





/*hover*/
jQuery.Huihover = function (obj) {
    $(obj).hover(function () {
        $(this).addClass("hover");
    }, function () {
        $(this).removeClass("hover");
    });
};
/*得到失去焦点*/
jQuery.Huifocusblur = function (obj) {
    $(obj).focus(function () {
        $(this).addClass("focus").removeClass("inputError");
    });
    $(obj).blur(function () {
        $(this).removeClass("focus");
    });
};
/*tab选项卡*/
jQuery.Huitab = function (tabBar, tabCon, class_name, tabEvent, i) {
    var $tab_menu = $(tabBar);
    // 初始化操作
    $tab_menu.removeClass(class_name);
    $(tabBar).eq(i).addClass(class_name);
    $(tabCon).hide();
    $(tabCon).eq(i).show();

    $tab_menu.on(tabEvent, function () {
        $tab_menu.removeClass(class_name);
        $(this).addClass(class_name);
        var index = $tab_menu.index(this);
        $(tabCon).hide();
        $(tabCon).eq(index).show();
    });
}

/*返回顶部*/
var $backToTopEle = $('<a href="javascript:void(0)" class="Hui-iconfont toTop" title="返回顶部" alt="返回顶部" style="display:none">&#xe684;</a>').appendTo($("body")).click(function () {
    $("html, body").animate({scrollTop: 0}, 120);
});
var $backToTopFun = function () {
    var st = $(document).scrollTop(), winh = $(window).height();
    (st > 0) ? $backToTopEle.show() : $backToTopEle.hide();
    /*IE6下的定位*/
    if (!window.XMLHttpRequest) {
        $backToTopEle.css("top", st + winh - 166);
    }
};