const { it } = require("mocha");


describe('test1', function(){
    cy.on('uncaught:exception', (err, runnable) => {
        // expect(err.message).to.include('of undefined')
        //   done()
          return false
        });
    // it('test', function(){
    //     cy.visit('https://login.fyers.in/')
    //     cy.get('#fy_client_id').type('DH00663')
    //     cy.get('#clientIdSubmit').click()
    //     cy.get('#fy_client_pwd').type('Hamu@1995')
    // })
    it('test iframe', function(){
        cy.visit('https://www.zkoss.org/zkdemo/composite/iframe')
        
    })
})