const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test('Login Test', async ({ page }) => {
    const loginPage = new LoginPage(page);
        await page.goto('/');
        await loginPage.login('admin@mail.com', 'password');
}
);