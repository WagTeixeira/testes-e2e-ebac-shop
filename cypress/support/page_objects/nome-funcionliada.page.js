class LogoutPage {

    preenchendoCampoLogout(){
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()

        cy.get('#billing_first_name').clear().type(nome)
        cy.get('#billing_last_name').clear().type(sobrenome)
        cy.get('#billing_company').clear().type('EBAC')
        cy.get('#select2-billing_country-container').click().type('Brasil',{enter})//.get('[aria-readonly="true"]').click
        cy.get('#billing_address_1').clear().type('Av rio branco')
        cy.get('#billing_address_2').clear().type('201')
        cy.get('#billing_city').clear().type('Rio de Janeiro')
        cy.get('#select2-billing_state-container').click().type('Rio de Janeiro',{enter})
        cy.get('#billing_postcode').clear().type('25085-190')
        cy.get('#billing_phone').clear().type('21985070164')
        cy.get('#billing_email').clear().type('wagg@teste.com')
        cy.get('#createaccount').click
        cy.get('#terms').click

        cy.get('#place_order').click
    }

}

