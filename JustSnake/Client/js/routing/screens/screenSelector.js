import { contentLoader } from "contentLoader";
import { homeController } from "homeController";
import { gameController } from "gameController";

class ScreenSelector {
    loadHome() {
        alert("Loading Home Screen route...");
        contentLoader.loadHtml();
        //contentLoader.loadController();
        //
        homeController.initialize();
    }

    loadLogin() {
        alert("Loading Login Screen route...");
        contentLoader.loadHtml("login");
    }

    loadRegister() {
        alert("Loading Register Screen route...");
        contentLoader.loadHtml("register");
    }

    loadGameScreen() {
        alert("Loading Game Screen route...");
        contentLoader.loadHtml("game");
        gameController.initialize();
    }

    loadEndScreen() {
        alert("Loading End Screen route...");
        contentLoader.loadHtml("end");
    }
}

const screenSelector = new ScreenSelector();
export { screenSelector };