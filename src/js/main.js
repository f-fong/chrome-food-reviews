import $ from 'jquery';


$(() => {
  setTimeout(() => {
    $('div[class^=item_]').each(function() {
      $(this).find('div[class^=content_]').append('<p>hello</p>');
    });
  }, 15000);
});
