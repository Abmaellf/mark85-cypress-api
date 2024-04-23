describe('POST/sessions',  ()=>{

    it('user session', ()=>{
        //massa de teste
        const userData = {
            name: 'jefferson',
            email: 'jefferson@hotmail.com',
            password: '141620'
        }

        cy.task('deleteUser', userData.email)
        cy.postUser(userData)

        cy.postSession(userData)
            .then(response => {

                expect(response.status).to.eq(200)

                const {user, token} = response.body

                expect(user.name).to.eq(userData.name)
                expect(user.email).to.eq(userData.email)
                expect(token).not.to.be.empty  //Não deve ser vazio
            })
    })

    it('Invalid password', () => {

         //massa de teste
         const user = {
            email: 'abmael_ninha@hotmail.com',
            password: '14162'
        }

        cy.postSession(user)
            .then(response => {
                expect(response.status).to.eq(401)
            })
    })

    it('Invalid email', () => {

        //massa de teste
        const user = {
           email: 'abmael_ninha@hotmail.co',
           password: '141620'
       }

       cy.postSession(user)
           .then(response => {
               expect(response.status).to.eq(401)
           })
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