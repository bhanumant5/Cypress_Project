

describe (' verify Contact us Form', function(){
    it(' verify Contact us form', function(){
        // cy.visit('https://webdriveruniversity.com/')
        // cy.get('#contact-us').invoke('removeAttr', 'target').click()
        // cy.get('.section_header').invoke('text').then(function(str){
        //     expect(str).to.equal('CONTACT US')
        // })
        // cy.get('input[name="first_name"]').type('Hanumnat')
        // cy.get('input[name="last_name"]').type('bhojane')
        // cy.get('input[name="email"]').type('bhanumnat5@gmail.com')
        // cy.get('[placeholder="Comments"]').type(' i am new in js')
        cy.Contactuslogin('Hanumant','bhojane','bhanumnat5@gmail.com','i am new in js')
        cy.get('input[value="SUBMIT"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')
    })
     
    it(' verify Contact us form', function(){
        // cy.visit('https://webdriveruniversity.com/')
        // cy.get('#contact-us').invoke('removeAttr', 'target').click()
        // cy.get('.section_header').invoke('text').then(function(str){
        //     expect(str).to.equal('CONTACT US')
        // })
        // cy.get('input[name="first_name"]').type('Hanumnat')
        // cy.get('input[name="last_name"]').type('bhojane')
        // cy.get('input[name="email"]').type('bhanumnat5@gmail.com')
        // cy.get('[placeholder="Comments"]').type(' i am new in js')
        // cy.get('input[value="SUBMIT"]').click()
        // cy.get('h1').should('have.text','Thank You for your Message!')
        cy.Contactuslogin('Hanumant','bhojane','bhanumnat5@gmail.com','i am new in js')
        cy.get('input[value="RESET"]').click()
        cy.get('input[name="first_name"]').should('have.text',"")
        cy.get('input[name="last_name"]').should('have.text',"")
        cy.get('input[name="email"]').should('have.text',"")
        cy.get('textarea[name="message"]').should('have.text',"")
    })
     
    it(' verify Contact us form', function(){
        // cy.visit('https://webdriveruniversity.com/')
        // cy.get('#contact-us').invoke('removeAttr', 'target').click()
        // cy.get('.section_header').invoke('text').then(function(str){
        //     expect(str).to.equal('CONTACT US')
        // })
        // cy.get('input[name="first_name"]').type('Hanumnat')
        // cy.get('input[name="last_name"]').type('bhojane')
        // cy.get('input[name="email"]').type('bhanumnat5@gmail')
        // cy.get('[placeholder="Comments"]').type(' i am new in js')
        cy.Contactuslogin('Hanumant','bhojane','bhanumnat5@gmail.com','i am new in js')
        cy.get('input[value="SUBMIT"]').click()
        cy.get('html').should('contain','Invalid')
    })

    it.only(' verify Contact us form', function(){
        // cy.visit('https://webdriveruniversity.com/')
        // cy.get('#contact-us').invoke('removeAttr', 'target').click()
        // cy.get('.section_header').invoke('text').then(function(str){
        //     expect(str).to.equal('CONTACT US')
        // })
        // cy.get('input[name="first_name"]').type('Hanumnat')
        // cy.get('input[name="last_name"]').type('bhojane')
        // cy.get('input[name="email"]').type('bhanumnat5@gmail')
        cy.Contactuslogin('Hanumant','bhojane','bhanumnat5@gmail.com','i am new in js')
         cy.get('input[value="SUBMIT"]').click().wait(3000)
         cy.log()
         cy.get('h1').should('contain', 'Thank You for your Message!')
    })
})