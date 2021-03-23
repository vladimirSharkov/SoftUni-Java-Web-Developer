import * as api from './api.js';

const host = 'http://localhost:3030'
api.settings.host = host

export async function getMovies() {
    return await api.get(host + '/data/movies');
}

export async function getMovieById(id) {
    return await api.get(host + '/data/movies/' + id)
}

export const login = api.login;
export const register = api.register;
export const logout = api.logout;


export async function createMovie(movie) {
    return await api.post(host + '/data/movies', movie)
}


export async function deleteMovie(id) {
    return await api.del(host + '/data/movies/' + id)
}

export async function editMovie(id, movie) {
    return await api.put(host + '/data/movies/' + id, movie)
}