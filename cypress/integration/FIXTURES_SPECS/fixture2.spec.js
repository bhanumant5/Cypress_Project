//const { before } = require("cypress/types/lodash")




describe('test', function(){
  let obj;
  before(function(obj){
    cy.fixture('contactus1').then()
  })
    it('tesxt' , function(){
        
      cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
      cy.get('input[name="first_name"]').type('admin')
      cy.get('input[name="last_name"]').type('admin1')
      cy.get('input[name="email"]').type('bhanumnat5@gmail.com')
      cy.get('textarea[name="message"]').type(' js')
      cy.get('.contact_button').eq(1).click()
      cy.get('h1').should('have.text', 'Thank You for your Message!')
    })
})