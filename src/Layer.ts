import { LitElement, PropertyValueMap } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { Item } from './Item';


@customElement('map-layer')
export class Layer extends LitElement {

  @property({ type: String })
  name: string = "";

  @property({ type: String })
  color: string = "#777";

  @property({ type: String })
  shape: string = "circle";

  @property({ type: String })
  icon: string = "circle-solid";


  @property({ type: Array<Item> })
  items: Item[] = [];

  protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    const event = new Event('child-connected', { bubbles: true, composed: true });
    this.dispatchEvent(event);
  }

}

declare global {
  interface HTMLElementTagNameMap {
    "map-layer": Layer;
  }
}