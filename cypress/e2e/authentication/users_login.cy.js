import { users } from "../../support/consts/users";
import { menuSelectors } from "../../support/consts/selectors";

Object.entries(users).forEach(([userName, userData]) => {
    describe(`Login as ${userName}. Check if user has access to proper pages`, { tags: ['AUTH'], }, () => {
        before(() => {
            cy.clearLocalData();
            cy.login({ user: userData});
        });

        it('Check if user has access to proper pages', () => {
            userData.permissions.forEach((page) => {
              cy.get(menuSelectors.menuLink(page.url)).should('be.visible').and('contain', page.menuTitle);
            });
        });

        after('Logout user', () => {
            cy.logout();
        });
    });
});
