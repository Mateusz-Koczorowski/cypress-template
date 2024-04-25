import { urls } from "./consts/urls";
import { loginSelectors, menuSelectors } from "./consts/selectors";

Cypress.Commands.add('clearLocalData', () => {
    cy.clearLocalStorage();
    cy.clearCookies();
});

Cypress.Commands.add('login', ({ user }) => {
    cy.visit(urls.indentityAccountLogin);
    cy.get(loginSelectors.emailInput).type(user.email);
    cy.get(loginSelectors.passwordInput).type(user.password);
    cy.get(loginSelectors.loginSubmitButton).click();
    cy.url().should('contain', '/');
    cy.get(menuSelectors.manage).should('be.visible').should('contain', `Hello ${user.email}!`);
});

Cypress.Commands.add('logout', () => {
    cy.get(menuSelectors.buttonTypeSubmit)
        .contains('Logout')
        .should('be.visible')
        .and('be.enabled')
        .click();
    cy.url().should('contain', '/');
    cy.get(menuSelectors.menuLink(urls.indentityAccountLogin)).should('be.visible').and('contain', 'Login');
    cy.get(menuSelectors.menuLink(urls.indentityAccountRegister)).should('be.visible').and('contain', 'Register');
});
