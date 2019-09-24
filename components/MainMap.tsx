import React, {
  useState,
  FunctionComponent,
  createRef,
  SyntheticEvent
} from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { ThemePane, LangPane } from "./ThemeAndLang";

type Ref = Map;

export interface Theme {
  mapTheme: string;
}
const lightTheme: Theme = {
  mapTheme: "openstreetmap.1b68f018"
};
const darkTheme: Theme = {
  mapTheme: "mapbox.dark"
};

const MainMap: FunctionComponent<{}> = () => {
  const initialCoords = { lat: 51.505, lng: -0.09 };
  const initialZoom = 13;

  const [coords, setCoords] = useState(initialCoords);
  const [zoom, setZoom] = useState(initialZoom);
  const [currentLanguage, setCurrentLanguage] = useState("te");
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  const handleThemeChange = (e: SyntheticEvent) => {
    const { id } = e.currentTarget;
    setCurrentTheme(id == "light" ? lightTheme : darkTheme);
  };

  const handleLanguageChange = (e: SyntheticEvent) => {
    setCurrentLanguage(e.currentTarget.id);
  };
  const mapRef = createRef<Ref>();
  return (
    <Map center={coords} zoom={zoom} ref={mapRef} zoomControl={false}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        id="openstreetmap.1b68f018"
        url={`https://api.tiles.mapbox.com/v4/${"openstreetmap.1b68f018"}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoib3NtLWluIiwiYSI6ImNqcnVxMTNrNTJwbHc0M250anUyOW81MjgifQ.cZnvZEyWT5AzNeO3ajg5tg`}
      />
      <ThemePane
        current_theme_name={currentTheme.mapTheme}
        handleThemeChange={handleThemeChange}
      />
      <LangPane
        current_language={currentLanguage}
        handleLanguageChange={handleLanguageChange}
      />
    </Map>
  );
};

export default MainMap;
