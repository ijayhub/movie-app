import React from 'react'
// import {Link} from 'react-router-dom'

const MovieList = ({movies}) => {
    return (
			<div>
				<div className='grid gap-4 grid-cols-4 grid-rows-4 movie'>
					{movies.map((movie) => (
						<div className='mt-8 movie-list' key={movie.imdbID}>
							<img src={movie.Poster} alt='movie' className='movie-img'/>
							<div className='p-8 leading-loose '>
								<h2 className='title-movie'>
									Title of the movie: {movie.Title}
								</h2>
								<p> Type: {movie.Type}</p>
								<small> Year of release: {movie.Year}</small>
							</div>
							
						</div>
					))}
				</div>
			</div>
		);
}

export default MovieList
