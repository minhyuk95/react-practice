import React, {useEffect, useState} from 'react'
import Movie from '../components/MovieComp';
function Home(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
        const json = await (await fetch('https://yts.mx/api/v2/list_movies.json?sort_by=year&minimum_rating=9')).json();
        setMovies(json.data.movies);
        setLoading(false);
    }
    useEffect(() => {
        getMovies();
        }, []);
    return (<div>
        <h1>The Movies {!loading ? '(' + movies.length + ')' : null }</h1>
        {loading ? <strong>Loading...</strong>:<ul>{movies.map(m => <Movie m={m}/>)}</ul>}
    </div>)
}

export default Home;