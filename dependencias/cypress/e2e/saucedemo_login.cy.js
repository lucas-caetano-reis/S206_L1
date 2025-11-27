/// <reference types="cypress" />

function loginAs(username, password = 'secret_sauce') {
  cy.visit('https://www.saucedemo.com/');
  cy.get('#user-name').clear().type(username);
  cy.get('#password').clear().type(password);
  cy.get('#login-button').click();
}

describe('Saucedemo login', () => {
  it('logs in successfully with standard_user', () => {
    loginAs('standard_user');
    cy.url().should('include', '/inventory.html');
    cy.get('.inventory_list').should('be.visible');
  });

  it('shows error for wrong username', () => {
    loginAs('Lucas');
    cy.get('h3[data-test="error"]').should('be.visible').and(
      'contain.text',
      'Epic sadface: Username and password do not match any user in this service'
    );
    cy.url().should('not.include', '/inventory.html');
  });

  it('Add to cart button adds items to cart', () => {
    loginAs('standard_user');
    cy.url().should('include', '/inventory.html');
    cy.get('.inventory_list').should('be.visible');
    cy.get('#add-to-cart-sauce-labs-backpack').click();
    cy.get('.shopping_cart_badge').should('have.text', '1');
    cy.get('#add-to-cart-sauce-labs-bike-light').click();
    cy.get('.shopping_cart_badge').should('have.text', '2');
  });
});
