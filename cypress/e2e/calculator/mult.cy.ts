/// <reference types="cypress" />

describe("Calculos Básicos - Multiplicação", () => {
  beforeEach("Acessar a calculadora", () => {
    cy.visit("http://localhost:5173/");
  });

  it("Multiplicação 1 * 2", () => {
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="x"]').click();
    cy.get('[data-cy="2"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display-container"]').should("have.text", "2");
  });

  it("Multiplicação 1 * 3", () => {
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="x"]').click();
    cy.get('[data-cy="3"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display-container"]').should("have.text", "3");
  });

  it("Multiplicação -1 * 3", () => {
    cy.get('[data-cy="-"]').click();
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="x"]').click();
    cy.get('[data-cy="3"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display-container"]').should("have.text", "-3");
  });

  it("Multiplicação -1 * -3", () => {
    cy.get('[data-cy="-"]').click();
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="x"]').click();
    cy.get('[data-cy="-"]').click();
    cy.get('[data-cy="3"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display-container"]').should("have.text", "-4");
  });

  it("Multiplicação 1 * -3", () => {
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="x"]').click();
    cy.get('[data-cy="-"]').click();
    cy.get('[data-cy="3"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display-container"]').should("have.text", "-2");
  });

  it("Multiplicação 1 * 0", () => {
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="x"]').click();
    cy.get('[data-cy="0"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display-container"]').should("have.text", "0");
  });

  it("Multiplicação 0 * 0", () => {
    cy.get('[data-cy="0"]').click();
    cy.get('[data-cy="x"]').click();
    cy.get('[data-cy="0"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display-container"]').should("have.text", "0");
  });

  it("Multiplicação 0 * 1", () => {
    cy.get('[data-cy="0"]').click();
    cy.get('[data-cy="x"]').click();
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display-container"]').should("have.text", "0");
  });

  it("Multiplicação 0 * -1", () => {
    cy.get('[data-cy="0"]').click();
    cy.get('[data-cy="x"]').click();
    cy.get('[data-cy="-"]').click();
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display-container"]').should("have.text", "-1");
  });

  it("Multiplicação 1.5 * 2.5", () => {
    cy.get('[data-cy="1"]').click();
    cy.get('[data-cy="."]').click();
    cy.get('[data-cy="5"]').click();
    cy.get('[data-cy="x"]').click();
    cy.get('[data-cy="2"]').click();
    cy.get('[data-cy="."]').click();
    cy.get('[data-cy="5"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display-container"]').should("have.text", "3.75");
  });

  it("Multiplicação 2.5 * 5", () => {
    cy.get('[data-cy="2"]').click();
    cy.get('[data-cy="."]').click();
    cy.get('[data-cy="5"]').click();
    cy.get('[data-cy="x"]').click();
    cy.get('[data-cy="5"]').click();
    cy.get('[data-cy="="]').click();
    cy.get('[data-cy="display-container"]').should("have.text", "12.5");
  });
});
