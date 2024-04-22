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


})