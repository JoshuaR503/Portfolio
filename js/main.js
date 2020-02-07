/* ===================================
--------------------------------------
  NISSA - PHOTOGRAPHY STUDIO TEMPLATE
  Version: 1.0
 -------------------------------------
 =====================================*/


'use strict';

$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut();
	$("#preloder").delay(400).fadeOut("slow");

});

(function($) {



	/*------------------
		Background Set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});

	

	/*------------------
		Circle progress
	--------------------*/
	$('.circle-progress').each(function() {
		var cpvalue = $(this).data("cpvalue");
		var cpcolor = $(this).data("cpcolor");
		var cpid 	= $(this).data("cpid");

		$(this).prepend('<div class="'+ cpid +' circle-warp"></div><h2>'+ cpvalue +'<span>%</span></h2>');

		if (cpvalue < 100) {

			$('.' + cpid).circleProgress({
				value: '0.' + cpvalue,
				size: 84,
				thickness: 5,
				fill: cpcolor,
				emptyFill: "rgba(0, 0, 0, 0)"
			});
		} else {
			$('.' + cpid).circleProgress({
				value: 1,
				size: 84,
				thickness: 5,
				fill: cpcolor,
				emptyFill: "rgba(0, 0, 0, 0)"
			});
		}
	});

})(jQuery);
