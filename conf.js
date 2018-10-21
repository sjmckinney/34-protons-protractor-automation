exports.config = {
    // The path to the seleniumServer executable instead of seleniumAddress.
    // Runs selenium server on execution start
    //sseleniumServerJar: './node_modules/selenium-standalone-jar/bin/selenium-server-standalone-3.0.1.jar',
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'firefox'
    },

    //SELENIUM_PROMISE_MANAGER: false,

    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    specs: ['specs/**/*spec.js'],
};
