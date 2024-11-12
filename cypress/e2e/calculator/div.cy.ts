/// <reference types="cypress" />

describe("Calculos Básicos - Divisão", () => {
  beforeEach("Acessar a calculadora", () => {
    cy.visit("http://localhost:5173/");
  });

  it("Divisão 1 / 2", () => {
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="/"]').click();
    cy.get('[data-cy="2"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display-container"]').should("have.text", "0.5");
  });

  it("Divisão 1 / 3", () => {
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="/"]').click();
    cy.get('[data-cy="3"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display-container"]').should("have.text", "0.33");
  });

  it("Divisão -1 / 3", () => {
    cy.get('[data-cy="-"]').click();
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="/"]').click();
    cy.get('[data-cy="3"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display-container"]').should("have.text", "-0.33");
  });

  it("Divisão -1 / -3", () => {
    cy.get('[data-cy="-"]').click();
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="/"]').click();
    cy.get('[data-cy="-"]').click();
    cy.get('[data-cy="3"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display-container"]').should("have.text", "-4");
  });

  it("Divisão 1 / -3", () => {
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="/"]').click();
    cy.get('[data-cy="-"]').click();
    cy.get('[data-cy="3"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display-container"]').should("have.text", "-2");
  });

  it("Divisão 1 / 0", () => {
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="/"]').click();
    cy.get('[data-cy="0"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display-container"]').should(
      "have.text",
      "Não é possível dividir por zero"
    );
  });

  it("Divisão 0 / 1", () => {
    cy.get('[data-cy="0"]').click();
    cy.get('[data-cy="/"]').click();
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display-container"]').should("have.text", "0");
  });

  it("Divisão 0 / 0", () => {
    cy.get('[data-cy="0"]').click();
    cy.get('[data-cy="/"]').click();
    cy.get('[data-cy="0"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display-container"]').should(
      "have.text",
      "Resultado indefinido"
    );
  });

  it("Divisão 0 / -1", () => {
    cy.get('[data-cy="0"]').click();
    cy.get('[data-cy="/"]').click();
    cy.get('[data-cy="-"]').click();
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display-container"]').should("have.text", "-1");
  });

  it("Divisão -1 / 0", () => {
    cy.get('[data-cy="-"]').click();
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="/"]').click();
    cy.get('[data-cy="0"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display-container"]').should(
      "have.text",
      "Não é possível dividir por zero"
    );
  });

  it("Divisão 5.5 / 2.5", () => {
    cy.get('[data-cy="5"]').click();
    cy.get('[data-cy="."]').click();
    cy.get('[data-cy="5"]').click();
    cy.get('[data-cy="/"]').click();
    cy.get('[data-cy="2"]').click();
    cy.get('[data-cy="."]').click();
    cy.get('[data-cy="5"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display-container"]').should("have.text", "2.2");
  });

  it("Divisão 5 / 0.5", () => {
    cy.get('[data-cy="5"]').click();
    cy.get('[data-cy="/"]').click();
    cy.get('[data-cy="0"]').click();
    cy.get('[data-cy="."]').click();
    cy.get('[data-cy="5"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display-container"]').should("have.text", "10");
  });
});
