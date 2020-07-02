$(document).ready(function() {

   /* window.addEventListener('resize', setHeight);
    //$('#c1').on('slide.bs.carousel', setHeight);
    $('.nav-link').on('click', recall_menu);



    var hs = [];
    function setHeight(){
        var x = 32;
        var y = 35;
        if ($(window).width() <= 1200) {
            var h = $(".img1").css("height");
            if(h === "0px"){
                h = hs[hs.length - 1];
                hs.splice(0, hs.length - 1);
            }

            x -= (1200 - $(window).width()) * (17 / 789);
            y -= (1200 - $(window).width()) * (2 / 1789);

            if ($(window).width() === 1200){
                x = 32;
            }

            $(".img1").css("height", "auto");
            $(".img2").css("height", h);
            $("h1").css("font-size", x + 10);
            $(".f1").css("font-size", x);
            $(".f2").css("font-size", x - 1);
            $(".projects").css("font-size", x - 3);
            $("h2").css("font-size", x + 5);
            hs.push(h);


        }
        else if ($(window).width() <= 1200){

            $(".img1").css("height", 730);
            $(".img2").css("height", 730);
            $(".hp").css("font-size", 60);
            $(".hp1").css("font-size", "2.5em");
            $(".f1").css("font-size", 32);
            $(".f2").css("font-size", 28);
            $(".projects").css("font-size", 20);
            $("h2").css("font-size", "2em");
            $(".carousel").css("padding-top", 50);

        }
    }*/

    function recall_menu(){
        if($(window).width() <= 768){
            $(".navbar-toggler").click();
        }
    }


    $("#nav1 ul li a[href^='#']").on('click', function (e) {

        e.preventDefault();

        var hash = this.hash;

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

    $(".jumbotron1 .container1 .centered_down a[href^='#']").on('click', function (e) {
        e.preventDefault();

        var hash = this.hash;

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



});