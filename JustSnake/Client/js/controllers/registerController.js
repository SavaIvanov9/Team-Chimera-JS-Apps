import { contentLoader } from "contentLoader";
import { data } from "data";
import { localStorageManager } from "localStorageManager";

class RegisterController {
    initialize() {
        $(document).ready(function() {
            $("#register-button").click(function() {
                var name = $("#user").val();
                var password = $("#pwd").val();         
                alert(name + " " + password);           
                data.register(name, password).then(
                    (result) => {
                        localStorageManager.storeCookie(result);
                        localStorageManager.storeIsUserLogedIn(true);
                        contentLoader.addContent(result);
                        console.log(result);
                    }
                );          
                $("#play-btn").css({"display":"block"});
            })
        });
     }
}

const registerController = new RegisterController();
export { registerController };