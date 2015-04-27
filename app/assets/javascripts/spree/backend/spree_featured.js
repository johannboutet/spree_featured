// Placeholder manifest file.
// the installer will append this file to the app vendored assets here: vendor/assets/javascripts/spree/backend/all.js'

//= require_tree .

$(document).ready(function() {
	var apiKey = $('meta[name="api-key"]').attr('content');
	var switches = $('.switch_me');

	$('[data-toggle="tooltip"]').tooltip();
	switches.bootstrapSwitch({size: 'small'});

	switches.on('switchChange.bootstrapSwitch', function(event, state) {
		var productId = $(this).attr('id');
		$("tr#spree_product_"+productId+" .switch_error").hide();

		if (apiKey) {
			var request = $.ajax({
				headers: { 'X-Spree-Token': apiKey },
				url: '/api/products/'+productId,
				type: 'PUT',
				data: JSON.stringify({ "product": { "featured": state } }),
				contentType: 'application/json; charset=utf-8',
				dataType: 'json',
				processData: false
			});

			request.done(function(result) {
				console.log(result);
			});

			request.fail(function(jqXHR, textStatus) {
				$("input#"+productId).bootstrapSwitch('state', !state, true);
				$("tr#spree_product_"+productId+" .switch_error").show();
			});
		}
		else {
			$('form#edit_product_'+productId).submit();
		}
	});
});