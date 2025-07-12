import Hero from "../../src/layouts/Home/Hero";
import React from "react";

describe("Test Hero Component", () => {
  it("should display job title", () => {
    cy.mount(<Hero />);
    cy.get("h1").should("have.text", "Software Engineer");
  });

  it("should display job personal data", () => {
    cy.mount(<Hero />);
    cy.get("p#name").should("exist").and("have.text", "Ferdy Aqliyansyah");
    cy.get("p#email").should("exist").and("have.text", "ferdyaqli27@gmail.com");
    cy.get("p#location").should("exist").and("have.text", "Jakarta, Indonesia");
    cy.get("p#jobs").should("exist").and("have.text", "Fulltime / Freelancer");
    cy.get("p#website").should("exist").and("have.text", "www.ferdyaqli.com");
  });

  it("should download CV when clicking downwload button", () => {
    cy.mount(<Hero />);
    cy.get("a#download-cv")
      .should("exist")
      .and("have.attr", "href", "/ferdy_cv_new.pdf")
      .and("have.attr", "download", "ferdy_cv_new.pdf");
  });
});
