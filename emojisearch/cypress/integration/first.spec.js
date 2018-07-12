describe("visits our site", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("", () => {
    cy.focused().should("have.class", "search-box");
  });
  it("accepts input", () => {
    cy.get(".search-box")
      .type("smile")
      .should("have.value", "smile");
  });
  it("Check that app imports all emojis", () => {
    cy.get(".emoji").should("have.length", 1820);
  });
  it("Check that the app filters", () => {
    cy.get(".search-box").type("crab");
    cy.get(".emoji").should("have.length", 1);
  });
});
