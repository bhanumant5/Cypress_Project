/// <reference types="Cypress" />


describe('test', function(){
    it('test', function(){
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
         cy.get('#dropdowm-menu-1').select('java').should('have.text', 'JAVA')
       
    })
    it('dropddown',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('select[name="speed"]').find('option').each(function(el){
          //  cy.log()
          if(el.text().includes('Slower')){
            cy.wrap(el).click({force:true}).should('be.visible')
          }
        //    cy.wrap(el).text('')
        })
    })
    it('dropddown',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('select[name="speed"]').find('option').each(function(el){
          //  cy.log()
          if(el.text().includes('Medium')){
            cy.wrap(el).click({force:true}).should('be.visible')
          }
        
        })
    })
    it.only('test', ()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('select[name="speed"] > option').eq(3).should('be.visible')
    })
   
})