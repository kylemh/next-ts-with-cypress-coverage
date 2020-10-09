describe('landing', () => {
  it('should render', () => {
    cy.visitAndWaitFor('/', 'landing_page');
  });
});
