describe("My first test suite",function(){
    it('my first test',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#autocomplete').type('ira')
        cy.get('.ui-menu-item div').each(($element,index,$listofarray)=>{
       if($element.text()=="Iraq"){
        $element.click()
       }
        })
        cy.get('#autocomplete').should('have.value','Iraq')
    })
})