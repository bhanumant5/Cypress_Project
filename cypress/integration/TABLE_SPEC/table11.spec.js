
describe('test', function(){
    it('test', function(){
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        cy.get('[id="product"]>tbody>tr>th').eq(0).should('have.text','Instructor')
    })
    it('test', ()=>{
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        cy.get('')
    })
})