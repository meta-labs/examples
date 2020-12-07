var myHeaders = new Headers();
myHeaders.append("Authorization", "Basic pk_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"metadata":{"key":"value"}});

var requestOptions = {
	method: 'PATCH',
	headers: myHeaders,
	body: raw,
	redirect: 'follow'
};

fetch("https://api.metalabs.io/v2/licenses/0000-0000-0000-0000", requestOptions)
	.then(response => response.text())
	.then(result => console.log(result))
	.catch(error => console.log('error', error));