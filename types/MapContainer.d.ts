import { LitElement } from 'lit';
import { Map as leafletMap } from 'leaflet';
import { Point } from 'geojson';
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
export declare class MapContainer extends LitElement {
    latitude: number;
    longitude: number;
    defaultZoom: number;
    items: Item[];
    _marker: Marker[];
    private _map;
    private markerRed;
    static styles: import("lit").CSSResult;
    constructor();
    firstUpdated(): void;
    render(): import("lit-html").TemplateResult<1>;
    _renderMap(): void;
    _hasValidMapData(): 0 | leafletMap;
}
declare global {
    interface HTMLElementTagNameMap {
        "map-container": MapContainer;
    }
}
