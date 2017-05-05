import { test } from "test";
import { testRoute } from "testRoute";

import { screenSelector } from "screenSelector";

const routeManager = (function() {

function start() {
    
    let sammy = Sammy(function () {

        this.get('#/test', function() {
            // alert("Test route started");
            // console.log("Test route started")
            // test();

            testRoute();
        });

        this.get('#/', (sammy) => sammy.redirect('#/login'));

        this.get('#/login', () => { screenSelector.loadLogin() });
        this.get('#/game', () => { screenSelector.loadGameScreen() });
        this.get('#/end', () => { screenSelector.loadEndScreen() });
    });

    $(function () {
        sammy.run("#/");
    })
}
    
return { start }
})();

export { routeManager }