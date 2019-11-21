# web-map



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description     | Type     | Default     | Example     |
| -------- | --------- | --------------- | -------- | ----------- | ----------- |
| `mapId`  | `map-id`   | map ID from ArcGIS Online | `string` | `undefined` | 2e42cd610a4e43af9c732ac89a400a63 |
| `sceneId`   | `scene-id`    | scene ID from ArcGIS Online | `string` | `undefined` | 2e42cd610a4e43af9c732ac89a400a63 |
| `scene` | `scene`  | show in 3D | `boolean` | `false` | true or false |
| `zoom` | `zoom`  | zoom level (0 (world) to 20 (street))| `number` | `undefined` | 16 |
| `basemap` | `basemap`  | basemap, use if you don't have a map ID or want to override| `string` | `undefined` | https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#basemap |
| `search` | `search`  | show search box| `boolean` | `false` | true or false |
| `layerlist` | `layerlist`  | show search box| `boolean` | `false` | true or false |
| `legend` | `legend`  | show search box| `boolean` | `false` | true or false |
| `basemapselect` | `basemapselect`  | show basemap gallery| `boolean` | `false` | true or false |
| `address` | `address`  | zoom to address | `string` | `undefined` | 222 W Hargett St, Raleigh, NC 27601 |
| `navigate` | `navigate`  | show search box| `boolean` | `true` | true or false |
| `popup` | `popup`  | show search box| `boolean` | `true` | true or false |
| `popupdocked` | `popupdocked`  | dock the popup to the side | `boolean` | `false` | true or false |
| `dockposition` | `dockposition`  | where to dock the popup | `string` | `auto` | auto, top-left, top-center,top-right,bottom-left,bottom-center,bottom-right |
| `highlight` | `highlight`  | highlight the searched feature | `boolean` | `false` | true or false |
| `collapsewidgets` | `collapsewidgets`  | collapse widgets in upper right corner (true or false) | `boolean` | `false` | true or false |
| `expandedwidget` | `expandedwidget`  | widget to expand by default | `boolean` | `false` | layerlist,basemapselect, or legend |
| `center` | `center`  | the coordinates to center the map to | `string` | `undefined` | -78.5555,35.55555 |
| `darkMode` | `dark-mode`  | display widgets in dark mode | `boolean` | `false` | true or false |



----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
