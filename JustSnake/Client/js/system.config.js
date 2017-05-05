SystemJS.config({
 // tell SystemJS which transpiler to use
 transpiler: 'plugin-babel',
 // tell SystemJS where to look for the dependencies
 map: {
  'plugin-babel': 'node_modules/systemjs-plugin-babel/plugin-babel.js',
  'systemjs-babel-build': 'node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',

  // app logic scripts
  'test': 'js/test.js',
  'testRoute': 'js/testRoute.js',

  'routeManager': 'js/routing/routeManager.js',
  'contentLoader': 'js/routing/screens/contentLoader.js',
  'screenSelector': 'js/routing/screens/screenSelector.js',
    
  'requestManager': 'js/tools/requestManager.js',

  //controllers

  // app start script
  'core': 'js/core.js'
 }
});