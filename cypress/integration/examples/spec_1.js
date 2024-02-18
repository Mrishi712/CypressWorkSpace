describe('Cypress Suite 01', () => {
    it('Navigate to Home page', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        cy.get('.search-keyword').type("ca")


        //we can sort out the visible test using :visible 
        cy.get('.product:visible').should("have.length", 4)
        //paraent child chaining
        cy.get('.products').find('.product').should("have.length", 4)
        cy.get('.products').find('.product').then(ele => {
            cy.log("Length", ele.length)
        })

        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()

        cy.get('.products').find('.product').each(($el, index, $list) => {
            let vegName=$el.find('h4.product-name').text()
            cy.log("Veg Name",vegName)
            if(vegName.includes('Cashews')){
                cy.wrap($el).find('button').click()
            }
        })
        
        console.log("End");
    })
})