/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from './stencil.core';


export namespace Components {
  interface FindMyService {
    'categories': string;
    'council': boolean;
    'layers': string;
  }
  interface MapGallery {
    'groupId': string;
  }
  interface TransitMap {
    'map': string;
    'route': string;
  }
  interface WaterUsage {}
  interface WebMap {
    'address': string;
    'basemap': string;
    'basemapselect': boolean;
    'center': string;
    'collapsewidgets': boolean;
    'darkMode': boolean;
    'dockposition': string;
    'expandedwidget': string;
    'filter': boolean;
    'highlight': boolean;
    'layerlist': boolean;
    'legend': boolean;
    'list': boolean;
    'mapId': string;
    'navigate': boolean;
    'popup': boolean;
    'popupdocked': boolean;
    'querylayer': string;
    'querywhere': string;
    'scene': boolean;
    'sceneId': string;
    'search': boolean;
    'zoom': number;
  }
}

declare global {


  interface HTMLFindMyServiceElement extends Components.FindMyService, HTMLStencilElement {}
  var HTMLFindMyServiceElement: {
    prototype: HTMLFindMyServiceElement;
    new (): HTMLFindMyServiceElement;
  };

  interface HTMLMapGalleryElement extends Components.MapGallery, HTMLStencilElement {}
  var HTMLMapGalleryElement: {
    prototype: HTMLMapGalleryElement;
    new (): HTMLMapGalleryElement;
  };

  interface HTMLTransitMapElement extends Components.TransitMap, HTMLStencilElement {}
  var HTMLTransitMapElement: {
    prototype: HTMLTransitMapElement;
    new (): HTMLTransitMapElement;
  };

  interface HTMLWaterUsageElement extends Components.WaterUsage, HTMLStencilElement {}
  var HTMLWaterUsageElement: {
    prototype: HTMLWaterUsageElement;
    new (): HTMLWaterUsageElement;
  };

  interface HTMLWebMapElement extends Components.WebMap, HTMLStencilElement {}
  var HTMLWebMapElement: {
    prototype: HTMLWebMapElement;
    new (): HTMLWebMapElement;
  };
  interface HTMLElementTagNameMap {
    'find-my-service': HTMLFindMyServiceElement;
    'map-gallery': HTMLMapGalleryElement;
    'transit-map': HTMLTransitMapElement;
    'water-usage': HTMLWaterUsageElement;
    'web-map': HTMLWebMapElement;
  }
}

declare namespace LocalJSX {
  interface FindMyService {
    'categories'?: string;
    'council'?: boolean;
    'layers'?: string;
  }
  interface MapGallery {
    'groupId'?: string;
  }
  interface TransitMap {
    'map'?: string;
    'route'?: string;
  }
  interface WaterUsage {}
  interface WebMap {
    'address'?: string;
    'basemap'?: string;
    'basemapselect'?: boolean;
    'center'?: string;
    'collapsewidgets'?: boolean;
    'darkMode'?: boolean;
    'dockposition'?: string;
    'expandedwidget'?: string;
    'filter'?: boolean;
    'highlight'?: boolean;
    'layerlist'?: boolean;
    'legend'?: boolean;
    'list'?: boolean;
    'mapId'?: string;
    'navigate'?: boolean;
    'popup'?: boolean;
    'popupdocked'?: boolean;
    'querylayer'?: string;
    'querywhere'?: string;
    'scene'?: boolean;
    'sceneId'?: string;
    'search'?: boolean;
    'zoom'?: number;
  }

  interface IntrinsicElements {
    'find-my-service': FindMyService;
    'map-gallery': MapGallery;
    'transit-map': TransitMap;
    'water-usage': WaterUsage;
    'web-map': WebMap;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'find-my-service': LocalJSX.FindMyService & JSXBase.HTMLAttributes<HTMLFindMyServiceElement>;
      'map-gallery': LocalJSX.MapGallery & JSXBase.HTMLAttributes<HTMLMapGalleryElement>;
      'transit-map': LocalJSX.TransitMap & JSXBase.HTMLAttributes<HTMLTransitMapElement>;
      'water-usage': LocalJSX.WaterUsage & JSXBase.HTMLAttributes<HTMLWaterUsageElement>;
      'web-map': LocalJSX.WebMap & JSXBase.HTMLAttributes<HTMLWebMapElement>;
    }
  }
}


