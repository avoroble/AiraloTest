const { expect } = require('@playwright/test');

exports.MainPage = class MainPage {

  constructor(page) {
    this.page = page;
    this.searchBox = page.getByTestId('search-input');
    this.cookiesAccept = page.getByRole('button', { name: 'ACCEPT' });
    this.pushNotifNotAllow = page.getByRole('button', { name: 'DON\'T ALLOW' });
  };

  async goto() {
    await this.page.goto('https://www.airalo.com/');
    // await this.cookiesAccept.click();
    // await this.pushNotifNotAllow.click();

  }

  async searchCountry(country) {
    await this.searchBox.fill(country);
  }

  async selectCountry(country) {
    await this.page.locator('li').filter({ hasText: country }).click();
  }

};