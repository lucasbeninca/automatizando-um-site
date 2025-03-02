import { selectors } from '../../support/selectors';

describe('Tests related to browsing', ()=>{
    beforeEach(() => {
        cy.visit('auth/login?redirect=%2F')
        cy.login()
    });


    it('search a book in the site', ()=>{
        cy.get(selectors.search)
          .type('Crime e Castigo{enter}')
        cy.get(selectors.titleresultsearch)
          .contains('Crime e Castigo')
        cy.get(selectors.resultsearchlist)
        should('be.visible')
  
    })

    it('search a invalid book in the site', () => {
        cy.get(selectors.search)
          .type('()&*&*(¨&*¨&%¨&*%¨&%¨&%¨&%¨%¨&*{enter}')
        cy.get(selectors.resultInvalidSearchTitle)
          .contains('Sua pesquisa não retornou nenhum resultado.')
    });
    
  
})




