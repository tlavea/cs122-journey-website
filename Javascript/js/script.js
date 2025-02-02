// Hamburger Menu
$(document).ready(function() {
  $(".menu").click(function() {
      $(this).toggleClass("active");
      $(".navi").toggleClass("active");
  });

  // Zoomies
  $('.image-container').hover(
      function() {
          $(this).find('.zoom-image').css('transform', 'scale(1.5)');
          $(this).css('transform', 'scale(2.2)');
          $(this).css('box-shadow', '0 10px 20px rgba(0, 0, 0, 0.3)');
      },
      function() {
          $(this).find('.zoom-image').css('transform', 'scale(1)');
          $(this).css('transform', 'scale(1)');
          $(this).css('box-shadow', 'none');
      }
  );
});