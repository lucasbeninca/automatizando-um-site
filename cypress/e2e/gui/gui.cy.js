import { generateTestData, formatCPF, formatPhone, formatCEP } from '../../support/utils';

describe('Automated Tests - GUI', () => {
    beforeEach(() => {
       
        const testData = generateTestData();
        Cypress.env('testData', testData);
    });

    it.skip('register on the page', () => {
        const { email, nome, senha, phone, CEP, cpf } = Cypress.env('testData');
        cy.visit('auth/register/natural?redirect=%2F');
       
        cy.get('#name')
          .type(nome)
          .should('have.value',nome)
        cy.get('#lastName')
          .type('teste')
          .should('have.value','teste')
        cy.get('#cpf')
          .type(cpf,{log:false})
          .should('have.value', formatCPF(cpf),{log:false})
        cy.get('#dayOfBirth')
          .select('01')
          .should('have.value', '01');
        cy.get('#monthOfBirth')
          .select('Janeiro')
          .invoke('text')
          .should('contain', 'Janeiro');
        cy.get('#yearOfBirth')
          .select('2001')
          .should('have.value', '2001');
        cy.get('#homePhone')
          .type(phone)
          .should('have.value',formatPhone(phone),{log:false})
        cy.get('#zipCode')
          .type(CEP)
          .should('have.value',formatCEP(CEP))
        cy.get('#streetType')
          .wait(1000) // tem um bug do html se não espera o elemento carregar ele fica em branco o correto é usar .should(be.visible)
          .select('Rua')
          .should('have.value', 'Rua');
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
          .type(email,{log:false})
          .should('have.value',email)
        cy.get('#password')
          .type(senha,{log:false})
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


  it('It must search for a product by name and validate the results', () => {
    cy.visit('auth/login?redirect=%2F')

    cy.get('#user')
      .type(Cypress.env('CYPRESS_EMAIL'),{log:false}) 
    cy.get('#password')
      .type(Cypress.env('CYPRESS_PASSWORD'),{log:false})
    cy.get('button[type="submit"][data-testid="submitButton"]')
      .click()

      cy.pause()
  });

  it.skip('You must add a product to the cart and check the subtotal', () => {
      
  });

  it.skip('You must complete an order using PIX', () => {
      
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
