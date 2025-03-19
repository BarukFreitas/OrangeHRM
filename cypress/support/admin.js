Cypress.Commands.add('clickAdmin', () =>{
    cy.window().should('have.property', 'document').and('have.property', 'readyState', 'complete');
    cy.wait(2000)
    cy.get('li.oxd-main-menu-item-wrapper:nth-child(1) > a:nth-child(1)').click()
});

Cypress.Commands.add('clickAddAdmin', () =>{
    cy.window().should('have.property', 'document').and('have.property', 'readyState', 'complete');
    cy.get('button.oxd-button--secondary:nth-child(1)').click()
});

Cypress.Commands.add('clickSelectRole', () =>{
    cy.get('div.oxd-form-row:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)').click()
});

Cypress.Commands.add('clickSelectESS', () =>{
    cy.get('div.oxd-select-option:nth-child(2)').click()
});

Cypress.Commands.add('clickSelectAdmin', () =>{
    cy.get('div.oxd-select-option:nth-child(3)').click()
});

Cypress.Commands.add('typeEmployeeName', (employeeName) =>{
    cy.get('.oxd-autocomplete-text-input > input:nth-child(2)').type(employeeName)
});

Cypress.Commands.add('clickStatus', () =>{
    cy.get('div.oxd-grid-item:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)').click()
});

Cypress.Commands.add('clickSelectEnabled', () =>{
    cy.get('div.oxd-select-option:nth-child(2)').click()
});

Cypress.Commands.add('typeUsernameForm', (username) =>{
    cy.get('div.oxd-grid-item:nth-child(4) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)').type(username)
});

Cypress.Commands.add('typePasswordForm', (password) =>{
    cy.get('.user-password-cell > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)').type(password)
});

Cypress.Commands.add('typeConfirmPasswordForm', (password) =>{
    cy.get('div.oxd-form-row:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)').type(password)
});

Cypress.Commands.add('clickSave', () =>{
    cy.get('button.oxd-button:nth-child(3)').click()
});