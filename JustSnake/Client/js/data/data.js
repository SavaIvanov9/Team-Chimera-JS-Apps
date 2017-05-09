import { requestManager } from 'requestManager';
import { localStorageManager } from "localStorageManager";

class Data {
    getUsers() {
        return requestManager.get('http://localhost:65259/api/user/GetAllUsers');
    }

    login(username, pass) {
        return requestManager.get(`http://localhost:65259/api/user/ValidateUser?userName=${username}&password=${pass}`);
    }

    register(username, pass) {
        return requestManager.get(`http://localhost:65259/api/user/CreateUser?name=${username}&password=${pass}`);
    }

    getUserScores(sammy) {
        if (localStorageManager.getIsUserLogedIn()) {
            return requestManager.get(`http://localhost:65259/api/highscore/GetUserHighScores`, { "Authorization": localStorageManager.getCookie() });
        } else {
            sammy.redirect('#/home');
        }
    }

    saveScore(score, sammy) {
        if (localStorageManager.getIsUserLogedIn()) {
            return requestManager.get(`http://localhost:65259/api/Highscore/SaveScore?value=${score}`, { "Authorization": localStorageManager.getCookie() });
        } else {
            sammy.redirect('#/home');
        }
    }
}

const data = new Data();
export { data };