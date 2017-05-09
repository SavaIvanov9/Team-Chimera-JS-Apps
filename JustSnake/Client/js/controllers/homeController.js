import { contentLoader } from "contentLoader";
import { data } from "data";
import { localStorageManager } from "localStorageManager";

class HomeController {
    initialize() {
        $(document).ready(function() {
            $( "#logout-btn" ).on( "click", function() {
                localStorageManager.storeCookie(null);
                localStorageManager.storeIsUserLogedIn(false);
                alert("Loged out successfuly!");
                //contentLoader.addContent("loged out successfuly");
                //contentLoader.addContent(`<div class="alert alert-success"><strong>Success!</strong> This alert box could indicate a successful or positive action.</div>`);
            });
        });
    }
}

const homeController = new HomeController();
export { homeController };