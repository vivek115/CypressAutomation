const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here 
      on('file:preprocessor',cucumber())
    },
    defaultCommandTimeout:8000,
    env:
    {
      url : "https://rahulshettyacademy.com/angularpractice/"
    }
    ,specPattern: 'cypress/Integeration/Examples/BDD/*.feature',
    reporter:"mochawesome",
    retries:{
    runMode:1
    },
  },
});
