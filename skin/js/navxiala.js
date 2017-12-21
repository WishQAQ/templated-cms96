// JavaScript Document
$(function(){
	$('.nav_list ul li').mouseenter(function(){
		$(this).find('dl').stop(true,true).slideDown();
		$(this).not('.current').addClass('jd');
	});	
	$('.nav_list ul li').mouseleave(function(){
		$(this).find('dl').stop(true,true).slideUp();
		$(this).not('.current').removeClass('jd');
	});	

/*if($(".nav_list ul li.current dl").length>0) 
{
	$(".nav_list ul li.current").find("dl").css({display:"block"});
	$('.nav_xia').css({height:55});
	//$('.nav_list ul li').mouseleave(function(){
				
			//		$('.nav_xia').stop(true,true).animate({'height':'55px'},200);
			//	$('.nav ul li dl').show();
			//});
	}*/
				

});
