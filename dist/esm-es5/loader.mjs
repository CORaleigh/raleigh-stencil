import { a as patchEsm, b as bootstrapLazy } from './core-f49384c5.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["find-my-service", [[0, "find-my-service", { "categories": [1], "layers": [1], "council": [4], "webmaps": [32], "maps": [32], "councilInfo": [32] }]]], ["map-gallery", [[0, "map-gallery", { "groupId": [1, "group-id"], "items": [32] }]]], ["transit-map", [[0, "transit-map", { "route": [1], "map": [1], "name": [32], "vehicles": [32] }]]], ["water-usage", [[0, "water-usage", { "shower1": [32], "shower2": [32], "bath1": [32], "bath2": [32], "toilet": [32], "teeth": [32], "shaving": [32], "washing": [32], "dishwasher": [32], "dishes": [32], "clothes": [32], "outdoor": [32], "dripping": [32], "leaking": [32], "indoor": [32], "sliders": [32] }]]], ["web-map", [[0, "web-map", { "mapId": [1, "map-id"], "sceneId": [1, "scene-id"], "zoom": [2], "search": [4], "layerlist": [4], "legend": [4], "address": [1], "navigate": [4], "popup": [4], "querywhere": [1], "querylayer": [1], "filter": [4], "popupdocked": [4], "dockposition": [1], "highlight": [4], "scene": [4], "basemap": [1], "basemapselect": [4], "collapsewidgets": [4], "expandedwidget": [1], "center": [1], "darkMode": [4, "dark-mode"], "list": [4], "divId": [32], "features": [32] }]]]], options);
    });
};
export { defineCustomElements };
