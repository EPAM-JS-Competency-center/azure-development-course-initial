# Storage Account API

| Type            | Details                                                                                                                                                                                                      |
|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CLI             | https://learn.microsoft.com/en-us/cli/azure/storage/account?view=azure-cli-latest                                                                                                                            |
| PowerShell      | https://learn.microsoft.com/en-us/powershell/module/az.storage/?view=azps-9.5.0                                                                                                                              |
| Node.js	        | 1. https://learn.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-nodejs?tabs=managed-identity%2Croles-azure-portal%2Csign-in-azure-cli <br/> 2. https://github.com/Azure/azure-storage-node |
| ARM Template    | https://learn.microsoft.com/en-us/azure/templates/microsoft.storage/storageaccounts/queueservices/queues?pivots=deployment-language-arm-template                                                             |
| Graph Query KQL | https://learn.microsoft.com/en-us/azure/storage/common/resource-graph-samples?tabs=azure-cli                                                                                                                 | 

## Storage Account CLI Examples
Create: <br/>
https://learn.microsoft.com/en-us/cli/azure/storage/account?view=azure-cli-latest#az-storage-account-create

Remove:
<pre>
az storage account delete [--ids][--name][--resource-group][--subscription][--yes]
</pre>

List:
<pre>
az storage account list [--resource-group]
</pre>

## Storage Account Queue API

| Type         | Details                                                                                                                                                |
|--------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| CLI          | https://learn.microsoft.com/en-us/cli/azure/storage/queue?view=azure-cli-latest                                                                        |
| PowerShell   | https://learn.microsoft.com/en-us/azure/storage/queues/storage-powershell-how-to-use-queues                                                            |
| Node.js	     | 1. https://learn.microsoft.com/en-us/azure/storage/queues/storage-nodejs-how-to-use-queues <br/> 2. https://www.npmjs.com/package/@azure/storage-queue |
| ARM Template | https://learn.microsoft.com/en-us/azure/templates/microsoft.storage/storageaccounts/queueservices/queues?pivots=deployment-language-arm-template       |

## Storage Account Queue CLI Examples
Create:
<pre>
az storage queue create --name
                        [--account-key]
                        [--account-name]
                        [--auth-mode {key, login}]
                        [--connection-string]
                        [--fail-on-exist]
                        [--metadata]
                        [--queue-endpoint]
                        [--sas-token]
                        [--timeout]
</pre>
Remove:
<pre>
az storage queue delete --name
                        [--account-key]
                        [--account-name]
                        [--auth-mode {key, login}]
                        [--connection-string]
                        [--fail-not-exist]
                        [--queue-endpoint]
                        [--sas-token]
                        [--timeout]
</pre>

Check:
<pre>
az storage queue exists --name
                        [--account-key]
                        [--account-name]
                        [--auth-mode {key, login}]
                        [--connection-string]
                        [--queue-endpoint]
                        [--sas-token]
                        [--timeout]
</pre>

## Storage Account Table API

| Type          | Details                                                                                                                                                                                                                           |
|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CLI           | https://learn.microsoft.com/en-us/cli/azure/storage/table?view=azure-cli-latest                                                                                                                                                   |
| PowerShell    | https://learn.microsoft.com/en-us/azure/storage/tables/table-storage-how-to-use-powershell                                                                                                                                        |
| Node.js	      | 1. https://github.com/uglide/azure-content/blob/master/articles/storage/storage-nodejs-how-to-use-table-storage.md <br/> 2. https://www.npmjs.com/package/@azure/data-tables                                                      |
| ARM Template  | https://learn.microsoft.com/en-us/azure/templates/microsoft.storage/storageaccounts/tableservices/tables?pivots=deployment-language-arm-template                                                                                  |
| KQL           | https://learn.microsoft.com/en-us/azure/storage/common/resource-graph-samples                                                                                                                                                     |

## Storage Account Table CLI Examples
Create:
<pre>
az storage table create --name
                        [--account-key]
                        [--account-name]
                        [--auth-mode {key, login}]
                        [--connection-string]
                        [--fail-on-exist]
                        [--sas-token]
                        [--table-endpoint]
</pre>
Remove:
<pre>
az storage table delete --name
                        [--account-key]
                        [--account-name]
                        [--auth-mode {key, login}]
                        [--connection-string]
                        [--fail-not-exist]
                        [--sas-token]
                        [--table-endpoint]
</pre>

Check:
<pre>
az storage table exists --name
                        [--account-key]
                        [--account-name]
                        [--auth-mode {key, login}]
                        [--connection-string]
                        [--sas-token]
                        [--table-endpoint]
</pre>

## Storage Account Disk API

| Type         | Details                                                                                                                                          |
|--------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| CLI          | https://learn.microsoft.com/en-us/cli/azure/disk?view=azure-cli-latest                                                                           |
| PowerShell   | https://learn.microsoft.com/en-us/azure/virtual-machines/scripts/virtual-machines-powershell-sample-create-managed-disk-from-vhd                 |
| ARM Template | https://learn.microsoft.com/en-us/azure/templates/microsoft.storage/storageaccounts/queueservices/queues?pivots=deployment-language-arm-template |

## Storage Account Disk CLI Examples
Create: <br/>
https://learn.microsoft.com/en-us/cli/azure/disk?view=azure-cli-latest#az-disk-create

Remove:
<pre>
az disk delete [--ids]
               [--name]
               [--no-wait]
               [--resource-group]
               [--subscription]
               [--yes]
</pre>

Check:
<pre>
az disk show [--ids]
             [--name]
             [--resource-group]
             [--subscription]
</pre>

## Storage Account Disk API

| Type         | Details                                                                                                                                         |
|--------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| CLI          | https://learn.microsoft.com/en-us/cli/azure/storage/file?view=azure-cli-latest                                                                  |
| PowerShell   | https://learn.microsoft.com/en-us/azure/storage/files/storage-how-to-use-files-portal?tabs=azure-powershell                                     |
| Node.js      | https://www.npmjs.com/package/@azure/storage-file-share                                                                                         |                                                                                                                                                |
| ARM Template | https://learn.microsoft.com/en-us/azure/templates/microsoft.storage/storageaccounts/fileservices/shares?pivots=deployment-language-arm-template |

## Storage Account Disk CLI Examples
Create:
<pre>
az storage share create --name
                        [--account-key]
                        [--account-name]
                        [--connection-string]
                        [--fail-on-exist]
                        [--file-endpoint]
                        [--metadata]
                        [--quota]
                        [--sas-token]
                        [--timeout]
</pre>

Remove:
<pre>
az storage share delete --name
                        [--account-key]
                        [--account-name]
                        [--connection-string]
                        [--delete-snapshots {include}]
                        [--fail-not-exist]
                        [--file-endpoint]
                        [--sas-token]
                        [--snapshot]
                        [--timeout]
</pre>

Check:
<pre>
az storage share exists --name
                        [--account-key]
                        [--account-name]
                        [--connection-string]
                        [--file-endpoint]
                        [--sas-token]
                        [--snapshot]
                        [--timeout]
</pre>

## Storage Account REST Endpoints
Endpoints types:<br/>
 - Blob Storage = "**blob**"
 - Static website (Blob Storage) = "**web**"
 - Data Lake Storage Gen2 = "**dfs**"
 - Azure Files = "**file**"
 - Queue Storage = "**queue**"
 - Table Storage = "**table**"
 - DNS Prefix if used: "**z[00-99]**"

Endpoint Templates: <br/>
**Storage**: 
https://*<storage-account>*.*\<type>*.core.windows.net <br/>
**Storage Blob**: https://*<storage-account>*.*\<type>*.core.windows.net/*<container>*/*<blob_name>* <br/>
**Storage with DNS**: https://*<storage-account>*.*<dns_prefix>*.*\<type>*.core.windows.net <br/>
