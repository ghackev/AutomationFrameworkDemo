class CartPage {
  elements = {
    cartContainer: () => cy.get('.cart_list'),
    cartItems: () => cy.get('.cart_item'),
    continueShoppingButton: () => cy.get('#continue-shopping'),
  };

  verifyCartPageIsDisplayed() {
    cy.url().should('include', '/cart.html');
    this.elements.cartContainer().should('be.visible');
  }

  verifyCartPageIsNotDisplayed() {
    cy.url().should('not.include', '/cart.html');
  }

  getCartItemByName(productName) {
    return cy.contains('.cart_item', productName);
  }

  verifyProductInCart(productName) {
    this.getCartItemByName(productName).should('be.visible');
  }

  verifyProductNotInCart(productName) {
    this.getCartItemByName(productName).should('not.exist');
  }

  removeProductFromCart(productName) {
    this.getCartItemByName(productName)
      .find('.cart_button')
      .click();
  }

  verifyCartIsEmpty() {
    this.elements.cartItems().should('not.exist');
  }

  verifyCartItemsCount(expectedCount) {
    this.elements.cartItems().should('have.length', expectedCount);
  }

  continueShopping() {
    this.elements.continueShoppingButton().click();
  }
}

export default CartPage;
