/* -------------------------------------------------------------------------------- /

    +----------------------------------------------------+
        TABLE OF CONTENTS
    +----------------------------------------------------+
    
    [1]     Preloader
    [2]     Smooth Scroll to Section
    [3]     Slider
    [4]     Lightbox Gallery
    [5]     Counter
    [6]     Header shadow
    
/ -------------------------------------------------------------------------------- */

var apclk = jQuery;
apclk.noConflict();

// On Window Load
apclk(window).load(function() {
    // Preloader
    apclk('.preloader-area').fadeOut();
    apclk('.preloader-area').delay(350).fadeOut('slow');
    apclk('body').delay(550);
});


// Smooth Scroll to Section

apclk(function() {

    apclk('a.smooth-scroll[href*=#]:not([href=#])').on('click', function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = apclk(this.hash);
            target = target.length ? target : apclk('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                apclk('html,body').animate({
                    scrollTop: target.offset().top
                }, 2000, 'easeInOutExpo');
                return false;
            }
        }
    });

});


apclk(document).ready(function() {

    // Slider
    apclk('.bxslider').bxSlider({
      auto: true
    });


    // Lightbox Gallery
    if (apclk('.gallery-images').length > 0) {

        apclk(function() {

            apclk('.about-cottage-gallery a.lightbox-about-cottage').lightbox();
            apclk('.gallery-images a.lightbox-bedrooms').lightbox();
            apclk('.gallery-images a.lightbox-livingrooms').lightbox();
            apclk('.gallery-images a.lightbox-kitchen').lightbox();
            apclk('.gallery-images a.lightbox-bathroom').lightbox();
            apclk('.gallery-images a.lightbox-swimming').lightbox();
        });
    }


    // Slider
    if (apclk('#slider .detail-content').length > 0) {
        var sliderObj;
        isMobile = navigator.userAgent.match(/(iPhone|iPod|Android|BlackBerry|iPad|IEMobile|Opera Mini)/);

        sliderObj = apclk('#bottom-sec').bxSlider({
            mode: 'horizontal',
            pager: false,
            controls: true,
            auto: false,
            speed: 400,
            easing: 'easeInExpo',
            infiniteLoop: true,
            useCSS: false
        });

        apclk('.top-banner').bxSlider({
            mode: 'horizontal',
            pager: false,
            speed: 1000,
            easing: 'fade',
            onSliderLoad: function() {
                apclk('.top-row strong').css('display', 'none');
                apclk('.top-row strong').eq(0).css('display', 'block');

            },
            onSlideNext: function(currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {

                sliderEffect(currentSlideHtmlObject);
                apclk('.detail .bx-next').trigger('click');

            },
            onSlidePrev: function(currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {

                sliderEffect(currentSlideHtmlObject);
                apclk('.detail .bx-prev').trigger('click');
            }
        });

        function sliderEffect(index) {
            apclk('.top-row strong').eq(index).fadeIn(1000);
            apclk('.top-row strong').eq(index).siblings('strong').fadeOut(1000);
        }

        apclk('.prv').on('click', function() {
            apclk('.bx-prev').trigger('click');
        });

        apclk('.next').on('click', function() {
            apclk('.bx-next').trigger('click');
        });
    }

    //  Counter
    apclk('.countdown').final_countdown({
        'start': 0,
        'end': Date.parse(new Date(2017, 8, 30))/1000,
        'now': Date.parse(new Date())/1000,
        seconds: {
            borderColor: '#71b100',
            borderWidth: '6'
        },
        minutes: {
            borderColor: '#71b100',
            borderWidth: '6'
        },
        hours: {
            borderColor: '#71b100',
            borderWidth: '6'
        },
        days: {
            borderColor: '#71b100',
            borderWidth: '6'
        }        
    });

    // Header shadow
    apclk(window).scroll(function(){
        var offset = apclk(".header-top").offset();
        if (offset.top > 80)
        {
            apclk(".shadow").show()
        }
        else
        {
            apclk(".shadow").hide()
        } 
    });

    //WOW Scroll Spy
    new WOW().init();
});