describe('Cypress Suite 01', () => {
    it('Navigate to Home page', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        cy.get('.search-keyword').type("ca")

        //we can sort out the visible test using :visible 
        cy.get('.product:visible').should("have.length",4)
    })
})