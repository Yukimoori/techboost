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

// 課題２　未完成
// (function($, window) {
//   $(function() {
//     $('#login').on('click', function(e) {
//       var email = $('#email').val(),
//           password = $('#password').val();
//
//       if (email == '') {
//         alert('メールアドレスを入力してください');
//       } else if (email.indexOf('@') < 0) {
//         alert('メールアドレスには必ず「@」が必要です');
//       }
//       if (password == '') {
//         alert('パスワードを入力してください');
//       } else if (password.length < 6) {
//         alert('パスワードは6文字以上です');
//       }
//     });
//   });
// })(jQuery, window);


// 課題３　未完成


// 課題４
// (function($, window) {
//   $(function() {
//     $('#date_picker').flatpickr();
//   });
// })(jQuery, window);

// 課題５完成→６ 未完成
(function($, window) {
  $(function() {
    // ここに処理を書きます
  if($('#kensaku').on('click', function()) {
    $('#zip1').jpostal({
        postcode : [
            '#zip'
        ],
        address : {
            '#pref'  : '%3',
            '#city'  : '%4',
            '#street'  : '%5'
        }

    })};
  });
})(jQuery, window);
