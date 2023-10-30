---
sidebar_position: 8
---

# Tasks

---

This tasks focuses on using Serverless API to create and modify Azure functions.

## Prerequisites
- **Install** the latest version of Azure Functions Core Tools (https://learn.microsoft.com/en-us/azure/azure-functions/functions-run-local).
- **Install** the latest version of Azure CLI (https://learn.microsoft.com/en-us/cli/azure/install-azure-cli).

# Tasks

### Task 3.1
Create a Function app, called `fa-products-service-sand-ne-001`, using Azure terraform.

### Task 3.2

:::info
If you do not want to use APIM you can access the Function APIs with API Key Authorisation, for more
read [here](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-http-webhook-trigger?tabs=python-v2%2Cisolated-process%2Cnodejs-v4%2Cfunctionsv2&pivots=programming-language-typescript#api-key-authorization);
:::

1. Create an httpTriggered azure function called `http-get-product-lits`, path `/products`. This function should "return" the array of product objects in a form:
```typescript
type Product = {
    id: string;
    title: string;
    description: string;
    price: integer
}
```
At the moment, data array could be just mocked - hardcoded in the function body (later in this cource you will modify this function to get data from db).
2. Launch the function app locally and verify that function it work as expected.
3. This endpoint should be integrated with frontend app for PLP representaiton.

### Task 3.3

1. Create an httpTriggered azure function called `http-get-product-by-id`, path `/products/{productId}`.
2. Function must retrieve the query parameter - product id and return the single product (in the same form as in previous task).
3. Launch the function app locally and verify that function it work as expected.

### Task 3.4

1. Commit all your work to separate branch (e.g. `task-3` from the latest `master`) in your own repository.
2. Create a pull request to the `master` branch.
3. Submit the link to the pull request for crosscheck.

# Evaluation Criteria

Reviewers should verify the azure functions by invoking them through provided URLs.
- Verify that get products list returns full list of products;
- Verify that get product by id returns a product.
- Verify that front-end application renders the products returned from API.

# Optional Tasks

- **+5** - Implement slots and deployment with slots (use azure CLI)
- **+10** - Implement integration with APIM and then implement a policy for caching with APIM
- **+5** - Create and use App Config Service.

# Description Template for PRs
---
:::note
This should be present in the PR\s description!
:::

1. What was done?
2. Link to Product Service API.
3. Link to FE PR (Your own repository).
4. In case Swagger file is not provided - please provide product schema in PR description
