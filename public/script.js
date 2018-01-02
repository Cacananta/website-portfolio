$(document).ready(function () {

  // Parallax Scrolling

      // var scrollTop = $('window').scrollTop();

  function parallaxScroll() {
      var scrollTop = $(window).scrollTop();
      var windowHeight = $(window).height();
      //parallax up
      $('.parallax-1').css('top', ((windowHeight * 0.75) - (scrollTop * 2.0)) + 'px');
      $('.parallax-2').css('top', ((windowHeight * 0.75) - (scrollTop * 2.5)) + 'px');
      $('.parallax-3').css('top', ((windowHeight * 0.75) - (scrollTop * 1.5)) + 'px');
      $('.parallax-4').css('top', ((windowHeight * 0.75) - (scrollTop * 1.0)) + 'px');
      //parallax down
      $('.parallax-5').css('top', ((windowHeight * 1.3) + (scrollTop * 1.05)) + 'px');
      $('.parallax-6').css('top', ((windowHeight * 1.3) + (scrollTop * 1.06)) + 'px');
      $('.parallax-7').css('top', ((windowHeight * 1.3) + (scrollTop * 1.07)) + 'px');
      $('.parallax-8').css('top', ((windowHeight * 1.3) + (scrollTop * 1.08)) + 'px');
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
          }, 2500);
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

  // Skill Container Animation
  //   $('.skill-container').each(function(){
  //   $(this).find('.skillbar').animate({
  //     width:$(this).attr('name')
  //   },2500);
  // });
});