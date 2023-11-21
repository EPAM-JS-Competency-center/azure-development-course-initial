---
sidebar_position: 6
---

# Cosmos Terraform Examples

Let's review a few examples on how to create Cosmos DB with terraform!

## Cosmos Account Creation

```terraform
resource "azurerm_cosmosdb_account" "test_app" {
  location            = "northeurope"
  name                = "cos-app-sand-ne-001"
  offer_type          = "Standard"
  resource_group_name = azurerm_resource_group.product_service_rg.name
  kind                = "GlobalDocumentDB"

  consistency_policy {
    consistency_level = "Eventual"
  }

  capabilities {
    name = "EnableServerless"
  }

  geo_location {
    failover_priority = 0
    location          = "North Europe"
  }
}
```

## Cosmos Database Creation

```terraform
resource "azurerm_cosmosdb_sql_database" "products_app" {
  account_name        = azurerm_cosmosdb_account.test_app.name
  name                = "products-db"
  resource_group_name = azurerm_resource_group.product_service_rg.name
}
```

## Cosmos Collection Creation

:::warning
Be aware of that by default Cosmos DB will index everything, so you want to change that rule
and to index only required fields ot optimise write performance, and reduce overall DB size. 
:::

```terraform

resource "azurerm_cosmosdb_sql_container" "products" {
  account_name        = azurerm_cosmosdb_account.test_app.name
  database_name       = azurerm_cosmosdb_sql_database.products_app.name
  name                = "products"
  partition_key_path  = "/id"
  resource_group_name = azurerm_resource_group.product_service_rg.name

  # Cosmos DB supports TTL for the records
  default_ttl = -1

  indexing_policy {
    excluded_path {
      path = "/*"
    }
  }
}
```
