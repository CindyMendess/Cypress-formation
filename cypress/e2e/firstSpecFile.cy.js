import { homePage } from "../pages/homePage";

describe("testing ZTrain webiste", () => {
    it.skip("should be able to display home page", () => {
      cy.visit('');
      cy.url().should('eq', Cypress.config().baseUrl + '/home')
      cy.get(homePage.titleContainer)
        .should('be.visible')
        .should('include.text', 'Normal d\'être impatient.')
        .find('h1')
        .should('have.text', 'Normal d\'être impatient.')
    });

    it("should be able to display the search bar", () => {
        cy.visit('');
        cy.get(homePage.searchBar)
        .should('be.visible')
        .should('have.attr', 'placeholder', 'Rechecher un produit')
    });
});