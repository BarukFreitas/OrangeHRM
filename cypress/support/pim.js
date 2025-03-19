Cypress.Commands.add('clickPim', () =>{
    cy.window().should('have.property', 'document').and('have.property', 'readyState', 'complete');
    cy.wait(2000)
    cy.get('li.oxd-main-menu-item-wrapper:nth-child(2) > a:nth-child(1)').click()
});

Cypress.Commands.add('clickAddPim', () =>{
    cy.wait(2000)
    cy.get('button.oxd-button--secondary:nth-child(1)').click()
});

Cypress.Commands.add('typeFirstName', (firstName) =>{
    cy.get('.orangehrm-firstname').type(firstName)
});

Cypress.Commands.add('typeMiddleName', (middleName) =>{
    cy.get('.orangehrm-middlename').type(middleName)
});

Cypress.Commands.add('typeLastName', (lastname) =>{
    cy.get('.orangehrm-lastname').type(lastname)
});

Cypress.Commands.add('clickLoginSwitch', () =>{
    cy.get('.oxd-switch-input').click()
    cy.wait(500)
});

Cypress.Commands.add('typeFormUsername', (username) =>{
    cy.get('div.oxd-form-row:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)').type(username)
});

Cypress.Commands.add('typeFormPassword', (password) =>{
    cy.get('.user-password-cell > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)').type(password)
});

Cypress.Commands.add('typeConfirmFormPassword', (password) =>{
    cy.get('div.oxd-form-row:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)').type(password)
});

Cypress.Commands.add('clickSaveForm', () =>{
    cy.get('button.oxd-button:nth-child(3)').click()
});

Cypress.Commands.add('readSaveSuccess', () =>{
    cy.get('.oxd-toast-content').should('be.visible')
});