import React from "react";
import Index from "../pages/index";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import DateFC from "../components/date_fc";

describe("Index/Home page", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Index />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("should contain a header section with a role of banner", () => {
    const { container: dom_node } = render(<Index />);

    expect(screen.getByRole("banner")).toStrictEqual(
      dom_node.querySelector("header")
    );
  });

  test.todo("banner should contain greeting component");

  test("should contain a main section with a role of main", () => {
    const { container: dom_node } = render(<Index />);

    expect(screen.getByRole("main")).toStrictEqual(
      dom_node.querySelector("main")
    );
  });

  test("should contain a nav section with a role of navigation", () => {
    const { container: dom_node } = render(<Index />);

    expect(screen.getByRole("navigation")).toStrictEqual(
      dom_node.querySelector("nav")
    );
  });

  test("should contain a section with aria-label=weather in saved locations", () => {
    render(<Index />);
    expect(
      screen.getByLabelText("weather in saved locations")
    ).toBeInTheDocument();
  });

  test("should contain a nav section with aria-label=weather in favorite location", () => {
    render(<Index />);

    expect(
      screen.getByLabelText("weather in favorite location")
    ).toBeInTheDocument();
  });
});

describe("DateFC component", () => {
  test("If it is 8am, the banner should greet 'Good Morning'", () => {
    const date = new Date("March 13, 08 8:20");
    render(<DateFC date={date} />);
    expect(screen.getByTestId("greeting")).toHaveTextContent("Good Morning");
  });

  test("If it is 1pm, the banner should not greet 'Good Morning'", () => {
    const date = new Date("March 13, 08 13:20");
    render(<DateFC date={date} />);
    expect(screen.getByTestId("greeting")).not.toHaveTextContent(
      "Good Morning"
    );
  });

  test("If it is 2pm, the banner should greet 'Good Afternoon'", () => {
    const date = new Date("March 13, 08 14:20");
    render(<DateFC date={date} />);
    expect(screen.getByTestId("greeting")).toHaveTextContent("Good Afternoon");
  });

  test("If it is 11:59am, the banner should not greet 'Good Afternoon'", () => {
    const date = new Date("March 13, 08 11:59");
    render(<DateFC date={date} />);
    expect(screen.getByTestId("greeting")).not.toHaveTextContent(
      "Good Afternoon"
    );
  });

  test("If it is 4:30pm, the banner should greet 'Good Evening'", () => {
    const date = new Date("March 13, 08 16:30");
    render(<DateFC date={date} />);
    expect(screen.getByTestId("greeting")).toHaveTextContent("Good Evening");
  });

  test("If it is 3pm, the banner should greet not 'Good Evening'", () => {
    const date = new Date("March 13, 08 15:30");
    render(<DateFC date={date} />);
    expect(screen.getByTestId("greeting")).not.toHaveTextContent(
      "Good Evening"
    );
  });
});

test.todo("when I have no saved locations, there is no location data fetched.");
test.todo("when i have saved locations, there is location data fetched");
test.todo(
  " when I have no favorited location, there is no favorite location data feteched."
);
test.todo(
  "when I have favorited location, there is favorited location data fetched"
);
test.todo("When I have one favorite location, I cannot add another.");
test.todo("when I have saved location data, I can view the data");
test.todo("when I have favorite location data, I can view the data");
test.todo("when I have no data, I cannot view any location data");
