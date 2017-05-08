import { contentLoader } from "contentLoader";
import { data } from "data";
import { localStorageManager } from "localStorageManager";

class HomeController {
    initialize() {
        $(document).ready(function() {
            $( "#logout-btn" ).on( "click", function() {
                localStorageManager.storeCookie(null);
                localStorageManager.storeIsUserLogedIn(false);
                contentLoader.addContent("loged out successfuly");
            });

            $( "#signout-btn" ).on( "click", function() {

                contentLoader.addContent("test");

                data.getUsers().then(
                    (result) => {
                        //var result = JSON.parse(users);
                        contentLoader.addContent(result[0].id);
                        console.log(result[0].id);
                    }
                );
            });
        });
    }
}

const homeController = new HomeController();
export { homeController };