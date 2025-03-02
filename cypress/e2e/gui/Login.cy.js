import { selectors } from '../../support/selectors';

describe('Automated Tests - GUI - Register', () => {
  beforeEach(() => {
    cy.visit('auth/login?redirect=%2F')
  });

  it.skip('login with invalid email', ()=> {
    cy.get(selectors.userInput)
      .type('123456@email.com') 
    cy.get(selectors.passwordInput)
      .type(Cypress.env('CYPRESS_PASSWORD'),{log:false})
    cy.get(selectors.buttonSubmint)
      .click()
    cy.get(selectors.messageErrorAlertLogin)
      .contains('Usuário ou senha inválidos')
      .should('be.visible')
  })

  it.skip('login with invalid password', ()=> {
    cy.get(selectors.userInput)
      .type(Cypress.env('CYPRESS_EMAIL'),{log:false})  
    cy.get(selectors.passwordInput)
      .type('123456')
    cy.get(selectors.buttonSubmint)
      .click()
    cy.get(selectors.messageErrorAlertLogin)
      .contains('Usuário ou senha inválidos')
      .should('be.visible')
  })

  it.skip('validate error messages e-mail withoutd', () => {
    cy.get(selectors.userInput)
      .focus()
      .blur()
    cy.get(selectors.passwordInput)
      .type(Cypress.env('CYPRESS_PASSWORD'),{log:false})
    cy.get(selectors.messageErrorInvalidFieldLogin)
      .contains('O campo “E-mail“ é obrigatório')
  })

  it.skip('validate error messages password withoutd',() =>{
    cy.get(selectors.userInput)
      .type(Cypress.env('CYPRESS_EMAIL'),{log:false}) 
    cy.get(selectors.passwordInput)
      .focus()
      .blur()
    cy.get(selectors.messageErrorInvalidFieldLogin)
      .contains('O campo “Senha“ é obrigatório')  
  })

  it('login with valid username and password', () => {
      cy.get(selectors.userInput)
        .type(Cypress.env('CYPRESS_EMAIL'),{log:false}) 
      cy.get(selectors.passwordInput)
        .type(Cypress.env('CYPRESS_PASSWORD'),{log:false})
      cy.get(selectors.buttonSubmint)
        .click()
      cy.get(selectors.validateLoginSussefull, { timeout: 5000 })
      .should('contain', `Olá,`);     
    })
})