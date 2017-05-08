SystemJS.config({
    // tell SystemJS which transpiler to use
    transpiler: 'plugin-babel',
    // tell SystemJS where to look for the dependencies
    map: {
        // 'plugin-babel': 'node_modules/systemjs-plugin-babel/plugin-babel.js',
        // 'systemjs-babel-build': 'node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',

        'plugin-babel': 'https://cdn.rawgit.com/systemjs/plugin-babel/master/plugin-babel.js',
        'systemjs-babel-build': 'https://cdn.rawgit.com/systemjs/plugin-babel/master/systemjs-babel-browser.js',

        // app logic scripts
        'routeManager': 'js/routing/routeManager.js',
        'contentLoader': 'js/routing/screens/contentLoader.js',
        'screenSelector': 'js/routing/screens/screenSelector.js',
        'requestManager': 'js/tools/requestManager.js',
        'localStorageManager': 'js/tools/localStorageManager.js',
        'data': 'js/data/data.js',
        'homeController': 'js/controllers/homeController.js',
        'loginController': 'js/controllers/loginController.js',
        'registerController': 'js/controllers/registerController.js',
        'gameController': 'js/controllers/gameController.js',
        'endController': 'js/controllers/endController.js',

        // object and UI functionalities
        'variables': 'js/gameFunctions/gameVariables.js',
        'dinner': 'js/gameFunctions/food.js',
        'snake': 'js/gameFunctions/classSnake.js',
        'gameArea': 'js/gameFunctions/gameArea.js',
        'collision': 'js/gameFunctions/checkCollision.js',
        'snakeGrowth': 'js/gameFunctions/snakeGrowth.js',
        'gameInit': 'js/gameFunctions/gameInit.js',

        // app start script
        'core': 'js/core.js'
    }
});