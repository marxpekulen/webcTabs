/**
 * webcTabs v1.0.1
 * Copyright 2019 Maxim Pikulin
 * Licensed under: SEE LICENSE IN https://github.com/marxpekulen/webcTabs/blob/master/LICENSE
 */

(function( $ ) {
  $.fn.webcTabs = function(options) {

    var settings = $.extend( {
      'links'      : $(this).find("a"),
      'tabContent' : $(".webcTab"),
      'hideFirst' : true
    }, options);

    if (settings.hideFirst) {
      settings.tabContent.not(":first-child").hide();
    }

    settings.links.click(function (e) {
      e.preventDefault();
      $(this).parent().addClass("active");
      $(this).parent().siblings().removeClass("active");
      var tab = $(this).attr("href");
      settings.tabContent.not(tab).css("display", "none");
      $(tab).fadeIn();
    });

  };
})(jQuery);