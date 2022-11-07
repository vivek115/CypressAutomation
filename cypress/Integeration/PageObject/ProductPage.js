class ProductPage {

    getcheckoutButton(){
         return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }
    }
    // Class will be avaialble for the all other file 
    export default ProductPage;