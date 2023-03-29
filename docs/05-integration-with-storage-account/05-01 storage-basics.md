# General Overview

An Azure storage account contains all of your Azure Storage data objects, including blobs, file shares, queues, tables, and disks. 
Each storage account provides a unique namespace for your Azure Storage data that's accessible from anywhere in the world over HTTP or HTTPS. 
All data in storage accounts is automatically encrypted on the service side. 
Premium performance storage accounts use solid-state drives (SSDs).

## Storage Account related resources

1. Storage Account (base or root entity for all other resources)
2. Container in the storage account (root entity for blobs)
3. Blob
4. File Share (service that offers file shares in the cloud using the standard SMB Protocol)
5. Queue
6. Table
7. Disc
8. SAS Policy (shared access signature (SAS) provides delegated access to resources in your storage account. This means that you can grant a client limited permissions to objects in your storage account for a specified period of time and with a specified set of permissions, without having to share your account access keys)

## Storage Account redundancy types
1. Locally redundant storage (LRS)
2. geo-redundant storage (GRS)
3. read-access geo-redundant storage (RA-GRS)
4. Zone-redundant storage (ZRS)
5. geo-zone-redundant storage (GZRS)
6. read-access geo-zone-redundant storage (RA-GZRS)

## Storage account tier types:
1. Standard general-purpose v2 (Block Blobs, Append Blobs; LRS, GRS, RA-GRS, ZRS, GZRS, RA-GZRS)
2. Premium block blobs (Block Blobs; LRS, ZRS)
3. Premium file shares (Azure Files; LRS, ZRS)
4. Premium page blobs (Page blobs; LRS)

## Storage Account Queues
Azure Queue storage is an Azure service that implements cloud-based queues. 
Each queue maintains an inventory of messages. 
Application components access a queue employing a REST API or an Azure-supplied client library. 
Typically, you’ll have one or more sender components and one or more receiver components. 
Sender components add messages to the queue. 
Messages are retrieved from the front of the queue for processing by receiver components. 
Storage Queues are part of the Azure Storage infrastructure, feature a simple REST-based GET/PUT/PEEK interface, providing reliable, persistent messaging within and between services.

## Storage Account Table Storage
Azure Table storage behaves as a service that stores structured NoSQL data inside the cloud, producing an attribute store with a schema less design. 
Because Table storage is schema less, it is easy to adapt your data because the needs of your application evolve. 
Access to Table storage data is fast and cost-effective for several sorts of applications and is usually lower in cost than traditional SQL for similar volumes of knowledge.

**Table**: A table is a group of entities and it does not enforce a schema on entities, which refer that table. 
Table can contain entities that have different sets of properties.

**Entity**: An entity is a collection of properties, alike a database row. An entity in Azure Storage can be up to 1MB in size. An entity in Azure Cosmos DB will be up to 2MB in size.

**Properties**: A property is a name-value pair. 
Each entity can comprise up to 252 properties to store data.
Each entity also has three system properties that state a partition key, a row key, and a timestamp. 
Entities with an equivalent partition key are often queried more quickly and inserted/updated in atomic operations. 
An entity’s row key’s its unique identifier within a partition.

Typical use-cases:
- Storing datasets that do not require complex joins, foreign keys, or stored procedures and may be denormalized for fast access
- Quickly querying data using a clustered index
- Accessing data using the OData protocol and LINQ queries with WCF Data Service .NET Libraries

## Storage Account Disk Storage
Azure managed disks are block-level storage parts that are managed by Azure and used with Azure Virtual Machines.
Managed disks are similar a physical disk in an on-premises server but virtualized. In managed disks, all you must do is specify the disk size, type, and provision the disk. 
Once the disk is provisioned, Azure handles the rest. 
Each disk can take one of three roles in a virtual machine:
To address these needs, the organization’s got to option is Azure Disk Storage. 

The Azure Disk Storage is capable of:
- “Lift and shift” of applications that use native file system APIs to read and write data to persistent disks.
- Preserve data that is not required to be accessed from outside the virtual machine to which the disk is attached.

## Storage Account File Shares
Azure Files offers fully managed file shares in the cloud that are accessible via the industry standard Server Message Block (SMB) protocol, Network File System (NFS) protocol, and Azure Files REST API. 
Azure file shares can be mounted concurrently by cloud or on-premises deployments. 
SMB Azure file shares are accessible from Windows, Linux, and macOS clients. 
NFS Azure file shares are accessible from Linux clients. 
Additionally, SMB Azure file shares can be cached on Windows servers with Azure File Sync for fast access near where the data is being used.

Azure file shares typical use-cases:
-	**Replace or supplement on-premises file servers** (Popular operating systems such as Windows, macOS, and Linux can directly mount Azure file shares wherever they are in the world);
-	**"Lift and shift" applications** (files enables both the "classic" lift and shift scenario, where both the application and its data are moved to Azure, and the "hybrid" lift and shift scenario, where the application data is moved to Azure Files, and the application continues to run on-premises);
-	**Shared application settings** (application instances can load their configuration through the Azure Files REST API)
-	**Diagnostic share** (logs can be written by the application instances via the File REST API, and developers can access them by mounting the file share on their local machine);
-	**Dev/Test/Debug** (by mounting an Azure file share locally on the VMs, a developer and administrator can quickly access their tools and utilities, no copying required);
-	**Containerization** (file shares can be used as persistent volumes for stateful containers, "build once, run anywhere").

## Storage Account Blobs
Types of blobs: <br/>
Block blobs store text and binary data. Block blobs are made up of blocks of data that can be managed individually. Block blobs can store up to about 190.7 TiB.
Append blobs are made up of blocks like block blobs, but are optimized for append operations. Append blobs are ideal for scenarios such as logging data from virtual machines.
Page blobs store random access files up to 8 TiB in size. Page blobs store virtual hard drive (VHD) files and serve as disks for Azure virtual machines. For more information about page blobs, see Overview of Azure page blobs
For more information about the different types of blobs, see Understanding Block Blobs, Append Blobs, and Page Blobs.

Blob naming rules:
- A blob name can contain any combination of characters.
- A blob name must be at least one character long and cannot be more than 1,024 characters long, for blobs in Azure Storage.
- Blob names are case-sensitive.
- Reserved URL characters must be properly escaped.
- The number of path segments comprising the blob name cannot exceed 254. A path segment is the string between consecutive delimiter characters (e.g., the forward slash '/') that corresponds to the name of a virtual directory.

## Storage Account Blob Storage vs File Storage
Both services have their own defined properties and are implemented in different scenarios. 
Azure Files provides fully managed and organized cloud file shares that can be accessed from anywhere. 
Azure Blob Storage permits the storage of unstructured data, and it can be accessed at a massive scale

## Storage Account Blob events
Azure Storage events allow applications to react to events, such as the creation and deletion of blobs.
Blob storage events are pushed using Azure Event Grid to subscribers such as Azure Functions, Azure Logic Apps, or even to your own http listener.

Portal Example: https://learn.microsoft.com/en-us/azure/event-grid/blob-event-quickstart-portal?toc=%2Fazure%2Fstorage%2Fblobs%2Ftoc.json

PS Example: https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-event-quickstart-powershell?toc=%2Fazure%2Fstorage%2Fblobs%2Ftoc.json

CLI Example: https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-event-quickstart?toc=%2Fazure%2Fstorage%2Fblobs%2Ftoc.json

Blob Event Examples: https://learn.microsoft.com/en-us/azure/event-grid/event-schema-blob-storage?toc=%2Fazure%2Fstorage%2Fblobs%2Ftoc.json&tabs=event-grid-event-schema
