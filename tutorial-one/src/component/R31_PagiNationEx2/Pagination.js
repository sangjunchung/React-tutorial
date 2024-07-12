import "../R31_PagiNationEx/Pagination.css";

const Pagination = ({ itemPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalItems / itemPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const renderPageNum = () => {
    if(totalPages <= 5){
        return pageNumbers;
    }
   
    let startPage = Math.max(1, currentPage-2);
    let endPage = Math.min(totalPages, currentPage+2);
    
    if(startPage === 1){
        endPage = 5;
    } else if (startPage === 2){
        endPage = 6;
    }
    if(endPage === 9){
        startPage = 5;
    } else if (endPage === 10){
        startPage = 6;
    }

    return pageNumbers.slice(startPage -1, endPage);
  }

  return (
    <nav>
      <ul className="pagination">
            <li>
                <a onClick={()=> paginate(1)} href="!#" className="page-link">
                    &laquo;
                </a>
            </li>
            <li>
                <a onClick={()=> {currentPage > 1 ? paginate(currentPage-1):paginate(currentPage)}} href="!#" className="page-link">
                    &lt;
                </a>
            </li>
        {renderPageNum().map((num) => (
          <li
            key={num}
            className={`page-item ${currentPage === num ? "active" : ""}`}
          >
            <a onClick={() => paginate(num)} href="!#" className="page-link">
              {num}
            </a>
          </li>
        ))}
        <li>
            <a onClick={()=> {currentPage < totalPages ? paginate(currentPage+1):paginate(currentPage)}} href="!#" className="page-link">
                &gt;
            </a>
        </li>
        <li>
            <a onClick={()=> paginate(totalPages)} href="!#" className="page-link">
                &raquo;
            </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
