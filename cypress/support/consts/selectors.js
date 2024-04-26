export const loginSelectors = {
    emailInput: '[id="Input_Email"]',
    passwordInput: '[id="Input_Password"]',
    loginSubmitButton: '[id="login-submit"]',
};

export const menuSelectors = {
    manage: '[title="Manage"]',
    menuLink: (value) => `[href="${value}"]`,
    buttonTypeSubmit: 'button[type="submit"]',
}

export const generalSelectors = {
    h1: 'h1',
};

export const buttons = {
    buttonEdit: '[data-testid="button-edit"]',
    buttonDetails: '[data-testid="button-details"]',
    buttonDelete: '[data-testid="button-delete"]',
    buttonAdd: '[data-testid="button-add"]',
    buttonSave: '[data-testid="button-save]',
}

export const article = {
    pageTitle: '[data-testid="pageTitle"]',
    titleInput: '[id="Title"]',
    freeContentInput: '[id="FreeContent"]',
    premiumContentInput: '[id="PremiumContent"]',
    imageFileInput: '[id=ImageFile]',
    altTextInput: '[id="AltText]',
}