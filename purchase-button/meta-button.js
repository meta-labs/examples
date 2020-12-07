const MEMBER_PORTAL_DOMAIN = 'https://account-name.metalabs.group' // The domain of your Meta Labs dashboard
const BUTTON_ID = 'purchaseButton' // The button ID you'd like to update according to stock
const IN_STOCK_TEXT = 'Buy now' // Button text when not out of stock
const OUT_OF_STOCK_TEXT = 'Out of stock' // Button text when out of stock
const RELEASE_PASSWORD = '' // Leave blank to grab password from query params

const releasePassword = RELEASE_PASSWORD || new URL(window.location.href).searchParams.get('password')

fetch(`${MEMBER_PORTAL_DOMAIN}/api/release?password=${releasePassword}`)
	.then(response => response.json())
	.then((data) => {
		const $purchaseButton = document.getElementById(BUTTON_ID);

		if (!data.out_of_stock) {
		purchaseButton.innerHTML = IN_STOCK_TEXT;
		purchaseButton.disabled = false;
		purchaseButton.href = `${MEMBER_PORTAL_DOMAIN}/purchase?password=${releasePassword}`
		} else {
		purchaseButton.innerHTML = OUT_OF_STOCK_TEXT;
		purchaseButton.disabled = true;
		}
	})
	.catch(() => {
		purchaseButton.innerHTML = OUT_OF_STOCK_TEXT;
		purchaseButton.disabled = true;
		throw new Error('Release not found');
});