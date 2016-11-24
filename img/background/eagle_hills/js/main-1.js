$(document).ready(function () {
    $('#projects-dd').bind('change', function (event) {

        var i = $('#projects-dd').val();

        if (i == "BelgradeWaterfront" || i == "Marsazayed" || i == "BabAlBahr" || i == "StRegis" || i == "MarassiAlBahrainBahrain") {
            $('#divid').show();
            $('#divid2').hide();
        }
        else if (i == "CentenaryCity") {
            $('#divid').hide(); // hide the first one
            $('#divid2').show(); // show the other one

        }
    });
    (function (doc) {
        var viewport = document.getElementById('viewport');
        if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i)) {
            viewport.setAttribute("content", "initial-scale=0.58", "user-scalable=no");
        } else if (navigator.userAgent.match(/iPad/i)) {
            viewport.setAttribute("content", "initial-scale=0.7");
        }
    }(document));


    $(".page-nav ul li a, #register-btn, .register-callout h3 a").click(function (event) {

       
        if (window.location.href.indexOf("about") == -1 && window.location.href.indexOf("terms_and_conditions") == -1 && window.location.href.indexOf("privacy_policy") == -1 && window.location.href.indexOf("marassi_al_bahrain") == -1 && window.location.href.indexOf("Al_Maabar") == -1)
        {
            event.preventDefault();
            //calculate destination place
            var dest = 0;
            if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
                dest = $(document).height() - $(window).height();
            } else {
                dest = $(this.hash).offset().top;
            }
            //go to destination
            $('html,body').animate({ scrollTop: dest }, 1000, 'swing');
            return false;
        }
    });


    $('.nav-desktop ul li').hover(
        function () {
            $(this).find('.subnav').stop().show();
        },
        function () {
            $(this).find('.subnav').stop().hide();
        }
    );
    $('.load-more-copy').click(function () {
        $('.more-copy').show();
        $(this).hide()
    })

    

    
    var allAccordions = $('.accordion div.data');
    var allAccordionItems = $('.accordion .accordion-item');
    $('.accordion > .accordion-item').click(function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).find('.data').slideUp();
        }
        else {
            allAccordions.slideUp();
            allAccordionItems.removeClass('open');
            $(this).addClass('open');
            $(this).find('.data').slideDown();
            return false;
        }
    });
});
$(".carousel > div").each(function () {
    $(this).hover(function () {
        $(this).find('img').attr("src", function (index, attr) {
            return attr.replace(".png", "-active.png");
        });
    },
    function () {
        $(this).find('img').attr("src", function (index, attr) {
            return attr.replace("-active.png", ".png");
        });
    });
});

$(".nav-desktop ul li .nav-projects ul li a").each(function () {
    $(this).hover(function () {
        $(this).find('.nav-img img').attr("src", function (index, attr) {
            return attr.replace(".jpg", "-active.jpg");
        });
    },
    function () {
        $(this).find('.nav-img img').attr("src", function (index, attr) {
            return attr.replace("-active.jpg", ".jpg");
        });
    });
});
$(".explore-block .project-list-img").each(function () {
    $(this).hover(function () {
        $(this).find('img').attr("src", function (index, attr) {
            return attr.replace(".jpg", "-active.jpg");
        });
    },
    function () {
        $(this).find('img').attr("src", function (index, attr) {
            return attr.replace("-active.jpg", ".jpg");
        });
    });
});

$('.nav-btn').unbind('click').click(function () {
    $('.nav-desktop ul').slideToggle();
    $(this).toggleClass('active');
});
$(window).resize(function () {
    if ($(window).width() < 960) {
        $('.nav-desktop ul').css('display', 'none');
    }
    else {
        $('.nav-desktop ul').css('display', 'block');
    }
});
$(".desktop-gallery ul li img").click(function () {
    $(".largerImage img").attr("src", $(this).attr("src"));
});
$(".desktop-gallery").jCarouselLite({
    btnNext: ".next",
    btnPrev: ".prev",
    vertical: true
});
$(window).load(function () {
    // The slider being synced must be initialized first
    $('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 210,
        itemMargin: 0,
        asNavFor: '#slider'
    });

    $('#slider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#carousel"
    });
});


$('.nav-desktop ul li').click(function () {
    //alert("clicked");


    var ss =  $(this);
})