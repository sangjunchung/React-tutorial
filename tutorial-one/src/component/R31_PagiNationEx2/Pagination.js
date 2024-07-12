const Pagination = ({itemPerPage,totalItems,paginate,currentPage}) => {
    const pageNumbers = [];
    const totalPages = Math.ceil(totalItems/itemPerPage);

    for(let i=1; i<=totalPages; i++){
        pageNumbers.push(i);
    }

    return(
        <nav>
            <ul>
                {pageNumbers.map(num => (
                    <a onClick={() => paginate(num)} href="!#">
                        {num}
                    </a>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;