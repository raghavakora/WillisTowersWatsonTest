describe('Willis Tower Watson Assessment', () => {
    it('should display filtered search results', () => {
        cy.clearCookies();
        cy.visit('/ICT');

        var overlay = cy.get('.truste_box_overlay_inner', { timeout: 9000 });
        overlay.should('be.visible');
        //Accepting the site cookies
        cy.get('[id^="pop-frame"]').then($iframe => {
            const iframe = $iframe.contents().find('body');
            cy.wrap(iframe).find('a.call').click();
        });
        //setting the country selector to US
        var selectorElement = cy.get('[aria-controls="country-selector"] strong');
        var isSelected = selectorElement.first().then($selectorElement1 => {
            return $selectorElement1.text() == 'US';
        });
        if (isSelected) {
            cy.get('[aria-controls="country-selector"] strong').first().click();
            cy.contains('Americas').click();
            cy.get('[data-eventlabel="Country: United States  | Click Text: English"]').click();
        }
        //Performing the Search
        cy.get('.site-nav__btn--search-menu').click();
        cy.get('[aria-label="Search box"]')
            .type('IFRS 17')
            .type('{enter}');
        //sorting the search results by Date
        cy.get('[data-caption="Date"]').then($element => {
            var isDateSelected = $element.attr('class');
            if (!isDateSelected.includes('selected')) {
                $element.click();
            }
        });
        cy.wait(1000);
        //Filtering the search results by Ariticles
        var articleSelector = cy.get('[data-value="Article"]')
        articleSelector.click();
        cy.get('.coveo-facet-value.coveo-selected').should('be.visible');
        cy.wait(2000);
        /* Validating each article in the list displays a link that 
        starts with “https://www.willistowerswatson.com/en-US/” */
        cy.get('.CoveoFieldValue.wtw-listing-result-uri').each($section => {
            expect($section.text()).to.contain('https://www.willistowerswatson.com/en-US/');
        });
    });
});