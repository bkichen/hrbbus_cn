		var keys = [37, 38, 39, 40];

		function preventDefault(e) {
		  e = e || window.event;
		  if (e.preventDefault)
		      e.preventDefault();
		  e.returnValue = false;  
		}
		
		function keydown(e) {
		    for (var i = keys.length; i--;) {
		        if (e.keyCode === keys[i]) {
		            preventDefault(e);
		            return;
		        }
		    }
		}
		
		function wheel(e) {
		  preventDefault(e);
		}
		
		function disable_scroll() {
		  if (window.addEventListener) {
		      window.addEventListener('DOMMouseScroll', wheel, false);
		  }
		  window.onmousewheel = document.onmousewheel = wheel;
		  document.onkeydown = keydown;
		}
		
		function enable_scroll() {
		    if (window.removeEventListener) {
		        window.removeEventListener('DOMMouseScroll', wheel, false);
		    }
		    window.onmousewheel = document.onmousewheel = document.onkeydown = null;  
		}
		$(function(){
			$("#ditieMap").mouseover(function(){
				disable_scroll();
			});
			$("#ditieMap").mouseout(function(){
				enable_scroll();
			});
		});