/* global chrome */
import Store from './storage';
import $ from 'jquery';

// eslint-disable-next-line no-unused-vars
const store = new Store(() => {
  // The access token is loaded from memory now.
});

$(() => {
  setTimeout(() => {
    $('div[class^=item_]').each(function() {
      
      const name = $(this).find('div[class^=title_]').text();

      $.ajax({
        type: 'GET',
        url: `https://api.yelp.com/v3/businesses/${name.toLowerCase().split(' ').join('-')}-san-francisco`,
        headers: {
          'Authorization': 'Bearer ' + 'Af0nQnsJElDI9njiac977wRJsxFFgc_kLi4OtJyhZHbjg4xbii0lmIb6bN1WbaWpV9MIomih8qomeJ3cQmt-N88vSgvp0jfCFT19YPcgZ4Ts9hYrWK9L09saEUJoWHYx'
        },
        success: (data) => {
          $(this).find('div[class^=content_]').append(`<p>${data.rating}</p>`);
        },
        dataType: 'json'
      });
    });
  }, 15000);
});

