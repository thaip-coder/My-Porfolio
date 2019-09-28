$(document).ready(function(){

    /* ---------- Initiate Parallax ---------- */
    $('.parallax').parallax();

    /* ---------- Initiate Collapsible ---------- */
    $('.collapsible').collapsible();

    /* ---------- Scroll to Contact ---------- */
    $("#contact").on("click", function() {
        $('html, body').animate({
            scrollTop: $("#collap-head-me").offset().top
          }, 600);
    });

    /* ---------- Scroll to Projects ---------- */
    $("#personal-proj").on("click", function() {
        $('html, body').animate({
            scrollTop: $("#collap-head-projects").offset().top
          }, 600);
    });

    /* ---------- Scroll to Projects ---------- */
    $("#group-proj").on("click", function() {
      $('html, body').animate({
          scrollTop: $("#collap-head-group").offset().top
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
        if ($("#collap-head-group").hasClass("inactive")) {
          $('html, body').animate({
            scrollTop: $("#collap-head-group").offset().top
          }, 600);
          $("#collap-head-group").removeClass("inactive");
          $("#collap-head-group").addClass("active");
        } else 
        if ($("#collap-head-group").hasClass("active")) {
          $("#collap-head-group").removeClass("active");
          $("#collap-head-group").addClass("inactive");
        };
    });

    /* ---------- Focuses Projects ----------*/
    $("#collap-head-projects").on("click", function() {
      if ($("#collap-head-projects").hasClass("inactive")) {
        $('html, body').animate({
          scrollTop: $("#collap-head-projects").offset().top
        }, 600);
        $("#collap-head-projects").removeClass("inactive");
        $("#collap-head-projects").addClass("active");
      } else 
      if ($("#collap-head-projects").hasClass("active")) {
        $("#collap-head-projects").removeClass("active");
        $("#collap-head-projects").addClass("inactive");
      };
    });

  });
