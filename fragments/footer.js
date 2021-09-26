const { I, navigationFragment, aboutPage, responsibleGamingPage ,termsAndConditionsPage} = inject();

module.exports = {

    // locators

    // methods

    async goToFooterLink(dataTable, state) {
        let i = 0;
        while (dataTable.parse().hashes()[i] != undefined) {
            state['expectedDescription' + i] = dataTable.parse().hashes()[i].expectedDescription;
            let buttonLocatorFromGherkin = eval(`${dataTable.parse().hashes()[i].linkName}Page.${dataTable.parse().hashes()[i].linkName}Button`);
            let pageContentLocatorFromGherkin = eval(`${dataTable.parse().hashes()[i].linkName}Page.${dataTable.parse().hashes()[i].linkName}PageContent`);
            I.scrollTo(buttonLocatorFromGherkin);
            I.click(dataTable.parse().hashes()[i].button);
            I.waitForElement(pageContentLocatorFromGherkin, 10);
            state['currentDescription' + i] = await I.grabTextFrom(pageContentLocatorFromGherkin);
            navigationFragment.goToMainPage();
            i++
        }
    },

    validateContent(state) {
        let i = 0;
        while (state['currentDescription' + i] != undefined) {
            I.assertContain(state['currentDescription' + i], state['expectedDescription' + i]);
            i++
        }
    }
}
