import Nav from "../components/nav";
import DateFC from "../components/date_fc";
import WeatherTile from "../components/weather_tile";
import { GetStaticProps } from "next";

/**
 * Lays out the components on the homepage used to display weather details of saved locations and favorite location
 *
 * @example
 * <Index />
 */
function Index() {
  return (
    <>
      <header>
        <DateFC date={new Date()}></DateFC>
      </header>
      <main>
        <section aria-label="weather in saved locations">
          <WeatherTile></WeatherTile>
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
