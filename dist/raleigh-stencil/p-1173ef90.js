"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var r,n,e=(function(r){var n="4.13",e="next";function o(r){if(r.toLowerCase()===e)return e;var n=r&&r.match(/^(\d)\.(\d+)/);return n&&{major:parseInt(n[1],10),minor:parseInt(n[2],10)}}function t(r){return void 0===r&&(r=n),"https://js.arcgis.com/"+r+"/"}function i(r,i){var a=function(r){return!r||o(r)?function(r){void 0===r&&(r=n);var i=t(r),a=o(r);return a!==e&&3===a.major?i+(a.minor<=10?"js/":"")+"esri/css/esri.css":i+"esri/themes/light/main.css"}(r):r}(r),u=function(r){return document.querySelector('link[href*="'+r+'"]')}(a);return u||function(r,n){if(n){var e=document.querySelector(n);e.parentNode.insertBefore(r,e)}else document.head.appendChild(r)}(u=function(r){var n=document.createElement("link");return n.rel="stylesheet",n.href=r,n}(a),i),u}var a={Promise:"undefined"!=typeof window?window.Promise:void 0},u={};function d(r,n,e){var o;e&&(o=function(r,n){var e=function(o){n(o.error||new Error("There was an error attempting to load "+r.src)),r.removeEventListener("error",e,!1)};return r.addEventListener("error",e,!1),e}(r,e));var t=function(){n(r),r.removeEventListener("load",t,!1),o&&r.removeEventListener("error",o,!1)};r.addEventListener("load",t,!1)}function c(r){void 0===r&&(r={}),u=r}function f(){return document.querySelector("script[data-esri-loader]")}function s(){var r=window.require;return r&&r.on}function l(r){void 0===r&&(r={});var n={};[u,r].forEach((function(r){for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}));var e=n.version,o=n.url||t(e);return new a.Promise((function(r,t){var a=f();if(a){var u=a.getAttribute("src");u!==o?t(new Error("The ArcGIS API for JavaScript is already loaded ("+u+").")):s()?r(a):d(a,r,t)}else if(s())t(new Error("The ArcGIS API for JavaScript is already loaded."));else{var c=n.css;c&&i(!0===c?e:c,n.insertCssBefore),n.dojoConfig&&(window.dojoConfig=n.dojoConfig),d(a=function(r){var n=document.createElement("script");return n.type="text/javascript",n.src=r,n.setAttribute("data-esri-loader","loading"),n}(o),(function(){a.setAttribute("data-esri-loader","loaded"),r(a)}),t),document.body.appendChild(a)}}))}function v(r){return new a.Promise((function(n,e){var o=window.require.on("error",e);window.require(r,(function(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];o.remove(),n(r)}))}))}function w(r,n){if(void 0===n&&(n={}),s())return v(r);var e=f(),o=e&&e.getAttribute("src");return!n.url&&o&&(n.url=o),l(n).then((function(){return v(r)}))}var p={getScript:f,isLoaded:s,loadModules:w,loadScript:l,loadCss:i,setDefaultOptions:c,utils:a};r.getScript=f,r.isLoaded=s,r.loadModules=w,r.loadScript=l,r.loadCss=i,r.setDefaultOptions=c,r.utils=a,r.default=p,Object.defineProperty(r,"__esModule",{value:!0})}((r={exports:{}}).exports),r.exports);(n=e)&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default");var o=e.loadModules,t=e.loadCss;export{t as a,o as e};