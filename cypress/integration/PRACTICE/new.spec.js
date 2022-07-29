///<reference types ="cypress"/>



describe('test', function(){
    it('test', function(){
        cy.visit('https://www.amazon.in/')
        cy.get('#twotabsearchtextbox').type('mobiles, {enter}')
      //  cy.get('input[type="checkbox"]',{timeout:4000}).eq(1).click({force: true}).should('have.text', 'Samsung')
         cy.get('').each(function(el){
            // if(el.text().includes('samsung'){
            //    cy.wrap()
            // })
         })
    })
})

