import React, {Component} from 'react';
import {Provider} from 'react-redux';

import store from './store';

import UsersList from './components/UsersList'

class App extends Component {

    render() {
        return (
            <Provider store = {store}>
                <UsersList/>
            </Provider>
        );
    }
}

export default App;
