import { generate } from 'gerador-validador-cpf';

describe('Automated Tests - GUI', () => {
    beforeEach(() => {
        cy.visit('https://www.estantevirtual.com.br/auth/register/natural?redirect=%2F');
    });

    it('register on the page', () => {
        const cpf = generate(); // Gera um CPF válido
        const email = `teste${Date.now()}@gmail.com`; // Gera um email único
        const senha = 'Senha@123';
        cy.pause() // Preencher os campos do formulário
        cy.get('#name').type('pedro');
        cy.get('#lastName').type('teste')
        cy.get('#email').type(email);
        cy.get('#cpf').type(cpf);
        cy.get('#password').type(senha);
       // cy.get('#dayOfBirth').select()
       // cy.get('#monthOfBirth').select()
       // cy.get('#yearOfBirth').select()
        cy.get('#homePhone').type('46985555555')
        cy.get('#zipCode').type('85660000')
     //   cy.get('#streetType').select()
        cy.get('#streetNumber').type('1222')
        cy.get('#additionalInfo')
        cy.get('#neighborhood').type('centro')
      //  cy.get('#state').select()
        cy.get('#city').type('dois vizinhos')
        cy.get('#emailNewsletter').check()
        cy.get('#privacy').check()


        
    

        
        cy.get().click();

       
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
