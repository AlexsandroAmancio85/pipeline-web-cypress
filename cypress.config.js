const { defineConfig } = require('cypress');

module.exports = defineConfig({
    projectId: "hym3wk",
  e2e: {
    baseUrl: 'https://automationpratice.com.br/',
    setupNodeEvents(on, config) {
    },
    chromeWebSecurity: false,
  },
  
});
