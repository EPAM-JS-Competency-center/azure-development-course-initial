---
sidebar_position: 5
---

# Deploying containers

Use the guide below to sharpen your skills and deploy containers in the blink of an eye. Apply the knowledge you've gained from the previous chapters.

## Dockerize the app locally

### Create a simple server app

1. Initialize the project: `npm init && npm install express`

2. Write some code:

```javascript
// server.js

const express = require("express");
const app = express();
const port = 3000;

app.get("*", (req, res) => {
  const name = req.query.name || "World";
  res.send(`Hello, ${process.env.CONTAINER_REGISTRY_NAME || "World"}!`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

### Dockerize it

1. Crank some dockerfiles:

```dockerfile
# Dockerfile

FROM node:20
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node", "server.js" ]
```

### Run the container locally

1. Build a container image from the Dockerfile: `docker build -t hello-world-app .`
2. Run the Docker container: `docker run -p 3000:3000 hello-world-app`

## Push your app to the registry

Although you can pull and deploy images from any container registry, there are two primary choices in the context of Azure: Azure Container Registry and Docker Hub. We'll cover both.

### Using Docker Hub

1. Log in to Docker Hub: `docker login`
2. Tag the Docker image: `docker tag hello-world-app <your-registry-name>/hello-world-app`
3. Push the Docker image to your registry on Docker Hub: `docker push <your-registry-name>/hello-world-app`

### Using Azure Container Registry

1. Create container registry (don't forget to `terraform apply` before the next step):

```terraform
resource "azurerm_container_registry" "chatbot_acr" {
  name                = "${var.unique_resource_id_prefix}chatbotacr"
  resource_group_name = azurerm_resource_group.chatbot_rg.name
  location            = azurerm_resource_group.chatbot_rg.location
  sku                 = "Basic"
  admin_enabled       = true
}
```

2. Log in to your ACR: `az acr login --name myACR`
3. Get the login server name for your ACR: `az acr show --name myACR --query loginServer --output tsv` Let's say the login server name returned is `myacr.azurecr.io`
4. Tag your Docker image: `docker tag hello-world-app myacr.azurecr.io/hello-world-app:v1`
5. Push the Docker image to your ACR: `docker push myacr.azurecr.io/hello-world-app:v1`

## Deploy the app on Azure

### Using any of the registries

1. Create Resource Group:

```terraform
resource "azurerm_resource_group" "chatbot_rg" {
  name     = "${var.unique_resource_id_prefix}-rg-chatbot"
  location = "West Europe"
}
```

2. Create Log Analytics Workspace:

```terraform
resource "azurerm_log_analytics_workspace" "chatbot_log_analytics_workspace" {
  name                = "${var.unique_resource_id_prefix}-log-analytics-chatbot"
  location            = azurerm_resource_group.chatbot_rg.location
  resource_group_name = azurerm_resource_group.chatbot_rg.name
}
```

3. Create Container App Environment:

```terraform
resource "azurerm_container_app_environment" "chatbot_cae" {
  name                       = "${var.unique_resource_id_prefix}-cae-chatbot"
  location                   = azurerm_resource_group.chatbot_rg.location
  resource_group_name        = azurerm_resource_group.chatbot_rg.name
  log_analytics_workspace_id = azurerm_log_analytics_workspace.chatbot_log_analytics_workspace.id
}
```

### Using Docker Hub

4. Create Container App:

```terraform
resource "azurerm_container_app" "chatbot_ca_docker_hub" {
  name                         = "${var.unique_resource_id_prefix}-chatbot-ca-dh"
  container_app_environment_id = azurerm_container_app_environment.chatbot_cae.id
  resource_group_name          = azurerm_resource_group.chatbot_rg.name
  revision_mode                = "Single"

  registry {
    server               = "docker.io"
    username             = var.docker_hub_username
    password_secret_name = "docker-io-pass"
  }

  ingress {
    allow_insecure_connections = false
    external_enabled           = true
    target_port                = 3000

    traffic_weight {
      percentage      = 100
      latest_revision = true
    }

  }

  template {
    container {
      name   = "${var.unique_resource_id_prefix}-chatbot-container-dh"
      image  = "${var.docker_hub_registry_name}/${var.chatbot_container_name}:${var.chatbot_container_tag_dh}"
      cpu    = 0.25
      memory = "0.5Gi"

      env {
        name  = "CONTAINER_REGISTRY_NAME"
        value = "Docker Hub"
      }
    }
  }

  secret {
    name  = "docker-io-pass"
    value = var.docker_hub_password
  }
}
```

### Using Azure Container Registry

4. Create Container App:

```terraform
resource "azurerm_container_app" "chatbot_ca_docker_acr" {
  name                         = "${var.unique_resource_id_prefix}-chatbot-ca-acr"
  container_app_environment_id = azurerm_container_app_environment.chatbot_cae.id
  resource_group_name          = azurerm_resource_group.chatbot_rg.name
  revision_mode                = "Single"

  registry {
    server               = azurerm_container_registry.chatbot_acr.login_server
    username             = azurerm_container_registry.chatbot_acr.admin_username
    password_secret_name = "acr-password"
  }

  ingress {
    allow_insecure_connections = false
    external_enabled           = true
    target_port                = 3000

    traffic_weight {
      percentage      = 100
      latest_revision = true
    }

  }

  template {
    container {
      name   = "${var.unique_resource_id_prefix}-chatbot-container-acr"
      image  = "${azurerm_container_registry.chatbot_acr.login_server}/${var.chatbot_container_name}:${var.chatbot_container_tag_acr}"
      cpu    = 0.25
      memory = "0.5Gi"

      env {
        name  = "CONTAINER_REGISTRY_NAME"
        value = "Azure Container Registry"
      }
    }
  }

  secret {
    name  = "acr-password"
    value = azurerm_container_registry.chatbot_acr.admin_password
  }
}
```
