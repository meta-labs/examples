var axios = require('axios');
var data = JSON.stringify({"metadata":{"key":"value"}});

var config = {
    method: 'patch',
    url: 'https://api.metalabs.io/v2/licenses/0000-0000-0000-0000',
    headers: { 
        'Authorization': 'Basic pk_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 
        'Content-Type': 'application/json'
    },
    data : data
};

axios(config)
.then(function (response) {
    console.log(JSON.stringify(response.data));
})
.catch(function (error) {
    console.log(error);
});