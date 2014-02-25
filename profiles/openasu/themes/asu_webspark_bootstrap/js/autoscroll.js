(function ($) {
  Drupal.behaviors.asuAutoScroll = {
    attach: function(context, settings) {
      if ( screen.width <= 930 ) {
        $("#asu_mobile_button").click(function (){
          var $this = $(this),
            clickNum = $this.data('clickNum');
          if (!clickNum) clickNum = 1;
          if (clickNum == 1) {
            setTimeout(function(){
              $('html, body').animate({
                scrollTop: $("#asu_mobile_hdr").offset().top
              }, 1000);
            }, 500);
            $this.data('clickNum', ++clickNum);
          }
        });
      }
    }
  };
})(jQuery);
