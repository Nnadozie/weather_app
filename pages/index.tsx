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

export const getStaticProps: GetStaticProps = async (context) => {
  const greeting = <DateFC date={new Date()} />;
  const saved_locations: JSX.Element[] = [];
  return {
    props: { greeting: greeting, saved_locations: saved_locations },
  };
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

 * <Index greeting={<DateFC />} saved_locations={weather_tiles} />
 */
function Index(props: IndexFCProps) {
  return (
    <>
      <header>{props.greeting}</header>
      <main>
        <section aria-label="weather in saved locations">
          {props.saved_locations}
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
