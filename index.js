"use strict";
$(window).on('load', function () {
    $(".loading-overlay").delay(350).fadeOut("slow", function () {
      $(".loading-overlay").toggleClass('d-flex');
    });
});
