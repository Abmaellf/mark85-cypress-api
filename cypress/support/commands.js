
Cypress.Commands.add('postUser', (user) => {
    cy.api({
      url: '/users',
      method: 'POST',
      body: user,
      failOnStatusCode: false
    }).then(response => {
      return response
    })
  })