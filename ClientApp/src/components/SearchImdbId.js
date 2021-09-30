import React, { Fragment, useEffect, useState } from 'react';
import List from './List';
import '../custom.css';
import axios from 'axios';
import withListLoading from './withListLoading';

function SearchImdbId() {
    const [data, setData] = useState({ moviesList: [] });
    const [query, setQuery] = useState('tt1515091');
    const [url, setUrl] = useState(
        '',
    );
    const [sortType, setSortType] = useState('title');
    const [isLoading, setIsLoading] = useState(false);
    const [firstRun, setIsFirstRun] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            if (url != '') {
                console.log(url);
                setIsFirstRun(false);
                const result = await axios(url);
                const temp = {moviesList : []}
                setData({ moviesList: [result.data.movie] });
                console.log(result.data);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [url])


    return (
        <Fragment>
            <input
                type="text"
                value={query}
                onChange={event => setQuery(event.target.value)}
            />
            <button
                type="button"
                onClick={() =>
                    setUrl(`http://localhost:15486/Movies/byImdbid?imdbid=${query}`)
                }
            >  Search
            </button>

                {firstRun ? (
                    <div>Search for something</div>
                ) : (
                    isLoading ? (
                    <div>Loading ...</div>
                        ) : (
                    <div>
                        {data.moviesList.map(item => (

                            <div key={item.imdbID} className="card mb-3" style={{ maxWidth: '780px' }} >
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <a href={item.imdbLink}><img src={item.poster} className="img-fluid rounded-start" alt="Not Found" ></img></a>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <a href={item.imdbLink}><h5 className="card-title">{item.title}</h5></a>
                                            <p className="card-text">Plot: {item.plot}</p>
                                            <p className="card-text">Genre: {item.genre}</p>
                                            <p className="card-text">Release year: {item.year}</p>
                                            <p className="card-text">Actors: {item.actors}</p>
                                            <p className="card-text">IMDB rating: {item.imdbRating}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))}

                    </div>
                    )
                )
            }

        </Fragment>
    );
}


export default SearchImdbId;