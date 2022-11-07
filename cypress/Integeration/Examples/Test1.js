// CYPRESS spec - Any test case in javascript called spec file
//Tp get auto suggestions write 
//<reference types="Cypress"/>

describe("My first test suite",function(){
    it('my first test',function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('input.search-keyword').type('ca')
        cy.get('.product:visible').should('have.length',4)

        //Parent child 
        cy.get('.products').find('.product').should('have.length',4)
        // to get 2nd one out of 4 we use eq
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

        // Important logic 
        cy.get('.products').find('.product').each(($e1,index,$list) => {
        
         const txt = $e1.find('h4.product-name').text()
       // includes which will help you to find sub text
         if(txt.includes('Cashews')){
         cy.wrap($e1).find('button').click()
            //$e1.contains('ADD TO CART').click()
         }
         cy.get('.brand').then(function(logoelement){
            cy.log(logoelement.text())
        })
        })

    })
})