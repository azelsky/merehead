import {LOAD_ALL_USERS, SUCCESS} from '../constants';

export default (users = [], action) => {
    const {type, response} = action;

    switch (type) {
        case LOAD_ALL_USERS + SUCCESS:
            return [...response.users]
    }

    return users
}