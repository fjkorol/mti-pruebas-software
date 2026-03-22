import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Phones' }).click();
  await page.getByRole('link', { name: 'Laptops' }).click();
  await page.getByRole('link', { name: 'Monitors' }).click();
  await page.getByRole('img', { name: 'Second slide' }).click();
  await page.getByRole('link').filter({ hasText: /^$/ }).first().click();
  await page.getByRole('link', { name: 'PRODUCT STORE' }).click();
  await page.getByRole('link', { name: 'Laptops' }).click();
  await page.getByRole('link', { name: 'Sony vaio i7' }).click();
  await page.getByRole('link', { name: 'PRODUCT STORE' }).click();
  await expect(page.locator('#cat')).toContainText('CATEGORIES');
});