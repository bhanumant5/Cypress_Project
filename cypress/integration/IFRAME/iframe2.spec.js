

describe('test', function(){
    it('test', function(){
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href="learning-path"]').eq(0).click()
        cy.wait(2000)
        //cy.get('.auto-container').find('h1').should('have.text', 'LEARNING PATHS')
        cy.url().should('include', 'https://www.rahulshettyacademy.com/AutomationPractice/')
    })
    it('test', function(){
        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then(function($iframe){
            let body =$iframe.contents().find('body')
            cy.wrap(body).as('bdy')
            cy.get('@bdy').find("a[href='index.html']").parent().should('have.class','active')
        })
    }) 
})