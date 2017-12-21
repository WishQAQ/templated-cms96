
$(function(){
		 
		    $('.index_pic1').mouseleave(function(){
							$(this).parent().siblings('.hua1').stop(true,true).fadeOut();
							$(this).parent().siblings('.hua2').stop(true,true).fadeOut();
							$(this).parent().siblings('.hua3').stop(true,true).fadeOut();
							$(this).parent().siblings('.hua4').stop(true,true).fadeOut();
							$(this).parent().siblings('.hua5').stop(true,true).fadeOut();
										   });
		   });

$(function(){
		   $('.index_pic1').hover(function(){
				$(this).parent().siblings('.index_picbg').stop(true,true).fadeIn();
				$(this).parent().siblings('.hua1').stop(true,true).fadeIn();
				$(this).parent().siblings('.hua1').stop(true,true).animate({
															'left':'-43px'
																		   });
				$(this).parent().siblings('.hua2').stop(true,true).fadeIn();
				$(this).parent().siblings('.hua2').stop(true,true).animate({
															'left':'25px',
															'top':0
																   });
				$(this).parent().siblings('.hua3').stop(true,true).fadeIn();
				$(this).parent().siblings('.hua3').stop(true,true).animate({
															'left':'190px',
															'top':0
																   });
				$(this).parent().siblings('.hua4').stop(true,true).fadeIn();
				$(this).parent().siblings('.hua4').stop(true,true).animate({
															'left':'229px'
																   });
				$(this).parent().siblings('.hua5').stop(true,true).fadeIn();
				$(this).parent().siblings('.hua5').stop(true,true).animate({
															'left':'229px',
															'top':'177px'
																   });
				
								},function(){
				$(this).parent().siblings('.index_picbg').stop(true,true).fadeOut();
				
				$(this).parent().siblings('.hua1').stop(true,true).animate({
															'left':'-25px'
																		   },'slow');
				$(this).parent().siblings('.hua2').stop(true,true).animate({
															'left':'35px',
															'top':'5px'
																   });
				
				$(this).parent().siblings('.hua3').stop(true,true).animate({
															'left':'180px',
															'top':'6px'
																   });
				
				$(this).parent().siblings('.hua4').stop(true,true).animate({
															'left':'210px'
																   });
				
				$(this).parent().siblings('.hua5').stop(true,true).animate({
															'left':'210px',
															'top':'160px'
																   });
								
									});
			
		   });



//地中海滑动
$(function(){
		   $('#history_container').animate({
								'scrollTop':545
										   
										   });
		   $('.history_pic').animate({
						'left':'30px',			 
						'opacity':1			 
						},1200);
		   $('.history_zw').delay(700).animate({
						'left':'30px',			 
						'opacity':1			 
						},1200);
		   $('.history_yw').delay(1400).animate({
						'left':'30px',			 
						'opacity':1			 
						},1200);
		   });

//企业价值
$(function(){
	$('.qiyeja_wz2').animate({
		'left':0,
		'opacity':1
		},1200);
	$('.guojihua').animate({
		'opacity':1
		},2500);
	$('.mubiao').animate({
		'left':'70px',
		'opacity':1
		},1200);
	});

/*联系我们*/
$(function(){
	$('.contact_nr').delay(300).animate({
		'height':'391px',
		'top':'74px',
		'opacity':'1'
		},750);
	
	});
	
	
/*品牌文化*/
$(function(){
	$('.mohu').hover(function(){
		var mh=$(this).find('img').attr('mh');
		$(this).find('img').attr('src',mh);
		$(this).find('img').fadeTo(500,0.8);
		},function(){
			var qx=$(this).find('img').attr('qx');
			$(this).find('img').attr('src',qx);
			$(this).find('img').fadeTo('slow',1);
			});
	});	
	
/*营养价值*/

$(function(){
		var statu = 0;

		$('.nutrition_nr').mouseenter(function(){
				if(statu == 1)
				{
					$(this).siblings(".nutrition_nr").mouseleave();
				}
				statu++;
				$(this).find('.zhezao').fadeOut();
				$(this).find('.nutrition_nrup').stop(true,true).animate({'top':0});
				$(this).find('.nutrition_nrdown').stop(true,true).slideDown();
				$(this).find('.nutrition_nrbd').stop(true,true).fadeIn();
		}).mouseleave(function(){
				$(this).find('.zhezao').fadeIn();
				$(this).find('.nutrition_nrup').stop(true,true).animate({'top':'74px'});
				$(this).find('.nutrition_nrdown').stop(true,true).slideUp();
				$(this).find('.nutrition_nrbd').stop(true,true).fadeOut();
		});

		$('.nutrition_nr').eq(0).mouseenter();
});

$(function(){
		   $('.dynamic_news').mouseenter(function(){
								$('.chengsbg').animate({
										'background-color':'#d0d4b1'
													   },700);
								
								$(this).find('a').css({'color':'#206402'});
								$(this).find('p').css({'background':'url(../images/dynamic_tubiao2.png) no-repeat 7px center'});
								$(this).find('span').css({'color':'#206402'});
												  });
		   $('.dynamic_news').mouseleave(function(){
								$('.chengsbg').animate({
										'background-color':'#fbf7de'
													   });
								$(this).find('a').css({'color':'#666666'});
								$(this).find('p').css({'background':'url(../images/dynamic_tubiao.png) no-repeat 7px center'});
								$(this).find('span').css({'color':'#000'});
												  });
		   });
	
/*$(function(){
		   $('.index_pic1').hover(function(){
				$('.lvyuanquan').animate({
								'left':'-15px'
								},500,'swing',function(){
									$('.lvfk').animate({
											'left':'0px'		   
											},600,'linear',function(){
											$('.lvfk').animate({
												'width':'303px'			   
												},600,'linear')	   

												})
									
									})
								})
		   })



 $('.tuijian li').hover(function(){
var cai=$(this).find('img').attr('cai');
$(this).find('img').attr('src',cai);
},function(){
var hui=$(this).find('img').attr('hui');
$(this).find('img').attr('src',hui); 
*/