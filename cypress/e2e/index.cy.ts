export {}; // Next.js requires --isolatedModules in tsconfig to be true. Feel free to remove this if you have an import

describe('landing', () => {
  it('should render', () => {
    cy.visitAndWaitFor('/', 'landing_page');
  });
});
