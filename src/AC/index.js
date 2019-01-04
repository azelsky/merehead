import {LOAD_ALL_USERS, baseURL, proxyUrl} from '../constants';

export function loadAllUsers() {
    return {
        type: LOAD_ALL_USERS,
        callAPI: `${proxyUrl}${baseURL}json/users.json`
    }
}