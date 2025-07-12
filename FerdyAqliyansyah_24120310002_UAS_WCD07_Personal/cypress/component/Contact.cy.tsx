import Contact from "../../src/layouts/Home/Contact";
import React from "react";

describe("Test Experiences Component", () => {
  it("should main text", () => {
    cy.mount(<Contact />);
    cy.get("input#name").type("Ferdy Aqliyansyah");
    cy.get("input#email").type("ferdyaqli27@gmail.com");
    cy.get("input#message").type("Hello");
    cy.get("button").click();
  });
});
