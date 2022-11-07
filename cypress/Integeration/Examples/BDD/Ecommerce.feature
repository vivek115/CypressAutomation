Feature: End to end ecommerce validation
@Regression
    Scenario: Ecommerce product delivery
        Given I open Ecommerce page
        When I add item to cart
        And validate the total prices
        Then select the country  and submit
        And verify Thankyou
@smoke
    Scenario: Filling the form to shop
        Given I open Ecommerce page
        When I fill the form details
        | name | gender |
        |vjoshi | Male |
        Then validate the forms behaviour
        And select the shop page