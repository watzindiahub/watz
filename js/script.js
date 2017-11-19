$(document).ready(function() {
    $(document).on("contextmenu",function(e){
        return false;
    });
});
document.onkeypress = function (event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
        return false;
    }
};
document.onmousedown = function (event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
        return false;
    }
};
document.onkeydown = function (event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
        return false;
    }
};
document.onkeydown = function(e) {
    if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {
        return false;
    }
    return false;
};

$(document).ready(function(){
    if($(window).width() <= 768 || window.matchMedia('(max-width: 768px)').matches || window.innerWidth <= 768){
        $('#desktopView').remove();
        $('.button-collapse').sideNav({
                menuWidth: 300,
                closeOnClick: true
            }
        );
        $('.modal').modal({
                dismissible: true,
                opacity: .5,
                inDuration: 300,
                outDuration: 200,
                startingTop: '4%',
                endingTop: '10%'
            }
        );
        $('.scrollspy').scrollSpy();
        $('.welcome, .app-service > div>.card, .back>i').on('click', function(){
            $('#contentArea').toggleClass('active');
            if($('#contentArea').hasClass('active')){
                $('#body').css('overflow-y','hidden');
            }else{
                $('#body').css('overflow-y','initial');
            }
            return false;
        });
        $('.welcome, .app-service > div >.card').on('click', function(e) {
            var getImg = $(this).find('img').attr('src');
            var title = $(this).find('h5').text();
            var details = $(this).find('p').text();
            var setClass = $(this).context.classList[1];
            if(getImg){
                $('.setimg').show();
                $('.setimg').attr('src', getImg);
            }else{
                $('.setimg').hide();
                $('.contentS > .cont-header').addClass(setClass);
            }
            $('.cont-body > h4').html(title);
            $('.cont-body > p').html(details);
        });

        $('.drop-down').dropdown({
            inDuration: 300,
            outDuration: 225,
            alignment: 'left',
            gutter: 0,
            belowOrigin: false,
            stopPropagation: false
        });
        $('.modal').modal({
                dismissible: true, opacity: .5, inDuration: 300,outDuration: 200,
                complete: function() {  Materialize.toast('Successfully Submitted..', 3000) }
            }
        );
        $(window).scroll(function(){
            var scroll = $(window).scrollTop();
            if (scroll >= 150){
                $('nav').addClass('red lighten-1').removeClass('box-showdow-none');
                $('#introFab').addClass('scale-out');
                $('.parallax-effect').addClass('op-0');
                $('.brand-logo').addClass('logo-eff');
                $('.intro-bg > div').animate({

                });
            }
            else {
                $('nav').removeClass('red lighten-1').addClass('box-showdow-none');
                $('#introFab').removeClass('scale-out');
                $('.parallax-effect').removeClass('op-0');
                $('.brand-logo').removeClass('logo-eff');
                $('.intro-bg > div').animate({

                });
            }
        });
    }
    else if ($(window).width() >= 769 || window.matchMedia('(min-width: 769px)').matches || window.innerWidth >= 769){
        console.log("desktop")
        $('.mobile, #mobileView').empty();
        jQuery('body').vegas({
            delay: 9000,
            timer: false,
            transitionDuration: 3000,
            overlay:true,
            cover:true,
            slides: [
                { src: 'img/slider/webdesigning.jpg'},
                { src: 'img/slider/webdesigning-2.jpg'}
            ],
            transition: 'swirlRight',
            animation: 'kenburns'
        });
        // Toogle Menu
        jQuery('#menu-icon-wrapper2').on('click', function() {
            jQuery('#mobileMenu').toggleClass('open');
        });
        var winHeight = jQuery(window).height()-122;
        var fullHeight = jQuery(window).height();
        jQuery('#slider').css({
            'height' : fullHeight+'px'
        });
        // PAGE SCROLL
        $(function() {
            $('a.page-scroll').bind('click', function(event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: ($($anchor.attr('href')).offset().top - 62)
                }, 1500, 'easeInOutExpo');
                event.preventDefault();
            });
        });
        jQuery(window).scroll(function() {
            if ($(this).scrollTop()>1000) {
                $(".topMenu").addClass('in');
            } else {
                $(".topMenu").removeClass('in');
            }
        });
        /*SCROLL FUNCTIONS*/
        $('body').scrollspy({
            target: 'nav',
            offset: 65
        });
        //GO TO TOP
        $('.topMenu').click(function(){
            $('html, body').animate({scrollTop : 0},800);
            return false;
        });
        $('#customers-testimonials').owlCarousel({
            loop: true,
            center: true,
            items: 3,
            margin: 0,
            autoplay: true,
            dots:true,
            autoplayTimeout: 8500,
            smartSpeed: 450,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1170: {
                    items: 3
                }
            }
        });
        var owl = $('.owl-carousel');
        owl.owlCarousel({
            loop: true,
            nav: false,
            margin: 10,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                960: {
                    items: 5
                },
                1200: {
                    items: 6
                }
            }
        });
        owl.on('mousewheel', '.owl-stage', function(e) {
            if (e.deltaY > 0) {
                owl.trigger('next.owl');
            } else {
                owl.trigger('prev.owl');
            }
            e.preventDefault();
        });
        //ANIMATIONS SCRIPTS
        //ALL Slider ANIMATIONS
        jQuery('#slider > div:first-child').attr({'data-wow-duration':'1s','data-wow-delay':'1s'}).addClass('wow zoomInDown');
        jQuery('#slider > div').attr({'data-wow-duration':'1s','data-wow-delay':'0.8s'}).addClass('wow zoomInDown');
        jQuery('#slider > div:last-child').attr({'data-wow-duration':'1s','data-wow-delay':'1s'}).addClass('wow zoomInDown');
        //ALL GETSTARTED ANIMATIONS
        jQuery('.getStarted > div > h3, .getStarted > div > p').attr({'data-wow-duration':'1s'}).addClass('wow slideInDown');
        //ALL WELCOME ANIMATIONS
        jQuery('.welCome>div>div:first-child>img').attr({'data-wow-iteration':'infinite','data-wow-duration':'3s'}).addClass('wow pulse');
        //ALL TITLE ANIMATIONS
        jQuery('.pagetitle > .title, .pagetitle > p').attr({'data-wow-duration':'1s'}).addClass('wow slideInDown');
        //SERVICE PAGE ANIMATIONS
        jQuery('.services > .flexbox > div:first-child').attr({'data-wow-duration':'1.2s'}).addClass('wow bounceIn');
        jQuery('.services > .flexbox > div:nth-child(2)').attr({'data-wow-duration':'1.2s'}).addClass('wow bounceIn');
        jQuery('.services > .flexbox > div:nth-child(3)').attr({'data-wow-duration':'1.2s'}).addClass('wow bounceIn');
        jQuery('.services > .flexbox > div:last-child').attr({'data-wow-duration':'1.2s'}).addClass('wow bounceIn');
        //TECH PAGE ANIMATIONS
        //SERVICE PAGE ANIMATIONS
        jQuery('.tech > .flexbox > div').attr({'data-wow-duration':'1.2s'}).addClass('wow animated fadeInUp');

    }

});// jQuery Ends

window.onload = function() {
    var materializeUrl = 'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js';

}

if($(window).width() >= 769 || window.matchMedia('(min-width: 769px)').matches || window.innerWidth >= 769){
    /*FIND WINDOW LOAD TIME*/
    window.onload = function () {
        if (navigator.onLine) {
            console.log('online');
        }else {
            document.getElementsByClassName('offline')[0].style.display = 'block';
        }
        //window Load Time
        /*var loadTime = window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart;
        for(var i=0; i<=loadTime; i++) {
            var getVal = Math.floor(((i/100) * 100)).toFixed(2);
            var loaderLength = document.getElementById('load').style.width = getVal/10+'%';
        }*/
        //LOADER
        jQuery(".loader").delay(800).animate({opacity:0}, 800, "swing", function(){
            jQuery(".loader").fadeOut("slow");
        });
        //LOGO ANIMATIONS
        var functionBasedDuration = anime({
            targets: '#functionBasedDuration .el',
            translateY: 30,
            direction: 'alternate',
            loop: true,
            duration: function(el, i, l) {
                return 1000 + (i * 1000);
            }
        });
    };

//Media Queries
    var desktopMq = window.matchMedia('(min-width: 1199px)');
    var mobile = window.matchMedia('(max-width: 768px)');
    var desktop = window.matchMedia('(min-width: 769px)');
    var desktopMd = window.matchMedia('(min-width: 1025px)');
    if(desktopMd.matches){
        jQuery(function(){
            jQuery(window).scroll(function() {
                if ($(this).scrollTop()>1000) {
                    $(".topMenu").addClass('in');
                    var header = jQuery('.watzMenu').height();
                    jQuery('aside').css('top', header)
                } else {
                    $(".topMenu").removeClass('in');
                    var header2 = jQuery('.watzMenu').height();
                    jQuery('aside').css('top', header2)
                }
            });
        });
    }
    if(desktop.matches) {
        jQuery(window).scroll(function() {
            var scroll = getCurrentScroll();
            var mQ = window.matchMedia('(min-width: 769px)');
            if ( scroll >= 468 ) {
                jQuery('nav').addClass('animateHeight');
            }
            else {
                jQuery('nav').removeClass('animateHeight');
            }
        });
        function getCurrentScroll() {
            return window.pageYOffset || document.documentElement.scrollTop;
        }
    }
    if(mobile.matches) {
        jQuery('.onMobile>ul').addClass('mobileMenu');
        jQuery('#menu-icon-wrapper2').on('click', function() {
            jQuery('.mobileMenu').toggleClass('open');
        });
    }
    if(desktopMq.matches){
        // NICE SCROLL
        var niceScroll = $("html").niceScroll({
            cursorcolor:"#F44336",
            cursorborder: "0px solid #fff",
            touchemulate:true
            // emulatetouch: true
        });
        var scrollAnimation = new WOW().init();
    }


    (function() {
        /* In animations (to close icon) */

        var beginAC = 80,
            endAC = 320,
            beginB = 80,
            endB = 320;

        function inAC(s) {
            s.draw('80% - 240', '80%', 0.3, {
                delay: 0.1,
                callback: function() {
                    inAC2(s)
                }
            });
        }

        function inAC2(s) {
            s.draw('100% - 545', '100% - 305', 0.6, {
                easing: ease.ease('elastic-out', 1, 0.3)
            });
        }

        function inB(s) {
            s.draw(beginB - 60, endB + 60, 0.1, {
                callback: function() {
                    inB2(s)
                }
            });
        }

        function inB2(s) {
            s.draw(beginB + 120, endB - 120, 0.3, {
                easing: ease.ease('bounce-out', 1, 0.3)
            });
        }

        /* Out animations (to burger icon) */

        function outAC(s) {
            s.draw('90% - 240', '90%', 0.1, {
                easing: ease.ease('elastic-in', 1, 0.3),
                callback: function() {
                    outAC2(s)
                }
            });
        }

        function outAC2(s) {
            s.draw('20% - 240', '20%', 0.3, {
                callback: function() {
                    outAC3(s)
                }
            });
        }

        function outAC3(s) {
            s.draw(beginAC, endAC, 0.7, {
                easing: ease.ease('elastic-out', 1, 0.3)
            });
        }

        function outB(s) {
            s.draw(beginB, endB, 0.7, {
                delay: 0.1,
                easing: ease.ease('elastic-out', 2, 0.4)
            });
        }

        /* Scale functions */

        function addScale(m) {
            m.className = 'menu-icon-wrapper scaled';
        }

        function removeScale(m) {
            m.className = 'menu-icon-wrapper';
        }

        /* Awesome burger scaled */

        var pathD = document.getElementById('pathD'),
            pathE = document.getElementById('pathE'),
            pathF = document.getElementById('pathF'),
            segmentD = new Segment(pathD, beginAC, endAC),
            segmentE = new Segment(pathE, beginB, endB),
            segmentF = new Segment(pathF, beginAC, endAC),
            wrapper2 = document.getElementById('menu-icon-wrapper2'),
            trigger2 = document.getElementById('menu-icon-trigger2'),
            toCloseIcon2 = true,
            dummy2 = document.getElementById('dummy2');

        wrapper2.style.visibility = 'visible';

        trigger2.onclick = function() {
            addScale(wrapper2);
            if (toCloseIcon2) {
                inAC(segmentD);
                inB(segmentE);
                inAC(segmentF);

                // dummy2.className = 'dummy dummy--active';
            } else {
                outAC(segmentD);
                outB(segmentE);
                outAC(segmentF);

                // dummy2.className = 'dummy';
            }
            toCloseIcon2 = !toCloseIcon2;
            setTimeout(function() {
                removeScale(wrapper2)
            }, 450);
        };

    })();

}