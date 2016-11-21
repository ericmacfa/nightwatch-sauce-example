module.exports = {
    environmentUrl: 'https://www.google.com',

    // This will be run before each test suite is started
    beforeEach: function (browser, done) {
        browser.maximizeWindow();
    },

    // This will be run after each test suite is finished
    afterEach: function (browser, done) {
        browser.end(done);
    }
};