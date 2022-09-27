

///<reference types ='cypress'/>


describe('Ts1- Verify the Web Element ', ()=>{
    it('verify element ', ()=>{
        cy.visit('https://www.flipkart.com/sony-cfi-1108a01-825-gb-astro-s-playroom/p/itmc724ceaaa3d5e')
        cy.get('[class="_1YokD2 _3Mn1Gg col-8-12"]>div').eq(2).then(function(el){
            let a=el.text()
            cy.log(a).contains('Coming Soon').should('be.visible')
            // cy.wrap(el)
        })
    })
    it('verify the web', ()=>{
        cy.visit('https://www.flipkart.com/sony-cfi-1108a01-825-gb-astro-s-playroom/p/itmc724ceaaa3d5e')
        cy.get('[class="_1YokD2 _3Mn1Gg col-8-12"]>div').eq(2).each(function(el){
            cy.wrap(el).invoke('text').then(function(text){
                cy.log(el.text())
            }).then(function(str){
                cy.contains(str).should('be.visible')
            })
        })
    })
    it('test case 1', function(){
        cy.visit('https://www.amazon.in/')
        cy.get('#nav-search-bar-form').type('Mobiles')
        cy.get('#nav-search-submit-button').click()
        cy.get('span[class="a-list-item"]>a>span').eq(9).then(function(text){
            cy.wrap(text).check()
        })
    })
 
})

