/// <reference types="cypress"/>
import LogoutPage from '../support/page_objects/nome-funcionliada.page'

describe('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    beforeEach(() => {
        cy.visit('produtos/')
    });
    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        cy.get('[class = "product-block grid"]').eq(3).click()
    });

    it("Deve selecionar o primeiro produto", () => {
        var quantidade = 1
        cy.get('[class = "product-block grid"]').last().click();
        cy.get('.button-variable-item-S').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

       
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should( 'contain', '“Atlas Fitness Tank” foi adicionado no seu carrinho.')
    });

    it("Deve selecionar o segundo produto", () => {
        var quantidade = 1
        cy.get('[class = "product-block grid"]').eq(0).click()
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', ' “Abominable Hoodie” foi adicionado no seu carrinho.')
    });

    it("Deve selecionar o terceiro produto", () => {
        var quantidade = 1
        cy.get('[class = "product-block grid"]').first().click();
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', ' “Abominable Hoodie” foi adicionado no seu carrinho.')
    });
    it.only("Deve selecionar o primeiro produto", () => {
        var quantidade = 1
        cy.get('[class = "product-block grid"]').eq(8).click();
        cy.get('.button-variable-item-XL').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should( 'contain', '“Atlas Fitness Tank” foi adicionado no seu carrinho.')
        
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()

        cy.get('#billing_first_name').clear().type('Wagner')
        cy.get('#billing_last_name').clear().type('Teixeira')
        cy.get('#billing_company').clear().type('EBAC')
        cy.get('#select2-billing_country-container').click().type('Brasil{enter}')//.get('[aria-readonly="true"]').click
        cy.get('#billing_address_1').clear().type('Av rio branco')
        cy.get('#billing_address_2').clear().type('201')
        cy.get('#billing_city').clear().type('Rio de Janeiro')
        cy.get('#select2-billing_state-container').click().type('Rio de Janeiro{enter}')
        cy.get('#billing_postcode').clear().type('25085-190')
        cy.get('#billing_phone').clear().type('21985070164')
        cy.get('#billing_email').clear().type('wagg@teste.com')
        cy.get('#createaccount').check()
        cy.get('#createaccount').click().type('rato1998@')
        cy.get('#terms').check()

        cy.get('#place_order').click()
        
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    });   
});

