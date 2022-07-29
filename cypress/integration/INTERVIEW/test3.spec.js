//const { eq } = require("cypress/types/lodash")

describe('test', ()=>{
    it.skip('test', ()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('body[class=" variant-wide"]').click({force: true}).should('be.checked')
    })
    it.skip('test', ()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.frameLoaded('region-inner main-inner >fauxcolumn-outer fauxcolumn-center-outer', {timeout:2000}).wait(3000)
        cy.iframe().find('.cap-bottom').click().attachFile()
    })
    it.skip('test', ()=>{
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href="mentorship"]').first().click({force: true}).should('have.text', 'Mentorship').and('be.visible')
    })
    it.skip('test', ()=>{
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href="consulting"]').first().should('be.visible')
    })
    it.skip('radio button ', ()=>{
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[type="checkbox"]').eq(0).check().should('be.checked').and('have.value', 'option-1')
    })
    it.skip('tset', function(){
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#checkboxes').find('input[type="checkbox"]').each(function(el){
            cy.wrap(el).check().should('be.visible')
        })
    })
    it.skip('test', function(){
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('form[class="radio-buttons"]').find('input[type="radio"]').each(function(el){
            cy.wrap(el).check({force: true}).should('be.visible')
        })
    })
    it.skip('test', function(){
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#dropdowm-menu-1').first().select('JAVA').should('have.value', 'java')
    })
    it.skip('test', function(){
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#fruit-selects').select('apple').should('have.value','apple')
    })
    it.skip('tset', ()=>{
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#dropdowm-menu-3').select('html').should('have.value', 'html')
        cy.get('#dropdowm-menu-3').select('css').should('have.value', 'css')
    })
    it('test', function(){
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#radio-buttons-selected-disabled').find('[value="pumpkin"]').check().should('be.checked').and('be.visible')
    })
})