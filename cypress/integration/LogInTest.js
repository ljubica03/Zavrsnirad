
const customer = Cypress.env("Customer")
const agent = Cypress.env("Agent")
import { loginPage } from '../fixtures/constants'
import {logInForm} from '../support/pom_objects/logInPage'
import {leftNav} from '../support/pom_objects/CustomerPagePom'

describe('Login Test suite', function() {
     
    beforeEach('Go to apllication and click on coocke', function(){
       cy.visit('/');
       cy.get('#cookie_stop').click();
     });

    it('Navigate to login page', function(){
       cy.get(logInForm.btnLogin).click({force: true});
       cy.get(logInForm.sLogInTitle).should('have.text', loginPage.title);
      });
    
    it('Login succesfully', function(){
       cy.get(logInForm.btnLogin).click({force: true});
       cy.login(customer.username, customer.password);  
       cy.get('.author__title > strong').contains(loginPage.customerName);
    });

    it('Logout', function(){
      cy.get(logInForm.btnLogin).click({force: true});
      cy.login(agent.username, agent.password);  
      cy.get(leftNav.logout).click({force: true});
      });


    });