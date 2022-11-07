before(function () {
    // runs once before all the tests  in block
    cy.fixture('example').then(function (data) {
        this.data = data
    })
})