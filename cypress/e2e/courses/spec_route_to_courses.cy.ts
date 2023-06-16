describe('Dreamteam', () => {
  it('', () => {
    cy.viewport(1280, 720);
    cy.visit('http://localhost:4200/');
    cy.get('span.leerplan').click();
    cy.get('span.courses').click();
    cy.get('#categoryCourse').contains('Categorie').should('be.visible');
    cy.get('#filterOnIntrest').contains('Mijn Interesses').should('be.visible');
    cy.get('#resetFilers').contains('Reset filters').should('be.visible');
  });
});
