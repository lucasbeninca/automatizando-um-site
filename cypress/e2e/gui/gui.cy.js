
describe('Automated Tests - E-commerce Platform', () => {
    
  beforeEach(() => {
      cy.visit('https://barbaderespeito.com.br/account/login');
  });

  it('Must allow login with valid credentials', () => {
   cy.pause()
    //   cy.get('#email').type('usuario@teste.com');
    //   cy.get('#password').type('SenhaSegura123');
    //   cy.get('#login-button').click();
    //   cy.contains('Bem-vindo, usuário!').should('be.visible');
  });

  it.skip('It must search for a product by name and validate the results', () => {
      cy.get('#search-bar').type('Smartphone{enter}');
      cy.get('.product-item').should('have.length.greaterThan', 0);
  });

  it.skip('You must add a product to the cart and check the subtotal', () => {
      cy.get('.product-item').first().click();
      cy.get('#add-to-cart').click();
      cy.get('#cart').click();
      cy.get('.cart-total').should('not.contain', 'R$0,00');
  });

  it.skip('You must complete an order using PIX', () => {
      cy.get('#cart').click();
      cy.get('#checkout-button').click();
      cy.get('#payment-method-pix').click();
      cy.get('#confirm-payment').click();
      cy.contains('Pedido confirmado!').should('be.visible');
  });

  it.skip('Validação de API - Teste POST para criação de usuário', () => {
    cy.request('POST', 'https://reqres.in/api/users', {
        name: "Lucas",
        job: "QA Engineer"
    }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('name', 'Lucas');
    });
});

it.skip('Validação de API - Teste PUT para atualização de usuário', () => {
    cy.request('PUT', 'https://reqres.in/api/users/2', {
        name: "Lucas Atualizado",
        job: "Senior QA"
    }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('name', 'Lucas Atualizado');
    });
});

it.skip('Validação de API - Teste DELETE para remover usuário', () => {
    cy.request('DELETE', 'https://reqres.in/api/users/2').then((response) => {
        expect(response.status).to.eq(204);
    });
});

it.skip('Validação de API - Teste de erro no login', () => {
    cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/login',
        failOnStatusCode: false,
        body: {
            email: "usuario_inexistente@teste.com",
            password: "SenhaErrada"
        }
    }).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body).to.have.property('error', 'Missing email or username');
    })
  })
})
