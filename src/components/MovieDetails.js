import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';



const MovieDetails = ({search}) => {
    const { id } = useParams()
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?t=${search}&apikey=80c5285c` + id)
					.then((res) => {
						return res.json();
					})
					.then((data) => {
						setMovie(data);
					});
    },[id, search]);
    
    return (
        <>

        
            <div className="movie-details">
                
                {movie && (<article>
                    <h2>{movie.Poster}</h2>

                </article>)}
            </div>
        </>
    )
}

export default MovieDetails
