   
   $(document).ready(function()
   {
      $("#Carousel1").bootstrapcarousel({interval:3000, pause: false});
      $("a[href*='#LayoutGrid8']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid8').offset().top-88 }, 600, 'easeOutCirc');
      });
   });
