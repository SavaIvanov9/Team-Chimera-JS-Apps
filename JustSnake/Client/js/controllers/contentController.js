class ContentController {

    getHtml(fileName) {
        let htmlPath = `html/${fileName}.html`;

        return new Promise((resolve, reject) => {
            $.get(htmlPath)
                .done(resolve)
                .fail(reject);
        });
    }

    setHtml(fileName, element) {
        if(fileName == null) {
            fileName = "loginScreen";
        }

        if(element == null) {
            element = "#container";
        }

        return this.getHtml(fileName)
            .then(html => {
                $(element).html(html);
            }).catch(console.log);
    }
}

const contentController = new ContentController();
export { contentController };