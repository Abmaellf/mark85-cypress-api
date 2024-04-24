describe('POST/sessions',  ()=>{

    beforeEach(function() {
        cy.fixture('users').then(function(users){
            this.users = users
        })
    })

    it('user session', function() {
            
        //massa de teste que esta no fixture
        const userData = this.users.login

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

    it('Invalid password', function() {

          //massa de teste que esta no fixture
         const user = this.users.inv_pass

        cy.postSession(user)
            .then(response => {
                expect(response.status).to.eq(401)
            })
    })

    it('Invalid email', function() {

         //massa de teste que esta no fixture
        const user = this.users.email_404

       cy.postSession(user)
           .then(response => {
               expect(response.status).to.eq(401)
           })
   })


})
