import { selectors } from './selectors';

Cypress.Commands.add('login', () => {
    cy.get(selectors.userInput).type(Cypress.env('CYPRESS_EMAIL'), { log: false });
    cy.get(selectors.passwordInput).type(Cypress.env('CYPRESS_PASSWORD'), { log: false });
    cy.get(selectors.buttonSubmint).click();
});
  