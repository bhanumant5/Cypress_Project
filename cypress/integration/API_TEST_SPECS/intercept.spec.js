


describe (' verify intercept ', function(){
    it(' interceppt', function(){
        cy.intercept({
            method:'GET',
            url:'https://jsonplaceholder.cypress.io/comments/1'
        }).as('getComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment')
        cy.get('.network-comment').should('be.visible')
        cy.url().should('contain', 'network-requests')
    })

    it.only('verify intercept', function(){
        cy.intercept({
            method:'POST',
            url:'https://jsonplaceholder.cypress.io/comments'
        }).as('postComment')
    })
     cy.visit('https://example.cypress.io/commands/network-requests')
     cy.contains('Post Comment').click()
     cy.wait('@postComment')
     cy.get('.network-comment').should('be.visible')
     cy.url().should('contain', 'network-requests')
})