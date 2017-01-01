import $ from 'jquery';


alert('hello world!!!!', $);

// $(function() {
// 	$('.item_36eJsF').each(() => console.log('it works', $(this)));
// });

$(() => { 
	setTimeout(() => {
		$('div[class^=item_]').each(function() {
			$(this).find('div[class^=content_]`').append('<p>hello</p>');
		});
	}, 15000);
});


