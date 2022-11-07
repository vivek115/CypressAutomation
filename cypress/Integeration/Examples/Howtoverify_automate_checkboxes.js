describe("My first test suite",function(){
    it('my first test',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        // be - behaviour of check box
        cy.get('#checkBoxOption1').check().should('be.checked').and
        ('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        // to check/select multiple check box
        // find the common locator for all the checkboxes
        cy.get('input[type="checkbox"]').check(['option2','option3'])
    })
})