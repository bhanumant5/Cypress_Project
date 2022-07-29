

//input[value="option-2"]
describe('checkbox', function(){
    it.only('checkbox', function(){
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#checkboxes').find('input').each(function(el){
            cy.wrap(el).check().should('be.checked')
            cy.wrap(el).uncheck().should('not.be.checked')
        })
    })
    it('checkbox', function(){
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[type="checkbox').check(['option-1','option-2','option-3','option-4']).check().should('be.checked')
        cy.get('input[type="checkbox').uncheck(['option-1','option-2','option-3','option-4']).should('not.be.checked')
    })
})