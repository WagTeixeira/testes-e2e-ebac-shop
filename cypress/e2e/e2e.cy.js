/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';
import LogoutPage from '../support/page_objects/nome-funcionliada.page';

describe('Testes E2E', () => {
    it('Deve efetuar a compra no final', () => {      

        let nomeFalso = faker.name.firstName()
        let sobrenomeFalso = faker.name.lastName()
        let empresaFalsa = faker.company.name()
        let emailFalso = faker.internet.email(nomeFalso)
        let senhaFalsa = faker.internet.password()

        cy.visit('/produtos/')
        
        cy.produto('Abominable Hoodie', 1)
        
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
        
        cy.cadastro(nomeFalso, sobrenomeFalso, empresaFalsa, 'Brasil{enter}', 'Rua cosmos', '130', 'Duque de Caxias', 'Rio de janeiro{enter}', '25085-190', '98507-0164', emailFalso, senhaFalsa)
        
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')

        
    });    
});