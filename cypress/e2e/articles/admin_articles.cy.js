import { users } from "../../support/consts/users"; 
import { articleGenerator } from "../../support/consts/article_generator"; 
import { pages } from "../../support/consts/pages";
const generatedArticle = articleGenerator();

describe(`Login as admin. Test all operations on articles - Add, Delete, Details`, () => {
    before(() => {
        cy.clearLocalData();
        cy.login({ user: users.admin});
    });

    it('Add article', () => {
        console.log(pages.articles)
        cy.navigateToPage({page: pages.articles });
        cy.createNewArticle({ generatedArticle });
    })

    it('Check details', () => {
        cy.checkArticleDetails({ generatedArticle, authorEmail: users.admin.email }); 
    });

    it('Delete article', () => {
        cy.navigateToPage({page: pages.articles });
        cy.deleteArticle({ generatedArticle, authorEmail: users.admin.email });
    })

    after('Logout user', () => {
        cy.logout();
    });
});
