import { faker } from "@faker-js/faker";
import { errorMessages } from "../../support/consts/declarations";
import { errorSelectors, loginSelectors } from "../../support/consts/selectors";
import { urls } from "../../support/consts/urls";

const wrongCredentials = {
  email: faker.internet.email(),
  password: faker.internet.password()
}

describe(`Login using incorrect credentials and check if user doesn't have access to restricted pages`, () => {
    before(() => {
        cy.clearLocalData();
        cy.visit(urls.indentityAccountLogin);
    });

    it('Empty email and password fields', () => {
      cy.get(loginSelectors.loginSubmitButton).should('be.visible').click();

      cy.get(loginSelectors.emailInput).should('be.visible').invoke('attr', 'class').should('eq', errorSelectors.inputValidationErrorClassValue);
      cy.get(errorSelectors.fieldValidationError).contains(errorMessages.emptyEmail).should('be.visible');
      cy.get(loginSelectors.passwordInput).should('be.visible').invoke('attr', 'class').should('eq', errorSelectors.inputValidationErrorClassValue);
      cy.get(errorSelectors.fieldValidationError).contains(errorMessages.emptyPassword).should('be.visible');
    });

    it('Wrong email and password', () => {
      cy.get(loginSelectors.emailInput).should('be.visible').type(wrongCredentials.email);
      cy.get(loginSelectors.passwordInput).should('be.visible').type(wrongCredentials.password);
      cy.get(loginSelectors.loginSubmitButton).should('be.visible').click();
      
      cy.get(errorSelectors.validationSummaryErrors).contains(errorMessages.wrongCredentials).should('be.visible');
    });
});
