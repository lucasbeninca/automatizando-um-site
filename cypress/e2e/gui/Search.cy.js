

describe('Tests related to browsing', ()=>{
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
    
  
})




