import { FillLayer } from "react-map-gl";
import { ClickOverLay } from "./click";
import { SearchOverLay } from "./Search";

// makes sure that the json type is a feature collection
function isFeatureCollection(json: any): json is GeoJSON.FeatureCollection {
  return json.type === "FeatureCollection";
}
// This makes the api call once for the features in the redlining data
// and then checks to be sure that the data is a FeatureCollection
export async function overlayData(): Promise<
  GeoJSON.FeatureCollection | undefined
> {
  return new Promise((resolve, reject) => {
    ClickOverLay(["", "", "", ""]).then((data) => {
      resolve(isFeatureCollection(data) ? data : undefined);
    });
  });
}

// This makes the api call for the features with the keyword
// and then checks to be sure that the data is a FeatureCollection
export async function searchOverlayData(
  keyword: string[]
): Promise<GeoJSON.FeatureCollection | undefined> {
  return new Promise((resolve, reject) => {
    SearchOverLay(keyword).then((data) => {
      console.log(keyword);
      resolve(isFeatureCollection(data) ? data : undefined);
    });
  });
}


const propertyName = "holc_grade";
export const geoLayer: FillLayer = {
  id: "geo_data",
  type: "fill",
  paint: {
    "fill-color": [
      "match",
      ["get", propertyName],
      "A",
      "#5bcc04",
      "B",
      "#04b8cc",
      "C",
      "#e9ed0e",
      "D",
      "#d11d1d",
      "#ccc",
    ],
    "fill-opacity": 0.2,
  },
};

export const searchLayer: FillLayer = {
  id: "search_data",
  type: "fill",
  paint: {
    "fill-color": "#3604cc",
    "fill-opacity": 0.2,
  },
};