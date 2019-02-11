/*
Vanilla JS example
*/

describe('Login page should allow or deny access dependent on credentials', () => {
	const EC=protractor.ExpectedConditions;
	beforeEach(() => {
		browser.waitForAngularEnabled(false);
		browser.get('https://www.34protons.co.uk/demo_2_0/login.php');
	});

	it('Correct username and password should allow access', () => {

		expect(element(by.tagName('h3')).getText()).toContain('Login page');

		element(by.id('username')).sendKeys('user');
		element(by.id('password')).sendKeys('123');
		element(by.css("#login input[type='submit']")).click();
		// submit is not part of W3C standard so it not implemented by
		// geckodriver but is implemented by chromedriver???
		//element(by.id('login')).submit();

		let msg = element(by.tagName('h4'));
		browser.wait(EC.visibilityOf(msg), 5000, 'Message not visible in UI');
		expect(msg.getText()).toContain('Loading... Please wait');

		let pageTitle = element(by.id('title'));
		browser.wait(EC.visibilityOf(pageTitle), 6000, 'Failed to open next page in time');
		expect(pageTitle.getText()).toContain('Demo page for selenium code');
	});

	it('Incorrect username and password should not allow access', () => {

		element(by.id('username')).sendKeys('user');
		element(by.id('password')).sendKeys('321');
		element(by.css("#login input[type='submit']")).click();
		// submit is not part of W3C standard so it not implemented by
		// geckodriver but is implemented by chromedriver???
		//element(by.id('login')).submit();

		let msg = element(by.tagName('h4'));
		browser.wait(EC.visibilityOf(msg), 5000, 'Message not visible in UI');
		expect(msg.getText()).toContain('Username or password invalid');
	});
});