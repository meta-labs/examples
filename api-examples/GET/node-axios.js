var axios = require('axios');

var config = {
	method: 'get',
	url: 'https://api.metalabs.io/v2/licenses/0000-0000-0000-0000',
	headers: {
		'Authorization': 'Basic pk_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
	}
};

axios(config)
.then(function (response) {
	console.log(JSON.stringify(response.data));
})
.catch(function (error) {
	console.log(error);
});