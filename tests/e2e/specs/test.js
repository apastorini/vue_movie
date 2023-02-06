// https://docs.cypress.io/api/table-of-contents

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'FIND YOUR MOVIE')
  })
  it('Visits the app detail url /detail/tt14260080', () => {
    cy.visit('/detail/tt14260080')
    cy.contains('h1', 'Hello Charlie')
  })
  it('Visits the app detail url /detail/tt9454892', () => {
    cy.visit('/detail/tt9454892')
    cy.contains('h1', 'Hello Mini')
  })
  it('Visits the app 404 url /notfound', () => {
    cy.visit('/notfound')
    cy.contains('h1', '404 Page Not Found')
  })
  it('Visits the app any url /anytesturl', () => {
    cy.visit('/anytesturl')
    cy.contains('h1', '404 Page Not Found')
  })
})
