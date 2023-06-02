describe('Dreamteam', () => {
  it('', () => {
    // Visit the specified URL
    cy.visit('http://localhost:4200/');
    // Click on the 'leerplan' span
    cy.get('span.leerplan').click();
    // Click on the 'courses' span
    cy.get('span.courses').click();
    // Verify that 'Mijn Intresses' is visible
    cy.get('#filterOnIntrest').contains('Mijn Intresses').should('be.visible');
    // Verify that 'Reset filters' is visible
    cy.get('#resetFilers').contains('Reset filters').should('be.visible');
    // Verify that 'Categorie' is visible
    cy.get('#categoryCourse').contains('Categorie').should('be.visible');

    // Click on the 'categoryCourse' element
    cy.get('#categoryCourse').click();
    // Click on the 'filterJava' element
    cy.get('#filterJava').click();
    // Verify that the number of 'mat-card' elements in 'cardWrapper' is 2
    cy.get('.cardWrapper').find('mat-card').should('have.length', 2);

    // Click on the 'categoryCourse' element
    cy.get('#categoryCourse').click();
    // Click on the 'filterGo' element
    cy.get('#filterGo').click();
    // Verify that the number of 'mat-card' elements in 'cardWrapper' is 2
    cy.get('.cardWrapper').find('mat-card').should('have.length', 2);

    // Click on the 'categoryCourse' element
    cy.get('#categoryCourse').click();
    // Click on the 'filterPHP' element
    cy.get('#filterPHP').click();
    // Verify that the number of 'mat-card' elements in 'cardWrapper' is 0
    cy.get('.cardWrapper').find('mat-card').should('have.length', 1);

    // Click on the 'categoryCourse' element
    cy.get('#categoryCourse').click();
    // Click on the 'filterWerkmethode' element
    cy.get('#filterWerkmethode').click();
    // Verify that the number of 'mat-card' elements in 'cardWrapper' is 2
    cy.get('.cardWrapper').find('mat-card').should('have.length', 3);

    // Click on the 'filterOnIntrest' element
    cy.get('#filterOnIntrest').click();
    // Verify that the number of 'mat-card' elements in 'cardWrapper' is 4
    cy.get('.cardWrapper').find('mat-card').should('have.length', 7);

    // Click on the 'resetFilers' element
    cy.get('#resetFilers').click();
    // Verify that the number of 'mat-card' elements in 'cardWrapper' is 6
    cy.get('.cardWrapper').find('mat-card').should('have.length', 8);
  });
});
