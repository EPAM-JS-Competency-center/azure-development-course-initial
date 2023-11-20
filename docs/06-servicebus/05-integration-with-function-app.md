---
sidebar_position: 5
---

# Integration with Function App


## Integration with Service Bus Using Bindings

Here's an example of how you can integrate an Azure Function App with an Azure Service Bus using triggers.

1. Specify a trigger to use [Service Bus](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-service-bus-trigger?tabs=python-v2%2Cisolated-process%2Cnodejs-v3%2Cextensionv5&pivots=programming-language-typescript) in `function.json`
2. Implement a business logic
3. Test it with help of `http://localhost:<PORT>/admin/functions/<FUNCTION_NAME>` endpoints, for more detailed instructions read [here](https://learn.microsoft.com/en-us/azure/azure-functions/functions-run-local?tabs=windows%2Cisolated-process%2Cnode-v3%2Cpython-v2%2Cnon-http-trigger%2Ccontainer-apps&pivots=programming-language-typescript).

## Integration with Azure Storage Using Azure Service Bus  SDK

Alternatively, you can manually interact with Azure Service Bus using the Azure Service Bus SDK. Here's an example:

1. Install Azure Storage SDK `npm install @azure/service-bus`
2. Azure Function business logic to interact with Service Bus
```javascript
const { ServiceBusClient } = require("@azure/service-bus");

module.exports = async function (context, req) {
    // Don't forget to specify env variables :)
    const serviceBusConnectionString = process.env.ServiceBusConnectionString;
    const queueName = "your-queue-name";

    const serviceBusClient = new ServiceBusClient(serviceBusConnectionString);
    const sender = serviceBusClient.createSender(queueName);

    try {
        const messageBody = "Hello, Service Bus!";
        const message = {
            body: messageBody,
            label: "greeting",
        };

        // Send a message to the Service Bus queue
        await sender.sendMessages(message);
        context.res = {
            status: 200,
            body: "Message sent successfully to Service Bus queue.",
        };
    } catch (error) {
        context.res = {
            status: 500,
            body: `Error sending message to Service Bus: ${error.message}`,
        };
    } finally {
        await sender.close();
        await serviceBusClient.close();
    }
};

```

In this example, the function is triggered by an HTTP request and sends messages to Service Bus queue.
