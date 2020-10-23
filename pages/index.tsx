import Nav from "../components/nav";
import DateFC from "../components/date_fc";
import WeatherTile from "../components/weather_tile";
import { GetStaticProps } from "next";

type IndexFCProps = {
  /** Appropriate greeting based on time of day in a given location
   *
   * @example
   *
   * <header>{props.greeting}</header>
   */
  greeting: JSX.Element;

  /** Horizontally scrollable view of weather tiles each showing weather in a saved location */
  saved_locations?: JSX.Element;
};

/**
 * Lays out the components on the homepage used to display weather details of saved locations and favorite location
 *
 * @example
 * 
 * <Index greeting={<DateFC />}
 * 
 * const saved_locations: string[] = [];
   const weather_tiles: JSX.Element[] = WeatherTilesFactory({
      locations: saved_locations,
    });

 * <Index
        greeting={<DateFC />}
        saved_locations={<HorizontalScroll tiles={weather_tiles} />}
      />
 */
function Index(props: IndexFCProps) {
  let { greeting, saved_locations } = props;
  greeting = greeting ? greeting : <DateFC date={new Date()} />;
  saved_locations = saved_locations ? saved_locations : <></>;
  return (
    <>
      <header>{greeting}</header>
      <main>
        <section aria-label="weather in saved locations">
          {saved_locations}
        </section>
        <section aria-label="weather in favorite location">
          <WeatherTile withTime={false}></WeatherTile>
        </section>
      </main>
      <nav>
        <Nav></Nav>
      </nav>
    </>
  );
}

export default Index;
