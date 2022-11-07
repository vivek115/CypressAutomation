class HomePage {

getEditbox(){
    return cy.get('input[name="name"]:nth-child(2)')
}
getTwowayDatabinding(){
    return cy.get(':nth-child(4) > .ng-untouched')
}
getGender(){
    return cy.get('select')
}
getEnterpreneaur(){
    return cy.get('#inlineRadio3')
}
getShoptab(){
   return cy.get(':nth-child(2) > .nav-link')
}
}
// Class will be avaialble for the all other file 
export default HomePage;