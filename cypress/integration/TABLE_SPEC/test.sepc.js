

///<reference types="cypress"/>

describe('Test', function(){
    it('test', function(){
        cy.visit('https://www.amazon.in/')
        cy.get('#nav-search-bar-form').type('apple')
        cy.get('.autocomplete-results-container').each(function(el){
            if(el.text()=='appleairpods'){
             cy.wrap(el).should('have.text', 'appleairpods')
             
            }
        })
    })
})


// cy.get()
// cy.frameLoaded()
// cy.iframe()

// cy.get('iframe').then(function(el){
//     let a=el.contents().find('element')
//     cy.wrap().should('have.text', '')
// })








