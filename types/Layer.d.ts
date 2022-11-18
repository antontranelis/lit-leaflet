import { LitElement } from 'lit';
export declare class Layer extends LitElement {
    latitude: number;
    longitude: number;
}
declare global {
    interface HTMLElementTagNameMap {
        "layer": Layer;
    }
}
