# Demo Web Shop Automation & API Testing

## Project Overview

This project focuses on UI Automation and API Testing of the Demo Web Shop application using Playwright, Postman, and Newman.

The project covers automated login validation, customer registration, product search, cart operations, checkout workflows, and REST API testing.

**Website:** https://demowebshop.tricentis.com/

**API Base URL:** https://jsonplaceholder.typicode.com

## Technologies Used

- JavaScript
- Node.js
- Playwright
- Postman
- Newman
- Allure Report
- Git & GitHub
- Visual Studio Code

## Project Structure

```text
Demo-Web-Shop-Automation/
│
├── pages/
│   ├── LoginPage.js
│   ├── RegisterPage.js
│   ├── ProductPage.js
│   ├── CartPage.js
│   ├── SearchPage.js
│   └── CheckoutPage.js
│
├── tests/
│   ├── invalid-login.spec.js
│   ├── register-add-to-cart.spec.js
│   └── product-search-checkout.spec.js
│
├── api-tests/
│   └── Demo Web Shop API Automation.postman_collection.json
│
├── utils/
│
├── playwright.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Part A — UI Automation

UI automation is implemented using Playwright with the Page Object Model (POM).

### Test Scenarios

**Q1: Invalid Login**
- Attempt login using invalid credentials.
- Verify the error message.
- Verify that the user is not logged in.

**Q2: Register and Add Product to Cart**
- Register a new customer.
- Log in to the account.
- Select a product.
- Add the product to the cart.
- Verify the cart details.

**Q3: Product Search and Checkout**
- Search for a product.
- Verify search results.
- Open the product details.
- Update product quantity.
- Add the product to the cart.
- Complete the checkout process.
- Verify the order confirmation.

### Install Dependencies

```bash
npm install
```

### Run All UI Tests

```bash
npx playwright test
```

### Run Individual Tests

```bash
npx playwright test tests/invalid-login.spec.js
```

```bash
npx playwright test tests/register-add-to-cart.spec.js
```

```bash
npx playwright test tests/product-search-checkout.spec.js
```

### View Playwright HTML Report

```bash
npx playwright show-report
```

### Generate and View Allure Report

```bash
npx allure generate allure-results --clean -o allure-report
```

```bash
npx allure open allure-report
```

## Part B — GitHub Workflow

The project uses separate Git branches for individual tasks.

- `Q1-Invalid-Login`
- `Q2-Register-Add-To-Cart`
- `Q3-Product-Search-Checkout`
- `Part-B-API-Automation`
- `main`
  
## Part C — API Automation

API testing is performed using Postman and Newman with JSONPlaceholder REST API.

**API Base URL:** https://jsonplaceholder.typicode.com

### API Test Scenarios

**1. GET All Users**
- Verify status code 200.
- Validate that the response is a non-empty array.
- Verify that each user contains ID, name, and email.
- Save a user ID dynamically.

**2. GET User by ID**
- Use the saved user ID.
- Verify status code 200.
- Validate that the returned user ID matches the saved ID.

**3. PUT Update User**
- Update name, email, phone, and company name using dynamic data.
- Verify status code 200.
- Validate the returned user ID.
- Verify the updated name, email, company name, and phone.

### Run API Tests Using Newman

```bash
newman run "api-tests/Demo Web Shop API Automation.postman_collection.json" --env-var "baseUrl=https://jsonplaceholder.typicode.com"
```

**Note:** JSONPlaceholder is a fake REST API. PUT requests return simulated updated data but do not permanently modify the server database.

## Test Reports

- Playwright HTML Report
- Allure Report
- Playwright screenshots and traces
- Newman CLI execution results

Generated reports and test result folders are excluded from Git using `.gitignore`.

Each task was developed in its respective branch and merged into the main branch.

## Author

**Name:** Mahfuzur Rahman
**ID:** 01402806910
**Batch:** 21

**Project Week 1:** AI-Assisted Test Automation Project

**Project:** Demo Web Shop Automation & API Testing
