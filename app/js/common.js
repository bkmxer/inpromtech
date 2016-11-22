var sliderArray = ["img/slider-bg-1.png", "img/slider-bg-2.png", "img/slider-bg-3.png", "img/slider-bg-4.png", "img/slider-bg-5.png"];
var currentSlide=2;
AOS.init();
function currentSlideCheck(){
        if (currentSlide == -1) {currentSlide=5;  }
        else if (currentSlide == 5){currentSlide=-1; }
        console.log(currentSlide);
        return currentSlide;
}
//animate css enabled

$(window).scroll(function(){/*
    $('.col_wrapper.animated').addClass('bounceInUp');
    if ($(window).scrollTop() > $('.trustUs').offset().top-500){
        $('.left-column_list>li').addClass('animated');
        $('.left-column_list>li').addClass('bounceInLeft');
    }*/
    if (location.pathname=="/index.html" && $(window).scrollTop() > $('.trustUs').offset().top+500){
        $('section.anyquestions').addClass('animated');
        $('section.anyquestions').addClass('rubberBand');
    }/*
    if ($(window).scrollTop() >  $('.anyquestions').offset().top-250){
        $('section.contatcs_on_main').addClass('animated');
        $('section.contatcs_on_main ').addClass('slideInUp');
    }
    if ($(window).scrollTop() >  $('.anyquestions').offset().top-300){
        $('footer#footer').addClass('animated');
        $('footer#footer').addClass('slideInUp');
    }*/
})

$(function() {


	$('.link-pointer').mouseenter(function () {
        $(this).find('.animated').removeClass("hidden");
        $(this).find('.animated').addClass("fadeInLeft");
    });
    $('.link-pointer').mouseleave(function () {
        $(this).find('.animated').addClass("hidden");
        $(this).find('.animated').removeClass("fadeInLeft");
    });



    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

    }
    else {    $('.objects_trigger').mouseover(function(){
        $('ul.object').css("display", "block");

    });
        $('.objects_trigger').mouseleave(function(){
            $('ul.object').css("display", "none");

        });

        $('ul.object').mouseover(function(){
            $('ul.object').css("display", "block");

        });

        $('ul.object').mouseleave(function(){
            $('ul.object').css("display", "none");

        });}
/*function parallaxInit(){
        $('.parallax-window').parallax({imageSrc: 'img/slider-bg-2.png'});


        $('#slider-back-controll').click(function(){
            $('#header').addClass('animated');
            $('#header').addClass('bounce');
            $('.parallax-slider').attr('src', sliderArray[currentSlideCheck()-1]);
            currentSlide--;
            setTimeout(function(){
                $('#header').removeClass('bounce');
            },800);
        });

        $('#slider-forward-controll').click(function(){
            $('#header').addClass('animated');
            $('#header').addClass('bounce');
            $('.parallax-slider').attr('src', sliderArray[currentSlideCheck()+1]);
            currentSlide++;
            setTimeout(function(){
                $('#header').removeClass('bounce');
            },800);
        });

    }*/
//parallax slider
   /* $(window).resize(function () {
        if (screen.width >= 900)
        {parallaxInit()}
    })*/

});




/*$(function(){
    if (screen.width >= 900)
    {
        $('.parallax-window').parallax({imageSrc: 'img/slider-bg-2.png'});


        $('#slider-back-controll').click(function(){
            $('#header').addClass('animated');
            $('#header').addClass('bounce');
            $('.parallax-slider').attr('src', sliderArray[currentSlideCheck()-1]);
            currentSlide--;
            setTimeout(function(){
                $('#header').removeClass('bounce');
            },800);
        });

        $('#slider-forward-controll').click(function(){
            $('#header').addClass('animated');
            $('#header').addClass('bounce');
            $('.parallax-slider').attr('src', sliderArray[currentSlideCheck()+1]);
            currentSlide++;
            setTimeout(function(){
                $('#header').removeClass('bounce');
            },800);
        });
    }
})*/

$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});





$(document).ready(function() {

    owl = $('.owl-carousel').owlCarousel({
        autoPlay : true,
        autoplayTimeout: 5000,
        nav:true,
        responsiveClass:true,
        margin:22,
        autoWidth:true,
        loop:true,
        center: true,
    });

    // Custom Navigation Events
    $("#slider-back-controll").click(function () {
        owl.trigger('prev.owl.carousel');
    });

    $("#slider-forward-controll").click(function () {
        owl.trigger('next.owl.carousel');
    });

    $('.fancybox').fancybox();

    /*
     *  Different effects
     */

    // Change title type, overlay closing speed
    $(".fancybox-effects-a").fancybox({
        helpers: {
            title : {
                type : 'outside'
            },
            overlay : {
                speedOut : 0
            }
        }
    });






    //PRELOADER, should be last to initiate

    $('.preloader').addClass('hidden');

});

var lastScrollTop = 0;
$(window).scroll(function(event){
    var st = $(this).scrollTop();
    if (st > lastScrollTop || st< 800){
        $('#uplink').addClass("hidden");

    } else {
        $('#uplink').removeClass("hidden");

    }
    lastScrollTop = st;
});



