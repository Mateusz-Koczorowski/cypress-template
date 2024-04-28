const { defineConfig } = require("cypress");
const getGrep = require('@cypress/grep/src/plugin');

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: true,
  reporter: 'cypress-mochawesome-reporter',
  chromeWebSecurity: false,
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: true,
    json: true,
  },
  e2e: {
    baseUrl: 'https://localhost:7174',
    testIsolation: false,
    setupNodeEvents(on, config) {
      getGrep(config);
      return config;
    },
  },
});
