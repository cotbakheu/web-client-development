import Skills from "../../src/layouts/Home/Skills";
import React from "react";

describe("Test Skills Component", () => {
  it("should display job title", () => {
    cy.mount(<Skills />);
    cy.get("div#skill-list").children().should("have.length", 4);
  });

  it("should have frontend skills", () => {
    cy.mount(<Skills />);
    cy.get("div#frontend img").should("have.length.greaterThan", 1);
  });
  it("should have backend skills", () => {
    cy.mount(<Skills />);
    cy.get("div#backend img").should("have.length.greaterThan", 1);
  });
  it("should have mobile skills", () => {
    cy.mount(<Skills />);
    cy.get("div#mobile img").should("have.length.greaterThan", 1);
  });
  it("should have database skills", () => {
    cy.mount(<Skills />);
    cy.get("div#database img").should("have.length.greaterThan", 1);
  });
});
