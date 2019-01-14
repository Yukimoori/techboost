// 課題１
// (function($, window) {
//   $(function() {
//     // ここに処理を書きます
//     // $('#click_me').on('click', function() {
//     $('body').on('click', function() {
//       $('#click_me').css({'color': 'red'});
//     });
//   });
// })(jQuery, window);

// 課題２
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
