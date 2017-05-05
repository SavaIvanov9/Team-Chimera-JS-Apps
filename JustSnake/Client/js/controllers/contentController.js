import * as requester from 'requester';

class ContentController {

    setHtml(fileName, element) {
        if(fileName == null) {
            fileName = "loginScreen";
        }

        if(element == null) {
            element = "#container";
        }

        return requester.get(`html/${fileName}.html`)
            .then(html => {
                $(element).html(html);
            }).catch(console.log);
    }
}

const contentController = new ContentController();
export { contentController };