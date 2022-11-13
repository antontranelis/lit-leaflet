import { LitElement, css, html, PropertyValues } from 'lit'
import {Map, tileLayer, Marker, Icon} from 'leaflet';
import { customElement, property } from 'lit/decorators.js'

export interface MarkerInformation {
  title: string;
  text: string;
  latitude: number;
  longitude: number;
}

@customElement('my-map')
export class MapContainer extends LitElement{

  @property({ type: Number })
  latitude = 47.38991;

  @property({ type: Number })
  longitude = 8.51604;

  @property({ type: Number })
  defaultZoom = 10;

  @property({type: Array<MarkerInformation>})
  markers = [{'title': 'Test', 'text': '123 ...',  'latitude': 9.5, 'longitude': 51.3},{'title': 'Test', 'text': '123 ...', 'latitude': 9.5, 'longitude': 51.5}];

  private mapMarkers: Array<Marker> = [];

  private _map!: Map;

  private markerRed: Icon;

  static styles = css`
  :host {
    display:block;
    height: 100vh;
    width: 100%
  }
`

constructor() {
  super();

  this.markerRed = new Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
}

  firstUpdated() {

    

    const mapEl = this.renderRoot.querySelector('#mapid') as HTMLElement;
    if(!mapEl) return;
    this._map = new Map(mapEl).setView([this.latitude, this.longitude], this.defaultZoom);


      let urlTemplate = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';
      this._map.addLayer(tileLayer(urlTemplate, {minZoom: 4}))  }

  render() {
      return html`
          <link rel="stylesheet" href="https://cdn.skypack.dev/leaflet/dist/leaflet.css">
          <div id="mapid" style="height: 100%"></div>
      `;
  }

  updated(_changedProperties: PropertyValues) {
    super.updated(_changedProperties);

 
    if (_changedProperties.has('markers')) {
      this._updateMarkers();
    }

  }

  _updateMarkers() {
    if (!this._hasValidMapData()) {
      return;
    }

    // Remove existing markers
    this.mapMarkers.forEach(marker => marker.remove());
    this.mapMarkers = [];

    console.log(this.markers);
    

    // Add new markers for each marker from the custom element property
    this.mapMarkers = this.markers.map(marker => {
      const { title, text, latitude, longitude } = marker;

      const mapMarker = new Marker([longitude,latitude],{ icon: this.markerRed }).addTo(this._map);
      if (title || text) {
        const template = `<div part="popup" class="popup">
          ${title ? `<span part="popup-title" class="popup-title">${title}</span>` : ''}
          ${text ? `<span part="popup-title" class="popup-title">${text}</span>` : ''}
        </div>`;

        mapMarker.bindPopup(template);
      }

      return mapMarker;
    });
  }

  _hasValidMapData() {
    return this.latitude && this.longitude && this._map;
  }

}

