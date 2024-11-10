import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

describe("てすと", () => {
  test("てすと", () => {
    render(<App />);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
