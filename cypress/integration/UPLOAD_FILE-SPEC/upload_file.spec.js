
describe('upload file', function(){
    it.skip('upload file', function(){
        const path ='abc.jpeg'
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('#RESULT_FileUpload-10').attachFile(path)
    })
    it.skip('upload file', ()=>{
        const path1= 'abc.jpeg'
        cy.visit('http://www.webdriveruniversity.com/File-Upload/index.html')
        cy.get('#myFile').click().attachFile(path1)
        cy.get('#submit-button').click()
        cy.contains('File Upload').should('be.visible')
    })
    it.skip('verify double click', ()=>{
          cy.visit('https://testautomationpractice.blogspot.com/')
       cy.contains('Copy Text').dblclick().should('be.visible')
       cy.get('#field2').should('be.visible')
    })
    it('test', function(){
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('#main').then(function(body){
            cy.log(body)
        })
    })
})
