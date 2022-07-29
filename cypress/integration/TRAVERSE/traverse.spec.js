
///<reference types = "cypress"/>

describe('test', ()=>{
    it('test', ()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').find('li').eq(1).should('have.text', 'Apple')
    })
    it('test', function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').find('li').first().should('have.text', 'Fruits')
    })
    it('test', function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').find('li').last().should('have.text', 'Lentils')
    })
    it('test', function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().should('have.length', 11)
    })
    it('test', function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').next().should('have.text', 'Asparagus')
    })
    it('test', function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').prev().should('have.text', 'Figs')
    })
    it('test', function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').siblings().should('have.length', 10)
    })
    it('test', function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').prevAll().should('have.length', 6)
    })
    it.only('test', function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').nextAll().should('have.length', 4)
    })
})