
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


Cypress.Commands.add('postSession', (user)=> {

  cy.api({
      url:'/sessions',
      method:'POST',
      body: {email:user.email, password: user.password},
      failOnStatusCode:false,
  }).then(response => {
      return response
  })

})