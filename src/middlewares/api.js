import {SUCCESS} from '../constants';

export default store => next => action => {
    const {callAPI, type} = action;
    if (!callAPI) return next(action);

    fetch(callAPI)
        .then(res => res.json())
        .then(response => next({type: type + SUCCESS, response}))
}