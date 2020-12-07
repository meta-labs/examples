var data = "";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
	if(this.readyState === 4) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://api.metalabs.io/v2/licenses/0000-0000-0000-0000");
xhr.setRequestHeader("Authorization", "Basic pk_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");

xhr.send(data);