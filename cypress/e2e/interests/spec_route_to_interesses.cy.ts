describe('Dreamteam', () => {
  it('', () => {
    cy.visit('http://localhost:4200/');
    cy.get('span.leerplan').click();
    cy.get('span.Interesses').click();
    cy.get('th.mat-column-category-column').contains('Categorie').should('be.visible');
    cy.get('th.mat-column-interest-column').contains('Interesses').should('be.visible');
  });
});
