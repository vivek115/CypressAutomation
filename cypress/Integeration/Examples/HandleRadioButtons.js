//<reference types="cypress"/>

describe("My first test suite",function(){
    it('my first test',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('input[value="radio2"]').click().should('be.checked')
    })
})