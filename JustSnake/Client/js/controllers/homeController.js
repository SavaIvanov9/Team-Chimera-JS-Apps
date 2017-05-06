import { contentLoader } from "contentLoader";
import { data } from "data";

class HomeController {
    initialize() {
        alert("controller works");

        $( "#signout-btn" ).on( "click", function() {
            alert("it works");

            contentLoader.addContent("test");

            data.getUsers().then(
                (result) => {
                    //var result = JSON.parse(users);
                    contentLoader.addContent(result);
                    console.log(result);
                }
            );
        });
    }
}

const homeController = new HomeController();
export { homeController };