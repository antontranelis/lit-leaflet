import { LitElement,  html, CSSResult } from 'lit'
import {MapStyles} from './styles'
import { customElement, property, queryAssignedElements } from 'lit/decorators.js'
import { Map as leafletMap, tileLayer, Marker as leafletMarker, LayerGroup, Control, MarkerClusterGroup } from 'leaflet';
import { Marker } from './Marker';
import { Layer } from './Layer';
import { Tags } from './Tags';
import MarkerIconFactory from './Utils/MarkerIconFactory'
import { getItemPopup, Item } from './Item';
import 'leaflet.markercluster';
import 'leaflet.markercluster.layersupport';





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

  @queryAssignedElements({ selector: 'map-marker' })
  marker!: Marker[];

  @queryAssignedElements({ selector: 'map-layer'})
  layers!: Layer[];

  @queryAssignedElements({ selector: 'map-tags' })
  private _tags_childs!: Tags[];

  tags!: Tags;

  private _map!: leafletMap;
  private _layerControl!: Control.Layers;
  private _layers: Control.LayersObject;
  private _mcgLayerSupportGroup!: MarkerClusterGroup.LayerSupport;

  static styles: CSSResult[] = [
    // language=CSS
    MapStyles];


  constructor() {
    super();
    this._layers = {} as Control.LayersObject;
  }



  firstUpdated() {
    const mapEl = this.renderRoot.querySelector('#mapid') as HTMLElement;
    if (!mapEl) return;
    this._map = new leafletMap(mapEl).setView([this.latitude, this.longitude], this.defaultZoom);
    let urlTemplate = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';
    this._map.addLayer(tileLayer(urlTemplate, { minZoom: 4 }))
    this._layerControl = new Control.Layers({}, {}, { collapsed: false, position: 'bottomleft' }).addTo(this._map);
    this._mcgLayerSupportGroup = L.markerClusterGroup.layerSupport({maxClusterRadius: 50,singleAddRemoveBufferDuration:0});
    this._map.addLayer(this._mcgLayerSupportGroup)
    this.tags = this._tags_childs[0];

  }



  // @marker-added is catching added marker events from child elements of type Marker
  render() {
    return html`
          <link rel="stylesheet" href="https://cdn.skypack.dev/leaflet/dist/leaflet.css">
          <div @slotchange=${this._renderMap} @child-connected=${this._renderMap} id="mapid" style="height: 100%">
            <slot></slot>
          </div>
      `;
  }

  _renderMap() {


    this._mcgLayerSupportGroup.clearLayers();

    this.layers.map(layer => {
      if (layer.name !== undefined && layer.items) {
        const layerGroup = new LayerGroup;
        layer.items.map(item => {
          console.log(item.name);
          
          const color1 =   item.tags && item.tags.length>0 && this.tags.tagMap.size>0? this.tags.getItemTags(item)[0].color : layer.color;          
          const marker = new leafletMarker([item.position.coordinates[1], item.position.coordinates[0]], { icon: MarkerIconFactory(layer.shape, color1, 'rgba(88,88,88,0.22)', layer.icon) }).addTo(layerGroup);
          marker.bindPopup(getItemPopup(item , this.tags.getItemTags(item)))
        })

        // add / update layer
        if (this._layers[layer.name]) {
          this._layers[layer.name].remove();
        }
        this._layers[layer.name] = layerGroup;
        this._mcgLayerSupportGroup.checkIn(layerGroup);
        layerGroup.addTo(this._map);


        //update Layer Control
        this._layerControl.remove();
        this._layerControl = new Control.Layers({}, this._layers, { collapsed: false, position: 'bottomleft' }).addTo(this._map);
      }

    })


    //  console.log(this._marker);

    this.marker.map(marker => {

      let mapMarker = null;
      if (marker.latitude && marker.longitude)

        mapMarker = new leafletMarker([marker.latitude, marker.longitude], { icon: MarkerIconFactory("star", '#444e99', '#777', "circle-solid") }).addTo(this._map);

      if (marker.innerHTML) {
        const template = `<div part="popup" class="popup">
            ${marker.innerHTML}
          </div>`;
        if (mapMarker)
          mapMarker.bindPopup(template);

        return mapMarker;
      }
    });
  }
}


declare global {
  interface HTMLElementTagNameMap {
    "map-container": MapContainer;
  }
}