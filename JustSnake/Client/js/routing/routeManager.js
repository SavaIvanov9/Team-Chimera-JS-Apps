import { test } from "test";
import { testRoute } from "testRoute";

import { loadLogin } from "login";

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

        this.get('#/login', () => { loadLogin() });

    });

    $(function () {
        sammy.run("#/");
    })
}
    
return { start }
})();

export { routeManager }