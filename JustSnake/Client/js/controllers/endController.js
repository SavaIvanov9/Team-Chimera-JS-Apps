import { contentLoader } from "contentLoader";
import { data } from "data";

class EndController {
    initialize() {
        alert("End controller works");

        setTimeout(function(){ 
            $(document).ready(function() {
                contentLoader.addContent("Test score: 300", "current-score");
            });
        
            contentLoader.addContent("Test score: 300");

            alert("End controller works 2");
        
            data.getUsers().then(
                (result) => {
                    //var result = JSON.parse(users);
                    contentLoader.addContent(result[0].id);
                    console.log(result[0].id);
                }
            );   
        }, 1000);
    }
}

const endController = new EndController();
export { endController };