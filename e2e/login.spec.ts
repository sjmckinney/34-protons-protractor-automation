import { protractor, browser } from 'protractor';
import { LoginPage } from './login.po';
import { DemoPage } from './demo.po';

describe('Login page should allow or deny access dependent on credentials', () => {

    const EC=protractor.ExpectedConditions;
    const loginPage = new LoginPage();
    const demoPageTitle = 'Demo page for selenium code';
    const _6_thousand_ms = 6000;

	beforeEach(() => {
		browser.waitForAngularEnabled(false);
		loginPage.get('login.php');
    });
    
    it('Login page title should be correct', async () => {

        let loginPageTitle = await loginPage.getPageTitle();
        expect(loginPageTitle).toContain('Login page');

    })

	it('Correct username and password should show user message while logging in', async () => {

        await loginPage.loginWithValidCredentials();

		let msg = await loginPage.getLoginMessage();
        expect(msg).toContain('Loading... Please wait');
        console.log(`User message text is: ${msg}`);

    });

    it('Correct username and password should allow access to demo page within 6 seconds', async () => {

        await loginPage.loginWithValidCredentials();

        let demoPage = new DemoPage();
        browser.wait(EC.visibilityOf(demoPage.pageTitle), _6_thousand_ms, `Demo page has failed to open after ${_6_thousand_ms} milliseconds`);
        let title = await demoPage.getPageTitle();
        console.log(`Demo page title is: ${title}`);
        expect(title).toContain(demoPageTitle);

    });

    it('Incorrect username or password should cause error message to be displayed', async () => {

        await loginPage.loginWithInvalidCredentials();

		let msg = await loginPage.getLoginMessage();
        expect(msg).toContain('Username or password invalid');
        console.debug(`User message text is: ${msg}`);

    })

})