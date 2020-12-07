var settings = {
	"url": "https://api.metalabs.io/v2/licenses/0000-0000-0000-0000",
	"method": "PATCH",
	"timeout": 0,
	"headers": {
		"Authorization": "Basic pk_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
		"Content-Type": "application/json"
	},
	"data": JSON.stringify({"metadata":{"key":"value"}}),
};

$.ajax(settings).done(function (response) {
	console.log(response);
});