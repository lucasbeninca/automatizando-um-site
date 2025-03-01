

describe('Tests related to browsing and shopping', ()=>{
    beforeEach(() => {
        cy.visit('auth/login?redirect=%2F')
        cy.login()
    });


    it('search a book in the site', ()=>{
        cy.get('#search')
          .type('Crime e Castigo{enter}')
        cy.get('h1.header-content__title.header-content__title--desktop')
          .contains('Crime e Castigo')
        cy.get('.product-list__items')
        should('be.visible')
  
    })

    it('search a invalid book in the site', () => {
        cy.get('#search')
          .type('()&*&*(¨&*¨&%¨&*%¨&%¨&%¨&%¨%¨&*{enter}')
        cy.get('.empty__title')
          .contains('Sua pesquisa não retornou nenhum resultado.')
    });
    
    it.only('Verify about this site', () => {
        cy.get('.footer-menu__label')
          .contains('Quem somos')
          .scrollIntoView() 
          .should('be.visible') 
          .click()
        cy.get('h1.principaltitle-v1')
          .should('be.visible')
          .and('include.text', 'UM NOVO CAPÍTULO NA HISTÓRIA DA ESTANTE VIRTUAL');
        cy.get('h1.principaltitle-v1 span')
          .should('have.text', ' HISTÓRIA')
          .and('have.css', 'color', 'rgb(158, 25, 178)'); 

    });
})




