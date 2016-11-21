module.exports = {
    'Example Test Case': function (browser) {
        browser.url(browser.globals.environmentUrl);
        browser.waitForElementVisible('body', 10000, 'Waiting for page to load');
        browser.verify.urlEquals(`${browser.globals.environmentUrl}/`, 'Checking URL');
        browser.verify.title('Google', 'Checking page title');
    }
};