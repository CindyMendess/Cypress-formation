import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";
import createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
import { defineConfig } from "cypress";

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
) {
  await addCucumberPreprocessorPlugin(on, config);
  on(
    "file:preprocessor",
    createBundler({ plugins: [createEsbuildPlugin(config)] })
  );
  return config;
}

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://ztrain-web.vercel.app",
    specPattern: [
      "./cypress/cucumber/**/*.feature",
      "animationDistanceThreshold./cypress/e2e/**/*.cy.js",
    ],
    setupNodeEvents,
  },
});
