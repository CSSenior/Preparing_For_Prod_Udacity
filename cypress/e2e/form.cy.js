describe("form tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
  });

  //Create Set Form
  it('Test the successful submission of "Create Set Form"', () => {
    //Happy Path
    cy.get('[id="cardSetPage"]').click();
    cy.get('[data-cy="toggle_form"]').click();
    cy.get('[data-cy="set_form"]').should("exist");
    cy.contains("form label", "Card Set Title").should("be.visible");

    cy.get('[data-cy="set_form"] input').first().clear().type("Swift");
    cy.get('[data-cy="set_form"]').find('input[type="submit"').click();
    cy.contains(".setContainer", "Swift").should("be.visible");
  });

  it('Test when the user submits an empty string for "Create Set Form"', () => {
    //Unhappy Path - edge case
    cy.get('[id="cardSetPage"]').click();
    cy.get('[data-cy="toggle_form"]').click();
    cy.get('[data-cy="set_form"]').should("exist");
    cy.contains("form label", "Card Set Title").should("be.visible");

    cy.get('[data-cy="set_form"]').find('input[type="submit"').click();
    cy.contains("form p", "TITLE CANNOT BE EMPTY").should("be.visible");
  });

  //Add Card Form
  it('Test the successful submission of "Add Card Form"', () => {
    //Happy Path
    cy.get('[id="cardSetPage"]').click();
    cy.get(".setContainer").first().children().first().click();

    cy.get('[data-cy="toggle_form"]').should("exist");
    cy.get('[data-cy="toggle_form"]').click();
    cy.get('[data-cy="card_form"]').should("exist");

    cy.get('[data-cy="card_form"] input').first().clear().type("CSS");
    cy.get('[data-cy="card_form"] input')
      .eq(1)
      .clear()
      .type("Cascading Style Sheets");

    cy.get('[data-cy="card_form"]').find('input[type="submit"').click();
    cy.contains(".term", "CSS").should("be.visible");
  });

  it('Test when the user submits empty strings for "Add Card Form', () => {
    //Unhappy Path - edge case
    cy.get('[id="cardSetPage"]').click();
    cy.get(".setContainer").first().children().first().click();

    cy.get('[data-cy="toggle_form"]').should("exist");
    cy.get('[data-cy="toggle_form"]').click();
    cy.get('[data-cy="card_form"]').should("exist");

    cy.get('[data-cy="card_form"]').find('input[type="submit"').click();
    cy.contains("form p", "TERM AND DESCRIPTION CANNOT BE EMPTY").should(
      "be.visible"
    );
  });
});
