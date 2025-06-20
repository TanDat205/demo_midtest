import React from 'react';

import './App.css';

function Moviebanner({ movie }) { 
  if (!movie) {
    return null;
  }

  return (
    <div className="main-banner">
      <img src={movie.image} alt={movie.movieName} className="banner-image" />
      <div className="banner-content">
        <h3>{movie.movieName}</h3>
        <p>{movie.description}</p>
      </div>
    </div>
  );
}

export default Moviebanner;