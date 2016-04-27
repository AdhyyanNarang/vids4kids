	$(document).ready(function() {

	$(".social-media").hover(function() {
		
		// Show the corresponding outfit
		$(this).addClass('cursor');
	}); 

	$(".menu-item").hover(function() {
		
		// Show the corresponding outfit
		$(this).addClass('color');
	}, function(){

		$(this).removeClass('color')

	}); 



	$(".logo").hover(function() {
		
		// Show the corresponding outfit
		$(this).addClass('cursor');
	}); 


	$(".logo").click(function() {
		
		window.location.href = 'index.html';
		
	}); 

}); 