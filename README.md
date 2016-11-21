# nightwatch-sauce-example

### Description
Skeleton project for running Nightwatch.js tests both on the local machine, and in SauceLabs.<br>
npm scripting is used to simplify running the locally installed nightwatch module, instead of installing it globally.

### Getting Started
1. Clone the repo
2. Open CLI inside the local project directory
3. Install dependencies with `npm install`
4. If you're running tests in SauceLabs, configure nightwatch to use your credentials using either approach:
  * Add environment variables (_SAUCE_USERNAME_, _SAUCE_ACCESS_KEY_) with their associated values to your machine
  * Hardcode them inside _nightwatch.json_ (in the default environment)
5. You are ready to go

### Example commands
- __npm run nightwatch -- -t tests/ExampleTest.js -e chrome__
  - This will run the `ExampleTest.js`
  - Test will run on your local machine, using the Chrome browser
- __npm run nightwatch -- -t tests/ExampleTest.js -e sauce_chrome__
  - This will run the `ExampleTest.js`
  - Test will run in SauceLabs, using the Chrome browser
- __npm run nightwatch -- -e sauce_chrome__
  - This will run all of the tests under the `./tests/` directory
  - Tests will in SauceLabs, in serial (one by one), using the Chrome browser
- __npm run nightwatch -- -e sauce_chrome_parallel__
  - This will run all of the tests under the `./tests/` directory
  - Tests will in SauceLabs, __in parallel__ (all at once), using the Chrome browser