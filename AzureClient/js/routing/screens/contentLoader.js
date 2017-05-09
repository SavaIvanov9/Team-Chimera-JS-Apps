import { requestManager } from 'requestManager';

class ContentLoader {

    loadHtml(fileName, element) {
        if(fileName == null) {
            fileName = "home";
        }

        if(element == null) {
            element = "#container";
        }

        return requestManager.get(`html/${fileName}Screen.html`)
            .then((html) => {
                $(element).html(html);
            }).catch(console.log);
    }

    loadController(fileName, element) {
        if(fileName == null) {
            fileName = "home";
        }

        if(element == null) {
            element = "#container";
        }

        $(element).append(`<script src="js/controllers/${fileName}Controller.js"></script>`);
    }

    addContent(content, element) {
        if(element == null) {
            element = "#container";
        }

        $(element).append(content);
    }
}

const contentLoader = new ContentLoader();
export { contentLoader };