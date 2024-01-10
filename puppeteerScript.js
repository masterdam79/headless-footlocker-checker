require('dotenv').config(); // Load environment variables from .env file
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    const url = process.env.URL; // Read URL from environment variable

    await page.goto(url);

    // Keep the browser open for a few seconds for verification before closing
    await new Promise(resolve => setTimeout(resolve, 50000));

    // Rest of your code...

    await browser.close();
})();
