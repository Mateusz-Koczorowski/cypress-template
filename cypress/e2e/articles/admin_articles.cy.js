import { users } from "../../support/consts/users";
import { menuSelectors, buttons, article, generalSelectors } from "../../support/consts/selectors";
import { pages } from "../../support/consts/pages";
import { buttonText } from "../../support/consts/declarations";   
import { articleGenerator } from "../../support/consts/article_generator"; 
const generatedArticle = articleGenerator();
const {title, freeContent, premiumContent, image, altText} = generatedArticle;

    describe(`Login as admin. Test all operations on articles - Add, Delete, Edit, Details`, () => {
        before(() => {
            cy.clearLocalData();
            cy.login({ user: users.admin});
        });

        it('Add article', () => {
            cy.get(menuSelectors.menuLink(pages.articles.url))
                .should('be.visible')
                .click();
            cy.url().should('include', pages.articles.url)

            cy.get(generalSelectors.h1).contains(pages.articles.title);

            cy.get(buttons.buttonAdd).contains(buttonText.createNew).should('be.visible').click();
            cy.url().should('contain', pages.articlesCreate.url);

            cy.get(article.titleInput).should('exist').type(title);
            cy.get(article.freeContentInput).should('exist').type(freeContent);
            cy.get(article.premiumContentInput).should('exist').type(premiumContent);
            
            
        })

        after('Logout user', () => {
            cy.logout();
        });
    });
