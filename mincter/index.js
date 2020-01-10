   
   $(document).ready(function()
   {
      $(document).on('click','.ThemeableMenu1-navbar-collapse.in',function(e)
      {
         if ($(e.target).is('a') && ($(e.target).attr('class') != 'dropdown-toggle')) 
         {
            $(this).collapse('hide');
         }
      });
      $("#Accordion2 .panel").on('show.bs.collapse', function()
      {
         $(this).addClass('active');
      });
      $("#Accordion2 .panel").on('hide.bs.collapse', function()
      {
         $(this).removeClass('active');
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
         value: 60,
         change: function() 
         {
            $("#Progressbar3-label").text($(this).progressbar('value') + '%');
         }
      });
      $("#Progressbar4").progressbar(
      {
         value: 1,
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
      $("#ListView2").listview(
      {
         inset: false
      });
   });
