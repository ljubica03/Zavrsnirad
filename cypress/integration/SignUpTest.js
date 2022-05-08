describe('Sign up Test suite', function() {

      
    beforeEach('Go to apllication and click on coocke', function(){
        cy.visit('/');
        cy.get('#cookie_stop').click();
    });

    it('Navigate to SingUp page', function(){
        cy.get('[href="https://www.phptravels.net/signup"]').click();
        cy.get('.modal-title').should('have.text', 'Signup');  
    });

    it('Create account, Insert valid data in all fields', function(){
        cy.get('[href="https://www.phptravels.net/signup"]').click();
       // cy.get('[placeholder="First Name"]').focus().click().type("First");
        cy.get('[placeholder="First Name"]').click({force: true}).type("Second");
        cy.get('[placeholder="Last Name"]').click({force: true}).type("Last");
        cy.get('[placeholder="Phone"]').click({force: true}).type("381639");
        cy.get('[placeholder="Email"]').click({force: true}).type("Second@bg.com");
        cy.get('[placeholder="Password"]').click({force: true}).type("Test.321");
        cy.get('#select2-account_type-container').click({force: true});
        cy.get('.mt-3 > .btn').click({force: true}); 
        cy.get('.alert').contains('Signup successfull please login.');
     });

     it('Create account with same email address', function(){
        cy.get('[href="https://www.phptravels.net/signup"]').click();
        cy.get('[placeholder="First Name"]').click({force: true}).type("Second");
        cy.get('[placeholder="Last Name"]').click({force: true}).type("Last");
        cy.get('[placeholder="Phone"]').click({force: true}).type("381639");
        cy.get('[placeholder="Email"]').click({force: true}).type("Second@bg.com");
        cy.get('[placeholder="Password"]').click({force: true}).type("Test.321");
        cy.get('#select2-account_type-container').click({force: true});
        cy.get('.mt-3 > .btn').click({force: true}); 
        cy.get('.alert').contains('Email already exist!');
     });
     


});