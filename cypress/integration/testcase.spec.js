

///reference types ="cypress"
describe('Test', ()=>{
    it('Test', ()=>{
        cy.visit('https://www.google.co.in/')
        cy.get('.gLFyf').type('flipkart', {force: true})
        cy.get('[class="G43f7e"]>li').children().first().click().should('be.visible')
       // cy.get('.tF2Cxc > .yuRUbf > a > .LC20lb').click()
       
    })
})