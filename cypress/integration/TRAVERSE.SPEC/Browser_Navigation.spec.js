


describe(' Browser Nvigation', function(){
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    it(' Navigation', function(){
        cy.visit('https://www.freshworks.com/')
        cy.contains('Platform').click()

        cy.go('back', {timeout:5000})
        cy.wait(200)
        cy.go('forward')
        cy.url().should('contains', 'freshworks')
    })
    it.only(' Navigation', function(){
        cy.visit('https://www.freshworks.com/')
        cy.contains('Platform').click().go('back').go('forward')
        cy.visit('https://www.google.co.in/')

       
    })
})