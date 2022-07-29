/// <reference types= 'cypress' />

describe (' traverse method functionality', function(){
    it('To get children of DOM elements, use the .children() command.', function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('ol[class="breadcrumb traversal-breadcrumb"]').children().should('have.length',3)
    })

    it.only('To get a DOM element at a specific index, use the .eq() command.', function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('ol[class="breadcrumb traversal-breadcrumb"]').children().eq(0).should('contain','Home')
        cy.get('ol[class="breadcrumb traversal-breadcrumb"]').children().eq(1).should('contain','About Us')
        cy.get('ol[class="breadcrumb traversal-breadcrumb"]').children().eq(2).should('contain','Contact Us')
    })
    it('To get the first DOM element within elements, use the .first() command.', function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('ol[class="breadcrumb traversal-breadcrumb"]').first().should('contain','Home')
    })
    it('To get the last DOM element within elements, use the .last() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('ol[class="breadcrumb traversal-breadcrumb"]').last().should('contain','Contact Us')  
    })
    it('To get descendant DOM elements of the selector, use the .find() command.', function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('ol[class="breadcrumb traversal-breadcrumb"]').find('li').should('contain','Home')
    })
})