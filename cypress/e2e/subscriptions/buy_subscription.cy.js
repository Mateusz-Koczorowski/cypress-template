import { users } from "../../support/consts/users";
import { pages } from "../../support/consts/pages";
import { subscriptionSelectos, generalSelectors, buttons, menuSelectors } from "../../support/consts/selectors";
import { generateStartDate, generateEndDate, parseDateToDDMMYYYY } from "../../support/consts/generateDate";
import { buttonText } from "../../support/consts/declarations";
import { faker } from "@faker-js/faker";

const subscriptionDuration = faker.number.int({ min: 1, max: 50 });
const startDate = generateStartDate();
const endDate = generateEndDate(subscriptionDuration);

describe('As a user with READER role, buy new subscription', { tags: ['SUBSCRIPTIONS'], }, () => {
    before(() => {
        cy.clearLocalData();
        cy.login({ user: users.reader });
    });

    it('Buy new subscription', () => {
      cy.navigateToPage({ page: pages.subscriptionsSelectSubsrciptionDuration });

      cy.get(generalSelectors.h2).contains(pages.subscriptionsSelectSubsrciptionDuration.title).should('be.visible');

      cy.get(subscriptionSelectos.startDateinput).should('exist').type(startDate);
      cy.get(subscriptionSelectos.endDateInput).should('exist').type(endDate);
      cy.get(menuSelectors.buttonTypeSubmit).contains(buttonText.placeOrder).should('be.visible').click();

      cy.url().should('include', pages.subscriptionsConfirmPayment.url);
      cy.get(generalSelectors.h2).contains(pages.subscriptionsConfirmPayment.title).should('be.visible');
      cy.get(subscriptionSelectos.startDate).contains(parseDateToDDMMYYYY(startDate)).should('be.visible');
      cy.get(subscriptionSelectos.endDate).contains(parseDateToDDMMYYYY(endDate)).should('be.visible');
      cy.get(subscriptionSelectos.price).should('be.visible').and('contain', subscriptionDuration-1);
      cy.get(menuSelectors.buttonTypeSubmit).contains(buttonText.confirmAndPay).should('be.visible').click();

      cy.url().should('include', pages.subscriptionsPaymentSuccess.url);
      cy.get(generalSelectors.h2).contains(pages.subscriptionsPaymentSuccess.title).should('be.visible');
    });

    after('Logout user', () => {
        cy.logout();
    });
});