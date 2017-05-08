import { contentLoader } from "contentLoader";
import { data } from "data";
import { localStorageManager } from "localStorageManager";

class EndController {
    initialize() {
        let currentScore = localStorageManager.getScore();

        $(document).ready(function() {
            contentLoader.addContent(currentScore, "current-score");
        });

        contentLoader.addContent(currentScore);     
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
    }
}

const endController = new EndController();
export { endController };