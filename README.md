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
    <map latitude="51.3" longitude="9.5" defaultZoom ="10">
        <layer name="places">
            <menu symbol="pointer" color="#777" text="add new place"></menu>
            <icon shape="circle" default-color="#777" symbol="circle"></icon>
            <popup template="places"></popup>
        </layer>
        <tags></tags>
    </map>
    <script async type="module">
        import {placesData} from './src/sample-data.ts'
        let layerPlaces = document.querySelector( '#places' )
        layerPlaces.items = placesData;
    </script>
```