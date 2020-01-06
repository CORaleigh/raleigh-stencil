'use strict';

const core = require('./core-7a9a1188.js');

core.patchBrowser().then(options => {
  return core.bootstrapLazy([["find-my-service.cjs",[[0,"find-my-service",{"categories":[1],"layers":[1],"council":[4],"webmaps":[32],"maps":[32],"councilInfo":[32]}]]],["map-gallery.cjs",[[0,"map-gallery",{"groupId":[1,"group-id"],"items":[32]}]]],["transit-map.cjs",[[0,"transit-map",{"route":[1],"map":[1],"name":[32],"vehicles":[32]}]]],["web-map.cjs",[[0,"web-map",{"mapId":[1,"map-id"],"sceneId":[1,"scene-id"],"zoom":[2],"search":[4],"layerlist":[4],"legend":[4],"address":[1],"navigate":[4],"popup":[4],"querywhere":[1],"querylayer":[1],"filter":[4],"popupdocked":[4],"dockposition":[1],"highlight":[4],"scene":[4],"basemap":[1],"basemapselect":[4],"collapsewidgets":[4],"expandedwidget":[1],"center":[1],"darkMode":[4,"dark-mode"],"list":[4],"divId":[32],"features":[32]}]]]], options);
});
