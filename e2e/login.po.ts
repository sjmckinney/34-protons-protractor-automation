import { browser, $, protractor } from 'protractor';
import { BasePage } from './base.po';

export class LoginPage extends BasePage{

  usernameInput = $('#username');
  passwordInput = $('#password');
  submitButton = $("#login input[type='submit']");
  pageTitle = $('h3');
  loginMessage = $('h4');
  EC = protractor.ExpectedConditions;

  username = 'user';
  validPassword = '123';
  invalidPassword = '321';

  async setUsername(name: string) {
    browser.wait(this.EC.visibilityOf(this.usernameInput), this._5_thousand_ms,
              `Failed to find username field after ${this._5_thousand_ms} milliseconds`);
    console.log('Username field has been located');
    await this.usernameInput.sendKeys(name);
  }

  async setPassword(password: string) {
    browser.wait(this.EC.visibilityOf(this.passwordInput), this._5_thousand_ms,
              `Failed to find password field after ${this._5_thousand_ms} milliseconds`);
    console.log('Password field has been located');
    await this.passwordInput.sendKeys(password);
  }

  async clickSubmitButton() {
    browser.wait(this.EC.visibilityOf(this.submitButton), this._5_thousand_ms,
              `Failed to find submit button after ${this._5_thousand_ms} milliseconds`);
    console.log('Submit button has been located');
    await this.submitButton.click();
  }

  async getPageTitle(): Promise<string> {
    return await this.pageTitle.getText();
  }

  async loginWithValidCredentials() {
    return await this.login(this.username, this.validPassword);
  }

  async loginWithInvalidCredentials() {
    return await this.login(this.username, this.invalidPassword);
  }

  async login(username: string, password: string){
    await this.setUsername(username);
    await this.setPassword(password);
    return await this.clickSubmitButton(); 
  }

  async getLoginMessage(): Promise<string> {
    return await this.loginMessage.getText();
  }
}