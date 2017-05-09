class LocalStorageManager {
    storeScore(score) {
        localStorage.setItem("currentScore", score)
    }

    getScore() {
        return +(localStorage.getItem("currentScore"));
    }

    storeCookie(cookie) {
        localStorage.setItem("cookie", cookie)
    }

    getCookie() {
        return localStorage.getItem("cookie");
    }

    storeIsUserLogedIn(bool) {
        localStorage.setItem("IsUserLogedIn", bool)
    }

    getIsUserLogedIn() {
        var result = localStorage.getItem("IsUserLogedIn");
        if(result == null) {
            result = false;
        }

        return result;
    }
}

const localStorageManager = new LocalStorageManager();
export { localStorageManager };