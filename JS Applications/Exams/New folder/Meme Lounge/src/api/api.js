export const settings = {
    host: ''
};

async function request(url, options) {
    try {
        const response = await fetch(url, options);

        if (response.ok === false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        try {
            return await response.json();
        } catch (err) {
            return response;
        }
    }catch (err) {
        console.error(err.message);
        throw err;
    }
}

function createOptions(method = 'get', data) {
    const result = {
        method,
        headers: {}
    };

    if (data) {
        result.headers['Content-Type'] = 'application/json';
        result.body = JSON.stringify(data);
    }

    const token = sessionStorage.getItem('authToken');
    if (token != null) {
        result.headers['X-Authorization'] = token;
    }

    return result;
}

export async function get(url) {
    return request(url, createOptions());
}

export async function post(url, data) {
    return request(url, createOptions('post', data));
}

export async function put(url, data) {
    return request(url, createOptions('put', data));
}

export async function del(url) {
    return request(url, createOptions('delete'));
}

export async function login(email, password) {
    const response = await post(settings.host + '/users/login', { email, password });

    sessionStorage.setItem('username', response.username);
    sessionStorage.setItem('email', response.email);
    sessionStorage.setItem('authToken',response.accessToken)
    sessionStorage.setItem('userId', response._id);
    sessionStorage.setItem('userGender', response.gender);

    return response;
}

export async function register(username,email, password, gender) {
    const response = await post(settings.host + '/users/register', { username, email, password, gender});

    sessionStorage.setItem('username', response.username);
    sessionStorage.setItem('email', response.email);
    sessionStorage.setItem('authToken',response.accessToken)
    sessionStorage.setItem('userId', response._id);
    sessionStorage.setItem('userGender', response.gender);

    return response;
}

export async function logout() {
    const response = await get(settings.host + '/users/logout');

    sessionStorage.removeItem('username');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('authToken')
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('userGender');
}