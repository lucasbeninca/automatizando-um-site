describe('Testes GUI',() => {
        beforeEach(() => {
            cy.visit('auth/login?redirect=%2F')
            cy.login()
        });

    it('Verify about this site', () => {
        cy.get('.footer-menu__label')
          .contains('Quem somos')
          .scrollIntoView() 
          .should('be.visible') 
          .click()
        cy.get('h1.principaltitle-v1')
          .should('be.visible')
          .contains('UM NOVO CAPÍTULO NA HISTÓRIA DA ESTANTE VIRTUAL');
        cy.get('h1.principaltitle-v1 span')
          .should('have.text', ' HISTÓRIA')
          .should('have.css', 'color', 'rgb(158, 25, 178)'); 
    
    });




})


