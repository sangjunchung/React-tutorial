import React, {useState, useEffect} from 'react';
import Pagination from './Pagination';
import axios from 'axios';

const Board = () => {
    //데이터 정보 가져오는 변수명 작성
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage] = useState(10);

    // 현재 페이지에서 첫번째 항목과 마지막 항목, 게시글리스트 체크
    const lastItem = currentPage * itemPerPage;
    const firstItem = lastItem - itemPerPage;
    const itemList = data.slice(firstItem, lastItem);

    // 이동할 페이지를 클릭할 때 사용할 핸들러
    const paginate = (pageNumbers) => setCurrentPage(pageNumbers);
    
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            setData(res.data);
        }).catch(error => {
            alert(error+" 발생");
        })
    }, [])

    return(
        <div className='container'>
            <h1>리액트 페이지네이션 예제</h1>
            {/* ul 태그 안에는 각 항목들의 제목이 보여질 것 */}
            <ul className='list-group mb-4'>
                {itemList.map(item => (
                    <li key={item.id} className='list-group-item'>
                        {item.title}
                    </li>
                ))}
            </ul>
            {/* 페이지네이션은 아래 페이지네이션 태그에서 동작 */}
            <Pagination
                itemPerPage={itemPerPage}
                totalItems={data.length}
                paginate={paginate}
                currentPage={currentPage} />
        </div>
    )
}

export default Board;