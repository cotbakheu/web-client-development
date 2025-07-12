import Experiences from "../../src/layouts/Home/Experiences";
import React from "react";

describe("Test Experiences Component", () => {
  it("should main text", () => {
    cy.mount(<Experiences />);
    const mainText = [
      "Experiences",
      "PGE Aceh",
      "Embreo Pte Ltd",
      "Asani",
      "PT. Chitra Paratama",
    ];
    cy.get("span.text-brand-primary").each((span, index) => {
      cy.wrap(span).should("have.text", mainText[index]);
    });
  });
});
