import { contentLoader } from "contentLoader";

class ScreenSelector {
    loadHome() {
        alert("Loading Home Screen route...");
        contentLoader.setHtml("homeScreen");
    }

    loadLogin() {
        alert("Loading Login Screen route...");
        contentLoader.setHtml("loginScreen");
    }

    loadRegister() {
        alert("Loading Register Screen route...");
        contentLoader.setHtml("registerScreen");
    }

    loadGameScreen() {
        alert("Loading Game Screen route...");
        contentLoader.setHtml("gameScreen");
    }

    loadEndScreen() {
        alert("Loading End Screen route...");
        contentLoader.setHtml("endScreen");
    }
}

const screenSelector = new ScreenSelector();
export { screenSelector };