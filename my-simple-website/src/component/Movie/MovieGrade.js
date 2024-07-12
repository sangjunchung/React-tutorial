import React, {useState, useEffect} from 'react';
import axios from 'axios';

const MovieRating = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')
        .then(res => {
            // 위 url은 [] 가 아니라 {} 에서 시작하므로 {} 데이터를 감싸줄
            // 임의의 변수명 res 사용 res = [].data 데이터 가져옴
            // 주소 값에 key 이름으로 작성된 data에서 movie 라는 키 값 안에 적힌 title과 이미지들을 가져올 것
            //          [ { data{movie{}}}] 를 가져올 것
            setMovies(res.data.data.movies); // {} 중괄호 들에서 data를 가지고 오겠다.
        }).catch(error => {
            alert(error+" 발생!");
        });
    }, []);

    return (
        <div className='movie-container'>
            <h1>평점 좋은 영화들</h1>
            <div className='movie-content'>
                {movies.map(movie => (
                    <div key={movie.id} className='movie'>
                        <img src={movie.medium_cover_image} />
                        <h2>{movie.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MovieRating;
