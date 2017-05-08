import { contentLoader } from "contentLoader";
import { data } from "data";
import { localStorageManager } from "localStorageManager";

class LoginController {
    initialize() {
        $(document).ready(function() {

            $("#log-in-button").click(function() {
                var name = $("#user").val();
                //var email = $("#pwd").val();
                var password = $("#pwd").val();
                //var cpassword = $("#cpassword").val();

                alert(name + " " + password);

                data.login(name, password).then(
                    (result) => {            
                        localStorageManager.storeCookie(result);
                        localStorageManager.storeIsUserLogedIn(true);
                        contentLoader.addContent(result);
                        console.log(result);
                    }
                );

                $("#play-btn").css({"display":"block"});
            });
        });
    }
}

const loginController = new LoginController();
export { loginController };