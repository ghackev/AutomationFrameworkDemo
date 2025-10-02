class InventoryPage {
  elements = {
    inventoryContainer: () => cy.get('.inventory_list'),
    shoppingCartBadge: () => cy.get('.shopping_cart_badge'),
    shoppingCartLink: () => cy.get('.shopping_cart_link'),
  };

  verifyInventoryPageIsDisplayed() {
    cy.url().should('include', '/inventory.html');
    this.elements.inventoryContainer().should('be.visible');
  }

  verifyInventoryPageIsNotDisplayed() {
    cy.url().should('not.include', '/inventory.html');
  }

  getProductByName(productName) {
    return cy.contains('.inventory_item', productName);
  }

  addProductToCart(productName) {
    this.getProductByName(productName)
      .find('.btn_inventory')
      .click();
  }

  verifyCartBadgeCount(expectedCount) {
    if (expectedCount === 0) {
      this.elements.shoppingCartBadge().should('not.exist');
    } else {
      this.elements.shoppingCartBadge()
        .should('be.visible')
        .and('have.text', expectedCount.toString());
    }
  }

  goToCart() {
    this.elements.shoppingCartLink().click();
  }
}

export default InventoryPage;
