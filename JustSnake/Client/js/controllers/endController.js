import { contentLoader } from "contentLoader";
import { data } from "data";
import { localStorageManager } from "localStorageManager";

class EndController {
    initialize(sammy) {
        let currentScore = localStorageManager.getScore();

        $(document).ready(function() {
            contentLoader.addContent(currentScore, "current-score");
        
            contentLoader.addContent(currentScore);     
            data.getUserScores(sammy).then(
                (result) => {
                    //var result = JSON.parse(users);
                    for(let i = 0; i < result.length; i++) {
                        contentLoader.addContent(result[i].value);
                        console.log(result[i].value);
                    }
                }
            );        

            $( "#save-btton" ).on( "click", function() {
                data.saveScore(currentScore, sammy).then(
                    (result) => {
                        contentLoader.addContent("</br><p>Score saved</p>")
                        console.log(result);
                    }
                ); 
            });
        });
    }
}

const endController = new EndController();
export { endController };