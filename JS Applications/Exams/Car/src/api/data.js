import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getItems() {
    return api.get(host + '/data/cars?sortBy=_createdOn%20desc')
}

export async function getItemById(id) {
    return api.get(host + '/data/cars/' + id)
}

export async function createItem(data) {
    return await api.post(host + '/data/cars', data)
}

export async function editItem(id, data) {
    return await api.put(host + '/data/cars/' + id, data)
}

export async function deleteItem(id) {
    return await api.del(host + '/data/cars/' + id)
}

export async function getMyItems() {
    const userId = sessionStorage.getItem('userId')
    return api.get(host + `/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}