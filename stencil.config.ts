import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'raleigh-stencil',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }    
  ],
  commonjs: {
    namedExports: {
      "node_modules/esri-loader/dist/umd/esri-loader.js": [
        "getScript",
        "isLoaded",
        "loadModules",
        "loadScript",
        "loadCss",
        "utils"
      ]
    }
  },  
  plugins: [
    sass()
  ]
};
