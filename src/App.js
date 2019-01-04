import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Grid} from 'react-bootstrap'
import { HashRouter as Router, Route, Redirect, Switch} from "react-router-dom";

import store from './store';

import FilterUsers from './components/Home'

class App extends Component {

    render() {
        return (
            <Provider store = {store}>
                <Router>
                    <Grid>
                        <Switch>
                            <Route path="/:currentPage" render={({match}) => <FilterUsers match ={match} />}/>
                            <Redirect from="/" to="/1" />
                        </Switch>
                    </Grid>
                </Router>
            </Provider>
        );
    }
}

export default App;
