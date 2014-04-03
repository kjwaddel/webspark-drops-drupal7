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
              $("body, html").animate({
                scrollTop: $("#asu_mobile_hdr").offset().top
                //$(document).scrollTop();
              }, 1000);
            }, 0);
            $this.data('clickNum', ++clickNum);
          }
        });
      }
    }
  };
})(jQuery);