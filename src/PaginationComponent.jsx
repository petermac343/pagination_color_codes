// PaginationComponent.js
import React, { useState } from 'react';
import ColoredDiv from './ColoredDiv';
import colors from './color';


const PaginationComponent = () => {
 

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(colors.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage === totalPages ? prevPage : prevPage + 1));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage === 5 ? prevPage : prevPage - 1));
  };

  const renderColoredDivs = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return colors.slice(startIndex, endIndex).map((color, index) => (
      <ColoredDiv key={index} color={color} />
    ));
  };

  const renderPagination = () => {
    const pageNumbers = [];
    const showMaxPage = 5; // Show only up to 5 page numbers

    const startPage = Math.max(1, currentPage - Math.floor(showMaxPage / 2));
    const endPage = Math.min(totalPages, startPage + showMaxPage - 1);

    for (let i = startPage; i <= endPage; i++) {
      const isActive = i === currentPage;
      const buttonStyle = {
        padding: '5px 10px',
        margin: '5px',
        borderRadius: '20px',
        border: isActive ? '1px solid purple' : '1px solid #ccc',
        backgroundColor: isActive ? 'purple' : 'white',
        color: isActive ? 'white' : 'black',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      };

      pageNumbers.push(
        <li key={i} onClick={() => setCurrentPage(i)} style={buttonStyle}>
          {i}
        </li>
      );
    }

    return (
      <div className="pg">
        <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center' }}>
          <li className="pagination-button"  onClick={handlePrevPage} style={{ cursor: 'pointer' }}>
            <button>Prev</button>
          </li>
          {pageNumbers}
          <li className="pagination-button"   onClick={handleNextPage} style={{ cursor: 'pointer' }}>
            <button>Next</button>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <div>
      <h1>Pagination</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>{renderColoredDivs()}</div>
      {renderPagination()}
    </div>
  );
};

export default PaginationComponent;
