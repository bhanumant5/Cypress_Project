// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (Username, password) => { 
    cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('#txtUsername').type(Username)
        cy.get('#txtPassword').type(password)
        cy.get('#btnLogin').click()
})

Cypress.Commands.add('Contactuslogin', (first_name, last_name,email, message) => { 
    cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr', 'target').click()
        cy.get('.section_header').invoke('text').then(function(str){
            expect(str).to.equal('CONTACT US')
        })
        cy.get('input[name="first_name"]').type(first_name)
        cy.get('input[name="last_name"]').type(last_name)
        cy.get('input[name="email"]').type(email)
        cy.get('[placeholder="Comments"]').type(message)
})







//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
import 'cypress-file-upload';
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
import 'cypress-iframe';
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
