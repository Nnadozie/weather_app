import WeatherTile from "../components/weather_tile";

type WeatherTilesFactoryProp = {
  /** A collection of locations for which weather details are required */
  locations: string[];
};

/** Builds and returns an array of WeatherTile components
 *
 * @example
 * const weather_tiles: JSX.Element[] = WeatherTilesFactory({
      locations: saved_locations,
    });
 */
const WeatherTilesFactory = (props: WeatherTilesFactoryProp): JSX.Element[] => {
  const tiles: JSX.Element[] = [];

  props.locations.forEach((location) => {
    tiles.push(<WeatherTile />);
  });
  return tiles;
};

export default WeatherTilesFactory;
