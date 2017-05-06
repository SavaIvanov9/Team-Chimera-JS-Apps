import { requestManager } from 'requestManager';

class Data {
    getUsers() {
        // Add authentication
        return requestManager.get('http://localhost:65259/api/user/GetAllUsers');
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