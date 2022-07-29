///< reference types ="cypress" />

describe("test", function () {
  let token =
    "Bearer 55a57ef5c3b57f88e8cd94203fddab36c6896615cc8a971dedd9c6c6a9b4051b";
  it.skip("test", function () {
    cy.request({
      method: "GET",
      url: "https://gorest.co.in/public/v2/users",
      headers: {
        Authorization: token,
      },
    }).then(function (res) {
      //cy.log(res)
      expect(res.status).to.equal(200);
    });
  });

  it.only("test", function () {
    cy.request({
      method: "POST",
      url: "https://gorest.co.in/public/v2/users",
      headers: {
        Authorization: token,
      },
      body: {
        name: "Hanumant Bhojane",
        gender: "male",
        email: "tenali.ramakrishna@15ce.com",
        status: "active",
      },
    }).then(function (res) {
      cy.log(res);
    });
  });
});
