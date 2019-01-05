import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Col} from 'react-bootstrap';
import PropTypes from "prop-types";

import {PaginationWrapper, PaginationItem} from './styled';

class Pagination extends Component {

    componentDidUpdate(prewProps) {
        if(prewProps.routePage !== this.props.routePage){
            this.props.handleRoute(this.props.routePage);
        }
    }

    buildPages() {
        const {itemsCountPerPage, totalItemsCount, activePage} = this.props;
        let counter;
        if (totalItemsCount % itemsCountPerPage > 0) {
            counter = Math.ceil(totalItemsCount / itemsCountPerPage);
        } else counter = totalItemsCount / itemsCountPerPage;
        let pages = [];
        for (let page = 1; page <= counter; page++){
            pages.push(
                <Link to={`/${page}`} key={page}>
                    <PaginationItem active={activePage === page.toString()}>{`${page}`}</PaginationItem>
                </Link>
            );
        }
        return pages;
    }

    render() {
        const pages = this.buildPages();
        return (
            <Col xs={12}>
                <PaginationWrapper>
                    {pages.map(page => page)}
                </PaginationWrapper>
            </Col>
        );
    }
}

export default Pagination;

Pagination.propTypes = {
    activePage: PropTypes.string.isRequired,
    itemsCountPerPage: PropTypes.number.isRequired,
    totalItemsCount: PropTypes.number.isRequired,
    routePage: PropTypes.string,
    handleRoute: PropTypes.func
};
