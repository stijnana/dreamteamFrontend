describe('Dreamteam', () => {
  it('', () => {
    cy.visit('http://localhost:4200/');
    cy.get('span.leerplan').click();
    cy.get('span.Interesses').click();
    cy.get('th.mat-column-category-column').contains('Categorie').should('be.visible');
    cy.get('th.mat-column-interest-column').contains('Interesses').should('be.visible');

    cy.get('#formInterest').type('Ik zou graag meer diepgang willen hebben over java');
    cy.get('#formSelectCategory').click();
    cy.get('#optionJava').contains('Java').should('be.visible');
    cy.get('#optionJava').click();
    cy.get('#save-button').click();

    // cy.contains('Ik zou graag meer diepgang willen hebben over java').should('be.visible');


  });
});

