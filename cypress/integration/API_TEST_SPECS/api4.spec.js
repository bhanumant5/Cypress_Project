

///<reference types="cypress"/>

describe('test', function(){
    it('test', function(){
        cy.request({
            method:'GET',
            url:'https://reqres.in/api/users?page=2'
        }).then(function(res){
            //cy.log(res)
            expect(res.status).to.eql(200)
        })
    })
    it('test', function(){
        cy.request({
            method:'POST',
            url:'https://reqres.in/api/users',
            body:{
                name: "Hanumant",
                job: "Tester"
            }
        }).then(function(res){
            cy.log(res)
            expect(res.body.name).to.equal('Hanumant')
            expect(res.body.job).to.equal('Tester')
        })
    })
    it.only('test', function(){
        cy.request({
            method:'PUT',
            url:'https://reqres.in/api/users/2',
            body:{
                name: "Hanumant",
                job: "zion resident"
            }
        }).then(function(res){
            expect(res.body.name).to.equal('Hanumant')
        })
    })
})