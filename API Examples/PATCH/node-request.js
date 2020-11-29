var request = require('request');
var options = {
    'method': 'PATCH',
    'url': 'https://api.metalabs.io/v2/licenses/0000-0000-0000-0000',
    'headers': {
        'Authorization': 'Basic pk_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({"metadata":{"key":"value"}})

};
request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
});