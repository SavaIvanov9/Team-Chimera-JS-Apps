import { localStorageManager } from "localStorageManager";

class Authenticator {
    redirectIfNotLogedIn(sammy) {
        let isUserLogedIn = localStorage.getItem("IsUserLogedIn");

        if(isUserLogedIn === "false" || isUserLogedIn === null || isUserLogedIn === "null") {
            sammy.redirect('#/home');
        }

        return isUserLogedIn;
    }
}

const authenticator = new Authenticator();
export { authenticator };