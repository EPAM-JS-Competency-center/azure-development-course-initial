---
sidebar_position: 7
---

# Task

This task focuses on integration of Function App with Cosmos DB.

INSERT IMAGE HERE.

# Tasks

## Task 4.1

Use Azure Portal to create a CosmosDB database and create two collections inside DB.

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

1. Add CosmosDB and collections to your Terraform definition. 
2. Integrated the `getProductList` function to return list of products from the database. It should return both products and stocks for them. Use HTTP Trigger for that.

...

## Task 4.3

saf

## Task 4.4


# Evaluation Criteria

- **20**
- **40**
- **65**
- **80**

# Optional Tasks

- **+4** - `POST /products` function returns 400 status code if product data is invalid;
- **+4** - All functions use `context.log` to log information about incoming requests.
- **+4** - TBD
- **+4** - TBD 

