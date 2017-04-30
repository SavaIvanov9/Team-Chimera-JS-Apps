import { test } from "test";

const routeManager = (function() {

function start() {
    
    let sammy = Sammy(function () {

        this.get('#/test', function() {
            alert("Test route started");
            console.log("Test route started")
            test();
        });
    });

    $(function () {
        sammy.run("#/");
    })
}
    
return {start}
})();

export { routeManager }