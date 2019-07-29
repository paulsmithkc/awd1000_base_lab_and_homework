$(function() {
	// preload images
	$("#image_list a").each(function() {
		const swappedImage = new Image();
		swappedImage.src = $(this).attr("href");
	});

	const animationSpeed = "slow";
	
	// set up event handlers for links    
	$("#image_list a").hover(
		function(evt) {
			// animate thumbnail
			$(this).stop(true).animate({ top: 15 }, animationSpeed);
			//$(this).stop(true, true).animate({ top: 15 }, animationSpeed);
			//$(this).finish().animate({ top: 15 }, animationSpeed);						
			// swap image
			var imageURL = $(this).attr("href");
			$("#image").attr("src", imageURL);
			
			//swap caption
			var caption = $(this).attr("title");
			$("#caption").text(caption);
					
			// cancel the default action of the link
		  evt.preventDefault();  // jQuery method that's cross-browser compatible
		},
		function(evt) {
			// animate thumbnail
			$(this).stop(true).animate({ top: 0 }, animationSpeed);
			//$(this).stop(true, true).animate({ top: 0 }, animationSpeed);
			//$(this).finish().animate({ top: 0 }, animationSpeed);
		}
	); // end click
	
	// move focus to first thumbnail
	$("image_list:first-child:first-child").focus();
	
}); // end ready