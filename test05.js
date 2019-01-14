(function($, window) {
  $(function() {
    $('#login').on('click', function(e) {
      var email = $('#email').val(),
          password = $('#password').val();
      // alert(email);
      // alert(password);
      if (email == '') {
        alert('メールアドレスを入力してください');
      } else if (email.indexOf('@') < 0) {
        alert('メールアドレスには必ず「@」が必要です');
      }
      if (password == '') {
        alert('パスワードを入力してください');
      } else if (password.length < 6) {
        alert('パスワードは6文字以上です');
      }
    });
  });
})(jQuery, window);
