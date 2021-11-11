
(function ($) {
  "use strict";

  var fullHeight = function () {
    $(".js-fullheight").css("height", $(window).height());
    $(window).resize(function () {
      $(".js-fullheight").css("height", $(window).height());
    });
  };
  fullHeight();

  // loader
  var loader = function () {
    setTimeout(function () {
      if ($("#ftco-loader").length > 0) {
        $("#ftco-loader").removeClass("show");
      }
    }, 1);
  };
  loader();

  // Scrollax
//   $.Scrollax();

  // Burger Menu
  var burgerMenu = function () {
    $("body").on("click", ".js-fh5co-nav-toggle", function (event) {
      event.preventDefault();

      if ($("#ftco-nav").is(":visible")) {
        $(this).removeClass("active");
      } else {
        $(this).addClass("active");
      }
    });
  };
  burgerMenu();

  var contentWayPoint = function () {
    var i = 0;
    $(".ftco-animate").waypoint(
      function (direction) {
        if (
          direction === "down" &&
          !$(this.element).hasClass("ftco-animated")
        ) {
          i++;

          $(this.element).addClass("item-animate");
          setTimeout(function () {
            $("body .ftco-animate.item-animate").each(function (k) {
              var el = $(this);
              setTimeout(
                function () {
                  var effect = el.data("animate-effect");
                  if (effect === "fadeIn") {
                    el.addClass("fadeIn ftco-animated");
                  } else if (effect === "fadeInLeft") {
                    el.addClass("fadeInLeft ftco-animated");
                  } else if (effect === "fadeInRight") {
                    el.addClass("fadeInRight ftco-animated");
                  } else {
                    el.addClass("fadeInUp ftco-animated");
                  }
                  el.removeClass("item-animate");
                },
                k * 50,
                "easeInOutExpo"
              );
            });
          }, 0);
        }
      },
      { offset: "95%" }
    );
  };
  contentWayPoint();


})(jQuery);

// this makes the height of each page equal to the height of the window
// $('.page').css('height', $( window ).height());

// scrollspy section
(function ($) {
  //variable that will hold the href attr of the links in the menu
  var sections = [];
  //variable that stores the id of the section
  var id = false;
  //variable for the selection of the anchors in the navbar
  var $navbara = $("#navi a");

  $navbara.click(function (e) {
    //prevent the page from refreshing
    e.preventDefault();
    //set the top offset animation and speed
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - 180,
      },
      500
    );
    hash($(this).attr("href"));
  });

  //select all the anchors in the navbar one after another
  $navbara.each(function () {
    // and adds them in the sections variable
    sections.push($($(this).attr("href")));
  });
  $(window).scroll(function (e) {
    // scrollTop retains the value of the scroll top with the reference at the middle of the page
    var scrollTop = $(this).scrollTop() + $(window).height() / 2;
    //cycle through the values in sections array
    for (var i in sections) {
      var section = sections[i];
      //if scrollTop variable is bigger than the top offset of a section in the sections array then
      if (scrollTop > section.offset().top) {
        var scrolled_id = section.attr("id");
      }
    }
    if (scrolled_id !== id) {
      id = scrolled_id;
      $($navbara).removeClass("current");
      $('#navi a[href="#' + id + '"]').addClass("current");
    }
  });
})(jQuery);


$(function () {
  $(".progress").each(function () {
    var value = $(this).attr("data-value");
    var left = $(this).find(".progress-left .progress-bar");
    var right = $(this).find(".progress-right .progress-bar");

    if (value > 0) {
      if (value <= 50) {
        right.css("transform", "rotate(" + percentageToDegrees(value) + "deg)");
      } else {
        right.css("transform", "rotate(180deg)");
        left.css(
          "transform",
          "rotate(" + percentageToDegrees(value - 50) + "deg)"
        );
      }
    }
  });

  function percentageToDegrees(percentage) {
    return (percentage / 100) * 360;
  }
});
