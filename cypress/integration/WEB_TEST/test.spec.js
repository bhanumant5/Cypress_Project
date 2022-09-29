///<reference types ="cypress"/>



describe('test ', function(){
    it.skip('test', function(){
        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.get('[class="col-md-4 col-xs-4 col-sm-4"]>div>input').first().check().should('be.visible')
        cy.get('[class="col-md-4 col-xs-4 col-sm-4"]>div>input').first().uncheck().should('be.visible')
        cy.get('[class="col-md-4 col-xs-4 col-sm-4"]>div>input').eq(2).check().should('be.visible')
        cy.get('[class="col-md-4 col-xs-4 col-sm-4"]>div>input').eq(2).uncheck().should('be.visible')
        cy.get('[class="col-md-4 col-xs-4 col-sm-4"]>div>input').last().check().should('be.visible')
        cy.get('[class="col-md-4 col-xs-4 col-sm-4"]>div>input').last().uncheck().should('be.visible')
    })
    it.skip('test', function(){
        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.get('[class="col-md-4 col-xs-4 col-sm-4"]>select>option').eq(2).click({force: true}).should('have.text', 'Adobe Photoshop')
    })
    it.skip('test', function(){
        cy.visit('http://demo.automationtesting.in/Register.html')
       cy.get('[class="col-sm-8 col-xs-8 col-md-8"]>h1').should('have.text', 'Automation Demo Site ')
    })
    it('test', function(){
        let path='abc.jpeg'
        cy.visit('http://demo.automationtesting.in/Register.html')
      cy.get('#imagesrc').attachFile(path).should('be.visible')
    })
})

