describe('Login de usuário', () =>{

    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    });
    
    it('Deve fazer login de usuário com sucesso', () => {
        cy.typeLogin('Admin')
        cy.typePassword('admin123')
        cy.clickLogin()
    });

    it('Tentar fazer login de usuário com usuário inválido', () => {
        cy.typeLogin('administrador')
        cy.typePassword('admin123')
        cy.clickLogin()
        cy.loginWarning();
    });

    it('Tentar fazer login de usuário com senha inválida', () => {
        cy.typeLogin('Admin')
        cy.typePassword('senha123')
        cy.clickLogin()
        cy.loginWarning();
    });
})