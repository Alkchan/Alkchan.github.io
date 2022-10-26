$(function(){
	var windowWidth = $(window).width()/2;
	var fin = windowWidth-375;  
		$('#imagerow img').click(function(){
		var sel = $(this);
		$.scrollTo(sel, 400,{offset:{top:-10, left:-fin}});
	});

});


