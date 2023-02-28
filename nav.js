$("body").css("paddingTop", $(".navbar").innerHeight());

$(function () {
  $(".navbar li a").click(function (e) {
    "use strict";
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $("#" + $(this).data("scroll")).offset().top + 1,
      },
      1000
    );
  });

  // Add Active Class on Navbar Link and Remove from the Siblings(if any exist!)

  $(".navbar li a").click(function () {
    // $(".navbar a").removeClass("active");
    // $(this).addClass("active");

    $(this)
      .addClass("active")
      .parent()
      .siblings()
      .find("a")
      .removeClass("active");
  });

  // Sync Navbar Links With Sections

  $(window).scroll(function () {
    $(".block").each(function () {
      if ($(window).scrollTop() >= $(this).offset().top) {
        var blockId = $(this).attr("id");
        $(".navbar a").removeClass("active");
        $('.navbar li a[data-scroll="' + blockId + '"]').addClass("active");
      }
    });
  });
});
