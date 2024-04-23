describe('POST /users', () =>{
  it('register a new user', ()=>{

    const user = {
        name: 'margo',
        email: 'margo@hotmail.com',
        password: '141620'
    }

    cy.task('deleteUser', user.email)

    cy.postUser(user)
			.then(response => {
			  expect(response.status).to.eq(200)
			})
   
  })


  it('duplicate email', ()=>{

    const user = {
        name: 'margo',
        email: 'margo@hotmail.com',
        password: '141620'
    }
    cy.task('deleteUser', user.email)

    cy.postUser(user)
    cy.postUser(user)
			.then(response => {

        const {message} =  response.body;
			  expect(response.status).to.eq(409)
        expect(message).to.equal('Duplicated email!')
			})  
  })

  context('required fields',() => {

    let user;

    // Esse gancho sempre será executado quando houver um it(cenário)
    beforeEach(() =>{
      user = {
        name: 'margo',
        email: 'margo@hotmail.com',
        password: '141620'
      }
    })

    it('name is required',() => {

      delete user.name

      cy.postUser(user)
        .then(response => {

          const { message } = response.body

          expect(response.status).to.eq(400)
          expect(message).to.eq('ValidationError: \"name\" is required')
        })
    })

    it('email is required',() => {

      delete user.email

      cy.postUser(user)
        .then(response => {

          const { message } = response.body

          expect(response.status).to.eq(400)
          expect(message).to.eq('ValidationError: \"email\" is required')
        })
    })


    it('password is required',() => {

      delete user.password

      cy.postUser(user)
        .then(response => {

          const { message } = response.body

          expect(response.status).to.eq(400)
          expect(message).to.eq('ValidationError: \"password\" is required')
        })
    })

  })
})