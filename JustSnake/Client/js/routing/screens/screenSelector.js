import { contentLoader } from "contentLoader";
import { homeController } from "homeController";
import { loginController } from "loginController";
import { registerController } from "registerController";
import { gameController } from "gameController";
import { endController } from "endController";
import { authenticator } from "authenticator";

class ScreenSelector {
     loadHome() {
        contentLoader.loadHtml()
            .then(() => { 
                homeController.initialize();
            }
        );
    }

    loadLogin() {
        contentLoader.loadHtml("login")
            .then(() => { 
                loginController.initialize();
            }
        );       
    }

    loadRegister() {
        contentLoader.loadHtml("register")
            .then(() => { 
                registerController.initialize();
            }
        );
    }

    loadGameScreen(sammy) {
         var isUserLogedIn = authenticator.redirectIfNotLogedIn(sammy);
         
         if(isUserLogedIn) {
            contentLoader.loadHtml("game")
                .then(() => { 
                    gameController.initialize(sammy);
                }
            );
         }
    }

    loadEndScreen(sammy) {
        authenticator.redirectIfNotLogedIn(sammy).then(
            contentLoader.loadHtml("end")
                .then(() => { 
                    endController.initialize(sammy);
                }
            )
        );
    }
}

const screenSelector = new ScreenSelector();
export { screenSelector };