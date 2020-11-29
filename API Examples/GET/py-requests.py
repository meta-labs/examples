import requests

headers = {
    'Authorization': 'Basic pk_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    'Content-Type': 'application/json'
}

r = requests.get('https://api.metalabs.io/v2/licenses/0000-0000-0000-0000'.format(license), headers=headers)