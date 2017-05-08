import { contentLoader } from "contentLoader";
import { data } from "data";

class HomeController {
    initialize() {
        $( "#signout-btn" ).on( "click", function() {
            alert("it works");

            contentLoader.addContent("test");

            data.getUsers().then(
                (result) => {
                    //var result = JSON.parse(users);
                    contentLoader.addContent(result[0].id);
                    console.log(result[0].id);
                }
            );
        });
    }
}

const homeController = new HomeController();
export { homeController };