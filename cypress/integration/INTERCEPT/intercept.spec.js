///<reference types = "cypress"/>

describe("verify Api", function () {
  it.skip("test", function () {
    cy.intercept({
      method: "GET",
      url: "https://jsonplaceholder.cypress.io/comments/1",
    }).as("getcomment");
    cy.visit("https://example.cypress.io/commands/network-requests");
    cy.contains("Get Comment").click();
    cy.wait("@getcomment");
    cy.get(".network-comment").should("contain", `laudantium`);
  });
  it("verify the get gomment functionality", function () {
    cy.intercept({
      method: "GET",
      url: "https://jsonplaceholder.cypress.io/comments/1",
    }).as("getComment");
    cy.visit("https://example.cypress.io/commands/network-requests");
    cy.contains("Get Comment").click();
    cy.wait("@getComment");
    cy.get(".network-comment").then(function ({ response, req }) {
      //cy.log(res)
      expect(response.statusCode).to.eql(200);
      cy.get(".network-comment").should("have.text", response.body.body);
    });
  });
});
