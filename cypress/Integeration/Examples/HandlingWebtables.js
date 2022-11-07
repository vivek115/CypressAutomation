
describe("My first test suite", function () {
    it('my first test', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {

            const text = $e1.text()
            // includes which will help you to find sub text
            if (text.includes('Python')) {
                cy.get('tr td:nth-child(2)').eq(index).next().then(function (price) {
                    const pricetext = price.text()
                    expect(pricetext).to.equal('25')
                })
            }
        })
    })
})
