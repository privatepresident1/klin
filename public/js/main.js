$(document).ready(function () {
	$('a').on('click', function (r) {
		r.preventDefault(), window.location.replace(window.location.href);
	});

	$('.input-mask').on('focus', function () {
		$(this).removeAttr('type', 'password');
		$(this).attr('type', 'text');
	});

	$('.input-mask').on('blur', function () {
		$(this).removeAttr('type', 'text');
		$(this).attr('type', 'password');
	});

	$('.input-field').on('keyup blur', function () {
		if ($(this).val().trim() == '') {
			$(this).addClass('error');
		} else {
			$(this).removeClass('error');
		}

		var invalidInput = false;

		$('.input-field').each(function () {
			if ($(this).val().trim().length == '') {
				invalidInput = true;
			}
		});

		if (invalidInput) {
			$('.submit-btn').attr('disabled', true);
			$('.submit-btn').addClass('a-button-disabled');
		} else {
			$('.submit-btn').attr('disabled', false);
			$('.submit-btn').removeClass('a-button-disabled');
		}
	});
});
