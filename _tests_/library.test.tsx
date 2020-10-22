import React from "react";
import Index from "../pages/index";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import DateFC from "../components/date_fc";
import WeatherTilesFactory from "../utils/weather_tiles_factory";
import HorizontalScroll from "../components/horizontal_scroll";

describe("Index/Home page", () => {
  it("renders correctly", () => {
    const date = new Date("March 13, 08 8:20");
    const tree = renderer
      .create(<Index greeting={<DateFC date={date} />} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("should contain a header section with a role of banner", () => {
    const { container: dom_node } = render(<Index greeting={<DateFC />} />);

    expect(screen.getByRole("banner")).toStrictEqual(
      dom_node.querySelector("header")
    );
  });

  test("should contain a main section with a role of main", () => {
    const { container: dom_node } = render(<Index greeting={<DateFC />} />);

    expect(screen.getByRole("main")).toStrictEqual(
      dom_node.querySelector("main")
    );
  });

  test("should contain a nav section with a role of navigation", () => {
    const { container: dom_node } = render(<Index greeting={<DateFC />} />);

    expect(screen.getByRole("navigation")).toStrictEqual(
      dom_node.querySelector("nav")
    );
  });

  test("should contain a section with aria-label=weather in saved locations", () => {
    render(<Index greeting={<DateFC />} />);
    expect(
      screen.getByLabelText("weather in saved locations")
    ).toBeInTheDocument();
  });

  test("should contain a nav section with aria-label=weather in favorite location", () => {
    render(<Index greeting={<DateFC />} />);

    expect(
      screen.getByLabelText("weather in favorite location")
    ).toBeInTheDocument();
  });

  test("If it is 8am, the banner should greet 'Good Morning'", () => {
    const date = new Date("March 13, 08 8:20");
    render(<Index greeting={<DateFC date={date} />} />);
    expect(screen.getByRole("banner")).toHaveTextContent("Good Morning");
  });

  test("If it is 1pm, the banner should not greet 'Good Morning'", () => {
    const date = new Date("March 13, 08 13:20");
    render(<Index greeting={<DateFC date={date} />} />);
    expect(screen.getByRole("banner")).not.toHaveTextContent("Good Morning");
  });

  test("If it is 2pm, the banner should greet 'Good Afternoon'", () => {
    const date = new Date("March 13, 08 14:20");
    render(<Index greeting={<DateFC date={date} />} />);
    expect(screen.getByRole("banner")).toHaveTextContent("Good Afternoon");
  });

  test("If it is 11:59am, the banner should not greet 'Good Afternoon'", () => {
    const date = new Date("March 13, 08 11:59");
    render(<Index greeting={<DateFC date={date} />} />);
    expect(screen.getByRole("banner")).not.toHaveTextContent("Good Afternoon");
  });

  test("If it is 4:30pm, the banner should greet 'Good Evening'", () => {
    const date = new Date("March 13, 08 16:30");
    render(<Index greeting={<DateFC date={date} />} />);
    expect(screen.getByRole("banner")).toHaveTextContent("Good Evening");
  });

  test("If it is 3pm, the banner should greet not 'Good Evening'", () => {
    const date = new Date("March 13, 08 15:30");
    render(<Index greeting={<DateFC date={date} />} />);
    expect(screen.getByRole("banner")).not.toHaveTextContent("Good Evening");
  });

  test("the current time and day can be viewed in dd Month, Weekday", () => {
    const date = new Date("March 13, 08 15:30");
    render(<Index greeting={<DateFC date={date} />} />);
    expect(screen.getByRole("banner")).toHaveTextContent("13 March, Thursday");
  });

  test("when I have no saved locations, there are no saved location weather tiles displayed.", () => {
    const saved_locations: string[] = [];
    const weather_tiles: JSX.Element[] = WeatherTilesFactory({
      locations: saved_locations,
    });
    render(
      <Index
        greeting={<DateFC />}
        saved_locations={<HorizontalScroll tiles={weather_tiles} />}
      />
    );
    expect(
      screen.getByLabelText("weather in saved locations")
    ).toBeEmptyDOMElement();
  });

  test("when I have saved locations, there are saved location weather tiles displayed", () => {});
});

test.todo(
  " when I have no favorited location, there is no favorite location displayed."
);
test.todo(
  "when I have favorited location, there is a favorited location displayed"
);
test.todo("When I have one favorite location, I cannot add another.");
