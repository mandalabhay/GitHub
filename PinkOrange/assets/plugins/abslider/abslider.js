jQuery(document).ready(function() {
	contSlide(setInterval(contSlide,6000))
	
	
	function contSlide(){
		$('#maskWhite').delay(1000).fadeIn(500,function(){$('#photoWall').delay(1000).fadeIn(500,function(){$('#maskWhite').delay(1000).fadeOut(500,function(){$('#photoWall').delay(1000).fadeOut(500)})})})
		}


//end of main function
});