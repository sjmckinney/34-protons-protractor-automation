exports.config = {
	//Use either selenium server or connect directly to appropriate driver instance

	//Selenium Server

	// The path to the seleniumServer executable instead of seleniumAddress.
	// Runs selenium server on execution start
	// seleniumServerJar: './node_modules/selenium-standalone-jar/bin/selenium-server-standalone-3.0.1.jar',

	//seleniumAddress: 'http://localhost:4444/wd/hub',
	// Capabilities to be passed to the webdriver instance

	//Connect directly

	directConnect: true,

	capabilities: {
		browserName: 'firefox'
		//browserName: 'chrome'
	},

	// Will be default situation when Node supports async/await natively
	SELENIUM_PROMISE_MANAGER: false,

	// Spec patterns are relative to the configuration file location passed
	// to protractor (in this example conf.js).
	
	specs: ['dist/**/*spec.js'],

	eslint: '.eslintrc',

	//Test framework and configuration

	framework: 'jasmine',

	onPrepare: function(){
		var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
		jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
	},

	jasmineNodeOpts: {
		showColors: true,
		isVerbose: true,
		realtimeFailure: true,
		includeStackTrace: true,
		defaultTimeoutInterval: 30000,
		//prevent default 'dot' reporter output
		print: function() {}
	}
};
