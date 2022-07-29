//const { it } = require("mocha")

//const { it } = require("mocha")

//const { it } = require("mocha")



describe('verify the login functionality', function(){
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    it('login functionality',function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').click()
        cy.get('h1').should('be.visible')
         
    })
    it('login functioanlity', function(){
        cy.visit('https://www.screener.in/login/')
      //  cy.get('.layer flex flex-space-between').children().find('.button account').click()
        cy.get('#id_username').type('Hanumant5@gmail.com')
        cy.get('#id_password').type('hanumant')
        cy.get('.card-medium > .button-primary').click()
        cy.get('..errorlist > li').should('contains','Please enter a correct email and password. Note that both fields may be case-sensitive.')
    })
    it('login', function(){
        cy.visit('https://mail.rediff.com/cgi-bin/login.cgi')
        cy.get('#login1').type('hanumantbhojane@rediffmail.com')
        cy.get('#password').type('8605525095')
        cy.get('.signinbtn').click()
        
    })
    it.only('mouseover', function(){
       
        cy.visit('https://www.orangehrm.com/company/about-us/about-orangehrm/')
        cy.get('.container')
        cy.log()
    })
})