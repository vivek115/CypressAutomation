import HomePage from '../PageObject/HomePage'
import ProductPage from '../PageObject/ProductPage'
describe("My first test suite", function () {

    before(function () {
        // runs once before all the tests  in block
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })
    it('my first test', function () {
        const homePage = new HomePage;
        const productPage = new ProductPage;
        //cy.visit(cypress.env(url))
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        //cy.get("input[name='name']").eq(0).type(this.data.name)
        // cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        homePage.getEditbox().type(this.data.name)
        homePage.getGender().select('Male')
        cy.get(':nth-child(4) > .ng-untouched').should('have.value', this.data.name)
        cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength', '2')
        homePage.getEnterpreneaur().should('be.disabled')
        // pause 
        //cy.pause()
        homePage.getShoptab().click()
        // cy.get('h4.card-title').each(($element,index,$list)=>{
        //     if($element.text().includes('Blackberry')){
        //         cy.get('button.btn.btn-info').eq(index).click()
        //     }
        // })
        // or way by using custom command
        // cy.selectproduct('Blackberry')
        // cy.selectproduct('Nokia Edge')
        //this.data.productname
        this.data.productName.forEach(function (element, index, array) {
            cy.selectproduct(element)
        })
        productPage.getcheckoutButton().click()
        var sum =0;
        cy.get('tr td:nth-child(4) strong').each(($element,index)=>{
        const amount =$element.text()
        var result =amount.split(" ")
        result =result[1].trim()
        sum = Number(sum) +Number(result)
        })
        .then(function(){cy.log(sum)
        })
        cy.get('h3 strong').then(function(element){
            const amount =element.text()
            const result = amount.split(" ")
           var total = result[1].trim()
           expect(Number(total)).to.equal(sum)
        })
        cy.contains('Checkout').click()
        cy.get('#country').type('india')
        //cy.get('.suggestions > ul > li > a').click()
        cy.contains('India').click()
        cy.get("input[type='submit']").click()
        //cy.get("input[type='checkbox']").click()
        cy.get('.checkbox').click()
        Cypress.config('defaultCommandTimeout',8000)
        // cy.get('.alert').
        // should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
        cy.get('.alert').then(function($element){
              const actual = $element.text()
            expect(actual.includes("Success")).to.be.true
        })
    })
})