import { test, expect } from '@playwright/test';

test('User can sign up', async ({ page }) => {
  const email = Date.now() + 'test@test.com';

  await page.goto('https://mern-store-gold.vercel.app/register');
  await page.getByRole('main').getByRole('textbox', { name: 'Please Enter Your Email' }).fill(email);
  await page.getByRole('textbox', { name: 'Please Enter Your First Name' }).fill('etst');
  await page.getByRole('textbox', { name: 'Please Enter Your Last Name' }).fill('Test');
  await page.getByRole('textbox', { name: 'Please Enter Your Password' }).fill(email);
  await page.getByRole('button', { name: 'Sign Up' }).click();
  
  await expect(page.getByRole('heading', { name: 'Account Details 444' }))
      .toBeVisible();
});