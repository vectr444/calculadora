/// <reference types="cypress" />

describe("Calculos Básicos - Subtração", () => {
  beforeEach("Acessar a calculadora", () => {
    cy.visit("http://localhost:5173/");
  });

  it("Subtração 1 - 2", () => {
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="-"]').click();
    cy.get('[data-cy="2"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display-container"]').should("have.text", "-1");
  });

  it("Subtração 1 - 3", () => {
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="-"]').click();
    cy.get('[data-cy="3"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display-container"]').should("have.text", "-2");
  });

  it("Subtração -1 - 3", () => {
    cy.get('[data-cy="-"]').click();
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="-"]').click();
    cy.get('[data-cy="3"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display-container"]').should("have.text", "-4");
  });

  it("Subtração -1 - -3", () => {
    cy.get('[data-cy="-"]').click();
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="-"]').click();
    cy.get('[data-cy="-"]').click();
    cy.get('[data-cy="3"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display-container"]').should("have.text", "-4");
  });

  it("Subtração 1 - -3", () => {
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="-"]').click();
    cy.get('[data-cy="-"]').click();
    cy.get('[data-cy="3"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display-container"]').should("have.text", "-2");
  });

  it("Subtração 1 - 0", () => {
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="-"]').click();
    cy.get('[data-cy="0"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display-container"]').should("have.text", "1");
  });

  it("Subtração 0 - 0", () => {
    cy.get('[data-cy="0"]').click();
    cy.get('[data-cy="-"]').click();
    cy.get('[data-cy="0"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display-container"]').should("have.text", "0");
  });

  it("Subtração 0 - 1", () => {
    cy.get('[data-cy="0"]').click();
    cy.get('[data-cy="-"]').click();
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display-container"]').should("have.text", "-1");
  });

  it("Subtração 1 - 0.5", () => {
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="-"]').click();
    cy.get('[data-cy="0"]').click();
    cy.get('[data-cy="."]').click();
    cy.get('[data-cy="5"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display-container"]').should("have.text", "0.5");
  });

  it("Subtração 2.5 - 0.5", () => {
    cy.get('[data-cy="2"]').click();
    cy.get('[data-cy="."]').click();
    cy.get('[data-cy="5"]').click();
    cy.get('[data-cy="-"]').click();
    cy.get('[data-cy="0"]').click();
    cy.get('[data-cy="."]').click();
    cy.get('[data-cy="5"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display-container"]').should("have.text", "2");
  });
});
