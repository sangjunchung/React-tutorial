import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './MovieRating.css';

const MovieRating = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')
        .then(res => {
            // 위 url은 [] 가 아니라 {} 에서 시작하므로 {} 데이터를 감싸줄
            // 임의의 변수명 res 사용 res = [].data 데이터 가져옴
            // 주소 값에 key 이름으로 작성된 data에서 movie 라는 키 값 안에 적힌 title과 이미지들을 가져올 것
            //          [ { data{movie{}}}] 를 가져올 것
            setMovies(res.data.data.movies); // {} 중괄호 들에서 data를 가지고 오겠다.
            setLoading(false);
        }).catch(error => {
            alert(error+" 발생!");
        });
    }, []);

    // 만약에 로딩 중이라면 로딩 div를 보여줌
    // 자바스크립트에서 innerHTML을 사용했던 것처럼 react에서도 innerHTML을 사용할 수 있음
    if(loading) return <div>로딩 중입니다.</div>;
    /*
        영화 데이터에서 이미지가 있기 때문에 데이터가 느리게 가져옴
        사용자에게 화면이 보여지기 전에 로딩 중이라는 표시를 보여줌으로
        사용자는 조금 더 기다릴수 있는 시간을 갖게됨
        처음에 로딩 true로 설정해서 임시 화면을 띄워놓고
        데이터를 모두 가지고 오면 로딩을 false 로 변경해서 
        기존 리턴에 작성한 html 코드를 보여줌
    */

    return (
        <div className='movie-container'>
            <h1>평점 좋은 영화들</h1>
            <div className='movie-content'>
                {movies.map(movie => (
                    <div key={movie.id} className='movie'>
                        <img src={movie.medium_cover_image} />
                        <h2>{movie.title}</h2>
                        <p>평점 : {movie.rating}</p>
                        <p>개봉년도 : {movie.year}</p>
                        <p>영화시간 : {movie.runtime} m</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MovieRating;
