import React, { useState, useEffect } from 'react'
import MovieList from './MovieList';
import Navigation from './Navigation';


const Home = () => {
	const [movies, setMovies] = useState([]);
	const [search, setSearch] = useState('');
	const [loading, setLoading] = useState(true);
	
	

	useEffect(() => {
		setTimeout(() => {
			fetch(`http://www.omdbapi.com/?s=${search}&apikey=80c5285c`)
				.then((res) => {
					return res.json();
				})
				.then((data) => {
					setMovies(data.Search);
					setLoading(false);
				})
				.catch((err) => {
					console.log(err.message);
				});
		},700)
		
	    },[search])

	return (
		<>
			<div>
				<Navigation search={search} setSearch={setSearch} />
			</div>
			<div className='container mx-auto'>
				{loading && <div className='div-loading'>Loading...</div>}
				{!loading && movies && <MovieList movies={movies} search={search} />}
				
			</div>
		</>
	);
}

export default Home
