
const customer = Cypress.env("Customer")
const agent = Cypress.env("Agent")
import { loginPage } from '../fixtures/constants'
describe('Login Test suite', function() {
     
    beforeEach('Go to apllication and click on coocke', function(){
       cy.visit('/');
       cy.get('#cookie_stop').click();
     });

    it('Navigate to login page', function(){
       cy.get('.theme-btn-transparent').click({force: true});
       cy.get('.modal-header > div > .modal-title').should('have.text', loginPage.title);
      });
    
    it('Login succesfully', function(){
       cy.get('.theme-btn-transparent').click({force: true});
       cy.login(customer.username, customer.password);  
       cy.get('.author__title > strong').contains(loginPage.customerName);
    });

    it('Logout', function(){
      cy.get('.theme-btn-transparent').click({force: true});
      cy.login(agent.username, agent.password);  
      cy.get('.sidebar-menu > :nth-child(5) > .waves-effect').click({force: true});
      });


    });