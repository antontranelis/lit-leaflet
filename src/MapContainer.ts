import { LitElement, css, html, PropertyValues, PropertyValueMap } from 'lit'
import { customElement, property, queryAssignedElements, state } from 'lit/decorators.js'
import { Map as leafletMap, tileLayer, Marker as leafletMarker, Icon } from 'leaflet';
import { Point } from 'geojson'
import { Marker } from './Marker';

export interface Item {
  id: number;
  name: string;
  text: string;
  position: Point;
  start?: string;
  end?: string;
  tags?: number[];
  date_created?: string;
  date_updated?: string;
}

export interface Tag {
  id: number;
  name: string;
  color: string;
}

@customElement('map-container')
export class MapContainer extends LitElement {

  @property({ type: Number })
  latitude: number = 47.38991;

  @property({ type: Number })
  longitude: number = 8.51604;

  @property({ type: Number })
  defaultZoom: number = 10;

  @property({ type: Array<Item> })
  items: Item[] = [];

  @queryAssignedElements({ selector: 'map-marker'})
  _marker!: Marker[]


  @state()
  private mapMarkers: Array<leafletMarker> = [];

  private _map!: leafletMap;

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
    console.log("firstUpdated");
    
    console.log(this._marker);

    const mapEl = this.renderRoot.querySelector('#mapid') as HTMLElement;
    if (!mapEl) return;
    this._map = new leafletMap(mapEl).setView([this.latitude, this.longitude], this.defaultZoom);

    let urlTemplate = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';
    this._map.addLayer(tileLayer(urlTemplate, { minZoom: 4 }))
  }

  // @marker-added is catching added marker events from child elements of type Marker
  render() {
    return html`
          <link rel="stylesheet" href="https://cdn.skypack.dev/leaflet/dist/leaflet.css">
          <div @marker-added=${this._updateMarkers} id="mapid" style="height: 100%">
            <slot></slot>
          </div>
      `;
  }



  _updateMarkers() {
    if (!this._hasValidMapData()) {
      return;
    }
  /*
    // Remove existing markers
    this.mapMarkers.forEach(marker => marker.remove());
    this.mapMarkers = [];

  
    // Add new markers for each marker from the custom element property
    this.mapMarkers = this.items.map(item => {
      const { name, text, position } = item;

      const mapMarker = new leafletMarker([position.coordinates[1], position.coordinates[0]], { icon: this.markerRed }).addTo(this._map);
      if (name || text) {
        const template = `<div part="popup" class="popup">
          ${name ? `<h3 part="popup-title" class="popup-title">${name}</h3>` : ''}
          ${text ? `<span part="popup-title" class="popup-title">${text}</span>` : ''}
        </div>`;

        mapMarker.bindPopup(template);
      }
*/

      this._marker.map(marker => {
      
      let mapMarker = null;
      if (marker.latitude && marker.longitude)
      mapMarker = new leafletMarker([marker.latitude, marker.longitude], { icon: this.markerRed }).addTo(this._map);
      if (marker.innerHTML) {
        const template = `<div part="popup" class="popup">
            ${marker.innerHTML}
          </div>`;
          if(mapMarker)
        mapMarker.bindPopup(template);

        return mapMarker;
      }
      });
  }

  _hasValidMapData() {
    return this.latitude && this.longitude && this._map;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    "map-container": MapContainer;
  }
}