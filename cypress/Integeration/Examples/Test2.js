describe("My first test suite",function(){
    it('my first test',function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
cy.get('.brand').then(function(logoelement){
    cy.log(logoelement.text())
})
    })
})
