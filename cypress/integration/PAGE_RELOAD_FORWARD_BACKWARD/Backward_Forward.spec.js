describe('test', ()=>{
    it('test', ()=>{
        cy.visit('https://www.freshworks.com/')
        cy.contains('Love your software').should('be.visible')
        cy.go(-1)
        cy.wait(2000)
        cy.go(1)
        cy.contains('Love your software').should('be.visible')
    })
    // it('test', ()=>{
    //     cy.visit('https://www.freshworks.com/')
    //    // cy.contains('Love your software').should('be.visible')
    //    // cy.go(-1)
    //    cy.contains('Support').click()
    //    cy.url().should('have.in')
    // })
})