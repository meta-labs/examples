var data = JSON.stringify({"metadata":{"key":"value"}});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
	if(this.readyState === 4) {
		console.log(this.responseText);
	}
});

xhr.open("PATCH", "https://api.metalabs.io/v2/licenses/0000-0000-0000-0000");
xhr.setRequestHeader("Authorization", "Basic pk_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.send(data);