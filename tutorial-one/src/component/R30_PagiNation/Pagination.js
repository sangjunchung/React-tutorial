import './Pagination.css';
/*
itemPerPage : 한 페이지에 보여줄 항목 수
totalItem : 전체 항목 수
painate : 페이지 번호를 업데이트 하는 함수
currentPage : 현재 보고 있는 페이지 번호
*/

const Pagination = ({itemPerPage, totalItems, paginate, currentPage}) => {
    const pageNumbers = [];
    
    // 전체 항목 수와 페이지당 항목 수를 바탕으로 전체 페이지 수를 계산하고
    // 페이지 번호들에 페이지 번호를 저장시킬 것
    for(let i=1; i <= Math.ceil(totalItems/itemPerPage); i++){
        pageNumbers.push(i); // push = 값을 추가, pageNumbers에 만들어진 번호를 추가
    }

    return (
        <nav>
            <ul className="pagination">
                {/* className={`page-item ${currentPage === num ? 'active':''}`} 
                    page-item 이라는 className 이 존재
                    만약에 현재 페이지와 map에서 가리키는 번호가 일치하다면
                    className = "page-item active"
                    현재 페이지 번호와 map에서 가리키는 번호가 다르다면(현재 페이지 이외 다른 페이지 번호들)
                    className = "page-item"
                */}
                {pageNumbers.map(num => (
                    <li key={num} className={`page-item ${currentPage === num ? 'active':''}`}>
                        {/* 
                        !# : 클릭 이벤트가 발생했을 때 페이지가 새로고침 되는 것을 방지 
                        <a onClick={(e)=> {e.preventDefault()}; paginate(num);} href="/" >
                        */}
                        <a onClick={()=> paginate(num)} href="!#" className="page-link">
                            {num}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;