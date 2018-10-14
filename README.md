# MeanWorld Stack

Docker
MEAN stack - Angular 6
Angular Material
CosmoDB

## MeanWorld

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Running Meanworld

package.json file under project folder define the list of available scrip command
Use "npm start" to run after update all environment variables under

- server/env/azure.js or server/env/local.js
- .env at project folder. Require envrionment variables are DEBUG_DEVELOPMENT_PORT (default to 4200) and NODE_ENV (default to 'development_azure' to use Azure cosmodb)

## Running Meanworld while developing

During development, there might be a need to run express server and angular separately to isolate development features. We can do that by:

- Set api_host in file 'src/environments/environment.ts' to localhost:<express_port>. The default port is 3000
- To run express server separately, use "node .\bin\www.js'. Note that this will serve the last built angular code from dist folder
- To run angular separately, use 'ng serve'

To use Azure cosmo db instead of local mongodb, set NODE_ENV to'development_azure'. Leaving this environment variable empty will set to use local mongodb

## JWT secret

Use "openssl rand -based64 32" to generate 32 characters random string

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
