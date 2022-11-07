describe("My first test suite",function(){
    it('my first test',function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('input.search-keyword').type('ca')
        cy.get('.product:visible').should('have.length',4)

        //Alias to give the name to the product
        cy.get('.products').as('productlocator')
        //multiple locator put it in as single variable
        
        cy.get('@productlocator').find('.product').should('have.length',4)
        cy.get('@productlocator').find('.product').eq(2).contains('ADD TO CART').click()

        // Important logic 
        cy.get('@productlocator').find('.product').each(($e1,index,$list) => {
        
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

