import { Selector } from 'testcafe';

fixture("Login Tests")
    .page("https://beta.deepthought.education/login");

test("Successful Login", async t => {
    
    const usernameInput = Selector('#username');
    const passwordInput = Selector('#password');
    const submitButton = Selector('#login-button');

    
    await t
        .typeText(usernameInput, 'Amolc24')
        .typeText(passwordInput, 'Amol@7875')
        .click(submitButton);

    
    const dashboardPage = Selector('#dashboard');
    await t.expect(dashboardPage.exists).ok();
});

test("Unsuccessful Login with Invalid Credentials", async t => {
    
    const usernameInput = Selector('#username');
    const passwordInput = Selector('#password');
    const submitButton = Selector('#login-button');

   
    await t
        .typeText(usernameInput, 'invalid_username')
        .typeText(passwordInput, 'invalid_password')
        .click(submitButton);

    const errorMessage = Selector('.error-message');
    await t.expect(errorMessage.exists).ok();

    await t.expect(errorMessage.innerText).contains('Invalid credentials');
});
