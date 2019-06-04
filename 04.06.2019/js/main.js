$(document).ready(function() {
    if (scrollY > 100) {
        $("header").css("background-color", "white");
        $(".navbar-brand").attr("style", "color: black !important");
        $(".navbar-nav .nav-link ").attr("style", "color: black !important");
    } else {
        $("header").css("background-color", "");
        $(".navbar-brand").attr("style", "");
        $(".navbar-nav .nav-link ").attr("style", "");
    }

    $(window).scroll(function() {
        if (scrollY > 100) {
            $("header").css("background-color", "white");
            $(".navbar-brand").attr("style", "color: black !important");
            $(".navbar-nav .nav-link ").attr("style", "color: black !important");
        } else {
            $("header").css("background-color", "");
            $(".navbar-brand").attr("style", "");
            $(".navbar-nav .nav-link ").attr("style", "");
        }
    })

    $(".about").click(scrollDown);

    function scrollDown(e) {
        e.preventDefault();
        $("html,body").animate({
            scrollTop: $("#about").offset().top
        })
    }

    $(".navbar-brand").click(function() {
        $("html,body").animate({
            scrollTop: 0
        })
    })



})