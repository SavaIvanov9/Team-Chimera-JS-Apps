import { contentLoader } from "contentLoader";
import { data } from "data";
import { localStorageManager } from "localStorageManager";

class HomeController {
    initialize() {
        $(document).ready(function() {
            $("#logout-btn").on("click", function() {
                localStorageManager.storeCookie(null);
                localStorageManager.storeIsUserLogedIn(false);
                alert("Loged out successfuly!");
            });
        });
    }
}

const homeController = new HomeController();
export { homeController };