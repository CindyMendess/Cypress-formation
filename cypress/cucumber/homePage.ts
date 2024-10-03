import { homePage } from "../pages/homePage";
import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(/^I am on the homepage$/, function () {
  cy.visit("");
});

Then(/^The homepage is displayed$/, function () {
  cy.url().should("eq", Cypress.config().baseUrl + "/home");
  cy.get(homePage.titleContainer)
    .should("be.visible")
    .and("include.text", "Normal d'être impatient.")
    .find("h1")
    .should("have.text", "Normal d'être impatient.");
});
