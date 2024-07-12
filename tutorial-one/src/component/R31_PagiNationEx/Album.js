import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Pagination from './Pagination';

const Album = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage] = useState(5);
    const [loading, setLoading] = useState(true);

    const lastItem = currentPage * itemPerPage;
    const firstItem = lastItem - itemPerPage;
    const albumList = data.slice(firstItem, lastItem);
    
    const paginate = (pageNumbers) => setCurrentPage(pageNumbers);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(result=>{
            setData(result.data);
            setLoading(false);
        })
        .catch(err => {
            alert(err+' 발생!');
        })
    },[])

    if(loading){
         return(
            <div><h1><b>Loading...</b></h1></div>
         )
    }

    return(
        <div>
            <h1>앨범 페이지네이션</h1>
            <ul className='list-group mb-4'>
                {albumList.map(photo => (
                    <li key={photo.id} className='list-group-item'>
                        <img src={photo.thumbnailUrl} />
                        {photo.title}
                    </li>
                ))}
            </ul>
            <Pagination
                itemPerPage={itemPerPage}
                totalItems={data.length}
                paginate={paginate}
                currentPage={currentPage} />
        </div>
    )
}

export default Album;