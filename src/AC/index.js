import {LOAD_ALL_USERS, baseURL} from '../constants';

export function loadAllUsers() {
    return {
        type: LOAD_ALL_USERS,
        callAPI: 'http://www.mocky.io/v2/5c2e161e2f00009f52175440'
    }
}