/*
1)go to url and loads the homepage
2)click 'Login/Register' 
3)validate the heading 'log into Wiley Online Library' is displayed or not
4)click email textbox
5)Enter email
6)click password textbox
7)enter your password
8)click 'Log In' button

*/

const {test , expect} = require ('@playwright/test');

test.only('Register Page', async ({page})=> {

    await page.goto('https://onlinelibrary.wiley.com'); //continue keep throughtout alive

    //await page.getByRole('label',{class:'sign-in-label'}).click();

    const linkText = 'Login / Register'; // Replace with the actual text of the link you want to click
    await page.click(`text=${linkText}`);

    //validate the heading
    //const headingText = await page.textContent()
    const headingText = 'Log in to Wiley Online Library';
    await expect(page.getByText(headingText)).toBeVisible();


    // Fill in the username and password fields
    await page.type('input[id="username"]','shashikasamindi1221@gmail.com');
    await page.type('input[id="password"]', 'ShashiS');

    await page.locator()
    
    await page.waitForTimeout(2000);


    await page.click('#pb-page-content > div > div.popup.login-popup > div > div.modal__body > div.login-form > form > div.align-end > span > input');
    
    await page.waitForTimeout(3000);


    await page.close();

} )





