import { test, expect } from '@playwright/test';

test('Carrito compra demoblaze', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('user_manu_test');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('user123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Phones' }).click();
  await page.getByRole('link', { name: 'Nexus' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'PRODUCT STORE' }).click();
  await page.getByRole('link', { name: 'Laptops' }).click();
  await page.getByRole('link', { name: 'MacBook air' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Cart' }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  await page.getByRole('textbox', { name: 'Total: 1350 Name:' }).click();
  await page.getByRole('textbox', { name: 'Total: 1350 Name:' }).fill('Fernando');
  await page.getByRole('textbox', { name: 'Total: 1350 Name:' }).press('Tab');
  await page.getByRole('textbox', { name: 'Country:' }).fill('Posadas');
  await page.getByRole('textbox', { name: 'Country:' }).press('Tab');
  await page.getByRole('textbox', { name: 'City:' }).fill('Misiones');
  await page.getByRole('textbox', { name: 'City:' }).press('Tab');
  await page.getByRole('textbox', { name: 'Credit card:' }).click();
  await page.getByRole('textbox', { name: 'Credit card:' }).fill('123456789');
  await page.getByRole('textbox', { name: 'Month:' }).click();
  await page.getByRole('textbox', { name: 'Month:' }).fill('9');
  await page.getByRole('textbox', { name: 'Year:' }).click();
  await page.getByRole('textbox', { name: 'Year:' }).fill('2026');
  await page.getByRole('button', { name: 'Purchase' }).click();
  await expect(page.locator('body')).toContainText('Thank you for your purchase!');

});