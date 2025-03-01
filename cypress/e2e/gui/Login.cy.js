import { selectors } from '../../support/selectors';

describe('Automated Tests - GUI - Register', () => {
    beforeEach(() => {
        cy.visit('auth/login?redirect=%2F')
      //  cy.get('#rc-anchor-alert').invoke('remove');

    });

it('login with invalid email', ()=> {
  cy.get(selectors.userInput)
    .type('123456@email.com') 
  cy.get('#password')
    .type(Cypress.env('CYPRESS_PASSWORD'),{log:false})
  cy.get(selectors.buttonSubmint)
    .click()
  cy.get('.message')
    .contains('Usuário ou senha inválidos')
    .should('be.visible')
})

it('login with invalid password', ()=> {
  cy.get(selectors.userInput)
    .type(Cypress.env('CYPRESS_EMAIL'),{log:false})  
  cy.get(selectors.passwordInput)
    .type('123456')
  cy.get(selectors.buttonSubmint)
    .click()
  cy.get('.message')
    .contains('Usuário ou senha inválidos')
    .should('be.visible')
})

it('login without password', () => {
  cy.get(selectors.userInput)
    .type(Cypress.env('CYPRESS_EMAIL'),{log:false}) 
  cy.get(selectors.buttonSubmint)
    .click()
})

it('login without email', () => {
  cy.get(selectors.passwordInput)
    .type(Cypress.env('CYPRESS_PASSWORD'),{log:false})
  cy.get(selectors.buttonSubmint)
    .click()
})

it('validate error messages e-mail and password', () => {
  cy.get(selectors.userInput)
    .focus()
    .blur()
  cy.get('.messageError')
    .contains('O campo “E-mail“ é obrigatório')
  cy.get(selectors.passwordInput)
    .focus()
    .blur()
  cy.get('.messageError')
    .contains(' O campo “Senha“ é obrigatório')    
})

it('login with valid username and password', () => {
    cy.get(selectors.userInput)
      .type(Cypress.env('CYPRESS_EMAIL'),{log:false}) 
    cy.get(selectors.passwordInput)
      .type(Cypress.env('CYPRESS_PASSWORD'),{log:false})
    cy.get(selectors.buttonSubmint)
      .click()
  })

})