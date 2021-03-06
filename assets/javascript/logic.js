$(document).ready(function(){

    /* ---------- Initiates Tooltips --------- */
    $(document).ready(function(){
      $('.tooltipped').tooltip();
    });  

    /* ---------- Initiate Parallax ---------- */
    $('.parallax').parallax();

    /* ---------- Initiate Collapsible ---------- */
    $('.collapsible').collapsible();

    /* ---------- Initiate Floating Button ----------*/
      $('.fixed-action-btn').floatingActionButton();

    /* ---------- Scroll to Contact ---------- */
    $("#contact").on("click", function() {
        $('html, body').animate({
            scrollTop: $("#collap-head-contact").offset().top
          }, 600);
    });

    /* ---------- Scroll to Projects ---------- */
    $("#personal-proj").on("click", function() {
        $('html, body').animate({
            scrollTop: $("#collap-head-projects").offset().top
          }, 600);
    });

    /* ---------- Scroll to Group Projects ---------- */
    $("#group-proj").on("click", function() {
      $('html, body').animate({
          scrollTop: $("#collap-head-group").offset().top
        }, 600);
    });

    /* ---------- Scroll to Footer ---------- */
    $("#info").on("click", function() {
        $('html, body').animate({
            scrollTop: $("#footer").offset().top
          }, 600);
    });

    /* ---------- Scroll back to Navbar ---------- */
    $("#top").on("click", function() {
        $('html, body').animate({
            scrollTop: $("#nav-bg").offset().top
          }, 600);
    });

    /* ---------- Focuses Group Projects ----------*/
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

    /* ---------- Focuses Projects ----------*/
    $("#collap-head-contact").on("click", function() {
      if ($("#collap-head-contact").hasClass("inactive")) {
        $('html, body').animate({
          scrollTop: $("#collap-head-contact").offset().top
        }, 600);
        $("#collap-head-contact").removeClass("inactive");
        $("#collap-head-contact").addClass("active");
      } else 
      if ($("#collap-head-contact").hasClass("active")) {
        $("#collap-head-contact").removeClass("active");
        $("#collap-head-contact").addClass("inactive");
      };
    });

  });
