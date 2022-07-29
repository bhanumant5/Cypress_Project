
describe('table', function(){
   beforeEach(function(){
       cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
   }) 
   it('test', function(){
       cy.get('#t01>tbody>tr').each(function($el){
           cy.wrap($el).within(function(){
               cy.get('td').each(function($el){
                   cy.log($el.text())
               })
           })
           
           
       })
   })
})