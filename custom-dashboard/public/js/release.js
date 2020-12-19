function getRelease() {
	var RELEASE_PASSWORD = new URL(document.location.href).searchParams.get('password')
	if (RELEASE_PASSWORD) {
		var RELEASE_URL = `/api/release?password=${RELEASE_PASSWORD}`;
	} else {
		var RELEASE_URL = '/api/release';
	}

	return fetch(RELEASE_URL, {
		headers: {
			'Meta-Labs-Account': 'byiGC2l_6'
		}
	})
	.then(res => res.json()
		.then(data => {
			if (res.status === 404) {
				window.location.href = 'password.html';
			} else {
				if (data.out_of_stock === true) {
					window.location.href = 'password.html';
				} else {
					console.log(data.plan.type);
					if (data.plan.type === 'free') {
						$('#purchase_button').html('Claim now')
						$('#card_input').hide()
					} else {
						$('#purchase_button').html('Buy now')
					}
				}
			}
		})
	)
	.catch(() => window.location.href = 'password.html');
}

$(document).ready(function() {
	getRelease();
})