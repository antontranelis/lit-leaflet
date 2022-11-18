import { LitElement, } from 'lit'
import { customElement, property } from 'lit/decorators.js'


@customElement('layer')
export class Layer extends LitElement {

  @property({ type: Number })
  latitude: number = 47.38991;

  @property({ type: Number })
  longitude: number = 8.51604;

}

declare global {
  interface HTMLElementTagNameMap {
    "layer": Layer;
  }
}