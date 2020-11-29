var settings = {
	"url": "https://api.metalabs.io/v2/licenses/0000-0000-0000-0000",
	"method": "GET",
	"timeout": 0,
	"headers": {
		"Authorization": "Basic pk_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
	},
};

$.ajax(settings).done(function (response) {
	console.log(response);
});