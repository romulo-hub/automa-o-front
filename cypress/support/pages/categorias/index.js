const el = require('./elementes').ELEMENTS

class cadastros{
categorias() {

    cy.visit(el.visit)
    cy.get(el.login).type(el.nome)
    cy.get(el.senha).type(el.id)
    cy.get(el.botao).click()
    cy.get(el.botao1).click()
    cy.get(el.botao2).click()
    cy.get(el.botao3).click()
    cy.get(el.borao4).click()

}

}

export default new cadastros()