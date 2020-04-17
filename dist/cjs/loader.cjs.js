'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-7a9a1188.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["find-my-service.cjs",[[0,"find-my-service",{"categories":[1],"layers":[1],"council":[4],"webmaps":[32],"maps":[32],"councilInfo":[32]}]]],["map-gallery.cjs",[[0,"map-gallery",{"groupId":[1,"group-id"],"items":[32]}]]],["transit-map.cjs",[[0,"transit-map",{"route":[1],"map":[1],"name":[32],"vehicles":[32]}]]],["water-usage.cjs",[[0,"water-usage",{"shower1":[32],"shower2":[32],"bath1":[32],"bath2":[32],"toilet":[32],"teeth":[32],"shaving":[32],"washing":[32],"dishwasher":[32],"dishes":[32],"clothes":[32],"outdoor":[32],"dripping":[32],"leaking":[32],"indoor":[32],"sliders":[32]}]]],["web-map.cjs",[[0,"web-map",{"mapId":[1,"map-id"],"sceneId":[1,"scene-id"],"zoom":[2],"search":[4],"layerlist":[4],"legend":[4],"address":[1],"navigate":[4],"popup":[4],"querywhere":[1],"querylayer":[1],"filter":[4],"popupdocked":[4],"dockposition":[1],"highlight":[4],"scene":[4],"basemap":[1],"basemapselect":[4],"collapsewidgets":[4],"expandedwidget":[1],"center":[1],"darkMode":[4,"dark-mode"],"list":[4],"divId":[32],"features":[32]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
