import { contentLoader } from "contentLoader";

class ScreenSelector {
    loadLogin() {
        alert("Loading login route...");
        contentLoader.setHtml();
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