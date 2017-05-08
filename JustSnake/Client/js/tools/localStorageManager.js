class LocalStorageManager {
    storeScore(score) {
        localStorage.setItem("currentScore", score)
    }

    getScore() {
        return +(localStorage.getItem("currentScore"));
    }
}

const localStorageManager = new LocalStorageManager();
export { localStorageManager };