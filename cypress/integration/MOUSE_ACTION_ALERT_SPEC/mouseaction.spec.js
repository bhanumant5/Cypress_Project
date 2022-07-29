describe("mouse action", function () {
  it("verify mouse action", () => {
    cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
    cy.get("#mousehover").trigger("mouseover");
    cy.contains("Top").click({ force: true });
    cy.url().should("include", "top");
  });
  it("test", () => {
    cy.visit("https://www.flipkart.com/");
    cy.contains("Login").trigger("mouseover");
    cy.wait(1000);
    cy.contains("Orders").click({ force: true });
    cy.get("._2xm1JU").should("be.visible");
  });
  it("verify drop and drag", function () {
    cy.visit("http://www.webdriveruniversity.com/Actions/index.html");
    cy.get("#draggable").trigger("mousedown", { which: 1 });
    cy.get("#droppable").trigger("mousemove", { force: true });
    cy.get("#droppable").trigger("mouseup", { force: true });
    cy.get("#droppable").should(
      "have.class",
      "ui-widget-header ui-droppable ui-state-highlight"
    );
  });
  it.only("test", () => {
    cy.visit("https://testautomationpractice.blogspot.com/");
    cy.get("#draggable").trigger("mousedown", { which: 1 });
    cy.get("#droppable").trigger("mousemove", { force: true });
    cy.get("#droppable").trigger("mouseup", { force: true });
    cy.get("#droppable").should("have.class", "ui-state-highlight");
  });
});
