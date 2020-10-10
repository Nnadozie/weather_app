import React from "react";
import { render } from "@testing-library/react";
import Index from "../pages/index";

test("renders deploy link", () => {
  const { getByText } = render(<Index />);
  const linkElement = getByText(/Home/);
  expect(linkElement).toBeInTheDocument();
});

test(
  "when I have no saved locations, there is no location data fetched.",
  undefined
);
