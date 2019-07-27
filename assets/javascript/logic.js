$(document).ready(function(){
    $('.parallax').parallax();
    $('.collapsible').collapsible();

    $("#bio").on("click", function() {
        $('html, body').animate({
            scrollTop: $("#collap-head-me").offset().top
          }, 600);
    });

    $("#projects").on("click", function() {
        $('html, body').animate({
            scrollTop: $("#collap-head-projects").offset().top
          }, 600);
    });

    $("#competitive").on("click", function() {
        $('html, body').animate({
            scrollTop: $("#cr").offset().top
          }, 600);
    });

    $("#top").on("click", function() {
        $('html, body').animate({
            scrollTop: $("#nav-bg").offset().top
          }, 600);
    });

    $("#collap-head-me").on("click", function() {
        $('html, body').animate({
            scrollTop: $("#collap-head-me").offset().top
          }, 600);
    });

    $("#collap-head-projects").on("click", function() {
        $('html, body').animate({
            scrollTop: $("#collap-head-projects").offset().top
          }, 600);
    });

  });

