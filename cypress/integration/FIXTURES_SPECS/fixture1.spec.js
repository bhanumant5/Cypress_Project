// import obj from '../../fixtures/Contactus.json'

let obj ={
   firstname:"admin",
   lastname:"admin",
   email:"admin@gmail.com",
   message:"js"
}

describe('test', function(){
    it('tesxt' , function(){
      cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
      cy.get('input[name="first_name"]').type('admin')
      cy.get('input[name="last_name"]').type('admin1')
      cy.get('input[name="email"]').type('bhanumnat5@gmail.com')
      cy.get('textarea[name="message"]').type(' js')
      cy.get('.contact_button').eq(1).click()
      cy.get('h1').should('have.text', 'Thank You for your Message!')
    })
    it('test',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(obj.firstname)
        cy.get('input[name="last_name"]').type(obj.lastname)
        cy.get('input[name="email"]').type(obj.email)
        cy.get('textarea[name="message"]').type(obj.message)
        cy.get('.contact_button').eq(1).click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })
    it.only('test', function(){
      cy.fixture('Contactus').then(function(obj){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(obj.firstname)
        cy.get('input[name="last_name"]').type(obj.lastname)
        cy.get('input[name="email"]').type(obj.email)
        cy.get('textarea[name="message"]').type(obj.message)
        cy.get('.contact_button').eq(1).click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
      })
    })
})