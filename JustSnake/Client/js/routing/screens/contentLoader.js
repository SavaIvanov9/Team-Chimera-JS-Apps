import { requestManager } from 'requestManager';

class ContentLoader {

    setHtml(fileName, element) {
        if(fileName == null) {
            fileName = "loginScreen";
        }

        if(element == null) {
            element = "#container";
        }

        return requestManager.get(`html/${fileName}.html`)
            .then(html => {
                $(element).html(html);
            }).catch(console.log);
    }
}

const contentLoader = new ContentLoader();
export { contentLoader };