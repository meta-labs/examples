import json
import requests

headers = {
    'Authorization': 'Basic pk_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    'Content-Type': 'application/json'
}

payload = {
    'metadata': {
        'key': 'value'
    }
}

requests.patch('https://api.metalabs.io/v2/licenses/0000-0000-0000-0000', headers=headers, data=json.dumps(payload))