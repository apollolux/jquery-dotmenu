/**
 * jQuery Dot Menu 'jqDot'
 * Based off the old DHTML Central Dot Menu
 * Version: 1.0.0
 * Author: Alex Rosario (apollolux)
 */
(function($){
	$.fn.dotMenu = function(opts) {
		var cfg = $.extend({
			'radius':400,
			'angle':-90,
			'speed':300,
			'easing':'swing',
			'click':function(s,e){},
			'caption':'jqdm-cap',
			'hover':'ui-state-hover',
			'leaf':'ui-icon-document',
			'open':'ui-icon-folder-open',
			'closed':'ui-icon-folder-collapsed'
		}, opts);
		var _pi = Math.PI, _cos = Math.cos, _sin = Math.sin, _rd = Math.round;
		function _dtr(x){return x*_pi/180;}
		function _rtd(x){return x*180/_pi;}
		function _dot(sel,is_h) {
			var s = $(sel), sp = cfg.speed, ea = cfg.easing;
			if (is_h) {
				s.toggle(true).children("li").css({"opacity":0}).each(function(){
					$(this).animate({
						"left":is_h?$(this).data('x')+'px':0+'px',
						"top":is_h?$(this).data('y')+'px':0+'px',
						"opacity":is_h?1:0
					},sp,ea);
				});
				_dot(s.parent("li").siblings("li").children("ul"),false);
				_dot(s.find("ul"),false);
				s.children('a').trigger('mouseleave');
			}
			else {
				s.children("li").each(function(){
					$(this).animate({
						"left":is_h?$(this).data('x')+'px':0+'px',
						"top":is_h?$(this).data('y')+'px':0+'px',
						"opacity":is_h?1:0
					},sp,ea);
				});//.end().find("ul").css("display","none");
				setTimeout(function(){_dot(s.find("ul"),false);s.toggle(false);},sp);
			}
			s.siblings("a").find(".ui-icon").removeClass(cfg.open+' '+cfg.closed).addClass(is_h?cfg.open:cfg.closed);
		}
		var r = cfg.radius;
		function _li(ii, ee) {
			var n = $(this).siblings("li").length+1, diff = 0, angle = $(this).parent('ul').siblings('a').data('a')?$(this).parent('ul').siblings('a').data('a'):cfg.angle;
			if (n>0) {
				diff = 360/n;
				var q = (diff*ii)+angle, d2r = _dtr(q), rc = _rd(r*_cos(d2r)), rs = _rd(r*_sin(d2r));
				var css = {
					"left":(rc)+"px",
					"top":(rs)+"px"
				};
				$(this).data({"a":ii,"r":r,"q":q,"x":rc,"y":rs});//.css(css);
			}
			var c = $(this).children("ul").children("li");
			r = r/2;
			c.each(_li);
			r = r*2;
		}
		return this.each(function(){
			$(this).addClass('ui-widget');
			$("a",this).
				hover(function(){$(this).addClass(cfg.hover);},function(){$(this).removeClass(cfg.hover);}).
				click(function(e){
					var s = $(this).siblings("ul");
					if (s.length) {
						e.preventDefault();
						var is_h = s.css("display")==="none"?1:0;
						_dot(s,is_h);
					}
					else cfg.click(this,e);
				}).each(function(){
					var ic = ($(this).siblings("ul").length>0)?cfg.closed:cfg.leaf;
					$(this).addClass("ui-state-default ui-corner-all").html("<span class='ui-icon "+ic+"'></span><span class='"+cfg.caption+"'>"+$(this).html()+"</span>");
					var jcap = $("."+cfg.caption,this);
					jcap.css("margin-left",'-'+(jcap.width()/2-8)+"px");
				});
			$("ul",this).css({"display":"none"});
			$(this).children("li").each(_li).css({"left":"50%","top":"50%"});
		});
	};
})(jQuery);
