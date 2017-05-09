import { requestManager } from 'requestManager';
import { localStorageManager } from "localStorageManager";

class Data {
    getUsers() {
        return requestManager.get('http://justsnakewebservices1.azurewebsites.net/api/user/GetAllUsers');
    }

    login(username, pass) {
        return requestManager.get(`http://justsnakewebservices1.azurewebsites.net/api/user/ValidateUser?userName=${username}&password=${pass}`);
    }

    register(username, pass) {
        return requestManager.get(`http://justsnakewebservices1.azurewebsites.net/api/user/CreateUser?name=${username}&password=${pass}`);
    }

    getUserScores(sammy) {
        if(localStorageManager.getIsUserLogedIn()) {
            return requestManager.get(`http://justsnakewebservices1.azurewebsites.net/api/highscore/GetUserHighScores`, {"Authorization":localStorageManager.getCookie()});
        }
        else {
            sammy.redirect('#/home');
        }
    }

    saveScore(score, sammy) {
        if(localStorageManager.getIsUserLogedIn()) {
            return requestManager.get(`http://justsnakewebservices1.azurewebsites.net/api/Highscore/SaveScore?value=${score}`, {"Authorization":localStorageManager.getCookie()});
        }
        else {
            sammy.redirect('#/home');
        }
    }
}

const data = new Data();
export { data };