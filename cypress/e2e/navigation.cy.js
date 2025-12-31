describe("navigation tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
  });
  it('Clicking on "Card Set" in the side menu navigates to the page containing the card sets.', () => {
    cy.get('[id="cardSetPage"]').click();
    cy.contains("Study Set Library").should("be.visible");
  });

  it('Clicking "About" shows About page', () => {
    cy.get('[id="aboutPage"]').click();
    cy.contains("About Study Night").should("be.visible");
  });

  it('Clicking "Home" shows Home page', () => {
    cy.get('[id="homePage"]').click();
    cy.contains("Study Night").should("be.visible");
    cy.contains("A Digital Study Solution for the Modern World").should(
      "be.visible"
    );
  });
});
