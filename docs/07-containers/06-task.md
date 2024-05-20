---
sidebar_position: 6
---

# Task

This task focuses on using your knowledge about containers and Azure to create, containerize, and deploy your app to Container Apps.

## Prerequisites

- **Installed** Docker on your workstation
- **Registered** account on [Docker Hub](https://hub.docker.com/) (optional if you intend to use Azure Container Registry)
- **Installed** the latest version of [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli) (optional if you intend to use Docker Hub)

# Tasks

### Task 7.1

1. Create a simple server app that returns a string containing the value of an environment variable for any request. This environment variable will be used to detect and hold the container registry name.

### Task 7.2

1. Create a Dockerfile.
2. Build the Docker image.
3. Push the Docker image to Docker Hub and Azure Container Registry.

### Task 7.3

1. Create a Resource Group.
2. Create an Azure Log Analytics Workspace.
3. Create a Container App Environment.
4. Link the Log Analytics Workspace to the Container App Environment.
5. Create two Container App instances within the Container App Environment.
6. Deploy Docker images from Docker Hub and Azure Container Registry to each Container App.

### Task 7.4

1. Commit all your work to a separate branch (e.g., `task-7` from the latest `master`) in your own repository.
2. Create a pull request to the `master` branch.
3. Submit the link to the pull request for crosscheck.

# Evaluation Criteria (70 points for all criteria)

Reviewers should verify the deployed container app by invoking it through provided URLs.

- Verify that the deployed containers start and run successfully inside Container Apps.
- Verify that the deployed containers are publicly reachable via the provided links.
- Verify that each of the Container Apps returns the intended response, indicating the container registry name from which the container image originates.

# Optional Tasks

- **+10** - Expose your Container Apps via App Service instead of a direct link to the Container Apps instance. Use your knowledge from previous sections and conduct additional research if needed.
- **+10** - Implement a UI on the storefront to interact with your container. Choose one of the two Container Apps to develop further. The interface should resemble a chatbot. Feel free to use AI tools to generate the code.
- **+10** - Replace the simple server app you created with any open-source AI chatbot model of your choice and make it accessible from the storefront as a shopping assistant bot. It's suggested to use models with pre-existing Dockerfiles to avoid the hassle of containerizing the model yourself.

# Description Template for PRs

:::note
This should be present in the PR's description!
:::

1. What was done?
2. Link to your Container App public endpoint.
3. Link to your repo that hosts your apps' code (FE+BE+Terraform).
