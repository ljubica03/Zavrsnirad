
const customer = Cypress.env("Customer");

// import constants
import { loginPage } from '../fixtures/constants';
import { valueCustomor } from '../fixtures/constCustomerPage';
import { rightTitle } from '../fixtures/constCustomerPage';
import { boxTitle } from '../fixtures/constCustomerPage';

//import selectors from pom_objects
import {logInForm} from '../support/pom_objects/logInPage'
import {selectCustomor} from '../support/pom_objects/CustomerPagePom';
import {leftNav, selectorInfoBoxTitle, } from '../support/pom_objects/CustomerPagePom'
import {selectorPageTitle } from '../support/pom_objects/CustomerPagePom';


describe('Custommer Page Suite', function() {
     
    beforeEach('Go to apllication and click on coocke', function(){
       cy.visit('/');
       cy.get('#cookie_stop').click();
       cy.get(logInForm.btnLogin).click({force: true});
       cy.login(customer.username, customer.password);   
       });

    it('Checking Customer Name', function(){
          cy.get(selectCustomor.Name).should('have.text', valueCustomor.Name);
        });

    it ('Checking functionality of Left navigation and its links', function(){
        cy.get(leftNav.dashboard).click({force: true});
        cy.get(selectorPageTitle.dashboard).should('have.text',rightTitle.infoboxDashboard); 
        cy.get(leftNav.myBooking).click({force: true});
        cy.get(selectorPageTitle.myBooking).should('have.text',rightTitle.infoboxMyBooking); 
        cy.get(leftNav.addFunds).click({force: true});    
        cy.get(selectorPageTitle.addFunds).should('have.text',rightTitle.infoboxAddFund); 
        cy.get(leftNav.myProfile).click({force: true});
        cy.get(selectorPageTitle.myProfile).should('have.text',rightTitle.infoboxMyProfil);
        cy.get(leftNav.logout).click({force: true}); 
        cy.get(logInForm.sLogInTitle).should('have.text', loginPage.title);
      });

    it('Checking Hi message with Customer name', function(){
        cy.get(selectCustomor.HiMessage).should('have.text', valueCustomor.HiMessage);
      });
    
    it('Checing visibility of elements on right side of page', function(){
       cy.get(selectorInfoBoxTitle.Wallet).should('have.text', boxTitle.Wallet);
       cy.get(selectorInfoBoxTitle.Bookings).should('have.text',boxTitle.Bookings);
       cy.get(selectorInfoBoxTitle.Invoices).should('have.text',boxTitle.Invoices);
       cy.get(selectorInfoBoxTitle.Reviews).should('have.text',boxTitle.Reviews);
       cy.get(selectorInfoBoxTitle.Searshes).should('have.text',boxTitle.Searshes);    
      });

      
    });