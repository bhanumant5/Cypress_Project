describe('javscript alert', function(){
    beforeEach(function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    })
    it.only('test', function(){
        // cy.on("window:alert", function(str){
        //     expect(str).to.eql('I am a JS Alert')
        // })
    
    cy.contains('Click for JS Alert').click()
    cy.get('#result').should('be.visible')
        .and('have.text', 'You successfully clicked an alert')
   
})

it('verify the js confirm - OK ', function () { 
    cy.on('window:confirm', function (str) {
        expect(str).to.equal('I am a JS Confirm')
        return true
    })
    cy.contains('Click for JS Confirm').click()
    cy.get('#result').should('be.visible')
    .and('have.text', 'You clicked: Ok')

})

it('verify the js confirm - Cancel ', function () {
    cy.on('window:confirm', function (str) {
        expect(str).to.equal('I am a JS Confirm')
        return false
    })
    cy.contains('Click for JS Confirm').click()
    cy.get('#result').should('be.visible')
    .and('have.text', 'You clicked: Cancel')

})

it('verify the js Prompt - Cancel ', function () {
    
    cy.window().then(function(obj){
        cy.stub(obj,'prompt').returns('Hello')
        
    })
    cy.contains('Click for JS Prompt').click()
    cy.get('#result').should('be.visible')
    .and('have.text', 'You entered: Hello')

})


it('verify the js confirm - Cancel ', function () {
    cy.window().then(function(obj){
        cy.stub(obj,'prompt').returns(null)
       
    })
    cy.contains('Click for JS Prompt').click()
    cy.get('#result').should('be.visible')
    .and('have.text', 'You entered: null')

})


it('verify the js confirm - OK ', function () {
    cy.window().then(function(obj){
        cy.stub(obj,'confirm').returns(true) 
    })
    cy.contains('Click for JS Confirm').click()
    cy.get('#result').should('be.visible')
    .and('have.text', 'You clicked: Ok')
})


it('verify the js confirm - Cacel ', function () {
    cy.window().then(function(obj){
        cy.stub(obj,'confirm').returns(false)
    })
    cy.contains('Click for JS Confirm').click()
    cy.get('#result').should('be.visible')
    .and('have.text', 'You clicked: Cancel')
   

})
})
