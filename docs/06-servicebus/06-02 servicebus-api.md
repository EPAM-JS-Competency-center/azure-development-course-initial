# Service Bus API

| Type            | Details                                                                                                                                                                                                                       |
|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CLI             | https://learn.microsoft.com/en-us/cli/azure/servicebus/namespace?view=azure-cli-latest                                                                                                                                        |
| PowerShell      | 1. https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-manage-with-ps                           <br/> 2.https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-quickstart-powershell |
| Node.js	        | 1. https://learn.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-nodejs?tabs=managed-identity%2Croles-azure-portal%2Csign-in-azure-cli <br/> 2. https://github.com/Azure/azure-storage-node                  |
| ARM Template    | https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-resource-manager-overview                                                                                                                           |
| Graph Query KQL | https://learn.microsoft.com/en-us/azure/service-health/resource-graph-samples?tabs=azure-cli                                                                                                                                  | 
| Terraform       | https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/servicebus_namespace.html                                                                                                                     |
| REST            | https://learn.microsoft.com/en-us/rest/api/servicebus/                                                                                                                                                                        |

## Service Bus CLI Examples
Create: <br/>
<pre>
az servicebus namespace create --name
                               --resource-group
                               [--alternate-name]
                               [--capacity {1, 16, 2, 4, 8}]
                               [--disable-local-auth {false, true}]
                               [--encryption-config]
                               [--infra-encryption {false, true}]
                               [--location]
                               [--mi-system-assigned {false, true}]
                               [--mi-user-assigned]
                               [--min-tls {1.0, 1.1, 1.2}]
                               [--no-wait]
                               [--premium-messaging-partitions]
                               [--public-network {Disabled, Enabled}]
                               [--sku {Basic, Premium, Standard}]
                               [--tags]
                               [--zone-redundant {false, true}]
</pre>
Remove:
<pre>
az servicebus namespace delete [--ids]
                               [--name]
                               [--no-wait {0, 1, f, false, n, no, t, true, y, yes}]
                               [--resource-group]
                               [--subscription]
</pre>

Check:
<pre>
az servicebus namespace exists --name
</pre>

# Service Bus Queue API

| Type         | Details                                                                                                    |
|--------------|------------------------------------------------------------------------------------------------------------|
| CLI          | https://learn.microsoft.com/en-us/cli/azure/servicebus/queue?view=azure-cli-latest                         |
| PowerShell   | https://learn.microsoft.com/en-us/powershell/module/az.servicebus/get-azservicebusqueue?view=azps-10.0.0   |
| Node.js	     | https://www.npmjs.com/package/@azure/service-bus                                                           |
| ARM Template | https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-resource-manager-namespace-queue | 
| Terraform    | https://registry.terraform.io/providers/hashicorp/azurerm/3.45.0/docs/resources/servicebus_queue.html      |

# Service Bus Queue CLI Examples
Create: <br/>
<pre>
az servicebus queue create --name
                           --namespace-name
                           --resource-group
                           [--auto-delete-on-idle]
                           [--default-message-time-to-live]
                           [--duplicate-detection {0, 1, f, false, n, no, t, true, y, yes}]
                           [--duplicate-detection-history-time-window]
                           [--enable-batched-operations {0, 1, f, false, n, no, t, true, y, yes}]
                           [--enable-dead-lettering-on-message-expiration {0, 1, f, false, n, no, t, true, y, yes}]
                           [--enable-express {0, 1, f, false, n, no, t, true, y, yes}]
                           [--enable-partitioning {0, 1, f, false, n, no, t, true, y, yes}]
                           [--enable-session {0, 1, f, false, n, no, t, true, y, yes}]
                           [--forward-dead-lettered-messages-to]
                           [--forward-to]
                           [--lock-duration]
                           [--max-delivery-count]
                           [--max-message-size]
                           [--max-size]
                           [--status {Active, Creating, Deleting, Disabled, ReceiveDisabled, Renaming, Restoring, SendDisabled, Unknown}]
</pre>
Remove:
<pre>
az servicebus queue delete [--ids]
                           [--name]
                           [--namespace-name]
                           [--resource-group]
                           [--subscription]
</pre>

List:
<pre>
az servicebus queue list --namespace-name
                         --resource-group
                         [--skip]
                         [--top]
</pre>

# Service Bus Topic API

| Type         | Details                                                                                                                          |
|--------------|----------------------------------------------------------------------------------------------------------------------------------|
| CLI          | https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-tutorial-topics-subscriptions-cli                      |
| PowerShell   | https://learn.microsoft.com/en-us/powershell/module/az.servicebus/new-azservicebustopic?view=azps-10.0.0                         |
| Node.js	     | https://www.npmjs.com/package/@azure/service-bus                                                                                 |
| ARM Template | https://learn.microsoft.com/en-us/azure/templates/microsoft.servicebus/namespaces/topics?pivots=deployment-language-arm-template | 
| Terraform    | https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/servicebus_topic.html                            |

# Service Bus Topic CLI Examples
Create: <br/>
<pre>
az servicebus topic create --name
                           --namespace-name
                           --resource-group
                           [--auto-delete-on-idle]
                           [--default-message-time-to-live]
                           [--duplicate-detection {0, 1, f, false, n, no, t, true, y, yes}]
                           [--duplicate-detection-history-time-window]
                           [--enable-batched-operations {0, 1, f, false, n, no, t, true, y, yes}]
                           [--enable-express {0, 1, f, false, n, no, t, true, y, yes}]
                           [--enable-ordering {0, 1, f, false, n, no, t, true, y, yes}]
                           [--enable-partitioning {0, 1, f, false, n, no, t, true, y, yes}]
                           [--max-message-size]
                           [--max-size]
                           [--status {Active, Creating, Deleting, Disabled, ReceiveDisabled, Renaming, Restoring, SendDisabled, Unknown}]
</pre>
Remove:
<pre>
az servicebus topic delete [--ids]
                           [--name]
                           [--namespace-name]
                           [--resource-group]
                           [--subscription]
</pre>

List:
<pre>
az servicebus topic delete [--ids]
                           [--name]
                           [--namespace-name]
                           [--resource-group]
                           [--subscription]
</pre>
