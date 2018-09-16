$(document).ready(function() {

    $("#nav1 ul li a[href^='#']").on('click', function (e) {

        e.preventDefault();

        // store hash
        var hash = this.hash;

        // animate
        if($(window).width() <= 768){
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 220
            }, 1000, function () {

                window.location.hash = hash - 220;
            });
        }
        else {
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 50
            }, 600, function () {

                window.location.hash = hash - 50;
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