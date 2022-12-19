This project intends to provide [leaflet](https://leafletjs.com/) as Web Component Library making use of [Lit](https://lit.dev/)

## Getting Started

check out repository

```git clone git@github.com:antontranelis/lit-leaflet.git```

install dependencies

```npm install```

run dev server

```npm run dev```

## API

```html
    <map-container latitude="51.3" longitude="9.5" defaultZoom ="10">
      <map-tags id="tags"></map-tags>
      <map-layer id="places-layer" name="places" color="#777" shape="circle"></map-layer>
      <map-layer id="events-layer" name="events" color="#777" shape="square" icon="calendar-days-solid"></map-layer>
    </map-container>
  <script async type="module">
    import {places,events,tags} from './src/sample-data.ts'
    //set places
    let layerPlaces = document.querySelector( '#places-layer' )
    layerPlaces.items = places;
    //set events
    let layerEvents = document.querySelector( '#events-layer' )
    layerEvents.items = events;
    //set tags
    let tagsElement = document.querySelector( '#tags' )
    tagsElement.data = tags;
  </script>
```