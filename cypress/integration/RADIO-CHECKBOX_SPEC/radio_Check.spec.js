//const { it } = require("mocha")

//const { it } = require("mocha")



describe(' radio button ', function(){
    it('radio button', function(){
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('.section-title>#radio-buttons').children().eq(0).check().should('be.checked')
        //cy.get('.section-title>#radio-button').children().eq(0).uncheck().should('be.not.checked')
        cy.get('input[value="blue"]').check().should('be.checked')
        cy.get('input[value="green"]').click().should('be.checked')
    })
    it.only('every radio button', function(){
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#radio-buttons').find('input').each(function(el){
            cy.wrap(el).check().should('be.checked')
        })
    })


})