$('#bind_form').on('submit', function(e) {
    e.preventDefault();
    var data = $("#bind_form :input").serializeArray();
    return fetch('/api/bind', {
        method: 'POST',
        body: JSON.stringify(data)
    })
    .then((response) => {
        if (response.status === 404) {
            $('#license_input').addClass('is-invalid');
        }
    })
});

$('#portal').click(function() {
    return fetch('/api/portal', {
        method: 'POST'
    })
    .then((response) => response.json())
    .then(data => {
        document.location.href = data.url;
    });
})

$('#join').click(function() {
    return fetch('/api/join', {
        method: 'POST'
    })
    .then(response => {
        if (response.status !== 208) {
            alert("The authentication bot doesn't have the necessary permissions to add you to the server, please contact a member of the staff.");
        };
    })
    .catch(() => alert("The authentication bot doesn't have the necessary permissions to add you to the server, please contact a member of the staff."));
})

$('#unbind').click(function() {
    return fetch('/api/unbind', {
        method: 'POST'
    })
    .then((response) => {
        console.log(response);
    })
})

$('#password_form').on('submit', function(e) {
    e.preventDefault();
	var RELEASE_PASSWORD = $("#password_form :input").val();
	console.log(RELEASE_PASSWORD)
	return fetch(`/api/release?password=${RELEASE_PASSWORD}`, {
		headers: {
		  'Meta-Labs-Account': 'byiGC2l_6'
		}
	  })
		.then(res => {
			if (res.status === 404) {
				$('#password_input').addClass('is-invalid');
			} else {
				window.location.href = `purchase.html?password=${RELEASE_PASSWORD}`
			}
		})
		.catch(() => null);
	}
);
