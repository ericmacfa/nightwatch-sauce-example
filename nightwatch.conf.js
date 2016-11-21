//#########################################################################
// This config allows us to dynamically modify the original nightwatch.json
// file, which is useful for avoiding hardcoding resource paths (i.e. the
// selenium server jar and the webdrivers), and adding additional support
// for command line switches
//#########################################################################
var seleniumServer = require('selenium-server'),
	chromedriver = require('chromedriver'),
	iedriver = require('iedriver');

module.exports = (function (settings) {
	var args = process.argv;

	// Pick up the SauceLab environment variables, if they exist
	settings.test_settings.default.username = process.env.SAUCE_USERNAME || settings.test_settings.default.username;
	settings.test_settings.default.access_key = process.env.SAUCE_ACCESS_KEY || settings.test_settings.default.access_key;

	// Dynamically set the paths to the server jar and webdrivers
	settings.selenium = settings.selenium || {};
	settings.selenium.server_path = seleniumServer.path;
	settings.selenium.cli_args = settings.selenium.cli_args || {};
	settings.selenium.cli_args['webdriver.chrome.driver'] = chromedriver.path;
	settings.selenium.cli_args['webdriver.ie.driver'] = iedriver.path;

	// Determine whether or not to start selenium server. The selenium server will be started if
	// "start_server" is set to true for any of the environments that tests will be run in.
	var environment = 'default';
	if (args.indexOf('-e') !== -1) {
		environment = args[args.indexOf('-e') + 1];
	} else if (args.indexOf('--env') !== -1) {
		environment = args[args.indexOf('--env') + 1];
	}
	environment = environment.split(',');
	console.log(`User wants to run in environment(s): ${environment}`);

	var start_process = settings.start_process || false; // default to false is the nightwatch behavior
	environment.forEach(env => {
		if (!settings.test_settings.hasOwnProperty(env)) {
			throw new Error(`"${env}" environment not found`);
		}
		if (settings.test_settings[env].hasOwnProperty('start_process')) {
			start_process = start_process || settings.test_settings[env].start_process;
		}
	});

	settings.selenium.start_process = start_process;
	console.log(`Will the selenium server be started? ${(start_process) ? 'yes' : 'no'}`);

	return settings;
})(require('./nightwatch.json'));