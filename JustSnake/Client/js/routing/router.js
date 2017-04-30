function Router() { }

Router.prototype.init = function(url, callback){
    this.url = url;
    this.callback = callback;
};

function test() {

}

function getRouter() {
    return new Router();
}

export default {getRouter}