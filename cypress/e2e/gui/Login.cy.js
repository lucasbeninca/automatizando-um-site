
import { generateTestData, formatCPF, formatPhone, formatCEP } from '../../support/utils';

describe('Automated Tests - GUI - Register', () => {
    beforeEach(() => {
        const testData = generateTestData();
        Cypress.env('testData', testData);
    });

it('login', () => {
    cy.visit('auth/login?redirect=%2F')
    cy.get('#user')
      .type(Cypress.env('CYPRESS_EMAIL'),{log:false}) 
    cy.get('#password')
      .type(Cypress.env('CYPRESS_PASSWORD'),{log:false})
    cy.get('button[type="submit"][data-testid="submitButton"]')
      .click()

      cy.pause()
  })

})