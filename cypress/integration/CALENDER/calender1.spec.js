

///<reference types="cypress"/>

describe('verify the DatePicker', function(){
    it('verify the Date', function(){
       // cy.visit('http://www.webdriveruniversity.com/Datepicker/index.html')
        // let date = new Date()
        // cy.log(date.getDate())
        // cy.log(date.getDay())
        // cy.log(date.getFullYear())
   

        let date2=new Date()
        date2.setDate(date2.getDate()+400)
        let year=date2.getFullYear()
        let date=date2.getDate()
        let wordMonth= date2.toLocaleString('defalt', {month:'long'})
        cy.visit('http://www.webdriveruniversity.com/Datepicker/index.html')
        cy.get('#datepicker').click()
        function selectMontAndYear(){

            cy.get('.datepicker-switch').first().then(function(el){
                if(! el.text().includes(year)){
                    cy.get('.next').first().click()
                    selectMontAndYear()
                }
            }).then(function(){
                cy.get('.datepicker-switch').first().then(function(el){
                    if(! el.text().includes(wmonth)){
                        cy.get('.next').first().click()
                        selectMontAndYear()
                    }
                })

            })

           // cy.get('.next').first()

        }

        function selectFutureDate(){
            cy.contains(date).click()
        }
        selectMontAndYear()
        selectFutureDate()

       
    })
})