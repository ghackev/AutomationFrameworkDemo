import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';

const usersData = require('../fixtures/users.json');

describe('Login Tests - Data Driven Approach', () => {
  const loginPage = new LoginPage();
  const inventoryPage = new InventoryPage();

  describe('Successful Login', () => {
    usersData.validUsers.forEach((user) => {
      it(`should successfully login with ${user.username}`, () => {
        loginPage.visit();

        loginPage.login(user.username, user.password);

        loginPage.verifyLoginPageIsNotDisplayed();
        inventoryPage.verifyInventoryPageIsDisplayed();
      });
    });
  });

  describe('Failed Login', () => {
    usersData.invalidUsers.forEach((user) => {
      it(`should fail login with ${user.description}`, () => {
        loginPage.visit();

        loginPage.login(user.username, user.password);

        loginPage.verifyErrorMessage(user.expectedError);
        loginPage.verifyLoginPageIsDisplayed();
      });
    });
  });
});
