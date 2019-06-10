import { getGreeting } from "../support/app.po";

describe("curriculum-vitae", () => {
  beforeEach(() => cy.visit("/"));

  it("should display welcome message", () => {
    getGreeting().contains("Welcome to curriculum-vitae!");
  });
});
