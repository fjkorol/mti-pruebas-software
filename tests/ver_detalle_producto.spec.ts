import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Laptops' }).click();
  await page.getByRole('link', { name: 'MacBook air' }).click();
  await expect(page.locator('h3')).toContainText('$700 *includes tax');
});