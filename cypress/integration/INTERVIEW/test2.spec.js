///<reference types="cypress"/>
describe('amazon tasks',function(){
   
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    it('add single item in cart',function(){
        cy.visit('https://www.amazon.in/')
        cy.get('#twotabsearchtextbox').type('i phone 11',{force:true})
        cy.get('#nav-search-submit-button').click({force:true}).then(function(){
            cy.get('.a-link-normal.s-underline-text.s-underline-link-text.s-link-style.a-text-normal').first().
            invoke('removeAttr','target').click()
            cy.get('#add-to-cart-button').click()
            cy.get('#attach-close_sideSheet-link').click().then(function(){
                cy.get('#nav-cart-count').should('have.text',1)
            })
          
            
        })
      
    })
   
})