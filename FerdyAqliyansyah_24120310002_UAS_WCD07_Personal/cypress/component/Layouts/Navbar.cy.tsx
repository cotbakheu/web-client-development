import Navbar from "../../../src/components/Navbar";
import React from "react";

describe("Test Navbar Component", () => {
  it("should display navbar", () => {
    cy.mount(<Navbar />);
  });
});
