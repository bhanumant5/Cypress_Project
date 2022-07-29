
describe('api test', function(){
    it('test api', function(){
        cy.request({
            method:'POST',
            url:'https://reqres.in/api/users',
            Body:{
                "id": "254",
                "createdAt": "2022-06-10T12:14:36.506Z"
            }
        }).then(function(res){
          cy.log(res)
          expect(res.status).to.eqls(201)
         // expect(res.Body).to.eqls('')
        })
    })
    it('test2', function(){
        cy.request({
            method:'GET',
            url:'https://reqres.in/api/users?page=2',

        }).then(function(res){
            cy.log(res)
            expect(res.status).to.eqls(200)
        })
    })
    it('verify the PUT api ',function(){

        cy.request({
            method:'PUT',
            url:"https://reqres.in/api/users/2",
            body:{
                "name": "morpheus",
                "job": "zion resident"
            }
        }).then(function({status,duration}){
            expect(status).to.eq(200)
            expect(duration).to.be.lessThan(400)
        })

    })
    it('verify the delet api', function(){
        cy.request({
            method:"DELETE",
            url:'https://reqres.in/api/users/2'
        }).then(function({status}){
          expect(status).to.eqls(204)
        })
    })
    
})