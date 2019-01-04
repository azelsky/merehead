import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadAllUsers} from '../AC';
import Pagination from "react-js-pagination";
import Loader from 'react-loader-spinner';
import {Col, Row} from 'react-bootstrap';
import { Redirect } from "react-router-dom";

import {pageRangeDisplayed, itemsCountPerPage} from '../constants';

import User from './User';
import {LoaderWrapper} from './styled';



class UsersList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activePage: Number(this.props.match.params.currentPage) || 1
        };
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(pageNumber) {
        this.setState({activePage: pageNumber});
    }

    componentDidMount() {
        this.props.loadAllUsers();
    }

    render() {
        const { users, match } = this.props;
        const { activePage } = this.state;
        if (!users.length ) return (
            <LoaderWrapper>
                <Loader
                    type="Puff"
                    color="#000"
                    height={'100px'}
                />
            </LoaderWrapper>
        );
        if(users.length && match.params.currentPage > users.length / 5) return <h1>Page not found 404</h1>
        return (
            <div>
                <Row>
                    <Col xs={12}>
                            {users.map((user, index) => {
                                if(index < activePage*itemsCountPerPage &&
                                    index >= activePage*itemsCountPerPage-itemsCountPerPage)
                                    return <User key={user.id} user={user}/>
                            })}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Pagination
                            activePage={activePage}
                            itemsCountPerPage={itemsCountPerPage}
                            totalItemsCount={users.length}
                            pageRangeDisplayed={pageRangeDisplayed}
                            onChange={this.handlePageChange}
                        />
                        {match.params.currentPage != activePage && <Redirect to={`${activePage}`}/>}
                    </Col>
                </Row>
            </div>
        );
    }
}

export default connect(state => ({
    users: state.users
}), {loadAllUsers})(UsersList);
