import { test, expect } from '@playwright/test';

test('Login user', async ({ page }) => {
  
await page.goto('https://shopdemo-alex-hot.koyeb.app/login');
await page.getByRole('main').getByRole('textbox', { name: 'Please Enter Your Email' }).fill('abracadabra@mail.com');
await page.getByRole('textbox', { name: 'Please Enter Your Password' }).fill('abracadabra');
await page.getByRole('button', { name: 'Login' }).click();

await expect(page.getByRole('heading', { name: 'Login' }))
      .not.toBeVisible();
});