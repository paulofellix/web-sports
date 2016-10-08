(function( $ ) {

	$.fn.partial = function(template) {

		var element = this.selector;

		$.get(template, function(data) {		
			$(element).after(data).remove();
	    });
	};

}( jQuery ));