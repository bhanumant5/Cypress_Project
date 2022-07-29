///<reference types ="cypress"/>

describe('test', function(){
    it('test', function(){
        cy.request({
            method:'GET',
            url:'https://reqres.in/api/users?page=2"'
        }).then(function({status,headers,duration,body}){
             cy.log(status)
            //  expect(status).to.eql(200)
            //  expect(body).to.have.keys(["data","page","per_page","support","total","total_pages"])
             body.data.forEach(element => {
                expect(element).to.have.keys(["id","first_name","last_name","email","avatar"])
                  expect(element.first_name).not.to.eql(null)
                  expect(element.last_name).not.to.eql(null)
                  expect(element.email).not.to.eql(null)
                  expect(element.id).not.to.eql(null)
                  expect(element.avatar).not.to.eql(null)
   
               });
        })
    })
})