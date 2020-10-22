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
  return tiles;
};

export default WeatherTilesFactory;
