# Working with Azure Functions core tools

Azure Functions Core Tools is a native and convenient development tool created by Microsoft Corporation for creating, testing, and editing your Azure functions on your local computer, which can then be easily deployed to the Azure cloud server.

Let's go step-by-step on what is needed to properly configure the development environment, create, and test functions locally.

## Assumptions

In this module, we will be using the 4th (latest version at the time of the course release) version of the Azure Functions Core Tools package for 64-bit Windows operating system. We will also be using the VS Code text editor. 

1. For the purposes of this course, we need to install several software tools - [Azure Core Tools](https://learn.microsoft.com/en-us/azure/azure-functions/functions-run-local?tabs=v4%2Cwindows%2Cts%2Cportal%2Cbash#install-the-azure-functions-core-tools) itself for the required operating system, as well as the [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli) to deploy the created functions to the Azure server.
2. The next step is to create our local Function App project. Essentially, this is a container inside which Azure functions will be created. Function App is created with the `func init <MyProjectName>` command (It's worth to mention that during project creation, a local git repository will also be created, so among the files in the project there will also be `.gitignore` and `README.md`). During project creation, you will be prompted to choose the programming language in which it should be created. Among these languages are both vanilla JavaScript and TypeScript. For the purposes of this module, we will be working with TypeScript.

In the newly created project, you can see several specific files that are unique to Azure Function App, which we will discuss in a little more detail:
- `host.json` - The host.json file contains basic metadata of the project - configuration options that affect all functions in a function app instance.
- `local.settings.json` - This file stores project settings for local development, including important and confidential project data such as passwords, connection strings, and so on. For example, to work with other Azure or third-party services, we often need to integrate with them and their credentials are likely to be contained in this file. It is important to note that since local.settings.json contains sensitive and confidential information, it should only exist locally and under no circumstances should it be deployed to any server or repository.
- `.funcignore` - This file is similar to `.gitignore` for Azure - it contains a list of files and directories that should not be deployed to the Azure server.
- `.vscode\extensions.json` - This file configures VSCode settings for the Azure project. It is useful if we are working with the project through this text editor.

It is also worth to say that since we have chosen TypeScript as the programming language, we will also find the `tsconfig.json` file in the project folder with basic settings, and the `typescript` package will already be installed and added to `package.json`.

3. In a newly created project, you can see an already created function that you can modify as you like, but in order to fully understand the process of creating new functions, we need to start from scratch. To create a new function, simply enter the command `func new`. After that, the function creation process will start in the terminal window, during which you will be prompted to choose one of many function templates (by entering a number in the terminal) and then the desired function name. Use the 'httpTrigger' option as the template. This type of function is the most visual and easy to understand, as it can be called directly from a browser window or from programs like Postman. After the process is successfully completed, you will notice that a new folder with your function has appeared at the root of the project. Let's take a closer look at its contents.

Inside the folder with the function, there are 2 files - `index.ts` and `function.json`. `index.ts` contains the body of the template. Here are two things to note about it:

- As you cat see, the function does not return any value. This may be a little confusing at first, but it will become clear in a minute.
- The function takes 2 values as parameters: context and req. The req will contain parameters in the form of GET or POST data from outside, and in the context, we will write values (including technical data such as headers and contentType) that the function should return after executing its business logic.

The `function.json` file contains configuration data for the function. We won't go into them in details for now, but just note an important detail: the 'scriptFile' field. This field specifies the path to the actual JS scripts of the function that will be created from TypeScript files.

4. The next step will be to locally run our Azure function application. To do this, we need to execute only 2 simple and familiar to all node.js developers commands `npm install` and `npm start`. When executing npm start, you can see that the script automatically creates a folder, according to the path specified in tsconfig.json and compiles the js files there. `function.json` with the paths to these files provide additional convenience - we don't need to navigate to the folder with the compiled JavaScript files to run the functions. If everything was successful, we will see a list of running functions with specified local addresses in the terminal window.

Testing this functions is very easy - simply call them using the provided local addresses by entering them into the browser's address bar or using Postman, passing the necessary GET or POST parameters, and making sure that the corresponding response is returned.

5. So now you have everything you need to deploy your application to your Azure account. If you have already installed Azure CLI, as we indicated in step 1, then you need to connect to your account through VS Code. To do this, press the ctrl+shift+p key combination. In the open input string, enter the command Azure: Sign In. After that, a browser window should open on the Microsoft registration page where you will need to enter your registration information. After that, you can close the browser window.

6. Before publishing your local application, you need to create it (with the same name as your local) in your Azure subscription. This can be done directly from your account or using the `Azure functions` extension for VSCode. We recommend doing this through the extension because when creating the application, it will guide you step by step through all the necessary stages and create all the necessary additional services, such as a `Storage account`, which is used by Azure Functions to manage triggers, inputs, and outputs for your functions.

6. When all previous steps are done, run the command `func azure functionapp publish <FunctionAppName>`. That's it! When the process is over, you may see your functions inside your function app in Azure subscription