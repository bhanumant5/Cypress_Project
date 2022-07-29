/// <reference types= 'cypress' />

//const { describe } = require("mocha");

describe('Verify Login Test', function(){
    it('Login test', function(){
    cy.login('Admin', 'admin123')
    cy.get('span[id="spanMessage"]').should('contain', 'Invalid credentials')
    
    })
})