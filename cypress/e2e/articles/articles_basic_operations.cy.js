import { users } from "../../support/consts/users"; 
import { articleGenerator } from "../../support/consts/article_generator"; 
import { pages } from "../../support/consts/pages";
const generatedArticle = articleGenerator();
const usersList = [users.admin, users.author];

usersList.forEach(user => {
    const { email } = user;
    describe(`Login as ${user.roleName}. Test operations on articles - Add, Delete, Details`, () => {
        before(() => {
            cy.clearLocalData();
            cy.login({ user });
        });

        it('Add article', () => {
            console.log(pages.articles)
            cy.navigateToPage({page: pages.articles });
            cy.createNewArticle({ generatedArticle });
        })

        it('Check details', () => {
            cy.checkArticleDetails({ generatedArticle, authorEmail: email }); 
        });

        it('Delete article', () => {
            cy.navigateToPage({page: pages.articles });
            cy.deleteArticle({ generatedArticle, authorEmail: email });
        })

        after('Logout user', () => {
            cy.logout();
        });
    });
});
