const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    baseUrl: 'https://www.estantevirtual.com.br/',
    setupNodeEvents(on, config) {
      config.env = process.env;
      return config;
    },
  },
});
