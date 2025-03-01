describe('Automated Tests API - reqres.in Platform', () => {
   
    it('Validação de API - Teste POST para criação de usuário', () => {
      cy.request('POST', 'https://reqres.in/api/users', {
          name: "Lucas",
          job: "QA Engineer"
      }).then((response) => {
          expect(response.status).to.eq(201);
          expect(response.body).to.have.property('name', 'Lucas');
      });
  });
  
  it('Validação de API - Teste PUT para atualização de usuário', () => {
      cy.request('PUT', 'https://reqres.in/api/users/2', {
          name: "Lucas Atualizado",
          job: "Senior QA"
      }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('name', 'Lucas Atualizado');
      });
  });
  
  it('Validação de API - Teste DELETE para remover usuário', () => {
      cy.request('DELETE', 'https://reqres.in/api/users/2').then((response) => {
          expect(response.status).to.eq(204);
      });
  });
  
  it('Validação de API - Teste de erro no login', () => {
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
          expect(response.body).to.have.property('error', 'user not found');
      })
    })
  })
  