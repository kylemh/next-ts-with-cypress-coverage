// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import '@testing-library/cypress/add-commands';

/**
 * NOTE: If you add a custom command, please add types for it.
 * @see https://docs.cypress.io/guides/tooling/typescript-support.html#Types-for-custom-commands
 * */

Cypress.Commands.add('visitAndWaitFor', (pathname, testId) => {
  cy.visit(pathname);
  cy.findByTestId(testId).should('exist').and('be.visible');
});
