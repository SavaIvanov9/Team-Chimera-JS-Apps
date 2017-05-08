import { contentLoader } from "contentLoader";
import { data } from "data";

class EndController {
    initialize() {
        let currentScore = 350;
        alert("End controller works");

        setTimeout(function(){ 
            $(document).ready(function() {
                contentLoader.addContent(currentScore, "current-score");
            });
        
            contentLoader.addContent(currentScore);

            //alert("End controller works 2");
        
            data.getUserScores().then(
                (result) => {
                    //var result = JSON.parse(users);
                    for(let i = 0; i < result.length; i++) {
                        contentLoader.addContent(result[i].value);
                        console.log(result[i].value);
                    }
                }
            );  

            $( "#save-btton" ).on( "click", function() {
                data.saveScore(currentScore).then(
                (result) => {
                    console.log(result);
                }
            ); 
            });
        }, 100);
    }
}

const endController = new EndController();
export { endController };