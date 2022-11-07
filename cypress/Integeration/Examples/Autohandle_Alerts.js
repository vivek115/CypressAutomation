
describe("My first test suite", function () {
    it('my first test', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#alertbtn').click()
        cy.get('input[value="Confirm"]').click()
        //window:alert
        // we have cypress event "window:alert"
        //Cypress have the right to fire window alert and capturing
        cy.on('window:alert', (str) => {
            //mocha
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.on('window:confirm', (str) => {
            //mocha
    expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
    })
})