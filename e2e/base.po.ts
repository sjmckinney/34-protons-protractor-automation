import { browser, ProtractorBrowser, ElementFinder } from 'protractor';

export class BasePage {

    protected browser: ProtractorBrowser = browser;
    protected class: string = 'BasePage';
    protected baseUrl: string = "https://www.34protons.co.uk/demo_2_0/";
    protected _5_thousand_ms: number = 5000;
    public _6_thousand_ms: number = 6000;
    public _10_thousand_ms: number = 10000;
    // Note use of suffix '!' to property name
    // Required to prevent error message
    // "Property 'pageTitle' has no initializer and is not definitely assigned in the constructor.""
    public pageTitle!: ElementFinder;

    protected username: string = 'user';
    protected validPassword: string = '123';
    protected invalidPassword: string = '321';

    public constructor (browserContext: ProtractorBrowser) {
        if(!browserContext == null){
            this.browser = browserContext;
        }
    }

    public get = async (path: string): Promise<void> => {
        try {
            console.info(`${this.class}.get: Attempting to navigate to "${this.baseUrl+path}"`);
            await browser.get(`${this.baseUrl}${path}`);
        } catch(e) {
            console.error(`${this.class}.get: ERROR MESSAGE: ${e.message}`);
        }
    }

    public async getPageTitle(): Promise<string|void> {
		try {
			console.info(`${this.class}.getPageTitle: attempting to get current page title`);
			return await this.pageTitle.getText();
		} catch(e) {
			console.error(`${this.class}.getPageTitle: ERROR MESSAGE ${e.message}`);
		}
    }

}
