import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import Loader from 'react-loader-spinner';
import {connect} from "react-redux";

import {itemsCountPerPage} from "../constants";
import {loadAllUsers} from "../AC";

import UsersList from './UsersList'
import {LoaderWrapper} from './styled';
import {PageNotFound} from './PageNotFound';
import PaginationRouter from './PaginationRouter';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: Number(this.props.match.params.currentPage)
        };
        this.handleRoute = this.handleRoute.bind(this);
    }

    componentDidMount() {
        this.props.loadAllUsers();
    }

    handleRoute(pageNumber) {
        this.setState({activePage: pageNumber});
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
                        <PaginationRouter
                            activePage={activePage}
                            itemsCountPerPage={itemsCountPerPage}
                            totalItemsCount={users.length}
                            routePage={this.props.match.params.currentPage}
                            handleRoute={this.handleRoute}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default connect(state => ({
    users: state.users
}), {loadAllUsers})(Home);
