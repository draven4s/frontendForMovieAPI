import React from 'react';
const List = (props) => {
    const { movies } = props;
    if (!movies || movies.length === 0) return <p>No movies, sorry</p>;
    return (
        <ul>
            <h2 className='list-head'>Movies list found</h2>
            {movies.map((movie) => {
                return (
                    <li key={movie.id} className='list'>
                        <span className='movie-text'>{movie.title} </span>
                        <span className='movie-description'>{movie.plot}</span>
                    </li>
                );
            })}
        </ul>
    );
};
export default List;