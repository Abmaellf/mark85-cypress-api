describe('POST /users', () =>{
  it('register a new user', ()=>{

    const user = {
        name: 'margo',
        email: 'margo@hotmail.com',
        password: '141620'
    }

    cy.request({
      url: '/users',
      method: 'POST',
      body: user,
      failOnStatusCode: false
    }).then(response => {
      expect(response.status).to.eq(200)
    })
  })
})