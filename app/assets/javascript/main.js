$(document).ready(function(){

var innerHeight = window.innerHeight - 50;

$('#main-nav .dropdown-toggle').on('click', function() {
  if ($('.dropdown-menu').is(":visible")) {
    $('.dropdown-menu')
    .velocity("transition.slideLeftOut", { duration: 200 })
    .velocity({height:0});
  } else {
    $('.dropdown-menu')
    .velocity("transition.slideLeftIn", { duration: 400 })
    .velocity({height:innerHeight});
  }
  
});


/*============================================
// jQuery no-double-tap-zoom plugin
============================================*/
// Triple-licensed: Public Domain, MIT and WTFPL license - share and enjoy!

(function($) {
  var IS_IOS = /iphone|ipad/i.test(navigator.userAgent);
  $.fn.nodoubletapzoom = function() {
    if (IS_IOS)
      $(this).bind('touchstart', function preventZoom(e) {
        var t2 = e.timeStamp
          , t1 = $(this).data('lastTouch') || t2
          , dt = t2 - t1
          , fingers = e.originalEvent.touches.length;
        $(this).data('lastTouch', t2);
        if (!dt || dt > 500 || fingers > 1) return; // not double-tap

        e.preventDefault(); // double tap - prevent the zoom
        // also synthesize click events we just swallowed up
        $(this).trigger('click').trigger('click');
      });
  };
})(jQuery);

});

(function(document) {
  'use strict';

  document.addEventListener('polymer-ready', function() {
    // Perform some behaviour
    console.log('Polymer is ready to rock!');
  });

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
