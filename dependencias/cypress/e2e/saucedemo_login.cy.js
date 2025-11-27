/// <reference types="cypress" />

function loginAs(username, password = 'secret_sauce') {
  cy.visit('/');
  cy.get('[data-test="username"]').clear().type(username);
  cy.get('[data-test="password"]').clear().type(password);
  cy.get('[data-test="login-button"]').click();
}

describe('Saucedemo login', () => {
  it('logs in successfully with standard_user', () => {
    loginAs('standard_user');
    cy.url().should('include', '/inventory.html');
    cy.get('.inventory_list').should('be.visible');
  });

  it('shows error for locked_out_user', () => {
    loginAs('locked_out_user');
    cy.get('[data-test="error"]').should('be.visible').and('contain.text', 'locked out');
    cy.url().should('not.include', '/inventory.html');
  });

  it('logs in with problem_user and reaches inventory', () => {
    loginAs('problem_user');
    cy.url().should('include', '/inventory.html');
    cy.contains('.title', 'Products').should('be.visible');
  });
});
