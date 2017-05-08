import { contentLoader } from "contentLoader";
import { homeController } from "homeController";
import { loginController } from "loginController";
import { registerController } from "registerController";
import { gameController } from "gameController";
import { endController } from "endController";

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
        contentLoader.loadHtml("game")
            .then(() => { 
                gameController.initialize(sammy);
            }
        );
    }

    loadEndScreen() {
        contentLoader.loadHtml("end")
            .then(() => { 
                endController.initialize();
        });
    }
}

const screenSelector = new ScreenSelector();
export { screenSelector };