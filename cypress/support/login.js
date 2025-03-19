Cypress.Commands.add('typeLogin', (login) =>{
    cy.get('div.oxd-form-row:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)').type(login)
});

Cypress.Commands.add('typePassword', (password) =>{
    cy.get('div.oxd-form-row:nth-child(3) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)').type(password)
});

Cypress.Commands.add('clickLogin', () =>{
    cy.get('.oxd-button').click()
});

Cypress.Commands.add('loginWarning', () => {
    cy.get('.oxd-alert-content-text').should('be.visible');
});
