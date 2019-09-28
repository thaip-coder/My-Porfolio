$(document).ready(function(){

    /* ---------- Initiate Parallax ---------- */
    $('.parallax').parallax();

    /* ---------- Initiate Collapsible ---------- */
    $('.collapsible').collapsible();

    /* ---------- Scroll to About Me ---------- */
    $("#bio").on("click", function() {
        $('html, body').animate({
            scrollTop: $("#collap-head-me").offset().top
          }, 600);
    });

    /* ---------- Scroll to Projects ---------- */
    $("#projects").on("click", function() {
        $('html, body').animate({
            scrollTop: $("#collap-head-projects").offset().top
          }, 600);
    });

    /* ---------- Scroll to Footer ---------- */
    $("#competitive").on("click", function() {
        $('html, body').animate({
            scrollTop: $("#cr").offset().top
          }, 600);
    });

    /* ---------- Scroll back to Navbar ---------- */
    $("#top").on("click", function() {
        $('html, body').animate({
            scrollTop: $("#nav-bg").offset().top
          }, 600);
    });

    /* ---------- Focuses About Me ----------*/
    $("#collap-head-group").on("click", function() {
        $('html, body').animate({
            scrollTop: $("#collap-head-group").offset().top
          }, 600);
    });

    /* ---------- Focuses Projects ----------*/
    $("#collap-head-projects").on("click", function() {
        $('html, body').animate({
            scrollTop: $("#collap-head-projects").offset().top
          }, 600);
    });

  });

