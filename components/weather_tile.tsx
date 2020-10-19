import { GetStaticProps } from "next";

type WeatherProp = {
  /** Should the time of a location be displayed in the tile? Defaults to true */
  withTime?: boolean;
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};

/**
 * Displays the weather of a given location.
 *
 * @example
 * <WeatherTile withTime={false}></WeatherTile>
 *
 */
const WeatherTile = ({ withTime = true }: WeatherProp) => {
  return <span>Weather</span>;
};

export default WeatherTile;
