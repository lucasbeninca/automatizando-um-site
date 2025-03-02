import { selectors } from '../../support/selectors';

describe('Testes GUI - Static Informations',() => {
        beforeEach(() => {
            cy.visit('auth/login?redirect=%2F')
            cy.login()
        });

    it('Verify about this site', () => {
        cy.get(selectors.about)
          .contains('Quem somos')
          .scrollIntoView() 
          .should('be.visible') 
          .click()
        cy.get(selectors.title1Chapter)
          .should('be.visible')
          .contains('UM NOVO CAPÍTULO NA HISTÓRIA DA ESTANTE VIRTUAL');
        cy.get(selectors.title1ChapterHistory)
          .should('have.text', ' HISTÓRIA')
          .should('have.css', 'color', 'rgb(158, 25, 178)'); 
    
    });




})


