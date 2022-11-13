import { LitElement, PropertyValues } from 'lit';
import { Map } from 'leaflet';
export interface MarkerInformation {
    title: string;
    text: string;
    latitude: number;
    longitude: number;
}
export declare class MapContainer extends LitElement {
    latitude: number;
    longitude: number;
    defaultZoom: number;
    markers: {
        title: string;
        text: string;
        latitude: number;
        longitude: number;
    }[];
    private mapMarkers;
    private _map;
    private markerRed;
    static styles: import("lit").CSSResult;
    constructor();
    firstUpdated(): void;
    render(): import("lit-html").TemplateResult<1>;
    updated(_changedProperties: PropertyValues): void;
    _updateMarkers(): void;
    _hasValidMapData(): 0 | Map;
}
