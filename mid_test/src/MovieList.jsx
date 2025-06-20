import React from 'react';
import MovieItem from './MovieItem.jsx'; // 

import './App.css';

function MovieList({ movies, onMovieSelect }) {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          movie={movie}
          onClick={() => onMovieSelect(movie)} 
        />
      ))}
    </div>
  );
}

export default MovieList;