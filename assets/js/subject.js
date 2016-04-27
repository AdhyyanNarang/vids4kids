$(document).ready(function(){

	

$('.overlay').hover(function(){


$(this).css('opacity','0.4'); 
},function(){

$(this).css('opacity','1.0');

});

$(".social-media").hover(function() {
		
$(this).addClass('cursor');

});

$(".menu-item").hover(function() {
		
		
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