---
sidebar_position: 8
---

# Task

This tasks focuses on using Serverless API to create and modify Azure functions.

INSERT IMAGE HERE.

### 

- Add an optional task to implement slots and deployment with slots
- Add an optional task to implement a policy for caching with APIM
- Add an optional task to create and use App Config service.
- The task should be to implement the APIM integration and then use it.

## Assumptions
- You have Azure account with active trial period activated.
- You have public Github repository for saving your work there.  

## Prerequisites
- **Install** the latest version of Azure Functions Core Tools (https://learn.microsoft.com/en-us/azure/azure-functions/functions-run-local).
- **Install** the latest version of Azure CLI (https://learn.microsoft.com/en-us/cli/azure/install-azure-cli).
- **Install** the latest version of Serverless Framework (https://www.serverless.com/).

# Tasks

### Task 3.1
1. Create a Function app, called `SampleStoreApp`, using Azure core tools.
2. Upload this app to your Azure account.

### Task 3.2
3. Create an httpTriggered azure function inside `SampleStoreApp` called `getProductsList`, using Azure core tools. This function should "return" the array of product objects in a form:
```typescript
type Product = {
    id: string;
    title: string;
    description: string;
    price: integer
}
```
At the moment, data array could be just mocked - hardcoded in the function body (later in this cource you will modify this function to get data from db).
3. Launch the function app locally and verify that function it work as expected.
4. Upload function to your Azure account.


### Task 3.3

1. Create an httpTriggered azure function inside `SampleStoreApp` called `getProductsById`.
2. Function must retrieve the query parameter - product id and return the single product (in the same form as in previous task).
At the moment, all the logic and data can be incapsulated inside function body.
3. Launch the function app locally and verify that function it work as expected.
4. Upload function to your Azure account.

### Task 3.4

1. Repeat the steps from previous tasks, but now using Servereless API.
2. Note that for this purpose, you might need to perform advanced authentication as described [in this post](https://forum.serverless.com/t/unable-to-deploy-to-azure/9358). [Link for advanced authentication in serverless documentation](https://github.com/serverless/serverless-azure-functions#advanced-authentication).
3. All properties for function app and deployment must be configured in serverless.yml file.

### Task 3.5

1. Commit all your work to separate branch (e.g. `task-4` from the latest `master`) in your own repository.
2. Create a pull request to the `master` branch.
3. Submit the link to the pull request for crosscheck.

# Evaluation Criteria
- **20**
- **40**
- **65**
- **80**
# Optional Tasks
