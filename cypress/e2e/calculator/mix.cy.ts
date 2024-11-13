/// <reference types="cypress" />

describe("Calculos Combinados - Operações Mistas", () => {
  beforeEach("Acessar a calculadora", () => {
    cy.visit("http://localhost:5173/");
  });

  it("1 + 2 * 3", () => {
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="+"]').click();
    cy.get('[data-cy="2"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="x"]').click();
    cy.get('[data-cy="3"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display-container"]').should("have.text", "9");
  });

  it("10 - 2 + 5", () => {
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="0"]').click();
    cy.get('[data-cy="-"]').click();
    cy.get('[data-cy="2"]').click();
    cy.get('[data-cy="+"]').click();
    cy.get('[data-cy="5"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display-container"]').should("have.text", "13");
  });

  it("6 / 2 + 3", () => {
    cy.get('[data-cy="6"]').click();
    cy.get('[data-cy="/"]').click();
    cy.get('[data-cy="2"]').click();
    cy.get('[data-cy="+"]').click();
    cy.get('[data-cy="3"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display-container"]').should("have.text", "6");
  });

  it("5.5 / 2.5 + 1", () => {
    cy.get('[data-cy="5"]').click();
    cy.get('[data-cy="."]').click();
    cy.get('[data-cy="5"]').click();
    cy.get('[data-cy="/"]').click();
    cy.get('[data-cy="2"]').click();
    cy.get('[data-cy="."]').click();
    cy.get('[data-cy="5"]').click();
    cy.get('[data-cy="+"]').click();
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display-container"]').should("have.text", "3.2");
  });

  it("100 / 5 * 2", () => {
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="0"]').click();
    cy.get('[data-cy="0"]').click();
    cy.get('[data-cy="/"]').click();
    cy.get('[data-cy="5"]').click();
    cy.get('[data-cy="x"]').click();
    cy.get('[data-cy="2"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display-container"]').should("have.text", "40");
  });

  //Erro
  it("1 + 2 * 3", () => {
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="+"]').click();
    cy.get('[data-cy="2"]').click();
    cy.get('[data-cy="x"]').click();
    cy.get('[data-cy="3"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display-container"]').should("have.text", "7");
  });
});
