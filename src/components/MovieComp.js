import {Link} from 'react-router-dom';
import React from 'react';

function Movie({m}){
    return <li key={m.id}>
        <h2>
            <Link to={`/movie/${m.id}`}>{m.title_long} {m.rating}</Link>
        </h2>
        <img src={m.medium_cover_image} />
        <p>{m.summary}</p>
        <ul>{m.genres.map(g => <li key={g}>{g}</li>)}</ul>
    </li>
}

export default Movie;