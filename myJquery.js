jQuery().ready(function (){
	
	function myS(){
		
		$('.shine1').fadeOut(500);
		$('.shine2').fadeIn(500);
		$('.shine2').fadeOut(500);
		$('.shine1').fadeIn(500);
		/*
			$('.shine1').css({'border' : '1px solid red', 'color' : 'blue'});
			$('.shine2').css({'border' : '1px solid blue', 'color' : 'red'});
		*/
	}
	setInterval(myS, 2000);

	
	
	$('.menu_div').load('menu.html');
	
	$('.load_home').click(function(){
		$('.first_div').load('test.html');
	});
	
	
	
/*	
	var tabSpan = $('<span/>', {
    html: 'Message Center'
});
var messageCenterAnchor = $('<a/>', {
    href='/user/messages',
    html: tabSpan
});
var newListItem = $('<li/>', {
    html: messageCenterAnchor,
    "id": "myIDGoesHere"
});    // NOTE: you have to put quotes around "id" for IE..

$("content ul").append(newListItem);
	
	var tabSpan = $('<span/>', {
    html: 'Message Center'
	});
	$('.first-div').append(tabSpan);	
*/	


});
