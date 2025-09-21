describe("Navbar Theme Toggle", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should default to light mode", () => {
    cy.get("body").should("have.class", "bg-light");
    cy.get("body").should("have.class", "text-dark");
  });

  it("should switch to dark mode when toggled", () => {
    cy.get("[data-testid=theme-toggle]").click();
    cy.get("body").should("have.class", "bg-dark");
    cy.get("body").should("have.class", "text-light");
  });

  it("should toggle back to light mode", () => {
    cy.get("[data-testid=theme-toggle]").click();
    cy.get("[data-testid=theme-toggle]").click();
    cy.get("body").should("have.class", "bg-light");
    cy.get("body").should("have.class", "text-dark");
  });
});
