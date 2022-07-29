

describe('table', function(){
    beforeEach(function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    })
    it('table', function(){
        cy.get('#t01>tbody>tr>td').first().should('have.text','John')
        cy.get('#t01>tbody>tr>td').last().should('have.text', '20')
        cy.get('#t01>tbody>tr>td').eq(1).should('have.text','Smith')
        
    })
    it.only('table', function(){
        let sum = 0
        cy.get('#t01').find('tr').each(function(el, index, arr){
           if(el!=0){
            sum = sum +  Number(el.find('td').last().text())
           }
        }).then(function(){
            expect(sum).to.equal(159)
        })
    })
})