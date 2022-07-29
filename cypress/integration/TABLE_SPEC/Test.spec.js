/// <reference types= 'cypress' />

function validateTables(id, expected){
    let sum=0;
    cy.get(`#t0${id}`).find('tr').each(function(el, index){
        if(index !=0){
            sum=sum+Number(el.find().last().text())
        }
    }).then(function(){
        cy.log(sum)
        expected(sum).to.equal(expected)
    })
}


describe('Verify the sum of Table', function(){
    it('verify table values in cypress', function(){
        let sum= 0
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy,get('#t02').find('tr').each(function(el, index){
            if(index !=0){
                sum=sum+Number(el.find('td').last().text())
            }
        }).then(function(){
            cy.log(sum)
            expect(sum).to.equal(163)
        })
    })
})