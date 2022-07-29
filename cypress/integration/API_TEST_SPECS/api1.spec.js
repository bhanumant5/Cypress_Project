

describe('test1', function(){
    it('test', function(){
        cy.intercept({
            method:'GET',
            url:'https://jsonplaceholder.cypress.io/comments/1'
        }).as('getComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment')
        cy.get('.network-comment').should('contain','laudantium') 
    })
})