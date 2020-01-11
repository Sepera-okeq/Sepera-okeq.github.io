   
   $(document).ready(function()
   {
      $("#Carousel1").bootstrapcarousel({interval:3000, pause: false});
      $(document).on('click','.ThemeableMenu1-navbar-collapse.in',function(e)
      {
         if ($(e.target).is('a') && ($(e.target).attr('class') != 'dropdown-toggle')) 
         {
            $(this).collapse('hide');
         }
      });
      $("a[data-rel='gallery']").attr('rel', 'gallery');
      $("#gallery").magnificPopup({delegate:'a', type:'image', gallery: {enabled: true, navigateByImgClick: true}});
   });
