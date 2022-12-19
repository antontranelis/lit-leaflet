import { LitElement } from 'lit';
export declare class Marker extends LitElement {
    latitude: number;
    longitude: number;
    connectedCallback(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "map-marker": Marker;
    }
}
