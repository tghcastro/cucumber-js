# Cucumber JS POC
An small poc running Cucumber JS against an Rest API

## Running the application

```shell_script 
node server.js
curl http://127.0.0.1:7000/menu
```

## Running Cucumber JS tests

To run the cucumber features that were craeted inside `features` folder, run the follwing command

```shell_script 
./node_modules/.bin/cucumber-js
```

## References

[Cucumber JS doc example](https://github.com/cucumber/cucumber-js/blob/master/docs/nodejs_example.md)

[Node JS API example](https://dev.to/starkfire/building-a-simple-rest-api-with-node-js-and-express-299j)