$(function() {
    $('.xtu ul').css('width', ($('.xtu ul li').length * $('.xtu li').outerWidth(true)) + 20);
    var num = 5;
    var index = 0;
    var num2 = Math.ceil(num / 2);
    function change() {
        if (index < num2) {
            $('.xtu ul').stop(true, true).animate({
                'left': '0'
            },
            500)
        } else if (index + num2 < $('.xtu ul li').length) {
            $('.xtu ul').stop(true, true).animate({
                'left': -(index - num2 + 1) * $('.xtu li').outerWidth(true)
            },
            500)
        } else {
            $('.xtu ul').stop(true, true).animate({
                'left': -($('.xtu ul li').length - num) * $('.xtu li').outerWidth(true)
            },
            500)
        }

        var h = $('.xtu li').eq(index).index();
        for (var i = 0; i < $('.xtu li').length; i++) {
            $('.xtu li').eq(h).addClass('current').siblings().removeClass('current')
        }

        for (var j = 0; j < $('.datu li').length; j++) {
            //$('.datu ul').stop(true,false).animate({'left':-h*$('.kh_ban .datu li').width()},500)
            // $('.datu li').eq(h).css('display','block').siblings().css('display','none')
            if ($(".honour_body").is("div")) {
                $('.datu li').eq(h).fadeIn(600).siblings().fadeOut(600);
            }
            $('.datu li').eq(h).show().siblings().hide();
        }
		
		 $('.section .sectionImgWrapp ul li').eq(index).stop(true, false).fadeIn(600).siblings('li').stop(true, false).fadeOut(600);
    }
    $('.xtu li').click(function() {
        var index2 = $(this).index();
        index = index2;
        change();
    });
    $('.xia').click(function() {
        index++;
        if (index == $('.xtu li').length) {
            index = 0
        }

        change();
    });
    $('.shang').click(function() {
        index--;
        if (index == -1) {
            index = $('.xtu li').length - 1
        }
        change();
    });

    $('.xtu li:first').trigger('click');
/*    var time = setInterval(function() {
        index++;
        if (index == $('.xtu li').length) {
            index = 0
        }
        change();
    },
    4000);

    $('.kh_nr').hover(function() {
        clearInterval(time);
    },
    function() {
        time = setInterval(function() {
            index++;
            if (index == $('.xtu li').length) {
                index = 0
            }
            change();
        },
        4000);
    })*/
})