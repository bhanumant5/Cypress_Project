

describe('verify table', function(){
    beforeEach(function(){
        cy.visit('https://the-internet.herokuapp.com/tables')
    })
    it('verify table functionality', function(){
        cy.get('#table1>tbody>tr').should('have.length', 4)
        cy.get('#table1>tbody>tr').each(function($el, index, $ele){
            cy.wrap($el).within(function(){
                cy.get('td').each(function($data, index, $el){
                  cy.log($data.text())
                })
            })
        })
    })
    it('get data ', function(){
        cy.get('#table1>tbody>tr').first().within(function($el){
            //cy.wrap('td').text().should('have.contain', '$50.00')
            cy.get('td').eq(3).should('contain.text', '$50.00')
        })
    })
     it('table 2', function(){
         cy.get('#table2>tbody>tr').should('have.length', 4)
     })
     it('table2', function(){
         cy.get('#table2>tbody>tr').each(function($el){
             cy.wrap($el).within(function(){
                 cy.get('td').each(function($ele){
                     cy.log($ele.text())
                 })
             })
         })
     })
     it('verify table', function(){
         cy.get('#table2>tbody>tr').first().within(function($el){
             cy.get('td').eq(3).should('contains.text', '$50.00')
         })
     })
     it.only('verify table', function(){
        cy.get('#table2>tbody>tr').eq(3).within(function($el){
            cy.get('td').eq(3).should('contains.text', '$50.00')
        })
    })
    
})