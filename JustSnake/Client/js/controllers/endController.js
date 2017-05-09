import { contentLoader } from "contentLoader";
import { data } from "data";
import { localStorageManager } from "localStorageManager";

class EndController {
    initialize(sammy) {
        let currentScore = localStorageManager.getScore();
        $(document).ready(function() {
            contentLoader.addContent(currentScore, "#current-score");
            data.getUserScores(sammy).then(
                (result) => {
                    for (let i = 0; i < result.length; i++) {
                        contentLoader.addContent(`<p>Score: ${result[i].value}  -  Created on: ${result[i].createdOn}`, "#score-list");
                    }
                }
            );
            $("#save-btton").on("click", function() {
                data.saveScore(currentScore, sammy).then(
                    (result) => {
                        alert(`Score ${currentScore} saved!`);
                    }
                );
            });
        });
    }
}

const endController = new EndController();
export { endController };