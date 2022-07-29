describe('test', ()=>{
    // it('test', ()=>{
    //     cy.visit('https://www.flipkart.com/')
    //     cy.get('[class="_3704LK"]').type('mobiles')
    //     cy.get('div[class="_1cmsER"]').find('li').eq(2).click()
    //     cy.url().should('be.visible')
    // })  it('',function(){
    //     cy.visit('https://www.amazon.in/')
    //     cy.get('#twotabsearchtextbox').type('iphone')
    //     cy.get('.autocomplete-results-container').find('.s-suggestion').each(function(el){
    //         cy.wrap(el).invoke('text').then(function(txt){
    //             cy.log(txt.trim())
    //             if(txt.trim()=="iphone 11 cover"){
    //                 cy.wrap(el).click()
    //             }
    //         })
    //     })
    // })

    it('Ts1-verify Dropdown ', ()=>{
        cy.visit('https://www.amazon.in/')
        cy.get('#twotabsearchtextbox').type('iphone')
        cy.get('.autocomplete-results-container').find('.s-suggestion').each(function(el){
            cy.wrap(el).invoke('text').then(function(text){
                if(text.trim()=='iphone 11 cover'){
                    cy.wrap(el).click()
                }
            })
        })
    })
    it.only('TS02- verify dropdown', function(){
        cy.visit('https://www.flipkart.com/')
        cy.get('._3704LK').type('iphone')
        cy.get('.lrtEPN _17d0yO').find('r85cly').click()
    })
})