import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Col, Row} from 'react-bootstrap';
import PropTypes from "prop-types";

import {itemsCountPerPage} from '../constants';

import User from './User';

class UsersList extends Component {

    render() {
        const { users } = this.props;
        return (
            <Row>
                <Col xs={12}>
                    {users.map(user => <User key={user.id} user={user}/>)}
                </Col>
            </Row>
        );
    }
}

export default connect((state, ownProps) => ({
    users: state.users.filter((user, index) => {
        return index < ownProps.activePage*itemsCountPerPage && index >= ownProps.activePage*itemsCountPerPage-itemsCountPerPage
    })
}))(UsersList);

UsersList.propTypes = {
    users: PropTypes.array.isRequired
};
