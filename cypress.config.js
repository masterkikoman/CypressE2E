const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 50000,
  env: {
    url: 'https://automationexercise.com/'
  },
  e2e: {
    hideXHRInCommandLog: true,
    chromeWebSecurity: false,
    blockHosts: "https://automationexercise.com/", 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:'cypress/integration/tests/*.js'
  },
});
