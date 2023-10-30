---
sidebar_position: 8
---

# Task
------

## Task 4.1

Use Terraform to create a CosmosDB database and create two collections inside DB.

### Product Model
```typescript
type Product = {
    id: string; // UUID, primary and partition key
    title: string;
    description: string;
    price: integer
}
```

### Stock Model
```typescript
type Stock = {
    product_id: string; // primary and partition key
    count: number;
}
```

Create a script to fill tables with test data. Store the script inside your Github repository.
Execute it to fill your DB with test data.

:::tip
You can use `faker` NPM package to help you generate random data.
:::

## Task 4.2

1. Integrate the `http-get-products-list` Azure Function to return list of products from the database via `GET /products`. It should return both products and stocks for them.
2. Implement a Product model on FE side as joined model of product and stock by productId. For example

FE: One product model
```js
  {
    id: '19ba3d6a-f8ed-491b-a192-0a33b71b38c4',
    count: 2
    price: 200,
    title: ‘Product Title’,
    description: ‘This product ...’
  }
```
4. Integrate the `http-get-product-by-id` Azure Function to return via `GET /products/{productId}` a single product from the database. 

## Task 4.3

1. Create an Azure function called `http-post-product` will be triggered by the HTTP POST method.
2. The requested URL should be `/products`.
3. Implement its logic so it will be creating a new item in a Products container.
4. Integrate the endpoint on the Front-end application

## Task 4.4

1. Commit all your work to separate branch (e.g. `task-4` from the latest `master`) in BE (backend) and if needed in FE (frontend) repositories.
2. Create a pull request to the `master` branch.
3. Submit the link to the pull request for crosscheck

# Evaluation Criteria (70 points for covering all criteria)
------
Reviewers should verify the lambda functions by invoking them through provided URLs.

- Task 4.1 is implemented
- Task 4.2 is implemented lambda links are provided and returns data
- Task 4.3 is implemented lambda links are provided and products is stored in DB (call Task 4.2 to see the product)
- Your own Frontend application is integrated with Product Service (/products API) and products from Product Service are represented on Frontend. Link to a working Frontend application is provided for cross-check reviewer.

## Optional Tasks

- **+6** - `POST /products` function returns 400 status code if product data is invalid;
- **+6** - All functions use `context.log` to log information about incoming requests;
- **+6** - An application is using managed identity to connect to the Cosmos DB;
- **+6** - Implement `GET /products/total` that returns an aggregation of total products available.

# Description Template for PRs
---
:::note
This should be present in the PR\s description!
:::

1. What was done?
2. Link to Product Service API.
3. Link to FE PR (Your own repository).
4. In case Swagger file is not provided - please provide product schema in PR description


