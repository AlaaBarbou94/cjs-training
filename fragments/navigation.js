const { I, mainPage, aboutPage, responsibleGamingPage,termsAndConditionsPage } = inject();

module.exports = {

    // locators

    // methods

    goToMainPage() {
        I.amOnPage(mainPage.mainPageUrl);
    }
}
