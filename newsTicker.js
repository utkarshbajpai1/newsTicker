// with options

(function($) {
	
	$.fn.ticker = function(options){
		return this.each(function(){
			var e = $(this);
			
			var defaults = {
				startWith:0,
				delay:3000
			}
			
			var o = $.extend(defaults,options);
			
			e.children(":lt("+(o.startWith)+")").appendTo(e);  // what is the role of lt
			
			e.children(':not(:first)').hide();
			setInterval(function(){
				e.children(":eq(0)").fadeOut().next().fadeIn(2000).slideUp().end()    //  values are always inserted with "+ +"
				.appendTo(e);
			},o.delay);
			
		});
	};
	
})(jQuery);





// without options
/*
(function($) {
	
	$.fn.ticker = function(){
		return this.each(function(){
			var e = $(this);
			
			
			
			e.children(':not(:first)').hide();
			setInterval(function(){
				e.children(":eq(0)").fadeOut().next().fadeIn().end()
				.appendTo(e);
			},2000);
			
		});
	};
	
})(jQuery);
*/

/*               // book
(function($) {
$.fn.ticker = function() {
return this.each(function() {
var e = $(this);
e.children(':not(:first)').hide();
setInterval(function() {
e.children(":first").fadeOut().next().fadeIn().end()
.appendTo(e);
}, 2000);
});
};
})(jQuery)
*/   