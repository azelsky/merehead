import React, {Component} from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

import {Pagination, PaginationItem} from './styled';

class PaginationRouter extends Component {

    componentDidUpdate(prewProps) {
        if(prewProps.routePage !== this.props.routePage){
            this.props.handleRoute(this.props.routePage);
        }
    }

    counterOfPage() {
        const {itemsCountPerPage, totalItemsCount} = this.props;
        let counter;
        if (totalItemsCount % itemsCountPerPage > 0) {
            counter = Math.ceil(totalItemsCount / itemsCountPerPage);
        } else counter = totalItemsCount / itemsCountPerPage;
        let pages = [];
        for (let i = 1; i <= counter; i++){
            pages.push(i);
        }
        return pages;
    }

    render() {
        const pages = this.counterOfPage();
        return (
            <Pagination>
                {pages.map(page => (
                    <Link to={`/${page}`} key={page}>
                        <PaginationItem active={this.props.activePage === page.toString()}>{`${page}`}</PaginationItem>
                    </Link>
                ))}
            </Pagination>
        );
    }
}

export default PaginationRouter;

PaginationRouter.propTypes = {
    activePage: PropTypes.string.isRequired,
    itemsCountPerPage: PropTypes.number.isRequired,
    totalItemsCount: PropTypes.number.isRequired,
    routePage: PropTypes.string,
    handleRoute: PropTypes.func
};
