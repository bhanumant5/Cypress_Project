describe("TS01- Verify the Dynamic Dropdown", function () {
  cy.on('uncaught:exception', (err, runnable) => {
      expect(err.message).to.include('of undefined')
        done()
        return false
      });

  it.skip("verify dynamic dropdown ", function () {
    cy.visit("https://www.amazon.in/");
    cy.get("#twotabsearchtextbox").type("i phone 11").wait(2000);
    cy.get(".autocomplete-results-container")
      .find(".s-suggestion-container")
      .wait(3000)
      .eq(3)
      .click()
      .should("be.visible");
     
  });
  it.skip('TS02- verify Radio Button', ()=>{
    cy.visit('https://www.makemytrip.com/')
    cy.get('font12 blackText latoBold wrapFilter  ').eq(3).check().should('be.checked')
  })
  it('verify static Dropdown', ()=>{
    cy.visit('https://www.onlinesbi.com/')
    cy.get('.filter-option').eq(2).select().should('be.visible')
  })
});
