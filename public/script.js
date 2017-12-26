$(document).ready(function () {

  // Parallax Scrolling
console.log(Math.round((($('table').position().top))));

      // var scrollTop = $('window').scrollTop();

  function parallaxScroll() {
      var scale = 0.1;
      var scrollTop = $(window).scrollTop();
      $('.parallax-port').each(function () {
        $(this).css('top', Math.round(((0 - scrollTop))) + 'px');
      });
  }

  // Smooth Scrolling
  $(function () {
    $('a[href*=\\#]:not([href=\\#])').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1500);
          return false;
        }
      }
    })
  });

  // Typing Animation
  (function($) {
    $.fn.writeText = function(content) {
        var contentArray = content.split(""),
            current = 0,
            elem = this;
        setInterval(function() {
            if(current < contentArray.length) {
                elem.text(elem.text() + contentArray[current++]);
            }
        }, 80);
    };
    
  })(jQuery);

  // Function Calls 
  $(window).bind('scroll', function () {
    parallaxScroll();
  });
  parallaxScroll();

  $("#write-text").writeText('FULL STACK JAVASCRIPT DEVELOPER');

});

