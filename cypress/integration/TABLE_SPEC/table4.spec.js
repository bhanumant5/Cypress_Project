


///<reference types = "cypress"/>


describe('test', ()=>{
    it('test', function(){
        let sum = 0
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#t01').find('tr').each(function(el, index, arr){
            if(el!=0){
                sum = sum +  Number(el.find('td').last().text())
            }
        }).then(function(sum){
            expect(sum).to.equal(159)
        })
        
    })
})