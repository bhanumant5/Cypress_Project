describe('verify page reload', function(){
    it('page reload', ()=>{
        cy.visit('https://www.freshworks.com/')
        cy.contains('Love your software').should('be.visible')
    })
    it('page reload', ()=>{
        cy.visit('https://www.freshworks.com/')
        cy.contains('Love your software').should('be.visible')
        cy.reload()
        cy.contains('Love your software').should('be.visible')
    })
    it('page reload', ()=>{
        cy.visit('https://www.freshworks.com/')
        cy.contains('Love your software').should('be.visible')
        cy.reload(true)
        cy.contains('Love your software').should('be.visible')
    })
    it.only('page reload', ()=>{
        cy.visit('https://www.freshworks.com/')
        cy.contains('Love your software').should('be.visible')
       // cy.reload(true,{timeout:5000})
        cy.contains('Love your software').should('be.visible')
    })
})