// import { defineConfig } from "cypress";
const { defineConfig } = require("cypress");
const react = require("@vitejs/plugin-react");

module.exports = defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
      viteConfig: {
        plugins: [react()],
      },
    },
    specPattern: "cypress/component/**/*.cy.{js,jsx,ts,tsx}", // optional but useful
  },
});
