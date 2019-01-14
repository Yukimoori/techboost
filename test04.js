(function($, window) {
  $(function() {
    $('#email').on('blur', function() {
      alert($(this).val());
    });
    $('#password').on('blur', function() {
      alert($(this).val());
    });
  });
})(jQuery, window);
