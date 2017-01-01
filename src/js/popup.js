import $ from 'jquery';

$(() => { 
  $.ajax({
    type: "POST",
    url: "https://api.yelp.com/oauth2/token",
    data: {
      "grant_type": "client_credentials", 
      "client_id": "PSc31XzADb0QmeG8wrqS0g", 
      "client_secret": "stckEgTOJIPWD7qzBz6vsIKIexfwZqMN7YRf8OYsSTv2zz255FzJH0iraLoX4Uka"
    },
    success: (data) => {
      $.ajax({
        type: "GET",
        url: "https://api.yelp.com/v3/businesses/gary-danko-san-francisco",
        headers: {
          "Authorization": "Bearer " + data.access_token
        },
        success: (data) => {
          $('#app').text(JSON.stringify(data));
        },
        dataType: "json"
      });
    },
    contentType: "application/x-www-form-urlencoded",
    dataType: "json"
  });

});

