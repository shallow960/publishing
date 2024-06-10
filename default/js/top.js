'use strict';
try {
	this.mode = '';
	
	//제이쿼리가 있으면
	this.jQuery = this.jQuery || undefined;

	if(jQuery) {
		//$ 중복방지
		(function($) {

			$('.top_go .up_button').on('click', function() {
				$('html, body').animate({
					scrollTop: $('body').offset().top
				}, 400);
			});

		})(jQuery);
	}
}catch(e) {
	console.error(e);
}
