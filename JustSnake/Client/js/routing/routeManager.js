import { screenSelector } from "screenSelector";

const routeManager = (function() {

function loadRoutes() {
    
    let sammy = Sammy(function () {
        this.get('#/', (sammy) => sammy.redirect('#/home'));

        this.get('#/home', () => { screenSelector.loadHome() });
        this.get('#/login', () => { screenSelector.loadLogin() });
        this.get('#/register', () => { screenSelector.loadRegister() });
        this.get('#/game', () => { screenSelector.loadGameScreen() });
        this.get('#/end', () => { screenSelector.loadEndScreen() });
    });

    $(function () {
        sammy.run("#/");
    })
}
    
return { loadRoutes }
})();

export { routeManager }