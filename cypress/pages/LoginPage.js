class LoginPage {
  elements = {
    usernameInput: () => cy.get('[data-test="username"]'),
    passwordInput: () => cy.get('[data-test="password"]'),
    loginButton: () => cy.get('#login-button'),
    errorMessage: () => cy.get('[data-test="error"]'),
  };

  visit() {
    cy.visit('/index.html');
  }

  verifyLoginPageIsDisplayed() {
    cy.url().should('include', '/index.html');
    this.elements.loginButton().should('be.visible');
  }

  verifyLoginPageIsNotDisplayed() {
    cy.url().should('not.include', '/index.html');
  }

  login(username, password) {
    if (username) {
      this.elements.usernameInput().clear().type(username);
    } else {
      this.elements.usernameInput().clear();
    }

    if (password) {
      this.elements.passwordInput().clear().type(password);
    } else {
      this.elements.passwordInput().clear();
    }

    this.elements.loginButton().click();
  }

  verifyErrorMessage(expectedError) {
    this.elements.errorMessage()
      .should('be.visible')
      .and('contain.text', expectedError);
  }
}

export default LoginPage;
