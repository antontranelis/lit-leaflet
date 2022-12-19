import { Point } from 'geojson'
import { Tag } from './MapContainer';
import { replaceURLs } from './Utils/ReplaceURLs';


export class Item {
    id: number = 0;
    name: string = "";
    text: string = "";
    position: Point = {
        type: 'Point',
        coordinates: [0, 0]
    }
    tags?: number[];
    date_created?: string;
    date_updated?: string;



}

export function getItemPopup(item: Item, tags: Tag[]): string {
    return `<div part="popup" class="popup">
    <h3>${item.name}</h3>
    <div class="popup-text">${replaceURLs(item.text)}</div>
    ${tags?.map((tag: Tag) => (
        `<span style="fontWeight: bold; display: inline-block; color: #fff; padding: .3rem; border-radius: .5rem; background-color: ${tag.color}; margin: .2rem; fontSize: 100%;" >#${tag.name}</span>`
    )).join('')}

  </div>`
}

export class EventItem extends Item {
    start?: string;
    end?: string;
}