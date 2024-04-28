import { urls } from "./urls"
import { pagesTitles, menuPagesTitles } from "./declarations"

export const pages = {
    articles: {
        url: urls.articles,
        title: pagesTitles.articles,
        menuTitle: menuPagesTitles.articles,
    },
    articlesCreate: {
        url: urls.articlesCreate,
        title: pagesTitles.articlesCreate,
    },
    articlesEdit: {
        url: urls.articlesEdit,
        title: pagesTitles.articlesEdit,
    },
    articlesDetails: {
        url: urls.articlesDetails,
        title: pagesTitles.articlesDetails,
    },
    articlesDelete: {
        url: urls.articlesDelete,
        title: pagesTitles.articlesDelete,
    },
    subscriptions: {
        url: urls.subscriptions,
        title: pagesTitles.subscriptions,
        menuTitle: menuPagesTitles.subscriptions,
    },
    subscriptionsCreate: {
        url: urls.subscriptionsCreate,
        title: pagesTitles.subscriptionsCreate,
    },
    subscriptionsEdit: {
        url: urls.subscriptionsEdit,
        title: pagesTitles.subscriptionsEdit,
    },
    subscriptionsDetails: {
        url: urls.subscriptionsDetails,
        title: pagesTitles.subscriptionsDetails,
    },
    subscriptionsDelete: {
        url: urls.subscriptionsDelete,
        title: pagesTitles.subscriptionsDelete,
    },
    subscriptionsSelectSubsrciptionDuration: {
        url: urls.subscriptionsSelectSubsrciptionDuration,
        title: pagesTitles.subscriptionsSelectSubsrciptionDuration,
        menuTitle: menuPagesTitles.buySubscription,
    },
    subscriptionsConfirmPayment: {
        url: urls.subscriptionsConfirmPayment,
        title: pagesTitles.subscriptionsConfirmPayment,
    },
    subscriptionsPaymentSuccess: {
        url: urls.subscriptionsPaymentSuccess,
        title: pagesTitles.subscriptionsPaymentSuccess,
    },
    subscriptionsUserSubscriptions: {
        url: urls.subscriptionsUserSubscriptions,
        title: pagesTitles.subscriptionsUserSubscriptions,
        menuTitle: menuPagesTitles.yourSubscriptions,
    },
    users: {
        url: urls.users,
        title: pagesTitles.users,
        menuTitle: menuPagesTitles.users,
    },
    usersCreate: {
        url: urls.usersCreate,
        title: pagesTitles.usersCreate,
    },
    usersEdit: {
        url: urls.usersEdit,
        title: pagesTitles.usersEdit,
    },
    usersDetails: {
        url: urls.usersDetails,
        title: pagesTitles.usersDetails,
    },
}