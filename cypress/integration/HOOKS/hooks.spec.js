///<reference types ="cypress" />
describe("test", function () {
  before(function () {
    cy.visit("");
  });
  beforeEach(function () {
    cy.log();
  });
  it("test", function () {
    cy.get("");
  });
  it("test", function () {
    cy.get("");
  });
  afterEach(function () {
    cy.log();
  });
  after(function () {
    cy.log();
  });
});
