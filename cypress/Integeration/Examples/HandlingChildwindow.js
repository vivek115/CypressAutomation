describe("My first test suite",function(){
    it('my first test',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#opentab').then(function(element){
            const url =element.prop('href')
            cy.log(url)
            cy.visit(url)
        })
    })
})