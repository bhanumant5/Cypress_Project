///<reference types="cypress" />

describe('verify date and year',()=>{
    it('test', ()=>{
        cy.visit('http://www.webdriveruniversity.com/Datepicker/index.html')
        cy.get('.form-control').should('be.visible').click()
        let dateToSelect=new Date()
        dateToSelect.setDate(dateToSelect.getDate()+400)
        let year = dateToSelect.getFullYear()
        let day=dateToSelect.getDate()
            let month=dateToSelect.toLocaleString('default',{month:'long'})
        
       cy.log(day,month, year)
       function SelectMOnthAndDate(){
        cy.get('.datepicker-switch').first().then(el=>{
            if(!el.text().includes(year)){
                cy.get('.next').first().click()
                SelectMOnthAndDate()
            }
        }).then(()=>{
            
        })
       }
    })
})



