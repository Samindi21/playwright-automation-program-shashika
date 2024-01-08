/*

1)go to url and open the page
2)click subject bar of 'Computer science and information technology'
3)click on computer science
4)check whether the page is redirected to the computer science page
5)check the heading "Computer Science" is displayed.
 
*/

import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://onlinelibrary.wiley.com');



  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);


  await page.close();

});