(function ($) {
    "use strict"; // Start of use strict

    $('.menu').click(function () {
        if ($('#overlay-menu').width() > 0) {
            $('.fa-navicon').show();
            $('.fa-times').hide();
            $('#overlay-menu').width('0%');
            $('#overlay-menu').height('0%');
        }
        else {
            $('#overlay-menu').width('100%');
            $('#overlay-menu').height('100%');
            $('.fa-navicon').hide();
            $('.fa-times').show();
        }
    })

    $('.overlay-content a').click(function () {
        $('#overlay-menu').height('0%');
        $('#overlay-menu').width('0%');
        $('.fa-navicon').show();
        $('.fa-times').hide();
    })

    // Smooth scrolling using jQuery easing
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 48)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 48
    });
 

    // Collapse the navbar when page is scrolled
    $(window).scroll(function () {
        if ($("#mainNav").offset().top > 100) {
            $('.navbar-toggler i').css('color', '#8a8c8a');
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
            $('.navbar-toggler i').css('color', '#fff');
        }
    });

    // Scroll reveal calls
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    // Magnific popup calls
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        title: 'test',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

})(jQuery); // End of use strict

