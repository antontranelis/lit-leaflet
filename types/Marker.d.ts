import { LitElement } from 'lit';
export declare class Marker extends LitElement {
    latitude: number;
    longitude: number;
}
declare global {
    interface HTMLElementTagNameMap {
        "marker": Marker;
    }
}
