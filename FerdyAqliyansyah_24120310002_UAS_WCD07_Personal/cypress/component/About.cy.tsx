import About from "../../src/layouts/Home/About";
import React from "react";

describe("Test About Component", () => {
  it("should display job title", () => {
    cy.mount(<About />);
    const coreText = [
      "Hello!",
      "Vue.js",
      "Next.js",
      "Express.js",
      "Nest.js",
      "Flutter",
    ];
    cy.get("span.text-brand-primary").each((span, index) => {
      cy.wrap(span).should("have.text", coreText[index]);
    });
  });
});
