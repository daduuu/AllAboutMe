$(document).ready(function() {
    window.addEventListener('resize', setHeight);
    $('#c1').on('slide.bs.carousel', setHeight);
    $('.nav-link').on('click', recall_menu);

    var hs = [];
    function setHeight(){
        if ($(window).width() <= 1200) {
            var h = $(".img1").css("height");
            if(h === "0px"){
                h = hs[hs.length - 1];
                hs.splice(0, hs.length - 1);
            }
            $(".carousel").css("height", "auto");
            $(".img1").css("height", "auto");
            $(".img2").css("height", h);
            $("h1").css("font-size", 25);
            $(".f1").css("font-size", 14);
            $(".projects").css("font-size", 12);
            $("h2").css("font-size", 20);
            hs.push(h);

        }
        else{
            $(".carousel").css("height", 730);
            $(".img1").css("height", 730);
            $(".img2").css("height", 730);
            $("h1").css("font-size", 55);
            $(".f1").css("font-size", 28);
            $(".projects").css("font-size", 20);
            $("h2").css("font-size", "2em");
            $(".carousel").css("padding-top", 50);
        }
    }

    function recall_menu(){
        if($(window).width() <= 768){
            $(".navbar-toggler").click();
        }
    }

    $("#nav1 ul li a[href^='#']").on('click', function (e) {

        e.preventDefault();

        // store hash
        var hash = this.hash;

        // animate
        if($(window).width() <= 768){
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {

                window.location.hash = hash;
            });
        }
        else {
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 600, function () {

                window.location.hash = hash;
            });
        }
});















    /*$(this).scrollTop(0);
    var scrolltimer, scrolltimer2;
    window.addEventListener('scroll', function(){
        clearTimeout(scrolltimer);
        clearTimeout(scrolltimer2);

        if(document.body.className.indexOf('disable-hover') == -1) {
            document.body.className += ' disable-hover';
        }

        scrolltimer = setTimeout(function(){
            var classes = document.body.className.split(" ");
            for(var i = 0; i<classes.length; i++){
                if( classes[i] == 'disable-hover' )
                    classes.splice(i,1);
            }
            document.body.className = classes.join(" ");
        },200);

        scrolltimer2 = setTimeout(function(){
            if ($(window).scrollTop() > 0) {
                $('#n').addClass('sticky');
            } else {
                $('#n').removeClass('sticky');
            }
        },200);
    }, false);

    (function($) {
        $.fn.goTo = function() {
            $('html, body').animate({
                scrollTop: ( $(this).offset().top - 30) + 'px'
            }, 2000);
            return this;
        }
    })(jQuery);

    $('#n').find("a[href*=\\#]").click(function(e){
        e.preventDefault();
        var target = $(this).attr('href');
        $(target).goTo();
    });*/
});