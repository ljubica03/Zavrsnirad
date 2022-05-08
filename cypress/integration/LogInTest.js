describe('Login Test suite', function() {
     
    beforeEach('Go to apllication and click on coocke', function(){
       cy.visit('/');
       cy.get('#cookie_stop').click();
     });

    it('Navigate to login page', function(){
       cy.get('.theme-btn-transparent').click({force: true});
       cy.get('.modal-header > div > .modal-title').should('have.text', 'Login');
      });
    
    it('Login succesfully', function(){
       cy.get('.theme-btn-transparent').click({force: true});
       cy.get('[placeholder="Email"]').click({force: true}).type('user@phptravels.com');
       cy.get('[placeholder="Password"]').click({force: true}).type('demouser');
       cy.get('.btn-box > .btn-default').click({force: true});
       cy.get('.author__title > strong').contains('Demo');
    });

    it('Logout', function(){
      cy.get('.theme-btn-transparent').click({force: true});
      cy.login('user@phptravels.com','demouser');  
      cy.get('.sidebar-menu > :nth-child(5) > .waves-effect').click({force: true});
      });


    });