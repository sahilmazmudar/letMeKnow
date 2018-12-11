const puppeteer = require('puppeteer');
// dom selectors
const USERNAME_SELECTOR = '#username';
const PASSWORD_SELECTOR = '#password';
const BUTTON_SELECTOR = '#loginForm > div > div > div.td-row > div > div > button';



async function login() {
	const browser = await puppeteer.launch({headless: false});
	const page = await browser.newPage();
	await page.goto('target_website');

	await page.click(USERNAME_SELECTOR);
	await page.keyboard.type("userId");

	await page.click(PASSWORD_SELECTOR);
	await page.keyboard.type("password");

	await page.click(BUTTON_SELECTOR);

	await page.waitForNavigation();
}

login();