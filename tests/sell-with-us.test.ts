import { test, expect } from '@playwright/test';
 
test("user can submit 'Become A MERN Store Seller!' form", async ({ page }) => {
  await page.goto('https://mern-store-gold.vercel.app/sell');
  await page.getByPlaceholder('Your Full Name').fill('Test');
  await page
      .getByPlaceholder('Your Email Address')
      .fill(Date.now() + 'test@test.com');
  await page
      .getByPlaceholder('Your Phone Number')
      .fill('1233214567');
  await page
      .getByPlaceholder('Your Business Brand')
      .fill('Brand');
  await page
      .getByPlaceholder('Please Describe Your Business')
      .fill('Subscribe me');
  await page.getByRole('button', {name: 'Submit'}).click();

  await expect(page.getByRole('textbox', { name: 'Your Full Name' })).toBeEmpty();
});
