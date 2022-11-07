describe("My first test suite",function(){
    it('my first test',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        
        cy.get('select').select('option1').should('have.value','option1')
    })
})