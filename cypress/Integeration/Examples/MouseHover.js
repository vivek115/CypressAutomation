describe("My first test suite",function(){
    it('my first test',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
       // cy.get('div.mouse-hover-content').invoke('show')
       // two way to perform mouse hover by jquery show method or you can do through cypress
       // by using {force:true} concept
        cy.contains('Top').click({force:true})
        cy.url().should('include','top')
    })
})