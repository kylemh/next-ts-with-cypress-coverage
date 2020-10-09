// keep file name different from any TS file within ~/cypress/support so they dont collide on compilation

// in cypress/support/index.d.ts
// load type definitions that come with Cypress module
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * @description Custom command to bootstrap initial page visit
     * @param pathname - the path you want to end up on before tests execute
     * @param testId - the test id of the element that should be visible before tests execute
     * @example cy.visitAndWaitFor('/contact', 'contact_page_hero_banner')
     */
    visitAndWaitFor(pathname: string, testId: string): void;
  }
}
