/// <reference types="cypress" />
import example from '../fixtures/example.json'
//import * as example from '../fixtures/example.json';



describe('Revision de bandeja de entrada', () => {
    beforeEach(() => {
      cy.visit(example.url)
    })

    it('Bandeja de entrada en Yopmail', ()=>{
    
        cy.get('.tooltip.click').type(example.email)
        cy.get('#refreshbut').click()
        
        cy.contains(example.email).should('be.visible')
        cy.contains('.bname',example.email)
        cy.get('.bname').should('have.text', example.email)
        
       
        
          

    })
});