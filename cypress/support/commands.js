/**
 * Custom command to login as test user (standard_user)
 * Dedicated user for functional tests (non-login tests)
 */
Cypress.Commands.add('loginAsTestUser', () => {
  cy.visit('/index.html');
  cy.get('[data-test="username"]').clear().type('standard_user');
  cy.get('[data-test="password"]').clear().type('secret_sauce');
  cy.get('#login-button').click();
});
