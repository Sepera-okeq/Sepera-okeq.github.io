   
   $(document).ready(function()
   {
      $("a[href*='#header']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#header').offset().top }, 600, 'easeOutBack');
      });
      $(document).on('click','.ThemeableMenu1-navbar-collapse.in',function(e)
      {
         if ($(e.target).is('a') && ($(e.target).attr('class') != 'dropdown-toggle')) 
         {
            $(this).collapse('hide');
         }
      });
      $("#Carousel1").bootstrapcarousel({interval:3000, pause: false});
      $("a[href*='#section1']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#section1').offset().top }, 600, 'easeOutBack');
      });
      $("a[href*='#section2']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#section2').offset().top }, 600, 'easeOutBack');
      });
      $("a[href*='#section3']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#section3').offset().top }, 600, 'easeOutBack');
      });
      $("a[href*='#pricing']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#pricing').offset().top }, 600, 'easeOutBack');
      });
      function skrollrInit()
      {
         skrollr.init({forceHeight: false, mobileCheck: function() { return false; }, smoothScrolling: false});
      }
      skrollrInit();
   });
