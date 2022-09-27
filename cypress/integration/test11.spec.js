
///<reference types="cypress"/>


describe('Test', ()=>{
  it('Test', ()=>{
    cy.visit('https://www.amazon.in/')
    cy.get('#nav_cs_buy_again',{timeout:2000}).click().then(function(el){
      cy.log(el.text())
    })
  })
})