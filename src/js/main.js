import $ from 'jquery';
import Store from './storage';


$(() => {
  setTimeout(() => {
    $('div[class^=item_]').each(function() {
      $(this).find('div[class^=content_]').append(`<p>${Store.access_token}</p>`);
    });
  }, 15000);
});

$.ajax({
  type: 'GET',
  url: 'https://api.yelp.com/v3/businesses/gary-danko-san-francisco',
  headers: {
    'Authorization': 'Bearer ' + data.access_token
  },
  success: (data) => {
    $('#app').text(JSON.stringify(data));
  },
  dataType: 'json'
});