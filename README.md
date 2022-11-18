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
        <layer name="places" data="places">
            <menu symbol="" color="" text="" callback="addPlace()"></menu>
            <icon shape="" default-color="#666" symbol=""></icon>
            <popup template="places"></popup>
        </layer>
        <tags></tags>
    </map>
```