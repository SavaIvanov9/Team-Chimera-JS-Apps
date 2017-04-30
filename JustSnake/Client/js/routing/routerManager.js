//import QP from '../controllers/questionPageController.js';
import LP from '../controllers/loginPageController.js';
//import CP from '../controllers/categoryPageController.js';
import Factory from './routerFactory.js';
//import Device from './router.js'

function routerManager() {
    var routerFactory = new Factory.RouterFactory();

    // routerFactory.addRoute({
    //     url: "/question",
    //     callback: QP.init

    // });

    // routerFactory.addRoute({
    //     url: "/category",
    //     callback: CP.categoryPageIIFE.init
    // });

    routerFactory.addRoute({
        url: "/",
        callback: LP.init,
        default:true
    });

    routerFactory.init();
}

export default {routerManager};