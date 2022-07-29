/// <reference types="cypress"/>

describe('verify alert', function(){
    it('verify alert', function(){
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('div[class="widget-content"] button').click()
        cy.on('window:confirm',(str)=>{
            expect(str).to.eq('Press a button!')
        })
    })
    it.only('verify tab', function(){
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'https://www.rahulshettyacademy.com/')
    })
})