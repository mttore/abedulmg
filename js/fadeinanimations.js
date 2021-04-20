jQuery(function($) {
  
    // Function which adds the 'animated' class to any '.animatable' in view
    var doAnimations = function() {
      
      // Calc current offset and get all animatables
      var offset = $(window).scrollTop() + $(window).height(),
          $animatables = $('.animatable');
          $animatables2 = $('.animatable2');
          
      // Unbind scroll handler if we have no animatables
      if ($animatables.length == 0) {
        $(window).off('scroll', doAnimations);
      }

      // Check all animatables and animate them if necessary
        $animatables.each(function(i) {
          var $animatable = $(this);
            if (($animatable.offset().top + $animatable.height() - 200) < offset) {
              $animatable.removeClass('animatable').addClass('animated');
              }
      });
      $animatables2.each(function(i) {
        var $animatable2 = $(this);
          if (($animatable2.offset().top + $animatable2.height() - 400) < offset) {
            $animatable2.removeClass('animatable2').addClass('animated');
            }
    });
  
      };
    
    // Hook doAnimations on scroll, and trigger a scroll
      $(window).on('scroll', doAnimations);
    $(window).trigger('scroll');
  
  });