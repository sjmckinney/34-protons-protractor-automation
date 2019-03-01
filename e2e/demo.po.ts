import { ElementFinder, ProtractorBrowser, ExpectedConditions as EC } from 'protractor';
import { BasePage } from './base.po';

export class DemoPage extends BasePage {

	public constructor(browser: ProtractorBrowser) {
		super(browser);
	}

	public browser!: ProtractorBrowser;
	public path: string = "index.htm";
	class: string = 'DemoPage';
	pageTitle: ElementFinder = this.browser.$('#title');

	public waitForPageToLoad = async () => {
		try {
			console.info(`${this.class}.waitForPageToLoad: waiting for Demo Page to load`);
			await this.browser.wait(EC.visibilityOf(this.pageTitle),
										this._6_thousand_ms,
										`Demo page has failed to open after ${this._6_thousand_ms} milliseconds`)
		} catch(e) {
			console.error(`${this.class}.waitForPageToLoad: ERROR MESSAGE ${e.message}`);
		}
	}

}
