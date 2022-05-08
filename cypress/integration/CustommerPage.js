describe('Custommer Page Suite', function() {
     
    beforeEach('Go to apllication and click on coocke', function(){
       cy.visit('/');
       cy.get('#cookie_stop').click();
       cy.get('.theme-btn-transparent').click({force: true});
       cy.login('user@phptravels.com','demouser');  
       });

    it('Checking author content', function(){
          //cy.get('.author__title > strong').contains('Demo');
         cy.get('.author__title > strong').should('have.text', 'Demo');
        });

    it('Checking funcionality of Left navigation and its links', function(){
        cy.get('.sidebar-menu > :nth-child(1) > .waves-effect').click({force: true});
        cy.get('.title').should('have.text', 'Recent Searches'); 
        cy.get('.sidebar-menu > :nth-child(2) > .waves-effect').click({force: true});
        cy.get('.title').should('have.text', 'My Bookings'); 
        cy.get('.sidebar-menu > :nth-child(3) > .waves-effect').click({force: true});    
        cy.get('.d-block > .title').should('have.text', 'Add Funds'); 
        cy.get('.sidebar-menu > :nth-child(4) > .waves-effect').click({force: true});
        cy.get('.form-title-wrap > .title').should('have.text', 'Profile Information'); 
      });

    it('Checking author content', function(){
        //cy.get('.breadcrumb-content > .section-heading > .sec__title').contains('Demo');
       cy.get('.breadcrumb-content > .section-heading > .sec__title').should('have.text', 'Hi, Demo Welcome Back');
      });
    
    it('Checing visibility of elements on right side of page', function(){
       cy.get('.user_wallet > .icon-box > .d-flex > .info-content > .info__desc').should('have.text', 'Wallet Balance');
       cy.get(':nth-child(2) > .icon-box > .d-flex > .info-content > .info__desc').should('have.text', 'Total Bookings');
       cy.get(':nth-child(3) > .icon-box > .d-flex > .info-content > .info__desc').should('have.text', 'Pending Invoices');
       cy.get(':nth-child(4) > .icon-box > .d-flex > .info-content > .info__desc').should('have.text', 'Reviews');
       cy.get('.title').should('have.text', 'Recent Searches');    
      });

      
    });