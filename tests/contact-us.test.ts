import { test, expect } from '@playwright/test';

const users = ['test75315611@test.com', 'abracadabrabro@test.com']

// for (const user of users) {
//   test('test' + user, async ({ page }) => {
//     await page.goto('https://mern-store-gold.vercel.app/contact');
//     await page.getByRole('textbox', { name: 'You Full Name' }).click();
//     await page.getByRole('textbox', { name: 'You Full Name' }).fill('test');
//     await page.getByRole('textbox', { name: 'Your Email Address' }).click();
//     await page.getByRole('textbox', { name: 'Your Email Address' }).fill(Date.now() + user);
//     await page.getByRole('textbox', { name: 'Please Describe Your Message' }).click();
//     await page.getByRole('textbox', { name: 'Please Describe Your Message' }).fill('Hello my first test by Playwright!');
//     await page.getByRole('button', { name: 'Submit' }).click();

//     await expect(page.getByRole('textbox', { name: 'You Full Name' })).toBeEmpty();
//   });
// }



  test('user can submit contact us form with email that was used before', async ({ page }) => {
    await page.goto('https://mern-store-gold.vercel.app/contact');
    await page.getByRole('textbox', { name: 'You Full Name' }).click();
    await page.getByRole('textbox', { name: 'You Full Name' }).fill('test');
    await page.getByRole('textbox', { name: 'Your Email Address' }).click();
    await page.getByRole('textbox', { name: 'Your Email Address' }).fill(Date.now() + "test@test.com");
    await page.getByRole('textbox', { name: 'Please Describe Your Message' }).click();
    await page.getByRole('textbox', { name: 'Please Describe Your Message' }).fill('Hello my first test by Playwright!');
    await page.getByRole('button', { name: 'Submit' }).click();

    await expect(page.getByRole('textbox', { name: 'You Full Name' })).toBeEmpty();
});



test('user can NOT submit contact us form with email that was used before', async ({ page }) => {
    await page.goto('https://mern-store-gold.vercel.app/contact');
    await page.getByRole('textbox', { name: 'You Full Name' }).click();
    await page.getByRole('textbox', { name: 'You Full Name' }).fill('test');
    await page.getByRole('textbox', { name: 'Your Email Address' }).click();
    await page.getByRole('textbox', { name: 'Your Email Address' }).fill("test@test.com");
    await page.getByRole('textbox', { name: 'Please Describe Your Message' }).click();
    await page.getByRole('textbox', { name: 'Please Describe Your Message' }).fill('Hello my first test by Playwright!');
    await page.getByRole('button', { name: 'Submit' }).click();

    await expect(page.getByRole('heading', { name: 'Please Try Again!' }))
        .toBeVisible();
    await expect(page.getByText('A request already existed for same email address'))
        .toBeVisible(); 
});
