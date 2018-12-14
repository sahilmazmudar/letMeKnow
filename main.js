const puppeteer = require('puppeteer');
// dom selectors
const USERNAME_SELECTOR = '#username';
const PASSWORD_SELECTOR = '#password';
const BUTTON_SELECTOR = '#login > input.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only.btn';

async function login() {
	const browser = await puppeteer.launch({headless: false});
	const page = await browser.newPage();
	await page.goto('https://ssc.adm.ubc.ca/sscportal/');

	await page.click("#login > table > tbody > tr > td:nth-child(1) > a");
	await delay(1000);

	await page.click('#username');
	await page.keyboard.type("username");

	await page.click('#password');
	await page.keyboard.type("pass");

	await page.click(BUTTON_SELECTOR);

	await delay(1000);
	navigateToFinances(page);
}

function navigateToFinances(page) {
	await page.click('#UbcMainNav > li:nth-child(3) > a');
	await delay(2000);
	const text = page.evaluate(() => document.querySelector('body > div.standard-width > table:nth-child(2) > tbody > tr > td:nth-child(1)').textContent);
	console.log(text);
}

function delay(time) {
   return new Promise(function(resolve) { 
       setTimeout(resolve, time)
   });
}

login();