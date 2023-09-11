import React from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.css';
const Pagination = ({ setCurrentPage, pageCount }) => {
    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel=" >"
            onPageChange={(e) => setCurrentPage(e.selected + 1)}
            pageRangeDisplayed={4}
            pageCount={pageCount}
            previousLabel="< "
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            activeClassName="active"
        />
    );
};

export default Pagination;