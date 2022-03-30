const el = require('./elements').ELEMENTS


class cadastros{
subcategorias() {

    cy.visit(el.visit)
    cy.get(el.login).type(el.nome)
    cy.get(el.senha).type(el.id)
    cy.get(el.botao).click()
    cy.get(el.botao1).click()
    cy.get(el.botao2).click()
    cy.get(el.botao3).click()
    cy.get(el.botao4).click()

}

}

export default new cadastros()