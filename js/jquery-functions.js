
jQuery(function($) {

	$.fn.youtubeEmebed = function( settings ){
		settings = $.extend({
			ytClass       : $(this),

			//Setting up the Embed
			playerWrapper : 'video-player',
			//Setting the dimensions
			ytWidth       : '420',
			ytHeight      : '315',

			//Additional Options
			rel           : 0,
			fullscreen    : null,
			showinfo      : null


		}, settings);

		return settings.ytClass.each(function() {

			var ytID = $(this).text();
			var ytTrim = $.trim(ytID);
			var ytLength = ytTrim.length;
			var i=0; 

			if ( ytLength > i){

				$(this).after(
					'<div class="'+ settings.playerWrapper +'"><iframe width="'+ settings.ytWidth +'" height="'+ settings.ytHeight +'"src="http://www.youtube.com/embed/'+ ytTrim +'?showinfo='+ settings.showinfo +'&rel='+ settings.rel +'&fs='+ settings.fullscreen +' "></iframe></div>'
				);

				$(this).hide();
			}
		});
	}


	$('.embed-vid').youtubeEmebed({
		showinfo : 0
	});

});

		