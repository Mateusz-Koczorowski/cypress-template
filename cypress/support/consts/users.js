import { pages } from "./pages";

const credentials = Cypress.env('credentials');

export const users = {
    admin: {
        email: credentials.admin.email,
        password: credentials.admin.password,
        roleName: credentials.admin.roleName,
        permissions: [
            pages.articles, pages.subscriptions, pages.users, pages.subscriptionsUserSubscriptions
        ],
        firstName: credentials.admin.firstName,
        lastName: credentials.admin.lastName
    },
    author: {
        email: credentials.author.email,
        password: credentials.author.password,
        roleName: credentials.author.roleName,
        permissions: [
            pages.articles, pages.subscriptionsUserSubscriptions
        ],
        firstName: credentials.author.firstName,
        lastName: credentials.author.lastName
    },
    reader: {
        email: credentials.reader.email,
        password: credentials.reader.password,
        roleName: credentials.reader.roleName,
        permissions: [
            pages.subscriptionsUserSubscriptions
        ],
        firstName: credentials.reader.firstName,
        lastName: credentials.reader.lastName
    }
}
