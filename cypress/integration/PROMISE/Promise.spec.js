///<reference types="cypress" />

//const { contains } = require("cypress/types/jquery")

describe(' Test implicit Function', function(){
    it('test', function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('.section_header').should('contain', 'CONTACT US')
        console.log('hello')
    })
    it('test',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('.section_header').then(function(el){
            expect(el.text()).to.eq('CONTACT US')
        })
    })
})