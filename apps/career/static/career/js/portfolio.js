$(document).ready(function(){
	$('.img-thumbnail').hover(
		// hover in, show the alt-img by making it the primary src and save original src as the new alt
		function(){
				
				var alt = $(this).attr('data-alt-src');
				var temp = $(this).attr('src');
				$(this).attr('src', alt);
				$(this).attr('data-alt-src', temp);
		}, 
		// hover out, show original image by making it src again and alt is back to alt
		function(){
				
				var original = $(this).attr('data-alt-src');
				var temp = $(this).attr('src');
				$(this).attr('src', original);
				$(this).attr('data-alt-src', temp);
		})
})