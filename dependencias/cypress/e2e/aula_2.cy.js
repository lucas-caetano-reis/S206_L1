///<reference = cypress>

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe("Testes da criação, registo e login", () => {
  it("Teste de criação de usuário com sucesso", () => {
    cy.visit("https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login")
    cy.get('.btn-link').click()
    cy.get('#firstName').type('Lucas')
    cy.get('#Text1').type('Lucas')
    cy.get('#username').type('Lucas')
    cy.get('#password').type('Lucas')
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should('have.text', 'Registration successful')
  })

  it("Teste de criação de usuário com falha", () => {
    cy.visit("https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login")
    cy.get('.btn-link').click()
    cy.get('#firstName').type('Lucas')
    cy.get('#Text1').type('Lucas')
    cy.get('#username').type('Lucas')
    cy.get('.btn-primary').should('be.disabled')
  })

  it("Teste de login de usuário com sucesso", () => {
    let infos = criarUser()
    cy.visit("https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login")
    cy.get('#username').type(infos[0])
    cy.get('#password').type(infos[1])
    cy.get('.btn-primary').click()
    cy.get('h1.ng-binding').should('contain.text', infos[0])
    cy.get('h1.ng-binding').should('have.text', 'Hi ' + infos[0] + '!')
  })

  it("Delete do usuário como sucesso", () => {
    let infos = criarUser()
    cy.login(infos[0], infos[1])
    cy.get('.ng-binding > a').click()
    cy.get('.btn').click()
    cy.login(infos[0], infos[1])
    cy.get('.ng-binding').should('have.text', 'Username or password is incorrect')
  })
})

function criarUser() {
  let hora = new Date().getHours().toString()
  let min = new Date().getMinutes().toString()
  let seg = new Date().getSeconds().toString()
  let id = hora + min + seg + "ID"
  let senha = hora + min + seg + "Senha"
  let infos = [id, senha]

  cy.visit("https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login")
  cy.get('.btn-link').click()
  cy.get('#firstName').type(id)
  cy.get('#Text1').type(id)
  cy.get('#username').type(id)
  cy.get('#password').type(senha)
  cy.get('.btn-primary').click()
  cy.get('.ng-binding').should('have.text', 'Registration successful')
  return infos
}