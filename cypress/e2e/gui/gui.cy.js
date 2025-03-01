import { generate } from 'gerador-validador-cpf';

describe('Automated Tests - GUI', () => {
    beforeEach(() => {
        cy.visit('https://www.estantevirtual.com.br/auth/register/natural?redirect=%2F');
    });

    it('register on the page', () => {
        const email = `teste${Date.now()}@gmail.com`; 
        const nome = 'pedro'
        const senha = 'Senha@123';
        const phone = '46985555555';
        const CEP = '85660000';
        const cpf = generate(); 
        const formatCPF = (cpf) => {
            return cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
        };
        const formatPhone = (phone) => {
            return phone.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
          };
        const formatCEP = (CEP) =>{
            return CEP.replace(/^(\d{5})(\d{3})$/,'$1-$2' );
        }
          
        cy.get('#name')
          .type(nome)
          .should('have.value',nome)
        cy.get('#lastName')
          .type('teste')
          .should('have.value','teste')
        cy.get('#cpf')
          .type(cpf)
          .should('have.value', formatCPF(cpf))
        cy.get('#dayOfBirth')
          .select(1)
          .should('have.value','01')
        cy.get('#monthOfBirth')
          .select(1)
          .invoke('text')
          .should('contain', 'Janeiro');
        cy.get('#yearOfBirth')
          .select(25)
          .should('have.value','2001')
        cy.get('#homePhone')
          .type(phone)
          .should('have.value',formatPhone(phone))
        cy.get('#zipCode')
          .type(CEP)
          .should('have.value',formatCEP(CEP))
        cy.get('#streetType')
          .should('be.visible')
          .select(2)
          .should('have.value','Rua')
        cy.get('#streetName')
          .type('do comércio')
          .should('have.value','do comércio')
        cy.get('#streetNumber')
          .type('1222')
          .should('have.value','1222')
        cy.get('#neighborhood')
          .type('centro')
          .should('have.value','centro')
        cy.get('#state')
          .select(16)
          .invoke('text')
          .should('contain','Paraná')
        cy.get('#city')
          .type('dois vizinhos')
          .should('have.value','dois vizinhos')
        cy.get('#email')
          .type(email)
          .should('have.value',email)
        cy.get('#password')
          .type(senha)
        cy.get('#emailNewsletter')
          .check()
        cy.get('#privacy')
          .check()
        cy.get('[qa-auto="gift-wrapping-select-button"]')
          .should('be.visible')
          .click()
        cy.get('.user__content', { timeout: 5000 }) // Aumenta o tempo de espera para 10s
          .should('contain', `Olá,`);      
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
