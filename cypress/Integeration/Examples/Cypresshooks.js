
describe("My first test suite",function(){

    before(function(){
// runs once before all the tests  in block
cy.fixture('example').then(function(data){
      this.data=data
})
    })

    it('my first test',function(){
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        cy.get("input[name='name']").eq(0).type(this.data.name)
        cy.get('select').select('Male')
    })
})