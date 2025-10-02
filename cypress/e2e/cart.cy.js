import InventoryPage from '../pages/InventoryPage';
import CartPage from '../pages/CartPage';

const productsData = require('../fixtures/products.json');

describe('Cart Operations Tests', () => {
  const inventoryPage = new InventoryPage();
  const cartPage = new CartPage();

  beforeEach(() => {
    cy.loginAsTestUser();
    inventoryPage.verifyInventoryPageIsDisplayed();
  });

  it('should add two products and delete one from cart', () => {
    const [product1, product2] = productsData.products;

    inventoryPage.addProductToCart(product1.name);
    inventoryPage.addProductToCart(product2.name);
    inventoryPage.verifyCartBadgeCount(2);

    inventoryPage.goToCart();
    cartPage.verifyCartPageIsDisplayed();
    cartPage.verifyCartItemsCount(2);
    cartPage.verifyProductInCart(product1.name);
    cartPage.verifyProductInCart(product2.name);

    cartPage.removeProductFromCart(product1.name);

    cartPage.verifyProductNotInCart(product1.name);

    cartPage.verifyProductInCart(product2.name);

    cartPage.verifyCartItemsCount(1);
    inventoryPage.verifyCartBadgeCount(1);
  });
});
