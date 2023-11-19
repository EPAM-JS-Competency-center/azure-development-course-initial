---
sidebar_position: 4
---

# Integration with Function App

## Integration with Azure Storage Using Bindings

Azure Functions support input (trigger) and output bindings, which simplify the interaction with 
external services like Azure Storage. 

:::info
For local development you would need to have a Storage Account.
You can use [azurite](https://www.npmjs.com/package/azurite) npm package for that. Start azurite server.
Specify `"AzureWebJobsStorage": "UseDevelopmentStorage=true"` in `local.settings.json` file.
:::

Here's an example of how you can integrate an Azure Function App with an Azure Storage Account using input bindings.

1. Specify a trigger to use [Blob type](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-storage-blob-trigger?tabs=python-v2%2Cisolated-process%2Cnodejs-v3&pivots=programming-language-typescript) in `function.json`
2. Implement a business logic
3. Test it with help of `http://localhost:<PORT>/admin/functions/<FUNCTION_NAME>` endpoints, for more detailed instructions read [here](https://learn.microsoft.com/en-us/azure/azure-functions/functions-run-local?tabs=windows%2Cisolated-process%2Cnode-v3%2Cpython-v2%2Cnon-http-trigger%2Ccontainer-apps&pivots=programming-language-typescript).

## Integration with Azure Storage Using Azure Storage SDK

Alternatively, you can manually interact with Azure Storage using the Azure Storage SDK. Here's an example:

1. Install Azure Storage SDK `npm install @azure/storage-blob`
2. Azure Function business logic to interact with Storage Account
```javascript
const { BlobServiceClient } = require('@azure/storage-blob');

module.exports = async function (context, req) {
    context.log("JavaScript HTTP trigger function processed a request.");

    // Use Azure Storage SDK to interact with Storage Account
    const blobServiceClient = BlobServiceClient.fromConnectionString(process.env.AzureWebJobsStorage);
    const containerClient = blobServiceClient.getContainerClient('your-container-name');
    const blobName = 'exampleBlob.txt';
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    // Upload content to blob
    const content = "Hello from Azure Function!";
    await blockBlobClient.upload(content, content.length);

    context.res = {
        body: "Blob content uploaded successfully!",
    };
};
```

In this example, the function is triggered by an HTTP request and uploads content to a blob in the specified container.
