$(function() {
		   
	const slider = $("#image_list"); // slider = ul element
	let slideCounter = 0;
	
	// the click event handler for the right button						
	$("#right_button").click(function() { 
		slideCounter = (slideCounter + 1) % 3;
		slider.animate( {left: slideCounter * -300 }, 1000);
	});  // end click
	
	// the click event handler for the left button
	$("#left_button").click(function() {
		slideCounter = (slideCounter - 1 + 3) % 3;
		slider.animate( {left: slideCounter * -300 }, 1000);
	});  // end click		
}); // end ready