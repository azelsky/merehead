import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import Pagination from "react-js-pagination";
import { Redirect } from "react-router-dom";

import {itemsCountPerPage, pageRangeDisplayed} from "../constants";
import {connect} from "react-redux";
import {loadAllUsers} from "../AC";

import UsersList from './UsersList'
import Loader from 'react-loader-spinner';
import {LoaderWrapper} from './styled';
import {PageNotFound} from './PageNotFound'

class Home extends Component {
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
        if(users.length && match.params.currentPage > users.length / itemsCountPerPage) return <PageNotFound/>
        return (
            <div>
                <Row>
                    <UsersList activePage={activePage}/>
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
                        {Number(match.params.currentPage) !== activePage && <Redirect to={`${activePage}`}/>}
                    </Col>
                </Row>
            </div>
        );
    }
}

export default connect(state => ({
    users: state.users
}), {loadAllUsers})(Home);
