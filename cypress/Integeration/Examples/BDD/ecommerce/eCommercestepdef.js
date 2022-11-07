import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from '../../../../PageObject/HomePage'
import ProductPage from '../../../../PageObject/ProductPage'
const homePage = new HomePage;
const productPage = new ProductPage;
Given('I open Ecommerce page', function () {
    cy.visit(cypress.env('url'))
})
When('I add item to cart', function () {
    homePage.getShoptab().click()
    this.data.productName.forEach(function (element, index, array) {
        cy.selectproduct(element)
    })
    productPage.getcheckoutButton().click()
})

And('validate the total prices', () => {
    var sum = 0;
    cy.get('tr td:nth-child(4) strong').each(($element, index) => {
        const amount = $element.text()
        var result = amount.split(" ")
        result = result[1].trim()
        sum = Number(sum) + Number(result)
    })
        .then(function () {
            cy.log(sum)
        })
    cy.get('h3 strong').then(function (element) {
        const amount = element.text()
        const result = amount.split(" ")
        var total = result[1].trim()
        expect(Number(total)).to.equal(sum)
    })
    Then('select the country  and submit', () => {
        cy.contains('Checkout').click()
        cy.get('#country').type('india')
        //cy.get('.suggestions > ul > li > a').click()
        cy.contains('India').click()
        cy.get("input[type='submit']").click()
        //cy.get("input[type='checkbox']").click()
        cy.get('.checkbox').click()
        And('verify Thankyou', () => {
            Cypress.config('defaultCommandTimeout', 8000)
            // cy.get('.alert').
            // should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
            cy.get('.alert').then(function ($element) {
                const actual = $element.text()
                expect(actual.includes("Success")).to.be.true
            })
        })
        When('I fill the form details', function (dataTable) {
            var name = dataTable.rawTable[1][0]
            // converting datatable into 2 dimensional array
            homePage.getEditbox().type(dataTable.rawTable[1][0])
            homePage.getGender().select(dataTable.rawTable[1][1])
        })
        Then('validate the forms behaviour', function () {
            homePage.getTwowayDatabinding().should('have.value', name)
            homePage.getEditbox().should('have.attr', 'minilength', '2')
        })
        And('select the shop page',function(){
            homePage.getEnterpreneaur().should('be.disabled')
            homePage.getShoptab().click()
        })
    })
})