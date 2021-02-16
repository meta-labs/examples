import uuid
import time
import requests

from datetime import datetime

api_key = 'pk_xxxxxxxxxxxxxxxxxxxxx' # replace with your api key

def log(content):
    print('[{}] {}'.format(datetime.utcnow(), content))

def get_license(license_key):
	headers = {
		'Authorization': f'Bearer {api_key}'
	}

	req = requests.get(f'https://api.metalabs.io/v4/licenses/{license_key}', headers=headers)
	if req.status_code == 200:
		return req.json()
	else:
		return False

def update_license(license_key, hardware_id):
	headers = {
		'Authorization': f'Bearer {api_key}',
		'Content-Type': 'application/json'
	}

	payload = {
		'metadata': {
			'hwid': hardware_id
		}
	}

	req = requests.patch(f'https://api.metalabs.io/v4/licenses/{license_key}', headers=headers, json=payload)
	if req.status_code == 200:
		return True
	else:
		return False

def check_license(license_key):
    log('Checking license...')
    license_data = get_license(license_key.strip())
    if license_data:
        hardware_id = ':'.join(['{:02x}'.format((uuid.getnode() >> ele) & 0xff) for ele in range(0,8*6,8)][::-1])
        if license_data.get('metadata', {}) == {}:
            updated = update_license(license_key, hardware_id)
            if updated:
                return True
            else:
                log('Something went wrong, please retry.')
                return False
        else:
            current_hwid = license_data.get('metadata', {}).get('hwid', '')
            if current_hwid == hardware_id:
                return True
            else:
                log('License is already in use on another machine!')
                return False
    else:
        log('License not found.')
        return False

license_key = input('[{}] Input your license: '.format(datetime.utcnow()))

auth = check_license(license_key)
if auth:
    log('Authorized.')
    time.sleep(1)
    log('Launching...')
    # your stuff here