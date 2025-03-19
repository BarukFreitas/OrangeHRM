describe('Cadastrar empregado', ()=>{
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.typeLogin('Admin')
        cy.typePassword('admin123')
        cy.clickLogin()
    });
    
    it('Deve cadastrar um empregado com sucesso, depois apagar', () => {
        cy.clickPim()
        cy.clickAddPim()
        cy.typeFirstName('jose')
        cy.typeMiddleName('da')
        cy.typeLastName('silva')
        cy.clickLoginSwitch()
        cy.typeFormUsername('jose da silva')
        cy.typeFormPassword('senha123')
        cy.typeConfirmFormPassword('senha123')
        cy.clickSaveForm()
        cy.readSaveSuccess()  
        cy.wait(5000)  

        cy.clickAdmin()
        cy.typeUsernameSearch('jose da silva')
        cy.clickSearch()
        cy.clickDeleteUser()
        cy.clickConfirmDelete()
        cy.readDeleteSuccess()
    });

})