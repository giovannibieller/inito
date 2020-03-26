# INITO

Init React app with: webpack, wepback-dev-server, eslint, jss, proptypes, babel, react-router 4 with code splitting

### INSTALL

-   clone repository: `git clone <repository_url>`
-   `cd path/to/app`
-   run `npm install`

### GENERATE NEW PROJECT

-   use [CREATE INITO TOOL](https://github.com/giovannibieller/create-inito)

### CREATE NEW COMPONENT

-   `npm run generate:component`
-   it will ask the component name
-   it will create a component under the `src/components` folder
-   components are composed by:
    -   COMPONENT_NAME.js
    -   COMPONENT_NAME.styles.js

### CREATE NEW PAGE

-   `npm run generate:page`
-   it will ask the page name
-   it will create a page under the `src/pages` folder
-   components are composed by:
    -   PAGE_NAME.js
    -   PAGE_NAME.styles.js

### DEV

-   `cd path/to/app`
-   `npm run build` - first time and when there are changes in /public
-   `npm start`
-   app will run at `http://localhost:3000`

### VERSION

-   `npm run version`
-   it will ask you the level of version to update (1.0.0) from 1 to 3
-   update `package.json` and `package-lock.json` version

### PROD

-   `npm run build`
-   it will create a project build in /dist
