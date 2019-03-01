import { browser, ProtractorBrowser, ProtractorExpectedConditions, ElementFinder } from 'protractor';
import { BasePage } from './base.po';

export class LoginPage extends BasePage{

    public browser!: ProtractorBrowser;
    private usernameInput: ElementFinder = this.browser.$('#username');
    private passwordInput: ElementFinder = this.browser.$('#password');
    private submitButton: ElementFinder = this.browser.$("#login input[type='submit']");
    public pageTitle: ElementFinder = this.browser.$('h3');
    private loginMessage: ElementFinder = this.browser.$('h4');
    private EC: ProtractorExpectedConditions = new ProtractorExpectedConditions(this.browser);
    public class: string = 'LoginPage';

    public constructor(browser: ProtractorBrowser) {
        super(browser);
    }

    public async setUsername(name: string) {
        try {
            browser.wait(this.EC.visibilityOf(this.usernameInput),
                                                this._5_thousand_ms,
                                                `Failed to find username field after ${this._5_thousand_ms} milliseconds`);
            console.log(`${this.class}.setUsername: Username field has been located`);
            await this.usernameInput.sendKeys(name);
        } catch(e) {
            console.error(`${this.class}.setUsername: ERROR MESSAGE ${e.message}`);
        }
    }

    private async setPassword(password: string) {
        try {
            browser.wait(this.EC.visibilityOf(this.passwordInput),
                                                this._5_thousand_ms,
                                                `Failed to find password field after ${this._5_thousand_ms} milliseconds`);
            console.info(`${this.class}.setPassword: Password field has been located`);
            await this.passwordInput.sendKeys(password);
        } catch(e) {
            console.error(`${this.class}.setPassword: ERROR MESSAGE ${e.message}`);
        }
    }

    private async clickSubmitButton() {
        try {
            browser.wait(this.EC.visibilityOf(this.submitButton),
                                                this._5_thousand_ms,
                                                `Failed to find submit button after ${this._5_thousand_ms} milliseconds`);
            console.info(`${this.class}.clickSubmitButton: Submit button has been located`);
            await this.submitButton.click();
        } catch(e) {
            console.error(`${this.class}.clickSubmitButton: ERROR MESSAGE ${e.message}`);
        }
    }

    public async loginWithValidCredentials() {
        try {
            console.info(`${this.class}.loginWithValidCredentials: Logged in with VALID credentials`);
            return await this.login(this.username, this.validPassword);
        } catch(e) {
            console.error(`${this.class}.loginWithValidCredentials: ERROR MESSAGE ${e.message}`);
        }
    }

    public async loginWithInvalidCredentials() {
        try {
            console.info(`${this.class}.loginWithInvalidCredentials: Logged in with INVALID credentials`);
            return await this.login(this.username, this.invalidPassword);
        } catch(e) {
            console.error(`${this.class}.loginWithInvalidCredentials: ERROR MESSAGE ${e.message}`);
        }
    }

    public async login(username: string, password: string) {
        try {
            await this.setUsername(username);
            await this.setPassword(password);
            console.info(`${this.class}.login: Logged in with username ${username} and password ${password}`);
            return await this.clickSubmitButton(); 
        } catch(e) {
            console.error(`${this.class}.login: ERROR MESSAGE ${e.message}`);
        }
    }

    public async getLoginMessage(): Promise<string|void> {
        try {
            let message = await this.loginMessage.getText();
            console.info(`${this.class}.getLoginMessage: Currently displayed login message is : ${message}`);
            return message;
        } catch(e) {
            console.error(`${this.class}.getLoginMessage: ERROR MESSAGE ${e.message}`);
        }
    }
}
