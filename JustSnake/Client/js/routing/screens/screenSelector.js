import { contentLoader } from "contentLoader";
import { homeController } from "homeController";
import { loginController } from "loginController";
import { registerController } from "registerController";
import { gameController } from "gameController";
import { endController } from "endController";

class ScreenSelector {
     loadHome() {
        //alert("Loading Home Screen route...");
        contentLoader.loadHtml();
        homeController.initialize();
    }

    loadLogin() {
        //alert("Loading Login Screen route...");
        contentLoader.loadHtml("login");
        loginController.initialize();
    }

    loadRegister() {
        //alert("Loading Register Screen route...");
        contentLoader.loadHtml("register");
        registerController.initialize();
    }

    loadGameScreen() {
        //alert("Loading Game Screen route...");
        contentLoader.loadHtml("game");
        gameController.initialize();
    }

    loadEndScreen() {
        //alert("Loading End Screen route...");
        contentLoader.loadHtml("end");
        endController.initialize();
    }
}

const screenSelector = new ScreenSelector();
export { screenSelector };