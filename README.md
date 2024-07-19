# book-finder

Book finder.

To build this project you will require: NodeJS - version 18 and Yarn or NPM

## Commands

Running local:

 - Before eveything run: `cp .env.local .env`. This will create the .env file with the variables needed to run locally.
 - `yarn be4-install`: First installation of all the dependencies and setup husky
 - `yarn be4-commit`: Run all unit test and linter before commit to ensure will not break husky or CI/CD pipeline
 - `yarn start`: Run in develop mode
 - `yarn build`: Clean the build folder and builds all the static assets for the project within the /build folder
 - `yarn test`: Runs all the unit tests
 - `yarn lint:js`: Runs the code linter on all js files
 - `yarn lint:scss`: Runs the code linter on all scss files

## Important:

I am using node-sass to enable SCSS modules, node-sass require a correctly version of Node to work properly:

NodeJS  | Minimum node-sass version | Node Module
--------|--------------------------|------------
Node 20 | 9.0+                     | 115
Node 19 | 8.0+                     | 111
Node 18 | 8.0+                     | 108
Node 17 | 7.0+,<8.0                | 102
Node 16 | 6.0+                     | 93
Node 15 | 5.0+,<7.0                | 88
Node 14 | 4.14+,<9.0               | 83

As my machine is currently running Node 18, my node-sass is config as 8.0.

## Git Hooks:

Set husky:
 - `yarn husky install`
 - `yarn husky add .husky/pre-commit "yarn lint-staged"`
 - `yarn husky add .husky/pre-push "yarn test"`

The project count with Husky and Lint Staged:
 - `pre-commit`: Run all scripts on lint-staged
    - `lint-staged`: Run all linters and add to commit if something be fix
 - `pre-push`: Run all unit tests.

## Project structure

 - `src`: JavaScript source code of the application
 - `public`: HTML template

## Challenge

A restful JSON API is provided at `http://nyx.vima.ekt.gr:3000`

Requirements:

1. Using React, build a webapp that queries this paginated endpoint and prints out the results as a list
2. The app should be paginated (page selector) with the pagination reflected in the url (so when the page is
refreshed the same resultset is shown)
3. You can use React Bootstrap as a components library for simplicity
4. Compile your own Bootstrap theme (less/sass) with the only difference to the original that the primary
colour is `#1D7874`
5. Host your code on github or similar, put all the code in a Pull Request against the (probably) empty repo

* Optional
Add a search field to the app that upon request populates the `filters` post param as follows:
filters:[{type: "all", values: ["YOUR_SEARCH_FIELD_CONTENTS"]}]

## Development URLs

- Home screen: `http://localhost:3000/`