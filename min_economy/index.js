   
   $(document).ready(function()
   {
      $("a[href*='#about']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#about').offset().top }, 600, 'easeOutSine');
      });
      $("a[href*='#expertise']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#expertise').offset().top }, 600, 'easeOutSine');
      });
      $("#PanelLayer").panel({animate: true, animationDuration: 200, animationEasing: 'easeOutCubic', dismissible: false, display: 'push', position: 'left'});
      $("a[href*='#skills']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#skills').offset().top }, 600, 'easeOutSine');
      });
      $("a[href*='#awards']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#awards').offset().top }, 600, 'easeOutSine');
      });
      $("a[href*='#contact']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#contact').offset().top }, 600, 'easeOutSine');
      });
      $("#progressbar_uidesign").progressbar(
      {
         value: 10,
         change: function() 
         {
            $("#progressbar_uidesign-label").text($(this).progressbar('value') + '%');
         }
      });
      $("#progressbar_html").progressbar(
      {
         value: 87,
         change: function() 
         {
            $("#progressbar_html-label").text($(this).progressbar('value') + '%');
         }
      });
      $("#progressbar_suka").progressbar(
      {
         value: 10,
         change: function() 
         {
            $("#progressbar_suka-label").text($(this).progressbar('value') + '%');
         }
      });
   });
   
   $(document).ready(function()
   {
      var $parent = $('#PanelLayer_panel');
      var $close = $('#wb_close-panel');
      $close.appendTo($parent);
      $close.css('left', 'auto');
      $close.css('right', '0px');
      
      // close menu when a link is clicked, but only if viewport < 480
      $("#wb_CssMenu1 ul li a").click(function(event)
      {
         var viewportWidth = null!=window.innerWidth?window.innerWidth:"CSS1Compat"==document.compatMode?document.documentElement.clientWidth:document.body.clientWidth;
         if (viewportWidth < 480)
         {
            HidePanel('PanelLayer', event);
         }
      });
   });
   
   $(document).ready(function()
   {
      var $progressbars = $('.ui-progressbar');
      
      $progressbars.each(function() 
      {
        var $obj = $(this);
        $obj.data('value', $obj.progressbar('option', 'value'));
        $obj.data('done', false);
        $obj.progressbar('option', 'value', 0);
      });
      $(window).bind('scroll', function() 
      {
         $progressbars.each(function() 
         {
            var $obj = $(this);
            if (!$obj.data('done') && $(window).scrollTop() + $(window).height() >= $obj.offset().top) 
            {
               $obj.data('done', true);
               $obj.animate({scroll: 1}, 
               { 
                  duration: 3000, 
                  step: function(now) 
                  {
                     var $obj = $(this);
                     var val = Math.round($obj.data('value') * now);
                     $obj.progressbar('option', 'value', val);
                  }
               });
            }
         });
      }).triggerHandler('scroll');
   });
   
   var wb_Timer1;
   function TimerStartTimer1()
   {
      wb_Timer1 = setTimeout(function()
      {
         var event = null;
         ShowPanel('PanelLayer', event);
      }, 200);
   }
   function TimerStopTimer1()
   {
      clearTimeout(wb_Timer1);
   }
   TimerStartTimer1();
   
