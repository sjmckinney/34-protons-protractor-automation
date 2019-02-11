import { browser, $, protractor } from 'protractor';

export class BasePage {

  baseUrl = "https://www.34protons.co.uk/demo_2_0/";
  _5_thousand_ms = 5000;

  username = 'user';
  validPassword = '123';
  invalidPassword = '321';

  get(path: string) {
    browser.get(`${this.baseUrl}${path}`);
  }

}