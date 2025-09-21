describe("OrderTable Pagination", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/orders");
  });

  it("should show 10 rows on the first page", () => {
    cy.get("table tr")
      .not(":first")
      .not(":nth-child(2)")
      .should("have.length", 10);
  });

  it("should navigate to next page and show different users", () => {
    let firstPageFirstUser;
    cy.get("table tr:nth-child(3) td:nth-child(3)")
      .invoke("text")
      .then((text) => {
        firstPageFirstUser = text.trim();
      });

    cy.get(".btn").contains(">").click();

    cy.get("table tr:nth-child(3) td:nth-child(3)")
      .invoke("text")
      .should((text) => {
        expect(text.trim()).not.to.eq(firstPageFirstUser);
      });
  });

  it("should allow direct page number navigation", () => {
    cy.get("span").contains("3").click();
    cy.get("span.pageNumberActive").should("contain.text", "3");
  });

  it("should disable previous button on first page", () => {
    cy.get(".btn").first().should("be.disabled");
  });

  it("should disable next button on last page", () => {
    cy.get("span").last().click();
    cy.get(".btn").last().should("be.disabled");
  });
});
