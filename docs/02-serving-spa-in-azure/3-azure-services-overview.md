---
description: Serve Singe Page Application (SPA) in Azure
---

# Azure services overview
For the purposes of handling the SPA in Azure, we have at least two most suitable ways:
1. SPA-specific service **Azure Static Web App** (newer variant)
2. **Azure Blob Storage Static Website**
Also, we can utilize the Azure Web Apps service for handling a SPA, but this service goes far beyond the plain SPA handling and can offer more capabilities which also requires more configurations

## Azure Static Web Apps
This service was introduced in May 2021 and its purpose is to have baked-in features to deploy SPAs easily

The main features of this service are the following:
- supports a lot of SPA frameworks: Reac, Angular, Vue, Blazor and so on.

  Here the list of supported frameworks and how to configure it: [Configure front-end frameworks and libraries with Azure Static Web Apps](https://learn.microsoft.com/en-us/azure/static-web-apps/front-end-frameworks)
- global distribution and dynamic scale
- easy build and deployment (through CI/CD)
- seamless staging environments
- supports back-end logic by using API functions

More details about the service you can find on the official pages:
- [Azure Static Web Apps](https://azure.microsoft.com/en-us/products/app-service/static)
- [Azure Static Web Apps documentation](https://learn.microsoft.com/en-us/azure/static-web-apps/)

## Azure Blob Storage Static Website
This feature is available within the Azure Storage service, so, in order to have a static website using this service you need to have this service and properly configure it.

This feature in the Azure Blob Storage existed before the introduction of the Azure Static Web App, so, this feature does not have a lot of baked-in features like in the Azure Static Web App service.

# Useful links

- [Comparing Azure Static Web Apps vs Azure WebApps vs Azure Blob Storage Static Sites](https://devblogs.microsoft.com/devops/comparing-azure-static-web-apps-vs-azure-webapps-vs-azure-blob-storage-static-sites/)
[link](/)