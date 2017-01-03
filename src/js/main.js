import $ from 'jquery';

// eslint-disable-next-line no-unused-vars
const access_token = document.currentScript.getAttribute('access-token');

$(() => {
  setTimeout(() => {
    $('div[class^=item_]').each(function() {
      $(this).find('div[class^=content_]').append('<p>hello</p>');
    });
  }, 15000);
});


