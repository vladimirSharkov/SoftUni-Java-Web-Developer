import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getItems() {
    return api.get(host + '/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc')
}

export async function createItem(data) {
    return api.post(host + '/data/ideas', data)
}

export async function getItemById(id) {
    return await api.get(host + '/data/ideas/' + id)
}

export async function deleteItem(id) {
    return await api.del(host + '/data/ideas/' + id)
}