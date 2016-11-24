var curSlide;
$(document).ready(function () {
	
  
 $('ul.galleryH').bxSlider({
	 pager: false,
	 auto: true,
	 pause: 10000,
	 nextText : ">",
	 prevText : "<",
	 startSlide: 1
 });
 $(".desktop-gallery ul li img").click(function () {
   // $(".largerImage img").attr("src", $(this).attr("src"));  
  var myIndex=parseInt($(this).attr('id'));
    $('#slider-1').flexslider(myIndex);
    console.log($(this).attr('id'));
});
    $('#projects-dd').bind('change', function (event) {

        var i = $('#projects-dd').val();

        if (i == "BelgradeWaterfront" || i == "CentenaryCity" || i == "Marsazayed" || i == "BabAlBahr" || i == "StRegis" || i == "MarassiAlBahrainBahrain") {
            $('#divid').show();
            //$('#divid2').hide();
        }

        //Dynamically Set Age Group Select Options
        if (i == "CentenaryCity") {
            //var options = [
            //    { text: "Please Select", value: "--" },
            //    { text: "20-29", value: "18-29" },
            //    { text: "30-39", value: "30-39" },
            //    { text: "40-49", value: "40-49" },
            //    { text: "50-59", value: "50-59" },
            //    { text: "60 and above", value: "60 and above" },
            //];

            //$('#AgeGroup').replaceOptions(options);
            $('#AgeGroup').hide();
            $('#AgeGroup2').show();
        }
        else {
            //var options = [
            //    { text: "Please Select", value: "--" },
            //    { text: "18-29", value: "18-29" },
            //    { text: "30-39", value: "30-39" },
            //    { text: "40-49", value: "40-49" },
            //    { text: "50-59", value: "50-59" },
            //    { text: "60 and above", value: "60 and above" },
            //];

            //$('#AgeGroup').replaceOptions(options);
            $('#AgeGroup2').hide();
            $('#AgeGroup').show();
        }




        //else if (i == "CentenaryCity") {
        //    $('#divid').hide(); // hide the first one
        //    $('#divid2').show(); // show the other one

        //}
    });

    //(function ($, window) {
    //    $.fn.replaceOptions = function (options) {
    //        var self, $option;

    //        this.empty();
    //        self = this;

    //        $.each(options, function (index, option) {
    //            $option = $("<option></option>")
    //              .attr("value", option.value)                 
    //              .text(option.text);
    //            self.append($option);
    //        });
    //    };
    //})(jQuery, window);


    (function (doc) {
        var viewport = document.getElementById('viewport');
        if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i)) {
            viewport.setAttribute("content", "initial-scale=0.58", "user-scalable=no");
        } else if (navigator.userAgent.match(/iPad/i)) {
            viewport.setAttribute("content", "initial-scale=0.7");
        }
    }(document));


    $(".page-nav ul li a, #register-btn, .register-callout h3 a").click(function (event) {
        //
        //if (window.location.href.indexOf(UrlDomain) >= 0 || window.location.href.indexOf("belgrade_waterfront") >= 0 ||)
        if (window.location.href.indexOf("media-centre") == -1 && window.location.href.indexOf("about") == -1 && window.location.href.indexOf("terms_and_conditions") == -1 && window.location.href.indexOf("privacy_policy") == -1 && window.location.href.indexOf("Al_Maabar") == -1
            && window.location.href.indexOf("career") == -1
            && window.location.href.indexOf("news-detail") == -1 &&
            window.location.href.indexOf("news-detail-1") == -1 &&
            window.location.href.indexOf("news-detail-2") == -1 &&
            window.location.href.indexOf("news-detail-3") == -1 &&
            window.location.href.indexOf("news-detail-4") == -1 &&
            window.location.href.indexOf("news-detail-5") == -1 &&
            window.location.href.indexOf("news-detail-6") == -1 &&
            window.location.href.indexOf("news-detail-7") == -1 &&
            window.location.href.indexOf("news-detail-8") == -1 ) {
            if ($(this).attr('id')=="external-link"){
             //window.navigate(new Uri("http://www.lamarinamorocco.com/"),"_blank");
             HtmlPage.Window.Navigate(new Uri("http://www.yahoo.com/"), "_blank");
             }
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
     $('.tt-arrow-2').css('display','block');     
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).find('.data').slideUp();
            $(this).find('.tt-arrow-2').css('display','block');
        }
        else {
            allAccordions.slideUp();
            allAccordionItems.removeClass('open');
            $(this).addClass('open');
            $(this).find('.data').slideDown();
            $(this).find('.tt-arrow-2').css('display','none');
            return false;
        }
    });
});
$(".carousel > div").each(function () {
    $(this).hover(function () {
        $(this).find('img').attr("src", function (index, attr) {


            var src = $(this).attr("src")
            var alt = $(this).attr("alt");
          
            $(this).attr("src", alt);
            $(this).attr("alt", src);

          
        

        });
    },
    function () {
        $(this).find('img').attr("src", function (index, attr) {


            var src = $(this).attr("src")
            var alt = $(this).attr("alt");

            $(this).attr("src", alt);
            $(this).attr("alt", src);


           

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


            var src = $(this).attr("src")
            var alt = $(this).attr("alt");

            $(this).attr("src", alt);
            $(this).attr("alt", src);
        });
    },
    function () {
        $(this).find('img').attr("src", function (index, attr) {


            var src = $(this).attr("src")
            var alt = $(this).attr("alt");

            $(this).attr("src", alt);
            $(this).attr("alt", src);

        });
    });
});






$('.nav-btn').click(function () {
    $('.nav-desktop ul').slideToggle();
    $(this).toggleClass('active');
});
$(window).resize(function () {
    if ($(window).width() > 990) {
        //$('.nav-desktop ul').css('display', 'none');
       $('.nav-desktop ul').css('display', 'block');
    }
    else {
        //$('.nav-desktop ul').css('display', 'block');
        $('.nav-desktop ul').css('display', 'none');
       
    }
});

$(".desktop-gallery").jCarouselLite({
    btnNext: ".next",
    btnPrev: ".prev",
    vertical: true
});
$(window).load(function () {
 $('.flexslider').flexslider({
    after: function(slider) {
    window.curSlide = slider.currentSlide;
    }
  });
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
     $('#slider-1').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#carousel"
    });
});


$('.nav-desktop ul li').click(function () {
    //alert("clicked");


    var ss = $(this);
})