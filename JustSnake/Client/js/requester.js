class Requester {
// function request(url, type, body, headers) {
//   const promise = new Promise((resolve, reject) => $.ajax({
//     url,
//     type,
//     contentType: 'application/json',
//     headers,
//     data: body,
//     success: resolve,
//     error: reject
//   }));

//   return promise;
// }

// export function get(url, headers = {}) {
//   return request(url, 'GET', '', headers);
// }

// export function post(url, body, headers = {}) {
//   return request(url, 'POST', JSON.stringify(body), headers);
// }

// export function put(url, body, headers = {}) {
//   return request(url, 'PUT', JSON.stringify(body), headers);
// }

    request(url, type, body, headers) {
        const promise = new Promise((resolve, reject) => $.ajax({
            url,
            type,
            contentType: 'application/json',
            headers,
            data: body,
            success: resolve,
        error: reject
    }));

    return promise;
    }

    get(url, headers = {}) {
        return request(url, 'GET', '', headers);
    }

    post(url, body, headers = {}) {
        return request(url, 'POST', JSON.stringify(body), headers);
    }

    put(url, body, headers = {}) {
        return request(url, 'PUT', JSON.stringify(body), headers);
    }
}

const requester = new Requester();
export { requester };