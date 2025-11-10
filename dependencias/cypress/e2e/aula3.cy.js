///<reference = cypress>

describe('Testes de UI no the-internet', () => {

  it('Teste de login feito com sucesso', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get('a[href="/login"]').click()
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('button[type="submit"]').click()
    cy.get('.flash.success').should('contain.text', 'You logged into a secure area!')
  })

  it('Teste de login incorreto', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('Lucas')
    cy.get('#password').type('123')
    cy.get('button[type="submit"]').click()
    cy.get('.flash.error').should('contain.text', 'Your username is invalid!')
  })

  it('Seleção de opções em uma lista suspensa', () => {
    cy.visit('https://the-internet.herokuapp.com/dropdown')
    cy.get('#dropdown').select('Option 1').should('have.value', '1')
    cy.get('#dropdown').select('Option 2').should('have.value', '2')
  })

  it('Interação com caixas de seleção', () => {
    cy.visit('https://the-internet.herokuapp.com/checkboxes')
    cy.get('input[type="checkbox"]').last().should('be.checked')
    cy.get('input[type="checkbox"]').last().uncheck().should('not.be.checked')
    cy.get('input[type="checkbox"]').first().should('not.be.checked')
    cy.get('input[type="checkbox"]').first().check().should('be.checked')
  })

  it('Adição de elementos dinâmicos', () => {
    cy.visit('https://the-internet.herokuapp.com/add_remove_elements/')
    cy.get('button[onclick="addElement()"]').click();
    cy.get('button[onclick="deleteElement()"]').should('be.visible')
    cy.get('button[onclick="deleteElement()"]').should('have.length', 1)
    cy.get('button[onclick="addElement()"]').click();
    cy.get('button[onclick="deleteElement()"]').should('have.length', 2)
  })

  it('Remoção de elementos dinâmicos', () => {
    cy.visit('https://the-internet.herokuapp.com/add_remove_elements/')
    cy.get('button[onclick="addElement()"]').click()
    cy.get('button[onclick="addElement()"]').click()
    cy.get('button[onclick="deleteElement()"]').should('have.length', 2)
    cy.get('button[onclick="deleteElement()"]').first().click()
    cy.get('button[onclick="deleteElement()"]').should('have.length', 1)
    cy.get('button[onclick="deleteElement()"]').click()
    cy.get('button[onclick="deleteElement()"]').should('have.length', 0)
    cy.get('button[onclick="deleteElement()"]').should('not.exist')
  });
})
