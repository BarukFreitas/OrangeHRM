describe('Cadastro de novo empregado', () =>{

    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.typeLogin('Admin')
        cy.typePassword('admin123')
        cy.clickLogin()
    });
    
    it('Deve cadastrar novo empregado com sucesso', () => {
        cy.clickAdmin()
        cy.clickAddAdmin()
        cy.wait(1000)
        cy.clickSelectRole()
        cy.clickSelectAdmin()
        cy.typeEmployeeName('jose da silva')
        cy.clickStatus()
        cy.clickSelectEnabled()
        cy.typeUsernameForm('jose silva')
        cy.typePasswordForm('senha123')
        cy.typeConfirmPasswordForm('senha123')
        cy.clickSave()
    });
})