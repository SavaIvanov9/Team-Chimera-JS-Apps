SystemJS.config({
 // tell SystemJS which transpiler to use
 transpiler: 'plugin-babel',
 // tell SystemJS where to look for the dependencies
 map: {
  'plugin-babel': 'node_modules/systemjs-plugin-babel/plugin-babel.js',
  'systemjs-babel-build': 'node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',

  // modules
  'test': 'js/test.js',
  'testRoute': 'js/testRoute.js',

  'login': 'js/routing/screens/login.js',
  'routeManager': 'js/routing/routeManager.js',

  // app start script
  'core': 'js/core.js'
 }
});