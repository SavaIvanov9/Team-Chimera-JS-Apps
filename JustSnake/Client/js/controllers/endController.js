import { contentLoader } from "contentLoader";
import { data } from "data";
import { localStorageManager } from "localStorageManager";

class EndController {
    initialize(sammy) {
        let currentScore = localStorageManager.getScore();

        $(document).ready(function() {
            contentLoader.addContent(currentScore, "#current-score");
            //$( "#current-score" ).append( currentScore );

            data.getUserScores(sammy).then(
                (result) => {
                    //var result = JSON.parse(users);
                    for(let i = 0; i < result.length; i++) {
                        contentLoader.addContent(`<p>Score: ${result[i].value}  -  Created on: ${result[i].createdOn}`, "#score-list");
                        console.log(result[i].value);
                    }
                }
            );        

            $( "#save-btton" ).on( "click", function() {
                data.saveScore(currentScore, sammy).then(
                    (result) => {
                        alert("Score saved! ");
                        console.log(result);
                    }
                ); 
            });
        });
    }
}

const endController = new EndController();
export { endController };