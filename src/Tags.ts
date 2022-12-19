import { LitElement, PropertyValueMap } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { Item } from './Item';
import { Tag } from './MapContainer';

@customElement('map-tags')
export class Tags extends LitElement {

  @property({ type: Array<Tag> })
  data: Tag[] = [];

  tagMap!: Map<number,Tag>;

  protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    this.tagMap = new Map(this.data.map(tag => [tag.id, tag]));
    const event = new Event('child-connected', { bubbles: true, composed: true });
    this.dispatchEvent(event);
  }

  getItemTags(item: Item)  {   
    const tags: Tag[] = [];
    item.tags?.forEach(element => {        
        if (this.tagMap.has(element)) { tags.push(this.tagMap.get(element)!)}
    });
    return tags;
};

}

declare global {
  interface HTMLElementTagNameMap {
    "map-tags": Tags;
  }
}