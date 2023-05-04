beforeEach(() => {
  cy.viewport('macbook-15')
  cy.visit('https://todo-app-for-cyclope.netlify.app')
})

afterEach(() => {
  cy.clearLocalStorage()
})

describe('big elements', () => {

  it('find h1', () => {
    cy.get('h1')
    .invoke('text')
    .should('have.length.gt', 0)
  })

  it('click the light', () => {
    cy.get('#theme-switcher')
    .should('be.visible')
    .click()
    cy.get('body')
    .should('not.have.class','light')
    cy.get('#theme-switcher')
    .should('be.visible')
    .click()
    cy.get('body')
    .should('have.class','light')
    })

    it('find the footer', () => {
    cy.get('body')
    .find('footer')
    .find('p')
    .should('have.text', 'Drag and drop to reorder list')
    })
   })

   describe('Todo list', () => {

    it('create a new todo', () => {
      cy.get('#add-btn')
      .click()
      .type('One')
      .click()
      cy.get('ul')
      .find('[data-cy="todo"]')
      .should('be.visible')
      .should('have.length.gt', 0)
    })
  
    it('clear completed todo', () => {
      cy.get('#add-btn')
      .click()
      .type('One')
      .click()
      .type('Two')
      .click()
      .type('Three')
      .click()
      cy.get('#active')
      .should('be.visible')
      .click()
      cy.get(':nth-child(1) > .cb-container > .cb-input')
      .check()
      cy.get('#completed')
      .click()
      cy.get('.checked > .cb-container > .cb-input')
      .should('be.checked')
      cy.get('#clear-completed')
      .click()
      


      

    })
  
  
  })