import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;


export async function getTeams() {
    return await api.get(host + '/data/teams')
}

export async function getTeamById(id) {
    return await api.get(host + '/data/teams/' + id)
}

export async function createTeam(team) {
    return await api.post(host + '/data/teams', team)
}

export async function editTeam(id, team) {
    return await api.put(host + '/data/teams/' + id, team)
}

export async function deleteTeam(id) {
    return await api.del(host + '/data/teams/' + id)
}

export async function getTeamCount() {
    return await api.get(host+ '/data/teams?count')
}