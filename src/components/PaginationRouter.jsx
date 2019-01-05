import React, {Component} from 'react';
import {Link} from "react-router-dom";

import {Pagination, PaginationItem} from './styled'

class PaginationRouter extends Component {

    componentDidUpdate(prewProps) {
        if(prewProps.routePage !== this.props.routePage){
            this.props.handleRoute(Number(this.props.routePage));
        }
    }

    counterOfPage() {
        const {itemsCountPerPage, totalItemsCount} = this.props;
        let counter;
        if (totalItemsCount % itemsCountPerPage > 0) {
            counter = Math.ceil(totalItemsCount / itemsCountPerPage);
        } else counter = totalItemsCount / itemsCountPerPage;
        let pages = [];
        for (let i = 1; i<= counter; i++){
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
                        <PaginationItem active={this.props.activePage === page}>{`${page}`}</PaginationItem>
                    </Link>
                ))}
            </Pagination>
        );
    }
}

export default PaginationRouter;
