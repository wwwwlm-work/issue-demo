import { map } from "leaflet";
import { tiledMapLayer } from "esri-leaflet";
import "leaflet/dist/leaflet.css";
import "./style.css";

map("leaflet-container", {
  mode: "arcgis",
  center: {
    lat: 31.173111023707058,
    lng: 121.42896539543031
  },
  maxZoom: 18,
  zoom: 12,
  minZoom: 0,
  markerZoomAnimation: true,
  zoomControl: false,
  layers: [
    tiledMapLayer({
      url:
        "https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer"
    })
  ]
});
