   
   $(document).ready(function()
   {
      $(document).on('click','.ThemeableMenu1-navbar-collapse.in',function(e)
      {
         if ($(e.target).is('a') && ($(e.target).attr('class') != 'dropdown-toggle')) 
         {
            $(this).collapse('hide');
         }
      });
      $("#Accordion3 .panel").on('show.bs.collapse', function()
      {
         $(this).addClass('active');
      });
      $("#Accordion3 .panel").on('hide.bs.collapse', function()
      {
         $(this).removeClass('active');
      });
      $("#Accordion4 .panel").on('show.bs.collapse', function()
      {
         $(this).addClass('active');
      });
      $("#Accordion4 .panel").on('hide.bs.collapse', function()
      {
         $(this).removeClass('active');
      });
      $("#Progressbar1").progressbar(
      {
         value: 100,
         change: function() 
         {
            $("#Progressbar1-label").text($(this).progressbar('value') + '%');
         }
      });
      $("#Progressbar2").progressbar(
      {
         value: 80,
         change: function() 
         {
            $("#Progressbar2-label").text($(this).progressbar('value') + '%');
         }
      });
      $("#Progressbar3").progressbar(
      {
         value: 78,
         change: function() 
         {
            $("#Progressbar3-label").text($(this).progressbar('value') + '%');
         }
      });
      $("#Progressbar4").progressbar(
      {
         value: 67,
         change: function() 
         {
            $("#Progressbar4-label").text($(this).progressbar('value') + '%');
         }
      });
      $("#ListView1").listview(
      {
         inset: false
      });
      $("#Carousel1").bootstrapcarousel({interval:3000, pause: false});
      $("#Accordion1 .panel").on('show.bs.collapse', function()
      {
         $(this).addClass('active');
      });
      $("#Accordion1 .panel").on('hide.bs.collapse', function()
      {
         $(this).removeClass('active');
      });
      $("#Progressbar5").progressbar(
      {
         value: 100,
         change: function() 
         {
            $("#Progressbar5-label").text($(this).progressbar('value') + '%');
         }
      });
      $("#Progressbar6").progressbar(
      {
         value: 99,
         change: function() 
         {
            $("#Progressbar6-label").text($(this).progressbar('value') + '%');
         }
      });
      $("#Progressbar7").progressbar(
      {
         value: 12,
         change: function() 
         {
            $("#Progressbar7-label").text($(this).progressbar('value') + '%');
         }
      });
      $("#Progressbar8").progressbar(
      {
         value: 86,
         change: function() 
         {
            $("#Progressbar8-label").text($(this).progressbar('value') + '%');
         }
      });
      $("#Progressbar9").progressbar(
      {
         value: 89,
         change: function() 
         {
            $("#Progressbar9-label").text($(this).progressbar('value') + '%');
         }
      });
      $("#Progressbar10").progressbar(
      {
         value: 11,
         change: function() 
         {
            $("#Progressbar10-label").text($(this).progressbar('value') + '%');
         }
      });
      $("#Progressbar11").progressbar(
      {
         value: 100,
         change: function() 
         {
            $("#Progressbar11-label").text($(this).progressbar('value') + '%');
         }
      });
      $("#Progressbar12").progressbar(
      {
         value: 86,
         change: function() 
         {
            $("#Progressbar12-label").text($(this).progressbar('value') + '%');
         }
      });
   });
