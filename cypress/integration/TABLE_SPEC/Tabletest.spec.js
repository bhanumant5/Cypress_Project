///<reference types="cypress" />


function validateTables(id,expected){
    let sum = 0
    cy.get(`#t0${id}`).find('tr').each(function(el,index){
        //cy.log(el.find('td').last().text())
        if(index != 0){
          // cy.log(el.find('td').last().text()) 
          sum = sum + Number(el.find('td').last().text())
        }
        
     }).then(function(){
         cy.log(sum)
         expect(sum).to.equal(expected)
     })

}

describe('verify the sum of table value',function(){
    it('verify the table values in cypress',function(){
        let sum = 0 
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#t01').find('tr').each(function(el,index){
           //cy.log(el.find('td').last().text())
           if(index != 0){
             // cy.log(el.find('td').last().text()) 
             sum = sum + Number(el.find('td').last().text())
           }
           
        }).then(function(){
            cy.log(sum)
            expect(sum).to.equal(159)
        })

    })


    
    it('verify the table values in cypress',function(){
        let sum = 0 
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#t02').find('tr').each(function(el,index){
           //cy.log(el.find('td').last().text())
           if(index != 0){
             // cy.log(el.find('td').last().text()) 
             sum = sum + Number(el.find('td').last().text())
           }
           
        }).then(function(){
            cy.log(sum)
            expect(sum).to.equal(163)
        })

    
    })

    it('validate table',function(){


        validateTables(1,159)
        validateTables(2,163)


    })



})


// 3-4