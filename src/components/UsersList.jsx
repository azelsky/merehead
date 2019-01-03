import React, {Component} from 'react';
import {connect} from 'react-redux'
import {loadAllUsers} from '../AC'

class UsersList extends Component {

    componentDidMount() {
        this.props.loadAllUsers();
    }

    render() {
        const {users} = this.props;
        return (
            users.map(user => {})
        );
    }
}

export default connect(state => ({
    users: state.users
}), {loadAllUsers})(UsersList);
