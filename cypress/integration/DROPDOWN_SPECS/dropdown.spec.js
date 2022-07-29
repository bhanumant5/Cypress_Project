
describe('verify Dropdown', function(){
    cy.on('uncaught:exception', (err, runnable) => {
        //expect(err.message).to.include('of undefined')
         // done()
          return false
        });
    it('verify Dropdown', function(){
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
        // cy.get('#main-header').invoke('text').then(function(str){
        //     expect(str).to.eql('DROPDOWN, CHECKBOXE(S) & RADIO BUTTON(S)')
        // })
        cy.get('[class="section-title"]').should('have.class','section-title')
        cy.get('input[value="green"]').check().should('be.visible')
    })

    it('verify Dropdown' , function(){
        cy.visit('https://www.screener.in/')
        cy.get('.home-search').type('Gnfc')
        cy.get('.home-search .dropdown-content li').each(function(el){
            expect(el.text().includes('Gujarat Narmada Valley Fertilizers & Chemicals Ltd'))
                cy.wrap(el).click()
            
        })
      
    })
    it('Dropdown',function(){
        cy.visit('https://www.screener.in/')
        cy.get('.u-full-width').eq(3).type('ava')
        cy.get('.home-search .dropdown-content li').each(function(el){
            cy.log(el.text())
            if(el.text().includes('Avanti Feeds Ltd')){
                cy.wrap(el).click()
            }
        })
         
    })
    it('dropdown', function(){
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#dropdowm-menu-1').find('option').each(function(el){
            if(el.text()=='Python'){
                cy.wrap(el.click())
            }
           
        })
    })
    it('dropdown', function(){
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#fruit-selects').find('option').each(function(el){
            if(el.text()=='Apple'){
                cy.wrap(el.click())
            }
        })
    })
      it.only('test', function(){
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('table[class="inline_grid choices"]>tbody>tr').check(['Sunday']).check().should('be.visible')
      })
})