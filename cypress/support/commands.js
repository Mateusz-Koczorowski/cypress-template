import { urls } from "./consts/urls";
import { menuSelectors, buttons, article, generalSelectors, loginSelectors } from "./consts/selectors";
import { pages } from "./consts/pages";
import { buttonText } from "./consts/declarations";
import { getCurrentDate } from "./consts/currentDate";

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

Cypress.Commands.add('navigateToPage', ({ page }) => {
    const {url, menuTitle} = page;
    cy.get(menuSelectors.menuLink(url))
                .contains(menuTitle)
                .should('be.visible')
                .click();
    cy.url().should('include', url)
});

Cypress.Commands.add('createNewArticle', ({ generatedArticle }) => {
    const {title, freeContent, premiumContent, image, altText} = generatedArticle;

    cy.get(generalSelectors.h1).contains(pages.articles.title);

    cy.get(buttons.buttonAdd).contains(buttonText.createNew).should('be.visible').click();
    cy.url().should('contain', pages.articlesCreate.url);

    cy.get(article.titleInput).should('exist').type(title);
    cy.get(article.freeContentInput).should('exist').type(freeContent);
    cy.get(article.premiumContentInput).should('exist').type(premiumContent)


    cy.get(article.imageFileInput)
        .should('exist')
        .selectFile(image)
    
    cy.get(article.altTextInput).should('exist').type(altText);
    
    cy.get(buttons.buttonSave).should('be.visible').click();

    cy.navigateToPage({page: pages.articles });
    
    cy.get(article.articleRow).should('exist').as('articleRow');

    cy.get('@articleRow').find(article.articleTitle).contains(title).should('be.visible');
    cy.get('@articleRow').find(article.articleFreeContent).contains(freeContent.substring(0,100)).should('be.visible');
    cy.get('@articleRow').find(article.articlePremiumContent).contains(premiumContent.substring(0,100)).should('be.visible');
    cy.get('@articleRow').find(article.articleAltText).should('be.visible');
    cy.get('@articleRow').find(article.articleImage).should('be.visible'); 
    cy.get('@articleRow').find(article.articleReleaseDate).contains(getCurrentDate()).should('be.visible');
});

Cypress.Commands.add('checkArticleDetails', ({ generatedArticle, authorEmail }) => {
    const {title, freeContent, premiumContent} = generatedArticle;    

    cy.get(article.articleTitle)
        .contains(title)
        .should('be.visible')
        .parent(article.articleRow)
        .find(article.operationsTd)
        .find(buttons.buttonDetails)
        .should('be.visible')
        .click();

    cy.url().should('contain', pages.articlesDetails.url);
    cy.get('h1').should('contain', pages.articlesDetails.title);

    cy.get(article.articleTitle).should('be.visible').and('contain', title);
    cy.get(article.articleFreeContent).should('be.visible').and('contain', freeContent);
    cy.get(article.articlePremiumContent).should('be.visible').and('contain', premiumContent);
    cy.get(article.articleAuthorEmail).should('be.visible').and('contain', authorEmail)
    cy.get(article.articleImage).should('be.visible');
    cy.get(article.articleReleaseDate).should('be.visible').and('contain', getCurrentDate());
});

Cypress.Commands.add('deleteArticle', ({ generatedArticle, authorEmail }) => {
    const {title, freeContent, premiumContent, } = generatedArticle;    

    cy.get(article.articleTitle)
        .contains(title)
        .should('be.visible')
        .parent(article.articleRow)
        .find(article.operationsTd)
        .find(buttons.buttonDelete)
        .should('be.visible')
        .click();

    cy.url().should('contain', pages.articlesDelete.url);
    cy.get('h1').should('contain', pages.articlesDelete.title);

    cy.get(article.articleTitle).should('be.visible').and('contain', title);
    cy.get(article.articleFreeContent).should('be.visible').and('contain', freeContent);
    cy.get(article.articlePremiumContent).should('be.visible').and('contain', premiumContent);
    cy.get(article.articleAuthorEmail).should('be.visible').and('contain', authorEmail)
    cy.get(article.articleReleaseDate).should('be.visible').and('contain', getCurrentDate());

    cy.get(buttons.buttonDelete).should('be.visible').click();

    cy.url().should('contain', pages.articles.url)
});

Cypress.Commands.add('checkHomePageArticle', ({ generatedArticle }) => {
    const {title, premiumContent, freeContent} = generatedArticle;

    cy.get(article.articleCard).should('exist').as('articleCard');

    cy.get('@articleCard').find(article.articleReleaseDate).contains(getCurrentDate()).should('be.visible');
    cy.get('@articleCard').find(article.articleTitle).contains(title).should('be.visible').click();

    cy.url().should('contain', pages.articlesDetails.url);
    cy.get(article.articleTitle).should('be.visible').and('contain', title);
    cy.get(article.articleFreeContent).should('be.visible').and('contain', freeContent);
    cy.get(article.articlePremiumContent).should('be.visible').and('contain', premiumContent);
    cy.get(article.articleImage).should('be.visible');
    cy.get(article.articleReleaseDate).should('be.visible').and('contain', getCurrentDate());
});