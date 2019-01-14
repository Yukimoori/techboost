// // 課題１
// (function($, window) {
//   $(function() {
//     // この中に処理を書きます
//       $('h2').remove();
//   });
// })(jQuery, window);

// 課題２
// (function($, window) {
//   $(function() {
//     // この中に処理を書きます
//     var title = $('#index').text();
//     alert(title);
//   });
// })(jQuery, window);

// (function($, window) {
//   $(function() {
//     // この中に処理を書きます
//     var title = $('#index').html();
//     alert(title);
//   });
// })(jQuery, window);

// 課題3
// (function($, window) {
//   $(function() {
//     // この中に処理を書きます
//       $('ul').append('<li>メソッド</li>');
//   });
// })(jQuery, window);

// 課題４
// (function($, window) {
//   $(function() {
//     // この中に処理を書きます
//       $('#index').find('li').each(function() {
//          // ループ内の処理
//          // var count = $(this).val();
//          alert($(this).text().length);
//        });
//   });
// })(jQuery, window);

// 課題5

(function($, window) {
    $(function() {
        // この中に処理を書きます
          $('#index').find('li').each(function() {
               // ループ内の処理
             var count = $(this).text().length;
             $(this).append("[");
             $(this).append(count);
             $(this).append("文字]");
             });
        });
      })(jQuery, window);
