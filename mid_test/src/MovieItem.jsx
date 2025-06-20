import React from 'react';

import './App.css';

function MovieItem({ movie, onClick }) {
  return (
    <div className="movie-card" onClick={onClick}>
      <img src={movie.image} alt={movie.movieName} />
      <p>Episode {movie.episode}</p>
      <h4>{movie.movieName}</h4>
    </div>
  );
}

export default MovieItem;