# Sauce Demo Automation Framework

## Installation

```bash
git clone https://github.com/ghackev/AutomationFrameworkDemo
cd AutomationFrameworkDemo
npm install
```

## Project Structure

```
AutomationFrameworkDemo/
├── cypress/
│   ├── e2e/                    # Test files
│   │   ├── login.cy.js         # Login tests (success & failure)
│   │   └── cart.cy.js          # Cart tests
│   ├── fixtures/               # Test data
│   │   ├── users.json          # User credentials
│   │   └── products.json       # Product information
│   ├── pages/                  # Page Object Model
│   │   ├── LoginPage.js
│   │   ├── InventoryPage.js
│   │   └── CartPage.js
│   └── support/                # Custom commands & configuration
├── cypress.config.js           # Cypress configuration
└── package.json
```

## Available Commands

```bash
# Run all tests (headless)
npm test

# Run tests with browser visible
npm run test:headed

# Run only login tests
npm run test:login

# Run only cart tests
npm run test:cart

# Open Cypress Test Runner
npm run open
```

## Test Scenarios

### 1. Login Tests (Data-Driven)
- Successful login with 3+ valid users
- Failed login with invalid credentials
- Error message validation

### 2. Cart Operations Tests
- Add products to cart
- Verify products
- Remove products from cart
- Cart badge count validation

## Technologies

- **Cypress** v15.3.0 - E2E testing framework
- **JavaScript** - Programming language
- **POM Pattern** - Page Object Model for maintainability
- **Data-Driven Testing** - Using JSON fixtures
