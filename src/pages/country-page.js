const { expect } = require('@playwright/test');

exports.CountryPage = class CountryPage {

  constructor(page) {
    this.page = page;
  };

  async selectPackage(number) {
    await this.page.locator(`.package-list-wrapper > .d-grid > div:nth-child(${number})`).click();
  }

};