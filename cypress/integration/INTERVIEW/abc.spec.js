///<reference types="cypress"/>


describe('TS01- verify the web', function(){
    it('test', function(){
        cy.visit('https://www.flipkart.com/')
        cy.get('div[class="eFQ30H"]>a>div').eq(1).then(function(el){
          let a= el.text()
           cy.log(a)
        })
        
    })

    it('test', function(){
        cy.visit('https://www.flipkart.com/')
        cy.get('[class="_2Xfa2_"]>div>a').then(function(el){
            cy.log(el.text())
        })
    })
    it('test', function(){
        cy.visit('https://www.flipkart.com/')
        cy.get('[class="_37M3Pb"]>div>a').eq(4).then(function(el){
          let a= el.text()
           cy.log(a)
        })
        
    })
    it('test', function(){
        cy.visit('https://www.flipkart.com/')
        cy.get('[class="_3704LK"]').type('i phone')
        cy.get('[class="col-12-12 _1MRYA1 _38UFBk"]>li').first().click()
    })
    it('test', function(){
        cy.visit('https://www.amazon.in/')
        cy.get('#twotabsearchtextbox').type('i phone')
        cy.get('[class="autocomplete-results-container"]>div').eq(3).click({force:true})

    })

    it('test', function(){
        cy.visit('https://www.amazon.in/')
        cy.get('[class="nav-progressive-content"]>a').eq(0).then(function(el){
            let a= el.text()
            cy.log(a)
        })
    })
    it('test', function(){
        cy.visit('https://www.amazon.in/')
        cy.get('#twotabsearchtextbox').type('i phone')
       // cy.get('[class="autocomplete-results-container"]>div>div>div>span').eq(7).click()
       cy.get('.autocomplete-results-container').find('.s-suggestion-container').each(function(el){
          cy.wrap(el).invoke('text').then(function(text){
             if(text.trim()=='i phone 14por max'){
                cy.wrap(el).click()
             }
          })
       })
    })

    it('test', function(){
        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
        // cy.frameLoaded('#frame')
        // cy.iframe('[[class="item active"]').click()
        cy.get('#frame').then(function(iframe){
           let a= iframe.contents().find('body')
           cy.wrap(a).as('iframe')
           cy.get('@iframe').find('[class="nav navbar-nav"]>li>a').eq(1).click().should('be.visible')
        })
    })

    it.only('test', function(){
        cy.visit('https://www.flipkart.com/')
        cy.get('[class="_1psGvi SLyWEo"]>div').find('.xtXmba').then(function(text){
         let a=text.text()
         console.log(a)
        }).then(function(){
            cy.contains('Beauty, Toys & More').should('have.text', 'Beauty, Toys & More')
        })
        cy.get('[class="col-12-12 _2oO9oE"]').find('._3704LK').type('mobile {enter}')
        cy.get('[class="_4921Z t0pPfW"]').children().first().click({ force: true })
        cy.get('[title="Infinix"] > ._1Y4Vhm > ._2iDkf8 > ._24_Dny').click({force:true})
        
    })


})