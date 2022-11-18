import { LitElement, } from 'lit'
import { customElement, property } from 'lit/decorators.js'


@customElement('map-marker')
export class Marker extends LitElement {

  @property({ type: Number, reflect: true })
  latitude: number = 51.38991;

  @property({ type: Number, reflect: true })
  longitude: number = 8.9;

  connectedCallback(): void {
    super.connectedCallback();
    console.log("connected Callback Marker");

    const event = new Event('marker-added', {bubbles: true, composed: true});
    this.dispatchEvent(event);
    
  }

}



declare global {
  interface HTMLElementTagNameMap {
    "map-marker": Marker;
  }
}