import { requestManager } from 'requestManager';

class Data {
    getUsers() {
        // Add authentication
        return requestManager.get('http://localhost:65259/api/user/GetAllUsers');
    }

    login(username, pass) {
        // return requestManager.get("http://localhost:65259/api/user/CreateUser?name="+username+"&password="+pass);
        return requestManager.get(` http://localhost:65259/api/user/ValidateUser?userName=${username}&password=${pass}`);
        //return requestManager.get(`http://localhost:65259/api/user/CreateUser?name=go6o111&password=go6o111`);
    }

    register(username, pass) {
        // return requestManager.get("http://localhost:65259/api/user/CreateUser?name="+username+"&password="+pass);
        return requestManager.get(`http://localhost:65259/api/user/CreateUser?name=${username}&password=${pass}`);
        //return requestManager.get(`http://localhost:65259/api/user/CreateUser?name=go6o111&password=go6o111`);
    }

    getUserScores() {
        return requestManager.get(`http://localhost:65259/api/highscore/GetUserHighScores`, {"Authorization":"9tbHYXOwtKC+4gF9euCXA9TR41XmnUlsWJwIn+lUpL91Y/FPFsy+K/DX/3fy+rkF/5nKoKJRdMeSA2umAPDYz/F5TkTh8liW/4MIVTsgkGzMwVuqlWe3l2m+mWiDrbMk"});
    }

    saveScore(score) {
        return requestManager.get(` http://localhost:65259/api/Highscore/SaveScore?value=${score}`, {"Authorization":"9tbHYXOwtKC+4gF9euCXA9TR41XmnUlsWJwIn+lUpL91Y/FPFsy+K/DX/3fy+rkF/5nKoKJRdMeSA2umAPDYz/F5TkTh8liW/4MIVTsgkGzMwVuqlWe3l2m+mWiDrbMk"});
    }

//, "Access-Control-Allow-Origin"
// export function login(username, passHash) {
//   const body = {
//     username,
//     passHash
//   };

//   return requester.put('api/auth', body);
// }

// export function register(username, passHash) {
//   const body = {
//     username,
//     passHash
//   };

//   return requester.post('api/users', body);
// }
}

const data = new Data();
export { data };