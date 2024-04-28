import { users } from "../../support/consts/users"; 
import { articleGenerator } from "../../support/consts/article_generator"; 
import { pages } from "../../support/consts/pages";

const generatedArticle = articleGenerator();

describe(`Login as ${users.admin.roleName}. Add new article and check if it is correctly displayed on home page`, { tags: ['ARTICLES'], }, () => {
  before(() => {
    cy.clearLocalData();
    cy.login({ user: users.admin });
    });

  it('Add article', () => {
    console.log(pages.articles)
    cy.navigateToPage({page: pages.articles });
    cy.createNewArticle({ generatedArticle });
  })

  it('Check details', () => {
    cy.visit('/')
    cy.checkHomePageArticle({ generatedArticle }); 
  });

  after('Logout user', () => {
    cy.logout();
  });
});
