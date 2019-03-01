import { browser } from 'protractor';
import { LoginPage } from './login.po';
import { DemoPage } from './demo.po';

describe('Login page should allow or deny access dependent on credentials', () => {

    const loginPage: LoginPage = new LoginPage(browser);
    const demoPage: DemoPage = new DemoPage(browser);
    const demoPageTitle: string = 'Demo page for selenium code';
    const loadingMessage: string = 'Loading... Please wait';
    const invalidUserMessage: string = 'Username or password invalid';
    const spec: string = 'login.spec';

	beforeEach(() => {
		browser.waitForAngularEnabled(false);
		loginPage.get('login.php');
    });
    
    it('should display correct title on Login page', async () => {

        let loginPageTitle = await loginPage.getPageTitle();
        expect(loginPageTitle).toContain('Login page');
        console.info(`${spec}: Login page title is: ${loginPageTitle}`);

    })

	it('should show user page loading message whilst logging in', async () => {

        await loginPage.loginWithValidCredentials();

		let msg = await loginPage.getLoginMessage();
        expect(msg).toContain(loadingMessage);
        console.info(`${spec}: Page loading message text is: ${msg}`);

    });

    it('should allow access to demo page with valid credentials within 6 seconds', async () => {
        
        await loginPage.loginWithValidCredentials();
        await demoPage.waitForPageToLoad();

        let title = await demoPage.getPageTitle();
        expect(title).toContain(demoPageTitle);
        console.info(`${spec}: Demo page title is: ${title}`);

    });

    it('should display error message if attempt to login with invalid credentials', async () => {

        await loginPage.loginWithInvalidCredentials();

		let msg = await loginPage.getLoginMessage();
        expect(msg).toContain(invalidUserMessage);
        console.info(`${spec}: Invalid user message text is: ${msg}`);

    })

})