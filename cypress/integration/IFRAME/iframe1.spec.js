

///<reference types="cypress"/>

describe('TS1- verify iframe element', function(){
    it('test', function(){
        cy.get('[id="courses-iframe"]').then(function(iframe){
          let a=  iframe.contents().find('body')
          cy.wrap(a).as('aa')
          cy.get('@aa').find('[class="navigation clearfix"]>li>a').eq(2).click()
          cy.url().should('include', 'AutomationPractice')
        })
    })
})