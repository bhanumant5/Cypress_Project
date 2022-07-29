/// <reference types="cypress"/>

describe('test1', function(){
  it('test', function(){
    cy.visit('https://www.flipkart.com/')
    cy.get('._3704LK').type('Mobiles')
    cy.get('[type="submit"]').click()
    cy.get('[title="realme"] > ._1Y4Vhm > ._2iDkf8 > ._24_Dny').click().should('be.visible')
  })
  it('test2', function(){
    cy.visit('https://www.flipkart.com/')
    cy.get('._3704LK').type('mobiles')
    cy.get('[type="submit"]').click()
    cy.log()
  })
  it.only('test', function(){
    cy.visit('https://testautomationpractice.blogspot.com/')
    //cy.get('#frame-one1434677811').check().should('be.checked')
  })
})