import { $ } from 'protractor';
import { BasePage } from './base.po';

export class DemoPage extends BasePage {

	pageTitle = $('#title');
	path = "index.htm";

	async getPageTitle(): Promise<string> {
    	return await this.pageTitle.getText();
	}

}