import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

function Detail(){
    const [info, setInfo] = useState({});
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    const getMovie = async() => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setInfo(json);
        setLoading(false);
    }
    console.log(info);
    useEffect(() => {
        getMovie();
    }, []);
    return loading ? null : <div>
        <h1><a href='https://yts.mx/movies/the-rest-i-make-up-2018'>{info.data.movie.title_long}</a></h1>
        <img src={info.data.movie.large_cover_image} />
        <p>{info.data.movie.description_full}</p>


    </div>
}

export default Detail;