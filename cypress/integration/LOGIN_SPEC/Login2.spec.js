



describe('verify the window command in cypress',function(){

   
    it('verify the various windom command for reload page , forward , back via cypress',function(){

        cy.login('Admin','admin123')
        cy.reload()
        cy.go(1)
        cy.go(-1)
        cy.url().should('contain','open')

    })



})