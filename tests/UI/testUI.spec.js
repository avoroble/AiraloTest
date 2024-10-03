import { test, expect } from '@playwright/test';
import { MainPage } from '../../src/pages/main-page';
import { CountryPage } from '../../src/pages/country-page';

test('UI: Verify Moshi Moshi package details', async ({ page }) => {
  
  // 1. Go to Main Page
  const mainPage = new MainPage(page);
  await mainPage.goto();

  // 2. Search and Select Japan
  await mainPage.searchCountry('Japan');
  await mainPage.selectCountry('Japan');

  // 3. Select first eSIM package
  const countryPage = new CountryPage(page);
  await countryPage.selectPackage(1);

  // 4. Verify Package Details
    // a. Verify Title is Moshi Moshi
    await expect(page.getByTestId('sim-detail-operator-title').getByText('Moshi Moshi')).toBeVisible();
    // b. Verify Coverage is Japan
    await expect(page.getByTestId('sim-detail-info-list').getByText('COVERAGE Japan')).toBeVisible();
    // c. Verify Data is 1Gb
    await expect(page.getByTestId('sim-detail-info-list').getByText('DATA 1 GB')).toBeVisible();
    // d. Verify Validity is 7 Days
    await expect(page.getByTestId('sim-detail-info-list').getByText('VALIDITY 7 Days')).toBeVisible();
    // e. Verify Price is $4.50
    await expect(page.getByTestId('sim-detail-info-list').getByText('PRICE $4.50 USD')).toBeVisible();

});
