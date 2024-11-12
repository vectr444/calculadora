/// <reference types="cypress" />

describe("Calculos Básicos - Soma", () => {
  beforeEach("Acessar a calculadora", () => {
    cy.visit("http://localhost:5173/");
  });

  it("Soma 1 + 2", () => {
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="+"]').click();
    cy.get('[data-cy="2"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display-container"]').should("have.text", "3");
  });

  it("Soma 1 + 3", () => {
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="+"]').click();
    cy.get('[data-cy="3"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display-container"]').should("have.text", "4");
  });

  it("Soma 1 + 3.2", () => {
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="+"]').click();
    cy.get('[data-cy="3"]').click();
    cy.get('[data-cy="."]').click();
    cy.get('[data-cy="2"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display-container"]').should("have.text", "4.2");
  });

  it("Soma -1 + 3.2", () => {
    cy.get('[data-cy="-"]').click();
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="+"]').click();
    cy.get('[data-cy="3"]').click();
    cy.get('[data-cy="."]').click();
    cy.get('[data-cy="2"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display-container"]').should("have.text", "2.2");
  });

  it("Soma -1.5 + 3.2", () => {
    cy.get('[data-cy="-"]').click();
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="."]').click();
    cy.get('[data-cy="5"]').click();
    cy.get('[data-cy="+"]').click();
    cy.get('[data-cy="3"]').click();
    cy.get('[data-cy="."]').click();
    cy.get('[data-cy="2"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display-container"]').should("have.text", "1.7");
  });

  it("Soma -1 + 3", () => {
    cy.get('[data-cy="-"]').click();
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="+"]').click();
    cy.get('[data-cy="3"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display-container"]').should("have.text", "2");
  });

  it("Soma -1 + -3", () => {
    cy.get('[data-cy="-"]').click();
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="+"]').click();
    cy.get('[data-cy="-"]').click();
    cy.get('[data-cy="3"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display-container"]').should("have.text", "-4");
  });

  it("Soma 1 + -3", () => {
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="+"]').click();
    cy.get('[data-cy="-"]').click();
    cy.get('[data-cy="3"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display-container"]').should("have.text", "-2");
  });

  it("Soma 1 + 0", () => {
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="+"]').click();
    cy.get('[data-cy="0"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display-container"]').should("have.text", "1");
  });

  it("Soma 0 + 0", () => {
    cy.get('[data-cy="0"]').click();
    cy.get('[data-cy="+"]').click();
    cy.get('[data-cy="0"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display-container"]').should("have.text", "0");
  });

  it("Soma 0 + 1", () => {
    cy.get('[data-cy="0"]').click();
    cy.get('[data-cy="+"]').click();
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display-container"]').should("have.text", "1");
  });

  it("Soma 0 + -1", () => {
    cy.get('[data-cy="0"]').click();
    cy.get('[data-cy="+"]').click();
    cy.get('[data-cy="-"]').click();
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display-container"]').should("have.text", "-1");
  });

  it("Soma 000002 + -1", () => {
    cy.get('[data-cy="0"]').click();
    cy.get('[data-cy="0"]').click();
    cy.get('[data-cy="0"]').click();
    cy.get('[data-cy="0"]').click();
    cy.get('[data-cy="0"]').click();
    cy.get('[data-cy="2"]').click();
    cy.get('[data-cy="+"]').click();
    cy.get('[data-cy="-"]').click();
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display-container"]').should("have.text", "1");
  });
});
