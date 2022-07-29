///<reference types="cypress"/>
describe('verify dynamic dropdown',function(){
    it.skip('paytm',function(){
        cy.visit('https://paytm.com/bus-tickets')
       cy.get('#text-box').first().type('hyderabad')
       cy.get('._2Alu').find('._2xgL').first().click()
       
    })
    it.skip('test', function(){
        cy.visit('https://www.google.co.in/')
        cy.get('[class="gLFyf gsfi"]').type('fb')
        cy.get('.gLFyf').click().should('be.visible')
    })
    it.skip('test', ()=>{
        cy.visit('https://in.bookmyshow.com/')
        cy.get('span[class="sc-iuDHTM uqCMs"]').eq(0).click({force: true}).should('be.visible')
        // cy.get('span[class="sc-ebFjAB bqfntN"]').type('pune',{force: true})
    })
    it('test', ()=>{
        cy.visit('https://www.screener.in/')//cy.get('.home-search > .has-addon > .u-full-width')
        cy.get('.home-search > .has-addon > .u-full-width').type('avan')
    })
})