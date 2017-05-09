import { contentLoader } from "contentLoader";
import { data } from "data";
import { localStorageManager } from "localStorageManager";

class LoginController {
    initialize() {
        $(document).ready(function() {
            $("#log-in-button").click(function() {
                var name = $("#user").val();
                var password = $("#pwd").val();
                data.login(name, password).then(
                    (result) => {
                        if (result !== "null") {
                            localStorageManager.storeCookie(result);
                            localStorageManager.storeIsUserLogedIn(true);
                            $("#play-btn").css({ "display": "block" });
                        } else {
                            alert("Log in unsuccessful! Entrer correct user and password!");
                        }
                    }
                );
                if (localStorageManager.getCookie() === "null") {
                    alert("Log in unsuccessful! Entrer correct user and password!");
                }
            });
        });
    }
}

const loginController = new LoginController();
export { loginController };