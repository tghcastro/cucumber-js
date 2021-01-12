# Cucumber JS POC
For this POC I'm going to create some tests using Cucumber JS against a Rest API. The application (API) is running locally, so it need to be started before run the Cucumber. All commands needed are described in this page and the articles that I used to create this are in the references. 

## Requirements

- Node JS (https://nodejs.org/en/download/)

Application
- Cucumber JS (`npm i -D cucumber@latest`)
- Express (`npm install --save express`)

## Running the application

```shell_script 
node server.js
```

Calling its endpoints
```shell_script 
# List Menu
curl http://127.0.0.1:7000/menu

# Create new menu item
curl -X POST "http://127.0.0.1:7000/menu?item=testitem&value=10"
```

## Running Cucumber JS tests

To run the cucumber features that were craeted inside `features` folder, run the follwing command

```shell_script 
./node_modules/.bin/cucumber-js
```

## References

[Cucumber JS doc example](https://github.com/cucumber/cucumber-js/blob/master/docs/nodejs_example.md)

[Node JS API example](https://dev.to/starkfire/building-a-simple-rest-api-with-node-js-and-express-299j)