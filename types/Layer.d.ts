import { LitElement } from 'lit';
import { Marker } from './Marker';
export declare class Layer extends LitElement {
    name: String;
    items: Array<Marker>;
}
declare global {
    interface HTMLElementTagNameMap {
        "map-layer": Layer;
    }
}
