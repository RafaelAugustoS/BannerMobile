$(function(){

	$('.close').on('click', function(){
		$('.banner').slideUp();
	});


	// Baners
	var i = 0;
	setInterval(function(){
		$('#cont-banner h1').text(i);
		i++;
	}, 2000);
});