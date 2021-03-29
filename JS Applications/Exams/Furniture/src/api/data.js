import * as api from "./api.js";

const host = 'http://localhost:3030';
api.settings.host = host

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getItems() {
    return api.get(host + '/data/catalog')
}

export async function createItem(data) {
    return await api.post(host+'/data/catalog',data)
}

export async function editItem(id,data) {
    return await api.put(host+'/data/catalog/'+id,data)
}