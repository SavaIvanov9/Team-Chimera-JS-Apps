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