import './Pagination.css';
/*
itemPerPage : 한 페이지에 보여줄 항목 수
totalItem : 전체 항목 수
painate : 페이지 번호를 업데이트 하는 함수
currentPage : 현재 보고 있는 페이지 번호
*/

const Pagination = ({itemPerPage, totalItems, paginate, currentPage}) => {
    const pageNumbers = [];
    const totalPages = Math.ceil(totalItems/itemPerPage);
    // 전체 항목 수와 페이지당 항목 수를 바탕으로 전체 페이지 수를 계산하고
    // 페이지 번호들에 페이지 번호를 저장시킬 것
    for(let i=1; i <= totalPages; i++){
        pageNumbers.push(i); // push = 값을 추가, pageNumbers에 만들어진 번호를 추가
    }

    // 페이지 번호 새로고침 함수
    // 모든 페이지 번호를 한 번에 보여주는 것이 아니라 10개씩 보여줌
    const renderPageNumber = () => {
        if(totalPages <= 10){
            return pageNumbers;
        }
        // 시작 페이지 번호
        // currentPage-5 = 현재 페이지에서 5를 뺀 값
        // 현재 페이지를 중심으로 해서 앞쪽에 있는 5개의 페이지 번호를 표시할수 있도록한 것
        // 시작페이지 번호가 -가 나올 것을 방지 Math.max(둘 중 큰 수를 반환)
        // Math.max(1, -2) 시작페이지는 무조건 1을 반환
        const startPage = Math.max(1, currentPage-5);
        // 끝 페이지 번호
        // totalPages = 가장 큰 수
        // 끝 페이지 번호는 전체 페이지 수를 초과할 수 없기 때문에
        // 전체 페이지 수인 totalPages 초과의 값을 못 가져오도록 설정
        // Math.min(둘 중 작은 수를 반환)
        const endPage = Math.min(totalPages, currentPage+4);
        // 현재 페이지를 중심으로 해서 최대 10개의 페이지 번호를 전달
        // startPage = 1 , 배열의 index = 0
        return pageNumbers.slice(startPage -1, endPage);
    }

    return (
        <nav>
            <ul className="pagination">
                {/* 페이지 10페이지 까지만 보여주고 */}
                {/* << 화살표 이용해서 이전으로 기능 만들기 */}
                {currentPage > 1 && (
                <li>
                    <a onClick={()=> paginate(currentPage-1)} href="!#" className="page-link">
                        &laquo;
                    </a>
                </li>
                )}
                {/* 모든 페이지 번호 */}
                {renderPageNumber().map(num => (
                    <li key={num} className={`page-item ${currentPage === num ? 'active':''}`}>
                        <a onClick={()=> paginate(num)} href="!#" className="page-link">
                            {num}
                        </a>
                    </li>
                ))}
                {currentPage < totalPages && (
                <li>
                    <a onClick={()=> paginate(currentPage+1)} href="!#" className="page-link">
                        &raquo;
                    </a>
                </li>
                )}
            </ul>
        </nav>
    )
}

export default Pagination;