(function($, window) {
  $(function() {
    // ここに処理を書きます
    // $('#click_me').on('click', function() {
    $('body').on('click', function() {
      $(this).css({'color': 'red'});
    });
  });
})(jQuery, window);
