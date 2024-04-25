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