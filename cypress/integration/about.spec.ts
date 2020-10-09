describe('app', () => {
  it('redirects to /', () => {
    cy.visit('/about');
    cy.location('pathname').should('equal', '/');
    cy.findByTestId('landing_page').should('exist').and('be.visible');
  });
});
