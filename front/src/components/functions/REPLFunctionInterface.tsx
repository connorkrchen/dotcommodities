import { FeatureCollection } from "geojson";

export interface REPLFunction {
  (args: Array<string>): Promise<string | string[][] | FeatureCollection | undefined>;
}
