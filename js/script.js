$(function (){
    'use strict';

    // start adjust slider height
    var upperBarheight = $('.upper-bar').innerHeight(),
        navbarHeight = $('.navbar').innerHeight(),
        veiwportHeight = $(window).height();

    $('.slider, .carousel-item').height(veiwportHeight - (upperBarheight + navbarHeight));
    // end adjust slider height

    // start featured works shuffle
    $('.featured-work ul li').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
        
        if($(this).data('class') === 'all'){
            $('.shuffle-images .col-md').css('opacity', 1);
        }else{
            $('.shuffle-images .col-md').css('opacity', .1);
            $($(this).data('class')).parent().css('opacity', 1);
        }
    });
    // end featured works shuffle
})