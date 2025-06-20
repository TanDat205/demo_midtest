import React, { useState } from 'react';
import './App.css'; 
import Moviebanner from './Moviebanner.jsx'; 
import MovieList from './MovieList.jsx'; 
import movieData from './data.json'; 

function App() {
  const [selectedMovie, setSelectedMovie] = useState(movieData.data[0]);

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="App">
      <header className="header"> {}
        <div className="logo">Anonime</div>
        <nav className="nav">
          <ul>
            <li>Home</li>
            <li>List anime</li>
          </ul>
        </nav>
        <div className="search-bar"> {}
          <input type="text" placeholder="Search anime or movie" />
        </div>
      </header>

      <section className="explore-section"> {}
        <h2>Explore</h2>
        <p>What are you gonna watch today?</p>
        <Moviebanner movie={selectedMovie} /> {}
      </section>

      <section className="new-release-section"> {}
        <h3>Phát hành mới</h3> {}
        <MovieList movies={movieData.data} onMovieSelect={handleMovieSelect} /> {}
      </section>
    </div>
  );
}

export default App;